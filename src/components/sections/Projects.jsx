import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // รวม Import ไว้บรรทัดเดียวให้เรียบร้อย
import { RevealOnScroll } from "../RevealOnScroll";
import thumbnail from "../../assets/Thumbnail.jpg";
import thumbnail2 from "../../assets/Thumbnail2.png";
import Filecover from "../../assets/File cover.png";

export const Projects = () => {
  const location = useLocation(); // ประกาศใช้งาน useLocation เพื่อเช็ค URL

  // โค้ดพระเอกที่จะคอยเช็คว่า ถ้ากดย้อนกลับมา ให้เลื่อนหน้าจอลงมาที่ #projects ให้อัตโนมัติ
  useEffect(() => {
    if (location.hash === "#projects") {
      const section = document.getElementById("projects");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" }); // เลื่อนแบบนุ่มนวล
        }, 100);
      }
    }
  }, [location]);

  const projects = [
    {
      id: "ecommerce-web",
      title: "E-Commerce Web App",
      description: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      image: thumbnail,
      stack: ["React", "Node.js", "Vite.js", "Tailwind css", "MySQL", "Supabase"],
      link: "https://filmcs-shop.vercel.app",
    },
    {
      id: "mobile-app", // แก้ ID ให้ไม่มีเว้นวรรค เพื่อให้ URL สวยงาม
      title: "Mobile Application",
      description:
        "Recycle is a mobile application developed with React Native that allows users to request garbage collection services. The app includes functionalities for both regular users and staff members.",
      image: thumbnail2,
      stack: ["React Native", "Expo CLI", "Android Studio"],
      link: "#",
    },
    {
      id: "data-mining", // แก้ ID ให้ไม่มีเว้นวรรค
      title: "Application of Data Mining Techniques",
      description:
        "The application of data mining techniques for mushroom data classification aims to accurately distinguish between edible and poisonous mushrooms based on their external characteristics, such as cap shape, odor, and color. This can be applied in areas such as food safety and education.",
      image: Filecover,
      stack: ["Weka", "Decision Tree", "Naïve Bayes ", "Neural Network ", "Excel "],
      link: "https://drive.google.com/file/d/1Pt_6YD0BIH-sEtIKWpLzFoSjzXCsvsiS/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-contain rounded-lg mb-4 bg-white" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mt-6 flex justify-between items-center">
                  <Link 
                    to={`/project/${project.id}`} 
                    state={{ project: project }} 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};