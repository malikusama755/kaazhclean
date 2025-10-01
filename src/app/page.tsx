import Link from "next/link";
import Image from "next/image";
import PostcodeInput from "@/components/PostcodeInput";

export default function Home() {
  return (
    <div className="">
      <section className="text-white" style={{ backgroundColor: '#00968a' }}>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-24 grid gap-6 md:gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Because Every Corner Deserves Luxury.
            </h1>
            <p className="text-neutral-200 text-sm md:text-base">
              Experience a service where every detail matters. Professional cleaning services across London.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link href="/quick-quote" className="inline-flex items-center rounded bg-white text-neutral-900 px-4 sm:px-5 py-2.5 sm:py-3 font-medium hover:bg-neutral-100 w-full sm:w-auto justify-center">Get Started</Link>
              <Link href="/services" className="inline-flex items-center rounded border border-white/30 px-4 sm:px-5 py-2.5 sm:py-3 font-medium hover:bg-white/10 w-full sm:w-auto justify-center">Our Services</Link>
              <a href="tel:00923326666788" className="inline-flex items-center rounded border border-white/30 px-4 sm:px-5 py-2.5 sm:py-3 font-medium hover:bg-white/10 w-full sm:w-auto justify-center">Call</a>
              <a href="mailto:hikaazhsclean@gmail.com" className="inline-flex items-center rounded border border-white/30 px-4 sm:px-5 py-2.5 sm:py-3 font-medium hover:bg-white/10 w-full sm:w-auto justify-center">Email</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-800">
            <Image src="/images/hero-1.jpg" alt="Cleaning hero" fill className="object-cover opacity-95" priority />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white text-neutral-900 px-3 py-1 text-xs font-medium">End of Tenancy</span>
              <span className="rounded-full bg-white/90 text-neutral-900 px-3 py-1 text-xs font-medium">After Builders</span>
              <span className="rounded-full bg-white/90 text-neutral-900 px-3 py-1 text-xs font-medium">Deep Clean</span>
              <span className="rounded-full bg-white/90 text-neutral-900 px-3 py-1 text-xs font-medium">Residential</span>
              <span className="rounded-full bg-white/90 text-neutral-900 px-3 py-1 text-xs font-medium">Office</span>
            </div>
          </div>
        </div>
      </section>

             {/* Postcode Input Section */}
             <section className="bg-white py-16">
               <div className="mx-auto max-w-6xl px-4">
                 <PostcodeInput />
               </div>
             </section>

             {/* Service Coverage Section */}
             <section className="bg-neutral-50">
               <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Service Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We cover Greater London</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From Zone 1 to the suburbs—consistent quality everywhere. We also travel for larger commercial contracts across the UK.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">Central London</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">East London</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">West London</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">North London</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">South London</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">Surrey & Kent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in London</h2>
            <p className="text-lg text-neutral-600">Professional cleaning services tailored to your needs</p>
          </div>
          
          {/* Mobile Horizontal Scroll, Desktop Grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {/* Service Card 1 - Domestic Cleaning */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/images/residential-cleaning.jpg"
                  alt="Domestic cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Domestic Cleaning</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £18/h</div>
                       <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                         Luxe Gleam provides either one-off home cleaning or regular domestic packages. With our service, you can enjoy all the benefits of professional cleaners while paying a fair price to get a spotless home.
                       </p>
                <Link href="/services/residential-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 2 - End of Tenancy */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
        <Image
                  src="/images/end-of-tenancy.jpg"
                  alt="End of tenancy cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">End of Tenancy</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £25/h</div>
                <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                  Comprehensive end of tenancy cleaning to ensure you get your full deposit back. We eliminate dust and use chemical solutions to remove discoloration and stains that can be in your property.
                </p>
                <Link href="/services/end-of-tenancy-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 3 - Office Cleaning */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
            <Image
                  src="/images/office-cleaning.jpg"
                  alt="Office cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Office Cleaning</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £20/h</div>
                <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                  Professional office and commercial cleaning services. We maintain clean, healthy workspaces that boost productivity and create a positive impression for your clients and employees.
                </p>
                <Link href="/services/office-commercial-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
        </div>

            {/* Service Card 4 - Deep Cleaning */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
          <Image
                  src="/images/deep-cleaning.jpg"
                  alt="Deep cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Deep Cleaning</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £22/h</div>
                <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                  Intensive deep cleaning service for homes that need extra attention. We tackle every corner, surface, and hidden area to give your property a thorough, professional clean.
                </p>
                <Link href="/services/deep-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 5 - After Builders */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
          <Image
                  src="/images/after-builders.jpg"
                  alt="After builders cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">After Builders</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £24/h</div>
                <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                  Specialized cleaning after construction or renovation work. We remove all construction dust, debris, and residue to make your property move-in ready.
                </p>
                <Link href="/services/after-builders-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 6 - Last Minute Cleaning */}
            <div className="flex-shrink-0 w-80 md:w-auto bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
          <Image
                  src="/images/last minute cleaning.jpg"
                  alt="Last minute cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Last Minute Cleaning</h3>
                <div className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">from £30/h</div>
                <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                  Need cleaning urgently? Our last minute cleaning service is available for same-day bookings. Perfect for unexpected guests, property viewings, or emergency cleaning needs.
                </p>
                <Link href="/services/last-minute-cleaning" className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm md:text-base">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              View All Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
            <p className="text-neutral-600">Trusted by hundreds of satisfied customers across London</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Review 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-neutral-600">S</span>
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">Sarah M.</p>
                      <p className="text-xs text-neutral-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                &ldquo;Exceptional end of tenancy cleaning service. The team was punctual, thorough, and left our flat spotless. Highly recommend KAAZHSCLEAN for their attention to detail.&rdquo;
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-neutral-600">J</span>
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">James L.</p>
                      <p className="text-xs text-neutral-500">1 month ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                &ldquo;Professional office cleaning service. They&rsquo;ve been maintaining our workspace for 6 months now. Reliable, efficient, and always on time. Great value for money.&rdquo;
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-neutral-600">M</span>
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">Maria K.</p>
                      <p className="text-xs text-neutral-500">3 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                &ldquo;After builders cleaning was outstanding. They removed all construction dust and debris. The house looked brand new. Will definitely use again!&rdquo;
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center text-neutral-900 font-medium hover:underline">
              View All Reviews
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
