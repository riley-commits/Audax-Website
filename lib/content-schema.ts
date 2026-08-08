import { z } from "zod";

/**
 * Zod schemas for every typed content collection in /lib/*-data.ts.
 *
 * Source of truth for the runtime contract. The build-time validator
 * (scripts/validate-content.ts) runs these against the data; build fails
 * if any entry violates the schema. Catches missing required fields,
 * wrong-shape nested objects, and accidental drift from the typed exports.
 *
 * Each schema also exports an inferred TypeScript type via z.infer<>.
 * Data files can progressively adopt these inferred types in place of
 * their hand-maintained interfaces.
 */

// ------------------------------------------------------------------
// Shared building blocks
// ------------------------------------------------------------------

const slugSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be kebab-case (a-z, 0-9, hyphen)");

const faqEntrySchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

// ------------------------------------------------------------------
// Service pages (lib/service-pages-data.ts) — the 3 core Think/Build/Scale
// service landing pages, each following the same fixed 9-section layout.
// ------------------------------------------------------------------

const serviceApproachStepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const servicePageSchema = z.object({
  slug: slugSchema,
  phase: z.enum(["Think", "Build", "Scale"]),
  title: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  hero: z.object({
    eyebrow: z.string().min(1),
    headline: z.string().min(1),
    subhead: z.string().min(1),
    body: z.string().min(1),
  }),
  challenge: z.object({
    headline: z.string().min(1),
    body: z.array(z.string().min(1)),
  }),
  howWeHelp: z.object({
    headline: z.string().min(1),
    intro: z.string().min(1),
    listLabel: z.string().min(1),
    services: z.array(z.string().min(1)),
  }),
  approach: z.object({
    headline: z.string().min(1),
    intro: z.array(z.string().min(1)),
    steps: z.array(serviceApproachStepSchema),
  }),
  whatWeDeliver: z.object({
    intro: z.string().min(1),
    items: z.array(z.string().min(1)),
  }),
  whyAudax: z.object({
    headline: z.string().min(1),
    body: z.array(z.string().min(1)),
  }),
  whoThisIsFor: z.object({
    intro: z.string().min(1),
    items: z.array(z.string().min(1)),
  }),
  faq: z.array(faqEntrySchema),
  cta: z.object({
    headline: z.string().min(1),
    sub: z.string().min(1),
  }),
});

export const servicePagesSchema = z.array(servicePageSchema);
export type ServicePage = z.infer<typeof servicePageSchema>;

// ------------------------------------------------------------------
// Industries (lib/industries-data.ts)
// ------------------------------------------------------------------

const industrySolutionSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const industryCaseHighlightSchema = z.object({
  stat: z.string().min(1),
  label: z.string().min(1),
});

export const industrySchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  icon: z.string().min(1),
  tagline: z.string().min(1),
  heroTitle: z.string().min(1),
  heroSub: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  overview: z.string().min(1),
  challenges: z.array(z.string().min(1)),
  solutions: z.array(industrySolutionSchema),
  caseHighlights: z.array(industryCaseHighlightSchema),
  whoWeServe: z.array(z.string().min(1)),
  relatedServices: z.array(slugSchema),
  faq: z.array(faqEntrySchema),
});

export const industriesSchema = z.array(industrySchema);
export type Industry = z.infer<typeof industrySchema>;

// ------------------------------------------------------------------
// Insights posts (lib/insights-data.ts)
// ------------------------------------------------------------------

export const blogPostSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  excerpt: z.string().min(1),
  category: z.string().min(1),
  publishDate: z.string().min(1),
  author: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  content: z.string().min(1),
  relatedPosts: z.array(slugSchema),
  thumbnail: z.string().min(1),
});

export const blogPostsSchema = z.array(blogPostSchema);
export type BlogPostValidated = z.infer<typeof blogPostSchema>;

// ------------------------------------------------------------------
// Guides (lib/guides-data.ts)
// ------------------------------------------------------------------

export const guideSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  publishDate: z.string().min(1),
  author: z.string().min(1),
  readTime: z.string().min(1),
  content: z.string().min(1),
  faq: z.array(faqEntrySchema),
  relatedServices: z.array(slugSchema),
  relatedPosts: z.array(slugSchema),
});

export const guidesSchema = z.array(guideSchema);
export type Guide = z.infer<typeof guideSchema>;

// ------------------------------------------------------------------
// Solutions (lib/solutions-data.ts)
// ------------------------------------------------------------------

const solutionPhaseSchema = z.object({
  number: z.number().int().positive(),
  name: z.string().min(1),
  icon: z.string().min(1),
  description: z.string().min(1),
  duration: z.string().min(1),
  deliverables: z.array(z.string().min(1)),
});

export const solutionSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  heroTitle: z.string().min(1),
  heroSub: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  description: z.string().min(1),
  phases: z.array(solutionPhaseSchema),
  whoItsFor: z.array(z.string().min(1)),
  differentiators: z.array(z.string().min(1)),
  faq: z.array(faqEntrySchema),
  // External entries (e.g. partner programs hosted on a different domain)
  // set this so the hub page links off-site and the detail route is skipped.
  externalUrl: z.string().url().optional(),
});

export const solutionsSchema = z.array(solutionSchema);
export type Solution = z.infer<typeof solutionSchema>;

// ------------------------------------------------------------------
// Client success stories (lib/case-studies-data.ts)
// Clients are kept anonymous — no names, logos, or identifying URLs.
// ------------------------------------------------------------------

const caseStudyResultSchema = z.object({
  stat: z.string().min(1).optional(),
  label: z.string().min(1),
});

const caseStudyServiceSchema = z.enum([
  "AI Leadership",
  "Custom Software Development",
  "Digital Operations",
]);

export const caseStudySchema = z.object({
  slug: slugSchema,
  industry: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  services: z.array(caseStudyServiceSchema).min(1),
  tag: z.string().min(1).optional(),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  challenge: z.array(z.string().min(1)),
  approachIntro: z.array(z.string().min(1)).optional(),
  approach: z.array(z.string().min(1)),
  results: z.array(caseStudyResultSchema),
  keyTakeaway: z.string().min(1),
});

export const caseStudiesSchema = z.array(caseStudySchema);
export type CaseStudy = z.infer<typeof caseStudySchema>;

// ------------------------------------------------------------------
// Careers (lib/careers-data.ts)
// ------------------------------------------------------------------

// A single headed block of body copy — heading optional (for a leading
// block with no heading), paragraphs before the list, a bullet list, and
// paragraphs after. Flexible enough to fit postings with very different
// structures without forcing every job into the same section shape.
const careerJobSectionSchema = z.object({
  heading: z.string().min(1).optional(),
  paragraphs: z.array(z.string().min(1)).optional(),
  items: z.array(z.string().min(1)).optional(),
  outro: z.array(z.string().min(1)).optional(),
});

export const careerJobSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  excerpt: z.string().min(1),
  /** Badge shown on the listing card and detail-page eyebrow. Defaults to "Open Position" in the UI when omitted. */
  badgeLabel: z.string().min(1).optional(),
  /** Apply button text. Defaults to "Apply for This Role" in the UI when omitted. */
  applyLabel: z.string().min(1).optional(),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  intro: z.array(z.string().min(1)),
  sections: z.array(careerJobSectionSchema),
  closing: z.array(z.string().min(1)),
  /** Yes/no screening questions. Some postings (e.g. non-employment programs) have none. */
  questions: z.array(z.string().min(1)),
});

export const careersSchema = z.array(careerJobSchema);
export type CareerJob = z.infer<typeof careerJobSchema>;

// ------------------------------------------------------------------
// Soft-warning helpers — surfaced as warnings, never block the build.
// Use these in CI dashboards or content-quality reports.
// ------------------------------------------------------------------

export const META_DESCRIPTION_MIN = 120;
export const META_DESCRIPTION_MAX = 160;

export function checkMetaDescriptionLength(
  metaDescription: string
): { ok: boolean; length: number; reason?: string } {
  const length = metaDescription.length;
  if (length < META_DESCRIPTION_MIN)
    return { ok: false, length, reason: `too short (${length} < ${META_DESCRIPTION_MIN})` };
  if (length > META_DESCRIPTION_MAX)
    return { ok: false, length, reason: `too long (${length} > ${META_DESCRIPTION_MAX})` };
  return { ok: true, length };
}
