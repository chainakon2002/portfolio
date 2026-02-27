import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.nav
      animate={{
        height: isScrolled ? "3.5rem" : "4.5rem",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-40 flex items-center
        /* =========================================
           ✨ LIQUID GLASS EFFECT CLASSES ✨
           ========================================= */
        bg-white/5 /* พื้นหลังใสๆ อมขาวนิดๆ */
        backdrop-blur-xl /* เบลอขั้นสุด */
        backdrop-saturate-150 /* เร่งสีที่อยู่ข้างหลังให้สดขึ้น (เหมือนมองผ่านน้ำ) */
        border-b border-white/10 /* เส้นขอบกระจกด้านล่าง */
        shadow-[0_4px_30px_rgba(0,0,0,0.5)] /* เงาตกกระทบให้ดูมีมิติ */
        /* ========================================= */
      "
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div
          className={`flex items-center w-full transition-all duration-300 ${
            isScrolled ? "justify-center" : "justify-between"
          }`}
        >
          {/* LOGO */}
          <motion.a
            href="#home"
            layout
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="font-mono text-xl sm:text-2xl font-bold text-white z-50 cursor-pointer tracking-wider"
          >
            Film<span className="text-blue-500">.Dev</span>
          </motion.a>

          {/* MENUS */}
          <AnimatePresence mode="popLayout">
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex items-center"
              >
                {/* ไอคอนมือถือ */}
                <div
                  className="w-7 h-5 relative cursor-pointer z-40 md:hidden ml-4"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-4 h-0.5 bg-blue-400"></span>
                  </div>
                </div>

                {/* ลิงก์ Desktop */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-all">
                    Home
                  </a>
                  <a href="#about" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-all">
                    About
                  </a>
                  <a href="#projects" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-all">
                    Projects
                  </a>
                  <a href="#contact" className="text-gray-300 hover:text-white hover:text-shadow-sm transition-all">
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};