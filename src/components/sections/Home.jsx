import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import 'animate.css';

export const Home = () => {
  const [text, setText] = useState("");
  const [showScroll, setShowScroll] = useState(true);
  const fullText = "Hi, I'm Chainakon Sarisee";

  const prefix = "Hi, I'm ";
  const prefixTyped = text.slice(0, prefix.length);
  const nameTyped = text.slice(prefix.length);
  const isComplete = text.length === fullText.length;

  useEffect(() => {
    // 1. ระบบพิมพ์ดีด (Typewriter) แบบหน่วงเวลา 3 วินาที
    let index = 0;
    let interval;
    const delayTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index++; 
        setText(fullText.substring(0, index));
        if (index >= fullText.length) clearInterval(interval);
      }, 120); 
    }, 3000); 

    // 2. ระบบเช็คการเลื่อนหน้าจอเพื่อซ่อนไอคอน Scroll Down
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ทำความสะอาดการตั้งเวลาและ Event เมื่อเปลี่ยนหน้า
    return () => {
      clearTimeout(delayTimeout);
      if (interval) clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      <RevealOnScroll>
        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          
          {/* หัวข้อและเคอร์เซอร์: จัดให้ยืดหยุ่นไม่ทับกันบนมือถือ */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight inline-block relative">
            <span className="text-white">
              {prefixTyped}
            </span>
            {nameTyped && (
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {nameTyped}
              </span>
            )}
            {/* 🍎 Superscript Nickname "Film" สีต่อจาก Sarisee (indigo-400 -> violet-400) มองเห็นชัดเจน 🍎 */}
            {isComplete && (
              <motion.span
                initial={{ opacity: 0, y: 6, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block relative -top-3 sm:-top-5 md:-top-7 text-xs sm:text-sm md:text-xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent ml-1 sm:ml-1.5 select-none tracking-normal"
              >
                Film
              </motion.span>
            )}
            <span className="inline-block w-[3px] md:w-[6px] h-[1em] bg-cyan-400 ml-1 translate-y-1 animate-pulse rounded-full"></span>
          </h1>

        </div>
      </RevealOnScroll>

      {/* ไอคอน Scroll Down: ค่อยๆ เฟดหายไปเมื่อเลื่อนหน้าจอ */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 w-full flex justify-center z-20"
          >
            <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-400 transition-colors">
              <span className="text-xs font-semibold mb-2 tracking-widest uppercase animate-pulse">
                Scroll Down
              </span>
              <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 15, 0], opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-3 bg-current rounded-full"
                />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};