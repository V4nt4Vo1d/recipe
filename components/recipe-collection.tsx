'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Clock, Plus, Search, Soup, Sparkles, Trash2, Users } from 'lucide-react'
import type { Family, Recipe } from '@/lib/recipes'
import { deleteUserRecipe, loadUserRecipes, type UserRecipe } from '@/lib/user-recipes'

function RecipeBody({ recipe }: { recipe: Recipe }) {
  return (
    <div className="grid gap-8 border-t border-border/70 px-5 py-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-7">
      <div>
        {recipe.blocks
          .filter((b) => b.type === 'meta')
          .map((b, i) => (
            <p key={`meta-${i}`} className="text-sm leading-relaxed text-muted-foreground">
              {'text' in b ? b.text : ''}
            </p>
          ))}

        {recipe.blocks.map((b, i) =>
          b.type === 'ingredients' ? (
            <div key={`ing-${i}`} className="mt-5">
              <h4 className="flex items-center gap-2 font-serif text-base font-semibold text-foreground">
                <Soup className="size-4 text-primary" aria-hidden="true" />
                Ingredients
              </h4>
              <ul className="mt-3 space-y-2">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>

      <div>
        {recipe.blocks.map((b, i) =>
          b.type === 'steps' ? (
            <div key={`steps-${i}`} className="mb-5">
              <h4 className="font-serif text-base font-semibold text-foreground">
                Directions
              </h4>
              <ol className="mt-3 space-y-4">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-sm font-semibold text-secondary-foreground">
                      {j + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-foreground/90">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : b.type === 'note' ? (
            <p
              key={`note-${i}`}
              className="mb-3 rounded-md border-l-2 border-accent bg-accent/10 px-4 py-3 text-sm italic leading-relaxed text-foreground/80"
            >
              {b.text}
            </p>
          ) : null,
        )}
      </div>
    </div>
  )
}

function RecipeCard({
  recipe,
  userAdded = false,
  onDelete,
}: {
  recipe: Recipe
  userAdded?: boolean
  onDelete?: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const meta = recipe.blocks.find((b) => b.type === 'meta')
  const ingredientCount = recipe.blocks
    .filter((b) => b.type === 'ingredients')
    .reduce((n, b) => n + (b.type === 'ingredients' ? b.items.length : 0), 0)

  return (
    <article
      id={recipe.id}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
      >
        {recipe.imageUrl && (
          <div className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-background sm:block">
            <img
              src={recipe.imageUrl}
              alt={`${recipe.title} photo`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground text-balance">
              {recipe.title}
            </h3>
            {userAdded && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-accent">
                <Sparkles className="size-3" aria-hidden="true" />
                Added by family
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
            {recipe.desc}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {ingredientCount > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Soup className="size-3.5" aria-hidden="true" />
                {ingredientCount} ingredients
              </span>
            )}
            {meta && 'text' in meta && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden="true" />
                {meta.text}
              </span>
            )}
          </div>
        </div>
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-transform duration-200 ${
            open ? 'rotate-180 bg-primary text-primary-foreground' : ''
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="size-4" />
        </span>
      </button>
      {open && (
        <>
          <RecipeBody recipe={recipe} />
          {userAdded && onDelete && (
            <div className="flex justify-end border-t border-border/70 px-5 py-3 md:px-7">
              <button
                type="button"
                onClick={() => onDelete(recipe.id)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-3.5" aria-hidden="true" />
                Remove from this browser
              </button>
            </div>
          )}
        </>
      )}
    </article>
  )
}

export function RecipeCollection({ family }: { family: Family }) {
  const [query, setQuery] = useState('')
  const [userRecipes, setUserRecipes] = useState<UserRecipe[]>([])

  useEffect(() => {
    loadUserRecipes(family.slug).then(setUserRecipes)
  }, [family.slug])

  const userIds = useMemo(
    () => new Set(userRecipes.map((r) => r.id)),
    [userRecipes],
  )

  const handleDelete = async (id: string) => {
    await deleteUserRecipe(family.slug, id)
    setUserRecipes((prev) => prev.filter((r) => r.id !== id))
  }

  const categories = useMemo(() => {
    const all: Recipe[] = [...family.recipes, ...userRecipes]
    const map = new Map<string, Recipe[]>()
    const q = query.trim().toLowerCase()
    for (const r of all) {
      if (
        q &&
        !r.title.toLowerCase().includes(q) &&
        !r.desc.toLowerCase().includes(q)
      ) {
        continue
      }
      const key = r.category || 'Recipes'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(r)
    }
    return Array.from(map, ([name, recipes]) => ({ name, recipes }))
  }, [family, userRecipes, query])

  const total = categories.reduce((n, c) => n + c.recipes.length, 0)

  return (
    <div>
      <div className="relative mb-10 max-w-md">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search the ${family.short} recipes...`}
          aria-label={`Search the ${family.short} recipes`}
          className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {total === 0 ? (
        query.trim() ? (
          <p className="rounded-xl border border-dashed border-border bg-card/60 px-6 py-12 text-center text-sm text-muted-foreground">
            No recipes match &ldquo;{query}&rdquo;. Try a different search.
          </p>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-card/60 px-6 py-14 text-center">
            <p className="font-serif text-xl font-semibold text-foreground">
              No recipes here yet
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              This collection is just getting started. Be the first to add a{' '}
              {family.short} family recipe.
            </p>
            <Link
              href="/upload"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Plus className="size-4" aria-hidden="true" />
              Add a recipe
            </Link>
          </div>
        )
      ) : (
        <div className="space-y-14">
          {categories.map((category) => (
            <section key={category.name} aria-labelledby={`cat-${category.name}`}>
              <div className="mb-6 flex items-center gap-4">
                <h2
                  id={`cat-${category.name}`}
                  className="font-serif text-2xl font-semibold tracking-tight text-foreground"
                >
                  {category.name}
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  <Users className="size-3.5" aria-hidden="true" />
                  {category.recipes.length}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <div className="grid gap-4">
                {category.recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    userAdded={userIds.has(recipe.id)}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
