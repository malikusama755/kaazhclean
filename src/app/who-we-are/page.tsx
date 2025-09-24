import Image from "next/image";

export const metadata = {
  title: "Who We Are",
};

export default function WhoWeArePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16"> 
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Who We Are</h1>
      <div className="grid gap-8 md:grid-cols-5 md:items-start">
        <p className="text-neutral-700 max-w-3xl md:col-span-3">
          KAAZHSCLEAN provides reliable, detail-focused cleaning services throughout London. Our trained
          operatives deliver consistent quality across residential and commercial spaces. We believe in doing it
          right the first time and every time.
        </p>
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
    </div>
  );
}


