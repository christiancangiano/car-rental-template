"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CarCarousel from "@/components/CarCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer"; 
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <style jsx global>{`
        @media only screen and (orientation: landscape) {
          section {
            padding: 1rem 2rem;
          }
        }
      `}</style>

    
      <section data-navbar-color="light" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden w-full">
        <Image
          src="/greensto.png"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-opacity-40" />
        <motion.div
          className="relative text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-3">WELCOME</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Experience luxury like never before. From the streets of Manhattan to the highways of Los Angeles, 
            drive the world’s most powerful and prestigious supercars.
          </p>
        </motion.div>
      </section>

      
      <section data-navbar-color="light" className="min-h-screen flex items-center justify-center bg-gray-600 w-full overflow-hidden">
        <CarCarousel />
      </section>

      
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12 w-full">
  <h2 className="text-4xl font-bold mb-8 text-gray-600 text-center">Luxury Car Rentals</h2>

  <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center items-center gap-6">
    
    
    <Link href="/services/newyork" className="w-full md:w-1/2">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col cursor-pointer">
        <Image src="/nyc.png" alt="New York City Car Rental" width={600} height={400} className="w-full h-64 object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-600 mb-4">New York City</h3>
          <p className="text-gray-600 text-base">
            Cruise through the streets of NYC in style with our luxury car rentals.
            Whether you're exploring Manhattan or cruising through Brooklyn, 
            we offer top-tier supercars for every occasion.
          </p>
        </div>
      </div>
    </Link>


    <Link href="/services/losangeles" className="w-full md:w-1/2">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col cursor-pointer">
        <Image src="/hollywood.png" alt="Los Angeles Car Rental" width={600} height={400} className="w-full h-64 object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-600 mb-4">Los Angeles</h3>
          <p className="text-gray-600 text-base">
            Experience Hollywood glamour with our luxury rentals.
            From Beverly Hills to the Pacific Coast Highway, drive the world’s most exclusive supercars in LA.
          </p>
        </div>
      </div>
    </Link>

  </div>
</section>

      
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-600 px-4 w-full overflow-hidden">
        <h2 className="text-4xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <TestimonialCarousel />
      </section>

      <Footer />
    </>
  );
};

export default HomePage;