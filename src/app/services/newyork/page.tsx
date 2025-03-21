"use client";

import Image from "next/image";
import Footer from "@/components/Footer";

const cars = [
  { 
    name: "Lamborghini Huracán STO", 
    price: "$1,200/day", 
    image: "/greensto.png",
    horsepower: "640 HP", 
    zeroToSixty: "3.0 sec", 
    topSpeed: "193 mph"
  },
  { 
    name: "Ferrari 812 SuperFast", 
    price: "$1,800/day", 
    image: "/812.png",
    horsepower: "789 HP", 
    zeroToSixty: "2.8 sec", 
    topSpeed: "211 mph"
  },
  { 
    name: "McLaren 720S", 
    price: "$1,500/day", 
    image: "/720s.png",
    horsepower: "710 HP", 
    zeroToSixty: "2.8 sec", 
    topSpeed: "212 mph"
  },
  { 
    name: "Rolls-Royce Ghost", 
    price: "$1,800/day", 
    image: "/pinkghost.png",
    horsepower: "563 HP", 
    zeroToSixty: "4.6 sec", 
    topSpeed: "155 mph"
  },
  { 
    name: "Porsche 911 Turbo S", 
    price: "$900/day", 
    image: "/turbos.png",
    horsepower: "640 HP", 
    zeroToSixty: "2.6 sec", 
    topSpeed: "205 mph"
  },
  { 
    name: "Bentley Continental GT", 
    price: "$1,100/day", 
    image: "/bentley.png",
    horsepower: "650 HP", 
    zeroToSixty: "3.5 sec", 
    topSpeed: "208 mph"
  },
  { 
    name: "Hennessey Escalade", 
    price: "$1,200/day", 
    image: "/escalade.png",
    horsepower: "1005 HP", 
    zeroToSixty: "3.5 sec", 
    topSpeed: "TBD"
  },
];

const NewYork = () => {
  return (
    <>
  
      <section 
        id="hero"
        className="min-h-screen flex flex-col items-center px-6 pt-32 md:pt-40 pb-12 w-full bg-[url('/pinkghost.png')] unoptimized bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-5xl font-bold text-white mb-10 md:mb-12 text-center px-6 py-3 rounded-lg">
          Luxury Car Rentals in New York
        </h1>

        <p className="text-lg text-white max-w-md md:max-w-3xl text-center mb-10 bg-black/50 p-4 rounded-lg">
          Experience the thrill of driving the world's most exclusive vehicles through the streets of Manhattan, 
          Brooklyn, and beyond. Our fleet offers the finest selection of luxury and exotic cars for rent, 
          perfect for special occasions, business events, or simply indulging in a high-performance ride.
        </p>

        <p className="text-lg text-white max-w-md md:max-w-3xl text-center mb-12 bg-black/50 p-4 rounded-lg">
          We offer door-to-door delivery, chauffeur services, and custom rental packages tailored to your needs. 
          Whether you're looking for a weekend getaway or an extended luxury rental, we've got you covered.
        </p>
      </section>

      <section id="services" className="bg-gray-700 py-12 px-6 w-full">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-6">Our Exclusive Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Chauffeur Service</h3>
            <p className="text-gray-300">Luxury transportation with a professional driver. Arrive in style and comfort anywhere in New York City.</p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">VIP Airport Pickup</h3>
            <p className="text-gray-300">Experience first-class airport pickup with our premium car service, perfect for executives and celebrities.</p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Custom Rental Packages</h3>
            <p className="text-gray-300">Personalized luxury experiences with tailored rental packages, including multi-day rentals and exotic car tours.</p>
          </div>
        </div>
      </section>

      <section id="cars" className="bg-gray-600 px-6 py-12 w-full">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">Available Cars</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <Image src={car.image} alt={car.name} width={400} height={300} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-600">{car.price}</p>

                <div className="mt-3 text-gray-700">
                  <p><strong>HP:</strong> {car.horsepower}</p>
                  <p><strong>0-60:</strong> {car.zeroToSixty}</p>
                  <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                </div>

                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewYork;