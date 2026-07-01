// Route API d'envoi du formulaire de contact via Resend (côté serveur).
// Le composant client ne fait qu'un POST same-origin vers cette route.
// Nécessite la variable d'environnement RESEND_API_KEY (locale + Vercel).
import { Resend } from "resend";

const TO = "giacomazzorudy@gmail.com";
// Expéditeur partagé Resend : n'autorise l'envoi que vers l'adresse du compte
// Resend. Pour envoyer depuis un domaine perso, le vérifier dans Resend et
// remplacer cette valeur (ex: "Portfolio <contact@ton-domaine.fr>").
const FROM = "Portfolio <onboarding@resend.dev>";

const MAX = { nom: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limitation de débit best-effort (en mémoire, par instance serverless).
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT.windowMs
  );
  if (recent.length >= RATE_LIMIT.max) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Requête invalide." },
      { status: 400 }
    );
  }

  // Honeypot : rempli uniquement par les bots → on ignore silencieusement.
  if ((payload?.company || "").toString().trim()) {
    return Response.json({ success: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      {
        success: false,
        message: "Trop de tentatives, réessayez dans quelques minutes.",
      },
      { status: 429 }
    );
  }

  const nom = (payload?.nom || "").toString().trim();
  const email = (payload?.email || "").toString().trim();
  const message = (payload?.message || "").toString().trim();

  if (!nom || !email || !message) {
    return Response.json(
      { success: false, message: "Merci de remplir tous les champs." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email) || email.length > MAX.email) {
    return Response.json(
      { success: false, message: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }
  if (nom.length > MAX.nom || message.length > MAX.message) {
    return Response.json(
      { success: false, message: "Champs trop longs." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact: RESEND_API_KEY manquante.");
    return Response.json(
      {
        success: false,
        message: "Service momentanément indisponible, réessayez plus tard.",
      },
      { status: 503 }
    );
  }

  // Neutralise toute injection d'en-tête via des retours à la ligne dans le nom.
  const safeNom = nom.replace(/[\r\n]+/g, " ");

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nouveau message de ${safeNom} — portfolio`,
      text: `Nom : ${safeNom}\nEmail : ${email}\n\n${message}`,
    });
    if (error) {
      console.error("Contact: échec Resend —", error);
      return Response.json(
        { success: false, message: "Erreur lors de l'envoi, réessayez." },
        { status: 502 }
      );
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact: exception Resend —", err);
    return Response.json(
      { success: false, message: "Erreur lors de l'envoi, réessayez." },
      { status: 502 }
    );
  }
}
