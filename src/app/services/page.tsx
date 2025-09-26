import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services",
};

const services = [
  { slug: "end-of-tenancy-cleaning", name: "End Of Tenancy Cleaning" },
  { slug: "after-builders-cleaning", name: "After Builders Cleaning" },
  { slug: "deep-cleaning", name: "Deep Cleaning" },
  { slug: "residential-cleaning", name: "Residential Cleaning" },
  { slug: "office-commercial-cleaning", name: "Office/Commercial Cleaning" },
  { slug: "last-minute-cleaning", name: "Last Minute Cleaning" },
  { slug: "other", name: "Other" },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Our Services</h1>
      
      {/* Simple Pricing Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Simple Pricing</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="bg-neutral-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Weekly</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">from £18/hr</div>
            <p className="text-sm text-neutral-600">Minimum 2 hours. Same cleaner where possible.</p>
          </div>
          <div className="bg-neutral-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Bi-Weekly</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">from £19/hr</div>
            <p className="text-sm text-neutral-600">Flexible rescheduling up to 24h before.</p>
          </div>
          <div className="bg-neutral-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">One-Off / Deep Clean</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">fixed quote</div>
            <p className="text-sm text-neutral-600">We'll estimate based on size and extras.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/quick-quote" className="inline-flex items-center rounded bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700">
            Get your home booked
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-lg border border-neutral-200 p-0 hover:shadow-sm overflow-hidden"
          >
            <div className="aspect-video relative">
              <Image
                src={
                  s.slug === "end-of-tenancy-cleaning" ? "/images/end-of-tenancy.jpg" :
                  s.slug === "after-builders-cleaning" ? "/images/after-builders.jpg" :
                  s.slug === "deep-cleaning" ? "/images/deep-cleaning.jpg" :
                  s.slug === "residential-cleaning" ? "/images/residential-cleaning.jpg" :
                  s.slug === "office-commercial-cleaning" ? "/images/office-cleaning.jpg" :
                  s.slug === "last-minute-cleaning" ? "/images/last minute cleaning.jpg" :
                  "/images/equipment.jpg.jpg"
                }
                alt={s.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="font-medium p-4">{s.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


