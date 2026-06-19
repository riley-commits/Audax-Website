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
// Services (lib/services-data.ts)
// ------------------------------------------------------------------

const serviceProcessStepSchema = z.object({
  step: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  duration: z.string().min(1),
});

const serviceIncludedItemSchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
});

// Package tier (used by Fractional CAIO and any future tiered/retainer service).
const packageMonthlyPhaseSchema = z.object({
  month: z.number().int().positive(),
  title: z.string().min(1),
  activities: z.array(z.string().min(1)),
  deliverables: z.array(z.string().min(1)),
});

const servicePackageSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  priceUnit: z.string().min(1),
  tagline: z.string().min(1),
  bestFor: z.string().min(1),
  features: z.array(z.string().min(1)).optional(),
  monthlyPhases: z.array(packageMonthlyPhaseSchema),
});

export const serviceSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  heroTitle: z.string().min(1),
  heroSub: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  description: z.string().min(1),
  whatsIncluded: z.array(serviceIncludedItemSchema),
  whoItsFor: z.array(z.string().min(1)),
  // Optional — tiered/retainer services (Fractional CAIO) describe their
  // engagement structure via `packages` instead of a single `process` arc.
  process: z.array(serviceProcessStepSchema).optional(),
  techStack: z.array(z.string().min(1)).optional(),
  packages: z.array(servicePackageSchema).optional(),
  faq: z.array(faqEntrySchema),
  relatedServices: z.array(slugSchema),
});

export const servicesSchema = z.array(serviceSchema);
export type Service = z.infer<typeof serviceSchema>;

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
// Blog posts (lib/blog-data.ts)
// ------------------------------------------------------------------

export const blogPostSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  excerpt: z.string().min(1),
  category: z.string().min(1),
  publishDate: z.string().min(1),
  readTime: z.string().min(1),
  author: z.string().min(1),
  authorRole: z.string().min(1),
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
