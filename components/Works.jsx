"use client";
import { useState, useEffect } from "react";
import Reveal from "./Reveal";

// Données des projets (4 réalisations + 1 service freelance mis en avant).
const projects = [
  {
    tag: "PROJET — BACK-END",
    title: "API de notation de livres",
    card: "Back-end sécurisé : authentification, API REST, validation et gestion des erreurs.",
    tags: ["Node.js", "Express", "MongoDB"],
    description:
      "Développement du back-end d'un site de notation de livres avec Node.js et MongoDB.",
    problematics:
      "Gestion de l'authentification sécurisée, validation des données et gestion des erreurs.",
    skills: "Node.js, Express, MongoDB, Sécurité, API REST",
    github: "https://github.com/RudyG93/OpenClassroomsProjet6",
  },
  {
    tag: "PROJET — FRONT-END",
    title: "App de location immobilière",
    card: "Front-end d'une SPA réactive avec navigation entre pages et composants réutilisables.",
    tags: ["React", "React Router", "SASS"],
    description:
      "Implémentation du front-end d'une application avec React et React Router pour une expérience moderne et réactive.",
    problematics:
      "Mise en place de la navigation entre les pages, initialisation de l'application et création de composants React réutilisables.",
    skills: "React, React Router, SASS",
    github: "https://github.com/RudyG93/OpenClassroomsProjet5",
  },
  {
    tag: "PROJET — OPTIMISATION",
    title: "Optimisation site photographe",
    card: "Débogage, performance, accessibilité et référencement d'un site existant.",
    tags: ["SEO", "Accessibilité", "DevTools"],
    description:
      "Optimiser le référencement d'un site en améliorant sa performance et son accessibilité.",
    problematics:
      "Améliorer les performances, déboguer via les Chrome DevTools et rédiger un cahier de recette.",
    skills: "SEO, Accessibilité, Débogage, Chrome DevTools",
    github: "https://github.com/RudyG93/OpenClassroomProjet4New",
  },
  {
    tag: "PROJET — JAVASCRIPT",
    title: "Page web dynamique",
    card: "Page dynamique pour une architecte d'intérieur, connectée à une API.",
    tags: ["JavaScript", "DOM", "API"],
    description:
      "Création d'une page dynamique pour le site d'une architecte d'intérieur en communiquant avec une API.",
    problematics:
      "Récupération des données via formulaires, manipulation du DOM et gestion des événements utilisateurs.",
    skills: "JavaScript, DOM, Événements, Formulaires",
    github: "https://github.com/RudyG93/OpenClassroomProjet3",
  },
  {
    tag: "SERVICE — FREELANCE",
    title: "Sites web sur-mesure pour artisans",
    card: "Des sites vitrines modernes, rapides et bien référencés localement pour développer votre activité.",
    description:
      "Conception de sites vitrines modernes, rapides et bien référencés localement pour aider les artisans à développer leur activité.",
    problematics:
      "Allier design soigné, performance, SEO local et simplicité de gestion pour un public non technique.",
    skills: "Next.js, React, SEO local, Responsive, Accessibilité",
    github: "",
  },
];

const ModalRow = ({ label, text }) => (
  <div className="mb-[18px]">
    <div className="font-mono text-xs text-white/40 mb-1.5">{label}</div>
    <p className="text-[15px] leading-relaxed text-white/80 m-0">{text}</p>
  </div>
);

const Works = () => {
  const [idx, setIdx] = useState(null);
  const active = idx != null ? projects[idx] : null;
  const featured = projects[4];

  // Fermeture de la modale avec la touche Échap.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-4">
          <span className="font-mono text-[13px] text-accent">// projets</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <Reveal
          as="h2"
          className="font-display font-semibold text-[34px] tracking-tight mb-3.5"
        >
          Mes réalisations
        </Reveal>

        <Reveal className="max-w-[560px] mb-10">
          <p className="text-base leading-relaxed text-white/55 m-0">
            Cliquez sur un projet pour le détail, ou retrouvez tout sur mon{" "}
            <a
              href="https://github.com/RudyG93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>

        {/* Grille des 4 réalisations */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal
              key={p.title}
              as="div"
              delay={(i % 2) * 0.07}
              whileHover={{ y: -3 }}
              onClick={() => setIdx(i)}
              className="cursor-pointer border border-white/10 rounded-2xl p-7 bg-gradient-to-b from-white/[0.03] to-transparent transition-colors hover:border-accent/50"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="font-display font-semibold text-xl leading-tight">
                  {p.title}
                </div>
                <span className="text-white/40 text-lg">↗</span>
              </div>
              <p className="text-[14.5px] leading-relaxed text-white/60 mb-[18px]">
                {p.card}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 border border-white/10 rounded-md font-mono text-[11px] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carte service mise en avant */}
        <Reveal
          as="div"
          whileHover={{ y: -3 }}
          onClick={() => setIdx(4)}
          className="cursor-pointer mt-4 border border-accent/30 rounded-2xl p-8 flex items-center justify-between gap-6 transition-colors hover:border-accent/60"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,77,94,.1), rgba(255,77,94,.02))",
          }}
        >
          <div>
            <div className="font-mono text-xs text-accent mb-3">
              SERVICE — FREELANCE
            </div>
            <div className="font-display font-semibold text-2xl mb-2">
              {featured.title}
            </div>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-white/65 m-0">
              {featured.card}
            </p>
          </div>
          <span className="text-2xl text-accent shrink-0">↗</span>
        </Reveal>
      </div>

      {/* Modale détail projet */}
      {active && (
        <div
          onClick={() => setIdx(null)}
          className="fixed inset-0 z-[100] bg-[rgba(5,5,7,.78)] backdrop-blur-md flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-[560px] bg-[#16161a] border border-white/10 rounded-[18px] p-9 shadow-[0_40px_90px_rgba(0,0,0,.6)]"
          >
            <button
              type="button"
              onClick={() => setIdx(null)}
              aria-label="Fermer"
              className="absolute top-[18px] right-[18px] w-[34px] h-[34px] rounded-[9px] bg-white/[0.06] border border-white/10 text-white/70 text-lg leading-none"
            >
              ×
            </button>
            <div className="font-mono text-xs text-accent mb-3.5">{active.tag}</div>
            <h3 className="font-display font-semibold text-2xl leading-tight pr-8 mb-5">
              {active.title}
            </h3>
            <ModalRow label="DESCRIPTION" text={active.description} />
            <ModalRow label="PROBLÉMATIQUES" text={active.problematics} />
            <ModalRow label="COMPÉTENCES" text={active.skills} />
            {active.github && (
              <a
                href={active.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-ink rounded-[9px] text-sm font-semibold"
              >
                Voir sur GitHub →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
