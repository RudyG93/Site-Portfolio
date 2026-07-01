// Fond décoratif global : deux halos "aurora" qui dérivent lentement + un léger
// grain. Purement visuel (aria-hidden), placé derrière tout le contenu.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="aurora-1 absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,94,.10), transparent 60%)",
        }}
      />
      <div
        className="aurora-2 absolute top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(120,120,255,.06), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{ backgroundImage: grain }}
      />
    </div>
  );
};

export default Background;
