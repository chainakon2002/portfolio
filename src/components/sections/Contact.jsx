import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LineIcon = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.477.254l2.486 3.37V8.108c0-.345.282-.63.628-.63.348 0 .626.285.626.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export const Contact = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (e, text, key) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const cards = [
    {
      key: "phone",
      icon: Phone,
      title: "Direct line. Always ready to talk.",
      description:
        "Available for voice calls, technical consultations, and urgent project syncs. Mon – Sun • 09:00 – 21:00 ICT.",
      actionText: "Call +66 855981689",
      href: "tel:+66855981689",
      copyText: "+66855981689",
      displayValue: "+66 855981689",
    },
    {
      key: "email",
      icon: Mail,
      title: "Email me. Let's build something.",
      description:
        "Have a project inquiry, collaboration proposal, or technical question? Drop a message and I'll get back within 24 hours.",
      actionText: "Send an email",
      href: "mailto:chainakonsarisee@gmail.com",
      copyText: "chainakonsarisee@gmail.com",
      displayValue: "chainakonsarisee@gmail.com",
    },
    {
      key: "line",
      icon: LineIcon,
      title: "Direct chat. Connect on LINE.",
      description:
        "Feel free to add my LINE ID for fast communication, collaboration inquiries, or project discussions anytime.",
      actionText: "Chat on LINE",
      href: "https://line.me/ti/p/~chainakon2545",
      copyText: "chainakon2545",
      displayValue: "Line ID: chainakon2545",
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] py-24 sm:py-32 px-4 sm:px-6 lg:px-12 flex flex-col justify-between relative select-none transition-colors duration-500"
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <RevealOnScroll>
          {/* Section Header (Apple Style) */}
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-4">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed">
              Ready to collaborate or discuss a new project? Reach out directly through any of the channels below.
            </p>
          </div>

          {/* 3 Apple White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card) => {
              const Icon = card.icon;
              const isCopied = copiedKey === card.key;

              return (
                <div
                  key={card.key}
                  className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 flex flex-col justify-between border border-black/[0.04] shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group relative"
                >
                  <div>
                    {/* Icon Top Left */}
                    <div className="w-10 h-10 mb-8 sm:mb-10 flex items-center justify-start text-[#1d1d1f]">
                      <Icon className="w-8 h-8 stroke-[1.8]" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight leading-snug mb-3">
                      {card.title}
                    </h3>

                    {/* Value Badge / Chip */}
                    <p className="text-xs font-semibold text-[#0071e3] tracking-wide mb-3 select-all">
                      {card.displayValue}
                    </p>

                    {/* Body Paragraph */}
                    <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-8 font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Actions: Apple Blue Link + Quick Copy Button */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <a
                      href={card.href}
                      target={card.isExternal ? "_blank" : undefined}
                      rel={card.isExternal ? "noopener noreferrer" : undefined}
                      className="text-[#0071e3] hover:underline font-medium text-sm sm:text-base inline-flex items-center gap-1 group/link cursor-pointer"
                    >
                      <span>{card.actionText}</span>
                      <span className="text-base leading-none transition-transform group-hover/link:translate-x-0.5">
                        ›
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, card.copyText, card.key)}
                      title="Copy to clipboard"
                      className="w-8 h-8 rounded-full bg-black/[0.03] hover:bg-black/[0.08] active:scale-95 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-all cursor-pointer"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>

      {/* Floating Apple-style Toast Notification */}
      <AnimatePresence>
        {copiedKey && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] text-white text-xs font-medium shadow-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apple Minimalist Footer on White */}
      <div className="w-full max-w-7xl mx-auto pt-16 mt-10 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
        <p>© 2026 Chainakon Sarisee (Film.Dev). All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Rayong / Bangkok, Thailand</span>
        </p>
      </div>
    </section>
  );
};