import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion"; // เพิ่ม AnimatePresence
import 'animate.css';

export const Home = () => {
  const [text, setText] = useState("");
  const [showScroll, setShowScroll] = useState(true); // เพิ่ม State สำหรับควบคุมการแสดงผล Scroll Icon
  const fullText = "Hi, I'm Chainakon Sarisee";

  useEffect(() => {
    // 1. ระบบพิมพ์ดีด (Typewriter)
    let index = 0;
    let interval;
    const delayTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index++; 
        setText(fullText.substring(0, index));
        if (index >= fullText.length) clearInterval(interval);
      }, 120); 
    }, 3000); 

    // 2. ระบบเช็คการเลื่อนหน้าจอเพื่อซ่อนไอคอน
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false); // เลื่อนลงเกิน 50px ให้หายไป
      } else {
        setShowScroll(true); // กลับไปบนสุดให้โชว์ใหม่
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(delayTimeout);
      if (interval) clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex justify-center items-center h-[1em]">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              {text}
            </span>
            <span className="w-1 md:w-[6px] h-10 md:h-16 bg-cyan-400 ml-2 animate-pulse rounded-full"></span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto animate__animated animate__pulse animate__infinite animate__slow">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both exceptional
            performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              View Projects
            </a>
            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* ✨ ระบบซ่อนไอคอนแบบมีแอนิเมชัน Fade Out ✨ */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }} // ตอนหายให้เลื่อนลงไปนิดนึงแล้วเฟดออก
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