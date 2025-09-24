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
  { slug: "other", name: "Other" },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Our Services</h1>
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


