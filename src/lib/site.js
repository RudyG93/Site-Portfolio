// URL de production du site, utilisée pour le canonical, le sitemap, les
// balises Open Graph et le JSON-LD.
// - Définir NEXT_PUBLIC_SITE_URL quand un domaine perso sera branché.
// - Sinon, on retombe automatiquement sur le domaine Vercel de production.
// - En local, http://localhost:3000.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
