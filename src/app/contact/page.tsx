import Image from "next/image";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-6 md:gap-8 md:grid-cols-2">
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold">Contact</h1>
        <p className="text-neutral-700 text-sm md:text-base">We’d love to hear from you. Get in touch today.</p>
        <div className="space-y-1 text-neutral-800">
          <div>
            <span className="font-medium">Phone:</span>{" "}
            <a href="tel:00923326666788" className="underline">00923326666788</a>
          </div>
          <div>
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:hikaazhsclean@gmail.com" className="underline">hikaazhsclean@gmail.com</a>
          </div>
          <div>
            <span className="font-medium">Address:</span>{" "}
            10 Wood St, London E17 3HT
          </div>
        </div>
      </div>
      <div className="space-y-3 md:space-y-4">
        <div className="aspect-[4/3] sm:aspect-video w-full rounded-lg overflow-hidden relative">
          <Image src="/images/contact-hero.jpg" alt="Contact" fill className="object-cover" />
        </div>
        <div className="aspect-video w-full rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500">
          Map placeholder
        </div>
      </div>
    </div>
  );
}


