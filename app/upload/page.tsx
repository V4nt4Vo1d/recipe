'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ClipboardCopy,
  Download,
  Plus,
  UtensilsCrossed,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { familyList } from '@/lib/recipes'
import {
  buildRecipeFromForm,
  recipeToSnippet,
  saveUserRecipe,
  type RecipeFormInput,
  type UserRecipe,
} from '@/lib/user-recipes'

const empty: RecipeFormInput = {
  family: '',
  title: '',
  description: '',
  category: '',
  source: '',
  ingredients: '',
  instructions: '',
  note: '',
}

const fieldClass =
  'w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export default function UploadPage() {
  const [form, setForm] = useState<RecipeFormInput>(empty)
  const [saved, setSaved] = useState<UserRecipe | null>(null)
  const [copied, setCopied] = useState(false)

  const targetFamily = familyList.find(
    (f) => f.slug === (saved ? saved.id.split('-')[0] : form.family),
  )

  const update = (key: keyof RecipeFormInput, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const canSubmit =
    form.family.trim() !== '' &&
    form.title.trim() !== '' &&
    form.ingredients.trim() !== '' &&
    form.instructions.trim() !== ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    const recipe = buildRecipeFromForm(form)
    await saveUserRecipe(form.family, recipe)
    setSaved(recipe)
    setCopied(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopy = async () => {
    if (!saved) return
    try {
      await navigator.clipboard.writeText(recipeToSnippet(saved))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleDownload = () => {
    if (!saved) return
    const blob = new Blob([recipeToSnippet(saved)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${saved.id}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const resetForm = () => {
    setForm(empty)
    setSaved(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader active="/upload" />

      <main className="flex-1">
        <section className="border-b border-border/70 bg-secondary/30">
          <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <UtensilsCrossed className="size-3.5" aria-hidden="true" />
              Add to the archive
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance md:text-5xl">
              Share a family recipe
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              Pick your family, then paste the ingredients and instructions.
              Your recipe is saved right here in your browser and appears on
              that family&apos;s page instantly. You can also copy or download a
              snippet to have it added to the site permanently.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 md:px-8">
          {saved && targetFamily && (
            <div className="mb-10 rounded-2xl border border-accent/40 bg-accent/10 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    &ldquo;{saved.title}&rdquo; was added
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    It&apos;s now saved in this browser and showing on the{' '}
                    {targetFamily.name} page.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={`/${targetFamily.slug}#${saved.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                      View it on the {targetFamily.short} page
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {copied ? (
                        <Check className="size-4" aria-hidden="true" />
                      ) : (
                        <ClipboardCopy className="size-4" aria-hidden="true" />
                      )}
                      {copied ? 'Copied' : 'Copy snippet'}
                    </button>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Download
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Add another recipe
                  </button>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <fieldset className="space-y-5">
              <legend className="font-serif text-lg font-semibold text-foreground">
                The basics
              </legend>

              <div>
                <label htmlFor="family" className="mb-1.5 block text-sm font-medium text-foreground">
                  Family collection <span className="text-primary">*</span>
                </label>
                <select
                  id="family"
                  required
                  value={form.family}
                  onChange={(e) => update('family', e.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a family&hellip;
                  </option>
                  {familyList.map((f) => (
                    <option key={f.slug} value={f.slug}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-foreground">
                  Recipe name <span className="text-primary">*</span>
                </label>
                <input
                  id="title"
                  required
                  value={form.title}
                  onChange={(e) => update('title', e.target.value)}
                  placeholder="e.g. Grandma's Apple Pie"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Short description
                </label>
                <input
                  id="description"
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  placeholder="One line about the dish (optional)"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="category"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Category
                  </label>
                  <input
                    id="category"
                    value={form.category}
                    onChange={(e) => update('category', e.target.value)}
                    placeholder="e.g. Desserts (optional)"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="source" className="mb-1.5 block text-sm font-medium text-foreground">
                    Recipe from
                  </label>
                  <input
                    id="source"
                    value={form.source}
                    onChange={(e) => update('source', e.target.value)}
                    placeholder="Who shared it (optional)"
                    className={fieldClass}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="font-serif text-lg font-semibold text-foreground">
                Ingredients &amp; instructions
              </legend>

              <div>
                <label
                  htmlFor="ingredients"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Ingredients <span className="text-primary">*</span>
                </label>
                <p className="mb-2 text-xs text-muted-foreground">
                  Paste your list &mdash; one ingredient per line. Bullets or
                  numbers are cleaned up automatically.
                </p>
                <textarea
                  id="ingredients"
                  required
                  rows={7}
                  value={form.ingredients}
                  onChange={(e) => update('ingredients', e.target.value)}
                  placeholder={'2 cups flour\n1 tsp baking soda\n1/2 cup butter, softened'}
                  className={`${fieldClass} resize-y font-mono leading-relaxed`}
                />
              </div>

              <div>
                <label
                  htmlFor="instructions"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Instructions <span className="text-primary">*</span>
                </label>
                <p className="mb-2 text-xs text-muted-foreground">
                  One step per line. Each line becomes a numbered step.
                </p>
                <textarea
                  id="instructions"
                  required
                  rows={9}
                  value={form.instructions}
                  onChange={(e) => update('instructions', e.target.value)}
                  placeholder={'Preheat the oven to 350°F.\nCream the butter and sugar.\nMix in the dry ingredients and bake for 20 minutes.'}
                  className={`${fieldClass} resize-y leading-relaxed`}
                />
              </div>

              <div>
                <label htmlFor="note" className="mb-1.5 block text-sm font-medium text-foreground">
                  Note or tip
                </label>
                <textarea
                  id="note"
                  rows={3}
                  value={form.note}
                  onChange={(e) => update('note', e.target.value)}
                  placeholder="Any tips, substitutions, or serving ideas (optional)"
                  className={`${fieldClass} resize-y leading-relaxed`}
                />
              </div>
            </fieldset>

            <div className="flex items-center gap-4 border-t border-border/70 pt-6">
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                <Plus className="size-4" aria-hidden="true" />
                Add recipe
              </button>
              <span className="text-xs text-muted-foreground">
                <span className="text-primary">*</span> Required fields
              </span>
            </div>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
