import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 text-white border border-white/10 p-6 sm:p-10 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.15)] backdrop-blur-md bg-white/5"
          >
            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Phone className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
              <a
                href="tel:+66855981689"
                className="text-lg sm:text-2xl md:text-3xl text-blue-300 hover:underline"
              >
                +66 855981689
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Mail className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
              <span className="text-lg sm:text-2xl md:text-3xl break-all">
                chainakonsarisee@gmail.com
              </span>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Github className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
              <a
                href="https://github.com/chainakon2002"
                className="hover:underline text-blue-300 text-lg sm:text-2xl md:text-3xl break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/chainakon2002
              </a>
            </div>
          </motion.div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};