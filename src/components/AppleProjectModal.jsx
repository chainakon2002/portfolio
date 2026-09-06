import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const AppleProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const scrollRef = useRef(null);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsClosing(true);
  }, []);

  useEffect(() => {
    isClosingRef.current = false;
    setIsClosing(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleClose]);

  if (!project) return null;

  // Enriched Apple-style editorial metadata matching Apple M5 sheet design
  const metadata = {
    "ecommerce-web": {
      eyebrow: "Performance & Architecture",
      headline: "Happily ever faster.",
      productName: "E-Commerce Web Platform",
      storyLead:
        "The full-stack e-commerce web platform brings serious speed, real-time cloud data, and modern payment workflows to online shopping.",
      storyBody:
        "Engineered with React 18, Vite, and Node.js to deliver sub-second page transitions and fluid cart reactivity. Backed by a dual database architecture combining MySQL for transactional integrity with Supabase for real-time inventory synchronization, continuously deployed on Vercel with automated SSL encryption.",
      caption: "React 18, Vite, Supabase Cloud, Node.js",
      metrics: [
        { title: "Sub-second", highlight: "Render", desc: "React 18 & Vite client architecture" },
        { title: "Real-time", highlight: "Sync", desc: "Supabase cloud reactive database" },
        { title: "Enterprise", highlight: "MySQL", desc: "Node.js REST APIs with ACID safety" },
      ],
      actionText: "Visit Live Store",
    },
    "data-mining": {
      eyebrow: "Data Science & Machine Learning",
      headline: "Precision classification for safety.",
      productName: "Mushroom Data Classification",
      storyLead:
        "Applied supervised machine learning algorithms to achieve near-perfect predictive classification between edible and poisonous mushroom species.",
      storyBody:
        "Trained on 8,124 multivariate biological instances evaluating morphological features such as cap shape, odor, and gill coloration. Rigorously benchmarked Decision Trees (J48) and Multilayer Perceptron Neural Networks against Naïve Bayes using 10-fold cross-validation in Weka 3.8 to ensure absolute dietary and nutritional safety.",
      caption: "Weka 3.8, Decision Tree (J48), Neural Network",
      metrics: [
        { title: "8,124", highlight: "Instances", desc: "Multivariate biological dataset" },
        { title: "99.8%", highlight: "Accuracy", desc: "Decision Tree (J48) & Neural Networks" },
        { title: "10-Fold", highlight: "Validation", desc: "Weka 3.8 rigorous benchmark suite" },
      ],
      actionText: "Read Research Paper",
    },
    "mobile-app": {
      eyebrow: "Mobile Logistics & Engineering",
      headline: "Cleaner communities, powered by code.",
      productName: "Recycle Mobile Application",
      storyLead:
        "A cross-platform mobile solution engineered with React Native and Expo to streamline municipal waste collection.",
      storyBody:
        "Features an intelligent dual-role architecture that separates citizen on-demand booking from staff dispatch routing, optimizing vehicle schedules, reducing response times, and promoting community recycling through modern mobile technology.",
      caption: "React Native, Expo CLI, Android Studio",
      metrics: [
        { title: "Dual-Role", highlight: "Dispatch", desc: "Citizen booking & driver routing" },
        { title: "Cross-Platform", highlight: "Mobile", desc: "React Native & Expo CLI framework" },
        { title: "Real-Time", highlight: "Logistics", desc: "Community waste route optimization" },
      ],
      actionText: "View Mobile Repository",
    },
    "project-myid": {
      eyebrow: "Identity & Authentication",
      headline: "Zero friction. Absolute security.",
      productName: "MyID Authentication Portal",
      storyLead:
        "MyID delivers a frictionless, passwordless authentication experience engineered with Next.js and Tailwind CSS.",
      storyBody:
        "Integrates automated One-Time Password (OTP) verification delivered in real-time via Email.js, backed by Firebase Auth to ensure enterprise-grade security and zero-compromise credential protection while maintaining a sleek onboarding flow.",
      caption: "Next.js, Firebase Auth, Email.js",
      metrics: [
        { title: "Passwordless", highlight: "OTP", desc: "One-time passcode via Email.js" },
        { title: "Firebase", highlight: "Auth", desc: "Encrypted user credential store" },
        { title: "Next.js", highlight: "Portal", desc: "High-performance SSR architecture" },
      ],
      actionText: "Visit MyID Live Portal",
    },
    "attendance-system": {
      eyebrow: "Enterprise Web Systems",
      headline: "Attendance intelligence in real time.",
      productName: "Smart Attendance System",
      storyLead:
        "A modern student attendance system designed to eliminate outdated paper logs and manual roll call.",
      storyBody:
        "Built with React and Google Firebase Firestore to provide instantaneous cloud time-stamping, transparent attendance records, and automated statistical dashboards for both faculty and students.",
      caption: "React, Firebase Firestore, Tailwind CSS",
      metrics: [
        { title: "Instant", highlight: "Check-in", desc: "Real-time cloud time-stamping" },
        { title: "Firebase", highlight: "Firestore", desc: "Transparent records & audit trail" },
        { title: "Automated", highlight: "Analytics", desc: "Statistical dashboards for faculty" },
      ],
      actionText: "Visit Attendance Portal",
    },
    "maxfilm": {
      eyebrow: "Enterprise Automation",
      headline: "Paperless flow. Instant contracts.",
      productName: "Max Film Contracting ERP",
      storyLead:
        "A specialized enterprise contracting module engineered for the open-air cinema industry.",
      storyBody:
        "Replaces error-prone handwritten paper agreements with an automated, client-friendly digital workflow featuring on-demand PDF contract generation via react-pdf and cloud persistence.",
      caption: "React, Firebase, react-pdf renderer",
      metrics: [
        { title: "Paperless", highlight: "Contracts", desc: "Eliminates physical paperwork" },
        { title: "Automated", highlight: "PDF Engine", desc: "Dynamic rendering via react-pdf" },
        { title: "Cloud", highlight: "Storage", desc: "Secure Firebase backend storage" },
      ],
      actionText: "Visit Max Film ERP",
    },
  };

  const currentMeta = metadata[project.id] || {
    eyebrow: "Project Overview",
    headline: project.title,
    productName: project.title,
    storyLead: project.description,
    storyBody: project.fullDescription || "",
    caption: project.stack?.join(", ") || "",
    metrics: [
      { title: "100%", highlight: "Responsive", desc: "Fluid cross-device architecture" },
      { title: "Modern", highlight: "Full-Stack", desc: "Engineered with latest web standards" },
      { title: "Cloud", highlight: "Deployed", desc: "Production-ready build" },
    ],
    actionText: "Visit Live Project",
  };

  return createPortal(
    <AnimatePresence mode="wait" onExitComplete={onClose}>
      {!isClosing && (
        <motion.div
          key="apple-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.28, ease: "easeIn" },
          }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-2xl flex items-start justify-center pt-20 sm:pt-24 lg:pt-28 px-2 sm:px-6 lg:px-8 overflow-hidden"
          onClick={handleClose}
        >
          {/* 🍎 Apple Sheet Card (Expanded Width & Docked to Bottom with Navbar Clearance) 🍎 */}
          <motion.div
            key="apple-modal-sheet"
            initial={{ y: "100%" }}
            animate={{
              y: "0%",
              transition: {
                duration: 0.52,
                ease: [0.16, 1, 0.3, 1], // Apple fluid easing
              },
            }}
            exit={{
              y: "100%",
              transition: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            style={{ willChange: "transform" }}
            className="relative w-full max-w-[1180px] h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] bg-[#0a0a0c] border-t border-x border-white/15 rounded-t-[32px] sm:rounded-t-[44px] rounded-b-none shadow-[0_-10px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Top-Right Close Button (X) */}
            <div className="sticky top-6 sm:top-8 z-50 flex justify-end pr-6 sm:pr-10 pointer-events-none -mb-10 sm:-mb-12">
              <button
                onClick={handleClose}
                aria-label="Close details"
                className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content (Sleek Apple Layout with Generous Spacing) */}
            <div
              ref={scrollRef}
              className="overflow-y-auto h-full px-6 sm:px-14 lg:px-20 pt-8 sm:pt-12 pb-20 sm:pb-24 space-y-12 sm:space-y-16"
            >
          {/* Eyebrow & Giant Apple Headline (Matching Image 2 Top) */}
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#86868b] uppercase mb-2.5">
              {currentMeta.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {currentMeta.headline}
            </h2>
          </div>

          {/* Product Title & Narrative with Bold Key Highlights (Matching Image 2) */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight">
              {currentMeta.productName}
            </h3>
            <p className="text-base sm:text-lg lg:text-[19px] text-[#a1a1a6] leading-[1.65] font-normal">
              <strong className="text-white font-semibold">{currentMeta.storyLead} </strong>
              {currentMeta.storyBody}
            </p>
          </div>

          {/* High-Resolution Device / App Preview Frame with Caption (Matching Image 2 & 3) */}
          <div>
            <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden bg-black border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[540px] object-cover object-center"
              />
            </div>
            {currentMeta.caption && (
              <p className="text-xs text-[#86868b] tracking-tight mt-2.5 text-right font-medium">
                {currentMeta.caption}
              </p>
            )}
          </div>

          {/* 🍎 Apple 3-Column Bold Metric Stats (Borderless, Matching Image 3) 🍎 */}
          {currentMeta.metrics && currentMeta.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-2">
              {currentMeta.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-white tracking-tight leading-tight">
                    <span>{metric.title} </span>
                    <span className="text-[#2997ff]">{metric.highlight}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#86868b] tracking-tight font-normal">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 🍎 Apple Architecture & Specs Card (Clean Apple Minimalist Design) 🍎 */}
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#161617] border border-white/[0.06] p-7 sm:p-11 space-y-6">
            <div className="space-y-2">
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architecture & Technologies.
              </h4>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed max-w-2xl">
                Engineered with clean architectural patterns, robust cloud integration, and verified for production reliability.
              </p>
            </div>

            {/* Clean Apple Typography Specs (No Cluttered Box Badges) */}
            <div className="pt-2 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                Core Technologies
              </p>
              <p className="text-base sm:text-lg text-white font-medium tracking-tight">
                {project.stack.join("  •  ")}
              </p>
            </div>

            {/* Clean Apple CTA Button */}
            {project.link && project.link !== "#" && (
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm sm:text-base transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{currentMeta.actionText}</span>
                  <span className="text-base">↗</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>,
document.body
);
};
