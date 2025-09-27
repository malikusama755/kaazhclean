'use client'

import { useState, useEffect } from "react";

export default function QuickQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("2.0");
  const [selectedProducts, setSelectedProducts] = useState("We provide");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [postcode, setPostcode] = useState("");
  const [extraTasks, setExtraTasks] = useState<string[]>([]);
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
  
  // Extra tasks options
  const extraTaskOptions = [
    { id: "ironing", name: "Ironing", icon: "👔" },
    { id: "laundry", name: "Laundry", icon: "🧺" },
    { id: "inside-windows", name: "Inside windows", icon: "🪟" },
    { id: "inside-fridge", name: "Inside fridge", icon: "🧊" },
    { id: "inside-oven", name: "Inside oven", icon: "🔥" }
  ];

  // Duration options
  const durationOptions = [
    "2.0", "2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0"
  ];

  // Calculate recommended duration based on bedrooms, bathrooms, and extra tasks
  const calculateRecommendedDuration = () => {
    let baseHours = 2.0;
    baseHours += (bedrooms - 1) * 0.5; // Each additional bedroom adds 0.5 hours
    baseHours += (bathrooms - 1) * 0.3; // Each additional bathroom adds 0.3 hours
    baseHours += extraTasks.length * 0.2; // Each extra task adds 0.2 hours
    
    // Round to nearest 0.5
    return Math.round(baseHours * 2) / 2;
  };

  const recommendedDuration = calculateRecommendedDuration();

  // Calculate pricing
  const durationPrices = {
    "2.0": 39,
    "2.5": 49,
    "3.0": 59,
    "3.5": 69,
    "4.0": 79,
    "4.5": 89,
    "5.0": 99,
    "5.5": 109,
    "6.0": 119,
    "6.5": 129,
    "7.0": 139,
    "7.5": 149,
    "8.0": 159
  };
  
  const productPrice = selectedProducts === "We provide" ? 6 : 0;
  const basePrice = durationPrices[selectedDuration as keyof typeof durationPrices] || 0;
  
  // Add extra task pricing
  const extraTaskPrice = extraTasks.length * 5; // £5 per extra task
  
  const normalPrice = basePrice + productPrice + extraTaskPrice;
  
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
  
  const handleExtraTaskToggle = (taskId: string) => {
    setExtraTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hikaazhsclean@gmail.com?subject=Quick Quote Request - ${selectedService}&body=Service: ${selectedService}%0ADuration: ${selectedDuration} hours%0AProducts: ${selectedProducts}%0AFrequency: ${selectedFrequency}%0ABedrooms: ${bedrooms}%0ABathrooms: ${bathrooms}%0APostcode: ${postcode}%0AExtra Tasks: ${extraTasks.length > 0 ? extraTasks.join(', ') : 'None'}%0A%0APrice Breakdown:%0ABase cleaning: £${basePrice}%0A${productPrice > 0 ? 'Cleaning products: £' + productPrice + '%0A' : ''}${extraTaskPrice > 0 ? 'Extra tasks: £' + extraTaskPrice + '%0A' : ''}Subtotal: £${normalPrice}%0A${discount > 0 ? 'Discount: -£' + discount + '%0A' : ''}Total: £${finalPrice}%0A%0ACustomer Details:%0AName: ${customerDetails.name}%0AEmail: ${customerDetails.email}%0APhone: ${customerDetails.phone}%0APostcode: ${customerDetails.postcode}%0AMessage: ${customerDetails.message}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          {[1, 2, 3, 4].map((step) => (
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
            Step {currentStep} of 4: {
              currentStep === 1 ? 'Customize Clean' :
              currentStep === 2 ? 'Select Service' :
              currentStep === 3 ? 'Choose Options' :
              'Your Details'
            }
          </p>
        </div>
      </div>

      {/* Step 1: Customize Your Clean */}
      {currentStep === 1 && (
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Customise your clean</h1>
          
          {/* Postcode Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-600 mb-2">Your postcode</label>
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="e.g. SE9 6DR"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bedrooms Counter */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-600 mb-2">
              How many <strong>bedrooms</strong> need cleaning?
            </label>
            <div className="flex items-center border border-neutral-300 rounded-lg w-fit">
              <button
                type="button"
                onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                className="px-4 py-3 text-neutral-400 hover:text-neutral-600"
              >
                -
              </button>
              <span className="px-6 py-3 text-neutral-900 font-medium">
                {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}
              </span>
              <button
                type="button"
                onClick={() => setBedrooms(bedrooms + 1)}
                className="px-4 py-3 text-neutral-400 hover:text-neutral-600"
              >
                +
              </button>
            </div>
          </div>

          {/* Bathrooms Counter */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-600 mb-2">
              How many <strong>bathrooms</strong> need cleaning?
            </label>
            <div className="flex items-center border border-neutral-300 rounded-lg w-fit">
              <button
                type="button"
                onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                className="px-4 py-3 text-neutral-400 hover:text-neutral-600"
              >
                -
              </button>
              <span className="px-6 py-3 text-neutral-900 font-medium">
                {bathrooms} {bathrooms === 1 ? 'bathroom' : 'bathrooms'}
              </span>
              <button
                type="button"
                onClick={() => setBathrooms(bathrooms + 1)}
                className="px-4 py-3 text-neutral-400 hover:text-neutral-600"
              >
                +
              </button>
            </div>
          </div>

          {/* Extra Tasks */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">Extra tasks (optional)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {extraTaskOptions.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => handleExtraTaskToggle(task.id)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    extraTasks.includes(task.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{task.icon}</div>
                  <div className="text-sm font-medium text-neutral-900">{task.name}</div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-neutral-500 mb-8">
            Your cleaner will also clean your kitchen, lounge and common areas.
          </p>
          
          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={!postcode}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Service Selection & Duration */}
      {currentStep === 2 && (
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Choose Your Service</h1>
          <p className="text-neutral-600 mb-8 text-center">Select the cleaning service that best fits your needs</p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
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

          {/* Duration Selection */}
          {selectedService && (
            <div className="mb-8">
              <div className="text-center mb-4">
                <p className="text-sm text-neutral-600">
                  We recommend selecting <strong>{recommendedDuration}</strong> hours
                </p>
                <p className="text-xs text-neutral-500">
                  Based on your {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}, {bathrooms} {bathrooms === 1 ? 'bathroom' : 'bathrooms'} and extra tasks
                </p>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {durationOptions.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${
                      selectedDuration === duration
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : duration === recommendedDuration.toString()
                        ? 'border-blue-300 bg-blue-50 text-blue-700'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={!selectedService}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Options Selection */}
      {currentStep === 3 && (
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Customize Your Service</h1>
          <p className="text-neutral-600 mb-8">Choose your preferences and see the pricing</p>
          
          <div className="max-w-2xl mx-auto space-y-8">
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
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-lg">Price Breakdown</span>
                <span className="text-2xl font-bold text-blue-600">£{finalPrice}</span>
              </div>
              
              <div className="space-y-2 text-sm text-neutral-600 mb-4">
                <div className="flex justify-between">
                  <span>Base cleaning ({selectedDuration}h):</span>
                  <span>£{basePrice}</span>
                </div>
                {productPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Cleaning products:</span>
                    <span>£{productPrice}</span>
                  </div>
                )}
                {extraTaskPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Extra tasks ({extraTasks.length}):</span>
                    <span>£{extraTaskPrice}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium border-t pt-2">
                  <span>Subtotal:</span>
                  <span>£{normalPrice}</span>
                </div>
              </div>
              
              {discount > 0 && (
                <div className="text-sm text-neutral-600 border-t pt-2">
                  <div className="flex justify-between">
                    <span>Normal price:</span>
                    <span className="line-through">£{normalPrice}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({selectedFrequency === "Weekly" ? "67%" : "30%"}):</span>
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

      {/* Step 4: Customer Details */}
      {currentStep === 4 && (
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
                value={customerDetails.postcode || postcode}
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