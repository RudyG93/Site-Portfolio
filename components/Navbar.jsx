"use client";
import { useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#stack", label: "Compétences" },
  { href: "#projects", label: "Projets" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Barre principale */}
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-ink/70 backdrop-blur-md border-b border-white/10">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight"
        >
          RG<span className="text-accent">.</span>
        </a>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-accent text-ink rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="w-6 h-0.5 bg-paper block" />
          <span className="w-6 h-0.5 bg-paper block" />
          <span className="w-6 h-0.5 bg-paper block" />
        </button>
      </nav>

      {/* Menu déroulant mobile */}
      {open && (
        <div className="md:hidden flex flex-col bg-ink/95 backdrop-blur-md border-b border-white/10 px-5 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-white/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-3 text-base font-semibold text-accent"
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
