import { useState } from "react";
import Link from "next/link";
import { BsChevronRight, BsX } from "react-icons/bs";
import { motion } from "framer-motion";

type MobileMenuProps = {
  visible: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!visible) return null;

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: "100%" }} 
      animate={{ opacity: 1, x: "0%" }} 
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-black text-white flex flex-col p-6 z-50"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold"
        >
          Exotic Rentals
        </motion.span>
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          onClick={onClose} 
          className="text-3xl"
        >
          <BsX />
        </motion.button>
      </div>
      <nav className="space-y-4 text-lg">
        <Link href="/" className="block" onClick={onClose}>Home</Link>
        <div>
          <button onClick={() => toggleDropdown("services")} className="flex justify-between w-full">
            Services <BsChevronRight className={`transition ${openDropdown === "services" ? "rotate-90" : "rotate-0"}`} />
          </button>
          {openDropdown === "services" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-2 space-y-2"
            >
              <Link href="/services/luxury" className="block" onClick={onClose}>Luxury Rentals</Link>
              <Link href="/services/driver" className="block" onClick={onClose}>Chauffeur Services</Link>
            </motion.div>
          )}
        </div>
        <div>
          <button onClick={() => toggleDropdown("fleet")} className="flex justify-between w-full">
            Our Fleet <BsChevronRight className={`transition ${openDropdown === "fleet" ? "rotate-90" : "rotate-0"}`} />
          </button>
          {openDropdown === "fleet" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-2 space-y-2"
            >
              <Link href="/fleet/sports" className="block" onClick={onClose}>Sports Cars</Link>
              <Link href="/fleet/suv" className="block" onClick={onClose}>Luxury SUVs</Link>
            </motion.div>
          )}
        </div>
        <Link href="/faq" className="block" onClick={onClose}>FAQ</Link>
        <Link href="/about-us" className="block" onClick={onClose}>About Us</Link>
        <Link href="/contact" className="block" onClick={onClose}>Contact</Link>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;