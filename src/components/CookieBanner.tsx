'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const choice = localStorage.getItem('cookie-consent')
      if (!choice) setVisible(true)
    } catch {}
  }, [])

  function choose(value: 'allow' | 'refuse') {
    try {
      localStorage.setItem('cookie-consent', value)
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl m-4 rounded-lg border border-neutral-200 bg-white p-4 shadow">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-700">
            We use cookies to ensure that we give you the best experience on our website. We never collect sensitive information and do not sell any of the data we collect.
          </p>
          <div className="flex gap-2">
            <button onClick={() => choose('allow')} className="inline-flex items-center rounded bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800">Allow Cookies</button>
            <button onClick={() => choose('refuse')} className="inline-flex items-center rounded border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Refuse Cookies</button>
          </div>
        </div>
      </div>
    </div>
  )
}



