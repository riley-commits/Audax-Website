export interface ServicePageData {
  slug: string;
  phase: "Think" | "Build" | "Scale";
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; subhead: string; body: string };
  challenge: { headline: string; body: string[] };
  howWeHelp: { headline: string; intro: string; listLabel: string; services: string[] };
  approach: { headline: string; intro: string[]; steps: { title: string; description: string }[] };
  /** Static "What We Deliver" grid. Omit in favor of firstNinetyDays for an interactive alternative. */
  whatWeDeliver?: { intro: string; items: string[] };
  /** Interactive "Your First N Days" stage-selector, shown instead of the static whatWeDeliver grid when present. */
  firstNinetyDays?: {
    eyebrow: string;
    heading: string;
    subhead: string;
    permanentNote: string;
    stages: { range: string; title: string; description: string; bullets: string[] }[];
    footerNote: string;
  };
  whyAudax: { headline: string; body: string[] };
  whoThisIsFor: { intro: string; items: string[] };
  faq: { q: string; a: string }[];
  cta: { headline: string; sub: string };
}

export const servicePagesData: ServicePageData[] = [
  {
    slug: "ai-leadership",
    phase: "Think",
    title: "AI Leadership",
    metaTitle: "Fractional Chief AI Officer & AI Leadership | Audax Ventures",
    metaDescription:
      "Executive-level AI leadership as a Fractional Chief AI Officer — AI strategy, roadmaps, governance, and hands-on guidance for your organization.",
    hero: {
      eyebrow: "Think",
      headline: "AI Leadership",
      subhead: "Turn AI Into a Competitive Advantage.",
      body: "AI is changing how organizations operate, but knowing where to start can be overwhelming. As your Fractional Chief AI Officer (CAIO), Audax works alongside your leadership team to identify opportunities, prioritize investments, develop a practical roadmap, and guide successful AI adoption across your organization.",
    },
    challenge: {
      headline: "AI Has Enormous Potential. Most Organizations Don't Know Where to Begin.",
      body: [
        "Every week brings new AI tools, platforms, and headlines. The challenge isn't finding technology. It's knowing which opportunities will create meaningful business value.",
        "Without a clear strategy, organizations often invest in disconnected tools, duplicate work, create unnecessary risk, and miss opportunities to improve efficiency.",
        "Audax helps you move beyond experimentation by developing a practical AI strategy aligned with your business objectives.",
      ],
    },
    howWeHelp: {
      headline: "Strategic AI Leadership Without Hiring a Full-Time Executive",
      intro: "Our Fractional Chief AI Officer service gives your organization executive-level AI leadership on a flexible basis. We work directly with founders and leadership teams to ensure every AI initiative supports measurable business outcomes.",
      listLabel: "Services Include",
      services: [
        "AI Readiness Assessments",
        "AI Strategy Development",
        "Executive AI Advisory",
        "AI Opportunity Identification",
        "AI Agents & Workflow Automation",
        "AI Governance & Risk",
        "Technology Roadmaps",
        "AI Vendor Evaluation",
        "Leadership Workshops",
        "Team Training",
        "AI Implementation Planning",
      ],
    },
    approach: {
      headline: "Every AI Initiative Begins With Strategy",
      intro: [
        "We don't believe in adopting AI simply because it's available.",
        "Instead, we follow a structured approach that focuses on solving business problems before selecting technology.",
      ],
      steps: [
        { title: "Discover", description: "Understand your business, workflows, goals, and challenges." },
        { title: "Assess", description: "Identify where AI can create measurable value." },
        { title: "Design", description: "Develop an AI roadmap prioritized by business impact." },
        { title: "Build & Deploy", description: "Build the AI agents and automations the roadmap calls for, and put them into production." },
        { title: "Optimize", description: "Measure performance and continuously improve what's live." },
      ],
    },
    firstNinetyDays: {
      eyebrow: "What to Expect",
      heading: "Your First 90 Days",
      subhead: "Every engagement is tailored to your business — but here's the pace you can expect.",
      permanentNote: "Every engagement begins with an AI Strategy Roadmap — after that, what gets built together is shaped entirely around your goals.",
      stages: [
        {
          range: "Days 1–30",
          title: "Discover & Assess",
          description: "We start by understanding your business, workflows, and goals. Through stakeholder interviews and opportunity mapping, we identify where AI can create the most measurable value — and leave you with a prioritized AI Strategy Roadmap.",
          bullets: ["Business & workflow discovery", "Stakeholder interviews", "Opportunity prioritization"],
        },
        {
          range: "Days 31–60",
          title: "Design & Build",
          description: "We design the highest-priority opportunity in detail and get to work building it — a real AI agent or automation, not just a plan for one.",
          bullets: ["Solution design", "Technology evaluation", "Hands-on build of your first agent or automation"],
        },
        {
          range: "Days 61–90",
          title: "Deploy & Optimize",
          description: "We deploy what we've built, put it in front of real users, and start measuring what matters — usage, accuracy, time saved. From there, we set the cadence for ongoing optimization.",
          bullets: ["Deployment", "Performance measurement", "Optimization cadence", "Executive review"],
        },
      ],
      footerNote: "What we build in those 90 days depends entirely on your business. This is the pace you can expect — not a fixed package.",
    },
    whyAudax: {
      headline: "Strategy Is Only Valuable If It Leads to Action.",
      body: [
        "Many AI consulting firms stop after delivering a strategy document.",
        "Audax goes further.",
        "Our team designs, builds, implements, and supports the technology required to bring that strategy to life.",
        "That means one partner from strategy through execution.",
      ],
    },
    whoThisIsFor: {
      intro: "Perfect for organizations that want to:",
      items: [
        "Develop an AI strategy",
        "Improve operational efficiency",
        "Identify automation opportunities",
        "Prepare for responsible AI adoption",
        "Modernize internal operations",
        "Access executive AI expertise without hiring full-time",
      ],
    },
    faq: [
      { q: "What is a Fractional Chief AI Officer?", a: "A Fractional Chief AI Officer gives your organization executive-level AI leadership on a flexible, part-time basis — the same strategic guidance and accountability as a full-time CAIO, without the cost or commitment of a full-time hire." },
      { q: "Do we need to already be using AI?", a: "No. Many of our clients are just beginning to explore AI. We start by understanding your business and identifying where AI can realistically create value, whether or not you have any AI in place today." },
      { q: "How long are engagements?", a: "Most AI Leadership engagements start with a 3-month minimum commitment, which gives us time to complete your initial assessment, roadmap, and early implementation work. After that, the engagement continues on a monthly basis, so it can scale up or down as your AI priorities evolve." },
      { q: "Can you help implement the strategy?", a: "Absolutely. Our team provides both strategic leadership and custom software development." },
    ],
    cta: {
      headline: "Ready to Build Your AI Strategy?",
      sub: "Let's identify where AI can create the greatest impact across your organization.",
    },
  },
  {
    slug: "custom-software-development",
    phase: "Build",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development | Audax Ventures",
    metaDescription:
      "Custom software development built around your business — AI applications, SaaS platforms, internal systems, and web applications, concept through launch.",
    hero: {
      eyebrow: "Build",
      headline: "Custom Software Development",
      subhead: "Technology Built Around Your Business.",
      body: "Every organization operates differently. Your software should too. Audax designs and develops custom software that solves real business challenges, streamlines operations, and supports long-term growth. From AI-powered applications to enterprise platforms and customer portals, every solution is purpose-built around your business.",
    },
    challenge: {
      headline: "Off-the-Shelf Software Wasn't Built for Your Business.",
      body: [
        "Many organizations rely on multiple disconnected platforms that create duplicate work, limit flexibility, and increase costs.",
        "Custom software gives you complete control over how your business operates.",
      ],
    },
    howWeHelp: {
      headline: "We Design, Build and Launch Custom Technology",
      intro: "Whether you're launching a new SaaS platform or replacing outdated internal systems, our team manages every stage of development from concept through deployment.",
      listLabel: "Solutions We Build",
      services: [
        "AI Applications",
        "SaaS Platforms",
        "Internal Business Systems",
        "CRM Platforms",
        "Mobile Applications",
        "Customer Portals",
        "Web Applications",
        "Automation Platforms",
        "API Integrations",
        "Corporate Websites",
      ],
    },
    approach: {
      headline: "Great Software Starts With Understanding Your Business",
      intro: [],
      steps: [
        { title: "Discover", description: "Learn your workflows, users, and goals." },
        { title: "Design", description: "Create user experiences, architecture, and technical plans." },
        { title: "Build", description: "Develop scalable, secure software." },
        { title: "Launch", description: "Deploy, train, and support your team." },
      ],
    },
    whatWeDeliver: {
      intro: "Every engagement is tailored, but typical deliverables include:",
      items: [
        "Discovery Workshops",
        "Technical Architecture",
        "UI / UX Design",
        "Software Development",
        "Quality Assurance",
        "Deployment",
        "Documentation",
        "User Training",
        "Ongoing Enhancements",
      ],
    },
    whyAudax: {
      headline: "We Don't Just Build Software.",
      body: [
        "We build software that supports long-term business transformation.",
        "Because every project begins with strategy, every feature serves a purpose.",
        "The result isn't just beautiful software.",
        "It's software that improves the way your organization operates.",
      ],
    },
    whoThisIsFor: {
      intro: "Organizations looking to:",
      items: [
        "Replace outdated software",
        "Build a SaaS platform",
        "Develop AI-powered tools",
        "Launch an MVP",
        "Automate workflows",
        "Modernize operations",
      ],
    },
    faq: [
      { q: "How long does a project take?", a: "Most custom software projects take 8 to 16 weeks from kickoff to launch, depending on scope and complexity. Smaller tools and MVPs can move faster, while larger platforms with multiple integrations may take longer. We'll give you a clear timeline estimate after our discovery call." },
      { q: "Who owns the code?", a: "You do. We transfer full source code and IP ownership on every engagement — no exceptions." },
      { q: "Can you integrate with our existing systems?", a: "Yes. We regularly integrate with existing CRMs, ERPs, and other business systems to keep your new software connected to the tools you already rely on." },
      { q: "Do you provide support after launch?", a: "Absolutely. We offer ongoing support and enhancement plans to help your software continue evolving after launch." },
    ],
    cta: {
      headline: "Let's Build Something That Lasts.",
      sub: "Every great platform starts with a conversation.",
    },
  },
  {
    slug: "digital-operations",
    phase: "Scale",
    title: "Digital Operations",
    metaTitle: "Digital Operations & Long-Term Technology Partnership | Audax Ventures",
    metaDescription:
      "Ongoing digital operations support from Audax Ventures — product evolution, workflow optimization, system integrations, and long-term technology partnership.",
    hero: {
      eyebrow: "Scale",
      headline: "Digital Operations",
      subhead: "Technology Should Keep Creating Value After Launch.",
      body: "Launching software isn't the finish line. It's the beginning. Audax becomes your long-term technology partner, helping your organization continuously improve systems, optimize workflows, introduce new capabilities, and ensure your technology evolves alongside your business.",
    },
    challenge: {
      headline: "Technology Shouldn't Stand Still.",
      body: [
        "Businesses evolve.",
        "Customers change.",
        "Operations become more complex.",
        "Yet many software projects are treated as complete the day they're launched.",
        "Without continuous improvement, technology quickly becomes outdated and loses its value.",
      ],
    },
    howWeHelp: {
      headline: "Long-Term Technology Partnership",
      intro: "Rather than handing over software and walking away, we remain part of your team, providing strategic guidance and ongoing technical support as your business grows. We track outcomes like accuracy, time saved, adoption rate, and cost per resolution, reviewed on a regular cadence, so every optimization is grounded in real data instead of guesswork.",
      listLabel: "Services Include",
      services: [
        "Product Evolution",
        "AI Optimization",
        "Workflow Improvements",
        "Feature Roadmaps",
        "System Integrations",
        "Automation Expansion",
        "Performance Reviews",
        "Technical Support",
        "User Adoption",
        "Strategic Technology Advisory",
      ],
    },
    approach: {
      headline: "Continuous Improvement Never Stops",
      intro: [],
      steps: [
        { title: "Monitor", description: "Track usage, accuracy, and performance against clear benchmarks, reviewed monthly." },
        { title: "Improve", description: "Tune AI agents and automations and re-optimize workflows based on real usage data." },
        { title: "Expand", description: "Introduce new capabilities as your business grows." },
        { title: "Partner", description: "Provide ongoing strategic technology leadership." },
      ],
    },
    whatWeDeliver: {
      intro: "Every engagement is tailored, but typical deliverables include:",
      items: [
        "Quarterly Technology Reviews",
        "Product Roadmaps",
        "AI Expansion Plans",
        "Performance Optimization",
        "Feature Development",
        "User Support",
        "Training",
        "Technical Advisory",
      ],
    },
    whyAudax: {
      headline: "A Long-Term Partner, Not Just Another Vendor.",
      body: [
        "Technology should evolve alongside your business.",
        "Audax stays involved after launch to ensure your software continues delivering value through continuous innovation, optimization, and strategic guidance.",
        "This is where the AI strategy and agents we build together in AI Leadership keep getting sharper — the same relationship, continued, not a separate service.",
      ],
    },
    whoThisIsFor: {
      intro: "Organizations that want to:",
      items: [
        "Continuously improve technology",
        "Expand AI capabilities",
        "Optimize operations",
        "Reduce technical debt",
        "Scale efficiently",
        "Build a long-term technology partnership",
      ],
    },
    faq: [
      { q: "Do you only support software you build?", a: "No. While we're often already familiar with software we've built for you, we also take on Digital Operations support for systems built by other teams or vendors. We start with a technical review to get up to speed, then move into ongoing support and improvement." },
      { q: "Can we start with support before building something new?", a: "Yes. Many clients start with Digital Operations to stabilize and improve an existing system, then bring us in for new development once priorities are clear. There's no requirement to start with a new build." },
      { q: "How are ongoing engagements structured?", a: "Digital Operations engagements are typically structured as a monthly retainer, giving you ongoing access to our team for support, improvements, and strategic guidance. Scope and hours are tailored to your systems and priorities, and can adjust as your needs change." },
      { q: "Can Digital Operations include Fractional CAIO support?", a: "Yes. Many clients combine Digital Operations with AI Leadership, creating a single long-term partnership that aligns technology, operations, and AI strategy as their organization grows." },
    ],
    cta: {
      headline: "Continue Building What's Next.",
      sub: "Technology isn't a one-time investment. It's an ongoing competitive advantage.",
    },
  },
];

export function getServicePageBySlug(slug: string): ServicePageData | undefined {
  return servicePagesData.find((s) => s.slug === slug);
}

export function getAllServicePageSlugs(): string[] {
  return servicePagesData.map((s) => s.slug);
}
