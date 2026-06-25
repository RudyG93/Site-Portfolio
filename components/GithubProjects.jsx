import Reveal from "./Reveal";

const USER = "RudyG93";

// Dépôts déjà mis en avant dans la section "Mes réalisations" (évite les doublons),
// + le dépôt du portfolio lui-même.
const EXCLUDE = new Set([
  "OpenClassroomsProjet6",
  "OpenClassroomsProjet5",
  "OpenClassroomProjet4New",
  "OpenClassroomProjet3",
  "Site-Portfolio",
]);

async function getRepos() {
  try {
    const token = process.env.GITHUB_TOKEN; // optionnel : relève la limite d'API
    const res = await fetch(
      `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // Re-scan automatique toutes les 6 h (ISR).
        next: { revalidate: 21600 },
      }
    );
    if (!res.ok) return [];
    const repos = await res.json();
    if (!Array.isArray(repos)) return [];
    return repos
      .filter((r) => !r.fork && !r.archived && !r.private && !EXCLUDE.has(r.name))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 6);
  } catch {
    return [];
  }
}

const prettify = (name) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const GithubProjects = async () => {
  const repos = await getRepos();
  if (repos.length === 0) return null;

  return (
    <section
      id="github"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-4">
          <span className="font-mono text-[13px] text-accent">// sur github</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <Reveal
          as="h2"
          className="font-display font-semibold text-[34px] tracking-tight mb-3.5"
        >
          Derniers projets
        </Reveal>

        <Reveal className="max-w-[560px] mb-10">
          <p className="text-base leading-relaxed text-white/55 m-0">
            Synchronisés automatiquement depuis mon{" "}
            <a
              href={`https://github.com/${USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => {
            const techs = [r.language, ...(r.topics || [])]
              .filter(Boolean)
              .slice(0, 4);
            return (
              <Reveal
                key={r.id}
                as="a"
                delay={(i % 3) * 0.07}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-white/10 rounded-2xl p-6 bg-gradient-to-b from-white/[0.03] to-transparent transition-colors hover:border-accent/50"
              >
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="font-display font-semibold text-lg leading-tight group-hover:text-accent transition-colors">
                    {prettify(r.name)}
                  </div>
                  <span className="text-white/40 text-lg shrink-0">↗</span>
                </div>
                {r.description && (
                  <p className="text-[14px] leading-relaxed text-white/55 mb-4">
                    {r.description}
                  </p>
                )}
                {techs.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 border border-white/10 rounded-md font-mono text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
