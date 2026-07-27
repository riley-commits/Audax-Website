import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { caseStudiesData } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Our Work — Case Studies | Audax Ventures",
  description:
    "Case studies from Audax Ventures — the problems we solved, what we built, and the outcomes for founders and enterprise clients we've partnered with.",
  alternates: { canonical: "https://audaxventures.ca/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Our Work</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
            Case Studies
          </h1>
          <p className="text-[#374151] text-lg">
            From AI-powered startups to established Manitoba hospitality brands — the problems we solved, what we built, and the outcomes.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {caseStudiesData.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  {c.logo && (
                    <div className="relative h-12 w-12 flex-shrink-0 rounded-xl border border-gray-100 bg-[#FAFAF8] p-2">
                      <Image src={c.logo} alt={c.clientName} fill className="object-contain p-1" sizes="48px" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-lg text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors">
                      {c.clientName}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs">{c.clientType}</p>
                  </div>
                </div>

                <p className="text-[#374151] text-sm leading-relaxed mb-5 flex-1">{c.whatWeBuilt}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tags.map((t) => (
                    <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2E5F8A]/8 text-[#2E5F8A] text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A] group-hover:gap-2.5 transition-all">
                  Read the case study <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Be Our Next Case Study?"
        subtext="Book a free strategy call and let's talk about what you're building."
      />
    </>
  );
}
