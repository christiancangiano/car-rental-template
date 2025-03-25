"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}


interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };


  const validateForm = (): FormErrors => {
    let newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
    <div className=" h-10 bg-gray-800"/>
   
      <section className="bg-gray-700 px-6 py-16 md:py-20 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-6">We Would Love to Hear From You</h2>
        <p className="text-white text-center max-w-2xl mb-8">
          Whether you have a question about rentals, services, or anything else, our team is ready to answer all your inquiries.
        </p>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full"
        >
      
          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
                errors.name ? "border-red-500 border" : "border-none"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

       
          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
                errors.email ? "border-red-500 border" : "border-none"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

       
          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className={`w-full h-32 px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none ${
                errors.message ? "border-red-500 border" : "border-none"
              }`}
              placeholder="Write your message..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

       
          <button 
            type="submit" 
            className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>

        
          {isSubmitted && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-green-500 text-sm mt-4 text-center"
            >
              Message sent successfully! We will get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </section>

    
      <Footer />
    </>
  );
};

export default Contact;