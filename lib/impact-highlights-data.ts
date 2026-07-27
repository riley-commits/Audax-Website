export interface ImpactHighlight {
  slug: string;
  badge: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  accent: string;
}

// Featured project highlights for the homepage "Impact Across Industries"
// section. Confirmed real content (2026-07-27) — not placeholder.
export const impactHighlights: ImpactHighlight[] = [
  {
    slug: "automated-invoice-processing",
    badge: "Automation",
    title: "Automated Invoice Processing",
    description: "Reduced manual work by 81% and improved accuracy across 1,500+ invoices monthly.",
    stat: "87%",
    statLabel: "Time Saved",
    accent: "#2563EB",
  },
  {
    slug: "operations-intelligence-platform",
    badge: "AI Platform",
    title: "Operations Intelligence Platform",
    description: "Built a custom dashboard giving leadership real-time visibility into performance and profitability.",
    stat: "3x",
    statLabel: "Faster Reporting",
    accent: "#0F172A",
  },
  {
    slug: "customer-support-ai-assistant",
    badge: "AI Assistant",
    title: "Customer Support AI Assistant",
    description: "AI assistant that resolves 70% of inquiries instantly and improves customer satisfaction.",
    stat: "70%",
    statLabel: "Inquiries Resolved",
    accent: "#10B981",
  },
];
