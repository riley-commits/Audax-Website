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
    slug: "catalyst-for-founders",
    title: "Catalyst for Founders",
    heroTitle: "Catalyst for Founders — Your Venture & Product Partner From Idea to Traction",
    heroSub:
      "A structured three-phase program that takes you from raw idea to a live, revenue-generating product — with the team, process, and accountability you need.",
    metaTitle: "Catalyst for Founders Program | MVP to Traction",
    metaDescription:
      "Catalyst for Founders: our structured Validate → Launch → Scale program for pre-seed and seed-stage founders. Book a free intro call with Audax Ventures.",
    description:
      "Most founders are smart, motivated, and full of ideas. What they often lack is a reliable technical partner who understands the startup journey — the need to move fast, stay lean, and make every dollar count. Catalyst for Founders is our answer: a program designed specifically for pre-seed and seed-stage founders who need more than an agency.",
    phases: [
      {
        number: 1,
        name: "Validate",
        icon: "🔍",
        description:
          "Before writing a line of code, we help you validate your core assumptions with real users. We run a Discovery Sprint: customer interviews, competitive analysis, and a lean experiment to test your riskiest hypothesis. You'll leave with evidence-based confidence in your idea, a defined MVP scope, and a user persona document you can use to raise capital.",
        duration: "2–3 weeks",
        deliverables: [
          "5–10 customer discovery interviews",
          "Competitive landscape analysis",
          "MVP feature scope document",
          "Validated user personas",
          "Lean experiment results (landing page test, prototype test, or pre-order campaign)",
        ],
      },
      {
        number: 2,
        name: "Launch",
        icon: "🚀",
        description:
          "With a validated scope, we move into design and development. We apply our MVP development process: fast, focused sprints, weekly demos, and a bias toward shipping over perfecting. You'll have a production-ready product in the hands of your first users within 8–16 weeks.",
        duration: "8–16 weeks",
        deliverables: [
          "Complete UI/UX in Figma",
          "Production-ready MVP (mobile or web)",
          "Authentication, core features, and basic analytics",
          "Cloud deployment with CI/CD pipeline",
          "Launch checklist and GTM support",
        ],
      },
      {
        number: 3,
        name: "Scale",
        icon: "📈",
        description:
          "Once you have users and early revenue, we help you build the systems for scale: better onboarding, new features guided by user data, and infrastructure that grows with you. Many Catalyst clients raise their seed round with us in the Scale phase, using their traction as proof of product-market fit.",
        duration: "Ongoing — typically 6–18 months",
        deliverables: [
          "Feature roadmap based on user feedback and analytics",
          "Ongoing 2-week sprint cycles",
          "A/B testing infrastructure",
          "Investor-ready metrics dashboard",
          "Technical due diligence support for fundraising",
        ],
      },
    ],
    whoItsFor: [
      "Pre-seed founders with a validated idea who need a technical co-founder equivalent",
      "Solo entrepreneurs launching a digital product or SaaS",
      "Seed-stage companies that need to move faster than their internal team allows",
      "Non-technical founders who need a trusted partner, not just a vendor",
    ],
    differentiators: [
      "We act as a partner, not just a contractor — we care about your outcomes",
      "Fixed-scope, time-boxed phases prevent scope creep and budget surprises",
      "You own all IP, code, and assets from day one",
      "We have domain experience in SaaS, marketplace, fintech, and healthtech",
      "We'll tell you if your idea needs more validation before we build",
    ],
    faq: [
      { q: "What's the minimum budget for Catalyst?", a: "The Validate phase starts at $8,000. The Launch phase (MVP build) typically ranges from $25,000 to $80,000. We structure payments by phase so you're never paying for work that hasn't started." },
      { q: "How are Catalyst phases priced?", a: "Each phase is scoped and priced individually before it starts, so you're never paying for work that hasn't begun. Reach out for a free intro call and we'll give you a clear picture of what to expect." },
      { q: "How is Catalyst different from hiring a development agency?", a: "Most agencies take a brief and build what you ask for. We challenge your assumptions, help you scope correctly, and act as a genuine product partner. We've seen what works and we'll tell you when something won't." },
      { q: "Do you take equity?", a: "Our model is fee-based. We don't take equity." },
      { q: "What if I'm still in the idea stage?", a: "Perfect — that's exactly when to start. The Validate phase is designed for founders who have an idea but haven't built anything yet." },
      { q: "Can I do just the Validate phase?", a: "Yes. Phases are sold independently. Many founders do the Validate phase and then take the deliverables to raise a pre-seed round before commissioning the build." },
    ],
  },
  {
    slug: "enterprise-innovation-program",
    title: "Enterprise Innovation Program",
    heroTitle: "Enterprise Innovation Program — From Internal Idea to Shipped Product",
    heroSub:
      "A three-phase program that helps enterprise innovation teams, CTOs, and product leaders turn internal ideas into production-grade software products.",
    metaTitle: "Enterprise Innovation Program | Internal Product Development",
    metaDescription:
      "Audax Ventures' Enterprise Innovation Program: Audit → Build → Scale. Turn internal ideas into shipped products. For innovation teams, CTOs, and product VPs.",
    description:
      "Enterprise innovation is hard. Internal teams face bureaucracy, resource constraints, and a culture optimized for the existing business — not for new product development. Our Enterprise Innovation Program provides the external team, structured process, and senior technical leadership to move your initiative from whiteboard to production.",
    phases: [
      {
        number: 1,
        name: "Audit",
        icon: "🔎",
        description:
          "We embed with your team for 2–3 weeks to understand the current state: existing technology, internal workflows, stakeholder requirements, and the gap between where you are and where you want to go. The output is an Innovation Blueprint — a prioritized roadmap with build-vs-buy recommendations, risk assessment, and an investment case your executive team can approve.",
        duration: "2–3 weeks",
        deliverables: [
          "Technology landscape audit",
          "Stakeholder requirements document",
          "Build vs. buy analysis",
          "Risk and dependency assessment",
          "Innovation Blueprint with prioritized roadmap",
          "Investment case for executive sign-off",
        ],
      },
      {
        number: 2,
        name: "Build",
        icon: "🏗️",
        description:
          "With executive sign-off on the Innovation Blueprint, we assemble a dedicated pod of senior engineers, a designer, and a project lead to execute the build. We work in tight, 2-week sprints with bi-weekly stakeholder demos. Your team is looped in throughout — we believe the build process is also a knowledge transfer.",
        duration: "3–9 months",
        deliverables: [
          "Production-ready software product",
          "Full test coverage and QA documentation",
          "CI/CD pipeline and cloud infrastructure",
          "API documentation and integration guides",
          "Internal team training and handoff sessions",
          "Source code in your repository",
        ],
      },
      {
        number: 3,
        name: "Scale",
        icon: "📊",
        description:
          "Post-launch, we remain available as a strategic technology partner: helping your internal team build on the foundation we created, responding to performance needs as user volume grows, and advising on the next phase of your innovation roadmap.",
        duration: "Ongoing — typically 6–24 months",
        deliverables: [
          "Ongoing sprint capacity (flexible 20–80 hours/month)",
          "Architecture evolution planning",
          "Performance monitoring and optimization",
          "Feature expansion aligned to user feedback",
          "Innovation roadmap quarterly reviews",
        ],
      },
    ],
    whoItsFor: [
      "Corporate innovation teams with ideas stuck in the planning phase",
      "CTOs who need external capacity to execute alongside internal teams",
      "Product VPs launching a new digital product line",
      "Organizations that need to move faster than internal procurement allows",
    ],
    differentiators: [
      "Senior-only team — no juniors on your project",
      "Fixed-price phases eliminate budget surprises for finance approval",
      "Executive-ready reporting at every milestone",
      "We integrate with your internal teams, not around them",
      "Experience across regulated industries: healthcare, finance, logistics, and government",
      "Full IP transfer — no vendor lock-in",
    ],
    faq: [
      { q: "How does Audax differ from a Big 4 consulting firm?", a: "Big 4 firms excel at strategy documents. We actually build the software. Our teams are practitioners: engineers, designers, and architects who write code every day." },
      { q: "Can you work within our procurement process?", a: "Yes. We're set up for enterprise procurement including MSAs, SOWs, insurance certificates, security questionnaires, and PO-based billing." },
      { q: "How do you handle data security for enterprise clients?", a: "We sign a comprehensive DPA, work within your security framework, and can complete security questionnaires. We have experience with SOC 2, HIPAA, and ISO 27001 environments." },
      { q: "Do you resource the project with your team or subcontractors?", a: "We use our own team. The team you meet in the discovery is the team that builds your product." },
      { q: "How do we get started?", a: "We kick off with a 30-minute discovery call to align on goals and prepare for a 2-week audit. We can typically begin within 2 weeks of agreement." },
    ],
  },
  {
    slug: "ai-implementation",
    title: "AI Implementation",
    heroTitle: "AI Implementation — Discover, Build, and Evolve With AI",
    heroSub:
      "A structured, three-phase engagement that takes your business from assessing where AI can drive value, to building the right solution, to refining it over time.",
    metaTitle: "AI Implementation",
    metaDescription:
      "Audax Ventures' AI Implementation engagement: Discover → Build → Evolve. A structured engagement that takes your business from AI assessment to a deployed, continuously improving solution.",
    description:
      "Most businesses know AI matters — but not where to start, what to build, or how to make it stick. Our AI Implementation engagement is a structured, three-phase program designed to cut through the noise. We begin with a comprehensive audit of your business, identify where AI and automation will create the most leverage, build the right solution with your team, and stay engaged to ensure it compounds in value over time.",
    phases: [
      {
        number: 1,
        name: "Discover",
        icon: "🔍",
        description:
          "We begin with a comprehensive AI audit of your business. By examining your current technology stack, internal systems, and day-to-day workflows, we identify where AI and automation will create the most leverage — and where they won't. Every recommendation that follows is grounded in what we learn here.",
        duration: "1–2 weeks",
        deliverables: [
          "Initial interview to understand major pain points",
          "Audit of existing software, data, and workflows",
          "Identification of high-impact opportunities",
          "Evaluation of build vs. buy vs. automate paths",
        ],
        outcome:
          "A prioritized set of recommendations outlining the best technologies to implement and a clear path forward.",
      },
      {
        number: 2,
        name: "Build",
        icon: "🏗️",
        description:
          "With direction set, we move into execution. Depending on the audit findings, this could mean developing a custom software solution such as a tailored CRM, layering automations into your existing systems, or implementing and configuring an off-the-shelf platform. We build with your team, not around them.",
        duration: "4–16 weeks",
        deliverables: [
          "Custom software development where it's warranted",
          "Workflow automation across existing tools",
          "Configuration and rollout of off-the-shelf platforms",
          "Team training and change management support",
        ],
        outcome:
          "A working solution deployed inside your business — adopted by your team and producing measurable results from day one.",
      },
      {
        number: 3,
        name: "Evolve",
        icon: "📈",
        description:
          "Technology that doesn't evolve quickly becomes a liability. We stay engaged beyond launch to monitor performance, refine what's working, and extend the platform as your business grows. The result is a system that compounds in value rather than degrading over time.",
        duration: "Ongoing",
        deliverables: [
          "Ongoing performance monitoring and tuning",
          "Iterative improvements based on user feedback",
          "New feature development as needs emerge",
          "Continued access to our development team",
        ],
        outcome:
          "A continuously improving platform supported by regular performance reviews and a defined roadmap of enhancements.",
      },
    ],
    whoItsFor: [
      "Business owners and operators who know AI matters but don't know where to start",
      "Operations and leadership teams looking to automate repetitive, high-volume processes",
      "Companies that have tried AI tools before but haven't seen meaningful results",
      "Organizations evaluating where AI creates real strategic value",
      "Teams that want a practical path to AI adoption — not a proof-of-concept",
      "Any business spending significant time on work that could be intelligently automated",
    ],
    differentiators: [
      "We start with a comprehensive audit of your business — not a technology pitch",
      "We build with your team, not around them",
      "Every path is bespoke: custom software, workflow automation, or off-the-shelf — whichever fits",
      "We stay engaged beyond launch so your solution compounds in value over time",
      "Fixed-scope phases — no runaway consulting bills",
      "You own all IP, code, and assets from day one",
    ],
    faq: [
      { q: "What happens in the Discover phase?", a: "We conduct an initial interview to understand your major pain points, then audit your existing software, data, and workflows. The output is a prioritized set of recommendations — including build vs. buy vs. automate paths — so you have a clear, grounded path forward before any money is spent on development." },
      { q: "What does the Build phase actually produce?", a: "It depends on what the Discover phase finds. This could be a custom software build, workflow automations layered into your existing tools, or the configuration and rollout of an off-the-shelf platform. In every case, the deliverable is a working solution deployed inside your business — not a prototype or a report." },
      { q: "Do we need a lot of data to use AI?", a: "Not always. Many high-value AI applications work well with modest amounts of existing content and workflow data. The Discover phase determines exactly what you have and what's needed before we commit to a build." },
      { q: "How is this different from just using ChatGPT?", a: "Generic AI tools are general-purpose. We build solutions that know your business: your products, your customers, your tone, and your workflows. The result behaves like a trained team member, not a generic assistant." },
      { q: "How much does the program cost?", a: "Each phase is scoped and priced individually before it starts — no surprises. Book a free intro call and we'll give you a clear picture of what to expect." },
      { q: "Will our staff lose jobs to AI?", a: "Our goal is to remove the drudgery from your team's workload — not their roles. The businesses we work with use AI to handle volume that was previously impossible, freeing their people for higher-value, relationship-driven work." },
      { q: "How long before we see results?", a: "Most clients see measurable results — reduced ticket response time, faster document processing, or time saved per week — within 4–6 weeks of the Implementation phase kicking off." },
      { q: "Do you work with specific industries?", a: "Yes. We have particular depth in healthcare, professional services, retail, logistics, and manufacturing — industries with high-volume, repeatable processes that are well-suited to AI augmentation." },
    ],
  },
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
      { q: "Can I move from the prototype to a full build with Audax?", a: "Absolutely. Many founders use this program as the first phase of a longer engagement. If the prototype validates your idea, we can transition directly into our Catalyst for Founders program to take it to launch." },
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
