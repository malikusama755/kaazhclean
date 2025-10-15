'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/services', label: 'Our Services' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  // Close menu when pathname changes (route navigation)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="md:hidden text-neutral-900">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center h-10 w-10 rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-900"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-[72px] z-40 border-t border-neutral-200 bg-white shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-base transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 font-semibold'
                    : 'text-neutral-900 hover:text-neutral-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Link
                href="/quick-quote"
                onClick={() => setOpen(false)}
                className={`inline-flex items-center justify-center rounded px-4 py-2 w-full transition-colors ${
                  pathname === '/quick-quote'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                Quick Quote
              </Link>
              <a
                href="tel:07450153844"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded border border-neutral-300 px-4 py-2 w-full hover:bg-neutral-50 text-neutral-900"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C12.07 20.02 3.98 11.93 3.98 1.99a1 1 0 011-1H8.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/>
                </svg>
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

