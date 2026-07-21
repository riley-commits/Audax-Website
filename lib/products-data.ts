export interface ProductData {
  name: string;
  /** One sentence describing what the product does. */
  description: string;
  url: string;
  /** Path to a real screenshot in /public once available. Falls back to a placeholder card when unset. */
  screenshot?: string;
  accentColor: string;
  /** Optional small italic note shown below the description (e.g. a disclosure). */
  note?: string;
}

export const productsData: ProductData[] = [
  {
    name: "Intuitina",
    description:
      "Intuitina deploys trained AI chatbots that qualify leads, answer support questions, and respond in over 120 languages, 24/7.",
    url: "https://www.intuitina.com/",
    screenshot: "/products/intuitina.png",
    accentColor: "#2E5F8A",
    note: "You may have already talked to Intuitina — it powers the chat widget on this site.",
  },
  {
    name: "Verclara",
    description:
      "Verclara is a unified business operating system that brings clients, pipeline, revenue, meetings, and tasks into one workspace for fractional executives and service-based business owners.",
    url: "https://www.verclara.io/",
    screenshot: "/products/verclara.webp",
    accentColor: "#7C3AED",
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
