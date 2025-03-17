"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import "@/app/fonts.css";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (showMobileMenu) return;

      const currentScrollY = window.scrollY;
      setShowBackground(currentScrollY > 0);

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, showMobileMenu]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-navbar-color");
            setNavbarColor(bgColor || "transparent");
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = navbarColor === "light" ? "/assets/nonameblack.svg" : "/assets/nonamewhite.svg";
  const mobileMenuBg = navbarColor === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <nav
      className={`fixed w-full z-50 transition duration-500 backdrop-blur-lg flex items-center justify-between px-6 py-2 ${
        showMobileMenu ? "translate-y-0" : scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${
        showBackground ? (navbarColor === "light" ? "bg-white text-black" : "bg-black text-white") : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full lg:hidden py-1">
        <button onClick={() => router.push("/book")} className="text-xs font-medium">
          BOOK NOW
        </button>
        <Image src={logoSrc} alt="Logo" width={110} height={45} priority />
        <button className="text-xs font-medium" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          MENU
        </button>
      </div>

      {showMobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute top-[55px] left-0 w-full ${mobileMenuBg} flex flex-col items-center py-4`}
        >
          <button onClick={() => setShowMobileMenu(false)} className="absolute top-4 right-6 text-xl">✕</button>
          <button onClick={() => router.push("/")} className="uppercase py-2">Home</button>
          <button onClick={() => router.push("/fleet")} className="uppercase py-2">The Fleet</button>
          <button onClick={() => router.push("/services")} className="uppercase py-2">Services</button>
          <button onClick={() => router.push("/about-us")} className="uppercase py-2">About Us</button>
          <button onClick={() => router.push("/faq")} className="uppercase py-2">FAQ</button>
          <button onClick={() => router.push("/contact")} className="uppercase py-2">Contact</button>
        </motion.div>
      )}

      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex items-center gap-6 text-[0.75rem]">
          <button onClick={() => router.push("/")}>HOME</button>
          <button onClick={() => router.push("/fleet")}>THE FLEET</button>

          <div className="relative group">
            <button className="text-[0.75rem]">SERVICES</button>
            <div className="absolute left-0 mt-2 w-32 bg-black text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => router.push("/services/new-york")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">New York</button>
              <button onClick={() => router.push("/services/los-angeles")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">Los Angeles</button>
            </div>
          </div>

          <div className="relative group">
            <button className="text-[0.75rem]">ABOUT US</button>
            <div className="absolute left-0 mt-2 w-32 bg-black text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => router.push("/faq")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">FAQ</button>
            </div>
          </div>

          <button onClick={() => router.push("/contact")} className="text-[0.75rem]">CONTACT</button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <Image src={logoSrc} alt="Logo" width={140} height={60} priority />
        </div>

        <button onClick={() => router.push("/book")} className="text-[0.75rem] font-medium">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;