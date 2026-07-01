import Reveal from "./Reveal";

const stats = [
  { value: "7+", label: "technologies maîtrisées, du front au back" },
  { value: "100%", label: "remote possible · basé à Montpellier" },
  { value: "Dispo", label: "immédiatement, prêt à m'investir" },
];

const About = () => {
  return (
    <section
      id="about"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-8">
          <span className="font-mono text-[13px] text-accent">// à propos</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <Reveal className="max-w-[760px]">
          <p className="font-display text-[26px] leading-[1.45] tracking-tight mb-5">
            Je transforme des besoins concrets en interfaces{" "}
            <span className="text-accent">claires, rapides et bien référencées</span>.
          </p>
          <p className="text-[17px] leading-[1.7] text-white/60 m-0">
            Développeur full-stack autonome et rigoureux. Mon sang-froid, ma
            rigueur et mon éthique ne sont plus des qualités que je revendique
            mais des compétences éprouvées sur le terrain. J'aime livrer des
            produits qui fonctionnent vraiment — du back-end sécurisé à
            l'interface soignée.
          </p>
        </Reveal>

        <div className="grid gap-4 mt-12 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={(i % 3) * 0.07}
              className="border border-white/10 rounded-[14px] p-6"
            >
              <div className="font-display font-semibold text-4xl text-accent">
                {s.value}
              </div>
              <div className="text-sm leading-snug text-white/55 mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
