import Reveal from "./Reveal";

const groups = [
  { title: "FRONT-END", items: ["React", "Next.js", "TypeScript"] },
  { title: "BACK-END", items: ["Node.js", "PHP", "API REST & MongoDB"] },
  { title: "EN PLUS", items: ["Intégration IA", "SEO & référencement", "Accessibilité & perf"] },
];

const Skills = () => {
  return (
    <section
      id="stack"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-white/[0.015] to-transparent scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-4">
          <span className="font-mono text-[13px] text-accent">// compétences</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <Reveal
          as="h2"
          className="font-display font-semibold text-[34px] tracking-tight mb-10"
        >
          Ma stack technique
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 3) * 0.07}
              className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]"
            >
              <div className="font-mono text-xs text-white/45 mb-4">{g.title}</div>
              <div className="flex flex-col gap-3">
                {g.items.map((it) => (
                  <div
                    key={it}
                    className="flex items-center gap-3 text-base font-medium"
                  >
                    <span className="text-accent">▸</span> {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
