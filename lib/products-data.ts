export interface ProductData {
  name: string;
  tagline: string;
  description: string;
  url: string;
  /** Path to a real screenshot in /public once available. Falls back to a placeholder card when unset. */
  screenshot?: string;
  accentColor: string;
}

// ── PLACEHOLDER DATA ────────────────────────────────────────────────────────
// Replace every entry below with a real product name, tagline, description,
// live URL, and screenshot before this page is considered launch-ready.
// Nothing here is a real Audax product yet.

export const productsData: ProductData[] = [
  {
    name: "Placeholder Product One",
    tagline: "Replace with a real one-line tagline",
    description: "Replace this with a real, honest description of what this product does and who it's for.",
    url: "https://example.com",
    accentColor: "#2E5F8A",
  },
  {
    name: "Placeholder Product Two",
    tagline: "Replace with a real one-line tagline",
    description: "Replace this with a real, honest description of what this product does and who it's for.",
    url: "https://example.com",
    accentColor: "#7C3AED",
  },
  {
    name: "Placeholder Product Three",
    tagline: "Replace with a real one-line tagline",
    description: "Replace this with a real, honest description of what this product does and who it's for.",
    url: "https://example.com",
    accentColor: "#0D9488",
  },
];

/** Appends UTM params so outbound clicks from this page are attributable in destination analytics. */
export function withUtm(url: string, productName: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "audaxventures.ca");
  u.searchParams.set("utm_medium", "referral");
  u.searchParams.set("utm_campaign", "products_page");
  u.searchParams.set("utm_content", productName.toLowerCase().replace(/\s+/g, "-"));
  return u.toString();
}
