import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              We clean corners. We don’t cut them.
            </h1>
            <p className="text-neutral-200">
              Experience a service where every detail matters. Professional cleaning services across London.
            </p>
            <div className="flex gap-3">
              <Link href="/quick-quote" className="inline-flex items-center rounded bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-100">Get Started</Link>
              <Link href="/services" className="inline-flex items-center rounded border border-white/30 px-5 py-3 font-medium hover:bg-white/10">Our Services</Link>
              <a href="tel:00923326666788" className="inline-flex items-center rounded border border-white/30 px-5 py-3 font-medium hover:bg-white/10">Call</a>
              <a href="mailto:hikaazhsclean@gmail.com" className="inline-flex items-center rounded border border-white/30 px-5 py-3 font-medium hover:bg-white/10">Email</a>
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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Office and commercial cleaning professionals</h2>
            <p className="text-neutral-600">Comprehensive plans trusted by businesses in and around London.</p>
            <Link href="/services/office-commercial-cleaning" className="text-neutral-900 underline">Get Started</Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Residential cleaning experts in London</h2>
            <p className="text-neutral-600">From regular visits to end of tenancy cleans by fully trained operatives.</p>
            <Link href="/services/residential-cleaning" className="text-neutral-900 underline">Get Started</Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">End of Tenancy, After Builders, Deep Cleaning</h2>
            <p className="text-neutral-600">Specialist services delivered to the highest standards.</p>
            <Link href="/services" className="text-neutral-900 underline">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
