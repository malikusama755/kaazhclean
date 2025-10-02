'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  IconIroningSteam,
  IconWindow,
  IconFridge,
  IconWashMachine,
} from "@tabler/icons-react";

function QuickQuoteContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("2.0");
  const [selectedProducts, setSelectedProducts] = useState("We provide");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [postcode, setPostcode] = useState("");
  const [extraTasks, setExtraTasks] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("4");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: ""
  });
  
  
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
    if (currentStep < 4) {
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

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  // Generate week dates based on current date
  const generateWeekDates = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    startOfWeek.setDate(diff);
    
    const weekDates = [];
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDates.push({
        day: dayNames[i],
        date: date.getDate().toString(),
        fullDate: date,
        isToday: date.toDateString() === new Date().toDateString()
      });
    }
    
    return weekDates;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hikaazhsclean@gmail.com?subject=Quick Quote Request&body=Duration: ${selectedDuration} hours%0AProducts: ${selectedProducts}%0AFrequency: ${selectedFrequency}%0ABedrooms: ${bedrooms}%0ABathrooms: ${bathrooms}%0APostcode: ${postcode}%0AExtra Tasks: ${extraTasks.length > 0 ? extraTasks.join(', ') : 'None'}%0A%0APrice Breakdown:%0ABase cleaning: £${basePrice}%0A${productPrice > 0 ? 'Cleaning products: £' + productPrice + '%0A' : ''}${extraTaskPrice > 0 ? 'Extra tasks: £' + extraTaskPrice + '%0A' : ''}Subtotal: £${normalPrice}%0A${discount > 0 ? 'Discount: -£' + discount + '%0A' : ''}Total: £${finalPrice}%0A%0ACustomer Details:%0AName: ${customerDetails.name}%0AEmail: ${customerDetails.email}%0APhone: ${customerDetails.phone}%0APostcode: ${customerDetails.postcode}%0AMessage: ${customerDetails.message}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header with Progress Indicator */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-neutral-900">Luxe Gleam</h1>
            <div className="sm:hidden text-sm text-neutral-600">
              Step {currentStep} of 4
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 overflow-x-auto w-full">
              {[
                { id: 1, name: "Quote", active: currentStep >= 1 },
                { id: 2, name: "Time", active: currentStep >= 2 },
                { id: 3, name: "Address", active: currentStep >= 3 },
                { id: 4, name: "Payment", active: currentStep >= 4 }
              ].map((step, index) => (
                <div key={step.id} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-medium ${
                      currentStep >= step.id
                        ? 'border-blue-600 bg-blue-600 text-white' 
                        : 'border-neutral-300 text-neutral-400'
                    }`}>
                      {currentStep > step.id ? '✓' : ''}
                    </div>
                    <span className={`mt-1 text-xs sm:text-sm font-medium ${
                      currentStep >= step.id ? 'text-blue-600' : 'text-neutral-400'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className={`h-0.5 w-4 sm:w-8 lg:w-16 mx-2 sm:mx-4 ${
                      currentStep > step.id ? 'bg-blue-600' : 'bg-neutral-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-8">
          {/* Main Form */}
          <div>
            {/* Step 1: Get your quote */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">Customise your clean</h1>

                {/* Postcode Input */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Your postcode</label>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. SE9 6DR"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <hr className="my-4 sm:my-6" />

                {/* Bedrooms Counter */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    How many <strong>bedrooms</strong> need cleaning?
                  </label>
                  <div className="flex items-center border border-neutral-300 rounded-lg w-fit">
                    <button
                      type="button"
                      onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                      className="px-3 sm:px-4 py-3 text-neutral-400 hover:text-neutral-600"
                    >
                      –
                    </button>
                    <span className="px-4 sm:px-6 py-3 text-neutral-900 font-medium text-sm sm:text-base">
                      {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setBedrooms(bedrooms + 1)}
                      className="px-3 sm:px-4 py-3 text-neutral-400 hover:text-neutral-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Bathrooms Counter */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    How many <strong>bathrooms</strong> need cleaning?
                  </label>
                  <div className="flex items-center border border-neutral-300 rounded-lg w-fit">
                    <button
                      type="button"
                      onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                      className="px-3 sm:px-4 py-3 text-neutral-400 hover:text-neutral-600"
                    >
                      –
                    </button>
                    <span className="px-4 sm:px-6 py-3 text-neutral-900 font-medium text-sm sm:text-base">
                      {bathrooms} {bathrooms === 1 ? 'bathroom' : 'bathrooms'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setBathrooms(bathrooms + 1)}
                      className="px-3 sm:px-4 py-3 text-neutral-400 hover:text-neutral-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="text-sm text-neutral-500 mb-4 sm:mb-6">
                  Your cleaner will also clean your kitchen, lounge and common areas.
                </p>

                {/* Extra Tasks */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg font-medium text-neutral-900 mb-4">Extra tasks (optional)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {extraTaskOptions.map((task) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => handleExtraTaskToggle(task.id)}
                        className={`p-3 sm:p-4 lg:p-6 rounded-lg border-2 text-center transition-all hover:shadow-md ${
                          extraTasks.includes(task.id)
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex justify-center mb-1 sm:mb-2 lg:mb-3">
                          <div className="scale-75 sm:scale-100">
                            {task.icon}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-neutral-900">{task.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="my-4 sm:my-6" />

                {/* Duration Selection */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-neutral-600">
                      We recommend selecting <strong>{recommendedDuration}</strong> hours
                    </p>
                    <p className="text-xs text-neutral-500">
                      Based on your {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}, {bathrooms} {bathrooms === 1 ? 'bathroom' : 'bathrooms'} and extra tasks
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 max-w-4xl mx-auto">
                    {durationOptions.map((duration) => (
                      <button
                        key={duration}
                        type="button"
                        onClick={() => setSelectedDuration(duration)}
                        className={`p-2 sm:p-3 rounded-lg border-2 text-center transition-all ${
                          selectedDuration === duration
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : duration === recommendedDuration.toString()
                            ? 'border-blue-300 bg-blue-50 text-blue-700'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium text-xs sm:text-sm lg:text-base">{duration}h</div>
                        <div className="text-xs text-neutral-500 hidden sm:block">£{durationPrices[duration as keyof typeof durationPrices]}/h</div>
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="my-4 sm:my-6" />

                {/* Products Selection */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg font-semibold mb-4">Cleaning products</h3>
                  <p className="text-sm text-neutral-600 mb-4">Includes sprays and cloths. Your cleaner cannot bring a vacuum, mop or bucket</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProducts("We provide")}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        selectedProducts === "We provide"
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium">Bring cleaning products</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedProducts("You provide")}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        selectedProducts === "You provide"
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium">I will provide</div>
                    </button>
                  </div>
                </div>


                <div className="text-center">
                  <button
                    onClick={handleNext}
                    disabled={!postcode}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Choose your time */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">Choose your time</h1>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      onClick={handlePreviousWeek}
                      className="flex items-center text-neutral-500 hover:text-neutral-700 cursor-pointer"
                    >
                      <span className="text-sm">Previous week</span>
                    </button>
                    <h2 className="text-lg font-semibold text-blue-600">
                      {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button 
                      onClick={handleNextWeek}
                      className="flex items-center text-neutral-500 hover:text-neutral-700 cursor-pointer"
                    >
                      <span className="text-sm">Next week</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {generateWeekDates().map((day, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day.date)}
                        className={`p-3 rounded-lg border-2 text-center transition-all relative cursor-pointer ${
                          selectedDate === day.date
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : day.isToday
                            ? 'border-blue-300 bg-blue-25'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="text-xs text-neutral-500">{day.day}</div>
                        <div className="text-lg font-semibold">{day.date}</div>
                        {day.isToday && (
                          <div className="absolute -top-1 -right-1 bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded text-[10px]">
                            Today
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">What time would you like your cleaner to arrive?</h3>
                  
                  {/* Daytime Option */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => setSelectedTimeSlot("daytime")}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all relative cursor-pointer ${
                        selectedTimeSlot === "daytime"
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-semibold text-neutral-900">Daytime 09:00 - 17:00</div>
                      <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                        Best
                      </div>
                    </button>
                  </div>

                  {/* Morning Arrival */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-600 mb-2">Morning arrival</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedTimeSlot("morning-1")}
                        className={`p-3 rounded-lg border-2 text-center transition-all relative cursor-pointer ${
                          selectedTimeSlot === "morning-1"
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium">09:00 - 12:00</div>
                        <div className="absolute top-1 right-1 bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded text-[10px]">
                          Best
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedTimeSlot("morning-2")}
                        className={`p-3 rounded-lg border-2 text-center transition-all cursor-pointer ${
                          selectedTimeSlot === "morning-2"
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium">11:00 - 12:00</div>
                      </button>
                    </div>
                  </div>

                  {/* Afternoon Arrival */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-neutral-600 mb-2">Afternoon arrival</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedTimeSlot("afternoon-1")}
                        className={`p-3 rounded-lg border-2 text-center transition-all relative cursor-pointer ${
                          selectedTimeSlot === "afternoon-1"
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium">12:00 - 17:00</div>
                        <div className="absolute top-1 right-1 bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded text-[10px]">
                          Best
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedTimeSlot("afternoon-2")}
                        className={`p-3 rounded-lg border-2 text-center transition-all cursor-pointer ${
                          selectedTimeSlot === "afternoon-2"
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium">12:00 - 13:00</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedTimeSlot("afternoon-3")}
                        className={`p-3 rounded-lg border-2 text-center transition-all cursor-pointer ${
                          selectedTimeSlot === "afternoon-3"
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="font-medium">17:00 - 18:00</div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Frequency Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">How often?</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedFrequency("More than weekly")}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        selectedFrequency === "More than weekly"
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium text-sm">More than weekly</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFrequency("Every week")}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        selectedFrequency === "Every week"
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium text-sm">Every week</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFrequency("Every 2 weeks")}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        selectedFrequency === "Every 2 weeks"
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium text-sm">Every 2 weeks</div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={handleBack}
                    className="w-full sm:w-auto px-6 py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTimeSlot || !selectedFrequency}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Your details */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">Your address</h1>
                <p className="text-neutral-600 mb-6 sm:mb-8">We&apos;ll use this information to contact you with your quote</p>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      style={{ fontSize: "16px" }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={customerDetails.email}
                      onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      style={{ fontSize: "16px" }}
                      required
                    />
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      style={{ fontSize: "16px" }}
                    />
                    <input
                      type="text"
                      placeholder="Postcode"
                      value={customerDetails.postcode || postcode}
                      onChange={(e) => setCustomerDetails({...customerDetails, postcode: e.target.value})}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      style={{ fontSize: "16px" }}
                    />
                  </div>

                  <textarea
                    placeholder="Any additional information about your cleaning needs?"
                    value={customerDetails.message}
                    onChange={(e) => setCustomerDetails({...customerDetails, message: e.target.value})}
                    rows={4}
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    style={{ fontSize: "16px" }}
                  />

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="updates"
                      className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="updates" className="ml-2 text-sm text-neutral-700">
                      Send me updates and special offers
                    </label>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-auto px-6 py-3 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">Payment</h1>
                
                <div className="bg-neutral-50 rounded-lg p-6 text-left text-sm text-neutral-700 mb-8">
                  <h3 className="font-semibold mb-4">Your Quote Summary:</h3>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{selectedDuration} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Products:</span>
                      <span>{selectedProducts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span>{selectedFrequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>{bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>{bathrooms}</span>
                    </div>
                    {extraTasks.length > 0 && (
                      <div className="flex justify-between">
                        <span>Extra Tasks:</span>
                        <span>{extraTasks.map(id => extraTaskOptions.find(t => t.id === id)?.name).join(', ')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate ? `Sat ${selectedDate}` : 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTimeSlot || 'Not selected'}</span>
                    </div>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-blue-600">£{finalPrice}</span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
                  >
                    Send My Quote Request
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
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