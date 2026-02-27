import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

export const ProjectDetail = () => {
  // รับข้อมูลโปรเจกต์ที่ส่งมาจากหน้า Projects
  const location = useLocation();
  const project = location.state?.project;

  // สั่งให้เลื่อนขึ้นไปบนสุดเสมอเวลาเปิดหน้าใหม่
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ถ้าไม่มีข้อมูล (เช่น มีคนพิมพ์ URL เข้ามาตรงๆ) ให้เด้งกลับไปหน้าแรก
  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ปุ่มกลับหน้าหลัก */}
        <Link 
  to="/#projects" 
  className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 font-semibold transition-colors"
>
  ← Back to Portfolio
</Link>

        {/* รายละเอียดโปรเจกต์ */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[500px] object-contain rounded-xl mb-8 bg-white/10"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.stack.map((tech, key) => (
               <span
               key={key}
               className="bg-blue-500/20 text-blue-400 py-2 px-5 rounded-full text-sm font-medium"
             >
               {tech}
             </span>
            ))}
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Visit Live Project →
          </a>
        </div>
      </div>
    </div>
  );
};