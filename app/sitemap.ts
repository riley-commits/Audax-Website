import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllSolutionSlugs } from "@/lib/solutions-data"; // slugs reused under /programs
import { getAllGuideSlugs } from "@/lib/guides-data";
import { getAllIndustrySlugs } from "@/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://audaxventures.ca";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/founders`,        lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/ai-for-sme`,      lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/about`,           lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/process`,         lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: "yearly"  as const, priority: 0.9 },
    { url: `${base}/success-stories`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/mvp-calculator`,  lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/services`,        lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/industries`,      lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryPages = getAllIndustrySlugs().map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const programPages = [
    { url: `${base}/programs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    ...getAllSolutionSlugs().map((slug) => ({
      url: `${base}/programs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...programPages,
    ...guidePages,
  ];
}
