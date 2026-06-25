"use client";
import { motion } from "motion/react";

// Wrapper d'animation au défilement (apparition en fondu + remontée),
// repris du comportement "data-reveal" de la maquette.
const Reveal = ({ children, className, delay = 0, as = "div", ...rest }) => {
  const M = motion[as] ?? motion.div;
  return (
    <M
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  );
};

export default Reveal;
