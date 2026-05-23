import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/solutions",       destination: "/programs",       permanent: true },
      { source: "/solutions/:slug", destination: "/programs/:slug", permanent: true },
      // Renamed from "SME AI Implementation" → "AI Implementation"
      { source: "/programs/sme-ai-implementation", destination: "/programs/ai-implementation", permanent: true },
    ];
  },
};

export default nextConfig;
