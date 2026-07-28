export interface ProductData {
  name: string;
  /** Small uppercase category label shown above the name, e.g. "AI Chatbot Platform". */
  category: string;
  /** Short, bold headline capturing what the product does — the card's main hook. */
  headline: string;
  /** One sentence describing what the product does. */
  description: string;
  url: string;
  /** Path to a real screenshot in /public once available. Falls back to a placeholder card when unset. */
  screenshot?: string;
  accentColor: string;
  /** CSS background value for the row, drawn from the product's own brand colors. */
  gradient: string;
  /** Whether the row's text should be light or dark, based on the gradient's contrast. */
  textColor: "light" | "dark";
  /** Optional small italic note shown below the description (e.g. a disclosure). */
  note?: string;
}

export const productsData: ProductData[] = [
  {
    name: "Verclara",
    category: "The Business Operating System",
    headline: "Run your business from one command center.",
    description:
      "Verclara is a unified business operating system that brings clients, pipeline, revenue, meetings, and tasks into one workspace for fractional executives and service-based business owners.",
    url: "https://www.verclara.io/",
    screenshot: "/products/verclara.webp",
    accentColor: "#E08A3E",
    gradient: "linear-gradient(135deg, #0F1626 0%, #1C2A47 55%, #3C2712 100%)",
    textColor: "light",
  },
  {
    name: "Intuitina",
    category: "AI Chatbot Platform",
    headline: "AI agents that qualify, support, and convert.",
    description:
      "Intuitina deploys trained AI chatbots that qualify leads, answer support questions, and respond in over 120 languages, 24/7.",
    url: "https://www.intuitina.com/",
    screenshot: "/products/intuitina.png",
    accentColor: "#2563EB",
    gradient: "linear-gradient(135deg, #EFF5FF 0%, #DCE9FF 60%, #C7DBFF 100%)",
    textColor: "dark",
    note: "You may have already talked to Intuitina — it powers the chat widget on this site.",
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
