"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

const cars = [
  { 
    name: "Rolls Royce Cullinan", 
    price: "$2,000/day", 
    image: "/cullinan.png",
    horsepower: "563 HP", 
    zeroToSixty: "4.8 sec", 
    topSpeed: "155 mph"
  },
  { 
    name: "Ferrari Purosangue", 
    price: "$2,500/day", 
    image: "/purosangue2.png",
    horsepower: "715 HP", 
    zeroToSixty: "3.3 sec", 
    topSpeed: "193 mph"
  },
  { 
    name: "Mclaren 720s", 
    price: "$1,500/day", 
    image: "/mclaren720.png",
    horsepower: "710 HP", 
    zeroToSixty: "2.8 sec", 
    topSpeed: "212 mph"
  },
  { 
    name: "Mercedes Benz GT R", 
    price: "$1,000/day", 
    image: "/amggtr3.png",
    horsepower: "577 HP", 
    zeroToSixty: "3.5 sec", 
    topSpeed: "198 mph"
  },
  { 
    name: "Lamborghini Urus", 
    price: "$1,200/day", 
    image: "/urus.png",
    horsepower: "657 HP", 
    zeroToSixty: "3.3 sec", 
    topSpeed: "190 mph"
  },
  { 
    name: "Nissan GT-R", 
    price: "$900/day", 
    image: "/gtr2.png",
    horsepower: "565 HP", 
    zeroToSixty: "2.9 sec", 
    topSpeed: "205 mph"
  },
  { 
    name: "Bentley Continental GT", 
    price: "$1,100/day", 
    image: "/bentley2.png",
    horsepower: "650 HP", 
    zeroToSixty: "3.5 sec", 
    topSpeed: "208 mph"
  },
  { 
    name: "Mercedes Maybach GLS 600", 
    price: "$1,200/day", 
    image: "/maybach600.png",
    horsepower: "550 HP", 
    zeroToSixty: "4.8 sec", 
    topSpeed: "130 mph"
  },
  { 
    name: "Mercedes G63 AMG", 
    price: "$1,500/day", 
    image: "/gwagon.png",
    horsepower: "577 HP", 
    zeroToSixty: "4.2 sec", 
    topSpeed: "149 mph"
  },
  { 
    name: "Tesla Model S Plaid", 
    price: "$1,200/day", 
    image: "/modelsplaid.png",
    horsepower: "1020 HP", 
    zeroToSixty: "1.9 sec", 
    topSpeed: "200 mph"
  },
  { 
    name: "Hellcat Widebody Jailbreak", 
    price: "$900/day", 
    image: "/srt.png",
    horsepower: "717 HP", 
    zeroToSixty: "3.4 sec", 
    topSpeed: "203 mph"
  },
];

const LosAngeles = () => {
  return (
    <>
      <section 
        className="min-h-screen flex flex-col items-center px-6 py-16 md:py-20 w-full bg-[url('/amggtr3.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="h-25"></div>
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Luxury Car Rentals in Los Angeles</h1>

        <p className="text-lg text-white max-w-3xl text-center mb-12 md:mb-16 bg-black/50 p-4 rounded-lg">
          Experience the thrill of driving the world's most exclusive vehicles through the streets of Beverly Hills, 
          Hollywood, and beyond. Our fleet offers the finest selection of luxury and exotic cars for rent, 
          perfect for special occasions, business events, or simply indulging in a high-performance ride.
        </p>

        <p className="text-lg text-white max-w-3xl text-center mb-12 md:mb-16 bg-black/50 p-4 rounded-lg">
          We offer door-to-door delivery, chauffeur services, and custom rental packages tailored to your needs. 
          Whether you're looking for a weekend getaway or an extended luxury rental, we've got you covered.
        </p>
      </section>
      
      <section className="bg-gray-700 py-12 px-6 w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-6">Our Exclusive Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Chauffeur Service</h3>
            <p className="text-gray-300">Luxury transportation with a professional driver. Arrive in style and comfort anywhere in Los Angeles.</p>
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

      <section className="bg-gray-600 px-6 py-12 w-full">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-8">Available Cars</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <Image src={car.image} alt={car.name} width={400} height={300} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-600">{car.price}</p>

                <div className="mt-3 text-black">
                  <p><strong>HP:</strong> {car.horsepower}</p>
                  <p><strong>0-60:</strong> {car.zeroToSixty}</p>
                  <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                </div>
                <Link href="/booknow">
                    <button className="mt-4 bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-900 transition">
                    Book Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LosAngeles;