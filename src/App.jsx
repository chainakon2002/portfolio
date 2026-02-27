import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // เพิ่มตัวจัดการเส้นทาง
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { ProjectDetail } from "./components/sections/ProjectDetail";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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