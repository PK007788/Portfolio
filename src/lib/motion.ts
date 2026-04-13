import type { Variants } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const viewportStandard = { once: false, margin: "-100px" } as const;

export const fadeUp = (delay = 0, y = 20): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, delay, ease: EASE_OUT },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: EASE_OUT },
};
