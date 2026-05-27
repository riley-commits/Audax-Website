import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import StatsBar from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "Audax Ventures — Canada's Leading Software Development Company",
  description:
    "Audax Ventures helps startup founders and enterprise innovation teams build MVPs and scalable SaaS products. Book a free strategy call today.",
  openGraph: {
    title: "Audax Ventures — Canada's Leading Software Development Company",
    description:
      "From validated idea to scalable product — Audax Ventures is your trusted development partner.",
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
    "Canada's leading software development company helping founders and enterprise teams build MVPs and scalable SaaS products.",
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
      <StatsBar />
      <ServicesGrid />
      <SolutionsOverview />
      <ProcessSteps />
      <CTABanner />
    </>
  );
}
