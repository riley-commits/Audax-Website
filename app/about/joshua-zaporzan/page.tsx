import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import JoshuaBioContent from "@/components/sections/JoshuaBioContent";

export const metadata: Metadata = {
  title: "Joshua Zaporzan — President, Audax Ventures",
  description:
    "Joshua Zaporzan is the President of Audax Ventures and Founder & CEO of H2MB, helping organizations adopt AI and build custom technology across Canada.",
  alternates: { canonical: "https://audaxventures.ca/about/joshua-zaporzan" },
  openGraph: {
    title: "Joshua Zaporzan — President, Audax Ventures",
    description:
      "Joshua Zaporzan is the President of Audax Ventures and Founder & CEO of H2MB, helping organizations adopt AI and build custom technology across Canada.",
    url: "https://audaxventures.ca/about/joshua-zaporzan",
    images: ["/team/joshua-zaporzan.avif"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Zaporzan",
  jobTitle: "President",
  worksFor: [
    { "@type": "Organization", name: "Audax Ventures", url: "https://audaxventures.ca" },
    { "@type": "Organization", name: "H2MB" },
  ],
  url: "https://audaxventures.ca/about/joshua-zaporzan",
  image: "https://audaxventures.ca/team/joshua-zaporzan.avif",
  sameAs: ["https://www.linkedin.com/in/joshua-zaporzan/"],
};

export default function JoshuaZaporzanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <JoshuaBioContent />
      <CTABanner subtext="Let's create an AI strategy and custom solution that drives real, measurable impact." />
    </>
  );
}
