"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CarCarousel from "@/components/CarCarousel";

const HomePage = () => {
  return (
    <>
      {/* Section 1 - Image Background */}
      <section data-navbar-color="light" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/greensto.png"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40" />

        {/* Content */}
        <motion.div 
          className="relative text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-6">WELCOME</h1>
          <Link href="/fleet">
            <motion.button 
              className="px-6 py-3 bg-white text-black rounded-md text-lg font-medium transition hover:bg-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE OUR FLEET
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Section 2 */}
      <CarCarousel />

      {/* Section 3 */}
      <section data-navbar-color="light" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold">Section 3</h2>
      </section>
    </>
  );
};

export default HomePage;