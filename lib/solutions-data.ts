export interface SolutionData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  phases: {
    number: number;
    name: string;
    icon: string;
    description: string;
    duration: string;
    /**
     * Activities / what we do in this phase. Rendered as a checklist.
     */
    deliverables: string[];
    /**
     * Phase-level outcome callout — what you get out of the phase, not
     * what we do. Renders as a distinct bordered callout. Optional so
     * older program entries without the outcome split don't fail.
     */
    outcome?: string;
  }[];
  whoItsFor: string[];
  differentiators: string[];
  faq: { q: string; a: string }[];
  /** If set, all "program details" links point here and open in a new tab instead of an internal page. */
  externalUrl?: string;
}

export const solutionsData: SolutionData[] = [
  {
    slug: "founder-prototype-program",
    title: "Founder Prototype Program",
    heroTitle: "Founder Prototype Program — From Idea to Working Prototype, Fast",
    heroSub:
      "A focused program for founders who need to turn a concept into a real, testable product — without committing to a full build before you've validated the idea.",
    metaTitle: "Founder Prototype Program | Audax Ventures",
    metaDescription:
      "Audax Ventures' Founder Prototype Program: turn your concept into a working prototype fast. Designed for early-stage founders who need to validate before they build.",
    description:
      "Great products aren't built — they're discovered through rapid experimentation. The Founder Prototype Program is designed for early-stage founders who need a working prototype in front of real users as quickly as possible. We scope tightly, move fast, and give you something tangible to test, pitch, and iterate on — before you've committed a full development budget.",
    phases: [
      {
        number: 1,
        name: "Define",
        icon: "🎯",
        description:
          "We work with you to crystallize the core idea into a buildable scope. What is the one thing your prototype needs to demonstrate? Who are you building it for, and what do you need to learn? This phase turns a concept into a clear, executable plan.",
        duration: "1 week",
        deliverables: [
          "Core hypothesis and success criteria defined",
          "Target user and key use case identified",
          "Prototype scope document",
          "Tech stack and build path recommendation",
        ],
      },
      {
        number: 2,
        name: "Build",
        icon: "⚡",
        description:
          "We build fast. Using the defined scope, we produce a working, interactive prototype — not a mockup or a slide deck. This is real software your users can touch, your investors can see, and you can learn from.",
        duration: "2–4 weeks",
        deliverables: [
          "Working interactive prototype",
          "Core user flow fully functional",
          "Deployed to a live URL for testing and sharing",
          "Source code handed over to you",
        ],
      },
      {
        number: 3,
        name: "Validate",
        icon: "🔬",
        description:
          "A prototype is only valuable if it teaches you something. We help you put it in front of real users, collect structured feedback, and interpret what you've learned — so your next move is informed by evidence, not assumption.",
        duration: "1–2 weeks",
        deliverables: [
          "User testing sessions (5–10 participants)",
          "Structured feedback synthesis",
          "Key learnings and recommended next steps",
          "Build vs. iterate decision framework",
        ],
      },
    ],
    whoItsFor: [
      "Pre-seed founders who need something to show investors before raising",
      "Idea-stage entrepreneurs who want to validate before committing to a full build",
      "Founders who have been pitching a concept and need a real product to back it up",
      "Non-technical founders who need a technical partner to move fast",
      "Teams that want to de-risk their MVP investment with a lean prototype first",
    ],
    differentiators: [
      "Built for speed — most prototypes ship in under 4 weeks",
      "Real working software, not mockups or wireframes",
      "You own the code from day one — no lock-in",
      "Structured validation built in, not bolted on",
      "Clear path from prototype to full MVP if the idea proves out",
    ],
    faq: [
      { q: "What's the difference between this and an MVP?", a: "An MVP is a production-ready product with the minimum features to acquire real customers. A prototype is faster and cheaper — it's built to learn and validate, not to scale. The Founder Prototype Program is the right starting point before you commit to an MVP build." },
      { q: "Can I move from the prototype to a full build with Audax?", a: "Absolutely. Many founders use this program as the first phase of a longer engagement. If the prototype validates your idea, we can transition directly into a full MVP build to take it to launch." },
      { q: "Will investors take a prototype seriously?", a: "Yes — a working prototype demonstrates far more than a slide deck. Investors want to see that you can execute, that users engage with your product, and that you understand the problem you're solving. A real prototype does all three." },
      { q: "How much does it cost?", a: "The program is fixed-price and scoped before it starts. Visit the program page for full details and pricing." },
    ],
    externalUrl: "https://www.audaxventures.io",
  },
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutionsData.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  // Exclude external entries — they live on their own domains, so we don't
  // want Next.js generating a duplicate /programs/<slug> detail page that
  // would compete with the canonical page off-site.
  return solutionsData.filter((s) => !s.externalUrl).map((s) => s.slug);
}
