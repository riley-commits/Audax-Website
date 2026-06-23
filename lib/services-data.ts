export interface ServiceFAQ {
  q: string;
  a: string;
}

/**
 * Tiered package for retainer/advisory services (e.g. Fractional CAIO).
 * Each package has a price, an audience, and a sequence of monthly phases.
 */
export interface ServicePackage {
  name: string;
  price: string;          // e.g. "$3,000"
  priceUnit: string;      // e.g. "/month"
  tagline: string;
  bestFor: string;
  features?: string[];    // simple feature list (used instead of monthlyPhases when present)
  monthlyPhases: {
    month: number;
    title: string;
    activities: string[];
    deliverables: string[];
  }[];
}

export interface ServiceData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSub: string;
  heroSubtext?: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  whatsIncluded: { icon: string; label: string; description: string }[];
  whoItsFor: string[];
  // Optional — tiered/retainer services describe their engagement via
  // `packages` instead of a single process arc.
  process?: { step: number; title: string; description: string; duration: string }[];
  techStack?: string[];
  packages?: ServicePackage[];
  faq: ServiceFAQ[];
  relatedServices: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "mvp-development",
    title: "MVP Development",
    heroTitle: "MVP Development Services — Launch Faster, Learn Sooner",
    heroSub:
      "We build lean, validated minimum viable products that give your startup the traction you need to raise capital, acquire customers, and grow with confidence.",
    metaTitle: "MVP Development Company Canada",
    metaDescription:
      "Expert MVP development services in Canada. We build lean, validated products for founders and enterprises. Most MVPs launch in 8–16 weeks. Book a free call.",
    description:
      "A minimum viable product (MVP) is the fastest path from idea to real-world validation. At Audax Ventures, we help founders and innovation teams build production-ready MVPs that are scoped correctly, designed beautifully, and built to scale — without burning months on features users won't use.",
    whatsIncluded: [
      { icon: "🗺️", label: "Product Scope & Roadmap", description: "We define the exact feature set needed for validation — nothing more, nothing less." },
      { icon: "🎨", label: "UI/UX Design", description: "Wireframes and high-fidelity prototypes your users will love." },
      { icon: "⚙️", label: "Full-Stack Development", description: "Frontend, backend, and database built with modern, scalable technologies." },
      { icon: "🔐", label: "Authentication & Auth", description: "Secure user auth with role-based access control built in from day one." },
      { icon: "☁️", label: "Cloud Deployment", description: "Deployed to scalable cloud infrastructure with CI/CD pipelines and environment configuration." },
      { icon: "📊", label: "Analytics Integration", description: "Analytics platforms to track user behaviour from launch." },
      { icon: "🧪", label: "QA & Testing", description: "Manual and automated testing before every release." },
      { icon: "🚀", label: "Launch Support", description: "We stay with you through the first two weeks post-launch to handle any issues." },
    ],
    whoItsFor: [
      "Pre-seed and seed-stage startup founders",
      "Solopreneurs with a validated idea",
      "Enterprise innovation teams testing a new market",
      "Non-technical founders who need a technical partner",
      "Existing businesses launching a new digital product line",
    ],
    process: [
      { step: 1, title: "Discovery & Scoping", description: "We work with you to define your users, their core jobs-to-be-done, and the minimal feature set for your MVP.", duration: "1–2 weeks" },
      { step: 2, title: "UI/UX Design", description: "Wireframes, user flows, and an interactive prototype you can test with real users before we write a line of code.", duration: "1–2 weeks" },
      { step: 3, title: "Iterative Development", description: "Iterative development cycles with regular working demos. You see progress at a predictable cadence.", duration: "4–10 weeks" },
      { step: 4, title: "QA & Bug Fixes", description: "Rigorous testing across devices, browsers, and user flows before we call it done.", duration: "1–2 weeks" },
      { step: 5, title: "Launch & Handoff", description: "We deploy your MVP, set up monitoring, and hand off full documentation and source code.", duration: "1 week" },
    ],
    techStack: ["Modern frontend frameworks", "Type-safe backend", "Relational databases", "Authentication systems", "Payment processing", "Cloud infrastructure", "CI/CD pipelines", "Design tools"],
    faq: [
      { q: "What does an MVP cost?", a: "Most MVPs we build range from $25,000 to $80,000 CAD depending on scope, complexity, and whether design assets are already available. We provide a detailed estimate after our discovery call." },
      { q: "How long does it take to build an MVP?", a: "Typically 8–16 weeks from kickoff to launch. Simpler MVPs (landing page + core feature loop) can be done in 6 weeks; more complex platforms with multiple user roles take 14–20 weeks." },
      { q: "Do you sign NDAs?", a: "Absolutely. We sign an NDA before any substantive discussions about your product." },
      { q: "Who owns the code?", a: "You do. We transfer full IP and source code ownership to you upon final payment. No lock-in, ever." },
      { q: "Can you work with an existing design?", a: "Yes. If you already have design files or a brand guide, we'll build directly from them, which can also reduce cost and timeline." },
      { q: "Will the MVP be able to scale?", a: "We build MVPs on the same architectures we use for production-grade SaaS products. You won't need a rewrite to scale — just iterative improvements." },
      { q: "Do you offer post-launch support?", a: "Yes. We offer retainer-based support packages starting at 20 hours/month. Many clients move directly into a SaaS Development engagement after MVP launch." },
    ],
    relatedServices: ["saas-development", "internal-tools", "custom-software-development"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    heroTitle: "SaaS Development Services — Build Products That Scale to Thousands of Users",
    heroSub:
      "From architecture to deployment, we build multi-tenant SaaS platforms with the billing, auth, and infrastructure to grow from 10 to 10,000 customers.",
    metaTitle: "SaaS Development Company | Custom SaaS Product Development",
    metaDescription:
      "Custom SaaS product development by Audax Ventures. Multi-tenancy, subscription billing, role-based auth, CI/CD, and scalable cloud infrastructure. Book a free call.",
    description:
      "Building a SaaS product is fundamentally different from building an app. It requires multi-tenant architecture, subscription billing, customer data isolation, usage analytics, and a support infrastructure — all from day one. Audax Ventures has built these systems dozens of times and brings that experience directly to your project.",
    whatsIncluded: [
      { icon: "🏗️", label: "Multi-Tenant Architecture", description: "Data isolation and workspace management built for multiple customers on a shared infrastructure." },
      { icon: "💳", label: "Subscription Billing", description: "Subscription billing with plans, trials, seats, usage-based billing, and customer portal." },
      { icon: "👤", label: "Auth & Permissions", description: "SSO, OAuth, role-based access control, and team management built in from the start." },
      { icon: "📈", label: "Analytics & Reporting", description: "In-app analytics dashboards and event tracking so your customers get value and you get insight." },
      { icon: "🔌", label: "API & Integrations", description: "RESTful or GraphQL APIs, webhooks, and third-party integrations with the tools your team uses." },
      { icon: "📧", label: "Email & Notifications", description: "Transactional email (SendGrid/Resend), in-app notifications, and drip sequences." },
      { icon: "🛡️", label: "Security & Compliance", description: "OWASP-compliant code, data encryption, audit logs, and SOC 2-ready infrastructure." },
      { icon: "☁️", label: "Scalable Infrastructure", description: "Auto-scaling cloud infrastructure with zero-downtime deployments and 99.9% uptime SLA." },
    ],
    whoItsFor: [
      "Founders building B2B or B2C SaaS products",
      "Bootstrapped companies outgrowing their current tech stack",
      "Enterprise teams spinning out a product from an internal tool",
      "Agencies looking to productize their service offering",
    ],
    process: [
      { step: 1, title: "Architecture Design", description: "We design your data model, tenancy strategy, and system architecture before writing any code.", duration: "1–2 weeks" },
      { step: 2, title: "UI/UX Design", description: "Design system, onboarding flow, core feature interfaces, and admin panel.", duration: "2–3 weeks" },
      { step: 3, title: "Core Platform Development", description: "Auth, billing, multi-tenancy, and core product features built in focused iterations.", duration: "8–16 weeks" },
      { step: 4, title: "Integrations & APIs", description: "Third-party integrations, public API, and webhook system.", duration: "2–4 weeks" },
      { step: 5, title: "DevOps & Launch", description: "CI/CD pipeline, staging environment, monitoring, and production launch.", duration: "1–2 weeks" },
    ],
    techStack: ["Modern web frameworks", "Type-safe backend", "Relational databases", "Caching layers", "Subscription billing", "Cloud infrastructure", "Containerization", "Infrastructure as code"],
    faq: [
      { q: "What's the difference between an MVP and a SaaS product build?", a: "An MVP focuses on the minimum to validate your core hypothesis. A SaaS build includes all the infrastructure needed for a commercial product: multi-tenancy, billing, admin tooling, security, and scalability." },
      { q: "How much does a SaaS product cost to build?", a: "SaaS platforms vary significantly in complexity and scope. Reach out for a free discovery call and we'll give you a detailed estimate based on your specific requirements." },
      { q: "Can you integrate with our existing tools?", a: "Yes. We have experience integrating with hundreds of third-party tools via REST APIs, webhooks, and SDKs." },
      { q: "Do you handle GDPR and data privacy?", a: "Yes. We build GDPR-compliant data handling, consent management, and data deletion flows as part of our standard SaaS builds." },
      { q: "Can you take over an existing SaaS codebase?", a: "Yes. We do a technical audit first, then transition into the project. We're experienced in inheriting messy codebases." },
    ],
    relatedServices: ["mvp-development", "backend-development", "fractional-caio"],
  },
  {
    slug: "internal-tools",
    title: "Internal Tool Development",
    heroTitle: "Internal Tool Development — Automate the Work That's Slowing Your Team Down",
    heroSub:
      "We build custom internal tools, dashboards, and workflow automations that replace spreadsheets, manual processes, and off-the-shelf software that doesn't quite fit.",
    metaTitle: "Internal Tool Development | Custom Internal Software",
    metaDescription:
      "Custom internal tools, dashboards, and business process automation. Replace spreadsheets and manual workflows with software built exactly for your team.",
    description:
      "Every growing company reaches a point where spreadsheets, documentation pages, and off-the-shelf SaaS tools stop being enough. We build custom internal tools that automate repetitive work, centralize data, and give your team exactly the interface they need to operate efficiently.",
    whatsIncluded: [
      { icon: "🖥️", label: "Custom Dashboards", description: "Real-time data dashboards built around your KPIs and operational workflows." },
      { icon: "⚙️", label: "Workflow Automation", description: "Automate repetitive tasks: approvals, notifications, data entry, and report generation." },
      { icon: "🔗", label: "System Integrations", description: "Connect your CRM, ERP, accounting software, and data sources into one unified tool." },
      { icon: "👥", label: "Role-Based Access", description: "Different views and permissions for ops, finance, support, and management." },
      { icon: "📋", label: "Forms & Data Entry", description: "Clean, validated forms that replace error-prone spreadsheet inputs." },
      { icon: "📊", label: "Reporting & Exports", description: "Automated reports, PDF exports, and scheduled email digests." },
    ],
    whoItsFor: [
      "Operations teams buried in manual processes",
      "Finance and HR teams managing data in spreadsheets",
      "Customer success teams tracking accounts across multiple tools",
      "Logistics companies managing complex workflows",
      "Healthcare and legal firms with compliance-heavy workflows",
    ],
    process: [
      { step: 1, title: "Process Audit", description: "We map your current workflows, identify bottlenecks, and define the minimal toolset needed.", duration: "1 week" },
      { step: 2, title: "Design & Prototyping", description: "Wireframes and interactive prototypes reviewed with your team before development.", duration: "1–2 weeks" },
      { step: 3, title: "Development", description: "Iterative development with your team testing each workflow as it's built.", duration: "4–10 weeks" },
      { step: 4, title: "Integration & Data Migration", description: "Connect to existing systems and migrate historical data.", duration: "1–2 weeks" },
      { step: 5, title: "Training & Rollout", description: "Team training, documentation, and phased rollout to ensure adoption.", duration: "1 week" },
    ],
    techStack: ["Modern frontend stacks", "Type-safe backend", "Relational databases", "Low-code builders", "REST API integrations", "Workflow automation platforms", "Cloud infrastructure"],
    faq: [
      { q: "Is a custom internal tool worth it vs. buying off-the-shelf software?", a: "Off-the-shelf tools work well for generic workflows. But if your process is unique, you're paying for features you don't need and missing ones you do. Custom tools typically pay for themselves within 12 months through time savings alone." },
      { q: "How long does an internal tool take to build?", a: "Most internal tools take 6–14 weeks depending on complexity and the number of integrations required." },
      { q: "Can you connect to our existing databases and APIs?", a: "Yes. We've connected to everything from legacy SQL databases to modern REST APIs. If it has an API or we can query it, we can build around it." },
      { q: "Will my team need to learn new technology?", a: "No. We build internal tools with your team's technical comfort level in mind. They should be simpler to use than what they're replacing." },
      { q: "What if our needs change?", a: "All our internal tools are built for maintainability. We document everything and can provide ongoing support as your needs evolve." },
    ],
    relatedServices: ["process-automation", "custom-software-development", "crm-systems"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    heroTitle: "Website Development — Fast, Beautiful, Built to Convert",
    heroSub:
      "We design and develop marketing websites, landing pages, and corporate sites that load in milliseconds, rank on Google, and turn visitors into customers.",
    metaTitle: "Website Development Agency Canada | High-Performance Web Design",
    metaDescription:
      "Professional website development services in Canada. SEO-optimized, mobile-first, and conversion-focused websites built on modern frameworks. Get a free quote.",
    description:
      "Your website is your most important salesperson. We build websites that load in under 2 seconds, score 95+ on Google PageSpeed, and are designed from the ground up to convert visitors into leads and customers.",
    whatsIncluded: [
      { icon: "🎨", label: "Custom Design", description: "Custom-designed interfaces tailored to your brand — no templates." },
      { icon: "⚡", label: "Performance Optimization", description: "Sub-2-second load times, optimized images, and Core Web Vitals scores in the green." },
      { icon: "📱", label: "Mobile-First Responsive", description: "Flawless experience across all devices and screen sizes." },
      { icon: "🔍", label: "On-Page SEO", description: "Semantic HTML, structured data, meta tags, and sitemap configuration from day one." },
      { icon: "📝", label: "CMS Integration", description: "Edit your own content with a user-friendly CMS (Contentful, Sanity, or built-in)." },
      { icon: "🔒", label: "SSL & Security", description: "HTTPS, security headers, and OWASP-compliant code." },
    ],
    whoItsFor: [
      "Startups launching their first professional web presence",
      "SMEs replacing an outdated or slow website",
      "B2B companies who need a site that generates leads",
      "Enterprise teams launching a new product or campaign site",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Define goals, audience, content structure, and competitive landscape.", duration: "3–5 days" },
      { step: 2, title: "Design", description: "Custom design mockups reviewed and approved before development.", duration: "1–2 weeks" },
      { step: 3, title: "Development", description: "Built on a modern framework optimized for performance and SEO. Clean, maintainable code.", duration: "2–4 weeks" },
      { step: 4, title: "CMS Setup & Content", description: "CMS configured, content migrated, and your team trained to edit.", duration: "3–5 days" },
      { step: 5, title: "Launch & SEO", description: "Sitemap submission, Search Console setup, and performance verification.", duration: "2–3 days" },
    ],
    techStack: ["Modern web frameworks", "Type-safe code", "Utility-first styling", "Production animation libraries", "Headless CMS", "Cloud hosting", "Analytics & search consoles"],
    faq: [
      { q: "How long does a website take to build?", a: "A standard marketing website takes 4–8 weeks. Landing pages can be done in 1–2 weeks. Complex multi-page sites with custom animations take 8–12 weeks." },
      { q: "Can I edit the website myself after launch?", a: "Yes. We integrate a user-friendly CMS so your team can update content, blog posts, and images without touching code." },
      { q: "Do you handle domain and hosting setup?", a: "Yes. We set up DNS, scalable cloud hosting, and SSL certificates as part of every website project." },
      { q: "Can you redesign our existing website?", a: "Absolutely. We start with an audit of your current site, then redesign with improvements to speed, design, and conversion." },
      { q: "Will my site rank on Google?", a: "We implement on-page SEO best practices on every page. Rankings depend on your content strategy and backlinks over time, but we ensure the technical foundation is perfect." },
    ],
    relatedServices: ["frontend-development", "custom-software-development", "digital-marketing"],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    heroTitle: "E-Commerce Development — Sell More With a Store Built to Perform",
    heroSub:
      "Custom e-commerce platforms and hosted-commerce builds that convert browsers into buyers with fast load times, great UX, and seamless checkout experiences.",
    metaTitle: "E-Commerce Development Company Canada | Hosted & Headless Commerce",
    metaDescription:
      "Expert e-commerce development in Canada. Hosted commerce, headless commerce, and bespoke online stores built for performance and conversion. Get a free quote.",
    description:
      "Whether you need a custom headless commerce platform or a highly optimized hosted-commerce store, we build e-commerce experiences that look great, load fast, and convert. From product catalogue to checkout to post-purchase — every step of the funnel is designed with revenue in mind.",
    whatsIncluded: [
      { icon: "🛍️", label: "Product Catalogue & Search", description: "Fast, filterable product listings with advanced search and faceted navigation." },
      { icon: "💳", label: "Checkout & Payments", description: "Optimized checkout with leading payment processors and buy-now-pay-later options." },
      { icon: "📦", label: "Inventory Management", description: "Real-time stock tracking, variant management, and warehouse integrations." },
      { icon: "🚚", label: "Shipping & Fulfillment", description: "Calculated shipping rates, label generation, and fulfillment partner integrations." },
      { icon: "📧", label: "Email Marketing Integration", description: "Leading email marketing platforms wired up for abandoned cart, post-purchase, and win-back flows." },
      { icon: "📊", label: "Analytics & Conversion Tracking", description: "Web analytics, ad-platform pixels, conversion tracking, and revenue dashboards." },
    ],
    whoItsFor: [
      "DTC brands launching their first online store",
      "Retail businesses going digital",
      "Hosted-commerce merchants needing a custom theme or functionality",
      "B2B companies building a wholesale ordering portal",
    ],
    process: [
      { step: 1, title: "Discovery & Platform Selection", description: "We help you choose between hosted commerce, headless commerce, or a fully custom build based on your needs and budget.", duration: "3–5 days" },
      { step: 2, title: "Design", description: "Custom UI/UX designed for your brand and optimized for mobile conversion.", duration: "1–2 weeks" },
      { step: 3, title: "Development", description: "Frontend, backend, and integrations built and tested rigorously.", duration: "4–10 weeks" },
      { step: 4, title: "Product Upload & Testing", description: "Products migrated, payment flows tested, and checkout verified across devices.", duration: "3–5 days" },
      { step: 5, title: "Launch & Monitoring", description: "Soft launch, conversion tracking verified, and performance monitoring configured.", duration: "1 week" },
    ],
    techStack: ["Hosted commerce platforms", "Headless commerce frameworks", "Payment processing", "Email marketing platforms", "Search & discovery", "Cloud infrastructure"],
    faq: [
      { q: "Should I use a hosted-commerce platform or a custom build?", a: "Hosted commerce is excellent for most DTC and SME retailers. A custom build makes sense when you have complex B2B workflows, unique checkout requirements, or need deep integration with existing systems." },
      { q: "Can you migrate my existing store?", a: "Yes. We migrate products, customer data, and order history from any major e-commerce platform." },
      { q: "How do you handle mobile optimization?", a: "We design and build mobile-first. Every checkout flow is tested extensively on iOS and Android to minimize drop-off at the most critical point in the funnel." },
      { q: "Can you integrate with our ERP or WMS?", a: "Yes. We've built integrations with major ERPs and warehouse management systems." },
      { q: "What ongoing support do you offer?", a: "We offer monthly retainer packages for ongoing development, feature additions, and platform updates." },
    ],
    relatedServices: ["website-development", "custom-software-development", "process-automation"],
  },
  {
    slug: "ios-development",
    title: "iOS App Development",
    heroTitle: "iOS App Development — Native Performance, Beautiful Design",
    heroSub:
      "We build native and cross-platform iOS applications that feel fast, look premium, and get featured on the App Store.",
    metaTitle: "iOS App Development Canada | iPhone & iPad App Developers",
    metaDescription:
      "Professional iOS app development in Canada. Native and cross-platform iOS apps for iPhone and iPad. From concept to App Store submission. Get a free quote.",
    description:
      "We build iOS apps that users love — responsive, performant, and designed to Apple's Human Interface Guidelines. Whether you need a native iOS app or a cross-platform build, we deliver an App Store-ready product with full backend integration.",
    whatsIncluded: [
      { icon: "📱", label: "Native iOS Development", description: "Native iOS frameworks for maximum performance and platform-native feel." },
      { icon: "⚛️", label: "Cross-Platform Option", description: "Cross-platform builds that share code with Android, reducing cost and time." },
      { icon: "🔐", label: "Auth & User Management", description: "Sign in with Apple, biometric auth, and secure token management." },
      { icon: "🔔", label: "Push Notifications", description: "APNs-based push notifications with rich media and deep linking." },
      { icon: "💳", label: "In-App Purchases", description: "StoreKit 2 integration for subscriptions, one-time purchases, and free trials." },
      { icon: "🗺️", label: "Maps & Location", description: "MapKit, CoreLocation, and geofencing integrations." },
      { icon: "📡", label: "Offline Support", description: "Local persistence with CoreData or SQLite for offline-first experiences." },
      { icon: "🚀", label: "App Store Submission", description: "We handle the beta distribution, screenshots, metadata, and App Store review process." },
    ],
    whoItsFor: [
      "Startups building a consumer-facing iOS product",
      "B2B companies needing a mobile companion to their web platform",
      "Enterprise teams building field operations apps",
      "Founders who need a mobile app to accompany an MVP",
    ],
    process: [
      { step: 1, title: "Product Definition", description: "We define the app's core flows, screens, and feature scope with you.", duration: "1 week" },
      { step: 2, title: "UI/UX Design", description: "Native iOS designs following Apple's Human Interface Guidelines with your brand identity.", duration: "2–3 weeks" },
      { step: 3, title: "Development", description: "Iterative development with regular beta builds for your team's review.", duration: "6–16 weeks" },
      { step: 4, title: "QA & Testing", description: "Device matrix testing, performance profiling, and memory leak detection.", duration: "1–2 weeks" },
      { step: 5, title: "App Store Launch", description: "Submission, review management, and launch day monitoring.", duration: "1–2 weeks" },
    ],
    techStack: ["Native iOS frameworks", "Cross-platform mobile frameworks", "Backend-as-a-service", "Type-safe backend", "Relational databases", "Cloud infrastructure", "Beta distribution"],
    faq: [
      { q: "Should I build native iOS or cross-platform?", a: "If you're only targeting iOS and need maximum performance or deep platform integration, a native build is ideal. If you also need Android, a cross-platform build gives you a shared codebase at lower cost." },
      { q: "How long does an iOS app take to build?", a: "A simple iOS app (3–5 screens) takes 6–10 weeks. A complex app with a backend takes 12–24 weeks." },
      { q: "How do you handle App Store rejection?", a: "We've navigated many App Store reviews. We pre-screen for common rejection reasons and handle any re-submissions at no additional cost." },
      { q: "Can you add iOS to our existing web platform?", a: "Yes. We build against your existing API or design one in parallel. The iOS app and web app share the same backend." },
      { q: "Do you sign Apple Developer agreements on our behalf?", a: "No. You need your own Apple Developer account. We'll guide you through enrollment and handle all technical submissions." },
    ],
    relatedServices: ["android-development", "mvp-development", "backend-development"],
  },
  {
    slug: "android-development",
    title: "Android App Development",
    heroTitle: "Android App Development — Reach the World's Largest Mobile Audience",
    heroSub:
      "Native and cross-platform Android apps designed for performance, accessibility, and Google Play success.",
    metaTitle: "Android App Development Canada | Native & Cross-Platform",
    metaDescription:
      "Professional Android app development in Canada. Native and cross-platform Android apps for smartphones and tablets. From concept to Google Play launch.",
    description:
      "Android powers 72% of the world's smartphones. We build Android applications that perform flawlessly across the fragmented device landscape — from flagship to mid-range — using native Android frameworks or cross-platform frameworks for shared codebases.",
    whatsIncluded: [
      { icon: "🤖", label: "Native Android Development", description: "Modern, declarative Android UI frameworks." },
      { icon: "⚛️", label: "Cross-Platform Option", description: "Cross-platform builds that share code with iOS for faster delivery." },
      { icon: "🔔", label: "Push Notifications", description: "Push notification infrastructure with rich media and background delivery." },
      { icon: "📲", label: "Google Play Submission", description: "We handle store listing, screenshots, and the review process." },
      { icon: "🗺️", label: "Google Maps Integration", description: "Location services, routing, and geofencing via Google Maps SDK." },
      { icon: "💳", label: "Google Play Billing", description: "Subscriptions, in-app purchases, and promotions via Google Play Billing Library." },
      { icon: "♿", label: "Accessibility", description: "TalkBack compatibility and WCAG 2.1 accessibility standards." },
      { icon: "🧪", label: "Device Testing", description: "Testing on physical devices spanning Android 8–14 and major OEMs." },
    ],
    whoItsFor: [
      "Startups needing to reach Android-first markets",
      "Businesses building companion apps for hardware products",
      "Enterprise teams deploying field service or logistics apps",
      "Founders adding Android alongside an iOS app",
    ],
    process: [
      { step: 1, title: "Product Definition", description: "Core flows, screen inventory, and platform-specific considerations defined upfront.", duration: "1 week" },
      { step: 2, title: "UI/UX Design", description: "Material You design system applied to your brand identity.", duration: "2–3 weeks" },
      { step: 3, title: "Development", description: "Iterative development with regular Android builds for your team's review.", duration: "6–16 weeks" },
      { step: 4, title: "QA & Device Testing", description: "Cross-device, cross-version testing matrix before submission.", duration: "1–2 weeks" },
      { step: 5, title: "Google Play Launch", description: "Store listing, internal testing track, and production rollout.", duration: "1 week" },
    ],
    techStack: ["Native Android frameworks", "Cross-platform mobile frameworks", "Backend-as-a-service", "Type-safe backend", "Relational databases", "Cloud infrastructure"],
    faq: [
      { q: "How do you handle Android fragmentation?", a: "We test on a device matrix covering the most popular screen sizes, Android versions, and OEM skins. We prioritize the devices that match your target market." },
      { q: "Can you build for both iOS and Android?", a: "Yes. Cross-platform frameworks let us share up to 80% of code between platforms, significantly reducing cost. We manage both App Store and Google Play submissions." },
      { q: "What Android versions do you support?", a: "We support Android 8.0 (Oreo) and above, which covers 98%+ of active Android devices globally." },
      { q: "How long does Android app development take?", a: "Similar to iOS: 6–10 weeks for simple apps, 12–24 weeks for complex ones with a backend." },
      { q: "Can you take over an existing Android project?", a: "Yes. We audit the existing codebase, identify technical debt, and create a transition plan before taking ownership." },
    ],
    relatedServices: ["ios-development", "mvp-development", "backend-development"],
  },
  {
    slug: "frontend-development",
    title: "Front End Development",
    heroTitle: "Front End Development — Pixel-Perfect Interfaces, Built for Speed",
    heroSub:
      "We build high-performance modern frontends that look stunning, load instantly, and give users an experience worth coming back for.",
    metaTitle: "Front End Development Services Canada | Modern Frontend Experts",
    metaDescription:
      "Expert modern front end development in Canada. Fast, accessible, and beautifully designed web interfaces. Book a free discovery call.",
    description:
      "Great software starts at the interface. Our front end team builds clean, component-driven UIs on modern frameworks — optimized for performance, accessibility, and developer experience. We work from any major design tool or create our own, and we integrate cleanly with any backend.",
    whatsIncluded: [
      { icon: "⚛️", label: "Component-Driven Development", description: "Component-driven architecture with server components, static generation, and streaming." },
      { icon: "🎨", label: "Design System Implementation", description: "Design to code: pixel-perfect component libraries built with utility-first styling or CSS-in-JS." },
      { icon: "⚡", label: "Performance Optimization", description: "Core Web Vitals optimization, code splitting, lazy loading, and bundle analysis." },
      { icon: "♿", label: "Accessibility", description: "WCAG 2.1 AA compliance, keyboard navigation, and screen reader testing." },
      { icon: "🧩", label: "State Management", description: "Modern state-management libraries for predictable, scalable state." },
      { icon: "🔌", label: "API Integration", description: "REST and GraphQL integration with error handling and optimistic UI updates." },
    ],
    whoItsFor: [
      "Startups with a backend who need a polished frontend",
      "Design agencies who need development execution",
      "Companies upgrading from legacy jQuery or AngularJS",
      "Teams augmenting their capacity with experienced frontend engineers",
    ],
    process: [
      { step: 1, title: "Design Review & Component Mapping", description: "We audit your designs and define the component hierarchy before writing code.", duration: "2–3 days" },
      { step: 2, title: "Design System & Primitives", description: "Build the base component library: buttons, inputs, typography, layout.", duration: "1 week" },
      { step: 3, title: "Page & Feature Development", description: "Build all pages and features with full API integration and error states.", duration: "4–12 weeks" },
      { step: 4, title: "Performance Audit", description: "Comprehensive performance audits and remediation across core web vitals.", duration: "3–5 days" },
      { step: 5, title: "Handoff & Documentation", description: "Component library documentation and API docs for your team.", duration: "2–3 days" },
    ],
    techStack: ["Modern frontend frameworks", "Type-safe code", "Utility-first styling", "Production animation libraries", "Component library tooling", "Data fetching layers", "State management"],
    faq: [
      { q: "Do you work from existing designs?", a: "Yes. We work from any major design tool — or even PDF mockups. If you don't have designs, our design team can create them." },
      { q: "Can you work with our existing frontend codebase?", a: "Yes. We're comfortable inheriting existing codebases. We do a brief audit first and clean up any critical technical debt before adding features." },
      { q: "Do you write tests?", a: "Yes. We write unit tests with industry-standard testing frameworks, and integration tests for critical user flows." },
      { q: "What performance scores can we expect?", a: "On most projects we achieve top-tier performance and accessibility scores against industry-standard benchmarks. We share before/after metrics." },
      { q: "Do you handle animations and micro-interactions?", a: "Absolutely. We use production-quality animation libraries to make your product feel premium." },
    ],
    relatedServices: ["backend-development", "website-development", "saas-development"],
  },
  {
    slug: "backend-development",
    title: "Back End Development",
    heroTitle: "Back End Development — Reliable APIs and Infrastructure That Scale",
    heroSub:
      "We design and build the server-side systems, APIs, and databases that power your product — engineered for reliability, security, and performance at scale.",
    metaTitle: "Back End Development Services Canada | Scalable APIs & Services",
    metaDescription:
      "Expert backend development: REST APIs, GraphQL, type-safe runtimes, databases, and cloud infrastructure. Built to scale and maintained for the long term.",
    description:
      "Every great product is powered by a well-architected backend. We build the APIs, services, and infrastructure that handle your data, business logic, authentication, and third-party integrations — designed to scale from 100 to 1,000,000 users without a rewrite.",
    whatsIncluded: [
      { icon: "🌐", label: "REST & GraphQL APIs", description: "Well-documented APIs with versioning, rate limiting, and authentication." },
      { icon: "🗄️", label: "Database Design", description: "Normalized schemas, query optimization, indexing, and migration management." },
      { icon: "🔐", label: "Authentication & Security", description: "JWT, OAuth 2.0, API key management, and OWASP-compliant code." },
      { icon: "⚡", label: "Caching & Performance", description: "In-memory caching, CDN configuration, and query optimization." },
      { icon: "📡", label: "Webhooks & Event Systems", description: "Webhook dispatch, event queues, and async job processing." },
      { icon: "🧪", label: "Testing & Documentation", description: "Unit and integration tests, OpenAPI documentation, and runnable API reference collections." },
    ],
    whoItsFor: [
      "Frontend teams who need a solid API to build against",
      "Products that need to replace a fragile or poorly-designed backend",
      "SaaS companies scaling beyond their current infrastructure",
      "Businesses building internal APIs to unify their data sources",
    ],
    process: [
      { step: 1, title: "Architecture Design", description: "Data model, API surface, and service boundaries designed before any code.", duration: "1 week" },
      { step: 2, title: "Core API Development", description: "Endpoints, authentication, and core business logic built and tested.", duration: "4–10 weeks" },
      { step: 3, title: "Integrations", description: "Third-party services, payment processors, and external APIs integrated.", duration: "1–3 weeks" },
      { step: 4, title: "Performance & Security Audit", description: "Load testing, penetration testing basics, and performance profiling.", duration: "1 week" },
      { step: 5, title: "DevOps & Deployment", description: "CI/CD pipelines, containerization, and cloud deployment.", duration: "3–5 days" },
    ],
    techStack: ["Type-safe runtimes", "Backend frameworks", "Relational databases", "Document databases", "Caching layers", "Containerization", "Cloud infrastructure"],
    faq: [
      { q: "What languages and frameworks do you use?", a: "We're language-agnostic and choose the best fit for your project. We're equally comfortable with modern type-safe runtimes for general API work, data-science backends, and compiled languages for performance-critical services. We discuss the right choice during scoping." },
      { q: "How do you ensure API security?", a: "We follow OWASP guidelines, implement proper authentication, validate all inputs, use parameterized queries, and run automated security scans as part of our CI pipeline." },
      { q: "Can you optimize our existing slow database?", a: "Yes. Query analysis, index optimization, and caching strategies can dramatically improve performance without migrating to a new database." },
      { q: "Do you handle real-time features?", a: "Yes. WebSockets, Server-Sent Events, and real-time pub/sub subscriptions backed by your database or message broker." },
      { q: "Do you write API documentation?", a: "Yes. We generate OpenAPI documentation from code and provide a runnable API reference collection with every API delivery." },
    ],
    relatedServices: ["frontend-development", "saas-development", "custom-software-development"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    heroTitle: "Web Development — From Simple Sites to Complex Web Applications",
    heroSub:
      "Full-spectrum web development: marketing sites, web apps, portals, and platforms built by a team that cares about code quality and user experience.",
    metaTitle: "Web Development Company Canada | Full-Stack Web Developers",
    metaDescription:
      "Full-stack web development in Canada. Marketing websites, web applications, and complex platforms built on modern frameworks. Get a free quote.",
    description:
      "Web development is our core. Whether you need a fast-loading marketing site, a complex web application, or a full-stack platform with a custom admin panel, our team delivers clean, maintainable code that your users will love and your developers won't dread maintaining.",
    whatsIncluded: [
      { icon: "🌐", label: "Full-Stack Development", description: "Frontend, backend, and database — we handle the entire web stack." },
      { icon: "⚡", label: "Performance-First", description: "SSG, SSR, edge functions, and CDN configuration for fast global delivery." },
      { icon: "🎨", label: "UI/UX Design", description: "We design beautiful interfaces or implement your existing designs perfectly." },
      { icon: "🔍", label: "SEO Foundation", description: "Semantic HTML, Core Web Vitals, schema markup, and sitemap generation." },
      { icon: "📱", label: "Responsive Design", description: "Flawless across every device, from 375px mobile to 4K desktop." },
      { icon: "🔒", label: "Security & Compliance", description: "HTTPS, security headers, CSP, and GDPR-compliant implementations." },
    ],
    whoItsFor: [
      "Any business that needs a professional web presence",
      "Startups building their first web product",
      "Enterprises modernizing legacy web applications",
      "Teams looking for a full-stack partner rather than individual contractors",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Goals, audience, technical requirements, and competitive analysis.", duration: "1 week" },
      { step: 2, title: "Design", description: "Wireframes and high-fidelity mockups reviewed and approved.", duration: "1–2 weeks" },
      { step: 3, title: "Development", description: "Front and back end built in parallel with weekly review sessions.", duration: "4–12 weeks" },
      { step: 4, title: "QA & Testing", description: "Cross-browser, cross-device, and performance testing.", duration: "1 week" },
      { step: 5, title: "Launch", description: "Deployment, monitoring, and a post-launch support window.", duration: "3–5 days" },
    ],
    techStack: ["Modern web frameworks", "Type-safe backend", "Relational databases", "Utility-first styling", "Cloud infrastructure"],
    faq: [
      { q: "Do you build web apps or just websites?", a: "Both. We build anything from a 5-page marketing website to a complex SaaS platform with thousands of users." },
      { q: "How do you handle browser compatibility?", a: "We test on Chrome, Firefox, Safari, and Edge across Windows and macOS. We support the last two major versions of each browser." },
      { q: "Can you work with our existing tech stack?", a: "Usually yes. We're flexible and can work within many existing environments. We'll flag any concerns during our initial technical review." },
      { q: "Do you provide hosting?", a: "We configure and set up hosting on any major cloud provider but the accounts remain in your name." },
      { q: "What happens after the project is done?", a: "We offer monthly maintenance retainers. Many clients keep us on for ongoing feature development after the initial build." },
    ],
    relatedServices: ["frontend-development", "backend-development", "website-development"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    heroTitle: "Custom Software Development — Software Built Around Your Business, Not the Other Way Around",
    heroSub:
      "When off-the-shelf software creates workarounds instead of solutions, it's time for custom. We build exactly what your business needs — no more, no less.",
    metaTitle: "Custom Software Development Company Canada | Bespoke Software Solutions",
    metaDescription:
      "Custom software development in Canada. Bespoke web applications, platforms, and tools built to fit your exact business needs. Book a free discovery call.",
    description:
      "Custom software is a strategic investment. Done right, it becomes a competitive moat — a system that fits your processes so precisely that competitors can't replicate your efficiency. We've built custom software for healthcare, logistics, finance, manufacturing, and dozens of other verticals.",
    whatsIncluded: [
      { icon: "🗺️", label: "Requirements Analysis", description: "Structured discovery to define every requirement, constraint, and success metric." },
      { icon: "🏗️", label: "System Architecture", description: "Scalable, maintainable architecture designed for your specific domain." },
      { icon: "⚙️", label: "Full-Stack Development", description: "Front end, back end, APIs, integrations, and database — built to spec." },
      { icon: "🔗", label: "Legacy System Integration", description: "We integrate with your existing ERP, CRM, and legacy systems." },
      { icon: "🛡️", label: "Security & Compliance", description: "HIPAA, SOC 2, GDPR, and PIPEDA-compliant implementations available." },
      { icon: "📚", label: "Documentation & Training", description: "Full technical and user documentation, plus team training." },
    ],
    whoItsFor: [
      "Enterprises with unique workflows that no off-the-shelf product handles",
      "Regulated industries with specific compliance requirements",
      "Companies replacing multiple SaaS subscriptions with one custom system",
      "Businesses with proprietary processes they need to protect",
    ],
    process: [
      { step: 1, title: "Discovery & Requirements", description: "Deep stakeholder interviews, process mapping, and documented requirements sign-off.", duration: "2–4 weeks" },
      { step: 2, title: "Architecture & Design", description: "System architecture, data model, and UI/UX design.", duration: "2–3 weeks" },
      { step: 3, title: "Development", description: "Iterative development with regular milestone reviews and stakeholder demos.", duration: "12–40 weeks" },
      { step: 4, title: "Testing & QA", description: "UAT with your team, automated testing, and performance verification.", duration: "2–4 weeks" },
      { step: 5, title: "Deployment & Handover", description: "Production deployment, staff training, and full documentation handoff.", duration: "2–3 weeks" },
    ],
    techStack: ["Modern web frameworks", "Type-safe backend", "Data-science backends", "Relational databases", "Caching layers", "Containerization", "Container orchestration", "Cloud infrastructure"],
    faq: [
      { q: "How do I know if I need custom software vs. off-the-shelf?", a: "If you're spending more than 20% of your team's time on workarounds, duplicating data between systems, or the software can't handle your core workflow, it's time for custom. We can help you evaluate this during a free discovery call." },
      { q: "How do you handle changing requirements?", a: "We use agile methodology with a defined change management process. Small changes are absorbed; significant scope changes are re-estimated transparently." },
      { q: "What's the total cost of ownership?", a: "We build for maintainability. Our projects include documentation, test coverage, and clean code that reduces long-term maintenance costs significantly compared to hasty builds." },
      { q: "Can you build for regulated industries?", a: "Yes. We've built HIPAA-compliant healthcare software, SOC 2-ready platforms, and PIPEDA-compliant tools for Canadian businesses." },
      { q: "What if we need to hand the project to an internal team?", a: "We design every project for knowledge transfer. We provide technical documentation, a handover session, and a 30-day post-handover support window." },
    ],
    relatedServices: ["saas-development", "internal-tools", "backend-development"],
  },
  {
    slug: "qa-testing",
    title: "QA & Testing",
    heroTitle: "QA & Testing Services — Ship With Confidence, Not Anxiety",
    heroSub:
      "Comprehensive quality assurance and testing services that catch bugs before your users do — from manual exploratory testing to full automated test suites.",
    metaTitle: "QA Testing Services Canada | Software Quality Assurance",
    metaDescription:
      "Professional QA and software testing services. Manual testing, automated test suites, performance testing, and CI/CD integration. Book a free quote.",
    description:
      "Poor quality software costs more to fix than to prevent. Our QA team embeds quality throughout your development process — not just at the end — with a mix of manual, automated, and performance testing that gives you confidence in every release.",
    whatsIncluded: [
      { icon: "🔍", label: "Manual Exploratory Testing", description: "Experienced QA engineers testing like real users — finding the edge cases automated tests miss." },
      { icon: "🤖", label: "Automated Test Suites", description: "Unit, integration, and E2E tests built with industry-standard testing frameworks." },
      { icon: "⚡", label: "Performance Testing", description: "Load testing with industry-standard tools to verify your app holds up under traffic." },
      { icon: "🛡️", label: "Security Testing", description: "OWASP Top 10 checks, dependency vulnerability scanning, and penetration testing basics." },
      { icon: "📱", label: "Cross-Device Testing", description: "Verified on iOS, Android, Chrome, Firefox, Safari, and Edge." },
      { icon: "♿", label: "Accessibility Testing", description: "Automated and manual WCAG 2.1 AA compliance verification." },
    ],
    whoItsFor: [
      "Development teams lacking QA capacity",
      "Products about to launch that need a final quality gate",
      "Companies with recurring production bugs needing systematic testing",
      "Enterprises requiring formal QA documentation and sign-off",
    ],
    process: [
      { step: 1, title: "Test Planning", description: "We review your product and create a comprehensive test plan and strategy document.", duration: "2–3 days" },
      { step: 2, title: "Test Case Development", description: "Detailed test cases covering happy paths, edge cases, and error states.", duration: "3–5 days" },
      { step: 3, title: "Test Execution", description: "Manual and automated testing across all defined scenarios.", duration: "1–3 weeks" },
      { step: 4, title: "Bug Reporting & Triage", description: "Structured bug reports in your issue tracker with severity, steps, and screenshots.", duration: "Ongoing" },
      { step: 5, title: "Regression & Sign-Off", description: "Final regression pass after bug fixes with a sign-off report.", duration: "2–3 days" },
    ],
    techStack: ["Unit testing frameworks", "Component testing libraries", "End-to-end testing", "Load testing", "API testing", "Issue tracking platforms"],
    faq: [
      { q: "At what stage should we bring in QA?", a: "Ideally from day one. QA embedded in development costs 5–10x less than QA at the end. But even a pre-launch QA engagement catches critical issues that save your reputation." },
      { q: "Can you work within our existing CI/CD pipeline?", a: "Yes. We integrate automated tests into any major CI/CD platform — whatever your team is already using." },
      { q: "Do you provide a test coverage report?", a: "Yes. We report on coverage metrics, test results, and open issues in a structured sign-off document." },
      { q: "How much does QA testing cost?", a: "Cost depends on the scope, complexity, and duration of the engagement. Book a free call and we'll scope it out and give you a clear estimate." },
      { q: "Can you do performance testing?", a: "Yes. We use industry-standard load testing tools to simulate concurrent users and identify performance bottlenecks before they affect production." },
    ],
    relatedServices: ["custom-software-development", "saas-development", "mvp-development"],
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    heroTitle: "Process Automation — Let Software Do the Repetitive Work",
    heroSub:
      "We automate the manual, time-consuming workflows that slow your team down — from data entry and approvals to reporting and system sync.",
    metaTitle: "Business Process Automation Canada | Workflow Automation Services",
    metaDescription:
      "Custom business process automation services. Replace manual workflows with intelligent automations. Integrate your tools and eliminate repetitive tasks.",
    description:
      "Every hour your team spends on repetitive, manual tasks is an hour not spent on strategic work. We analyze your workflows, identify automation opportunities, and build the integrations and bots that get it done — reliably, consistently, and at scale.",
    whatsIncluded: [
      { icon: "🔄", label: "Workflow Automation", description: "Automated approval chains, routing rules, and status updates across your systems." },
      { icon: "🔗", label: "System Integration", description: "Connect your CRM, ERP, accounting, HR, and communication tools." },
      { icon: "📊", label: "Automated Reporting", description: "Scheduled reports generated and delivered to stakeholders automatically." },
      { icon: "📧", label: "Email & Notification Automations", description: "Triggered emails, team-chat messages, and SMS based on business events." },
      { icon: "📋", label: "Data Sync & ETL", description: "Real-time or scheduled data pipelines between databases and SaaS tools." },
      { icon: "🤖", label: "RPA (Robotic Process Automation)", description: "Browser-based automation for legacy systems without APIs." },
    ],
    whoItsFor: [
      "Operations teams spending hours on data entry and system sync",
      "Finance teams generating manual reports and reconciliations",
      "HR teams managing onboarding and offboarding manually",
      "Any team with repetitive, rule-based workflows that could be automated",
    ],
    process: [
      { step: 1, title: "Process Discovery", description: "We interview your team and map every manual workflow, calculating time-cost and automation ROI.", duration: "1 week" },
      { step: 2, title: "Automation Design", description: "We design the automation logic, exception handling, and monitoring strategy.", duration: "3–5 days" },
      { step: 3, title: "Build & Integration", description: "Automations built, integrated, and tested in a staging environment.", duration: "2–6 weeks" },
      { step: 4, title: "Pilot & Validation", description: "Run in parallel with existing processes to validate accuracy.", duration: "1–2 weeks" },
      { step: 5, title: "Full Deployment & Monitoring", description: "Production deployment with alerting for failures or exceptions.", duration: "1 week" },
    ],
    techStack: ["Low-code automation platforms", "Self-hosted workflow engines", "Custom-code automation", "Data-science backends", "Relational databases", "REST API connectors", "Browser-based RPA"],
    faq: [
      { q: "How do you calculate ROI for automation?", a: "We calculate hours saved × loaded labour cost. Most automations pay for themselves within 6 months. We provide an ROI estimate before starting any project." },
      { q: "Can you automate processes that involve legacy systems without APIs?", a: "Yes. We use RPA (robotic process automation) techniques to automate browser-based and desktop interactions with legacy systems." },
      { q: "What happens if the automation fails?", a: "We build failure alerting and fallback logic into every automation. You're notified immediately if something goes wrong, and the system fails safely." },
      { q: "How long does automation take to build?", a: "Simple automations (single workflow, 2–3 system integrations) take 1–3 weeks. Complex multi-step processes take 4–10 weeks." },
      { q: "Can we maintain the automations ourselves?", a: "Yes. We document everything and choose tools your team can manage. We also offer ongoing support if preferred." },
    ],
    relatedServices: ["internal-tools", "customer-service-automation", "crm-systems"],
  },
  {
    slug: "customer-service-automation",
    title: "Customer Service Automation",
    heroTitle: "Customer Service Automation — Resolve More Tickets, Faster",
    heroSub:
      "AI-powered chatbots, automated ticket routing, and self-service portals that let your support team focus on complex issues while automation handles the rest.",
    metaTitle: "Customer Service Automation | AI Chatbots & Support Automation",
    metaDescription:
      "Custom customer service automation: AI chatbots, ticket routing, knowledge bases, and self-service portals. Reduce support costs and improve CSAT.",
    description:
      "Up to 60% of support tickets are repetitive questions that can be answered by a well-designed self-service system. We build the AI chatbots, automated routing rules, and knowledge base systems that let your customers help themselves and your agents focus on what matters.",
    whatsIncluded: [
      { icon: "🤖", label: "AI-Powered Chatbot", description: "LLM-backed chatbots trained on your knowledge base to answer customer questions 24/7." },
      { icon: "🎫", label: "Automated Ticket Routing", description: "AI-based intent classification to route tickets to the right team instantly." },
      { icon: "📚", label: "Knowledge Base", description: "SEO-optimized self-service help centre integrated with your chatbot." },
      { icon: "📊", label: "Support Analytics Dashboard", description: "Ticket volume, resolution time, CSAT, and deflection rate dashboards." },
      { icon: "🔗", label: "CRM & Helpdesk Integration", description: "Integrates with any major CRM or helpdesk platform your team uses." },
      { icon: "⚡", label: "Escalation Flows", description: "Seamless handoff from bot to human agent with full context preserved." },
    ],
    whoItsFor: [
      "SaaS companies with growing support volume",
      "E-commerce brands receiving high volumes of order and shipping inquiries",
      "Financial services firms with complex compliance-driven support needs",
      "Any business spending more than $1,000/month on customer support",
    ],
    process: [
      { step: 1, title: "Support Audit", description: "We analyze your ticket volume, common inquiries, and current resolution workflows.", duration: "1 week" },
      { step: 2, title: "Knowledge Base & Flow Design", description: "Define the FAQ content, conversation flows, and escalation logic.", duration: "1–2 weeks" },
      { step: 3, title: "Bot Development & Training", description: "Build and train the AI chatbot on your content and conversation patterns.", duration: "2–4 weeks" },
      { step: 4, title: "Integration & Testing", description: "Connect to your helpdesk, CRM, and test with real customer scenarios.", duration: "1–2 weeks" },
      { step: 5, title: "Launch & Optimization", description: "Gradual rollout with A/B testing of conversation flows and continuous improvement.", duration: "Ongoing" },
    ],
    techStack: ["Large language models", "Helpdesk platform integrations", "Custom backend services", "Relational databases", "Vector databases", "Cloud infrastructure"],
    faq: [
      { q: "Will our customers be frustrated talking to a bot?", a: "Not if it's built well. We design chatbots that know their limits and escalate to humans gracefully. A bot that says 'I'm not sure, let me connect you with someone' is better than an agent who takes 48 hours to respond." },
      { q: "Can we train the bot on our specific products and policies?", a: "Yes. We ingest your knowledge base, product documentation, and policy docs using RAG (Retrieval Augmented Generation) so the bot answers accurately about your specific products." },
      { q: "What deflection rates can we expect?", a: "Typically 40–65% of tier-1 tickets are deflected by a well-trained chatbot within the first 90 days." },
      { q: "Can it handle multiple languages?", a: "Yes. Modern LLMs handle multilingual queries natively. We configure the system to match your customer geography." },
      { q: "How long does implementation take?", a: "A basic chatbot + knowledge base takes 4–6 weeks. A fully integrated system with ticket routing and analytics takes 8–12 weeks." },
    ],
    relatedServices: ["ai-consulting", "crm-systems", "process-automation"],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    heroTitle: "AI Consulting — Implement AI That Actually Moves the Needle",
    heroSub:
      "Practical AI strategy and implementation for businesses that want to capture the competitive advantages of AI without the hype, wasted budget, or failed pilots.",
    metaTitle: "AI Consulting Services Canada | Practical AI Strategy & Implementation",
    metaDescription:
      "AI consulting and implementation services. LLM integration, AI product development, ML pipelines, and AI strategy for SMEs and enterprises. Book a free call.",
    description:
      "Most AI projects fail because they start with the technology rather than the problem. We start with your business goals, identify where AI creates real leverage, and implement it rigorously — from quick wins like LLM-powered features to sophisticated ML pipelines that compound in value over time.",
    whatsIncluded: [
      { icon: "🎯", label: "AI Opportunity Assessment", description: "Identify the highest-ROI AI use cases in your specific business." },
      { icon: "🤖", label: "LLM Integration", description: "Commercial and open-source language models integrated into your products." },
      { icon: "🔍", label: "RAG & Knowledge Systems", description: "Retrieval-augmented generation systems that answer questions from your proprietary data." },
      { icon: "📊", label: "Predictive Analytics", description: "ML models for churn prediction, demand forecasting, fraud detection, and anomaly detection." },
      { icon: "🏗️", label: "AI Infrastructure", description: "Vector databases, model serving, fine-tuning pipelines, and monitoring." },
      { icon: "📋", label: "AI Governance & Ethics", description: "Responsible AI frameworks, bias testing, and compliance documentation." },
    ],
    whoItsFor: [
      "Product teams adding AI features to an existing product",
      "Enterprises evaluating where AI creates strategic value",
      "Startups building AI-native products",
      "CTOs who need guidance on AI architecture decisions",
    ],
    process: [
      { step: 1, title: "AI Opportunity Workshop", description: "30-minute call to map out your business processes and AI capabilities to identify quick wins and strategic bets.", duration: "1 week" },
      { step: 2, title: "Use Case Prioritization", description: "Scoring framework to prioritize by ROI, feasibility, and strategic value.", duration: "2–3 days" },
      { step: 3, title: "Proof of Concept", description: "Build a working PoC for the highest-priority use case to validate feasibility and ROI.", duration: "2–4 weeks" },
      { step: 4, title: "Production Implementation", description: "Full implementation with robust evaluation, monitoring, and feedback loops.", duration: "4–16 weeks" },
      { step: 5, title: "Iteration & Improvement", description: "Ongoing model evaluation, prompt optimization, and feature expansion.", duration: "Ongoing" },
    ],
    techStack: ["Commercial LLMs", "Open-source LLMs", "Agent orchestration frameworks", "Vector databases", "Data-science backends", "Relational databases", "Cloud AI infrastructure"],
    faq: [
      { q: "We've tried AI before and it didn't work. Why would it work now?", a: "Most failed AI projects suffer from unclear problem definition, wrong tool selection, or inadequate data. We start with a clear ROI hypothesis and build incrementally, so you see validated results before committing to a full build." },
      { q: "How do we keep our data private when using LLMs?", a: "We use enterprise LLM providers with strict data-handling guarantees (training-data isolation, regional hosting) or self-hosted open-source models for sensitive data. We configure data handling to meet your compliance requirements." },
      { q: "What's the cost of an AI consulting engagement?", a: "Cost depends on the scope of the assessment and the use cases we're tackling. Book a free call and we'll walk you through what to expect before any commitment." },
      { q: "How do you evaluate AI quality?", a: "We define explicit evaluation metrics before building: accuracy, latency, cost per call, and user satisfaction. We build automated evaluation pipelines and human review processes." },
      { q: "Can you help us fine-tune our own model?", a: "Yes. For use cases with sufficient proprietary data, fine-tuning can significantly outperform prompt engineering alone. We've done this for legal, healthcare, and financial services clients." },
    ],
    relatedServices: ["customer-service-automation", "process-automation", "saas-development"],
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    heroTitle: "CRM Development — A System That Fits Your Sales Process, Not the Other Way Around",
    heroSub:
      "Custom CRM development and platform configuration that gives your sales, marketing, and success teams exactly the visibility and workflow they need.",
    metaTitle: "CRM System Development Canada | Custom CRM & Platform Implementation",
    metaDescription:
      "Custom CRM development and SaaS CRM implementation. Build a CRM that fits your exact sales process. Get a free consultation.",
    description:
      "Generic SaaS CRMs are powerful but expensive and often over-engineered for growing teams. We build custom CRMs tailored to your sales motion, or implement and configure the right platform for your needs — without the bloat.",
    whatsIncluded: [
      { icon: "👥", label: "Contact & Deal Management", description: "Centralized contact records, deal pipelines, and activity timelines." },
      { icon: "📊", label: "Sales Analytics", description: "Pipeline health, conversion rates, revenue forecasting, and rep performance." },
      { icon: "⚙️", label: "Workflow Automation", description: "Automated follow-ups, task creation, and deal stage transitions." },
      { icon: "📧", label: "Email Integration", description: "Two-way email sync, sequences, and open/click tracking." },
      { icon: "🔗", label: "Third-Party Integration", description: "Connect to your marketing tools, billing system, and communication platforms." },
      { icon: "📱", label: "Mobile Access", description: "Mobile-optimized interface for field sales teams." },
    ],
    whoItsFor: [
      "Sales teams managing 50+ active deals and losing track",
      "Growing companies outgrowing their spreadsheet-based CRM",
      "Businesses with unique sales processes no off-the-shelf CRM handles",
      "Companies paying for CRM features they don't use",
    ],
    process: [
      { step: 1, title: "Sales Process Audit", description: "Map your current sales motion, data model, and team workflows.", duration: "3–5 days" },
      { step: 2, title: "CRM Architecture", description: "Design the data model, pipeline stages, and automation logic.", duration: "1 week" },
      { step: 3, title: "Development / Configuration", description: "Build a custom CRM or configure a leading platform to spec.", duration: "4–10 weeks" },
      { step: 4, title: "Data Migration", description: "Migrate contacts, deals, and history from your current system.", duration: "1–2 weeks" },
      { step: 5, title: "Team Training & Rollout", description: "Phased rollout with sales team training to drive adoption.", duration: "1–2 weeks" },
    ],
    techStack: ["Custom CRM platforms", "Leading SaaS CRMs", "Workflow automation", "Email platform APIs"],
    faq: [
      { q: "Should we build a custom CRM or configure an existing one?", a: "For most teams under 50 sales reps, a well-configured leading SaaS CRM is more cost-effective. Custom makes sense when you have unique deal structures, regulatory requirements, or need deep integration with proprietary systems." },
      { q: "Can you migrate data from our current CRM?", a: "Yes. We've migrated data from every major CRM platform, spreadsheets, and custom databases." },
      { q: "How long does CRM implementation take?", a: "A standard SaaS-CRM configuration takes 4–8 weeks. A custom CRM takes 10–20 weeks depending on complexity." },
      { q: "How do you ensure adoption?", a: "Adoption is a design problem. We involve your sales team in the design process and build the system around their actual workflow, not best practices in the abstract." },
      { q: "Can you integrate our CRM with our marketing automation?", a: "Yes. Bidirectional sync with every major marketing automation platform." },
    ],
    relatedServices: ["internal-tools", "process-automation", "customer-service-automation"],
  },
  {
    slug: "fractional-caio",
    title: "Fractional Chief AI Officer",
    heroTitle: "Your Business Needs an AI Strategy.",
    heroSub:
      "Get executive-level AI leadership without the cost of hiring a full-time Chief AI Officer.",
    heroSubtext:
      "Audax helps businesses identify practical AI opportunities, implement high-impact solutions, and build a roadmap for long-term competitive advantage.",
    metaTitle: "Fractional Chief AI Officer Canada | CAIO Services",
    metaDescription:
      "Fractional Chief AI Officer (CAIO) services for Canadian businesses. Three monthly packages from $3,000 — AI strategy, implementation, and transformation.",
    description:
      "We help organizations identify, prioritize, build, implement, and manage custom AI initiatives that drive measurable business results. As your Fractional Chief AI Officer, Audax provides executive-level AI leadership, strategic direction, and hands-on implementation support to help your business stay competitive in an AI-driven world.",
    whatsIncluded: [
      { icon: "🎯", label: "AI Opportunity Assessment", description: "Identify the highest-ROI AI use cases specific to your business and industry." },
      { icon: "🗺️", label: "12-Month AI Roadmap", description: "A prioritized, actionable plan for AI adoption across your organization." },
      { icon: "👔", label: "Executive Strategy Sessions", description: "Regular leadership sessions to align AI strategy with business goals." },
      { icon: "📚", label: "Leadership AI Training", description: "Equip your leadership team to make confident, informed AI decisions." },
      { icon: "📊", label: "ROI Tracking & Reporting", description: "Measure time savings, cost reduction, and productivity gains from every AI initiative." },
      { icon: "🏗️", label: "Custom AI & Software Build", description: "We don't just advise — we build and deploy real AI tools and software for your business." },
    ],
    whoItsFor: [
      "Organizations beginning their AI journey and looking for strategic guidance and a clear roadmap",
      "Growing companies ready to move beyond strategy and implement AI across departments",
      "Organizations making AI a core strategic priority and seeking ongoing executive leadership",
      "Leadership teams that want measurable business results — not just advice",
      "Businesses that have tried AI tools before but haven't seen meaningful ROI",
      "Companies that want a partner who can both strategize and build",
    ],
    packages: [
      {
        name: "Foundations",
        price: "$3,000",
        priceUnit: "/month",
        tagline: "Strategic guidance, education, and a clear roadmap.",
        bestFor: "Organizations looking to understand how AI can create value and establish a clear path forward.",
        features: [
          "AI Opportunity Assessment",
          "12-Month AI Roadmap",
          "Monthly Executive Strategy Session",
          "Leadership AI Training",
          "AI Tool & Technology Recommendations",
          "Monthly Progress Reporting",
          "Build and installation of a custom AI chatbot for your business",
        ],
        monthlyPhases: [],
      },
      {
        name: "Growth",
        price: "$5,500",
        priceUnit: "/month",
        tagline: "Strategy plus hands-on AI implementation across departments.",
        bestFor: "Growing companies seeking a strategic AI leader to guide implementation and drive measurable business improvements.",
        features: [
          "Everything in Foundations",
          "Bi-Weekly Executive Strategy Sessions",
          "AI Implementation Oversight",
          "Process & Automation Optimization",
          "Department AI Planning",
          "ROI Tracking & Performance Reporting",
          "Evaluation of current SaaS subscriptions & replacement with custom software",
        ],
        monthlyPhases: [],
      },
      {
        name: "Transformation",
        price: "$8,500",
        priceUnit: "/month",
        tagline: "Ongoing executive AI leadership, governance, and full implementation.",
        bestFor: "Organizations seeking a dedicated executive partner to lead AI adoption and transformation across the business.",
        features: [
          "Everything in Growth",
          "Weekly Executive Leadership Support",
          "AI Governance & Risk Management",
          "Organization-Wide AI Transformation",
          "Board & Stakeholder Reporting",
          "Custom AI & Software Strategy",
          "Fully built & deployed custom software tool for your business",
        ],
        monthlyPhases: [],
      },
    ],
    faq: [
      { q: "What's the difference between a Fractional CAIO and an AI consultant?", a: "A CAIO operates AS an executive in your business with ongoing strategic responsibility — sitting at the leadership table, owning governance, and driving adoption. A consultant typically delivers a defined project and leaves. Our monthly engagements give you that ongoing leadership cadence at a fraction of a full-time hire's cost." },
      { q: "How does this compare to hiring a full-time Chief AI Officer?", a: "A full-time CAIO typically costs $250K–$400K+ annually, plus equity. Our packages range from $36K to $102K annually with no long-term commitment — the right fit for businesses where the AI workload doesn't yet justify a full-time hire." },
      { q: "Can I switch between packages?", a: "Yes — many businesses start with Foundations and move up as their AI maturity grows. We can adjust the engagement on 30 days' notice." },
      { q: "What's the minimum commitment?", a: "Three months. That's the time required to deliver the structured Month 1–3 outputs in each package. After that, monthly with 30-day notice." },
      { q: "Do you sign NDAs and data-handling agreements?", a: "Always, before any substantive work begins. We work with multiple clients in overlapping spaces and take confidentiality extremely seriously." },
      { q: "Will my data ever be used to train AI models?", a: "No. We use enterprise AI providers with strict data-handling guarantees (training-data isolation, regional hosting), or self-hosted open-source models for sensitive data. We configure data handling to meet your compliance requirements." },
      { q: "What does Month 4 onward look like?", a: "Once the structured Month 1–3 deliverables land, the engagement becomes an ongoing leadership cadence: regular strategy sessions, AI initiative oversight, training as new tools emerge, and quarterly ROI reporting." },
      { q: "Do you offer custom packages?", a: "For most businesses, one of the three packages fits well. For larger engagements or enterprise needs, contact us to discuss a custom scope." },
    ],
    relatedServices: ["ai-consulting", "process-automation", "customer-service-automation"],
  },
  {
    slug: "ai-transformation-advisory",
    title: "AI Transformation & Advisory",
    heroTitle: "AI Transformation & Advisory — From AI Curious to AI Capable",
    heroSub:
      "AI assessments, roadmaps, governance, training, and implementation planning that turn AI ambition into a structured, de-risked plan your leadership team can actually execute.",
    metaTitle: "AI Transformation & Advisory Canada | AI Strategy, Roadmaps & Governance",
    metaDescription:
      "AI transformation and advisory services for Canadian businesses. AI opportunity assessments, roadmaps, governance frameworks, training, and implementation planning. Book a free call.",
    description:
      "Most businesses know AI matters but don't know where to start, what to prioritize, or how to govern it responsibly. We help you cut through the noise — assessing where AI creates real value in your business, building a practical roadmap, putting governance and training in place, and planning the implementation work so it actually gets done.",
    whatsIncluded: [
      { icon: "🎯", label: "AI Opportunity Assessment", description: "Identify where AI can realistically reduce costs, save time, or grow revenue in your business." },
      { icon: "🗺️", label: "AI Roadmap & Strategy", description: "A prioritized, sequenced plan for AI adoption aligned to your business goals and budget." },
      { icon: "📋", label: "AI Governance & Risk Frameworks", description: "Clear ownership, approval processes, and usage policies that keep AI adoption safe and compliant." },
      { icon: "📚", label: "Leadership & Employee Training", description: "Practical training so your team can use AI tools confidently and responsibly." },
      { icon: "🔍", label: "Tool & Vendor Evaluation", description: "Independent assessment of AI tools and vendors so you invest in the right ones." },
      { icon: "📐", label: "Implementation Planning & Oversight", description: "A clear plan — and oversight — for turning strategy into shipped initiatives." },
    ],
    whoItsFor: [
      "Businesses exploring AI but unsure where to start or what to prioritize",
      "Leadership teams that need AI governance, policy, and risk frameworks in place",
      "Operations leaders who want a structured AI roadmap instead of ad-hoc experiments",
      "Organizations that have tried AI tools before but haven't seen meaningful ROI",
      "Companies preparing for AI-related compliance, audit, or governance requirements",
      "Businesses that want outside expertise before committing budget to AI initiatives",
    ],
    process: [
      { step: 1, title: "Discovery & Assessment", description: "Review your operations, tools, data, and current AI usage to identify realistic opportunities.", duration: "1–2 weeks" },
      { step: 2, title: "Opportunity Mapping & Prioritization", description: "Score AI opportunities by effort, cost, risk, and potential ROI.", duration: "1 week" },
      { step: 3, title: "Governance & Policy Design", description: "Establish ownership, approval processes, and AI usage rules for the business.", duration: "1–2 weeks" },
      { step: 4, title: "Roadmap Development", description: "Build a sequenced, prioritized roadmap for AI adoption across the business.", duration: "1–2 weeks" },
      { step: 5, title: "Training & Handoff", description: "Train leadership and staff, and hand off a clear plan for implementation.", duration: "1–2 weeks" },
    ],
    faq: [
      { q: "We don't know anything about AI yet — is this still useful for us?", a: "Yes — this is the most common starting point. We meet you where you are and translate AI capabilities into plain business terms before any technical work begins." },
      { q: "How is this different from your Fractional CAIO service?", a: "AI Transformation & Advisory is a defined engagement that produces a roadmap, governance framework, and training. Fractional CAIO is ongoing executive leadership with ongoing strategy sessions, implementation oversight, and reporting. Many clients start here and move into Fractional CAIO." },
      { q: "Will you also build the AI solutions you recommend?", a: "We can. Many clients move directly from this engagement into our Custom AI & Software Development service to implement the highest-priority initiatives." },
      { q: "How long does a typical engagement take?", a: "Most assessments and roadmaps are delivered in 4–8 weeks, depending on the size of the business and number of departments involved." },
      { q: "Do you work with regulated industries?", a: "Yes. We've built AI governance frameworks for clients in legal, healthcare, and financial services, with compliance requirements factored into every recommendation." },
    ],
    relatedServices: ["fractional-caio", "ai-consulting", "custom-ai-software-development"],
  },
  {
    slug: "custom-ai-software-development",
    title: "Custom AI & Software Development",
    heroTitle: "Custom AI & Software Development — Build the Tools Your Business Actually Needs",
    heroSub:
      "Custom software, automation solutions, AI-powered applications, and digital products built around your business — not the other way around.",
    metaTitle: "Custom AI & Software Development Canada | AI-Powered Applications & Automation",
    metaDescription:
      "Custom AI and software development for Canadian businesses. AI-powered applications, automation solutions, and digital products built and shipped by Audax Ventures.",
    description:
      "Strategy without execution doesn't move the needle. We design and build custom software, AI-powered applications, and automation solutions tailored to your exact workflows — whether that's a customer-facing product, an internal tool, or an AI feature embedded directly into how your team already works.",
    whatsIncluded: [
      { icon: "🛠️", label: "Custom Software Development", description: "Purpose-built applications when off-the-shelf software doesn't fit your business." },
      { icon: "🤖", label: "AI-Powered Applications", description: "LLM integrations, AI features, and intelligent automation built into your product." },
      { icon: "🔄", label: "Process Automation", description: "Automate manual, repetitive work across operations, sales, and admin." },
      { icon: "📊", label: "Internal Tools & Dashboards", description: "Custom dashboards and internal tools that replace spreadsheets and disconnected systems." },
      { icon: "🔗", label: "Integrations & APIs", description: "Connect your existing systems and data sources into one coherent workflow." },
      { icon: "🚀", label: "Ongoing Support & Iteration", description: "Continued development, monitoring, and improvement after launch." },
    ],
    whoItsFor: [
      "Businesses whose workflows have outgrown spreadsheets and off-the-shelf tools",
      "Companies that want AI features built directly into their product or internal stack",
      "Founders building an MVP or scalable SaaS platform",
      "Operations teams looking to automate manual, repetitive processes",
      "Businesses needing custom integrations between existing systems",
      "Organizations that have already completed AI strategy work and are ready to build",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Requirements, user research, scope, and technical feasibility — we align on what to build and why before writing a line of code.", duration: "1–2 weeks" },
      { step: 2, title: "UI/UX Design", description: "Wireframes, prototypes, and pixel-perfect Figma designs reviewed with your team before development starts.", duration: "1–2 weeks" },
      { step: 3, title: "Core Development", description: "Agile 2-week sprints with a working demo at the end of each. You see progress and provide feedback throughout.", duration: "4–12 weeks" },
      { step: 4, title: "DevOps & Infrastructure", description: "CI/CD pipeline, cloud deployment, monitoring, and security hardening — production-ready from day one.", duration: "1–2 weeks" },
      { step: 5, title: "Ongoing Support", description: "Post-launch retainers for bug fixes, performance optimization, and new feature development as you grow.", duration: "Ongoing" },
    ],
    techStack: ["Next.js / React", "Node.js", "Python", "Commercial & open-source LLMs", "PostgreSQL", "Cloud infrastructure (AWS / GCP)"],
    faq: [
      { q: "How is this different from your AI Transformation & Advisory service?", a: "Advisory produces the strategy, roadmap, and governance. This service is where we actually build and ship the software and AI solutions — many clients move from one into the other." },
      { q: "Do we own the code and IP?", a: "Yes, always. Full source code and IP transfer on every engagement — no exceptions." },
      { q: "Can you integrate AI into our existing product?", a: "Yes. We regularly add LLM-powered features, RAG systems, and automation directly into existing codebases without requiring a rebuild." },
      { q: "What if we just need a custom internal tool, not a customer-facing product?", a: "That's a common engagement for us. Internal tools and dashboards that replace spreadsheets or manual processes are often the fastest path to measurable ROI." },
      { q: "How long does a typical build take?", a: "Most custom builds take 6–16 weeks depending on scope. We'll give you a clear timeline and fixed-price phases before any work begins." },
    ],
    relatedServices: ["mvp-development", "saas-development", "ai-consulting", "process-automation"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    heroTitle: "Digital Marketing — Acquire Customers, Not Just Traffic",
    heroSub:
      "Performance marketing, SEO, and content strategy for software companies and startups that want customers — not vanity metrics.",
    metaTitle: "Digital Marketing Agency Canada | SEO, Paid Ads & Content for SaaS",
    metaDescription:
      "Digital marketing services for SaaS and software companies. SEO, paid search, paid social, content marketing, and conversion optimization. Book a free call.",
    description:
      "Marketing for software companies is different from marketing for consumer brands. Buyers are skeptical, sales cycles are longer, and trust is earned through content and evidence — not glossy ads. We specialize in marketing for technical products and work closely with your product team to tell your story in a way that converts.",
    whatsIncluded: [
      { icon: "🔍", label: "Technical SEO & Content", description: "Keyword research, content strategy, and long-form articles that rank and convert." },
      { icon: "📢", label: "Paid Search", description: "Intent-based SEM campaigns with proper tracking and conversion optimization." },
      { icon: "💼", label: "LinkedIn Advertising", description: "B2B audience targeting for SaaS and enterprise software." },
      { icon: "📧", label: "Email Marketing", description: "Drip sequences, newsletter strategy, and lifecycle email programs." },
      { icon: "📊", label: "Analytics & Attribution", description: "Full-funnel tracking, UTM strategy, and revenue attribution reporting." },
      { icon: "🔄", label: "Conversion Rate Optimization", description: "Landing page testing, copy optimization, and funnel analysis." },
    ],
    whoItsFor: [
      "SaaS companies ready to invest in scalable customer acquisition",
      "Startups post-product/market fit looking to scale growth",
      "Software companies whose engineering team is stronger than their marketing",
      "Agencies and service businesses in the technology sector",
    ],
    process: [
      { step: 1, title: "Marketing Audit", description: "Review current acquisition channels, conversion rates, and competitive positioning.", duration: "1 week" },
      { step: 2, title: "Strategy & Channel Selection", description: "Define the channels and tactics most likely to hit your growth goals.", duration: "1 week" },
      { step: 3, title: "Campaign Setup & Content Creation", description: "Build campaigns, create content, and set up tracking infrastructure.", duration: "2–3 weeks" },
      { step: 4, title: "Launch & Optimization", description: "Run campaigns with regular optimization cycles based on performance data.", duration: "Ongoing" },
      { step: 5, title: "Monthly Reporting", description: "Revenue-focused reporting with clear attribution and next-month priorities.", duration: "Monthly" },
    ],
    techStack: ["Paid advertising platforms", "Marketing automation", "SEO tooling", "Analytics platforms", "Session-recording tools", "Email marketing platforms"],
    faq: [
      { q: "What budget do we need for paid advertising?", a: "Ad spend requirements vary by channel, industry, and competitive landscape. We'll recommend a realistic budget during our strategy session — one that can generate statistically meaningful data without wasting your money." },
      { q: "How long before we see results?", a: "Paid ads show results in 30–60 days. SEO typically shows meaningful traffic growth in 4–6 months. We focus on quick wins in the first 90 days while building sustainable long-term channels." },
      { q: "Do you work with early-stage startups?", a: "Yes, but we're honest: if you haven't found product/market fit yet, marketing spend is premature. We'll tell you this upfront rather than take your money." },
      { q: "Do you create the content?", a: "Yes. Our team includes experienced content writers who specialize in SaaS, software, and technical topics." },
      { q: "Can you work with our existing marketing team?", a: "Absolutely. We often act as a strategic overlay or take specific channels while your team handles others." },
    ],
    relatedServices: ["website-development", "saas-development", "custom-software-development"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
