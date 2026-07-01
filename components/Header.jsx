"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const techTags = ["Next.js", "React", "TypeScript", "Node.js"];

const Header = () => {
  return (
    <header
      id="top"
      className="relative max-w-[1180px] mx-auto px-5 md:px-10 pt-20 pb-16 md:pt-24 md:pb-24 scroll-mt-20"
    >
      {/* Halo décoratif */}
      <div
        className="pointer-events-none absolute -top-10 -right-16 w-[520px] h-[520px] max-w-full rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,77,94,.14), transparent 62%)",
        }}
      />

      <div className="relative z-10 grid gap-12 md:gap-14 items-center md:grid-cols-[1.15fr_.85fr]">
        {/* Colonne texte */}
        <Reveal>
          <h1 className="font-display font-semibold text-[42px] md:text-6xl leading-[1.03] tracking-tight m-0">
            Développeur
            <br />
            full-stack <span className="text-accent">Next.js</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-white/65">
            Je m'appelle{" "}
            <b className="text-paper font-semibold">Rudy Giacomazzo</b>. Je conçois
            des applications web performantes en React &amp; Next.js, et des sites
            sur-mesure pour les artisans — depuis Montpellier ou en remote.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-accent text-ink rounded-[9px] text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
            >
              Me contacter
            </a>
            <a
              href="/cv-rudy-giacomazzo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-white/20 rounded-[9px] text-[15px] font-semibold inline-flex items-center gap-2 transition-colors hover:border-white/40"
            >
              Mon CV <span className="text-white/50">↓</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-5 mt-8 text-sm font-medium">
            <a
              href="https://github.com/RudyG93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-paper transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-paper transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/30">·</span>
            <span className="text-white/55">Montpellier / Remote</span>
          </div>
        </Reveal>

        {/* Carte photo */}
        <Reveal delay={0.1} className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-accent/30 rounded-3xl pointer-events-none" />
          <div className="relative border border-white/10 rounded-3xl overflow-hidden shadow-[0_34px_80px_rgba(0,0,0,.5)]">
            <div className="relative aspect-[4/5] bg-[#16161a]">
              <Image
                src="/rudy.jpg"
                alt="Rudy Giacomazzo"
                fill
                sizes="(max-width: 880px) 100vw, 420px"
                className="object-cover object-[center_18%]"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 42%, rgba(10,10,12,.94))",
                }}
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-ink/55 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,.8)]" />
                Disponible
              </div>
              <div className="absolute left-6 right-6 bottom-5">
                <div className="font-display font-semibold text-[23px] leading-tight text-white">
                  Rudy Giacomazzo
                </div>
                <div className="font-mono text-xs text-white/70 mt-1.5">
                  full-stack developer · Montpellier
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 p-[18px] bg-white/[0.03] border-t border-white/10">
              {techTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-md font-mono text-xs text-white/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Header;
