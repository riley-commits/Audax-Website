export interface ProductData {
  name: string;
  tagline: string;
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
    tagline: "The all-in-one AI platform for agents & chatbots",
    description:
      "Intuitina deploys trained AI chatbots across websites and customer touchpoints — qualifying leads, answering support questions, and responding in over 120 languages, 24/7. It's built for e-commerce, SaaS, healthcare, and service businesses that want a chatbot people actually get useful answers from, with no code required to set up.",
    url: "https://www.intuitina.com/",
    accentColor: "#2E5F8A",
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
