import Link from 'next/link'
import { familyList } from '@/lib/recipes'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold text-foreground">
              Family Recipes
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A shared recipe archive for our families. Preserving the dishes
              worth making again &mdash; and always open to new additions.
            </p>
            <Link
              href="/upload"
              className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Add your recipe &rarr;
            </Link>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Collections
            </span>
            {familyList.map((family) => (
              <Link
                key={family.slug}
                href={`/${family.slug}`}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                {family.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          &copy; 2026 Jacob Raifsnider. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
