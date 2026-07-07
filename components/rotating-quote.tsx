'use client'

import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'

const QUOTES = [
  'Taste and season several times throughout cooking.',
  'The secret ingredient is always love.',
  'A recipe has no soul. You as the cook must bring soul to the recipe.',
  'Cooking is like love — entered into with abandon or not at all.',
  'You don\'t have to cook fancy masterpieces, just good food from fresh ingredients.',
  'Good food is the foundation of genuine happiness.',
  'One cannot think well, love well, sleep well, if one has not dined well.',
  'The secret of good cooking is, first, having a love of it.',
  'Food is symbolic of love when words are inadequate.',
  'Cooking well doesn\'t mean cooking fancy.',
]

const INTERVAL = 30_000

export function RotatingQuote() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % QUOTES.length)
        setVisible(true)
      }, 350)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <p
      className="flex items-start gap-2 text-sm leading-snug text-foreground/90 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <Quote className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
      {QUOTES[index]}
    </p>
  )
}
