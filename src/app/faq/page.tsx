"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What are the age requirements to rent a luxury car?",
    answer: "Drivers must be at least 25 years old with a valid driver’s license and insurance. Under 25? A young driver surcharge may apply."
  },
  {
    question: "Is a security deposit required?",
    answer: "Yes, a refundable security deposit is required based on the car's value. Deposits range from $1,000 to $10,000 and are refunded after the car is returned in good condition."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, Apple Pay, Google Pay, and bank transfers. Cash payments are not accepted."
  },
  {
    question: "Is there a mileage limit?",
    answer: "Yes, each rental includes a mileage limit (typically 100 miles per day). Extra miles are charged based on the car model."
  },
  {
    question: "Do I need insurance to rent a car?",
    answer: "Yes, full-coverage insurance is required. If you don't have coverage, we offer insurance options for an additional fee."
  },
  {
    question: "Can I rent a car for one day?",
    answer: "Yes, but certain high-end vehicles require a two-day minimum rental on weekends."
  },
  {
    question: "Do you offer delivery and pickup?",
    answer: "Yes! We offer door-to-door delivery and pickup services for an additional fee, including airport drop-offs."
  },
  {
    question: "Can I drive the car out of state?",
    answer: "Out-of-state driving is allowed with prior approval. Additional fees may apply."
  },
  {
    question: "What happens if I return the car late?",
    answer: "Late returns incur a fee based on the hourly rate. Contact us if you need to extend your rental."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations must be made 48 hours in advance for a full refund. Last-minute cancellations may incur a fee."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <div className="h-10 bg-gray-700"/>
      <section className="bg-gray-700 px-6 py-12 md:py-16 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Find Answers to Common Questions</h2>
        
        <div className="max-w-4xl w-full space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 text-lg font-semibold text-gray-700 flex justify-between items-center hover:bg-gray-200 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 text-gray-600 border-t border-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;