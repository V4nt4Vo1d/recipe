'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Family, Recipe } from '@/lib/recipes'

export type FeaturedCard = { recipe: Recipe; family: Family }

const INTERVAL = 30_000
const COUNT = 3
// Featured recipes change 15s after the quote, so they never swap at the same time
const OFFSET = 15_000

function pickRandom(pool: FeaturedCard[], exclude: Set<string>): FeaturedCard[] {
  const available = pool.filter((c) => !exclude.has(c.recipe.id))
  const source = available.length >= COUNT ? available : [...pool]
  // Fisher-Yates shuffle
  for (let i = source.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [source[i], source[j]] = [source[j], source[i]]
  }
  return source.slice(0, COUNT)
}

export function FeaturedRecipes({ pool }: { pool: FeaturedCard[] }) {
  const [cards, setCards] = useState<FeaturedCard[]>(() => pool.slice(0, COUNT))
  const [visible, setVisible] = useState(true)
  const cardsRef = useRef(cards)
  cardsRef.current = cards

  useEffect(() => {
    if (pool.length <= COUNT) return

    const rotate = () => {
      setVisible(false)
      setTimeout(() => {
        const currentIds = new Set(cardsRef.current.map((c) => c.recipe.id))
        setCards(pickRandom(pool, currentIds))
        setVisible(true)
      }, 350)
    }

    // Start first rotation after OFFSET (15s), then every INTERVAL (30s)
    const timeout = setTimeout(() => {
      rotate()
      const interval = setInterval(rotate, INTERVAL)
      return () => clearInterval(interval)
    }, OFFSET)

    return () => clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="mt-8 grid gap-4 md:grid-cols-3 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {cards.map(({ recipe, family }) => (
        <Link
          key={recipe.id}
          href={`/${family.slug}#${recipe.id}`}
          className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
            {family.short}
          </span>
          <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
            {recipe.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
            {recipe.desc}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            View recipe
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  )
}
