'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, Plus, UtensilsCrossed, X } from 'lucide-react'
import { familyList } from '@/lib/recipes'

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Close on route change (link click handled by onClick below)
  const close = () => setOpen(false)

  const desktopLink = (href: string, label: string, extraClass = '') => {
    const isActive = active === href
    return (
      <Link
        key={href}
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={`hidden rounded-full px-3.5 py-2 transition-colors lg:inline-block ${
          isActive
            ? 'bg-secondary text-secondary-foreground'
            : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
        } ${extraClass}`}
      >
        {label}
      </Link>
    )
  }

  const mobileLink = (href: string, label: string) => {
    const isActive = active === href
    return (
      <Link
        key={href}
        href={href}
        onClick={close}
        aria-current={isActive ? 'page' : undefined}
        className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? 'bg-secondary text-secondary-foreground'
            : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <header ref={menuRef} className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" onClick={close}>
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <UtensilsCrossed className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Family Table Archive
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Family Recipes
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm font-medium">
          {/* Desktop links */}
          {desktopLink('/', 'Home')}
          {familyList.map((f) => desktopLink(`/${f.slug}`, f.short))}
          <Link
            href="/upload"
            aria-current={active === '/upload' ? 'page' : undefined}
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add Recipe
          </Link>

          {/* Mobile hamburger (hidden on lg+) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-1 flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown accordion */}
      <div
        className={`overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-all duration-200 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl space-y-0.5 px-5 py-3 md:px-8">
          {mobileLink('/', 'Home')}
          {familyList.map((f) => mobileLink(`/${f.slug}`, f.short))}
          <Link
            href="/upload"
            onClick={close}
            aria-current={active === '/upload' ? 'page' : undefined}
            className="mt-2 flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add Recipe
          </Link>
        </div>
      </div>
    </header>
  )
}

