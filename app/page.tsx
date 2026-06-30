import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import AboutAudaxSection from "@/components/sections/AboutAudaxSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsBar from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "Audax Ventures — AI Strategy, Leadership & Innovation",
  description:
    "Audax Ventures provides Fractional AI leadership, AI transformation services, and custom software development to help organizations stay competitive in an AI-driven world. Book a free strategy call today.",
  openGraph: {
    title: "Audax Ventures — AI Strategy, Leadership & Innovation",
    description:
      "Helping businesses navigate the future of AI — Fractional CAIO services, AI transformation & advisory, and custom AI & software development.",
    url: "https://audaxventures.ca",
  },
  alternates: { canonical: "https://audaxventures.ca" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Audax Ventures",
  url: "https://audaxventures.ca",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://audaxventures.ca/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const sitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Audax Ventures — Key Pages",
  itemListElement: [
    {
      "@type": "SiteLinksSearchBox",
      target: "https://audaxventures.ca",
    },
    {
      "@type": "ListItem",
      position: 1,
      name: "Fractional Chief AI Officer",
      url: "https://audaxventures.ca/services/fractional-caio",
      description: "Executive-level AI leadership for your business — strategy, governance, and ROI tracking on a monthly retainer.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Custom AI & Software Development",
      url: "https://audaxventures.ca/services/custom-ai-software-development",
      description: "Custom software, AI-powered applications, and automation solutions built around your business.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About Audax Ventures",
      url: "https://audaxventures.ca/about",
      description: "Learn about Audax Ventures — Canada's AI strategy and innovation firm.",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Audax Ventures",
  url: "https://audaxventures.ca",
  description:
    "An AI strategy and innovation firm helping organizations identify, implement, and scale technology solutions through Fractional Chief AI Officer services, AI transformation, and custom software development.",
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://calendly.com/audax-ventures/30min",
  },
  sameAs: [
    "https://www.linkedin.com/company/audax-ventures-inc/",
    "https://twitter.com/audaxventures",
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <HeroSection />
      <StatsBar />
      <AboutAudaxSection />
      <ServicesGrid />
      <CTABanner
        heading="Ready to Put AI to Work in Your Business?"
        subtext="Book a free AI strategy call and let's get started today."
        buttonText="Book a Free AI Strategy Call"
      />
    </>
  );
}
