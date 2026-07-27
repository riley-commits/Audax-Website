import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { caseStudiesData, getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `https://audaxventures.ca/work/${slug}` },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `https://audaxventures.ca/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://audaxventures.ca" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://audaxventures.ca/work" },
      { "@type": "ListItem", position: 3, name: study.clientName, item: `https://audaxventures.ca/work/${slug}` },
    ],
  };

  const otherStudies = caseStudiesData.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/work" className="inline-flex items-center gap-1.5 text-sm text-[#374151] hover:text-[#2E5F8A] transition-colors">
            <ArrowLeft size={14} /> Back to Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {study.logo && (
            <div className="relative h-14 w-14 mx-auto mb-6 rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm">
              <Image src={study.logo} alt={study.clientName} fill className="object-contain p-1.5" sizes="56px" />
            </div>
          )}
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">{study.clientType}</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-5 leading-tight">
            {study.clientName}
          </h1>
          <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto">{study.tagline}</p>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5">
            <div className="w-11 h-11 rounded-xl bg-[#2E5F8A]/10 flex items-center justify-center flex-shrink-0">
              <Hammer className="text-[#2E5F8A]" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#2E5F8A] mb-2">What We Built</p>
              <p className="text-[#374151] leading-relaxed">{study.whatWeBuilt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tags + external link */}
      <section className="py-14 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#2E5F8A] text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
          {study.externalUrl && (
            <Link
              href={study.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
            >
              Visit {study.clientName} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      {/* More case studies */}
      {otherStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-8">More Case Studies</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherStudies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group block bg-[#F8F9FA] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all"
                >
                  <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base mb-1 group-hover:text-[#2E5F8A] transition-colors">
                    {c.clientName}
                  </h3>
                  <p className="text-[#9CA3AF] text-xs">{c.clientType}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading="Want to Be Our Next Case Study?"
        subtext="Book a free strategy call and let's talk about what you're building."
      />
    </>
  );
}
