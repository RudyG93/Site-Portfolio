// URL de production du site, utilisée pour le canonical, le sitemap, les
// balises Open Graph et le JSON-LD.
// - Domaine de production : rudygiacomazzo.fr (surchargeable via NEXT_PUBLIC_SITE_URL).
// - En local (hors Vercel), http://localhost:3000.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL ? "https://rudygiacomazzo.fr" : "http://localhost:3000");
