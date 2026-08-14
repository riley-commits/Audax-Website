export interface CaseStudyResult {
  stat?: string;
  label: string;
}

export type CaseStudyService = "AI Leadership" | "Custom Software Development" | "Digital Operations";

export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  excerpt: string;
  services: CaseStudyService[];
  /** Optional secondary badge (e.g. "AI Automation") — not a filter, just a soft category tag. */
  tag?: string;
  metaTitle: string;
  metaDescription: string;
  challenge: string[];
  approachIntro?: string[];
  approach: string[];
  results: CaseStudyResult[];
  keyTakeaway: string;
}

// Clients are kept anonymous by design — no names, logos, or identifying
// URLs. Every entry below reflects a real engagement and real results.
export const caseStudiesData: CaseStudy[] = [
  {
    slug: "ai-marketplace-launch",
    industry: "Technology Startup",
    title: "Helping a Founder Launch an AI Marketplace From Idea to Seven-Figure Valuation",
    excerpt:
      "A founding team came to Audax with an early-stage AI marketplace concept and left with a launched MVP, real revenue, and a seven-figure valuation.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    metaTitle: "AI Marketplace Case Study — Idea to Seven-Figure Valuation | Audax Ventures",
    metaDescription:
      "How Audax helped a founding team turn an early-stage AI marketplace concept into a launched product with real revenue and a seven-figure valuation.",
    challenge: [
      "A founding team approached Audax with an early-stage concept for an AI-powered marketplace but needed support validating the opportunity, refining the business model, and transforming the idea into a commercially viable product.",
      "They required both strategic leadership and a technical partner capable of designing, building, and launching the platform.",
    ],
    approachIntro: ["Audax worked alongside the founders from the earliest stages of the company by:"],
    approach: [
      "Validating the market opportunity and refining the business concept",
      "Defining the product roadmap and feature prioritization",
      "Designing and developing the complete MVP",
      "Supporting product launch and early customer acquisition",
      "Continuing as the long-term technology partner as the platform evolved",
    ],
    results: [
      { stat: "$50,000+", label: "Revenue generated within the first two months after launch" },
      { stat: "$1M+", label: "Business valuation achieved within the first 18 months" },
      { stat: "MVP", label: "Successfully launched into market" },
      { stat: "Ongoing Partnership", label: "Continued product development and strategic advisory" },
    ],
    keyTakeaway:
      "Technology alone doesn't create successful startups. Combining strategic guidance with disciplined product development helped transform an early-stage concept into a growing technology company with demonstrated market traction.",
  },
  {
    slug: "ai-platform-for-education",
    industry: "Education Technology",
    title: "Building an AI Platform Designed to Modernize Education",
    excerpt:
      "An education-focused organization needed a clear technology roadmap and a fully built AI platform to improve learning experiences for students and educators alike.",
    services: ["AI Leadership", "Custom Software Development"],
    metaTitle: "EdTech AI Platform Case Study — Modernizing Education | Audax Ventures",
    metaDescription:
      "How Audax helped an education-focused organization design, build, and launch a custom AI platform built to modernize learning experiences.",
    challenge: [
      "An education-focused organization wanted to develop an innovative AI platform that would improve learning experiences while providing educators with better tools and insights.",
      "The project required strategic planning, AI integration, product design, and full software development.",
    ],
    approach: [
      "Developed the long-term technology roadmap",
      "Identified practical AI capabilities",
      "Designed the user experience",
      "Built the complete custom platform",
      "Supported early go-to-market planning",
    ],
    results: [
      { label: "Complete custom software platform developed" },
      { label: "AI functionality integrated from launch" },
      { label: "Go-to-market strategy established" },
      { label: "Long-term technology roadmap created" },
    ],
    keyTakeaway:
      "Building AI into a product is most effective when it begins with a clear roadmap rather than being added later.",
  },
  {
    slug: "ai-consumer-app-launch",
    industry: "Consumer Technology",
    title: "Launching an AI Consumer App From Concept to Market",
    excerpt:
      "An entrepreneur identified an AI-driven consumer opportunity but needed a partner to validate, design, build, and launch it — from strategy through App Store.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    metaTitle: "AI Consumer App Case Study — Concept to Market | Audax Ventures",
    metaDescription:
      "How Audax took an AI-powered consumer app idea from market validation through design, development, and a successful public launch.",
    challenge: [
      "An established entrepreneur identified an opportunity to solve a common consumer problem using AI but needed support validating the opportunity, designing the product, building the technology, and launching it successfully.",
    ],
    approach: [
      "Conducted market validation",
      "Developed business strategy",
      "Designed the customer experience",
      "Built the AI-powered mobile application",
      "Supported launch and growth strategy",
    ],
    results: [
      { stat: "2,000+", label: "Downloads within the first month" },
      { label: "Complete AI-powered application launched" },
      { label: "Validated market demand" },
      { label: "Go-to-market strategy executed" },
    ],
    keyTakeaway:
      "Launching successful consumer products requires much more than software development. Strategy, validation, and execution all contribute to early adoption.",
  },
  {
    slug: "custom-platform-replaces-legacy-saas",
    industry: "Transportation & Aviation",
    title: "Replacing Legacy SaaS With a Custom Business Platform",
    excerpt:
      "A large transportation organization was held back by fragmented, outdated SaaS tools. Audax replaced them with one integrated, automated platform.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    metaTitle: "Custom Platform Case Study — Replacing Legacy SaaS | Audax Ventures",
    metaDescription:
      "How Audax replaced a transportation organization's fragmented, outdated SaaS tools with one integrated, automated custom software platform.",
    challenge: [
      "A large transportation organization relied on multiple outdated SaaS platforms that created duplicate work, manual processes, and administrative inefficiencies.",
    ],
    approach: [
      "Mapped operational workflows",
      "Identified automation opportunities",
      "Designed a custom software solution",
      "Replaced fragmented systems with one integrated platform",
      "Automated repetitive processes",
    ],
    results: [
      { stat: "10+", label: "Administrative hours saved every week" },
      { label: "Multiple SaaS platforms consolidated" },
      { label: "Automated operational workflows" },
      { label: "Improved day-to-day efficiency" },
    ],
    keyTakeaway:
      "Custom software can often reduce operating costs while giving organizations complete control over how they work.",
  },
  {
    slug: "crm-optimization-professional-services",
    industry: "Professional Services",
    title: "Modernizing Business Operations Through CRM Optimization",
    excerpt:
      "A growing service business was outgrowing its CRM and racking up SaaS costs. Audax fixed what was broken and mapped the path to a future custom platform.",
    services: ["AI Leadership", "Digital Operations"],
    metaTitle: "CRM Optimization Case Study — Professional Services | Audax Ventures",
    metaDescription:
      "How Audax resolved CRM bottlenecks for a growing service business and built a roadmap toward AI opportunities and a future custom platform.",
    challenge: [
      "A growing service business was experiencing workflow bottlenecks, software limitations, and increasing subscription costs across several SaaS platforms.",
    ],
    approach: [
      "Audited existing CRM",
      "Resolved software issues",
      "Improved workflows",
      "Identified AI opportunities",
      "Designed a roadmap for a future custom platform",
    ],
    results: [
      { label: "Improved internal efficiency" },
      { label: "Reduced software friction" },
      { label: "Technology roadmap established" },
      { label: "Future SaaS replacement strategy created" },
    ],
    keyTakeaway:
      "Sometimes the highest-value project isn't replacing software immediately. It's understanding how to evolve toward the right solution.",
  },
  {
    slug: "healthtech-founder-scaling",
    industry: "Health Technology",
    title: "Helping a HealthTech Founder Scale a High-Growth Business",
    excerpt:
      "A non-technical founder scaling a fast-growing HealthTech company needed executive support across technology, operations, marketing, and product — before building a full leadership team.",
    services: ["AI Leadership", "Digital Operations"],
    metaTitle: "HealthTech Case Study — Scaling a High-Growth Business | Audax Ventures",
    metaDescription:
      "How Audax provided executive technology and operations leadership to help a non-technical HealthTech founder scale a fast-growing business.",
    challenge: [
      "A non-technical founder was scaling a rapidly growing HealthTech company and required executive support across technology, operations, marketing, and product strategy.",
    ],
    approach: [
      "Technology leadership",
      "Operational planning",
      "Product roadmap",
      "Marketing strategy",
      "Executive advisory",
      "Growth planning",
    ],
    results: [
      { stat: "$3M+", label: "Business valuation" },
      { label: "Improved operational processes" },
      { label: "Clear product roadmap" },
      { label: "Ongoing executive advisory" },
    ],
    keyTakeaway:
      "High-growth founders often benefit from having an experienced technology and operations partner before building a full executive team.",
  },
  {
    slug: "custom-operating-system-professional-services",
    industry: "Professional Services",
    title: "Replacing Three SaaS Platforms With One Custom Operating System",
    excerpt:
      "A service-based business ran on disconnected software for customers, projects, and operations. Audax replaced three subscriptions with one custom business operating system.",
    services: ["Custom Software Development", "Digital Operations"],
    metaTitle: "Custom Operating System Case Study — Professional Services | Audax Ventures",
    metaDescription:
      "How Audax replaced three disconnected SaaS platforms with one custom business operating system, cutting costs and boosting efficiency by 50%.",
    challenge: [
      "A service-based business relied on multiple disconnected software platforms to manage customers, projects, and internal operations, resulting in duplicate work and inconsistent information.",
    ],
    approach: [
      "Mapped workflows",
      "Designed a custom CRM",
      "Built a business operating system",
      "Automated administrative tasks",
      "Centralized customer and operational data",
    ],
    results: [
      { stat: "50%", label: "Increase in operational efficiency" },
      { stat: "3", label: "SaaS subscriptions replaced" },
      { label: "Automated workflows" },
      { label: "Improved visibility across the business" },
    ],
    keyTakeaway:
      "Purpose-built software can simplify operations while reducing ongoing software costs and improving team productivity.",
  },
  {
    slug: "ai-digital-transformation-manufacturing",
    industry: "Manufacturing & Industrial",
    title: "Modernizing Operations Through AI Strategy and Digital Transformation",
    excerpt:
      "A growing manufacturer had the appetite for AI and automation but no roadmap or internal technical leadership. Audax led the strategy and built the software to match.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    metaTitle: "Manufacturing Case Study — AI Strategy & Digital Transformation | Audax Ventures",
    metaDescription:
      "How Audax led AI strategy and digital transformation for a manufacturing company, automating 15+ workflows and cutting manual work by 35%.",
    challenge: [
      "A growing manufacturing company was struggling with disconnected operational systems, manual reporting, and inconsistent processes across departments. Leadership recognized the opportunity to leverage AI and automation to improve efficiency but lacked a clear roadmap and internal technical leadership to move the initiative forward.",
      "The organization wanted a strategic technology partner that could guide long-term digital transformation while also designing and implementing custom solutions tailored to their operations.",
    ],
    approachIntro: [
      "Audax partnered with the executive team to lead both the strategic planning and technical execution of the initiative by:",
    ],
    approach: [
      "Conducting a comprehensive AI and technology opportunity assessment",
      "Developing a multi-year digital transformation roadmap",
      "Identifying high-impact automation opportunities across operations",
      "Designing and building custom internal software to replace manual workflows",
      "Providing ongoing strategic technology leadership through a long-term partnership",
    ],
    results: [
      { stat: "35%", label: "Reduction in time spent on manual administrative processes" },
      { stat: "15+", label: "Operational workflows automated" },
      { stat: "1", label: "Centralized platform replacing multiple spreadsheets and disconnected systems" },
      { stat: "Ongoing Partnership", label: "Continued technology planning, feature development, and AI implementation" },
    ],
    keyTakeaway:
      "Successful digital transformation isn't about implementing AI everywhere. It's about identifying where technology creates the greatest business value, then building the right solutions to support long-term operational growth. By combining executive AI leadership with custom software development and ongoing technology partnership, Audax helped the organization establish a scalable digital foundation for the future.",
  },
  {
    slug: "ai-client-assistant-professional-services",
    industry: "Professional Services",
    title: "Deploying an AI Client Assistant to Improve Customer Experience and Reduce Administrative Work",
    excerpt:
      "Repetitive client questions and scheduling requests were creating administrative bottlenecks. Audax built a custom AI agent that handles them around the clock.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    tag: "AI Automation",
    metaTitle: "AI Client Assistant Case Study — Professional Services | Audax Ventures",
    metaDescription:
      "How Audax designed a custom AI client assistant that cut routine customer inquiries by 80%+ and delivered 24/7 support without adding headcount.",
    challenge: [
      "A growing professional services organization was spending a significant amount of time responding to repetitive client questions, scheduling appointments, explaining services, and directing inquiries to the appropriate team members. As the business grew, the volume of inquiries increased, creating administrative bottlenecks and reducing the team's ability to focus on higher-value client work.",
      "Leadership wanted to improve responsiveness without increasing headcount while ensuring clients received accurate, consistent information at any time of day.",
    ],
    approachIntro: [
      "Audax worked closely with leadership to identify the most common customer interactions and designed a custom AI-powered client assistant tailored specifically to the organization's business.",
      "Our engagement included:",
    ],
    approach: [
      "Conducting an AI opportunity assessment across customer-facing workflows",
      "Designing a secure, business-specific AI chatbot trained on company knowledge and services",
      "Integrating the chatbot with the organization's website and client inquiry process",
      "Automating appointment requests, frequently asked questions, lead qualification, and internal routing",
      "Providing ongoing optimization based on real customer interactions and usage data",
    ],
    results: [
      { stat: "80%+", label: "Reduction in routine customer inquiries requiring staff involvement" },
      { stat: "24/7", label: "AI-powered client support available around the clock" },
      { stat: "Higher Quality Leads", label: "Automated lead qualification before reaching the sales team" },
      { stat: "Improved Customer Experience", label: "Faster response times and more consistent client communication" },
    ],
    keyTakeaway:
      "AI is most valuable when it enhances the customer experience while allowing your team to focus on meaningful conversations instead of repetitive administrative tasks. By combining strategic AI leadership with custom development and continuous optimization, Audax helped the organization deliver better service while improving operational efficiency.",
  },
  {
    slug: "internal-ai-knowledge-assistant",
    industry: "Engineering & Consulting",
    title: "Transforming Internal Knowledge Into an AI Assistant for Employees",
    excerpt:
      "Years of internal documentation left employees searching, asking, and recreating work that already existed. Audax built a secure AI agent trained on company knowledge.",
    services: ["AI Leadership", "Custom Software Development", "Digital Operations"],
    tag: "AI Automation",
    metaTitle: "Internal AI Knowledge Assistant Case Study | Audax Ventures",
    metaDescription:
      "How Audax built a secure internal AI assistant that cut time spent searching for information by 60% and sped up new employee onboarding.",
    challenge: [
      "A growing consulting organization had accumulated years of internal documentation, policies, technical resources, project files, and standard operating procedures. Employees spent considerable time searching for information, asking colleagues repetitive questions, and recreating work that already existed.",
      "Leadership wanted to improve knowledge sharing, reduce onboarding time, and make internal expertise instantly accessible across the organization.",
    ],
    approachIntro: [
      "Audax partnered with the leadership team to develop a secure internal AI assistant that acted as a centralized knowledge resource for employees.",
      "The project included:",
    ],
    approach: [
      "Assessing existing documentation and knowledge management processes",
      "Developing an AI strategy focused on improving operational efficiency",
      "Building a secure internal chatbot trained exclusively on company documentation and resources",
      "Integrating the assistant with internal systems to streamline information retrieval",
      "Establishing an ongoing roadmap to expand AI capabilities as the organization evolved",
    ],
    results: [
      { stat: "60%", label: "Reduction in time spent searching for internal information" },
      { stat: "Faster Employee Onboarding", label: "New team members gained access to company knowledge from day one" },
      { stat: "Improved Knowledge Sharing", label: "Consistent answers across policies, procedures, and technical documentation" },
      { stat: "Long-Term AI Roadmap", label: "Expanded AI initiatives identified across multiple business functions" },
    ],
    keyTakeaway:
      "For many organizations, one of the highest-value AI opportunities isn't customer-facing at all. By making institutional knowledge instantly accessible through a secure AI assistant, Audax helped the organization improve productivity, strengthen collaboration, and build a scalable foundation for future AI initiatives.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudiesData.map((c) => c.slug);
}
