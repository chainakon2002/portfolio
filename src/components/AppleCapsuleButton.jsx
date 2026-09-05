import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AppleCapsuleButton = ({
  onClick,
  text = "Explore project details",
  className = "",
}) => {
  const ref = useRef(null);
  // Animate when 40% of the button enters viewport, resets when scrolled out so user can replay
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <div ref={ref} className={`mt-6 sm:mt-8 inline-block ${className}`}>
      <motion.button
        type="button"
        onClick={onClick}
        initial="collapsed"
        animate={isInView ? "expanded" : "collapsed"}
        variants={{
          collapsed: {
            paddingLeft: "8px",
            paddingRight: "8px",
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          },
          expanded: {
            paddingLeft: "24px",
            paddingRight: "8px",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center bg-[#1d1d1f] hover:bg-[#2c2c2e] text-white text-sm sm:text-base font-medium py-2 rounded-full border border-white/15 hover:border-white/30 backdrop-blur-xl shadow-2xl transition-colors duration-300 cursor-pointer overflow-hidden"
      >
        {/* Expanding text container */}
        <motion.span
          variants={{
            collapsed: {
              width: 0,
              opacity: 0,
              marginRight: 0,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            },
            expanded: {
              width: "auto",
              opacity: 1,
              marginRight: "16px",
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
            },
          }}
          className="tracking-tight whitespace-nowrap overflow-hidden inline-block"
        >
          {text}
        </motion.span>

        {/* Apple Blue Plus Circle Icon */}
        <span className="w-8 h-8 rounded-full bg-[#0071e3] group-hover:bg-[#0077ed] text-white flex items-center justify-center font-normal text-xl leading-none transition-transform duration-300 group-hover:rotate-90 shadow-md flex-shrink-0">
          +
        </span>
      </motion.button>
    </div>
  );
};
