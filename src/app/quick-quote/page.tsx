'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function QuickQuotePage() {
  const [selectedDuration, setSelectedDuration] = useState("3.0");
  const [selectedProducts, setSelectedProducts] = useState("We provide");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  
  // Set page title
  useEffect(() => {
    document.title = "Quick Quote | KAAZHSCLEAN";
  }, []);
  
  // Calculate pricing
  const durationPrices = {
    "2.0": 39,
    "2.5": 49,
    "3.0": 59,
    "3.5": 69,
    "4.0": 79,
    "More": 0
  };
  
  const productPrice = selectedProducts === "We provide" ? 6 : 0;
  const basePrice = durationPrices[selectedDuration as keyof typeof durationPrices] || 0;
  const normalPrice = basePrice + productPrice;
  
  // Apply discounts
  let finalPrice = normalPrice;
  let discount = 0;
  
  if (selectedFrequency === "Weekly") {
    discount = Math.round(normalPrice * 0.67); // 67% discount for first clean
    finalPrice = normalPrice - discount;
  } else if (selectedFrequency === "Fortnightly") {
    discount = Math.round(normalPrice * 0.3); // 30% discount
    finalPrice = normalPrice - discount;
  }
  
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
                        <option>Last Minute Cleaning</option>
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

            {/* Enhanced Pricing & Duration Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold">Service Duration & Pricing</h2>
              
              {/* Recommended Hours */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-blue-900">We recommend selecting 2.5 hours</span>
                </div>
                <p className="text-sm text-blue-700">Based on your bedrooms, bathrooms and extra tasks.</p>
              </div>

              {/* Duration Selection */}
              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-neutral-700 mb-2 block">Select Duration</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { hours: "2.0", price: "£39", popular: false },
                      { hours: "2.5", price: "£49", popular: true },
                      { hours: "3.0", price: "£59", popular: false },
                      { hours: "3.5", price: "£69", popular: false },
                      { hours: "4.0", price: "£79", popular: false },
                      { hours: "More", price: "Custom", popular: false }
                    ].map((option) => (
                      <label key={option.hours} className={`relative cursor-pointer`}>
                        <input 
                          type="radio" 
                          name="Duration" 
                          value={option.hours}
                          checked={selectedDuration === option.hours}
                          onChange={(e) => setSelectedDuration(e.target.value)}
                          className="sr-only peer"
                        />
                        <div className={`p-3 rounded-lg border-2 text-center transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedDuration === option.hours ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'}`}>
                          <div className="font-medium text-sm">{option.hours}</div>
                          <div className="text-xs text-neutral-600">{option.price}</div>
                          {option.popular && (
                            <div className="absolute -top-1 -right-1">
                              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Best</span>
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </label>
              </div>

              {/* Cleaning Products */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-neutral-700">Cleaning Products</span>
                <p className="text-xs text-neutral-600">Includes sprays and cloths. Our cleaners cannot bring a vacuum, mop or bucket.</p>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="Products" 
                      value="We provide" 
                      checked={selectedProducts === "We provide"}
                      onChange={(e) => setSelectedProducts(e.target.value)}
                      className="sr-only peer" 
                    />
                    <div className={`p-3 rounded-lg border-2 text-center transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedProducts === "We provide" ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'}`}>
                      <div className="font-medium text-sm">We provide (+£6)</div>
                      <div className="text-xs text-neutral-600">Sprays & cloths included</div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="Products" 
                      value="You provide" 
                      checked={selectedProducts === "You provide"}
                      onChange={(e) => setSelectedProducts(e.target.value)}
                      className="sr-only peer" 
                    />
                    <div className={`p-3 rounded-lg border-2 text-center transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedProducts === "You provide" ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'}`}>
                      <div className="font-medium text-sm">You provide</div>
                      <div className="text-xs text-neutral-600">Bring your own</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-neutral-700">How often?</span>
                <div className="space-y-2">
                  <label className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="Frequency" 
                      value="One-time" 
                      checked={selectedFrequency === "One-time"}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="sr-only peer" 
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedFrequency === "One-time" ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">One-time clean</div>
                          <div className="text-sm text-neutral-600">Perfect for end of tenancy or deep clean</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">£{normalPrice}</div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="Frequency" 
                      value="Weekly" 
                      checked={selectedFrequency === "Weekly"}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="sr-only peer" 
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedFrequency === "Weekly" ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'} relative`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Weekly</div>
                          <div className="text-sm text-neutral-600">That clean home feeling on repeat</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-neutral-500 line-through">£{normalPrice}</span>
                            <span className="font-medium text-green-600">£{finalPrice}</span>
                          </div>
                          <div className="flex gap-1 mt-1">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Discounted</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Best</span>
                          </div>
                        </div>
                      </div>
                      {selectedFrequency === "Weekly" && (
                        <div className="absolute -top-1 -right-1">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input 
                      type="radio" 
                      name="Frequency" 
                      value="Fortnightly" 
                      checked={selectedFrequency === "Fortnightly"}
                      onChange={(e) => setSelectedFrequency(e.target.value)}
                      className="sr-only peer" 
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-neutral-400 ${selectedFrequency === "Fortnightly" ? 'border-blue-600 bg-blue-50' : 'border-neutral-200'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Fortnightly</div>
                          <div className="text-sm text-neutral-600">Every 2 weeks</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">£{finalPrice}</div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Estimated Total</span>
                  <span className="text-lg font-semibold text-blue-600">£{finalPrice}</span>
                </div>
                {discount > 0 && (
                  <div className="text-xs text-neutral-600">
                    <div className="flex justify-between">
                      <span>Normal price:</span>
                      <span className="line-through">£{normalPrice}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>{selectedFrequency === "Weekly" ? "First clean discount:" : "Fortnightly discount:"}</span>
                      <span>-£{discount}</span>
                    </div>
                  </div>
                )}
                <div className="mt-2 text-xs text-neutral-500">
                  *Final pricing may vary based on property size and specific requirements
                </div>
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


