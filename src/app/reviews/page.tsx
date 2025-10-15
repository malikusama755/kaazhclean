export const metadata = {
  title: "Customer Reviews",
  description: "Read what our customers say about Luxe Gleam's professional cleaning services in London.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      service: "End of Tenancy Cleaning",
      review: "Exceptional end of tenancy cleaning service. The team was punctual, thorough, and left our flat spotless. Highly recommend Luxe Gleam for their attention to detail.",
      verified: true
    },
    {
      id: 2,
      name: "James L.",
      rating: 5,
      date: "1 month ago",
      service: "Office Cleaning",
      review: "Professional office cleaning service. They've been maintaining our workspace for 6 months now. Reliable, efficient, and always on time. Great value for money.",
      verified: true
    },
    {
      id: 3,
      name: "Maria K.",
      rating: 5,
      date: "3 weeks ago",
      service: "After Builders Cleaning",
      review: "After builders cleaning was outstanding. They removed all construction dust and debris. The house looked brand new. Will definitely use again!",
      verified: true
    },
    {
      id: 4,
      name: "David R.",
      rating: 5,
      date: "2 months ago",
      service: "Deep Cleaning",
      review: "Amazing deep cleaning service! The team was professional, friendly, and incredibly thorough. Our home has never looked cleaner. Worth every penny.",
      verified: true
    },
    {
      id: 5,
      name: "Emma W.",
      rating: 5,
      date: "1 week ago",
      service: "Residential Cleaning",
      review: "Regular cleaning service that's been a lifesaver. Consistent quality, trustworthy team, and flexible scheduling. Couldn't be happier with the service.",
      verified: true
    },
    {
      id: 6,
      name: "Michael T.",
      rating: 5,
      date: "3 weeks ago",
      service: "End of Tenancy Cleaning",
      review: "Perfect end of tenancy clean. Got our full deposit back thanks to their thorough work. Professional, punctual, and reasonably priced. Highly recommended!",
      verified: true
    },
    {
      id: 7,
      name: "Lisa P.",
      rating: 5,
      date: "1 month ago",
      service: "Office Cleaning",
      review: "Outstanding commercial cleaning service. They transformed our office space completely. Professional team, excellent communication, and fantastic results.",
      verified: true
    },
    {
      id: 8,
      name: "Robert H.",
      rating: 5,
      date: "2 weeks ago",
      service: "After Builders Cleaning",
      review: "Incredible after builders cleaning service. They tackled all the construction mess and made our new home sparkle. Very impressed with their attention to detail.",
      verified: true
    },
    {
      id: 9,
      name: "Jennifer S.",
      rating: 5,
      date: "1 month ago",
      service: "Deep Cleaning",
      review: "Best cleaning service in London! The team was incredibly thorough and professional. Our home looks brand new. Will definitely book again for future cleans.",
      verified: true
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">What Our Customers Say</h1>
        <p className="text-neutral-600 text-lg">Trusted by hundreds of satisfied customers across London</p>
        
        {/* Overall Rating */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-2xl font-semibold">4.9</span>
          </div>
          <div className="text-neutral-600">
            <p className="text-sm">Based on 127 reviews</p>
            <p className="text-xs">Google Reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-neutral-600">{review.name.charAt(0)}</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-neutral-500">{review.date}</p>
                </div>
              </div>
              {review.verified && (
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="ml-1 text-xs">Verified</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-neutral-600">{review.service}</span>
            </div>
            
            <p className="text-neutral-700 text-sm leading-relaxed">
              &ldquo;{review.review}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-neutral-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Experience Our Service?</h2>
        <p className="text-neutral-600 mb-6">Join hundreds of satisfied customers who trust Luxe Gleam for their cleaning needs.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/quick-quote" className="inline-flex items-center rounded bg-neutral-900 text-white px-6 py-3 font-medium hover:bg-neutral-800">
            Get Your Quote
          </a>
          <a href="tel:07450153844" className="inline-flex items-center rounded border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50">
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
}
