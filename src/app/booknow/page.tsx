"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

interface CarOption {
  name: string;
  price: number;
}

const newYorkCars: CarOption[] = [
  { name: "Lamborghini Huracán STO", price: 1200 },
  { name: "Ferrari 812 SuperFast", price: 1800 },
  { name: "McLaren 720S", price: 1500 },
  { name: "Rolls-Royce Ghost", price: 1800 },
  { name: "Porsche 911 Turbo S", price: 900 },
  { name: "Bentley Continental GT", price: 1100 },
  { name: "Hennessey Escalade", price: 1200 },
];

const losAngelesCars: CarOption[] = [
  { name: "Rolls Royce Cullinan", price: 2000 },
  { name: "Ferrari Purosangue", price: 2500 },
  { name: "McLaren 720S", price: 1500 },
  { name: "Mercedes Benz GT R", price: 1000 },
  { name: "Lamborghini Urus", price: 1200 },
  { name: "Nissan GT-R", price: 900 },
  { name: "Bentley Continental GT", price: 1100 },
  { name: "Mercedes Maybach GLS 600", price: 1200 },
  { name: "Mercedes G63 AMG", price: 1500 },
  { name: "Tesla Model S Plaid", price: 1200 },
  { name: "Hellcat Widebody Jailbreak", price: 900 },
];

// Extra fees
const DELIVERY_FEE = 100;
const AIRPORT_PICKUP_FEE = 50;
const UNDER_25_SURCHARGE_RATE = 0.20;
const MILEAGE_FEE_PER_MILE = 0.5;

// Step transitions
const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Book = () => {

  // Current step (1 or 2)
  const [step, setStep] = useState(1);

  // Step 1 state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  // Step 2 state
  const [location, setLocation] = useState("New York");
  const [selectedCar, setSelectedCar] = useState<CarOption | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [driverAge, setDriverAge] = useState(25);
  const [customerCity, setCustomerCity] = useState("");
  const [goOutOfState, setGoOutOfState] = useState(false);
  const [estimatedMiles, setEstimatedMiles] = useState<number>(0);
  const [delivery, setDelivery] = useState(false);
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState("");
  const [airportPickup, setAirportPickup] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState(0);

  // Reset selectedCar if location changes
  useEffect(() => {
    setSelectedCar(null);
  }, [location]);

  // Calculate rental days
  const getRentalDays = (): number => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days > 0 ? days : 0;
  };

  // Calculate total cost
  const calculateCost = (): number => {
    const rentalDays = getRentalDays();
    if (!selectedCar || rentalDays === 0) return 0;
    let baseCost = selectedCar.price * rentalDays;
    let extras = 0;
    if (driverAge < 25) {
      extras += baseCost * UNDER_25_SURCHARGE_RATE;
    }
    if (delivery) {
      extras += DELIVERY_FEE;
    }
    if (airportPickup) {
      extras += AIRPORT_PICKUP_FEE;
    }
    extras += estimatedMiles * MILEAGE_FEE_PER_MILE;
    return baseCost + extras;
  };

  // Recalculate cost whenever relevant fields change
  useEffect(() => {
    setEstimatedCost(calculateCost());
  }, [selectedCar, startDate, endDate, driverAge, delivery, airportPickup, estimatedMiles]);

  // Step 1 submission
  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation for Step 1
    if (!fullName.trim()) {
      alert("Full name is required");
      return;
    }
    if (!email.trim()) {
      alert("Email is required");
      return;
    }
    if (!licenseNumber.trim()) {
      alert("Driver's license number is required");
      return;
    }
    // If valid, move to Step 2
    setStep(2);
  };

  // Step 2 submission
  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Additional validation for age
    if (driverAge < 21) {
      alert("Drivers must be at least 21.");
      return;
    }
    // Confirm final booking
    alert(`
Booking submitted.

Name: ${fullName}
Email: ${email}
License: ${licenseNumber}
Estimated cost: $${estimatedCost.toFixed(2)}
`);
    // Possibly reset or route user
    // router.push("/thank-you-page"); or setStep(1);
  };

  // Render Step 1
  const renderStep1 = () => (
    <motion.div
      key="step1"
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-lg bg-gray-700 shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Step 1: Basic Info</h2>
      <form onSubmit={handleStep1Submit}>
        <div className="mb-6">
          <label className="block text-white mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Driver's License Number</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="Your License Number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover:bg-red-900 transition"
        >
          Next
        </button>
      </form>
    </motion.div>
  );

  // Render Step 2
  const renderStep2 = () => (
    <motion.div
      key="step2"
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-3xl bg-gray-700 shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Step 2: Booking Details</h2>
      <form onSubmit={handleStep2Submit}>
        {/* Location Selection */}
        <div className="mb-6">
          <label className="block text-white mb-2">Pickup Location</label>
          <select
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>

        {/* Car Selection */}
        <div className="mb-6">
          <label className="block text-white mb-2">Select Car</label>
          <select
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gren-500"
            value={selectedCar ? selectedCar.name : ""}
            onChange={(e) => {
              const carName = e.target.value;
              const carList = location === "New York" ? newYorkCars : losAngelesCars;
              const car = carList.find((c) => c.name === carName) || null;
              setSelectedCar(car);
            }}
          >
            <option value="">Select a car</option>
            {(location === "New York" ? newYorkCars : losAngelesCars).map((car, idx) => (
              <option key={idx} value={car.name}>
                {car.name} - ${car.price}/day
              </option>
            ))}
          </select>
        </div>

        {/* Rental Duration */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Start Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white mb-2">End Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Driver Age & City */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Driver Age</label>
            <input
              type="number"
              min="18"
              className="w-full px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="25"
              onChange={(e) => setDriverAge(Number(e.target.value))}
            />
            {driverAge < 21 && (
              <p className="text-red-500 text-sm mt-1">Drivers must be at least 21.</p>
            )}
          </div>
          <div>
            <label className="block text-white mb-2">Customer City</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={customerCity}
              onChange={(e) => setCustomerCity(e.target.value)}
              placeholder="Your city"
            />
          </div>
        </div>

        {/* Travel Information */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={goOutOfState}
              onChange={(e) => setGoOutOfState(e.target.checked)}
              className="mr-2"
            />
            <label className="text-white">Going out of state?</label>
          </div>
          <div>
            <label className="block text-white mb-2">Estimated Miles</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Estimated miles"
              onChange={(e) => setEstimatedMiles(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Extra Options */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={delivery}
                onChange={(e) => setDelivery(e.target.checked)}
                className="mr-2"
              />
              <span className="text-white">Delivery?</span>
            </label>
            {delivery && (
              <div>
                <label className="block text-white text-sm mb-1">Preferred Delivery Time</label>
                <input
                  type="time"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={preferredDeliveryTime}
                  onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={airportPickup}
              onChange={(e) => setAirportPickup(e.target.checked)}
              className="mr-2"
            />
            <label className="text-white">Airport Pickup?</label>
          </div>
        </div>

        {/* Estimated Cost */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            Estimated Cost: ${estimatedCost.toFixed(2)}
          </h3>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover:bg-red-900 transition"
        >
          Submit Booking
        </button>
        
      </form>
    </motion.div>
  );

  return (
    <>
      {/* Main Container */}
      <div className="h-10 bg-gray-700"/>
      <section className="min-h-screen flex flex-col items-center bg-gray-600 px-6 py-12">
        <h1 className="text-5xl font-bold mb-4 text-white text-center">
          Book Now
        </h1>
        <p className="text-white text-center mb-8">
          Please fill out the following steps to book your car rental.
        </p>

        <AnimatePresence mode="wait">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}

          
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default Book;