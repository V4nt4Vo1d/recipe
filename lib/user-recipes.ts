import { createClient } from '@/lib/supabase/client'
import type { Block, Recipe } from '@/lib/recipes'

// User-submitted recipes are stored in Supabase when credentials are provided,
// with localStorage kept as an offline fallback.  When Supabase is not yet
// configured the site continues to work exactly as before.

const KEY_PREFIX = 'family-recipes:'
const IMAGE_BUCKET = 'recipe-images'

export type UserRecipe = Recipe & {
  userAdded: true
  createdAt: number
  imagePath?: string
}

const CATEGORY_FALLBACK = 'Family Additions'

function keyFor(slug: string) {
  return `${KEY_PREFIX}${slug}`
}

/** True when real Supabase credentials have been supplied. */
function supabaseReady(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
  const cleanUrl = url.trim()
  const cleanKey = key.trim()
  const urlLooksReal =
    cleanUrl.startsWith('https://') &&
    !cleanUrl.includes('YOUR_SUPABASE_URL') &&
    cleanUrl.length > 'https://x'.length
  const keyLooksReal =
    cleanKey.length > 20 &&
    !cleanKey.includes('YOUR_KEY')
  return urlLooksReal && keyLooksReal
}

// ── localStorage helpers (always available) ───────────────────────────────

function localLoad(slug: string): UserRecipe[] {
  if (typeof window === 'undefined') return []
  try {
    const canResolveImageUrl = supabaseReady()
    const raw = window.localStorage.getItem(keyFor(slug))
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return (parsed as UserRecipe[]).map((recipe) => ({
      ...recipe,
      category: normalizeCategory(recipe.category),
      imageUrl:
        recipe.imageUrl ||
        (canResolveImageUrl && recipe.imagePath
          ? publicUrlForImagePath(recipe.imagePath)
          : undefined),
    }))
  } catch {
    return []
  }
}

function localSave(slug: string, recipes: UserRecipe[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(keyFor(slug), JSON.stringify(recipes))
}

// ── Public API ────────────────────────────────────────────────────────────

export async function loadUserRecipes(slug: string): Promise<UserRecipe[]> {
  if (supabaseReady()) {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('user_recipes')
        .select('id, title, description, category, image_path, blocks, created_at')
        .eq('family_slug', slug)
        .order('created_at', { ascending: false })
      if (!error && data) {
        return data.map((row: Record<string, unknown>) => {
          const imagePath = (row.image_path ?? '') as string
          return {
            id: row.id as string,
            title: row.title as string,
            desc: (row.description ?? '') as string,
            category: normalizeCategory((row.category ?? CATEGORY_FALLBACK) as string),
            imageUrl: imagePath ? publicUrlForImagePath(imagePath) : undefined,
            imagePath: imagePath || undefined,
            blocks: row.blocks as Block[],
            userAdded: true as const,
            createdAt: new Date(row.created_at as string).getTime(),
          }
        })
      }
    } catch {
      // fall through to localStorage
    }
  }
  return localLoad(slug)
}

export async function saveUserRecipe(slug: string, recipe: UserRecipe): Promise<void> {
  // Always write to localStorage so the recipe appears immediately offline.
  localSave(slug, [...localLoad(slug), recipe])

  if (supabaseReady()) {
    try {
      const supabase = createClient()
      await supabase.from('user_recipes').upsert({
        id: recipe.id,
        family_slug: slug,
        title: recipe.title,
        description: recipe.desc,
        category: recipe.category,
        image_path: recipe.imagePath ?? null,
        blocks: recipe.blocks,
        created_at: new Date(recipe.createdAt).toISOString(),
      })
    } catch {
      // localStorage write above is the fallback
    }
  }
}

export async function deleteUserRecipe(slug: string, id: string): Promise<void> {
  const current = localLoad(slug)
  const recipe = current.find((r) => r.id === id)
  localSave(slug, current.filter((r) => r.id !== id))

  if (supabaseReady()) {
    try {
      const supabase = createClient()
      if (recipe?.imagePath) {
        await supabase.storage.from(IMAGE_BUCKET).remove([recipe.imagePath])
      }
      await supabase.from('user_recipes').delete().eq('id', id)
    } catch {
      // already removed from localStorage
    }
  }
}

function publicUrlForImagePath(path: string): string {
  const supabase = createClient()
  const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path)
  return data.publicUrl
}

function extensionForFile(file: File): string {
  const byName = file.name.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1]
  if (byName) return byName
  if (file.type === 'image/png') return 'png'
  if (file.type === 'image/webp') return 'webp'
  if (file.type === 'image/gif') return 'gif'
  return 'jpg'
}

export async function uploadRecipeImage(slug: string, recipeId: string, file: File): Promise<{ path: string; url: string }> {
  if (!supabaseReady()) {
    throw new Error('Image upload requires Supabase to be configured.')
  }
  const supabase = createClient()
  const safeFamily = slugify(slug) || 'family'
  const ext = extensionForFile(file)
  const path = `${safeFamily}/${recipeId}-${Date.now().toString(36)}.${ext}`

  const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file, {
    cacheControl: '3600',
    contentType: file.type || undefined,
    upsert: false,
  })
  if (error) {
    throw new Error(error.message)
  }

  return {
    path,
    url: publicUrlForImagePath(path),
  }
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function normalizeCategory(input: string): string {
  const raw = input.trim()
  if (!raw) return CATEGORY_FALLBACK

  const normalized = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const dessertAliases = new Set([
    'dessert',
    'desserts',
    'sweet',
    'sweets',
    'treat',
    'treats',
    'baked good',
    'baked goods',
  ])
  if (dessertAliases.has(normalized)) return 'Desserts'

  const mainAliases = new Set([
    'main',
    'mains',
    'main dish',
    'main dishes',
    'entree',
    'entrees',
    'dinner',
    'dinners',
  ])
  if (mainAliases.has(normalized)) return 'Main Dishes'

  return raw
}

// Split a pasted block of text into clean, non-empty lines. Strips common
// list markers like "-", "*", "1.", "1)" so pasted content looks tidy.
export function linesFromText(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, '').trim())
    .filter((line) => line.length > 0)
}

export type RecipeFormInput = {
  family: string
  title: string
  description: string
  category: string
  source: string
  ingredients: string
  instructions: string
  note: string
}

export function buildRecipeFromForm(input: RecipeFormInput): UserRecipe {
  const blocks: Block[] = []

  const source = input.source.trim()
  if (source) {
    blocks.push({ type: 'meta', text: `Source: ${source}.` })
  }

  const ingredients = linesFromText(input.ingredients)
  if (ingredients.length > 0) {
    blocks.push({ type: 'ingredients', items: ingredients })
  }

  const steps = linesFromText(input.instructions)
  if (steps.length > 0) {
    blocks.push({ type: 'steps', items: steps })
  }

  const note = input.note.trim()
  if (note) {
    blocks.push({ type: 'note', text: note })
  }

  const base = slugify(input.title) || 'recipe'
  const id = `${input.family}-${base}-${Date.now().toString(36)}`

  return {
    id,
    title: input.title.trim(),
    desc: input.description.trim(),
    category: normalizeCategory(input.category),
    blocks,
    userAdded: true,
    createdAt: Date.now(),
  }
}

// Produces a clean JSON snippet the family can copy/download and send along
// to be committed into lib/recipes.ts for everyone.
export function recipeToSnippet(recipe: UserRecipe): string {
  const { userAdded, createdAt, imagePath, ...clean } = recipe
  return JSON.stringify(clean, null, 2)
}
