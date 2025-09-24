'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden flex items-center gap-2">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center rounded border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
      >
        <span className="i">☰</span>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-[60px] z-40 border-t border-neutral-200 bg-white shadow">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-base">
            <Link href="/who-we-are" onClick={() => setOpen(false)} className="hover:text-neutral-600">Who We Are</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="hover:text-neutral-600">Our Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-neutral-600">Contact</Link>
            <Link href="/quick-quote" onClick={() => setOpen(false)} className="inline-flex items-center rounded bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">Quick Quote</Link>
            <a href="tel:00923326666788" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C12.07 20.02 3.98 11.93 3.98 1.99a1 1 0 011-1H8.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/>
              </svg>
              Call
            </a>
          </div>
        </div>
      )}
    </div>
  )
}


