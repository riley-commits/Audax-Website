import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Audax Ventures — the AI strategy and innovation firm behind Fractional Chief AI Officer services and custom AI & software development.",
  alternates: { canonical: "https://audaxventures.ca/about" },
  openGraph: { title: "About Audax Ventures", url: "https://audaxventures.ca/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTABanner />
    </>
  );
}
