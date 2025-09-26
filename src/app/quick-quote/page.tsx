'use client'

import { useState, useEffect } from "react";

export default function QuickQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("3.0");
  const [selectedProducts, setSelectedProducts] = useState("We provide");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: ""
  });
  
  // Service options with icons
  const services = [
    { id: "residential", name: "Residential Cleaning", price: "from £18/h", icon: "🏠", popular: true },
    { id: "end-of-tenancy", name: "End of Tenancy", price: "from £25/h", icon: "🔑" },
    { id: "office", name: "Office Cleaning", price: "from £20/h", icon: "🏢" },
    { id: "deep", name: "Deep Cleaning", price: "from £22/h", icon: "✨" },
    { id: "after-builders", name: "After Builders", price: "from £24/h", icon: "🔨" },
    { id: "last-minute", name: "Last Minute", price: "from £30/h", icon: "⚡" }
  ];
  
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
  
  // Set page title
  useEffect(() => {
    document.title = "Quick Quote | KAAZHSCLEAN";
  }, []);
  
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hikaazhsclean@gmail.com?subject=Quick Quote Request - ${selectedService}&body=Service: ${selectedService}%0ADuration: ${selectedDuration} hours%0AProducts: ${selectedProducts}%0AFrequency: ${selectedFrequency}%0AName: ${customerDetails.name}%0AEmail: ${customerDetails.email}%0APhone: ${customerDetails.phone}%0APostcode: ${customerDetails.postcode}%0AMessage: ${customerDetails.message}%0ATotal Price: £${finalPrice}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-neutral-200 text-neutral-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-blue-600' : 'bg-neutral-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-neutral-600">
            Step {currentStep} of 3: {
              currentStep === 1 ? 'Select Service' :
              currentStep === 2 ? 'Choose Options' :
              'Your Details'
            }
          </p>
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {currentStep === 1 && (
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Choose Your Service</h1>
          <p className="text-neutral-600 mb-8">Select the cleaning service that best fits your needs</p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                  selectedService === service.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-blue-600 font-medium">{service.price}</p>
                {service.popular && (
                  <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNext}
            disabled={!selectedService}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Options Selection */}
      {currentStep === 2 && (
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Customize Your Service</h1>
          <p className="text-neutral-600 mb-8">Choose your preferences and see the pricing</p>
          
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Duration Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">How long do you need?</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { hours: "2.0", price: "£39" },
                  { hours: "2.5", price: "£49" },
                  { hours: "3.0", price: "£59" },
                  { hours: "3.5", price: "£69" },
                  { hours: "4.0", price: "£79" },
                  { hours: "More", price: "Custom" }
                ].map((option) => (
                  <button
                    key={option.hours}
                    onClick={() => setSelectedDuration(option.hours)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      selectedDuration === option.hours
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-medium">{option.hours}</div>
                    <div className="text-sm text-neutral-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Products Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cleaning Products</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedProducts("We provide")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    selectedProducts === "We provide"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium">We provide (+£6)</div>
                  <div className="text-sm text-neutral-600">Sprays & cloths included</div>
                </button>
                <button
                  onClick={() => setSelectedProducts("You provide")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    selectedProducts === "You provide"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium">You provide</div>
                  <div className="text-sm text-neutral-600">Bring your own</div>
                </button>
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">How often?</h3>
              <div className="space-y-3">
                {[
                  { id: "One-time", name: "One-time clean", desc: "Perfect for end of tenancy or deep clean", price: normalPrice },
                  { id: "Weekly", name: "Weekly", desc: "That clean home feeling on repeat", price: finalPrice, discount: true, popular: true },
                  { id: "Fortnightly", name: "Fortnightly", desc: "Every 2 weeks", price: finalPrice }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedFrequency(option.id)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedFrequency === option.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{option.name}</div>
                        <div className="text-sm text-neutral-600">{option.desc}</div>
                      </div>
                      <div className="text-right">
                        {option.discount ? (
                          <div>
                            <div className="text-sm text-neutral-500 line-through">£{normalPrice}</div>
                            <div className="font-medium text-green-600">£{option.price}</div>
                          </div>
                        ) : (
                          <div className="font-medium">£{option.price}</div>
                        )}
                        {option.popular && (
                          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1">
                            Best Value
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-lg">Estimated Total</span>
                <span className="text-2xl font-bold text-blue-600">£{finalPrice}</span>
              </div>
              {discount > 0 && (
                <div className="text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Normal price:</span>
                    <span className="line-through">£{normalPrice}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-£{discount}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Customer Details */}
      {currentStep === 3 && (
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Your Details</h1>
          <p className="text-neutral-600 mb-8">We&rsquo;ll use this information to contact you with your quote</p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                value={customerDetails.name}
                onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={customerDetails.email}
                onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Your Phone"
                value={customerDetails.phone}
                onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Postcode (optional)"
                value={customerDetails.postcode}
                onChange={(e) => setCustomerDetails({...customerDetails, postcode: e.target.value})}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <textarea
              placeholder="Any additional information about your cleaning needs?"
              value={customerDetails.message}
              onChange={(e) => setCustomerDetails({...customerDetails, message: e.target.value})}
              rows={4}
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Final Price Summary */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{services.find(s => s.id === selectedService)?.name}</div>
                  <div className="text-sm text-neutral-600">{selectedDuration} hours • {selectedFrequency} • {selectedProducts}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">£{finalPrice}</div>
                  {discount > 0 && (
                    <div className="text-sm text-green-600">Save £{discount}</div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Send Quote Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}