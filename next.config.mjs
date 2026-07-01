/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Aperçu GitHub par défaut (repos sans capture dédiée, ex. TomTroc).
    remotePatterns: [
      { protocol: "https", hostname: "opengraph.githubassets.com" },
    ],
    // Cache long des aperçus optimisés : limite les appels à GitHub. 24 h.
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
