"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "John M.", review: "Absolutely phenomenal experience! The car was pristine, and the service was top-notch." },
  { name: "Samantha R.", review: "A dream come true! Smooth ride, excellent customer service, and unforgettable memories." },
  { name: "David L.", review: "Loved every moment behind the wheel. Highly recommended!" },
  { name: "Emma K.", review: "Luxury at its finest! The entire process was seamless and professional." },
  { name: "Michael B.", review: "If you love cars, this is the ultimate experience. Will definitely book again!" },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl">
      <motion.div
        key={index}
        className="bg-white p-6 rounded-2xl shadow-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-xl" />
          ))}
        </div>
        {/* Replaced unescaped quotes with &quot; */}
        <p className="text-lg text-black italic">&quot;{testimonials[index].review}&quot;</p>
        <h3 className="mt-4 text-xl text-black font-semibold">{testimonials[index].name}</h3>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;