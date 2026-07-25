export interface CaseStudyResult {
  stat: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientType: string;
  logo?: string;
  externalUrl?: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  whatWeBuilt: string;
  outcome: string;
  results?: CaseStudyResult[];
  tags: string[];
}

// Restructured from the former /success-stories client list into a
// case-study format (problem / what we built / outcome). whatWeBuilt
// reflects real delivered work; problem framing and quantified outcomes
// are [PLACEHOLDER] until each client narrative is written up properly.
export const caseStudiesData: CaseStudy[] = [
  {
    slug: "fundeze",
    clientName: "FundEze",
    clientType: "AI-powered fintech startup",
    logo: "/logos/fundeze.png",
    externalUrl: "https://www.fundeze.io/",
    tagline: "Matching startup founders with the right investors, powered by AI.",
    metaTitle: "FundEze Case Study — AI-Powered Fundraising Platform | Audax Ventures",
    metaDescription:
      "How Audax Ventures helped FundEze build an AI-powered platform that matches startup founders with investors based on their business and growth plans.",
    problem: "[PLACEHOLDER — the fundraising challenge FundEze set out to solve for founders]",
    whatWeBuilt:
      "An AI-powered platform that matches startup founders with the right investors based on their business and growth plans, paired with digital marketing support to drive adoption.",
    outcome: "[PLACEHOLDER — quantified outcome / traction since launch]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["MVP Development", "Digital Marketing"],
  },
  {
    slug: "migrateezy",
    clientName: "MigrateEzy",
    clientType: "Relocation-tech startup",
    logo: "/logos/migrateezy.png",
    tagline: "Making relocation simpler for the people going through it.",
    metaTitle: "MigrateEzy Case Study — Relocation Platform | Audax Ventures",
    metaDescription:
      "How Audax Ventures is helping MigrateEzy build a platform to make relocation simpler for the people going through it.",
    problem: "[PLACEHOLDER — the relocation pain point MigrateEzy is solving]",
    whatWeBuilt: "A platform to make relocation simpler for the people going through it.",
    outcome: "[PLACEHOLDER — quantified outcome / traction since launch]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["MVP Development"],
  },
  {
    slug: "linkglobal",
    clientName: "LinkGlobal",
    clientType: "AI-powered language-learning startup",
    logo: "/logos/linkglobal.avif",
    tagline: "Helping people learn languages through real conversation practice.",
    metaTitle: "LinkGlobal Case Study — AI Language Learning Platform | Audax Ventures",
    metaDescription:
      "How Audax Ventures is helping LinkGlobal build an AI-powered platform to help people learn languages through real conversation practice.",
    problem: "[PLACEHOLDER — the language-learning gap LinkGlobal is solving]",
    whatWeBuilt:
      "An AI-powered platform to help people learn languages through real conversation practice. Public website currently in development.",
    outcome: "[PLACEHOLDER — quantified outcome / traction since launch]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["MVP Development", "Website"],
  },
  {
    slug: "greenglam-tech",
    clientName: "GreenGlam Tech",
    clientType: "AI-powered consumer app",
    logo: "/logos/greenglam-tech.png",
    externalUrl: "https://www.greenglamtech.com/",
    tagline: "Helping people get more out of the clothes they already own.",
    metaTitle: "GreenGlam Tech Case Study — AI Wardrobe App | Audax Ventures",
    metaDescription:
      "How Audax Ventures helped GreenGlam Tech build a wardrobe-planning app that uses AI to suggest outfits and cut down on unnecessary buying.",
    problem: "[PLACEHOLDER — the wardrobe/overconsumption problem GreenGlam Tech set out to solve]",
    whatWeBuilt:
      "A wardrobe-planning app that uses AI to suggest outfits and cut down on unnecessary buying, plus digital marketing support to grow the user base.",
    outcome: "[PLACEHOLDER — quantified outcome / traction since launch]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["App Development", "Digital Marketing"],
  },
  {
    slug: "h2mb",
    clientName: "H2MB",
    clientType: "Green hydrogen infrastructure venture",
    logo: "/logos/h2mb.avif",
    externalUrl: "https://www.h2mb.ca/",
    tagline: "Building out Manitoba's hydrogen economy.",
    metaTitle: "H2MB Case Study — Green Hydrogen Venture | Audax Ventures",
    metaDescription:
      "How Audax Ventures supported H2MB, a green hydrogen production, storage, and distribution facility being developed in Winnipeg.",
    problem: "[PLACEHOLDER — the infrastructure/market gap H2MB is addressing]",
    whatWeBuilt:
      "A website and operations support for a green hydrogen production, storage, and distribution facility in Winnipeg. H2MB was founded by Audax President Joshua Zaporzan — one of several ventures we've helped build from the ground up.",
    outcome: "[PLACEHOLDER — quantified outcome / project milestones]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["Website", "Operations Support"],
  },
  {
    slug: "assessteam",
    clientName: "AssessTEAM",
    clientType: "Established employee performance management platform",
    logo: "/logos/assessteam.svg",
    externalUrl: "https://www.assessteam.com/",
    tagline: "Contributing software development to a platform used by teams worldwide.",
    metaTitle: "AssessTEAM Case Study — Software Development | Audax Ventures",
    metaDescription:
      "How Audax Ventures contributed software development work to AssessTEAM, an established employee performance management platform used by teams worldwide.",
    problem: "[PLACEHOLDER — the specific engineering problem Audax was brought in to solve]",
    whatWeBuilt: "Software development work contributed to AssessTEAM's product.",
    outcome: "[PLACEHOLDER — quantified outcome / impact of the engagement]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["Software Development"],
  },
  {
    slug: "elkhorn-resort",
    clientName: "Elkhorn Resort",
    clientType: "Hospitality — spa & conference centre",
    logo: "/logos/elkhorn-resort.avif",
    externalUrl: "https://www.elkhornresort.mb.ca/",
    tagline: "A spa and conference centre at Clear Lake, Manitoba.",
    metaTitle: "Elkhorn Resort Case Study — Website, Marketing & Chatbot | Audax Ventures",
    metaDescription:
      "How Audax Ventures built a website, digital marketing program, and chatbot for Elkhorn Resort, a spa and conference centre adjacent to Riding Mountain National Park.",
    problem: "[PLACEHOLDER — the booking/guest-experience problem Elkhorn Resort set out to solve]",
    whatWeBuilt: "A website, digital marketing program, and AI chatbot for guest inquiries.",
    outcome: "[PLACEHOLDER — quantified outcome / booking impact]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["Website", "Digital Marketing", "Chatbot"],
  },
  {
    slug: "clear-lake-golf-course",
    clientName: "Clear Lake Golf Course",
    clientType: "Hospitality — golf course",
    logo: "/logos/clear-lake-golf.avif",
    externalUrl: "https://www.clearlakegolfcourse.com/",
    tagline: "One of Manitoba's most storied courses, built in stages since 1928.",
    metaTitle: "Clear Lake Golf Course Case Study — Website, Marketing & Strategy | Audax Ventures",
    metaDescription:
      "How Audax Ventures built a website, digital marketing program, and strategic plan for Clear Lake Golf Course inside Riding Mountain National Park.",
    problem: "[PLACEHOLDER — the growth/visibility problem Clear Lake Golf Course set out to solve]",
    whatWeBuilt: "A website, digital marketing program, and strategic planning support.",
    outcome: "[PLACEHOLDER — quantified outcome / booking or visibility impact]",
    results: [
      { stat: "[PLACEHOLDER]", label: "[PLACEHOLDER metric]" },
    ],
    tags: ["Website", "Digital Marketing", "Strategy Planning"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudiesData.map((c) => c.slug);
}
