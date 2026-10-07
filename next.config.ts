import type { NextConfig } from "next";

// Export statique pour GitHub Pages : pas de serveur, donc pas d'optimisation
// d'images à la volée (les photos sont déjà en WebP redimensionné).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
