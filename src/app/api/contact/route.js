// Route API d'envoi du formulaire de contact via Resend (côté serveur).
// Le composant client ne fait qu'un POST same-origin vers cette route.
// Nécessite la variable d'environnement RESEND_API_KEY (locale + Vercel).
import { Resend } from "resend";

const TO = "giacomazzorudy@gmail.com";
// Expéditeur partagé Resend : n'autorise l'envoi que vers l'adresse du compte
// Resend. Pour envoyer depuis un domaine perso, le vérifier dans Resend et
// remplacer cette valeur (ex: "Portfolio <contact@ton-domaine.fr>").
const FROM = "Portfolio <onboarding@resend.dev>";

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, message: "Service d'envoi non configuré (RESEND_API_KEY manquante)." },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Requête invalide." },
      { status: 400 }
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

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nouveau message de ${nom} — portfolio`,
      text: `Nom : ${nom}\nEmail : ${email}\n\n${message}`,
    });
    if (error) {
      return Response.json(
        { success: false, message: error.message || "Erreur lors de l'envoi." },
        { status: 502 }
      );
    }
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: "Erreur lors de l'envoi, réessayez." },
      { status: 502 }
    );
  }
}
