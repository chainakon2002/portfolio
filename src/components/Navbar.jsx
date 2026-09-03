import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        height: isScrolled ? "3.5rem" : "4.5rem",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-40 flex items-center
        bg-black/60
        backdrop-blur-xl
        backdrop-saturate-150
        border-b border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.3)]
      "
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div
          className={`flex items-center w-full transition-all duration-300 ${
            isScrolled ? "justify-center" : "justify-start"
          }`}
        >
          {/* LOGO: อยู่ซ้ายตอนอยู่บนสุด และสไลด์มาตรงกลางอย่างนุ่มนวลเมื่อ Scroll */}
          <motion.a
            href="#home"
            layout
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white z-50 cursor-pointer hover:opacity-85 transition-opacity"
          >
            Film.<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Dev</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};