import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "../RevealOnScroll";
import { AppleProjectModal } from "../AppleProjectModal";
import { AppleCapsuleButton } from "../AppleCapsuleButton";
import thumbnail from "../../assets/Thumbnail.jpg";
import thumbnail2 from "../../assets/Thumbnail2.png";
import Filecover from "../../assets/File cover.png";
import projectAA from "../../assets/projectAA.jpg";
import projectmyid from "../../assets/projectMyid.jpg";
import maxfilm from "../../assets/maxfilm.png";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const m5GradientRef = useRef(null);
  const aboutGradientRef = useRef(null);
  const project1MacbookRef = useRef(null);
  const project1TriggerRef = useRef(null);

  // 🍎 Interactive Horizontal Carousel State 🍎
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [hasCompletedFirstPass, setHasCompletedFirstPass] = useState(false);
  const hasCompletedRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollYRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const isMouseDownRef = useRef(false);

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash === "#projects") {
      const section = document.getElementById("projects");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const projects = [
    {
      id: "ecommerce-web",
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      fullDescription:
        "ระบบร้านค้าออนไลน์แบบครบวงจร พัฒนาด้วย React และ Node.js ตกแต่งด้วย Tailwind CSS รองรับการจัดการสินค้าผ่านฐานข้อมูล MySQL และ Supabase มีระบบชำระเงินที่ปลอดภัยและหน้าตาที่เป็นมิตรกับผู้ใช้งาน",
      image: thumbnail,
      stack: ["React", "Node.js", "Vite.js", "Tailwind CSS", "MySQL", "Supabase"],
      link: "https://filmcs-shop.vercel.app",
    },
    {
      id: "mobile-app",
      title: "Mobile Application (Recycle)",
      description:
        "Mobile application for garbage collection services with separate user and staff functionalities.",
      fullDescription:
        "แอปพลิเคชันมือถือพัฒนาด้วย React Native และ Expo สำหรับเรียกใช้บริการรถเก็บขยะ ระบบแยกการใช้งานชัดเจนระหว่างผู้ใช้งานทั่วไป (เรียกบริการ) และเจ้าหน้าที่ (จัดการเส้นทางและคิว) ช่วยให้การจัดการขยะในชุมชนมีประสิทธิภาพมากขึ้น",
      image: thumbnail2,
      stack: ["React Native", "Expo CLI", "Android Studio"],
      link: "#",
    },
    {
      id: "data-mining",
      title: "Mushroom Data Classification",
      description:
        "Application of data mining techniques to classify edible vs. poisonous mushrooms.",
      fullDescription:
        "การประยุกต์ใช้เทคนิคการทำเหมืองข้อมูล (Data Mining) เพื่อจำแนกเห็ดที่กินได้และเห็ดพิษ โดยใช้โมเดล Decision Tree และ Neural Network วิเคราะห์จากลักษณะภายนอก เช่น รูปร่างของหมวกเห็ด กลิ่น และสี เพื่อความปลอดภัยในด้านโภชนาการ",
      image: Filecover,
      stack: ["Weka", "Decision Tree", "Naïve Bayes", "Neural Network", "Excel"],
      link: "https://drive.google.com/file/d/1Pt_6YD0BIH-sEtIKWpLzFoSjzXCsvsiS/view?usp=sharing",
    },
    {
      id: "project-myid",
      title: "MyID ระบบสมัครสมาชิก และยืนยันตัวตนOTP",
      description:
        "ระบบลงชื่อเข้าใช้ MyID ที่เน้นความปลอดภัยด้วยการยืนยันตัวตนผ่าน OTP และการจัดการข้อมูลสมาชิก",
      fullDescription:
        "ระบบจัดการโปรไฟล์ผู้ใช้ 'MyID' ที่เน้นความปลอดภัยเป็นหลัก พัฒนาด้วย Next.js และ Firebase รองรับการสมัครสมาชิกและยืนยันตัวตนผ่านรหัส OTP (One-Time Password) และ แจ้งเตือนทาง Email",
      image: projectmyid,
      stack: ["Next.js", "Firebase", "Tailwind CSS", "Email.js"],
      link: "https://myid-otp.vercel.app",
    },
    {
      id: "attendance-system",
      title: "Smart Attendance System",
      description:
        "ระบบเช็คชื่ออัจฉริยะสำหรับนักศึกษาที่ช่วยลดขั้นตอนการเช็คชื่อแบบเดิมๆ",
      fullDescription:
        "ระบบเช็คชื่ออัจฉริยะ (Smart Attendance System) สำหรับนักศึกษา ช่วยลดขั้นตอนการเช็คชื่อแบบเดิมๆ โดยใช้ระบบฐานข้อมูลในการบันทึกเวลาและสถิติการเข้าเรียนแบบ Real-time เพื่อความโปร่งใสและตรวจสอบข้อมูลได้ง่าย",
      image: projectAA,
      stack: ["React", "Firebase", "Tailwind CSS"],
      link: "https://2026-student-attendance-system.vercel.app",
    },
    {
      id: "maxfilm",
      title: "Max Film ERP",
      description: "ระบบออกสัญญาว่าจ้าง ธุระกิจหนังกลางแปลง",
      fullDescription:
        "ระบบนี้เป็นโมดูล ออกเอกสารสัญญาจ้าง แบบ Digital Flow ที่ช่วยลดขั้นตอนการเขียนกระดาษ โดยเน้นการใช้งานที่ง่าย",
      image: maxfilm,
      stack: ["React", "Firebase", "Tailwind CSS", "react-pdf/renderer"],
      link: "https://erp-maxfilm.vercel.app",
    },
  ];

  const getScrollDistance = () => {
    const track = trackRef.current;
    if (!track) return 1200;
    return Math.max(track.scrollWidth - window.innerWidth + 120, 600);
  };

  // 🍎 GSAP Horizontal Scroll Pinning: Locks ONLY on the first scroll down, then unlocks permanently 🍎
  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          id: "projects-horizontal-scroll",
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!hasCompletedRef.current) {
              setCanScrollLeft(self.progress > 0.02);
              setCanScrollRight(self.progress < 0.98);
            }
          },
          onLeave: (self) => {
            // 🍎 One-Time Lock: When user finishes scrolling through cards, unpin permanently 🍎
            if (!hasCompletedRef.current) {
              hasCompletedRef.current = true;
              setHasCompletedFirstPass(true);

              const dist = self.end - self.start;
              // Remove pin spacer and restore inline styling
              self.kill(true);

              // Compensate scroll position to prevent visual jump
              window.scrollTo(0, window.scrollY - dist);

              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 60);
            }
          },
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

  // 🍎 Trackpad 2-finger horizontal swipe support (translates deltaX to horizontal card scroll during 1st pass) 🍎
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      if (!hasCompletedRef.current) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
          const st = ScrollTrigger.getById("projects-horizontal-scroll");
          if (!st || !st.isActive) return;

          e.preventDefault();
          const targetY = Math.max(st.start, Math.min(st.end, window.scrollY + e.deltaX * 1.3));
          window.scrollTo({ top: targetY, behavior: "auto" });
        }
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, []);

  // 🍎 Update scroll buttons in completed mode (when cards container is horizontally scrollable) 🍎
  useEffect(() => {
    if (!hasCompletedFirstPass) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [hasCompletedFirstPass]);

  // 🍎 Mouse Click-and-Drag to pan cards left and right 🍎
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isMouseDownRef.current = true;
    startXRef.current = e.clientX;
    startScrollYRef.current = window.scrollY;
    if (scrollContainerRef.current) {
      scrollLeftStartRef.current = scrollContainerRef.current.scrollLeft;
    }
    dragDistanceRef.current = 0;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMouseDownRef.current) return;
      const dx = e.clientX - startXRef.current;
      dragDistanceRef.current = Math.abs(dx);
      if (Math.abs(dx) > 4) {
        setIsDragging(true);
      }

      if (!hasCompletedRef.current) {
        // Pinned Mode: translate horizontal drag to page scroll position
        const st = ScrollTrigger.getById("projects-horizontal-scroll");
        if (!st) return;

        const maxDist = getScrollDistance();
        if (maxDist <= 0) return;

        const scrollRatio = (st.end - st.start) / maxDist;
        const targetScrollY = Math.max(
          st.start,
          Math.min(st.end, startScrollYRef.current - dx * scrollRatio)
        );
        window.scrollTo({ top: targetScrollY, behavior: "auto" });
      } else {
        // Completed Mode: standard scrollLeft container drag
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = scrollLeftStartRef.current - dx;
        }
      }
    };

    const handleMouseUp = () => {
      if (isMouseDownRef.current) {
        isMouseDownRef.current = false;
        setTimeout(() => setIsDragging(false), 50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleCardClick = (project) => {
    if (dragDistanceRef.current > 6) return;
    setSelectedProject(project);
  };

  // 🍎 Header Title Scroll Gradient Transition (About Me Blue/Cyan -> Apple M5 Sage/Slate) 🍎
  useGSAP(
    () => {
      if (!headerRef.current || !m5GradientRef.current || !aboutGradientRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "+=950", // ยืดระยะทางเลื่อนหน้าจอให้ยาวขึ้นอย่างมาก (~950px) เพื่อให้สีค่อยๆ เปลี่ยนอย่างช้าๆ นุ่มนวล
          scrub: 1.5,   // เพิ่มความสมูทนุ่มนวล ไม่กระชาก
        },
      });

      tl.fromTo(
        m5GradientRef.current,
        { opacity: 0 },
        { opacity: 1, ease: "none" },
        0
      ).fromTo(
        aboutGradientRef.current,
        { opacity: 1 },
        { opacity: 0, ease: "none" },
        0
      );
    },
    { scope: headerRef }
  );

  // 🍎 Featured Project 1 MacBook Slide-in Animation (peeks in from left edge like About Me) 🍎
  useGSAP(
    () => {
      if (!project1MacbookRef.current) return;

      gsap.fromTo(
        project1MacbookRef.current,
        {
          x: "-100%", // ซ่อนอยู่ด้านซ้ายนอกจอ
          opacity: 0.2,
        },
        {
          x: "-18%", // สไลด์ออกมาและหยุดให้โผล่มาประมาณครึ่งเครื่อง (~58% อยู่บนหน้าจอ)
          opacity: 1,
          duration: 2.7, // สไลด์ออกมาช้าๆ นุ่มนวล มีระดับ เท่ากับ About Me
          ease: "power2.out",
          scrollTrigger: {
            trigger: project1TriggerRef.current || project1MacbookRef.current,
            start: "top 75%",
            once: true, // เล่นรอบเดียวและอยู่ถาวร
          },
        }
      );
    },
    { scope: project1TriggerRef }
  );

  // 🍎 Arrow button handlers: Smoothly scroll left/right by one card step 🍎
  const handlePrev = () => {
    if (!hasCompletedRef.current) {
      const st = ScrollTrigger.getById("projects-horizontal-scroll");
      if (!st) return;
      const cardStep = window.innerWidth > 768 ? 580 : 340;
      const maxDist = getScrollDistance();
      const scrollStep = (cardStep / maxDist) * (st.end - st.start);
      const targetY = Math.max(st.start, window.scrollY - scrollStep);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      const container = scrollContainerRef.current;
      if (!container) return;
      const cardStep = window.innerWidth > 768 ? 580 : 340;
      container.scrollBy({ left: -cardStep, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (!hasCompletedRef.current) {
      const st = ScrollTrigger.getById("projects-horizontal-scroll");
      if (!st) return;
      const cardStep = window.innerWidth > 768 ? 580 : 340;
      const maxDist = getScrollDistance();
      const scrollStep = (cardStep / maxDist) * (st.end - st.start);
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect && rect.top > 20) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const targetY = Math.min(st.end, window.scrollY + scrollStep);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      const container = scrollContainerRef.current;
      if (!container) return;
      const cardStep = window.innerWidth > 768 ? 580 : 340;
      container.scrollBy({ left: cardStep, behavior: "smooth" });
    }
  };

  return (
    <div id="projects" className="relative z-20 w-full bg-black text-white overflow-hidden">
      {/* ============================================================ */}
      {/* 🍎 MASTER SECTION HEADER: FEATURED PROJECTS 🍎 */}
      {/* ============================================================ */}
      <div
        ref={headerRef}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-32 pb-4"
      >
        <RevealOnScroll>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-3">
            Portfolio Spotlight • Curated Collection
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.08]">
            <span className="relative inline-block">
              {/* Layer 1: About Me Color (blue-400 via cyan-400 to indigo-400) */}
              <span
                ref={aboutGradientRef}
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent inline-block"
              >
                Featured Projects.
              </span>

              {/* Layer 2: Apple M5 Chipset Palette (fades in on scroll) */}
              <span
                ref={m5GradientRef}
                className="absolute inset-0 bg-gradient-to-r from-[#b5d7d2] via-[#8ab8bc] to-[#597d95] bg-clip-text text-transparent inline-block pointer-events-none opacity-0"
              >
                Featured Projects.
              </span>
            </span>
            <br />
            <span className="text-white">
              Built for real-world impact.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#86868b] max-w-3xl leading-relaxed">
            A curated collection of software projects, web applications, and engineering builds — designed and developed to deliver high performance, clean architecture, and real-world solutions.
          </p>
        </RevealOnScroll>
      </div>

      {/* ============================================================ */}
      {/* 🍎 FEATURED PROJECT 1: E-Commerce Web App 🍎 */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-20 sm:pb-28 border-t border-white/[0.1] mt-10 sm:mt-14">
        <RevealOnScroll>
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-3">
            Featured Project • Web Architecture
          </p>

          {/* Giant Apple Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-12 sm:mb-16 max-w-4xl">
            Full-stack commerce.{" "}
            <span className="text-[#86868b]">Scaled for performance.</span>
          </h2>

          {/* 2-Column Apple Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: 🍎 MacBook Mockup: โผล่มาครึ่งจอจากด้านซ้าย พร้อมปุ่ม Apple Capsule 🍎 */}
            <div
              ref={project1TriggerRef}
              className="lg:col-span-7 flex flex-col items-center lg:items-start macbook-left-bleed relative"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(projects[0])}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(projects[0]);
                  }
                }}
                className="group cursor-pointer focus:outline-none relative flex justify-start select-none w-auto"
                aria-label="Open E-Commerce Web App details"
              >
                {/* Ambient Apple Glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/25 via-cyan-500/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

                {/* 🍎 MacBook Mockup Container (โผล่มาครึ่งจอจากขอบซ้าย - ปลดล็อกขนาดให้ใหญ่เต็มตาจริง) 🍎 */}
                <div
                  ref={project1MacbookRef}
                  className="relative transform-gpu pointer-events-auto"
                  style={{
                    width: "clamp(550px, 65vw, 1050px)",
                    maxWidth: "none",
                    willChange: "transform",
                  }}
                >
                  <img
                    src="/MacBook_Mockups_projeck2.png"
                    alt="E-Commerce Web App on MacBook"
                    width={2048}
                    height={1235}
                    className="w-full h-auto object-contain select-none filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    style={{ maxWidth: "none" }}
                    loading="eager"
                  />
                </div>
              </div>

              {/* 🍎 Apple M5-style Under-MacBook Bar (Caption + Centered Capsule Button) 🍎 */}
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between w-full pl-6 sm:pl-10 lg:pl-14 gap-4">
                <p className="text-xs text-[#86868b] tracking-tight font-medium hidden sm:block select-none">
                  Film CS Store • Web Architecture
                </p>
                <div className="sm:mr-12 md:mr-20 lg:mr-28">
                  <AppleCapsuleButton
                    onClick={() => setSelectedProject(projects[0])}
                    text="Explore project details"
                  />
                </div>
              </div>
            </div>

            {/* Right: 🍎 Apple Editorial Story & Spec Callouts (Matching Reference Image) 🍎 */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6 xl:pl-10">

              {/* Editorial Narrative (Matching Apple Reference Headline Typography) */}
              <p className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] font-semibold text-white tracking-tight leading-[1.28] max-w-xl">
                A complete full-stack e-commerce platform engineered for scale. Built with React and Node.js for lightning-fast responsiveness, reactive cart state, and dynamic inventory control.
              </p>

              {/* 2 Clean Spec Callouts (Matching Reference Purple / Gradient Highlights) */}
              <div className="space-y-2.5 pt-1">
                <p className="text-lg sm:text-xl lg:text-[21px] font-medium text-[#c084fc] tracking-tight">
                  Component-driven UI styled with Tailwind CSS
                </p>
                <p className="text-lg sm:text-xl lg:text-[21px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] via-[#a855f7] to-[#f472b6] tracking-tight">
                  Production deployed on Vercel with real-time cloud sync
                </p>
              </div>

              {/* Secondary Apple Link */}
              <div className="pt-2">
                <a
                  href="https://filmcs-shop.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-[#2997ff] hover:text-[#52a9ff] transition-colors group/live"
                >
                  <span>Visit Live Store</span>
                  <span className="text-xl transition-transform group-hover/live:translate-x-1">›</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ============================================================ */}
      {/* 🍎 FEATURED PROJECT 2: Mushroom Data Classification 🍎 */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-24 sm:pb-32 border-t border-white/[0.1]">
        <RevealOnScroll>
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-3">
            Featured Research • Machine Learning & Data Mining
          </p>

          {/* Giant Apple Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-12 sm:mb-16 max-w-4xl">
            Predictive classification.{" "}
            <span className="text-[#86868b]">Machine learning for safety.</span>
          </h2>

          {/* 2-Column Apple Showcase (Alternating: Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left on Desktop: Narrative Story, Spec Callouts & Link */}
            <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
              {/* Editorial Narrative */}
              <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-white tracking-tight leading-[1.35]">
                Machine learning algorithms benchmarked for biological safety. Leveraging Decision Trees and Neural Networks to classify edible versus toxic mushroom species with high accuracy.
              </p>

              {/* 2 Clean Spec Callouts */}
              <div className="space-y-2 pt-2">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-white tracking-tight">
                  Trained & validated across 8,124 multivariate instances
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] tracking-tight">
                  10-fold cross-validation with near-100% predictive accuracy
                </p>
              </div>

              {/* Secondary Apple Link */}
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1Pt_6YD0BIH-sEtIKWpLzFoSjzXCsvsiS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#2997ff] hover:text-[#52a9ff] transition-colors group/paper"
                >
                  <span>Read Research Paper</span>
                  <span className="text-lg transition-transform group-hover/paper:translate-x-1">›</span>
                </a>
              </div>
            </div>

            {/* Right on Desktop: Device/Paper Preview Frame with Apple Capsule Button */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedProject(projects[2])}
                className="block text-left relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161617] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group cursor-pointer focus:outline-none"
              >
                <img
                  src={Filecover}
                  alt="Mushroom Data Classification"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </button>

              {/* 🍎 Apple M5-style Animated Capsule Button (Circle -> Pill on scroll) 🍎 */}
              <AppleCapsuleButton
                onClick={() => setSelectedProject(projects[2])}
                text="Explore research details"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ============================================================ */}
      {/* 🍎 ALL PROJECTS HORIZONTAL SLIDER (PINNED ON 1ST PASS) 🍎 */}
      {/* ============================================================ */}
      <section
        ref={sectionRef}
        className={`relative z-20 w-full bg-black border-t border-white/[0.1] select-none ${
          !hasCompletedFirstPass
            ? "h-screen min-h-screen overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-8 sm:pb-12"
            : "min-h-[750px] lg:min-h-screen flex flex-col justify-center pt-16 sm:pt-20 pb-16 sm:pb-24"
        }`}
      >
        {/* Apple Section Header */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 mb-6 sm:mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-2">
              All Projects & Archive
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              All Projects.{" "}
              <span className="text-[#86868b]">Selected Works & Applications.</span>
            </h2>
          </div>

          {/* Apple-style Navigation Arrows */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all active:scale-95 shadow-lg ${
                !canScrollLeft
                  ? "opacity-30 cursor-not-allowed pointer-events-none"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next project"
              className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all active:scale-95 shadow-lg ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed pointer-events-none"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Cards Carousel Track Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          className={`w-full py-4 my-auto cursor-grab active:cursor-grabbing ${
            hasCompletedFirstPass ? "overflow-x-auto no-scrollbar" : "overflow-visible"
          } ${isDragging ? "select-none" : ""}`}
          style={
            hasCompletedFirstPass
              ? {
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: isDragging ? "auto" : "smooth",
                }
              : {}
          }
        >
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 px-6 sm:px-10 lg:px-16 w-max will-change-transform"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[320px] sm:w-[460px] md:w-[520px] lg:w-[560px] flex-shrink-0 group cursor-default"
              >
                {/* Apple Rounded Card Box */}
                <div
                  onClick={() => handleCardClick(project)}
                  className="relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#161617] border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable="false"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  {/* External link button overlay if available */}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (dragDistanceRef.current > 6) {
                          e.preventDefault();
                          return;
                        }
                        e.stopPropagation();
                      }}
                      className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-md z-10"
                      title="Open live website"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Apple-style Content Underneath */}
                <div className="mt-4 sm:mt-5">
                  <p className="text-sm sm:text-base text-[#86868b] leading-relaxed line-clamp-3">
                    <strong className="text-white font-semibold">
                      {project.title}.{" "}
                    </strong>
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 mt-3.5">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleCardClick(project)}
                      className="text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 group/link cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <span className="transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🍎 Apple Quick Look / Deep Dive Modal 🍎 */}
      {selectedProject && (
        <AppleProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};