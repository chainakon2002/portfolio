import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "PHP",
    "Python",
    "C#",
    "React.js",
    "React Native",
    "Node.js",
  ];

  const backendSkills = [
    "Git/GitHub",
    "Figma",
    "MySQL",
    "Visual Studio Code",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Microsoft Office",
    
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            I am a software developer with experience in React Native, React.js, and Next.js. I possess strong capabilities in both designing and developing web and mobile applications to meet user needs. My work spans both Frontend and Backend development, including database system design, web API development, and various systems integration. I also have experience as an IT Support, providing troubleshooting and user assistance for general computer usage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
           <div className="p-6 rounded-xl border border-white/10 bg-black text-white">
  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
    <span>🏫</span> Education
  </h3>
  <div className="relative border-l border-white/20 pl-6 space-y-8">
    {/* University */}
    <div className="relative">
    <div className="absolute w-3 h-3 bg-white rounded-full left-[-30px] top-[4px]"></div>

      <p className="text-sm text-white/60">2021 - 2024</p>
      <h4 className="font-bold text-white mt-1">
        Bachelor’s Degree in Computer Science
      </h4>
      <p className="text-sm text-white/80">
        Faculty of Science and Technology<br />
        Sakon Nakhon Rajabhat University, Thailand
      </p>
    </div>

    {/* High School */}
    <div className="relative">
    <div className="absolute w-3 h-3 bg-white rounded-full left-[-30px] top-[4px]"></div>
      <p className="text-sm text-white/60">2015 - 2021</p>
      <h4 className="font-bold text-white mt-1">
        High School – Science – Mathematics Program
      </h4>
      <p className="text-sm text-white/80">
        Akatumnuaysuksa School, Thailand
      </p>
    </div>
  </div>
</div>

<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
  <div className="space-y-4 text-gray-300">
    <div>
      <h4 className="font-semibold">
        Front-End Developer at Mokura Development (Thailand) <br />
        <span className="text-sm text-gray-400">May 2024 – August 2024</span>
      </h4>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Developed mobile applications using React Native</li>
        <li>Built web applications using React.js and Next.js</li>
        <li>Learned and practiced real-world development processes using Git and standard software development practices</li>
        <li>Provided IT support and troubleshooting for internal systems, including hardware, software, and network issues</li>
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
