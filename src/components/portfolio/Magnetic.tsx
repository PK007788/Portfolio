import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable magnetic effect on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const { clientX, clientY } = e;
    const { middleX, middleY } = ref.current 
      ? {
          middleX: ref.current.getBoundingClientRect().left + ref.current.getBoundingClientRect().width / 2,
          middleY: ref.current.getBoundingClientRect().top + ref.current.getBoundingClientRect().height / 2
        }
      : { middleX: 0, middleY: 0 };

    const x = clientX - middleX;
    const y = clientY - middleY;
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
