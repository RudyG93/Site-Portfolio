// Pied de page minimal, repris de la maquette.
const Footer = () => {
  return (
    <footer className="max-w-[1180px] mx-auto px-5 md:px-10 py-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
      <div className="font-display font-semibold text-base">
        RG<span className="text-accent">.</span>
        <span className="font-body font-normal text-[13px] text-white/40 ml-2">
          © 2026 Rudy Giacomazzo
        </span>
      </div>
      <div className="text-[13px] text-white/40">
        Développé avec Next.js &amp; ❤
      </div>
    </footer>
  );
};

export default Footer;
