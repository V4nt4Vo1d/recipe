import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RecipeCollection } from '@/components/recipe-collection'
import { familyList, getFamily } from '@/lib/recipes'

export function generateStaticParams() {
  return familyList.map((f) => ({ family: f.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ family: string }> }) {
  return params.then(({ family }) => {
    const fam = getFamily(family)
    if (!fam) return {}
    return {
      title: `${fam.name} Recipes | Family Table Archive`,
      description: fam.blurb,
    }
  })
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ family: string }>
}) {
  const { family } = await params
  const fam = getFamily(family)
  if (!fam) notFound()

  const categoryCount = new Set(fam.recipes.map((r) => r.category)).size
  const other = familyList.find((f) => f.slug !== fam.slug)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader active={`/${fam.slug}`} />

      <main className="flex-1">
        {/* Collection header */}
        <section className="relative overflow-hidden border-b border-border/70 bg-secondary/30">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-16">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All collections
              </Link>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Family Favorites
              </span>
              <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance md:text-5xl">
                {fam.name}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
                {fam.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-border bg-card px-4 py-1.5 font-medium text-foreground">
                  {fam.recipes.length} recipes
                </span>
                <span className="rounded-full border border-border bg-card px-4 py-1.5 font-medium text-foreground">
                  {categoryCount} categories
                </span>
              </div>
            </div>
            <div className="relative hidden aspect-[5/4] overflow-hidden rounded-2xl border border-border shadow-md md:block">
              <Image
                src="/ingredients-still.png"
                alt="Still life of baking ingredients including stoneware bowls, a rolling pin, and pecans"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Recipes */}
        <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
          <RecipeCollection family={fam} />
        </section>

        {/* Cross-link */}
        {other && (
          <section className="border-t border-border/70 bg-secondary/30">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-12 md:flex-row md:items-center md:px-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Keep exploring
                </span>
                <p className="mt-1 font-serif text-2xl font-semibold text-foreground">
                  The {other.name} collection
                </p>
              </div>
              <Link
                href={`/${other.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                View {other.short} recipes
              </Link>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
