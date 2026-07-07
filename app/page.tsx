import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, ChefHat, Plus } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RotatingQuote } from '@/components/rotating-quote'
import { FeaturedRecipes, type FeaturedCard } from '@/components/featured-recipes'
import { familyList } from '@/lib/recipes'

export default function HomePage() {
  const totalRecipes = familyList.reduce((n, f) => n + f.recipes.length, 0)

  // Build a pool of all recipes across all families for the rotating featured section
  const featuredPool: FeaturedCard[] = familyList.flatMap((family) =>
    family.recipes.map((recipe) => ({ recipe, family })),
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader active="/" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
            <div>
              <span className="inline-block rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                Collected Family Favorites
              </span>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl">
                Recipes passed down from one kitchen to the next.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                This archive keeps together the dishes, breads, soups, and
                desserts shared across our family tables &mdash; easy to
                revisit, kept in the family, and open for everyone to add to.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/raifsnider"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Browse the recipes
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Plus className="size-4" aria-hidden="true" />
                  Add a recipe
                </Link>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="size-4" aria-hidden="true" />
                {totalRecipes} recipes across {familyList.length} families
              </span>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg md:rotate-2">
                <Image
                  src="/hero-kitchen.png"
                  alt="Overhead view of a rustic family kitchen table with a handwritten recipe card, fresh tomatoes, and herbs"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 hidden max-w-[200px] rounded-xl border border-border bg-card px-4 py-3 shadow-md md:block md:-rotate-3">
                <RotatingQuote />
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="border-y border-border/70 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  From the collection
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground">
                  Featured recipes
                </h2>
              </div>
            </div>
            <FeaturedRecipes pool={featuredPool} />
          </div>
        </section>

        {/* Collections */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Start here
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Select a family collection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Choose a family collection and browse the recipes that have been
              passed down, preserved just as they were meant to be.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {familyList.map((family) => (
              <article
                key={family.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ChefHat className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  {family.name}
                </h3>
                <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {family.recipes.length} Favorites
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {family.blurb}
                </p>
                <Link
                  href={`/${family.slug}`}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  View {family.short} recipes
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
