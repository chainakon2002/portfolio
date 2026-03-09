import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  // ตั้งค่าแอนิเมชันให้ค่อยๆ โผล่มาทีละอัน (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // หน่วงเวลาแต่ละช่องให้โผล่ห่างกัน 0.2 วินาที
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Glow Effect (วงแสงเรืองๆ ด้านหลังให้ดูดูล้ำๆ) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Ready to collaborate or have a project in mind? Feel free to reach out through any of the platforms below.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Phone Card */}
            <motion.a
              variants={itemVariants}
              href="tel:+66855981689"
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Phone className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-center sm:text-left flex-1 mt-2 sm:mt-0">
                <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-1 uppercase tracking-wider">Call Me</h3>
                <p className="text-2xl sm:text-3xl text-white group-hover:text-blue-300 transition-colors font-semibold">
                  +66 855981689
                </p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              variants={itemVariants}
              href="mailto:chainakonsarisee@gmail.com"
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Mail className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-center sm:text-left flex-1 mt-2 sm:mt-0 overflow-hidden">
                <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-1 uppercase tracking-wider">Email Me</h3>
                <p className="text-xl sm:text-2xl md:text-3xl text-white group-hover:text-blue-300 transition-colors font-semibold truncate">
                  chainakonsarisee@gmail.com
                </p>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              variants={itemVariants}
              href="https://github.com/chainakon2002"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-md"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Github className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-center sm:text-left flex-1 mt-2 sm:mt-0 overflow-hidden">
                <h3 className="text-gray-400 text-sm sm:text-base font-medium mb-1 uppercase tracking-wider">Check My Code</h3>
                <p className="text-xl sm:text-2xl md:text-3xl text-white group-hover:text-blue-300 transition-colors font-semibold truncate">
                  github.com/chainakon2002
                </p>
              </div>
            </motion.a>

          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};