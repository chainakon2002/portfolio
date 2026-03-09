import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // รวม Import ไว้บรรทัดเดียวให้เรียบร้อย
import { RevealOnScroll } from "../RevealOnScroll";
import thumbnail from "../../assets/Thumbnail.jpg";
import thumbnail2 from "../../assets/Thumbnail2.png";
import Filecover from "../../assets/File cover.png";
import projectAA from "../../assets/projectAA.jpg";
import projectmyid from "../../assets/projectMyid.jpg";
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
    fullDescription: "ระบบร้านค้าออนไลน์แบบครบวงจร พัฒนาด้วย React และ Node.js ตกแต่งด้วย Tailwind CSS รองรับการจัดการสินค้าผ่านฐานข้อมูล MySQL และ Supabase มีระบบชำระเงินที่ปลอดภัยและหน้าตาที่เป็นมิตรกับผู้ใช้งาน",
    image: thumbnail,
    stack: ["React", "Node.js", "Vite.js", "Tailwind css", "MySQL", "Supabase"],
    link: "https://filmcs-shop.vercel.app",
  },
  {
    id: "mobile-app",
    title: "Mobile Application (Recycle)",
    description: "Mobile application for garbage collection services with separate user and staff functionalities.",
    fullDescription: "แอปพลิเคชันมือถือพัฒนาด้วย React Native และ Expo สำหรับเรียกใช้บริการรถเก็บขยะ ระบบแยกการใช้งานชัดเจนระหว่างผู้ใช้งานทั่วไป (เรียกบริการ) และเจ้าหน้าที่ (จัดการเส้นทางและคิว) ช่วยให้การจัดการขยะในชุมชนมีประสิทธิภาพมากขึ้น",
    image: thumbnail2,
    stack: ["React Native", "Expo CLI", "Android Studio"],
    link: "#",
  },
  {
    id: "data-mining",
    title: "Mushroom Data Classification",
    description: "Application of data mining techniques to classify edible vs. poisonous mushrooms.",
    fullDescription: "การประยุกต์ใช้เทคนิคการทำเหมืองข้อมูล (Data Mining) เพื่อจำแนกเห็ดที่กินได้และเห็ดพิษ โดยใช้โมเดล Decision Tree และ Neural Network วิเคราะห์จากลักษณะภายนอก เช่น รูปร่างของหมวกเห็ด กลิ่น และสี เพื่อความปลอดภัยในด้านโภชนาการ",
    image: Filecover,
    stack: ["Weka", "Decision Tree", "Naïve Bayes", "Neural Network", "Excel"],
    link: "https://drive.google.com/file/d/1Pt_6YD0BIH-sEtIKWpLzFoSjzXCsvsiS/view?usp=sharing",
  },
  {
    id: "project-myid",
    title: "MyID ระบบสมัครสมาชิก และยืนยันตัวตนOTP",
    description: "ระบบลงชื่อเข้าใช้ MyID ที่เน้นความปลอดภัยด้วยการยืนยันตัวตนผ่าน OTP และการจัดการข้อมูลสมาชิก",
    fullDescription: "ระบบจัดการโปรไฟล์ผู้ใช้ 'MyID' ที่เน้นความปลอดภัยเป็นหลัก พัฒนาด้วย Next.js และ Firebase รองรับการสมัครสมาชิกและยืนยันตัวตนผ่านรหัส OTP (One-Time Password) และ แจ้งเตือนทาง Email",
    image: projectmyid,
    stack: ["Next.js", "Firebase", "Tailwind CSS" ,"Email.js"],
    link: "https://myid-otp.vercel.app",
  },
  {
    id: "attendance-system",
    title: "Smart Attendance System",
    description: "ระบบเช็คชื่ออัจฉริยะสำหรับนักศึกษาที่ช่วยลดขั้นตอนการเช็คชื่อแบบเดิมๆ",
    fullDescription: "ระบบเช็คชื่ออัจฉริยะ (Smart Attendance System) สำหรับนักศึกษา ช่วยลดขั้นตอนการเช็คชื่อแบบเดิมๆ โดยใช้ระบบฐานข้อมูลในการบันทึกเวลาและสถิติการเข้าเรียนแบบ Real-time เพื่อความโปร่งใสและตรวจสอบข้อมูลได้ง่าย",
    image: projectAA,
    stack: ["React", "Firebase", "Tailwind CSS" ],
    link: "https://2026-student-attendance-system.vercel.app",
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
                <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-cover object-center rounded-lg mb-4" />
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