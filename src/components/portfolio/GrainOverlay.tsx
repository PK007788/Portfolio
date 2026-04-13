import React from "react";
import { motion } from "framer-motion";

/**
 * GrainOverlay
 * A subtle, tactile animated grain texture that gives the site a premium "film" feel.
 * Highly transparent and pointer-events-none so it doesn't interfere with UX.
 */
export const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden opacity-[0.03] isolation-isolate">
      <motion.div
        animate={{
          x: ["0%", "-5%", "-10%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "10%", "0%"],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[100%] noise-bg scale-[2.0]"
      />
    </div>
  );
};
