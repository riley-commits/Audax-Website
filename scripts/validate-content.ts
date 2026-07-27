/**
 * Build-time content validator.
 *
 * Runs every typed content collection through its Zod schema. Build
 * fails (non-zero exit) if any entry is structurally invalid: missing
 * required field, wrong type, malformed nested object.
 *
 * Also runs soft checks (e.g. meta description length) and prints them
 * as warnings without failing the build. These surface content quality
 * issues without blocking deploys.
 *
 * Wired into npm's prebuild lifecycle (see package.json), so `next build`
 * triggers this first. Local dev (`next dev`) skips it.
 */

import { servicePagesData } from "../lib/service-pages-data";
import { industriesData } from "../lib/industries-data";
import { blogPosts } from "../lib/insights-data";
import { guidesData } from "../lib/guides-data";
import { solutionsData } from "../lib/solutions-data";
import { caseStudiesData } from "../lib/case-studies-data";
import {
  servicePagesSchema,
  industriesSchema,
  blogPostsSchema,
  guidesSchema,
  solutionsSchema,
  caseStudiesSchema,
  checkMetaDescriptionLength,
} from "../lib/content-schema";

interface Collection {
  name: string;
  data: unknown;
  schema:
    | typeof servicePagesSchema
    | typeof industriesSchema
    | typeof blogPostsSchema
    | typeof guidesSchema
    | typeof solutionsSchema
    | typeof caseStudiesSchema;
}

const collections: Collection[] = [
  { name: "services", data: servicePagesData, schema: servicePagesSchema },
  { name: "industries", data: industriesData, schema: industriesSchema },
  { name: "blog posts", data: blogPosts, schema: blogPostsSchema },
  { name: "guides", data: guidesData, schema: guidesSchema },
  { name: "solutions", data: solutionsData, schema: solutionsSchema },
  { name: "case studies", data: caseStudiesData, schema: caseStudiesSchema },
];

let hardFailures = 0;
let softWarnings = 0;
const startedAt = Date.now();

console.log("Validating content collections against Zod schemas...\n");

for (const { name, data, schema } of collections) {
  const result = schema.safeParse(data);

  if (!result.success) {
    hardFailures++;
    console.error(`❌ ${name}: ${result.error.issues.length} structural error(s)`);
    for (const issue of result.error.issues) {
      const path = issue.path.length ? issue.path.join(".") : "(root)";
      console.error(`   • ${path} — ${issue.message}`);
    }
    console.error("");
    continue;
  }

  const count = Array.isArray(data) ? data.length : 1;
  console.log(`✅ ${name}: ${count} entries pass structural validation`);

  // Soft checks: meta description length per SEO best practice.
  const entriesWithMeta = (result.data as Array<{ slug: string; metaDescription: string }>);
  for (const entry of entriesWithMeta) {
    const check = checkMetaDescriptionLength(entry.metaDescription);
    if (!check.ok) {
      softWarnings++;
      console.warn(
        `   ⚠  ${name}/${entry.slug}.metaDescription: ${check.reason}`
      );
    }
  }
}

const elapsedMs = Date.now() - startedAt;
console.log("");
console.log(
  `Done in ${elapsedMs}ms. ${hardFailures} structural error(s), ${softWarnings} soft warning(s).`
);

if (hardFailures > 0) {
  console.error("\nBuild blocked: fix structural errors above.");
  process.exit(1);
}

if (softWarnings > 0) {
  console.log(
    "\nSoft warnings do not block the build. Tighten content in /lib/*-data.ts when convenient."
  );
}

process.exit(0);
