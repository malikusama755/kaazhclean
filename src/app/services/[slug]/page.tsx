import { notFound } from "next/navigation";
import Image from "next/image";

const serviceCopy: Record<string, { title: string; body: string }> = {
  "end-of-tenancy-cleaning": {
    title: "End Of Tenancy Cleaning",
    body:
      "A thorough, checklist-based clean to help tenants and landlords ensure a smooth handover.",
  },
  "after-builders-cleaning": {
    title: "After Builders Cleaning",
    body: "Detailed post-construction cleaning to remove dust, debris, and residues.",
  },
  "deep-cleaning": {
    title: "Deep Cleaning",
    body: "Intensive top-to-bottom cleaning targeting hard-to-reach areas and stubborn grime.",
  },
  "residential-cleaning": {
    title: "Residential Cleaning",
    body: "Flexible recurring or one-off cleans for homes and apartments across London.",
  },
  "office-commercial-cleaning": {
    title: "Office/Commercial Cleaning",
    body: "Professional cleaning for offices and commercial spaces tailored to your schedule.",
  },
  other: {
    title: "Other",
    body: "Need something specific? Get in touch and we’ll tailor a solution for you.",
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceCopy[slug];
  if (!data) return notFound();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">{data.title}</h1>
      <p className="text-neutral-700 max-w-3xl mb-8">{data.body}</p>
      <div className="aspect-video relative rounded overflow-hidden mb-6">
        <Image
          src={
            params.slug === "end-of-tenancy-cleaning" ? "/images/end-of-tenancy.jpg" :
            params.slug === "after-builders-cleaning" ? "/images/after-builders.jpg" :
            params.slug === "deep-cleaning" ? "/images/deep-cleaning.jpg" :
            params.slug === "residential-cleaning" ? "/images/residential-cleaning.jpg" :
            params.slug === "office-commercial-cleaning" ? "/images/office-cleaning.jpg" :
            "/images/equipment.jpg.jpg"
          }
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <a href="/quick-quote" className="inline-flex items-center rounded bg-neutral-900 text-white px-5 py-3 font-medium hover:bg-neutral-800">Request a Quick Quote</a>
    </div>
  );
}


