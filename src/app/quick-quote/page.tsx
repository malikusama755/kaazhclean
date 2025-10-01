'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  IconIroningSteam,
  IconWindow,
  IconFridge,
  IconSofa,
  IconBucketDroplet,
  IconHomeCog,
  IconWashMachine,
} from "@tabler/icons-react";

function QuickQuoteContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("2.0");
  const [selectedProducts, setSelectedProducts] = useState("We provide");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [postcode, setPostcode] = useState("");
  const [extraTasks, setExtraTasks] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState("");
  const [carpetCleaning, setCarpetCleaning] = useState("");
  const [upholsteryCleaning, setUpholsteryCleaning] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [parkingAvailable, setParkingAvailable] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: ""
  });
  
  // Service options with Tabler Icons
  const services = [
    { 
      id: "end-of-tenancy", 
      name: "End of tenancy clean", 
      price: "from £25/h", 
      icon: (<IconSofa size={48} stroke={1.8} color="#0891b2" />), 
      desc: "Our most thorough clean. When you're moving out or moving in" 
    },
    { 
      id: "deep", 
      name: "Deep clean", 
      price: "from £22/h", 
      icon: (<IconBucketDroplet size={48} stroke={1.8} color="#0891b2" />), 
      desc: "More thorough than a regular clean. Remove dirt and limescale" 
    },
    { 
      id: "after-builders", 
      name: "After builders clean", 
      price: "from £24/h", 
      icon: (<IconHomeCog size={48} stroke={1.8} color="#0891b2" />), 
      desc: "Remove dirt and dust after building work or renovation" 
    },
    { 
      id: "carpet", 
      name: "Carpet clean", 
      price: "from £30/h", 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="6" width="14" height="12" rx="2" stroke="#0891b2" strokeWidth="2"/>
          <path d="M7 9h10M7 12h10M7 15h10" stroke="#0891b2" strokeWidth="1.5"/>
          <path d="M5 6V4M19 6V4M5 18v2M19 18v2" stroke="#0891b2" strokeWidth="1.5"/>
        </svg>
      ), 
      desc: "Remove stains from carpets, rugs and other upholstery" 
    }
  ];
  
  // Extra tasks options with Tabler Icons
  const extraTaskOptions = [
    { 
      id: "ironing", 
      name: "Ironing", 
      icon: (<IconIroningSteam size={32} stroke={1.8} color="#0891b2" />)
    },
    { 
      id: "laundry", 
      name: "Laundry", 
      icon: (<IconWashMachine size={32} stroke={1.8} color="#0891b2" />)
    },
    { 
      id: "inside-windows", 
      name: "Inside windows", 
      icon: (<IconWindow size={32} stroke={1.8} color="#0891b2" />)
    },
    { 
      id: "inside-fridge", 
      name: "Inside fridge", 
      icon: (<IconFridge size={32} stroke={1.8} color="#0891b2" />)
    },
    { 
      id: "inside-oven", 
      name: "Inside oven", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#0891b2" strokeWidth="2"/>
          <rect x="6" y="7" width="12" height="6" stroke="#0891b2" strokeWidth="1.5" />
          <rect x="6" y="14" width="12" height="4" stroke="#0891b2" strokeWidth="1.5" />
          <circle cx="8" cy="6" r="1" fill="#0891b2"/>
          <circle cx="11" cy="6" r="1" fill="#0891b2"/>
          <circle cx="14" cy="6" r="1" fill="#0891b2"/>
          <circle cx="17" cy="6" r="1" fill="#0891b2"/>
        </svg>
      )
    }
  ];

  // Duration options
  const durationOptions = [
    "2.0", "2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0"
  ];

  // Time selection options
  const timeOptions = [
    { id: "daytime", name: "Daytime (09:00 - 15:00)" },
    { id: "early-morning", name: "Early morning (08:00 - 09:00)" },
    { id: "morning", name: "Morning (09:00 - 12:00)" },
    { id: "afternoon", name: "Afternoon (12:00 - 15:00)" },
    { id: "late-afternoon", name: "Late afternoon (15:00 - 18:00)" },
    { id: "evening", name: "Evening (18:00 - 19:00)" }
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
  
  // Set page title and handle postcode parameter
  useEffect(() => {
    document.title = "Quick Quote | Luxe Gleam";
    
    // Get postcode from URL parameters
    const postcodeParam = searchParams.get('postcode');
    if (postcodeParam) {
      setPostcode(postcodeParam);
      setCustomerDetails(prev => ({ ...prev, postcode: postcodeParam }));
    }
  }, [searchParams]);

  const handleNext = () => {
    if (currentStep < 5) {
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
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">Luxe Gleam</h1>
            <div className="text-sm text-neutral-600">
              Step {currentStep} of 5
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {step}
                </div>
                {step < 5 && (
                  <div className={`h-0.5 w-12 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Customize Your Clean */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">Customise your clean</h1>
            
            {/* Postcode Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-2">Your postcode</label>
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. SE9 6DR"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Property Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">Is the property a flat or house?</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPropertyType("flat")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    propertyType === "flat"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">Flat</div>
                </button>
                <button
                  onClick={() => setPropertyType("house")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    propertyType === "house"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">House</div>
                </button>
              </div>
            </div>

            {/* Carpet Cleaning Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">What kind of carpet cleaning do you need?</label>
              <div className="space-y-3">
                <button
                  onClick={() => setCarpetCleaning("vacuuming")}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    carpetCleaning === "vacuuming"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">Vacuuming only</div>
                </button>
                <button
                  onClick={() => setCarpetCleaning("deep")}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    carpetCleaning === "deep"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">Deep cleaning</div>
                </button>
                <button
                  onClick={() => setCarpetCleaning("none")}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    carpetCleaning === "none"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">No carpets</div>
                </button>
              </div>
            </div>

            {/* Upholstery Cleaning */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">Do you need any upholstery cleaning?</label>
              <p className="text-sm text-neutral-500 mb-4">e.g. sofas and mattresses</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setUpholsteryCleaning("yes")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    upholsteryCleaning === "yes"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">Yes</div>
                </button>
                <button
                  onClick={() => setUpholsteryCleaning("no")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    upholsteryCleaning === "no"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">No</div>
                </button>
              </div>
            </div>

            {/* Bedrooms Counter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
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
              <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    className={`p-6 rounded-lg border-2 text-center transition-all hover:shadow-md ${
                      extraTasks.includes(task.id)
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex justify-center mb-3">
                      {task.icon}
                    </div>
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
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">What type of clean do you need?</h1>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
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
                  <div className="flex justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{service.desc}</p>
                  <p className="text-blue-600 font-medium">{service.price}</p>
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
            
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50"
              >
                Back
              </button>
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

        {/* Step 3: Time and Parking Selection */}
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">What time would you like the cleaning team to arrive?</h1>
            
            <div className="space-y-3 mb-8">
              {timeOptions.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setSelectedTime(time.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedTime === time.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">{time.name}</div>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">Can you provide free parking?</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setParkingAvailable("yes")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    parkingAvailable === "yes"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">Yes</div>
                </button>
                <button
                  onClick={() => setParkingAvailable("no")}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    parkingAvailable === "no"
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="font-medium text-neutral-900">No</div>
                </button>
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
                disabled={!selectedTime || !parkingAvailable}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Options Selection */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">Customize Your Service</h1>
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
                            <div className="flex gap-1 mt-1 justify-end">
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Best</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
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

        {/* Step 5: Customer Details */}
        {currentStep === 5 && (
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">Your Details</h1>
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
                  placeholder="Postcode"
                  value={customerDetails.postcode || postcode}
                  onChange={(e) => setCustomerDetails({...customerDetails, postcode: e.target.value})}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address Fields */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Cleaning address</h3>
                <input
                  type="text"
                  placeholder="Address line 1"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address line 2 (optional)"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    value={customerDetails.postcode || postcode}
                    onChange={(e) => setCustomerDetails({...customerDetails, postcode: e.target.value})}
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <textarea
                placeholder="Any additional information about your cleaning needs?"
                value={customerDetails.message}
                onChange={(e) => setCustomerDetails({...customerDetails, message: e.target.value})}
                rows={4}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Checkbox for updates */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="updates"
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="updates" className="ml-2 text-sm text-neutral-700">
                  Send me updates and special offers
                </label>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-4 text-left text-sm text-neutral-700">
                <h3 className="font-semibold mb-2">Your Quote Summary:</h3>
                <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name || 'N/A'}</p>
                <p><strong>Duration:</strong> {selectedDuration} hours</p>
                <p><strong>Products:</strong> {selectedProducts}</p>
                <p><strong>Frequency:</strong> {selectedFrequency}</p>
                <p><strong>Bedrooms:</strong> {bedrooms}</p>
                <p><strong>Bathrooms:</strong> {bathrooms}</p>
                {extraTasks.length > 0 && <p><strong>Extra Tasks:</strong> {extraTasks.map(id => extraTaskOptions.find(t => t.id === id)?.name).join(', ')}</p>}
                <p className="mt-2 text-lg font-bold text-blue-600">Total: £{finalPrice}</p>
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
                  Send My Quote Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuickQuotePage() {
  return (
    <Suspense fallback={null}>
      <QuickQuoteContent />
    </Suspense>
  );
}