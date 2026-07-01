"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Bouton flottant qui apparaît après un peu de défilement et ramène en haut.
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-[60] w-11 h-11 rounded-full bg-accent text-ink grid place-items-center text-lg shadow-[0_10px_30px_rgba(0,0,0,.4)]"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
