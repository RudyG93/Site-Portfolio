import Reveal from "./Reveal";

const Freelance = () => {
  return (
    <section
      id="freelance"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-8">
          <span className="font-mono text-[13px] text-accent">// freelance</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <Reveal
          as="div"
          className="border border-accent/30 rounded-2xl p-8 md:p-10"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,77,94,.1), rgba(255,77,94,.02))",
          }}
        >
          <div className="font-mono text-xs text-accent mb-3">
            SERVICE — FREELANCE
          </div>
          <h2 className="font-display font-semibold text-[28px] md:text-[32px] tracking-tight mb-3">
            Sites web sur-mesure pour artisans
          </h2>
          <p className="max-w-[620px] text-[15px] md:text-base leading-relaxed text-white/70 mb-8">
            Conception de sites vitrines modernes, rapides et bien référencés
            localement pour aider les artisans à développer leur activité.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-9">
            <div>
              <div className="font-mono text-xs text-white/40 mb-1.5">
                PROBLÉMATIQUES
              </div>
              <p className="text-[14.5px] leading-relaxed text-white/75 m-0">
                Allier design soigné, performance, SEO local et simplicité de
                gestion pour un public non technique.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs text-white/40 mb-1.5">
                COMPÉTENCES
              </div>
              <p className="text-[14.5px] leading-relaxed text-white/75 m-0">
                Next.js, React, SEO local, Responsive, Accessibilité
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-ink rounded-[9px] text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
          >
            Discutons de votre projet <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Freelance;
