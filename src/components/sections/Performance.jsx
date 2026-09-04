import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "../RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

const performanceImages = [
  { id: "p1", src: "/performance1.png" },
  { id: "p2", src: "/performance2.png" },
  { id: "p3", src: "/performance3.png" },
  { id: "p4", src: "/performance4.png" },
  { id: "p5", src: "/performance5.jpg" },
  { id: "p6", src: "/performance6.png" },
  { id: "p7", src: "/performance7.png" },
];

// 💻 Desktop Positions (>= 1024px): พิกัดเดิมของ Desktop 100% ไม่เปลี่ยนแปลง
const performanceImgPositionsDesktop = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

// 📱 Mobile Positions (< 1024px): ขยับกระจายตัวออกไปด้านข้างและบนล่างอีกนิด (5-7%) เพื่อเปิดพื้นที่จอแล็ปท็อป
const performanceImgPositionsMobile = [
  {
    id: "p1",
    left: 0,
    bottom: 68,
  },
  {
    id: "p2",
    right: 4,
    bottom: 64,
  },
  {
    id: "p3",
    right: -10,
    bottom: 45,
  },
  {
    id: "p4",
    right: -15,
    bottom: -2,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: -4,
    bottom: 30,
  },
  {
    id: "p7",
    left: -10,
    bottom: -2,
  },
];

const skillCategories = [
  {
    title: "Skills & Technologies",
    groups: [
      {
        label: "Languages & Core",
        items: ["JavaScript", "Python", "PHP", "Dart", "HTML5", "CSS3"],
      },
      {
        label: "Frameworks & Libraries",
        items: ["React.js", "Next.js", "React Native", "Flutter", "TailwindCSS"],
      },
      {
        label: "Backend & Database",
        items: ["Node.js", "MySQL"],
      },
    ],
  },
  {
    title: "Tools & Design",
    groups: [
      {
        label: "Developer Tools & Environment",
        items: ["Git / GitHub", "VS Code", "Xcode"],
      },
      {
        label: "Design & Creative Suite",
        items: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro"],
      },
    ],
  },
  {
    title: "IT Operations",
    groups: [
      {
        label: "Hardware & Infrastructure",
        items: [
          "Hardware & PC Troubleshooting",
          "Network Setup & Maintenance",
          "System Deployment (Windows/macOS)",
        ],
      },
      {
        label: "Helpdesk & Remote Support",
        items: [
          "IT Helpdesk & User Support",
          "Remote Desktop Tools (AnyDesk, TeamViewer)",
        ],
      },
    ],
  },
];

export const Performance = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(() => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      return screenWidth < 1280 ? screenWidth / 1280 : 1;
    }
    return 1;
  });

  // 📐 Scale-to-Fit: คำนวณสเกลย่อให้พอดีหน้าจอมือถือ/แท็บเล็ต โดยรักษา Composition แบบ Desktop 100% ไม่เพี้ยน
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const targetWidth = 1280; // ความกว้างมาตรฐานของ Desktop Canvas
      if (screenWidth < targetWidth) {
        setScale(screenWidth / targetWidth);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scale]);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      const containerEl = containerRef.current;
      if (!sectionEl || !containerEl) return;

      const mm = gsap.matchMedia();

      // 📱 สำหรับหน้าจอมือถือและแท็บเล็ต (< 1024px): ผูก Trigger กับกล่อง Laptop โดยตรง + ใช้ linear ease (ไม่กระชาก ไม่โดด)
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "none", overwrite: "auto" },
          scrollTrigger: {
            trigger: containerEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        performanceImgPositionsMobile.forEach((item) => {
          if (item.id === "p5") return;

          const selector = `.${item.id}`;
          const vars = {};

          if (typeof item.left === "number") vars.left = `${item.left}%`;
          if (typeof item.right === "number") vars.right = `${item.right}%`;
          if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

          if (item.transform) vars.transform = item.transform;

          tl.to(selector, vars, 0);
        });
      });

      // 💻 สำหรับหน้าจอเดสก์ท็อป (>= 1024px): ใช้พิกัดเดิม 100% ไม่เปลี่ยนแปลง ไม่กระทบแม้แต่น้อย
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        performanceImgPositionsDesktop.forEach((item) => {
          if (item.id === "p5") return;

          const selector = `.${item.id}`;
          const vars = {};

          if (typeof item.left === "number") vars.left = `${item.left}%`;
          if (typeof item.right === "number") vars.right = `${item.right}%`;
          if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

          if (item.transform) vars.transform = item.transform;

          tl.to(selector, vars, 0);
        });
      });
    },
    { scope: sectionRef }
  );

  const baseCanvasHeight = 720;
  const scaledHeight = scale < 1 ? `${baseCanvasHeight * scale}px` : "100vh";

  return (
    <section id="performance" ref={sectionRef}>
      {/* 🍎 Apple Eyebrow & Title: อยู่ด้านบนของ Visual Showcase 🍎 */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-10 z-10">
        <RevealOnScroll>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-3">
            Skills & Expertise
          </p>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Skills.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Built for modern digital experiences.
            </span>
          </h3>
          <p className="text-sm sm:text-base text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            A solid foundation in modern web and mobile application development, database management, and comprehensive IT systems support.
          </p>
        </RevealOnScroll>
      </div>

      {/* 💻 Floating Creative Apps & Performance Visual Showcase (Scale-to-Fit Canvas) 💻 */}
      <div
        ref={containerRef}
        className="canvas-container"
        style={{
          width: "100%",
          height: scaledHeight,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          className="wrapper"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            width: "1280px",
            height: `${baseCanvasHeight}px`,
            flexShrink: 0,
          }}
        >
          {performanceImages.map((item, index) => (
            <img
              key={index}
              src={item.src}
              className={item.id}
              alt={item.alt || `Performance Image #${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 🍎 APPLE-INSPIRED TECH SPECS & STACK (Columns) 🍎 */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-28 z-10">
        <RevealOnScroll>
          {/* Apple Minimalist Spec Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight pb-3.5 border-b border-white/20">
                  {cat.title}
                </h4>

                <div className="space-y-5 pt-5 text-sm sm:text-base leading-relaxed">
                  {cat.groups.map((grp, gIdx) => (
                    <div key={gIdx} className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                        {grp.label}
                      </p>
                      <p className="text-neutral-200 font-normal leading-relaxed">
                        {grp.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Performance;
