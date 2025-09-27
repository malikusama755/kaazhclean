'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/services', label: 'Our Services' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`hover:text-neutral-600 transition-colors ${
            pathname === item.href
              ? 'text-blue-600 font-semibold'
              : 'text-neutral-900'
          }`}
        >
          {item.label}
        </Link>
      ))}
      <Link 
        href="/quick-quote" 
        className={`inline-flex items-center rounded px-4 py-2 transition-colors ${
          pathname === '/quick-quote'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-neutral-900 text-white hover:bg-neutral-800'
        }`}
      >
        Quick Quote
      </Link>
    </nav>
  )
}
