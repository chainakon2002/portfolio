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

          {/* Apple 2-Column Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Work Experience */}
            <div className="relative group rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 bg-[#161617] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1">
              <div>
                <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-6">
                  <strong className="text-white font-semibold">
                    Front-End Developer at Mokura Development.{" "}
                  </strong>
                  Engineered mobile applications with React Native and modern web interfaces using React.js and Next.js, while managing agile Git collaboration and complete IT systems troubleshooting.
                </p>
              </div>

              {/* Inside macOS-styled Window / UI Preview */}
              <div className="rounded-[20px] bg-[#0d0d0e] border border-white/[0.08] p-5 sm:p-6 overflow-hidden">
                {/* Traffic lights header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#86868b]">
                    experience.mokura
                  </span>
                </div>

                {/* Job Details */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Front-End Developer
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-400 font-medium">
                        Mokura Development (Thailand)
                      </p>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#86868b] font-medium px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] whitespace-nowrap">
                      May 2024 – Aug 2024
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <span>Developed cross-platform mobile apps using React Native</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>Built responsive web applications with React.js and Next.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>Practiced real-world Agile workflows with Git & modern CI/CD standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                      <span>Delivered IT support, hardware diagnostics & network troubleshooting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Education & Certification */}
            <div className="relative group rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 bg-[#161617] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1">
              <div>
                <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-6">
                  <strong className="text-white font-semibold">
                    Academic foundation. Continuous evolution.{" "}
                  </strong>
                  Graduated with a Bachelor of Science in Computer Science, complemented by intensive Full Stack Web Development training at Code Camp Academy.
                </p>
              </div>

              {/* Inside macOS-styled Window / UI Preview */}
              <div className="rounded-[20px] bg-[#0d0d0e] border border-white/[0.08] p-5 sm:p-6 overflow-hidden">
                {/* Traffic lights header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#86868b]">
                    academic-history.edu
                  </span>
                </div>

                {/* Education Timeline */}
                <div className="space-y-4">
                  {/* University */}
                  <div className="pb-3 border-b border-white/[0.06]">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        Bachelor’s in Computer Science
                      </h4>
                      <span className="text-[11px] text-[#86868b] font-medium whitespace-nowrap">
                        2021 – 2024
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      Faculty of Science and Technology • Sakon Nakhon Rajabhat University
                    </p>
                  </div>

                  {/* Code Camp Academy */}
                  <div className="pb-3 border-b border-white/[0.06]">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        Full Stack Web Development
                      </h4>
                      <span className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider">
                        Certified
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      Code Camp Academy
                    </p>
                  </div>

                  {/* High School */}
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        High School – Science & Math
                      </h4>
                      <span className="text-[11px] text-[#86868b] font-medium whitespace-nowrap">
                        2015 – 2021
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      Akatumnuaysuksa School, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
