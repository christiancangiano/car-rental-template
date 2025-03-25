"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cars = [
  {
    name: "Lamborghini STO",
    image: "/greensto.png",
    hp: "631 HP",
    zeroToSixty: "2.8 sec",
    topSpeed: "193 mph",
    price: "$1,500/day",
  },
  {
    name: "Ferrari 812 Superfast",
    image: "/812.png",
    hp: "789 HP",
    zeroToSixty: "2.9 sec",
    topSpeed: "211 mph",
    price: "$1,800/day",
  },
  {
    name: "Rolls Royce Cullinan",
    image: "/cullinan.png",
    hp: "563 HP",
    zeroToSixty: "4.8 sec",
    topSpeed: "155 mph",
    price: "$2,000/day",
  },
  {
    name: "Lamborghini Urus",
    image: "/urus.png",
    hp: "657 HP",
    zeroToSixty: "3.3 sec",
    topSpeed: "190 mph",
    price: "$1,200/day",
  },
  {
    name: "Porsche 911 Turbo S",
    image: "/turbos.png",
    hp: "640 HP",
    zeroToSixty: "2.6 sec",
    topSpeed: "205 mph",
    price: "$1,100/day",
  },
  {
    name: "Nissan GT-R",
    image: "/gtr2.png",
    hp: "600 HP",
    zeroToSixty: "2.5 sec",
    topSpeed: "205 mph",
    price: "$900/day",
  },
  {
    name: "Mercedes-AMG GT R",
    image: "/benzgtr.png",
    hp: "577 HP",
    zeroToSixty: "3.5 sec",
    topSpeed: "198 mph",
    price: "$1,000/day",
  },
  {
    name: "Ferrari Purosangue",
    image: "/purosangue.png",
    hp: "715 HP",
    zeroToSixty: "3.3 sec",
    topSpeed: "193 mph",
    price: "$2,500/day",
  },
];

const CarCarousel = () => {
  return (
    <section 
      data-navbar-color="dark" 
      className="h-screen bg-gray-600 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Our Luxury Fleet</h2>

      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          navigation={{ enabled: true }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  width={500} 
                  height={300} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="text-sm">🏎 {car.hp} | 🚀 {car.zeroToSixty} | 🔝 {car.topSpeed}</p>
                  <p className="text-lg font-semibold mt-2">{car.price}</p>
                  <Link href="/booknow">
                    <button className="mt-4 w-full bg-red-700 text-white py-2 rounded-md transition hover:bg-red-900">
                      BOOK NOW
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarCarousel;