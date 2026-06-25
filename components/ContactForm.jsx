"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const inputCls =
  "px-4 py-3.5 bg-white/[0.04] border border-white/15 rounded-[10px] text-paper text-[15px] outline-none focus:border-accent/60 transition-colors placeholder:text-white/40";

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
                className="flex gap-3.5 items-center text-paper"
              >
                <span className="text-white/40 w-20">email</span>{" "}
                giacomazzorudy@gmail.com
              </a>
              <a
                href="https://github.com/RudyG93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3.5 items-center text-paper"
              >
                <span className="text-white/40 w-20">github</span> github.com/RudyG93
              </a>
              <a
                href="https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3.5 items-center text-paper"
              >
                <span className="text-white/40 w-20">linkedin</span> in/rudy-giacomazzo
              </a>
              <div className="flex gap-3.5 items-center text-paper">
                <span className="text-white/40 w-20">localisation</span> Perpignan ·
                Remote
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal as="form" onSubmit={onSubmit} className="flex flex-col gap-3.5">
            <input
              name="nom"
              type="text"
              placeholder="Votre nom"
              required
              className={inputCls}
            />
            <input
              name="email"
              type="email"
              placeholder="Votre adresse e-mail"
              required
              className={inputCls}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              required
              className={`${inputCls} resize-y leading-relaxed`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3.5 bg-accent text-ink rounded-[10px] text-[15px] font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70"
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
