import Image from "next/image";

export const metadata = {
  title: "Who We Are",
};

export default function WhoWeArePage() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      service: "End of Tenancy Cleaning",
      review: "Exceptional end of tenancy cleaning service. The team was punctual, thorough, and left our flat spotless. Highly recommend KAAZHSCLEAN for their attention to detail.",
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
      service: "Last Minute Cleaning",
      review: "Perfect last minute cleaning service. They came within 2 hours of my call and did an amazing job. Professional, reliable, and reasonably priced.",
      verified: true
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16"> 
      <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Who We Are</h1>
      <div className="grid gap-6 md:gap-8 md:grid-cols-5 md:items-start">
        <div className="md:col-span-3 space-y-4">
          <p className="text-neutral-700 text-sm md:text-base">
            KAAZHSCLEAN provides reliable, detail-focused cleaning services throughout London. Our trained
            operatives deliver consistent quality across residential and commercial spaces. We believe in doing it
            right the first time and every time.
          </p>
          <p className="text-neutral-700 text-sm md:text-base">
            With years of experience in the cleaning industry, we understand that every property is unique. 
            That's why we tailor our services to meet your specific needs, whether it's a one-time deep clean 
            or regular maintenance for your home or office.
          </p>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Why Choose KAAZHSCLEAN?</h2>
            <ul className="space-y-2 text-sm md:text-base text-neutral-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Fully trained and insured cleaning operatives
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Professional equipment and eco-friendly products
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Flexible scheduling to suit your needs
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                100% satisfaction guarantee
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden h-56 md:h-64 w-full">
            <Image
              src="/images/team.jpg.jpg"
              alt="friendly team"
              fill
              priority
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover object-[50%_15%]"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Reviews Carousel Section */}
      <div className="mt-16 md:mt-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-neutral-600">Trusted by hundreds of satisfied customers across London</p>
        </div>
        
        {/* Mobile Horizontal Scroll, Desktop Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow">
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
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex gap-4">
            <a href="/quick-quote" className="inline-flex items-center rounded bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
              Get Your Quote
            </a>
            <a href="tel:00923326666788" className="inline-flex items-center rounded border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


