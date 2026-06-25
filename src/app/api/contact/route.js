// Route API d'envoi du formulaire de contact.
// L'appel à web3forms est fait côté serveur : la clé d'accès (publique chez
// web3forms) ne transite plus dans le bundle navigateur, et le composant client
// ne fait qu'un POST same-origin vers cette route.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "ef71f98c-8fd6-4a3d-9c02-a28eff8888b5";

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

  const { nom, email, message } = payload || {};
  if (!nom || !email || !message) {
    return Response.json(
      { success: false, message: "Merci de remplir tous les champs." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "Nouveau message depuis votre portfolio",
        from_name: nom,
        name: nom,
        email,
        message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      return Response.json({ success: true });
    }
    return Response.json(
      { success: false, message: data.message || "Erreur lors de l'envoi." },
      { status: 502 }
    );
  } catch {
    return Response.json(
      { success: false, message: "Erreur réseau côté serveur, réessayez." },
      { status: 502 }
    );
  }
}
