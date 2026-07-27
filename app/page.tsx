import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DifferentiatorStatement from "@/components/sections/DifferentiatorStatement";
import HomeProcessSection from "@/components/sections/HomeProcessSection";
import ImpactHighlights from "@/components/sections/ImpactHighlights";
import FractionalCaioSpotlight from "@/components/sections/FractionalCaioSpotlight";

export const metadata: Metadata = {
  title: "Audax Ventures — The AI Strategy Partner That Actually Builds",
  description:
    "Fractional CAIO leadership and custom AI software that help organizations operate smarter, move faster, and create measurable impact. Book a free strategy call today.",
  openGraph: {
    title: "Audax Ventures — The AI Strategy Partner That Actually Builds",
    description:
      "Fractional CAIO leadership and custom AI software that help organizations operate smarter, move faster, and create measurable impact.",
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
      <ServicesGrid />
      <DifferentiatorStatement />
      <HomeProcessSection />
      <ImpactHighlights />
      <FractionalCaioSpotlight />
      <CTABanner />
    </>
  );
}
