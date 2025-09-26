import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import CookieBanner from "@/components/CookieBanner";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KAAZHSCLEAN | We clean corners. We don’t cut them.",
    template: "%s | KAAZHSCLEAN",
  },
  description:
    "Professional cleaning services in London: End of Tenancy, After Builders, Deep, Residential, Office/Commercial.",
  metadataBase: new URL("https://www.kaazhsclean.co.uk"),
  openGraph: {
    title: "KAAZHSCLEAN",
    description:
      "Professional cleaning services in London: End of Tenancy, After Builders, Deep, Residential, Office/Commercial.",
    url: "/",
    siteName: "KAAZHSCLEAN",
    locale: "en_GB",
    type: "website",
    images: [
      { url: "/images/favicon-512.png", width: 512, height: 512, alt: "KAAZHSCLEAN" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAAZHSCLEAN",
    description:
      "Professional cleaning services in London: End of Tenancy, After Builders, Deep, Residential, Office/Commercial.",
  },
  icons: {
    icon: "/images/favicon-512.png",
    shortcut: "/images/favicon-512.png",
    apple: "/images/favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between relative text-neutral-900">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="KAAZHSCLEAN"
                width={256}
                height={256}
                priority
                className="h-18 w-18 md:h-22 md:w-22 lg:h-24 lg:w-24 object-contain"
              />
              {/* Site name hidden per request */}
            </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  <Link href="/who-we-are" className="hover:text-neutral-600">Who We Are</Link>
                  <Link href="/services" className="hover:text-neutral-600">Our Services</Link>
                  <Link href="/reviews" className="hover:text-neutral-600">Reviews</Link>
                  <Link href="/contact" className="hover:text-neutral-600">Contact</Link>
                  <Link href="/quick-quote" className="inline-flex items-center rounded bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">Quick Quote</Link>
                  <a href="tel:00923326666788" aria-label="Call" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C12.07 20.02 3.98 11.93 3.98 1.99a1 1 0 011-1H8.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/>
                    </svg>
                  </a>
                </nav>
            <MobileNav />
          </div>
          {/* Mobile menu overlay handled by MobileNav */}
        </header>
        <main>{children}</main>
        <footer className="mt-12 md:mt-16 border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 grid gap-8 md:gap-10 md:grid-cols-3 text-sm">
            <div className="space-y-2">
              <div className="font-semibold">KAAZHSCLEAN</div>
              <div>10 Wood St, London E17 3HT</div>
              <div>
                <a href="tel:00923326666788" className="hover:underline">00923326666788</a> ·
                <a href="mailto:hikaazhsclean@gmail.com" className="hover:underline ml-1">hikaazhsclean@gmail.com</a>
              </div>
              <div className="flex gap-2 pt-2">
                <a href="tel:00923326666788" className="inline-flex items-center rounded bg-neutral-900 text-white px-3 py-2 hover:bg-neutral-800">Call</a>
                <a href="mailto:hikaazhsclean@gmail.com" className="inline-flex items-center rounded border border-neutral-300 px-3 py-2 hover:bg-neutral-50">Email</a>
              </div>
              <div className="pt-3 flex gap-4">
                <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3">Our Services</div>
                  <ul className="grid gap-2">
                    <li><Link href="/services/end-of-tenancy-cleaning" className="hover:underline">End of Tenancy Cleaning</Link></li>
                    <li><Link href="/services/office-commercial-cleaning" className="hover:underline">Office & Commercial Cleaning</Link></li>
                    <li><Link href="/services/deep-cleaning" className="hover:underline">Deep Cleaning</Link></li>
                    <li><Link href="/services/after-builders-cleaning" className="hover:underline">After Builders Cleaning</Link></li>
                    <li><Link href="/services/residential-cleaning" className="hover:underline">Residential Cleaning</Link></li>
                    <li><Link href="/services/last-minute-cleaning" className="hover:underline">Last Minute Cleaning</Link></li>
                  </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Quick Quote</div>
              <form action="mailto:hikaazhsclean@gmail.com" method="post" encType="text/plain" className="grid gap-2 sm:gap-2.5">
                <input name="name" placeholder="Your Name" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm" required />
                <input name="email" type="email" placeholder="Your Email" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm" required />
                    <select name="service" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm">
                      <option>End Of Tenancy Cleaning</option>
                      <option>After Builders Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Residential Cleaning</option>
                      <option>Office/Commercial Cleaning</option>
                      <option>Last Minute Cleaning</option>
                      <option>Other</option>
                    </select>
                <button type="submit" className="inline-flex items-center rounded bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800 w-full sm:w-auto justify-center">Send</button>
              </form>
            </div>
          </div>
          <div className="text-center text-xs text-neutral-500 pb-4 md:pb-6">© {new Date().getFullYear()} KAAZHSCLEAN.</div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
