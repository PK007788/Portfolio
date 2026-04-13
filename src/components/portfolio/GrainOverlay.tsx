import React from "react";
import { motion } from "framer-motion";

/**
 * GrainOverlay
 * A subtle, tactile animated grain texture that gives the site a premium "film" feel.
 * Highly transparent and pointer-events-none so it doesn't interfere with UX.
 */
export const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden opacity-[0.025] isolation-isolate">
      <motion.div
        animate={{
          x: ["0%", "-5%", "-10%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "10%", "0%"],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror"
        }}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className="absolute -inset-[150%] noise-bg scale-[1.5]"
      />
    </div>
  );
};
