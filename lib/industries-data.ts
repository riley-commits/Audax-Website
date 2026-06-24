export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustrySolution {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryCaseHighlight {
  stat: string;
  label: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  heroTitle: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  challenges: string[];
  solutions: IndustrySolution[];
  caseHighlights: IndustryCaseHighlight[];
  whoWeServe: string[];
  relatedServices: string[];
  faq: IndustryFAQ[];
}

export const industriesData: IndustryData[] = [
  // ─── MAIN INDUSTRIES ───────────────────────────────────────────────────────
  {
    slug: "healthcare-medical",
    title: "Healthcare & Medical",
    icon: "🏥",
    tagline: "Clinical-grade software that improves patient outcomes and removes administrative drag from care teams.",
    heroTitle: "Software Built for Healthcare — Where Compliance Meets Clinical Efficiency",
    heroSub:
      "We build PIPEDA-compliant, HL7/FHIR-aware digital health tools for clinics, health networks, and medical device companies — from patient portals to AI-assisted diagnostics.",
    metaTitle: "Healthcare Software Development Canada",
    metaDescription:
      "Custom healthcare and medical software development in Canada. PIPEDA-compliant patient portals, EHR integrations, scheduling systems, and clinical decision tools. Book a free call.",
    overview:
      "Healthcare organizations face a paradox: the most human-centred industry in existence runs on some of the most fragmented, outdated software in any sector. Clinics juggle incompatible EHR systems, paper-based referral chains, and manual billing workflows that consume hours of clinical time that should go to patients. Audax Ventures builds software that untangles this complexity — purpose-built for the operational realities of Canadian healthcare, with privacy and compliance baked in from the first line of code.\n\nOur healthcare clients range from single-location family practices to multi-site specialty networks and digital health startups commercializing novel diagnostics. We understand the difference between building a patient-facing application subject to PIPEDA and a clinical decision-support tool that must integrate cleanly with Epic or OSCAR. That regulatory and architectural literacy shortens delivery timelines and prevents the costly pivots that derail less experienced development teams.\n\nThe software we build in healthcare is not cosmetic. We focus relentlessly on measurable outcomes: reduced no-show rates through intelligent scheduling, lower administrative burden through automated documentation, and faster referral cycles through structured data exchange. Every feature is justified by its impact on patient experience or clinical throughput — not by what is technically interesting to build.",
    challenges: [
      "EHR fragmentation forces staff to re-enter data across multiple disconnected systems, creating errors and consuming hours of administrative time per day",
      "Manual appointment scheduling and paper-based referral workflows create bottlenecks that delay care and inflate overhead costs",
      "Compliance requirements (PIPEDA, provincial health privacy acts) make it difficult to move quickly without inadvertently introducing risk",
      "Patient communication still relies on phone and fax in most practices, generating no-shows, missed follow-ups, and poor engagement",
      "Reporting and utilization data is locked in siloed systems, making it nearly impossible to identify operational inefficiencies or demonstrate outcomes to funders",
    ],
    solutions: [
      {
        icon: "📋",
        title: "Patient Portal & Booking",
        description:
          "Self-service appointment booking, pre-visit intake forms, secure messaging, and lab result delivery — reducing inbound call volume by 30–50% in most deployments.",
      },
      {
        icon: "🔗",
        title: "EHR Integration Middleware",
        description:
          "HL7 v2 and FHIR R4 integration layers that connect your existing EHR to labs, pharmacies, referral networks, and internal tools without replacing your core system.",
      },
      {
        icon: "🤖",
        title: "Clinical Decision Support",
        description:
          "AI-assisted screening flags, risk stratification models, and evidence-based recommendation engines embedded directly into clinical workflows.",
      },
      {
        icon: "📊",
        title: "Operational Analytics Dashboards",
        description:
          "Real-time visibility into utilization, wait times, no-show rates, and revenue cycle performance — giving administrators the data to act, not just observe.",
      },
      {
        icon: "💊",
        title: "Prescription & Medication Management",
        description:
          "Digital prescription workflows, drug interaction checks, and refill management systems that reduce prescribing errors and streamline pharmacy communication.",
      },
      {
        icon: "📱",
        title: "Remote Patient Monitoring",
        description:
          "iOS and Android apps with Bluetooth device integration, symptom tracking, and automated alert escalation for chronic disease management programs.",
      },
    ],
    caseHighlights: [
      { stat: "8–12 wks", label: "Typical timeline to launch a production patient portal" },
      { stat: "100%", label: "PIPEDA-compliant architecture on every healthcare engagement" },
      { stat: "HL7 & FHIR", label: "EHR integration standards supported across major platforms" },
      { stat: "2–3 wks", label: "Discovery sprint covering compliance, EHR audit, and user research" },
    ],
    whoWeServe: [
      "Primary care and family medicine practices looking to reduce administrative overhead",
      "Specialty clinics (orthopedics, dermatology, mental health) digitizing referral and intake workflows",
      "Digital health startups building consumer or B2B health applications",
      "Health networks and hospital systems rolling out patient-facing digital services",
      "Medical device companies building companion software for connected hardware",
    ],
    relatedServices: [
      "mvp-development",
      "saas-development",
      "ai-consulting",
      "ios-development",
      "android-development",
    ],
    faq: [
      {
        q: "How do you handle PIPEDA and provincial health privacy requirements?",
        a: "Privacy compliance is an architecture decision, not an afterthought. We design data flows, storage, and access controls to meet PIPEDA and applicable provincial acts (PHIPA in Ontario, PIPA in BC/Alberta) from day one. We also document our privacy-by-design decisions so your compliance team has a clear audit trail.",
      },
      {
        q: "Can you integrate with our existing EHR system?",
        a: "Yes. We have direct experience integrating with OSCAR, TELUS PS Suite, Epic, and several provincial systems via HL7 v2 and FHIR R4. Integration complexity depends on what APIs or message feeds your EHR vendor exposes — we assess this in discovery before committing to a timeline.",
      },
      {
        q: "Do you build regulated medical device software?",
        a: "We can build software that accompanies or controls medical devices, but Health Canada's SaMD (Software as a Medical Device) classification requires a specific quality management approach. We are experienced in these requirements and will advise on whether your product needs a Class I–IV regulatory strategy.",
      },
      {
        q: "How long does a typical healthcare software project take?",
        a: "A focused patient portal or scheduling system typically launches in 8–12 weeks. EHR integration middleware with multiple data sources takes 12–20 weeks depending on API maturity. AI-assisted clinical tools require an additional data and model validation phase, typically adding 4–8 weeks.",
      },
    ],
  },

  {
    slug: "legal-professional-services",
    title: "Legal & Professional Services",
    icon: "⚖️",
    tagline: "Practice management and client delivery software built for the billing model and risk profile of professional firms.",
    heroTitle: "Legal & Professional Services Software — Tools That Bill Hours More Effectively",
    heroSub:
      "We build matter management systems, client portals, document automation tools, and billing platforms for law firms, accounting practices, and management consultancies.",
    metaTitle: "Legal & Professional Services Software Development",
    metaDescription:
      "Custom software for law firms, accounting practices, and professional services firms. Matter management, client portals, document automation, and billing tools. Book a free call.",
    overview:
      "Professional services firms face a distinctive technology challenge: the work product is knowledge delivered by people, which means software must enhance practitioner productivity without interfering with the professional judgment that clients are actually paying for. Tools that add friction, require constant data entry, or produce unreliable outputs are worse than no tools at all — they erode the confidence of the practitioners who need to adopt them.\n\nAudax Ventures has built technology for law firms, accounting practices, and management consultancies that takes this seriously. Our matter management systems are designed around how lawyers and paralegals actually work, not around how a product manager imagined they should work. Our document automation tools handle the genuinely complex precedent logic that legal documents require. Our client portals provide the transparency and communication channels that clients expect without creating professional obligation ambiguity for the firm.\n\nWe also understand the specific data sensitivity and conflict-of-interest management requirements that professional services firms face. Solicitor-client privilege, CPA confidentiality obligations, and consulting engagement confidentiality all impose constraints on how data is stored, who can access it, and how it is transmitted. Every platform we build for professional services clients includes the access controls, audit logging, and data architecture that these obligations require.",
    challenges: [
      "Time capture is inconsistent and after-the-fact, meaning billable hours are routinely lost between when work is performed and when it is recorded",
      "Matter and engagement files are distributed across email, document management systems, and shared drives — making it difficult to find what you need or to onboard a new team member to an active file",
      "Document production relies on manual precedent or template assembly that is slow, error-prone, and inconsistent across practitioners at the same firm",
      "Client communication happens through email with no central record, creating risk when key communications are in an individual's inbox rather than the matter or client file",
      "Business development and client relationship management is informal and undocumented, meaning firm relationships live with individuals rather than with the firm",
      "Tax season and year-end engagement cycles create extreme workload spikes that manual document collection and spreadsheet tracking cannot absorb without errors or burnout",
    ],
    solutions: [
      {
        icon: "📂",
        title: "Matter & Case Management",
        description:
          "Centralized matter files with task management, deadline tracking, team assignment, document linking, and matter-level communication history — accessible from any device.",
      },
      {
        icon: "⏱️",
        title: "Time Tracking & Billing",
        description:
          "One-click time capture with matter and task code assignment, automated timesheet reminders, draft bill review workflows, and integration with accounting systems for AR management.",
      },
      {
        icon: "📄",
        title: "Document Automation",
        description:
          "Precedent-based document assembly with conditional logic, data field population, version control, and e-signature integration — reducing document drafting time by 60–80%.",
      },
      {
        icon: "🏢",
        title: "Client Portal & Extranet",
        description:
          "Branded client-facing portal for document sharing, matter status updates, invoice review, secure messaging, and e-signature completion — reducing inbound client calls.",
      },
      {
        icon: "🤝",
        title: "Business Development CRM",
        description:
          "Relationship tracking, opportunity pipeline management, proposal version control, and client contact history — giving firm leadership visibility into the business development funnel.",
      },
      {
        icon: "🤖",
        title: "AI-Assisted Research & Drafting",
        description:
          "Retrieval-augmented AI tools trained on your firm's precedents, workpapers, and knowledge base — accelerating legal research, tax research, first-draft generation, and contract or return review without replacing practitioner judgment.",
      },
      {
        icon: "🧾",
        title: "Tax Workflow & Client Document Collection",
        description:
          "Secure client document upload portals, automated checklist and engagement letter tracking, and status dashboards built for accounting and CPA firms managing high-volume tax season and year-end workloads.",
      },
    ],
    caseHighlights: [
      { stat: "8 weeks", label: "Time to launch a full client portal and matter or engagement management system" },
      { stat: "Privilege-safe", label: "Matter and engagement-level data isolation and access control built into every platform" },
      { stat: "e-Sign ready", label: "DocuSign and HelloSign integration built into every client portal" },
      { stat: "100%", label: "IP and source code owned by your firm at project completion" },
    ],
    whoWeServe: [
      "Boutique and mid-size law firms seeking to modernize practice management without enterprise software costs",
      "Accounting and CPA practices automating client onboarding, engagement letters, and reporting",
      "Management consultancies building client delivery and engagement management platforms",
      "In-house legal teams building matter tracking and outside counsel management tools",
      "Legal tech startups building B2B or B2C products for the legal market",
    ],
    relatedServices: [
      "internal-tools",
      "crm-systems",
      "process-automation",
      "ai-consulting",
    ],
    faq: [
      {
        q: "How do you handle solicitor-client privilege and data confidentiality requirements?",
        a: "All platforms we build for legal clients enforce strict role-based access control — staff see only the matters they are assigned to, and client data is isolated at the database level. We also implement comprehensive access audit logs, encrypted storage, and can support on-premise or private cloud deployments where clients require data residency control.",
      },
      {
        q: "Can you integrate with our existing practice or firm management software?",
        a: "It depends on what you're running. On the legal side, we have integrated with Clio, PCLaw, and Actionstep via their APIs. On the accounting side, we have integrated with QuickBooks, Xero, and CCH via their APIs. For systems without APIs, we can build file-based integration via exports. We assess integration feasibility in discovery.",
      },
      {
        q: "Is your document automation sophisticated enough for complex legal precedents?",
        a: "Yes. We build document automation that handles conditional clauses, nested logic, multi-party signature routing, and jurisdiction-specific variations. We work with your precedents as they exist — not generic templates — so the output reflects your firm's actual drafting standards.",
      },
      {
        q: "How do you handle AI tools in a professional liability context?",
        a: "Every AI feature we build for legal or accounting clients includes practitioner review steps — AI drafts are clearly marked as drafts requiring review, citations or source documents are provided for any legal, factual, or financial assertions, and all AI output is logged for audit purposes. We do not build systems that present AI output as authoritative without practitioner or preparer sign-off.",
      },
    ],
  },

  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    icon: "🏗️",
    tagline: "Project management and deal tracking software built for the pace and complexity of property development.",
    heroTitle: "Real Estate & Construction Software — From Land Acquisition to Certificate of Occupancy",
    heroSub:
      "We build the project tracking, document management, and stakeholder communication tools that keep complex development projects on schedule, on budget, and out of litigation.",
    metaTitle: "Real Estate & Construction Software Development",
    metaDescription:
      "Custom software for real estate developers, general contractors, and property managers. Project tracking, document management, and deal pipelines. Book a free call.",
    overview:
      "Real estate and construction projects generate enormous quantities of information — RFIs, submittals, change orders, drawings, inspection reports, contracts, and financial projections — across dozens of stakeholders who all need different views of that information at different times. Most project teams manage this complexity with a combination of email, shared drives, and spreadsheets, creating version confusion, accountability gaps, and the kind of documentation failures that end up in dispute resolution.\n\nAudax Ventures builds purpose-built software for real estate developers, general contractors, and property managers who have outgrown generic project management tools. We have built deal pipeline systems for land acquisition teams, construction progress tracking platforms for GCs managing 20+ concurrent projects, and tenant communication portals for property management companies operating thousands of units. Each of these tools was designed around the actual decision-making process — not around what a product manager in San Francisco thought the workflow should be.\n\nThe construction industry is also changing rapidly. Clients increasingly expect real-time project dashboards accessible on mobile devices from the site. Lenders and equity partners want financial reporting that doesn't require a CFO to interpret. Regulatory agencies are moving toward digital permit submission and inspection scheduling. We build for this reality — not for the industry as it was ten years ago.",
    challenges: [
      "Project documentation is scattered across email threads, shared drives, and physical site files — making it nearly impossible to answer a simple question about current drawing revisions",
      "Change order management is manual and slow, creating disputes about scope, cost, and schedule that are difficult to resolve without a clear audit trail",
      "Subcontractor coordination relies on phone calls and text messages, leaving no traceable record of instructions given or commitments made",
      "Financial reporting lags actual project conditions by weeks, preventing project owners from identifying cost overruns before they become unrecoverable",
      "Tenant and buyer communication during construction and lease-up is unstructured, generating complaints and regulatory risk from missed notices",
    ],
    solutions: [
      {
        icon: "📁",
        title: "Document Control & Drawing Management",
        description:
          "Centralized drawing register with version control, distribution lists, and RFI/submittal workflows — so every stakeholder is always working from the current revision.",
      },
      {
        icon: "🔄",
        title: "Change Order Management",
        description:
          "Digital change event logging, pricing workflows, owner approval chains, and schedule impact tracking — creating a bulletproof audit trail from field observation to signed CO.",
      },
      {
        icon: "🏘️",
        title: "Deal Pipeline & Land Acquisition CRM",
        description:
          "Custom CRM for tracking site acquisitions from initial contact through due diligence, LOI, PSA, and close — with integrated financial modeling inputs and timeline tracking.",
      },
      {
        icon: "📊",
        title: "Project Financial Dashboard",
        description:
          "Real-time budget vs. actual reporting, draw schedule tracking, lender reporting packages, and variance alerts — giving ownership teams visibility without waiting for month-end.",
      },
      {
        icon: "🏢",
        title: "Tenant & Buyer Portal",
        description:
          "Branded self-service portal for construction updates, move-in coordination, maintenance requests, and document delivery — reducing inbound calls and improving resident satisfaction.",
      },
      {
        icon: "📱",
        title: "Site Inspection & Punch List App",
        description:
          "Mobile-first inspection tools with photo markup, deficiency assignment, trade notification, and completion tracking — replacing clipboards with a closed-loop digital workflow.",
      },
    ],
    caseHighlights: [
      { stat: "12 weeks", label: "Delivery timeline for a full construction project tracking platform" },
      { stat: "Mobile-first", label: "Every site-facing tool built for tablets and intermittent connectivity" },
      { stat: "Offline-ready", label: "Site apps designed to function without a reliable data connection" },
      { stat: "100%", label: "Code and IP ownership transferred to you at project completion" },
    ],
    whoWeServe: [
      "Residential and commercial real estate developers managing multiple concurrent projects",
      "General contractors coordinating large subcontractor networks across complex builds",
      "Property management companies operating multi-unit residential or commercial portfolios",
      "Land acquisition and development teams tracking active deals and entitlement timelines",
      "Real estate investment firms requiring portfolio-level financial reporting and asset tracking",
    ],
    relatedServices: [
      "internal-tools",
      "crm-systems",
      "saas-development",
      "process-automation",
    ],
    faq: [
      {
        q: "Can your software integrate with existing accounting systems like Yardi, Procore, or Sage?",
        a: "Yes. We have integrated with Yardi, Sage 300 CRE, QuickBooks, and Procore via their published APIs and, where necessary, file-based exports. Our approach is to extend rather than replace existing systems of record, so your accounting team keeps working in the tools they know.",
      },
      {
        q: "How do you handle the fact that construction teams are on site, not at desks?",
        a: "Mobile-first is non-negotiable for construction tooling. We build progressive web apps or native iOS/Android apps optimized for outdoor readability, intermittent connectivity, and one-handed use. Offline sync is a standard requirement for any site-facing feature.",
      },
      {
        q: "We manage a mix of residential and commercial properties — can one platform serve both?",
        a: "Yes, with appropriate configuration. The underlying data model for project tracking and tenant management can support both asset classes. We typically build a configurable platform with property-type-specific views rather than separate applications.",
      },
      {
        q: "What about data security given the sensitive financial and legal information involved?",
        a: "All platforms we build use role-based access control so that subcontractors see only their own scopes, lenders see only financial reporting, and internal teams have full access. Data is encrypted at rest and in transit, and we can support SSO integration with your identity provider.",
      },
    ],
  },

  // ─── OTHER INDUSTRIES ───────────────────────────────────────────────────────
  {
    slug: "fintech-finance",
    title: "FinTech & Finance",
    icon: "💳",
    tagline: "Compliant, secure financial software that moves at the speed of modern capital markets.",
    heroTitle: "FinTech Software Development — Regulatory-Grade Builds Without the Big-Bank Timeline",
    heroSub:
      "We build payment platforms, lending tools, wealth management dashboards, and financial data pipelines that meet FINTRAC, PCI DSS, and SOC 2 requirements without sacrificing speed to market.",
    metaTitle: "FinTech Software Development Canada",
    metaDescription:
      "Custom FinTech and financial software development in Canada. Payment platforms, lending tools, wealth dashboards, and compliance-ready architectures. Book a free call.",
    overview:
      "The financial services industry is simultaneously one of the most regulated and one of the most rapidly disrupted sectors in the economy. Incumbents move slowly because compliance risk is real; challengers move fast and sometimes discover that risk the hard way. Audax Ventures occupies the middle ground: we build financial software at startup speed with the architectural discipline that regulated environments demand.\n\nOur FinTech clients include payment processors, alternative lenders, wealth management platforms, accounting automation startups, and financial data aggregators. Across these engagements, we have developed deep familiarity with FINTRAC's AML/KYC obligations, PCI DSS payment card standards, OSC registration and reporting requirements, and the open banking landscape in Canada. We bring this regulatory context to every architecture decision — not as a compliance checkbox, but as a competitive differentiator.\n\nThe financial software we build is also held to a higher standard for reliability and auditability. Every transaction must be traceable. Every access event must be logged. Every integration with a payment processor or bank must be tested against realistic failure scenarios. We enforce these standards through code review, automated testing, and architecture review — not through hope.",
    challenges: [
      "AML/KYC onboarding friction drives customer abandonment before the first transaction, but reducing friction without cutting compliance corners requires careful orchestration",
      "Payment reconciliation across multiple processors, currencies, and settlement windows is done manually in spreadsheets, creating errors and delays in financial reporting",
      "Legacy core banking integrations are slow, poorly documented, and fragile — making it expensive to add new products or distribution channels",
      "Fraud detection relies on static rule sets that generate too many false positives, damaging customer experience without materially improving loss rates",
      "Regulatory reporting (FINTRAC, OSFI, provincial securities regulators) is manually assembled from multiple data sources, consuming compliance team capacity and introducing risk",
    ],
    solutions: [
      {
        icon: "🔐",
        title: "KYC/AML Onboarding Workflows",
        description:
          "Automated identity verification, document collection, sanctions screening, and risk scoring — integrated with providers like Persona, Jumio, or Flinks to balance compliance with conversion.",
      },
      {
        icon: "💳",
        title: "Payment Processing & Ledger",
        description:
          "Multi-processor payment orchestration (Stripe, Moneris, Bambora), immutable double-entry ledger, multi-currency support, and automated reconciliation pipelines.",
      },
      {
        icon: "📈",
        title: "Wealth & Portfolio Dashboard",
        description:
          "Account aggregation, portfolio performance analytics, tax reporting tools, and client-facing portals built for RIAs, robo-advisors, and hybrid wealth platforms.",
      },
      {
        icon: "🤖",
        title: "Lending & Underwriting Automation",
        description:
          "Credit decision engines, bureau integration (Equifax, TransUnion), cash flow underwriting using open banking data, and loan origination system APIs.",
      },
      {
        icon: "📊",
        title: "Regulatory Reporting Automation",
        description:
          "Automated FINTRAC STR/LCTR generation, OSFI data submission pipelines, and audit-ready transaction logs — replacing manual compliance report assembly.",
      },
      {
        icon: "🛡️",
        title: "Fraud Detection & Risk Scoring",
        description:
          "ML-based transaction risk scoring, device fingerprinting, velocity checks, and configurable rule engines that reduce false positive rates while improving fraud catch rates.",
      },
    ],
    caseHighlights: [
      { stat: "6 weeks", label: "Time to launch a FINTRAC-compliant transaction monitoring module" },
      { stat: "SOC 2-ready", label: "Architecture built to SOC 2-compatible standards from day one" },
      { stat: "PCI-scoped", label: "Payment flows designed to minimize PCI DSS scope by default" },
      { stat: "100%", label: "IP and source code owned by you from the first commit" },
    ],
    whoWeServe: [
      "FinTech startups building payment, lending, or investment products for Canadian or US markets",
      "Credit unions and alternative lenders digitizing origination and servicing workflows",
      "Accounting and bookkeeping SaaS companies building financial automation features",
      "Wealth management firms building client-facing portals and reporting dashboards",
      "Financial data companies building aggregation, enrichment, or analytics platforms",
    ],
    relatedServices: [
      "saas-development",
      "mvp-development",
      "ai-consulting",
      "process-automation",
    ],
    faq: [
      {
        q: "How do you approach PCI DSS compliance for payment processing?",
        a: "We architect payment flows to minimize PCI scope — typically using tokenization and hosted fields from your payment processor so cardholder data never touches your servers. For clients who need to store or process card data directly, we can design and document a PCI DSS-compliant architecture, though formal QSA certification is outside our scope.",
      },
      {
        q: "Can you help us meet FINTRAC obligations?",
        a: "Yes. We build transaction monitoring, suspicious transaction reporting workflows, and large cash transaction logging that align with FINTRAC's current guidance. We work alongside your compliance counsel — we handle the technical implementation, your legal team owns the regulatory interpretation.",
      },
      {
        q: "Do you have experience with Canadian open banking integrations?",
        a: "Yes. We have integrated with Flinks, Plaid (for US), and direct institution APIs for cash flow analysis and account verification. As Canada's open banking framework matures, we are tracking the regulatory timeline and building our integration patterns accordingly.",
      },
      {
        q: "What security standards do you build to?",
        a: "We build financial software to SOC 2 Type II-compatible standards: encryption at rest and in transit, comprehensive access logging, role-based access control, penetration testing prior to launch, and documented incident response procedures. For clients pursuing formal SOC 2 certification, we provide the technical documentation their auditors will need.",
      },
    ],
  },

  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    icon: "🛒",
    tagline: "Commerce platforms and retail operations tools built to convert browsers into buyers and buyers into loyalists.",
    heroTitle: "Retail & E-Commerce Software — Beyond the Off-the-Shelf Platform",
    heroSub:
      "We build custom storefronts, headless commerce architectures, loyalty programs, and inventory systems for retailers who have outgrown what Shopify or WooCommerce can deliver out of the box.",
    metaTitle: "E-Commerce & Retail Software Development Canada",
    metaDescription:
      "Custom e-commerce and retail software development. Headless commerce, loyalty platforms, inventory systems, and Shopify extensions. Book a free strategy call.",
    overview:
      "The retail technology landscape in 2026 is bifurcated: smaller merchants use off-the-shelf platforms that handle 80% of their needs, while larger or more complex retailers find themselves constrained by the limitations of those platforms at exactly the moment their growth demands more. Custom pricing rules, complex inventory logic, multi-channel fulfilment, and B2B ordering workflows simply cannot be built cleanly inside a Shopify or WooCommerce plugin architecture.\n\nAudax Ventures works with retailers and e-commerce operators at the point of that transition. We build custom Shopify apps and extensions that add functionality the platform doesn't natively support, headless storefronts on Next.js for performance-critical or highly customized shopping experiences, and entirely bespoke commerce platforms where the business model genuinely demands it. We also build the back-office systems that retailers need but platforms don't provide: supplier onboarding portals, multi-warehouse inventory management, loyalty program engines, and merchandising analytics dashboards.\n\nOur retail clients span DTC brands, multi-location specialty retailers, B2B distributors, and marketplace operators. Each has a different set of constraints, but they share a common problem: their technology stack is limiting growth, and they need a development partner who understands commerce — not just code.",
    challenges: [
      "Multi-channel inventory management across brick-and-mortar, online, and marketplace channels creates overselling, stockouts, and reconciliation nightmares",
      "Loyalty and rewards programs are either too generic (points for everything) or too rigid to implement the nuanced rules the business actually wants",
      "B2B ordering workflows — tiered pricing, account-based catalogues, purchase order approval chains — cannot be cleanly implemented inside consumer-facing platforms",
      "Returns and exchange management is manual, slow, and generates customer service overhead that grows linearly with revenue",
      "Merchandising decisions are made based on gut feel and lagging reports rather than real-time demand signals, margin analysis, and inventory velocity data",
    ],
    solutions: [
      {
        icon: "🛍️",
        title: "Headless & Custom Storefronts",
        description:
          "Next.js storefronts powered by Shopify, Commerce.js, or custom APIs — delivering sub-2s load times, full design freedom, and conversion-optimized checkout flows.",
      },
      {
        icon: "📦",
        title: "Multi-Warehouse Inventory Management",
        description:
          "Real-time inventory tracking across locations, automated reorder triggers, supplier purchase order generation, and 3PL integration for fulfilment operations.",
      },
      {
        icon: "⭐",
        title: "Loyalty & Rewards Engine",
        description:
          "Configurable points, tiers, referral programs, and reward redemption logic — with customer-facing portal and CRM integration for targeted loyalty campaigns.",
      },
      {
        icon: "🏢",
        title: "B2B Commerce Portal",
        description:
          "Account-based pricing, custom catalogues, purchase order workflows, net-terms invoicing, and rep assignment — all accessible through a branded self-service portal.",
      },
      {
        icon: "🔄",
        title: "Returns & Exchange Management",
        description:
          "Self-service return initiation, automated eligibility checking, label generation, restocking workflows, and exchange order creation — reducing returns processing cost per unit.",
      },
      {
        icon: "📊",
        title: "Merchandising Analytics",
        description:
          "Product margin analysis, sell-through rates, demand forecasting, and category performance dashboards — giving buyers and merchandisers the data to make better purchasing decisions.",
      },
    ],
    caseHighlights: [
      { stat: "10 weeks", label: "Time to launch a full headless commerce storefront" },
      { stat: "< 2s", label: "Target page load time on Next.js headless storefronts" },
      { stat: "Shopify + custom", label: "We extend your existing platform or build bespoke — your choice" },
      { stat: "100%", label: "Code ownership and source access transferred at project close" },
    ],
    whoWeServe: [
      "DTC brands on Shopify who need custom functionality beyond what apps can provide",
      "Multi-location specialty retailers building unified online and in-store commerce experiences",
      "B2B distributors and wholesalers moving from rep-managed to self-service ordering",
      "Marketplace operators building multi-vendor commerce platforms",
      "Retailers with complex inventory or pricing logic that off-the-shelf platforms cannot support",
    ],
    relatedServices: [
      "ecommerce-development",
      "saas-development",
      "crm-systems",
      "process-automation",
    ],
    faq: [
      {
        q: "Can you build on top of our existing Shopify store?",
        a: "Yes. We build custom Shopify apps (public or private), Shopify Functions for custom discounting and fulfilment logic, and headless storefronts using the Storefront API. We can extend what you have rather than starting from scratch if your current store has equity we should preserve.",
      },
      {
        q: "What does a headless commerce project cost?",
        a: "Cost depends on design complexity, the number of custom components, and integration requirements. We scope every project in detail before committing to a number — book a free call and we'll give you a clear picture.",
      },
      {
        q: "Can you integrate with our ERP or warehouse management system?",
        a: "Yes. We have integrated with SAP, NetSuite, Brightpearl, Fishbowl, and several 3PL APIs. The integration pattern depends on what APIs or data formats your system supports — we assess this in discovery.",
      },
      {
        q: "How do you handle peak traffic events like Black Friday?",
        a: "Headless architectures with edge-deployed storefronts (Vercel Edge Network, Cloudflare) handle traffic spikes gracefully by design. We also load test before major traffic events and set up auto-scaling for any backend services that could become bottlenecks.",
      },
    ],
  },

  {
    slug: "education-edtech",
    title: "Education & EdTech",
    icon: "🎓",
    tagline: "Learning platforms and institutional software built to scale from a classroom to a continent.",
    heroTitle: "EdTech Software Development — Learning Platforms That Actually Get Used",
    heroSub:
      "We build LMS platforms, assessment tools, student information systems, and AI-powered tutoring applications for K–12 institutions, post-secondary schools, and EdTech companies.",
    metaTitle: "EdTech & Education Software Development Canada",
    metaDescription:
      "Custom EdTech and education software development. LMS platforms, assessment tools, student portals, and AI-powered learning applications. Book a free call.",
    overview:
      "Education technology has seen extraordinary investment and extraordinary failure in equal measure. The graveyard of poorly adopted LMS platforms, confusing student portals, and technically impressive but pedagogically unsound tools is extensive. Audax Ventures approaches EdTech development with a clear hierarchy: learning outcomes first, user experience second, technology third. Software that teachers don't use and students find confusing is not educational technology — it's expensive shelf-ware.\n\nWe build for two distinct client types in education. The first is institutional: K–12 school boards, colleges, and universities that need custom student information systems, registration tools, parent communication platforms, and operational dashboards that integrate with their existing technology ecosystem. The second is commercial EdTech: startups and scale-ups building B2C or B2B learning products — cohort-based courses, skills assessment platforms, corporate training systems, and AI-assisted tutoring applications.\n\nIn both contexts, we bring experience with FERPA/PIPEDA student data privacy requirements, the technical demands of synchronous video learning, the UX challenges of serving learners across a wide age and technical literacy range, and the integration complexity of connecting to existing SIS, LMS, and SSO systems that institutions have spent years accumulating.",
    challenges: [
      "Existing LMS platforms are feature-rich but pedagogically rigid — they support content delivery but not the interactive, adaptive, or cohort-based learning experiences modern courses require",
      "Student data is fragmented across SIS, LMS, gradebook, and communication tools — making it nearly impossible for advisors to get a complete picture of a student's progress",
      "Synchronous online learning tools (Zoom, Teams) generate no useful learning data, while asynchronous LMS activity data is too coarse to drive meaningful intervention",
      "Assessment integrity in online environments is difficult to maintain without surveillance tools that students and instructors both resent",
      "Corporate training completion and skill development is tracked in spreadsheets, making it impossible to demonstrate ROI to L&D budget holders",
    ],
    solutions: [
      {
        icon: "📚",
        title: "Custom LMS & Course Platform",
        description:
          "Cohort-based or self-paced learning platforms with video hosting, interactive assessments, discussion forums, progress tracking, and completion certificates.",
      },
      {
        icon: "🤖",
        title: "AI-Powered Tutoring & Feedback",
        description:
          "LLM-based tutoring assistants, automated essay feedback, adaptive practice question generation, and learning gap identification — all within institutional content guardrails.",
      },
      {
        icon: "👨‍🎓",
        title: "Student Information & Advising Portal",
        description:
          "Unified student profile aggregating academic history, course progress, attendance, intervention flags, and advisor notes — giving support staff a single source of truth.",
      },
      {
        icon: "📝",
        title: "Assessment & Exam Management",
        description:
          "Secure online assessment delivery, randomized question banks, automated grading for objective questions, rubric-based scoring for subjective work, and plagiarism detection integration.",
      },
      {
        icon: "🏢",
        title: "Corporate Training & Compliance Platform",
        description:
          "Employee training assignment, completion tracking, certification management, and skills inventory — with manager dashboards and HR system integration.",
      },
      {
        icon: "📊",
        title: "Learning Analytics Dashboard",
        description:
          "Engagement metrics, completion funnels, assessment performance analysis, at-risk student identification, and cohort comparison — turning learning data into actionable insights.",
      },
    ],
    caseHighlights: [
      { stat: "8 weeks", label: "Time to launch a cohort-based course platform for 500+ learners" },
      { stat: "FERPA & PIPEDA", label: "Student data privacy requirements built in from the first line of code" },
      { stat: "LTI-compatible", label: "Integrates with existing SIS and LMS platforms via open standards" },
      { stat: "100%", label: "IP and source code owned by the institution from day one" },
    ],
    whoWeServe: [
      "K–12 school boards and independent schools building custom parent and student portals",
      "Colleges and universities modernizing SIS, advising, and registration workflows",
      "EdTech startups building cohort-based, skills, or certification learning products",
      "Corporate L&D teams moving from spreadsheet-based training tracking to a proper platform",
      "Professional associations and licensing bodies managing continuing education requirements",
    ],
    relatedServices: [
      "saas-development",
      "mvp-development",
      "ai-consulting",
      "internal-tools",
    ],
    faq: [
      {
        q: "Can you integrate with our existing SIS or LMS?",
        a: "Yes. We have integrated with Blackboard, Canvas, Moodle, Banner, Ellucian Colleague, and PowerSchool via their published APIs and LTI standards. We build the integration layer so your existing systems remain authoritative while your new platform adds the functionality they lack.",
      },
      {
        q: "How do you handle student data privacy requirements?",
        a: "We build to FERPA requirements for US institutions and PIPEDA/provincial requirements for Canadian institutions from day one. This includes data residency requirements, parental consent workflows for under-18 students, and access logging for all student record views.",
      },
      {
        q: "Can you build AI tutoring tools that stay on-topic and within curriculum?",
        a: "Yes. We build retrieval-augmented generation (RAG) systems that ground AI responses in your course content, with configurable content guardrails, citation requirements, and instructor review workflows. We also implement usage logging so instructors can review AI interactions.",
      },
      {
        q: "How scalable are the platforms you build?",
        a: "We build on horizontally scalable cloud infrastructure (AWS, Vercel, GCP) designed to handle synchronous load spikes — the academic equivalent of Black Friday. We load test to expected peak concurrency before launch and provide monitoring dashboards so you see performance in real time.",
      },
    ],
  },

  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    icon: "🏨",
    tagline: "Guest experience and operations software that fills rooms, reduces friction, and drives repeat visits.",
    heroTitle: "Hospitality & Tourism Software — Technology That Earns Five-Star Reviews",
    heroSub:
      "We build reservation platforms, guest communication tools, property management integrations, and operator dashboards for hotels, resorts, tour operators, and hospitality groups.",
    metaTitle: "Hospitality & Tourism Software Development Canada",
    metaDescription:
      "Custom hospitality and tourism software. Reservation systems, guest portals, PMS integrations, and tour booking platforms. Book a free strategy call.",
    overview:
      "The hospitality industry delivers its product one guest experience at a time. Every friction point in the booking process, every missed housekeeping request, every front desk delay, and every impersonal piece of communication is a review waiting to happen. Technology in hospitality has one job: make the guest experience feel effortless while making the operation run efficiently enough to sustain the margins needed to invest in that experience.\n\nAudax Ventures builds hospitality technology for operators who understand this clearly. We have built direct booking engines for boutique hotels that wanted to reduce OTA commission dependency, mobile check-in and digital key systems for properties trying to eliminate front desk queues, and tour booking platforms for operators selling complex multi-day itineraries with variable capacity and dynamic pricing. We have also built the back-office systems — housekeeping management, maintenance request tracking, staff scheduling — that are invisible to guests but essential to the operation.\n\nThe hospitality sector is also navigating a significant shift in guest expectations. Travellers increasingly expect the same digital fluency from a boutique hotel that they get from a technology company. Contactless check-in, in-stay messaging, personalized recommendations, and digital concierge services are no longer differentiators — they are table stakes for properties competing in the upper-mid and luxury segments. We build these capabilities in a way that feels native to your brand, not like a third-party widget bolted onto your website.",
    challenges: [
      "OTA dependency is eroding margins — direct booking conversion is low because the property website and booking engine cannot compete with the OTA user experience",
      "Guest communication before and during the stay happens through fragmented channels (email, phone, WhatsApp, in-person) with no unified record",
      "Housekeeping and maintenance coordination is done by radio and paper, creating delays, missed rooms, and no accountability trail",
      "Revenue management relies on manual rate adjustments or expensive RMS software that doesn't reflect the property's actual competitive set",
      "Tour and activity booking involves complex capacity rules, guide assignment, equipment allocation, and weather-dependent scheduling that generic booking tools cannot handle",
    ],
    solutions: [
      {
        icon: "🏨",
        title: "Direct Booking Engine",
        description:
          "High-converting, mobile-optimized booking engine with real-time availability, dynamic pricing, package upsells, and loyalty member rates — integrated directly into your website.",
      },
      {
        icon: "📱",
        title: "Mobile Check-In & Digital Key",
        description:
          "Pre-arrival registration, ID verification, digital key provisioning (ASSA ABLOY, Dormakaba), and post-stay checkout — eliminating front desk queues for enrolled guests.",
      },
      {
        icon: "💬",
        title: "Unified Guest Messaging",
        description:
          "Centralized inbox aggregating SMS, email, WhatsApp, and in-app messages from guests — with automated pre-arrival sequences, in-stay request handling, and post-stay review prompts.",
      },
      {
        icon: "🗓️",
        title: "Tour & Activity Booking Platform",
        description:
          "Complex tour scheduling with capacity management, guide assignment, equipment inventory, pickup logistics, weather policy automation, and B2B agent access.",
      },
      {
        icon: "🧹",
        title: "Housekeeping & Maintenance Operations",
        description:
          "Room assignment and task management for housekeeping teams, maintenance request intake from guests or staff, priority routing, and completion reporting for management.",
      },
      {
        icon: "📊",
        title: "Revenue & Occupancy Dashboard",
        description:
          "Pickup reports, pace-to-budget analytics, competitive rate monitoring, and channel performance breakdowns — giving revenue managers the data to act on every day.",
      },
    ],
    caseHighlights: [
      { stat: "6 weeks", label: "Time to build and launch a boutique hotel guest portal" },
      { stat: "PMS-integrated", label: "Works with Opera, Mews, Cloudbeds, and major PMS platforms" },
      { stat: "Mobile-first", label: "Every guest-facing tool optimized for smartphones from the ground up" },
      { stat: "100%", label: "Code and IP ownership transferred to you at project completion" },
    ],
    whoWeServe: [
      "Boutique hotels and independent properties seeking to reduce OTA commission dependency",
      "Resort and lodge operators managing complex activity and amenity booking",
      "Tour operators offering multi-day itineraries with dynamic capacity and logistics",
      "Hospitality management groups overseeing multi-property portfolios",
      "Vacation rental operators and property management companies managing distributed inventory",
    ],
    relatedServices: [
      "website-development",
      "ecommerce-development",
      "crm-systems",
      "process-automation",
    ],
    faq: [
      {
        q: "Can you integrate with our Property Management System (PMS)?",
        a: "Yes. We have integrated with Opera, Mews, Cloudbeds, and several smaller PMS platforms via their APIs. Availability, rates, and reservation data flow bidirectionally so your PMS remains the system of record. We assess API maturity during discovery.",
      },
      {
        q: "Can your booking engine compete with OTA conversion rates?",
        a: "With the right design, price parity policy, and incentives (loyalty points, exclusive packages, complimentary add-ons), direct booking engines can and do outperform OTA conversion for warm traffic. We build conversion-optimized flows based on hospitality-specific UX research.",
      },
      {
        q: "How do you handle multi-language and multi-currency requirements for international guests?",
        a: "Multi-locale support is a standard feature of our hospitality builds. We implement next-intl for Next.js applications with automatic language detection, and integrate with payment processors that support multi-currency settlement and display.",
      },
      {
        q: "What about integration with channel managers like SiteMinder or Cloudbeds?",
        a: "Yes. Channel manager integration is a standard requirement for any property with OTA distribution. We connect to SiteMinder, Cloudbeds, and others via their APIs to ensure inventory and rate parity across all channels.",
      },
    ],
  },

  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "🏭",
    tagline: "Operations software that connects the shop floor to the boardroom — in real time.",
    heroTitle: "Manufacturing Software That Turns Shop Floor Data Into Competitive Advantage",
    heroSub:
      "From MES integrations and production scheduling to quality management and supplier portals, we build the operational software that modern manufacturers need to compete on throughput, quality, and cost.",
    metaTitle: "Manufacturing Software Development Canada",
    metaDescription:
      "Custom manufacturing software — MES, production scheduling, quality management, and supplier portals. Built for Canadian manufacturers. Book a free strategy call.",
    overview:
      "Modern manufacturing runs on real-time data, but most mid-market manufacturers still rely on ERP systems that were designed for batch reporting, spreadsheet-based production scheduling, and manual quality inspections. The gap between what the shop floor produces and what decision-makers see is measured in days — and in that gap lives waste, rework, missed delivery windows, and margin erosion.\n\nAudax Ventures builds the operational software layer that sits between your machines, your workforce, and your leadership team. We have delivered production scheduling tools, manufacturing execution systems, quality management platforms, and supplier collaboration portals for clients in precision machining, food processing, plastics, and industrial assembly. In each case, our starting point is the same: understand the actual workflow before writing a line of code.\n\nOur manufacturing clients typically come to us after a failed ERP customization, an off-the-shelf tool that doesn't match their process, or a growth phase that has outpaced their current systems. We build pragmatic, maintainable software that integrates with what you already have — including legacy PLCs, ERP systems, and SCADA infrastructure — rather than demanding a rip-and-replace approach your operations cannot absorb.",
    challenges: [
      "Production scheduling is done in spreadsheets, creating version conflicts, missed updates, and no real-time visibility into capacity or machine utilization",
      "Quality defects are caught late in the process — or by customers — because inspection data is recorded on paper and never analyzed for patterns",
      "Supplier lead times and inventory levels are tracked manually, making it impossible to anticipate shortages before they stop the line",
      "Maintenance is reactive rather than predictive, meaning unplanned downtime hits throughput targets at the worst possible moments",
      "Disconnected ERP, MES, and quality systems force supervisors to manually reconcile data from three places to answer one management question",
    ],
    solutions: [
      {
        icon: "📅",
        title: "Production Scheduling & Dispatch",
        description:
          "Drag-and-drop scheduling boards with real-time capacity constraints, machine availability, and job priority logic — replacing spreadsheets with a system your team will actually use.",
      },
      {
        icon: "🔧",
        title: "Preventive Maintenance Tracker",
        description:
          "Work order management, maintenance history logging, OEM schedule tracking, and IoT sensor integration for condition-based maintenance triggers.",
      },
      {
        icon: "✅",
        title: "Quality Management System (QMS)",
        description:
          "Digital inspection forms, non-conformance reporting, corrective action workflows, and SPC charting — with traceability from raw material to finished good.",
      },
      {
        icon: "🤝",
        title: "Supplier Collaboration Portal",
        description:
          "Secure web portal for purchase order acknowledgment, delivery confirmations, quality document submission, and two-way communication with your supplier base.",
      },
      {
        icon: "📊",
        title: "OEE & Production Analytics",
        description:
          "Overall Equipment Effectiveness dashboards pulling data from your MES, PLCs, or manual entry — giving supervisors and executives a shared view of throughput, downtime, and yield.",
      },
      {
        icon: "🏭",
        title: "MES & ERP Integration",
        description:
          "Middleware and API layers connecting shop floor systems (Ignition, FactoryTalk, custom PLCs) to your ERP (SAP, Oracle, Epicor) — eliminating the manual data entry that corrupts both systems.",
      },
    ],
    caseHighlights: [
      { stat: "10 weeks", label: "Typical delivery timeline for a production scheduling system" },
      { stat: "2-wk sprints", label: "Agile delivery with working demos at every milestone" },
      { stat: "ERP + MES", label: "Typical integration scope: shop floor systems connected to back office" },
      { stat: "100%", label: "IP and source code transferred to you at project close" },
    ],
    whoWeServe: [
      "Precision machining and metalworking shops scaling beyond spreadsheet-based scheduling",
      "Food and beverage manufacturers requiring lot traceability and SQF/HACCP documentation",
      "Plastics and composites manufacturers managing complex multi-press production schedules",
      "Industrial assembly operations seeking to reduce WIP inventory and improve on-time delivery",
      "Contract manufacturers needing customer-facing portals for order status and quality records",
    ],
    relatedServices: [
      "internal-tools",
      "process-automation",
      "crm-systems",
      "saas-development",
    ],
    faq: [
      {
        q: "Can you integrate with our existing ERP or PLC systems?",
        a: "Yes. We have integrated with SAP, Oracle, Epicor, and custom ERP systems via REST APIs, ODBC connections, and file-based interchange. For PLCs and SCADA systems, we work with OPC-UA, MQTT, and Modbus depending on what your hardware supports. We assess integration feasibility during discovery before committing to a scope.",
      },
      {
        q: "Do we need to replace our current ERP to use your software?",
        a: "No. We build the operational layer that fills the gaps your ERP was not designed for — scheduling boards, QMS, maintenance management — and integrate bidirectionally so your ERP remains the system of record for costing, invoicing, and inventory.",
      },
      {
        q: "How do you handle the reality that shop floor workers are not software users?",
        a: "We design for the shop floor context specifically: large touch targets for gloved hands, minimal data entry, barcode and QR scanning, and tablet-first UIs that work in noisy, high-traffic environments. We also conduct on-site observation sessions before design to understand the actual workflow.",
      },
      {
        q: "What does a typical manufacturing software engagement cost?",
        a: "Cost depends on the scope, number of integrations, and whether we're building from scratch or extending existing systems. Book a free scoping call and we'll give you a detailed estimate.",
      },
    ],
  },

  {
    slug: "transportation-logistics",
    title: "Transportation & Logistics",
    icon: "🚚",
    tagline: "Fleet management, dispatch, and supply chain visibility tools that keep freight moving and costs predictable.",
    heroTitle: "Transportation & Logistics Software — Visibility Across Every Mile",
    heroSub:
      "We build dispatch management systems, fleet tracking platforms, freight broker tools, and supply chain visibility dashboards for carriers, 3PLs, and shipper operations teams.",
    metaTitle: "Transportation & Logistics Software Development Canada",
    metaDescription:
      "Custom transportation and logistics software. Dispatch systems, fleet tracking, freight broker platforms, and supply chain visibility tools. Book a free strategy call.",
    overview:
      "Transportation and logistics is one of the most data-intensive industries in the economy — every shipment generates a continuous stream of location, status, document, and exception data that must be captured, processed, and acted on in real time. The difference between a well-run logistics operation and a chaotic one is almost entirely a function of how well that information flows between drivers, dispatchers, customers, and finance teams.\n\nAudax Ventures builds the operational software layer that makes that information flow work. We have built dispatch management systems for regional carriers managing 50-truck fleets, freight brokerage platforms matching shippers with available capacity, and supply chain visibility portals for manufacturers tracking inbound shipments from dozens of suppliers. In each case, our starting point is the actual dispatch or operations workflow — not a textbook version of what it should be.\n\nThe logistics sector is also at an inflection point driven by ELD mandates, customer expectations for real-time tracking, and the growing complexity of last-mile delivery. Shippers increasingly select carriers based on technology capability — the ability to provide API-based tracking updates, EDI transaction support, and digital proof of delivery. We build these capabilities for carriers and 3PLs who want to compete on technology without the enterprise software price tag.",
    challenges: [
      "Dispatch is managed through phone calls, whiteboards, and spreadsheets — creating load assignment delays, driver communication gaps, and no real-time visibility into fleet position",
      "Proof of delivery is paper-based, leading to invoice disputes, slow billing cycles, and lost documentation for damage claims",
      "Customer shipment tracking requires manual status calls to dispatchers, consuming operations staff time and degrading the customer experience",
      "Driver hours of service (HOS) compliance is managed reactively, creating logbook violations and CVOR risk that could affect operating licence",
      "Freight cost and margin analysis is assembled manually from TMS exports and fuel surcharge spreadsheets, making it difficult to identify unprofitable lanes or customers",
    ],
    solutions: [
      {
        icon: "🗺️",
        title: "Dispatch & Load Management",
        description:
          "Digital load board, drag-and-drop dispatch assignment, driver mobile app for load acceptance and status updates, and real-time fleet map — replacing whiteboards and phone dispatching.",
      },
      {
        icon: "📍",
        title: "Fleet Tracking & Telematics Integration",
        description:
          "Real-time GPS tracking integrated with Samsara, Geotab, or ELD providers — with geofence alerts, HOS monitoring, and driver behavior reporting in a unified dashboard.",
      },
      {
        icon: "📱",
        title: "Driver Mobile App",
        description:
          "iOS and Android app for load acceptance, navigation, digital BOL capture, POD photo upload, fuel receipt logging, and HOS log review — reducing paper and radio communication.",
      },
      {
        icon: "👁️",
        title: "Customer Shipment Tracking Portal",
        description:
          "Branded shipper-facing portal with real-time load status, ETA updates, document retrieval, and exception notifications — giving customers the visibility they need without calling your dispatch team.",
      },
      {
        icon: "🤝",
        title: "Freight Broker Platform",
        description:
          "Load posting, carrier matching, rate negotiation workflows, document collection, and payment processing — purpose-built for freight brokerage operations.",
      },
      {
        icon: "📊",
        title: "Lane & Margin Analytics",
        description:
          "Per-shipment revenue and cost analysis, lane profitability ranking, fuel cost allocation, driver utilization reporting, and customer margin dashboards.",
      },
    ],
    caseHighlights: [
      { stat: "10 weeks", label: "Time to launch a full dispatch and driver mobile app platform" },
      { stat: "Offline-ready", label: "Driver apps built to work without a data connection in rural areas" },
      { stat: "ELD-integrated", label: "Fleet tracking connects to Samsara, Geotab, and major providers" },
      { stat: "EDI-capable", label: "204/210/214 transaction support for shipper integrations" },
    ],
    whoWeServe: [
      "Regional trucking companies managing 10–200 truck fleets looking to replace manual dispatch",
      "Freight brokers and 3PLs building proprietary technology to differentiate from competitors",
      "Manufacturers and distributors managing private fleets and inbound supply chain visibility",
      "Last-mile delivery operators managing high-volume residential and commercial delivery routes",
      "Intermodal and drayage operators coordinating rail, port, and over-the-road movements",
    ],
    relatedServices: [
      "internal-tools",
      "saas-development",
      "process-automation",
      "crm-systems",
    ],
    faq: [
      {
        q: "Can you integrate with our existing TMS or ELD provider?",
        a: "Yes. We have integrated with McLeod, Samsara, Geotab, KeepTruckin, and several smaller TMS platforms via their APIs. For EDI-capable systems, we build EDI 204/210/214 transaction support. We assess what your existing systems expose during discovery.",
      },
      {
        q: "Does the driver app work with limited connectivity in rural areas?",
        a: "Yes. Offline functionality is a standard requirement for driver apps. We build with local data caching and background sync so drivers can capture BOLs, PODs, and status updates without a data connection, with automatic upload when connectivity is restored.",
      },
      {
        q: "Can you build EDI integration for shipper customers who require it?",
        a: "Yes. EDI 204 (load tender), 210 (freight invoice), 214 (shipment status), and 997 (functional acknowledgment) are common requirements we implement. We work with your VAN provider or build direct connections depending on the transaction volume.",
      },
      {
        q: "How do you handle the Hours of Service compliance requirements?",
        a: "HOS monitoring is built into the fleet tracking integration using ELD data from your compliant provider. We display real-time HOS status in the dispatch dashboard and configure alerts when drivers approach their daily or 70-hour cycle limits.",
      },
    ],
  },

  {
    slug: "non-profit",
    title: "Non-Profit & Social Impact",
    icon: "🤝",
    tagline: "Mission-driven software built with the budget discipline and impact measurement non-profits need.",
    heroTitle: "Non-Profit & Social Impact Software — Technology That Serves the Mission, Not the Other Way Around",
    heroSub:
      "We build donor management systems, volunteer platforms, program tracking tools, and grant reporting dashboards for charities, social enterprises, and impact-driven organizations.",
    metaTitle: "Non-Profit Software Development Canada",
    metaDescription:
      "Custom software for Canadian non-profits and social enterprises. Donor management, volunteer platforms, program tracking, and grant reporting tools. Book a free call.",
    overview:
      "Non-profit organizations operate in a uniquely constrained technology environment: the need for sophisticated software is real, but the budgets to acquire and maintain it are a fraction of what comparable private sector organizations would spend. The result is a sector that over-relies on donated or heavily discounted tools that don't quite fit, maintained by staff who are stretched thin across program delivery and administrative functions.\n\nAudax Ventures works with non-profits on engagements that are scoped pragmatically — we build exactly what serves the mission and nothing more. We have built donor management and fundraising platforms for mid-size charities, volunteer coordination tools for social services organizations managing hundreds of placements, program outcome tracking systems for funders requiring rigorous impact reporting, and digital intake workflows for community services organizations that were previously running paper-based processes.\n\nWe bring three things to non-profit technology work that most agencies don't: genuine understanding of the CRA registered charity reporting environment, experience building for populations with lower digital literacy, and a willingness to scope projects to what organizations can afford to build and maintain. The best software for a non-profit is the software that gets used consistently for five years — not the most impressive system that requires a full-time administrator to keep running.",
    challenges: [
      "Donor data is fragmented across spreadsheets, legacy CRM systems, and individual staff members' inboxes — making year-end tax receipting a manual scramble",
      "Grant reporting requires impact data that program staff collect inconsistently across sites, making it difficult to tell a compelling, data-backed story to funders",
      "Volunteer recruitment, scheduling, and hours tracking is manual and relies on email chains that miss people and generate no useful data",
      "Program intake and waitlist management is paper-based or in spreadsheets, creating data entry duplication and no visibility into service capacity",
      "Digital fundraising relies on generic tools that don't reflect organizational brand or support the specific campaign types needed for major gift solicitation",
    ],
    solutions: [
      {
        icon: "💝",
        title: "Donor Management & CRM",
        description:
          "Unified donor database with giving history, communication logs, major gift pipeline tracking, automated tax receipting (CRA-compliant), and annual fund campaign management.",
      },
      {
        icon: "🙋",
        title: "Volunteer Portal & Scheduling",
        description:
          "Volunteer registration, skill and availability matching, shift scheduling, hours logging, recognition tracking, and automated communication — from first contact to long-term retention.",
      },
      {
        icon: "📊",
        title: "Program Outcome Tracking",
        description:
          "Client intake, service delivery logging, outcome measurement against funder-defined indicators, and grant report generation — giving program staff a system that serves both operations and reporting.",
      },
      {
        icon: "💻",
        title: "Online Fundraising & Campaign Pages",
        description:
          "Branded donation pages, peer-to-peer fundraising tools, event registration with payment, recurring giving management, and campaign analytics dashboards.",
      },
      {
        icon: "📋",
        title: "Digital Intake & Case Management",
        description:
          "Online intake forms, waitlist management, case note logging, referral tracking, and service coordination tools — replacing paper workflows with a mobile-accessible digital system.",
      },
      {
        icon: "📈",
        title: "Impact Reporting Dashboard",
        description:
          "Aggregate outcome data visualization, funder-specific report generation, program comparison analytics, and board-level impact dashboards that make the case for continued support.",
      },
    ],
    caseHighlights: [
      { stat: "6 weeks", label: "Time to build and launch a volunteer management portal" },
      { stat: "$0", label: "Additional licensing cost — all software is owned outright by your organization" },
      { stat: "CRA-compliant", label: "Tax receipting built to registered charity requirements" },
      { stat: "Grant-ready", label: "Outcome tracking designed around funder reporting requirements" },
    ],
    whoWeServe: [
      "Registered Canadian charities seeking to modernize donor management and fundraising technology",
      "Social services organizations managing complex client intake, caseloads, and funder reporting",
      "Community foundations and grant-making organizations tracking applicant and recipient portfolios",
      "Social enterprises needing commerce functionality alongside impact measurement",
      "International development organizations managing multi-country program data collection",
    ],
    relatedServices: [
      "crm-systems",
      "internal-tools",
      "website-development",
      "process-automation",
    ],
    faq: [
      {
        q: "Can you build within a non-profit budget?",
        a: "Yes. We scope non-profit engagements to what organizations can genuinely afford to build and maintain. We are direct about what can be built for a given budget and help prioritize ruthlessly. We also advise on applying for tech access grants (Google.org, Salesforce.org) that can partially fund development costs.",
      },
      {
        q: "Does the donor management system handle CRA tax receipting?",
        a: "Yes. We build automated tax receipt generation that meets CRA's requirements for registered charities, including official donation receipt numbering, required legal text, in-kind gift documentation, and year-end batch receipt generation.",
      },
      {
        q: "Can you migrate our data from an existing CRM like Salesforce Nonprofit or Bloomerang?",
        a: "Yes. Data migration from common non-profit CRM platforms is a standard component of our donor management engagements. We export, clean, deduplicate, and import donor records with full giving history.",
      },
      {
        q: "What happens if we can't afford ongoing maintenance?",
        a: "We build with maintainability as an explicit design constraint for non-profit clients. This means choosing widely-used technology stacks, writing documentation, and building admin interfaces that allow staff to manage configuration without developer involvement. We also offer low-cost retainer packages for organizations that need occasional support.",
      },
    ],
  },

  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    icon: "💻",
    tagline: "Engineering capacity and platform expertise for technology companies building their next product milestone.",
    heroTitle: "Technology & SaaS — Augment Your Team With Engineers Who've Built at Scale",
    heroSub:
      "We partner with technology companies and SaaS platforms as a senior engineering team — delivering complex features, platform migrations, and greenfield products with the architecture discipline that production-grade software demands.",
    metaTitle: "SaaS & Technology Software Development Partner",
    metaDescription:
      "Engineering partner for SaaS companies and technology startups. Platform migrations, feature development, API design, and architectural advisory. Book a free strategy call.",
    overview:
      "Technology companies and SaaS platforms face a different challenge than organizations in other industries: they know how software should be built, but they often need senior capacity that their current team doesn't have — for a platform migration, a complex new feature module, an API redesign, or a greenfield product that sits adjacent to the core. Hiring full-time senior engineers is slow, expensive, and creates long-term capacity that may not match the project's needs.\n\nAudax Ventures acts as a senior engineering extension for technology companies that need execution capacity without the hiring overhead. We have built API platforms, migrated monoliths to microservices architectures, redesigned data models to support new product directions, and built companion products for SaaS platforms expanding their market. We work at the level of architectural decision-making, not just feature implementation — which means we add value that compounds beyond the immediate engagement.\n\nWe are particularly well-suited to engagements where the problem is technically complex and the timeline is constrained. Platform migrations with zero-downtime requirements, API versioning strategies for a customer base on multiple contract terms, multi-tenant data model redesigns — these are the kinds of challenges where having a team that has done it before, and done it under production conditions, materially reduces risk.",
    challenges: [
      "The core product is approaching architectural limits — scaling bottlenecks, multi-tenancy constraints, or a data model that doesn't support the next product direction",
      "Engineering capacity is consumed by maintenance and customer commitments, leaving no bandwidth to build the next major feature or platform capability",
      "A legacy codebase needs to be migrated or modernized without disrupting existing customers on long-term contracts",
      "API design decisions made early in the product's life are now constraining the integration ecosystem and partner channel",
      "A new product or module needs to be built adjacent to the core platform with a different technology stack or deployment model",
    ],
    solutions: [
      {
        icon: "🏗️",
        title: "Platform Architecture Advisory",
        description:
          "Architecture reviews, scaling strategy, multi-tenancy design, data model redesign, and technology selection — delivered as a structured engagement with documented recommendations your team can act on.",
      },
      {
        icon: "🔄",
        title: "Legacy Migration & Modernization",
        description:
          "Strangler-fig migrations from monolith to services, PHP-to-Node.js or Rails-to-TypeScript rewrites, database schema migrations, and cloud infrastructure modernization — with zero-downtime deployment strategies.",
      },
      {
        icon: "🔌",
        title: "API Design & Platform Development",
        description:
          "RESTful and GraphQL API design, versioning strategy, developer documentation, webhook infrastructure, OAuth 2.0 / API key authentication, and rate limiting — building the platform layer your integration partners need.",
      },
      {
        icon: "🤖",
        title: "AI Feature Integration",
        description:
          "LLM integration for SaaS features, RAG pipeline design, embedding-based search, AI workflow orchestration, and model evaluation frameworks — building AI features that work reliably in production.",
      },
      {
        icon: "📦",
        title: "Greenfield Product Development",
        description:
          "Building net-new products and modules alongside your existing platform — from architecture through launch — as a dedicated team working within your delivery process.",
      },
      {
        icon: "⚙️",
        title: "DevOps & Infrastructure Engineering",
        description:
          "CI/CD pipeline design, Kubernetes orchestration, infrastructure-as-code, observability stack implementation, and cost optimization for AWS, GCP, or Azure deployments.",
      },
    ],
    caseHighlights: [
      { stat: "8 weeks", label: "Time to ship a new AI-powered feature module for an existing SaaS platform" },
      { stat: "Zero-downtime", label: "Migration strategy built around continuous delivery from day one" },
      { stat: "Senior-only", label: "No juniors on your project — every engineer is mid-to-senior level" },
      { stat: "100%", label: "All code becomes yours at the end of every sprint" },
    ],
    whoWeServe: [
      "B2B SaaS companies needing senior engineering capacity for a complex migration or new feature module",
      "Technology startups approaching Series A or B who need platform architecture to scale with growth",
      "Software companies building developer-facing API products or integration ecosystems",
      "Enterprise software vendors modernizing legacy products for cloud-native deployment",
      "Technology companies building AI-powered features on top of existing SaaS platforms",
    ],
    relatedServices: [
      "saas-development",
      "ai-consulting",
      "mvp-development",
      "process-automation",
    ],
    faq: [
      {
        q: "How do you work alongside an existing engineering team?",
        a: "We embed into your existing delivery process — using your project management tools, code review workflow, and branching strategy. We treat your team's conventions as constraints to respect, not defaults to override. Typically we start with a 2-week onboarding sprint to learn the codebase before taking on delivery work.",
      },
      {
        q: "Can you work on a codebase we didn't build?",
        a: "Yes. We regularly inherit codebases built by previous teams, offshore agencies, or founding engineers. We do a structured technical audit at the start of the engagement to understand what we're working with, identify risk areas, and agree on conventions before we start modifying code.",
      },
      {
        q: "How do you handle IP ownership and confidentiality for SaaS clients?",
        a: "All code we write becomes your intellectual property upon completion of each sprint. We sign comprehensive NDAs and IP assignment agreements before the engagement starts. Engineers assigned to your project are contractually prohibited from sharing your code or architecture with other clients.",
      },
      {
        q: "What engagement models do you offer for technology companies?",
        a: "We offer project-based engagements (fixed scope, fixed price), time-and-materials retainers (monthly hours blocks), and hybrid models for longer-term partnerships. Most technology company engagements run on quarterly retainers with 30-day notice periods to adjust scope.",
      },
    ],
  },
];

export const mainIndustries = industriesData.slice(0, 3);
export const otherIndustries = industriesData.slice(3);

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industriesData.map((i) => i.slug);
}
