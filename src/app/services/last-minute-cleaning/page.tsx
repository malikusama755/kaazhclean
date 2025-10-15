import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Last Minute Cleaning",
  description: "Emergency same-day cleaning service in London. Fast, reliable cleaning when you need it most - available on short notice.",
};

export default function LastMinuteCleaningPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Last Minute Cleaning</h1>
          <div className="text-2xl font-bold text-blue-600">from £30/hour</div>
          <p className="text-lg text-neutral-600">
            Emergency same-day cleaning service for when you need professional cleaning fast. Perfect for unexpected guests, last-minute viewings, or urgent situations.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What&rsquo;s Included</h2>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Same-day service available
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Priority booking
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Fast, efficient cleaning
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                All essential areas covered
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Professional cleaning equipment provided
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Perfect For</h2>
            <ul className="space-y-2 text-neutral-600">
              <li>• Unexpected guests arriving</li>
              <li>• Last-minute property viewings</li>
              <li>• Emergency clean-ups</li>
              <li>• Event preparation</li>
              <li>• Move-in/move-out urgencies</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/quick-quote" className="inline-flex items-center rounded bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
              Get Quote
            </Link>
            <a href="tel:07450153844" className="inline-flex items-center rounded border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50">
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
