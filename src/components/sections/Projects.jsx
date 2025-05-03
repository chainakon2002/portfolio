import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import thumbnail from "../../assets/Thumbnail.jpg";
import thumbnail2 from "../../assets/Thumbnail2.png";
import Filecover from "../../assets/File cover.png";
import myPDF from "../../assets/Datamining.pdf";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      image: thumbnail,
      stack: ["React", "Node.js", "Vite.js", "Tailwind css", "MySQL"],
      link: "https://filmcs-shop.vercel.app",
    },
    {
      title: "Mobile Application",
      description:
        "Recycle is a mobile application developed with React Native that allows users to request garbage collection services. The app includes functionalities for both regular users and staff members.",
      image: thumbnail2,
      stack: ["React Native", "Expo CLI", "Android Studio"],
      link: "#",
    },
    {
      title: "Application of Data Mining Techniques",
      description:
        "The application of data mining techniques for mushroom data classification aims to accurately distinguish between edible and poisonous mushrooms based on their external characteristics, such as cap shape, odor, and color. This can be applied in areas such as food safety and education.",
      image: Filecover,
      stack: ["Weka", "Decision Tree", "Naïve Bayes ", "Neural Network ", "Excel "],
      link: "https://drive.google.com/file/d/1Pt_6YD0BIH-sEtIKWpLzFoSjzXCsvsiS/view?usp=sharing",
    },
   
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-contain rounded-lg mb-4 bg-white"
                />

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedProject && (
  <div className="absolute top-0 left-0 w-full min-h-screen bg-black/60 z-50 flex items-center justify-center p-4" onClick={closeModal}>
    <div
      className="bg-white max-w-2xl w-full rounded-xl p-6 text-black relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"
      >
        ×
      </button>
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
      <p className="text-gray-700 mb-4">{selectedProject.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedProject.stack.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={selectedProject.link}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        Go to Live Project →
      </a>
    </div>
  </div>
)}

      </RevealOnScroll>
    </section>
  );
};
