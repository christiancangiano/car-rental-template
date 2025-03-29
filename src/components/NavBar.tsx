"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "@/app/fonts.css";

// 2025 Designed and built by Christian Cangiano
// Not an actual business only intended as a template and portfolio showcase

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (showMobileMenu) return;
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

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

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "";
  }, [showMobileMenu]);

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
    setShowServicesMenu(false);
    setShowAboutMenu(false);
  };

  const logoSrc = isAtTop ? "/assets/nonamewhite.svg" : navbarColor === "light" ? "/assets/nonameblack.svg" : "/assets/nonamewhite.svg";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition duration-500 backdrop-blur-lg flex items-center justify-between px-6 h-14 ${
          showMobileMenu ? "translate-y-0" : scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } ${
          isAtTop ? "bg-transparent text-white" : navbarColor === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div className="flex items-center justify-between w-full lg:hidden py-3">
          <button onClick={() => router.push("/booknow")} className="text-xs font-medium">
            BOOK NOW
          </button>
          <Image src={logoSrc} alt="Logo" width={110} height={45} priority />
          <button className="text-xs font-medium" onClick={() => setShowMobileMenu(true)}>
            MENU
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex items-center gap-6 text-[0.75rem]">
            <button onClick={() => router.push("/")}>HOME</button>

            <div className="relative group">
              <button className="text-[0.75rem]">SERVICES</button>
              <div className="absolute left-0 mt-2 w-32 bg-black text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => router.push("/services/newyork")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">New York</button>
                <button onClick={() => router.push("/services/losangeles")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">Los Angeles</button>
              </div>
            </div>

            <div className="relative group">
              <button className="text-[0.75rem]">ABOUT US</button>
              <div className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => router.push("/aboutus")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">About Us</button>
                <button onClick={() => router.push("/faq")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">FAQ</button>
                <button onClick={() => router.push("/termsandconditions")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">Terms & Conditions</button>
                <button onClick={() => router.push("/privacypolicy")} className="block px-4 py-2 hover:bg-gray-700 w-full text-left">Privacy Policy</button>
              </div>
            </div>

            <button onClick={() => router.push("/contact")} className="text-[0.75rem]">CONTACT</button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <Image src={logoSrc} alt="Logo" width={140} height={60} priority />
          </div>

          <button onClick={() => router.push("/booknow")} className="text-[0.75rem] font-medium">
            BOOK NOW
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              onClick={handleCloseMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-full bg-gray-700 text-white z-50 flex flex-col py-10 px-6"
            >
              <button className="absolute top-4 right-6 text-xl" onClick={handleCloseMenu}>
                ✕
              </button>

              {!showServicesMenu && !showAboutMenu ? (
                <nav className="mt-8 flex flex-col space-y-6 text-lg font-semibold text-left">
                  <button onClick={() => { router.push("/"); handleCloseMenu(); }}>Home</button>
                  <button onClick={() => setShowServicesMenu(true)}>Services</button>
                  <button onClick={() => setShowAboutMenu(true)}>About Us</button>
                  <button onClick={() => { router.push("/contact"); handleCloseMenu(); }}>Contact</button>
                  <button onClick={() => { router.push("/booknow"); handleCloseMenu(); }} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                    BOOK NOW
                  </button>
                </nav>
              ) : showServicesMenu ? (
                <motion.div className="mt-8 flex flex-col space-y-6 text-left">
                <h1 className="flex flex-box text-xl justify-center h-20 p-6">Our Services</h1>
                <button onClick={() => { router.push("/services/newyork"); handleCloseMenu(); }} className="flex items-center space-x-4">
                <Image src="/nyc.png" alt="New York Services" width={200} height={200} className="rounded-md" />
                <span>New York Services</span>
                                        </button>
                <button onClick={() => { router.push("/services/losangeles"); handleCloseMenu(); }} className="flex items-center space-x-4">
                <Image src="/hollywood.png" alt="Los Angeles Services" width={200} height={200} className="rounded-md" />
                    <span>Los Angeles Services</span>
                    </button> 
                    <div>
                </div>
                <button onClick={() => setShowServicesMenu(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">← Back</button>
                </motion.div>
                ) : (
                <motion.div className="mt-8 flex flex-col space-y-6 text-left">
                  <button onClick={() => { router.push("/aboutus"); handleCloseMenu(); }}>About Us</button>
                  <button onClick={() => { router.push("/faq"); handleCloseMenu(); }}>FAQ</button>
                  <button onClick={() => { router.push("/termsandconditions"); handleCloseMenu(); }}>Terms & Conditions</button>
                  <button onClick={() => { router.push("/privacypolicy"); handleCloseMenu(); }}>Privacy Policy</button>
                  <button onClick={() => setShowAboutMenu(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">← Back</button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;