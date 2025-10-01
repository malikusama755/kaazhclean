'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PostcodeInput() {
  const [postcode, setPostcode] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (postcode.trim()) {
      // Redirect to quick-quote with postcode as URL parameter
      router.push(`/quick-quote?postcode=${encodeURIComponent(postcode.trim())}`)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Get Your Quote</h2>
        <p className="text-neutral-600">Enter your postcode to get started with Luxe Gleam</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-neutral-700 mb-3">
            Your Postcode
          </label>
          <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. SE9 6DR"
            className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-medium"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
        >
          Get My Quote
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-500">
          We&rsquo;ll use this to provide accurate pricing for your area
        </p>
        <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-neutral-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Free Quote
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            No Obligation
          </div>
        </div>
      </div>
    </div>
  )
}
