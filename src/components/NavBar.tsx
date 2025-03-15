import { useState, useEffect } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY]);

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

  return (
    <nav
      className={`fixed w-full z-50 transition duration-500 backdrop-blur-lg ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${
        showBackground ? (navbarColor === "light" ? "bg-white text-black" : "bg-black text-white") : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <button className="text-lg flex items-center gap-2">
          <BsSearch /> Search
        </button>
        <Link href="/" className="text-2xl font-bold">
          Exotic Rentals
        </Link>
        <button className="text-lg" onClick={() => setShowMobileMenu(true)}>
          Menu
        </button>
      </div>
      {showMobileMenu && <MobileMenu visible={showMobileMenu} onClose={() => setShowMobileMenu(false)} />}
    </nav>
  );
};

export default Navbar;
