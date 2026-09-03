import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
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

const performanceImgPositions = [
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
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      if (isMobile) return;

      // Image Positioning Timeline
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

      // Position Each Performance Image
      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      {/* 💻 Floating Creative Apps & Performance Visual Showcase 💻 */}
      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      {/* 🍎 APPLE-INSPIRED TECH SPECS & STACK 🍎 */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-28 z-10">
        <RevealOnScroll>
          {/* Apple Eyebrow & Title */}
          <div className="text-center mb-14 sm:mb-16">
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
          </div>

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
