"use client";
import { motion, useScroll, useSpring } from "motion/react";

// Barre de progression de lecture, fixée en haut de la fenêtre.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 inset-x-0 h-[3px] bg-accent origin-left z-[60]"
    />
  );
};

export default ScrollProgress;
