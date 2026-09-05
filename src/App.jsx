import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // เพิ่มตัวจัดการเส้นทาง
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Performance } from "./components/sections/Performance";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Refresh ScrollTrigger เมื่อเข้าสู่หน้าหลักหลัง LoadingScreen เสร็จสิ้น
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      // Refresh ซ้ำเมื่อฟอนต์ทั้งหมดพร้อม
      if (document.fonts) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }

      const handleLoad = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("load", handleLoad);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [isLoaded]);

  return (
    <Router> {/* ต้องครอบทุกอย่างด้วย Router */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          {/* หน้าหลัก: รวมทุก Section ไว้ด้วยกัน */}
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <About />
                <Performance />
                <Projects />
                <Contact />
              </>
            } 
          />
          
          {/* หน้าใหม่: แสดงรายละเอียดโปรเจกต์แยกต่างหาก */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;