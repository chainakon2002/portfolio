import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const macbookRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !macbookRef.current) return;

      gsap.fromTo(
        macbookRef.current,
        {
          x: "100%", // ซ่อนอยู่ด้านขวานอกจอ
          opacity: 0.2,
        },
        {
          x: "43%", // สไลด์ออกมาและหยุดให้โผล่มาประมาณครึ่งเครื่อง (50%) แตะกึ่งกลางจอ
          opacity: 1,
          duration: 2.7, // สไลด์ออกมาช้าๆ นุ่มนวล มีระดับ
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true, // เล่นรอบเดียวและอยู่ถาวร ไม่ล็อกจอ ไม่ติด ไม่เกิดช่องว่างดำ
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-black relative overflow-hidden"
    >
      {/* 🍎 MacBook Mockup: อยู่ด้านบน About Me สไลด์ออกมาจากขอบขวาแล้วอยู่ถาวร 🍎 */}
      <div className="w-full overflow-hidden mb-8 sm:mb-12 flex justify-end pr-0">
        <div
          ref={macbookRef}
          className="w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] max-w-[1050px] relative pointer-events-none transform-gpu"
          style={{ willChange: "transform" }}
        >
          {/* Ambient GPU-accelerated glow */}
          <div className="absolute -inset-4 bg-gradient-to-l from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
          <img
            src="/MacBook_Mockups2.png"
            alt="MacBook Resume Mockup"
            width={2048}
            height={1237}
            className="w-full h-auto object-contain select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* 🍎 About Me Details & Bento Cards 🍎 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Clean Apple Heading with Vibrant Gradient */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Apple Narrative Paragraph with bold highlighted text */}
          <p className="text-base sm:text-lg md:text-xl text-[#86868b] max-w-3xl leading-relaxed mb-8">
            I have solid experience in{" "}
            <strong className="text-white font-semibold">IT support</strong>,
            handling hardware/software maintenance and technical assistance. As a
            Software Developer, I specialize primarily in web development using{" "}
            <strong className="text-white font-semibold">
              React.js and Next.js
            </strong>
            , along with experience in mobile app development (
            <strong className="text-white font-semibold">
              React Native/Flutter
            </strong>
            ). My technical expertise spans{" "}
            <strong className="text-white font-semibold">
              Frontend and Backend
            </strong>
            , database design, Web API development, and system integrations.
            Additionally, I bring creative skills in graphic design and video
            editing using{" "}
            <strong className="text-white font-semibold">
              Figma, Photoshop, and Premiere Pro
            </strong>{" "}
            to deliver well-rounded digital solutions.
          </p>

          {/* Apple Style Blue Text Links with Chevron */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            <a
              href="https://drive.google.com/file/d/1Cd9QcUlGpJ3HAIVj8Fnz57Vs5XpfRDoJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2997ff] hover:underline text-base sm:text-lg font-normal tracking-tight inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>View Resume</span>
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
                ›
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1gMEAUh9A3owwDDIZTNypbWdgH2U0sUDq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2997ff] hover:underline text-base sm:text-lg font-normal tracking-tight inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>View Certificate</span>
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
                ›
              </span>
            </a>
          </div>
        </RevealOnScroll>

        {/* ============================================================ */}
        {/* 🍎 APPLE STORY SECTION 1: ประวัติการศึกษา (Education) 🍎 */}
        {/* ============================================================ */}
        <div className="border-t border-white/[0.1] pt-16 sm:pt-24 mt-16 sm:mt-24">
          <RevealOnScroll>
              {/* Apple Eyebrow */}
              <p className="text-sm sm:text-base font-medium text-[#86868b] mb-3">
                Education & Academic Foundation
              </p>

              {/* Giant Apple Editorial Headline */}
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-12 sm:mb-16 max-w-4xl">
                Built on strong fundamentals.
              </h3>

              {/* Apple 2-Column Story & Spec Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left Column: Narrative Story */}
                <div className="lg:col-span-7 space-y-6 text-base sm:text-lg md:text-xl text-[#86868b] leading-relaxed">
                  <p>
                    Graduated with a Bachelor of Science in{" "}
                    <strong className="text-white font-semibold">
                      Computer Science
                    </strong>{" "}
                    from Sakon Nakhon Rajabhat University, establishing a rigorous
                    grasp of software architecture, data structures, algorithm design,
                    database management, and system-level computing.
                  </p>
                  <p>
                    Deepened practical industry capability through intensive training
                    in{" "}
                    <strong className="text-white font-semibold">
                      Full Stack Web Development
                    </strong>{" "}
                    at Code Camp Academy, gaining hands-on mastery in modern JavaScript
                    frameworks, RESTful API design, state management, and production
                    deployment workflows.
                  </p>
                </div>

                {/* Right Column: Apple Spec Callouts */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Spec 1: Bachelor Degree */}
                  <div>
                    <p className="text-xs sm:text-sm text-[#86868b] mb-1.5 font-normal">
                      Faculty of Science and Technology • 2021 — 2024
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      Bachelor’s in Computer Science
                    </h4>
                    <p className="text-sm sm:text-base text-[#86868b] mt-1">
                      Sakon Nakhon Rajabhat University
                    </p>
                  </div>

                  {/* Spec 2: Full Stack BootCamp */}
                  <div className="border-t border-white/[0.08] pt-8">
                    <p className="text-xs sm:text-sm text-[#2997ff] mb-1.5 font-medium">
                      Code Camp Academy • Certified
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      Full Stack Web Development
                    </h4>
                    <p className="text-sm sm:text-base text-[#86868b] mt-1">
                      Intensive web architecture & modern frontend/backend engineering
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ============================================================ */}
          {/* 🍎 APPLE STORY SECTION 2: ประวัติการฝึกงาน (Internship) 🍎 */}
          {/* ============================================================ */}
          <div className="border-t border-white/[0.1] pt-16 sm:pt-24 mt-16 sm:mt-24">
            <RevealOnScroll>
              {/* Apple Eyebrow */}
              <p className="text-sm sm:text-base font-medium text-[#86868b] mb-3">
                Work Experience & Internship
              </p>

              {/* Giant Apple Editorial Headline */}
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-12 sm:mb-16 max-w-4xl">
                Engineering real-world impact.
              </h3>

              {/* Apple 2-Column Story & Spec Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left Column: Narrative Story */}
                <div className="lg:col-span-7 space-y-6 text-base sm:text-lg md:text-xl text-[#86868b] leading-relaxed">
                  <p>
                    At{" "}
                    <strong className="text-white font-semibold">
                      Mokura Development (Thailand)
                    </strong>
                    , served as a Front-End Developer building cross-platform mobile
                    applications using{" "}
                    <strong className="text-white font-semibold">
                      React Native
                    </strong>{" "}
                    and delivering performant, responsive web applications with{" "}
                    <strong className="text-white font-semibold">
                      React.js and Next.js
                    </strong>
                    .
                  </p>
                  <p>
                    Practiced industry-standard{" "}
                    <strong className="text-white font-semibold">
                      Agile workflows
                    </strong>{" "}
                    with Git version control, collaborative sprint reviews, and
                    continuous delivery routines. Simultaneously provided
                    comprehensive IT infrastructure diagnostics, hardware maintenance,
                    and network stability across operational systems.
                  </p>

                  {/* Apple Style Minimal Badges */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {[
                      "React Native",
                      "Next.js",
                      "React.js",
                      "Agile & Git",
                      "IT Infrastructure",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="text-xs sm:text-sm text-[#86868b] px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Apple Spec Callouts */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Spec 1: Role & Company */}
                  <div>
                    <p className="text-xs sm:text-sm text-[#86868b] mb-1.5 font-normal">
                      Mokura Development (Thailand) • May 2024 — Aug 2024
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      Front-End Developer
                    </h4>
                    <p className="text-sm sm:text-base text-[#86868b] mt-1">
                      Cross-platform mobile applications and modern web interfaces
                    </p>
                  </div>

                  {/* Spec 2: Core Engineering Stacks */}
                  <div className="border-t border-white/[0.08] pt-6">
                    <p className="text-xs sm:text-sm text-[#86868b] mb-1.5 font-normal">
                      Mobile & Web Engineering
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      React Native & Next.js
                    </h4>
                    <p className="text-sm sm:text-base text-[#86868b] mt-1">
                      Component-driven architecture, RESTful APIs, and responsive UX
                    </p>
                  </div>

                  {/* Spec 3: Agile & IT Diagnostics */}
                  <div className="border-t border-white/[0.08] pt-6">
                    <p className="text-xs sm:text-sm text-[#86868b] mb-1.5 font-normal">
                      Operations & Collaboration
                    </p>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      Git Agile & IT Systems
                    </h4>
                    <p className="text-sm sm:text-base text-[#86868b] mt-1">
                      Sprint workflows, hardware maintenance, and network troubleshooting
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    );
  };
