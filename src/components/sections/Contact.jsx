import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-4"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-5xl px-6 sm:px-10 md:px-14 p-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-10 text-white text-xl sm:text-2xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.15)] backdrop-blur-md bg-white/5"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Phone size={40} className="text-blue-400" />
              <a
                href="tel:+66855981689"
                className="text-2xl sm:text-3xl text-blue-300 hover:underline"
              >
                +66 855981689
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Mail size={40} className="text-blue-400" />
              <span className="text-2xl sm:text-3xl">chainakonsarisee@gmail.com</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Github size={40} className="text-blue-400" />
              <a
                href="https://github.com/chainakon2002"
                className="hover:underline text-blue-300 text-2xl sm:text-3xl"
                target="_blank"
              >
                https://github.com/chainakon2002
              </a>
            </div>
          </motion.div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
