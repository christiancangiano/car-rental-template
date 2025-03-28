"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Left Side: Logo & Contact Info */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <Image src="/assets/nonamewhite.svg" alt="Company Logo" width={150} height={50} priority />
          <div className="text-gray-400">
            <p>Email: <a href="mailto:contact@nonameexotics.com" className="text-red-500 hover:underline">contact@nonameexotics.com</a></p>
            <p>Hours: 8:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* Center: Locations */}
        <div className="flex flex-col md:flex-row gap-8 text-sm">
          {/* NYC Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white">New York Location</h3>
            <p className="text-gray-400">410 Park Ave, New York, NY 10022</p>
            <p className="text-gray-400">Phone: <span className="text-red-500">(212) 555-7890</span></p>
          </div>

          {/* LA Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white">Los Angeles Location</h3>
            <p className="text-gray-400">8423 Wilshire Blvd, Beverly Hills, CA 90211</p>
            <p className="text-gray-400">Phone:<span className="text-red-500">(310) 555-1234</span> </p>
          </div>
        </div>

        {/* Right Side: Social Media */}
        <div className="flex space-x-5 mt-6 md:mt-0">
          <Link href="https://facebook.com" target="_blank"><FaFacebook className="text-white text-2xl hover:text-gray-400 transition" /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-white text-2xl hover:text-gray-400 transition" /></Link>
          <Link href="https://twitter.com" target="_blank"><FaXTwitter className="text-white text-2xl hover:text-gray-400 transition" /></Link>
          <Link href="https://youtube.com" target="_blank"><FaYoutube className="text-white text-2xl hover:text-gray-400 transition" /></Link>
          <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="text-white text-2xl hover:text-gray-400 transition" /></Link>
          <Link href="https://tiktok.com" target="_blank"><FaTiktok className="text-white text-2xl hover:text-gray-400 transition" /></Link>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © Christian Cangiano 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;