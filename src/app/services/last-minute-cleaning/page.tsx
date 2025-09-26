import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Last Minute Cleaning",
  description: "Same-day emergency cleaning service in London. Available for urgent cleaning needs, property viewings, and unexpected guests.",
};

export default function LastMinuteCleaningPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Last Minute Cleaning</h1>
          <div className="text-2xl font-bold text-blue-600">from £30/hour</div>
          <p className="text-lg text-neutral-600">
            Need cleaning urgently? Our last minute cleaning service is available for same-day bookings. Perfect for unexpected guests, property viewings, or emergency cleaning needs.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What's Included</h2>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Same-day availability
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Emergency response within 2-4 hours
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                All cleaning supplies provided
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Professional equipment and techniques
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Flexible scheduling
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Perfect For</h2>
            <ul className="space-y-2 text-neutral-600">
              <li>• Unexpected guests arriving</li>
              <li>• Property viewings at short notice</li>
              <li>• Emergency cleaning situations</li>
              <li>• Same-day move-in/move-out</li>
              <li>• Last-minute event preparation</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/quick-quote" className="inline-flex items-center rounded bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
              Get Quote
            </Link>
            <a href="tel:00923326666788" className="inline-flex items-center rounded border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50">
              Call Now
            </a>
          </div>
        </div>
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/last minute cleaning.jpg"
            alt="Last minute cleaning service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
