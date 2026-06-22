import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import AboutAudaxSection from "@/components/sections/AboutAudaxSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <AboutAudaxSection />
      <StatsBar />
      <ServicesGrid />
      <SolutionsOverview />
      <ProcessSteps />
      <CTABanner />
    </>
  );
}
