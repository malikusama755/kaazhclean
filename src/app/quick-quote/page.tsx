export const metadata = {
  title: "Quick Quote",
};

import Image from "next/image";

export default function QuickQuotePage() {
  return (
    <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Quick Quote</h1>
      <p className="text-neutral-700 mb-6 md:mb-8 text-sm md:text-base">We&#39;d be happy to provide a quote for our cleaning services. Get in touch today and we&#39;ll arrange a no obligation quote.</p>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <form
            action="mailto:hikaazhsclean@gmail.com?subject=Quick%20Quote%20Request%20-%20KAAZHSCLEAN"
            method="post"
            encType="text/plain"
            className="grid gap-3 sm:gap-4"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Your Contact Details</h2>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <input name="Name" placeholder="Your Name" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" required />
                <input name="Email" type="email" placeholder="Your Email" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" required />
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <input name="Phone" placeholder="Your Phone" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" />
                <input name="Postcode" placeholder="Postcode (optional)" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-lg font-semibold">Service Requirements</h2>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Type of cleaning service</span>
                  <select name="Service Type" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>End Of Tenancy Cleaning</option>
                    <option>After Builders Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Residential Cleaning</option>
                    <option>Office/Commercial Cleaning</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Property type</span>
                  <select name="Property Type" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Flat</option>
                    <option>House</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Bedrooms</span>
                  <select name="Bedrooms" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Studio</option>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                    <option>10+</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Bathrooms</span>
                  <select name="Bathrooms" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <option key={i}>{i}</option>
                    ))}
                    <option>5+</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Floors/Storeys</span>
                  <select name="Floors" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Preferred date</span>
                  <input name="Preferred Date" type="date" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Furnished</span>
                  <select name="Furnished" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Part-furnished</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Parking on-site</span>
                  <select name="Parking" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Preferred day of the week</span>
                  <select name="Preferred Day" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Any day</option>
                    {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </label>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <label className="grid gap-1">
                    <span className="text-sm text-neutral-700">Frequency</span>
                    <select name="Frequency" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                      <option>Daily</option>
                      <option>5 days a week</option>
                      <option>3 days a week</option>
                      <option>2 days a week</option>
                      <option>Every week</option>
                      <option>Every 2 weeks</option>
                      <option>One-off</option>
                    </select>
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-neutral-700">Hours per day</span>
                    <select name="Hours per Day" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                      <option>2 Hours</option>
                      <option>3 Hours</option>
                      <option>4 Hours</option>
                      <option>5+ Hours</option>
                      <option>Not sure</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Preferred time of day</span>
                  <select name="Time of Day" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>Flexible</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-neutral-700">Additional services</span>
                  <select name="Additional Services" className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base">
                    <option>None</option>
                    {["External Window Cleaning","Carpet Cleaning","Upholstery Cleaning","Balcony Cleaning","Jet Washing","Anti-Viral Sanitisation"].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-lg font-semibold">Additional Information</h2>
              <textarea name="Additional Information" placeholder="Tell us about your property and any specifics" rows={6} className="w-full border border-neutral-300 rounded px-3 py-2 text-sm md:text-base" />
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center rounded bg-neutral-900 text-white px-5 py-3 font-medium hover:bg-neutral-800 w-full sm:w-auto justify-center">Send</button>
              <a href="tel:00923326666788" className="inline-flex items-center rounded border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50 w-full sm:w-auto justify-center">Call</a>
              <a href="mailto:hikaazhsclean@gmail.com" className="inline-flex items-center rounded border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50 w-full sm:w-auto justify-center">Email</a>
            </div>
          </form>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border border-neutral-200 p-3 sm:p-4 bg-neutral-50">
            <div className="font-semibold mb-2">What happens next?</div>
            <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
              <li>We confirm details by email or phone.</li>
              <li>Arrange a date and time that suits you.</li>
              <li>Trained operatives carry out the clean.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


