import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTABanner from "@/components/layout/CTABanner";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getAllServiceSlugs, servicesData } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://audaxventures.ca/services/${slug}` },
    ...(service.draft && { robots: { index: false, follow: false } }),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://audaxventures.ca/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://audaxventures.ca" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://audaxventures.ca/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://audaxventures.ca/services/${slug}` },
    ],
  };

  const related = service.relatedServices
    .map((s) => servicesData.find((d) => d.slug === s))
    .filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <ServicePageContent service={service} related={related} />

      <CTABanner />
    </>
  );
}
