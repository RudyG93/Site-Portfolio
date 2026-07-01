"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const inputCls =
  "px-4 py-3.5 bg-white/[0.04] border border-white/15 rounded-[10px] text-paper text-[15px] outline-none focus:border-accent/60 transition-colors placeholder:text-white/40";

const iconCls = "w-[18px] h-[18px] shrink-0 text-white/40";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={iconCls}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconCls} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconCls} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={iconCls}
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Contact = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(event.target);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: fd.get("nom"),
          email: fd.get("email"),
          message: fd.get("message"),
          company: fd.get("company"),
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        event.target.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Une erreur est survenue, réessayez.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau — vérifiez votre connexion et réessayez.");
    }
  };

  return (
    <section
      id="contact"
      className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 bg-gradient-to-b from-accent/[0.04] to-transparent scroll-mt-16"
    >
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3.5 mb-4">
          <span className="font-mono text-[13px] text-accent">// contact</span>
          <span className="flex-1 h-px bg-white/10" />
        </Reveal>

        <div className="grid gap-12 md:gap-14 items-start md:grid-cols-[1fr_.8fr]">
          {/* Coordonnées */}
          <Reveal>
            <h2 className="font-display font-semibold text-[40px] leading-[1.1] tracking-tight mb-4">
              Travaillons
              <br />
              ensemble<span className="text-accent">.</span>
            </h2>
            <p className="text-base leading-[1.65] text-white/60 mb-7">
              Une opportunité, une question ou un projet ? Écrivez-moi, je réponds
              rapidement.
            </p>
            <div className="flex flex-col gap-3.5 font-mono text-xs">
              <a
                href="mailto:giacomazzorudy@gmail.com"
                aria-label="Email"
                className="flex gap-3 items-center text-paper hover:text-accent transition-colors"
              >
                <MailIcon />
                giacomazzorudy@gmail.com
              </a>
              <a
                href="https://github.com/RudyG93"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex gap-3 items-center text-paper hover:text-accent transition-colors"
              >
                <GithubIcon />
                github.com/RudyG93
              </a>
              <a
                href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex gap-3 items-center text-paper hover:text-accent transition-colors"
              >
                <LinkedinIcon />
                in/rudy-giacomazzo
              </a>
              <div className="flex gap-3 items-center text-paper">
                <PinIcon />
                Montpellier · Remote
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal as="form" onSubmit={onSubmit} className="flex flex-col gap-3.5">
            {/* Honeypot anti-bot : masqué aux humains, rempli par les bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <input
              name="nom"
              type="text"
              placeholder="Votre nom"
              required
              maxLength={100}
              className={inputCls}
            />
            <input
              name="email"
              type="email"
              placeholder="Votre adresse e-mail"
              required
              maxLength={200}
              className={inputCls}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              required
              maxLength={5000}
              className={`${inputCls} resize-y leading-relaxed`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3.5 bg-accent text-ink rounded-[10px] text-[15px] font-semibold inline-flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}{" "}
              <span>→</span>
            </button>

            {status === "sent" && (
              <div className="px-4 py-3 rounded-[10px] bg-emerald-400/10 border border-emerald-400/35 text-sm font-medium text-emerald-400">
                Message envoyé avec succès ! Je vous répondrai très vite.
              </div>
            )}
            {status === "error" && (
              <div className="px-4 py-3 rounded-[10px] bg-accent/10 border border-accent/35 text-sm font-medium text-[#ff8a96]">
                {errorMsg}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
