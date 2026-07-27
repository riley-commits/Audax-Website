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
      // Content restructure 2026-07-25 — repositioning toward AI leadership + custom software
      { source: "/blog",            destination: "/insights",       permanent: true },
      { source: "/blog/:slug",      destination: "/insights/:slug", permanent: true },
      { source: "/process",         destination: "/approach",       permanent: true },
      { source: "/success-stories", destination: "/work",           permanent: true },
      { source: "/industries/fintech-finance",             destination: "/industries/financial-services",   permanent: true },
      { source: "/industries/legal-professional-services", destination: "/industries/professional-services", permanent: true },
      // Enterprise Innovation Program and AI Implementation removed 2026-06-24 — send old links to the programs hub
      { source: "/programs/sme-ai-implementation", destination: "/programs", permanent: true },
      { source: "/programs/ai-implementation", destination: "/programs", permanent: true },
      { source: "/programs/enterprise-innovation-program", destination: "/programs", permanent: true },
      // Catalyst for Founders program removed 2026-05-28 — send old links to the programs hub
      { source: "/programs/catalyst-for-founders", destination: "/programs", permanent: true },
      { source: "/solutions/catalyst-for-founders", destination: "/programs", permanent: true },
      // CTO-as-a-Service renamed to Fractional Chief AI Officer 2026-06-17
      { source: "/services/cto-as-a-service", destination: "/services/fractional-caio", permanent: true },
    ];
  },
};

export default nextConfig;
