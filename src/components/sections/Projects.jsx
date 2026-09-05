import { useState, useEffect, useRef } from "react";
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
  const headerRef = useRef(null);
  const m5GradientRef = useRef(null);
  const aboutGradientRef = useRef(null);

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

  // GSAP Horizontal Scroll Pinning
  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollDistance = () => {
        // Total horizontal distance to scroll so that the last card is fully visible
        return track.scrollWidth - window.innerWidth + 120;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          id: "projects-horizontal-scroll",
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(getScrollDistance(), 1200)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

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

  // Arrow button handlers (smooth scroll by card width)
  const handlePrev = () => {
    const cardStep = window.innerWidth > 768 ? 580 : 340;
    window.scrollBy({ top: -cardStep, behavior: "smooth" });
  };

  const handleNext = () => {
    const cardStep = window.innerWidth > 768 ? 580 : 340;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect && rect.top > 60) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollBy({ top: cardStep, behavior: "smooth" });
  };

  return (
    <div id="projects" className="relative z-20 w-full bg-black text-white">
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
            {/* Left: Device Preview Frame with Apple Capsule Button */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedProject(projects[0])}
                className="block text-left relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161617] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group cursor-pointer focus:outline-none"
              >
                <img
                  src={thumbnail}
                  alt="E-Commerce Web App"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </button>

              {/* 🍎 Apple M5-style Animated Capsule Button (Circle -> Pill on scroll) 🍎 */}
              <AppleCapsuleButton
                onClick={() => setSelectedProject(projects[0])}
                text="Explore project details"
              />
            </div>

            {/* Right: Apple M5-style Tech Chips, Narrative Story & Spec Callouts */}
            <div className="lg:col-span-5 space-y-6">

              {/* Editorial Narrative */}
              <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-white tracking-tight leading-[1.35]">
                A complete full-stack e-commerce platform engineered for scale. Built with React and Node.js for lightning-fast responsiveness, reactive cart state, and dynamic inventory control.
              </p>

              {/* 2 Clean Spec Callouts */}
              <div className="space-y-2 pt-2">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-white tracking-tight">
                  Component-driven UI styled with Tailwind CSS
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] to-[#a855f7] tracking-tight">
                  Production deployed on Vercel with real-time cloud sync
                </p>
              </div>

              {/* Secondary Apple Link */}
              <div className="pt-2">
                <a
                  href="https://filmcs-shop.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#2997ff] hover:text-[#52a9ff] transition-colors group/live"
                >
                  <span>Visit Live Store</span>
                  <span className="text-lg transition-transform group-hover/live:translate-x-1">›</span>
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
      {/* 🍎 ALL PROJECTS HORIZONTAL SLIDER 🍎 */}
      {/* ============================================================ */}
      <section
        ref={sectionRef}
        className="relative z-20 w-full h-screen min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-white/[0.1] select-none"
      >
        {/* Apple Section Header */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 flex items-end justify-between gap-4">
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
            aria-label="Previous project"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all active:scale-95 cursor-pointer shadow-lg"
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
            aria-label="Next project"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all active:scale-95 cursor-pointer shadow-lg"
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

      {/* Horizontal Cards Carousel Track */}
      <div className="w-full overflow-visible py-4 my-auto">
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
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#161617] border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* External link button overlay if available */}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={() => setSelectedProject(project)}
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