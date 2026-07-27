"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ArrowLeft, Award } from "lucide-react";

const credentials = [
  "President, Audax Ventures",
  "Founder & CEO, H2MB",
  "Board Member, Winnipeg Impact Network (WIN)",
  "Manitoba Premier's Business & Jobs Council (2023)",
  "Manitoba's Top 10 People to Watch (2024)",
];

const bioParagraphs = [
  "Joshua is an entrepreneur focused on building what’s next across the renewable energy and artificial intelligence sectors.",
  "Joshua is the Founder & CEO of H2MB, a clean energy company developing a green hydrogen production, storage, and distribution facility in Winnipeg, Manitoba. H2MB is focused on producing low-cost green hydrogen to support decarbonization, energy security, and industrial growth across Canada.",
  "Alongside that, Joshua leads Audax Ventures, an AI strategy, custom software, and product development company that helps organizations identify, implement, and scale the practical use of artificial intelligence. Through Fractional Chief AI Officer (CAIO) services, AI strategy engagements, and custom software development, Audax works with businesses to move beyond AI planning and into execution by designing, building, and managing AI-powered systems, internal platforms, and digital products that improve efficiency, create competitive advantage, and support long-term growth.",
  "Joshua has successfully exited a previous business, advised and invested in early-stage companies, and worked alongside founders, executives, and policymakers to help build and scale innovative businesses across Canada.",
  "Beyond his role at H2MB & Audax, Joshua remains actively involved in the business community. He previously served as Board Chair of the Young Associates, currently sits on the Board of the Winnipeg Impact Network (WIN), and was appointed to the Manitoba Premier’s Business & Jobs Council in 2023. In 2024, he was recognized as one of Manitoba’s Top 10 People to Watch.",
];

export default function JoshuaBioContent() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 68%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B7280] hover:text-[#0F172A] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to About
          </Link>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] w-full max-w-xs mx-auto lg:mx-0"
            >
              <Image
                src="/team/joshua-zaporzan.avif"
                alt="Joshua Zaporzan, President of Audax Ventures"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 60vw, 320px"
              />
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-4">
                Meet the Team
              </p>
              <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#0F172A] mb-3 leading-tight">
                Joshua Zaporzan
              </h1>
              <p className="text-[#6B7280] text-lg font-medium mb-8">
                President, Audax Ventures &amp; Founder &amp; CEO, H2MB
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 mb-8 max-w-lg">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <Briefcase size={14} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#374151] leading-snug">{c}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/audax-ventures/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1220] text-white font-semibold text-sm hover:bg-[#1E293B] transition-colors shadow-lg shadow-black/10"
                >
                  Book a Free Strategy Call <ArrowRight size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshua-zaporzan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Joshua Zaporzan on LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#0F172A] hover:text-white transition-colors flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href="mailto:joshua@audaxventures.ca"
                  aria-label="Email Joshua Zaporzan"
                  className="w-11 h-11 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#0F172A] hover:text-white transition-colors flex-shrink-0"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><path d="M2 6h20v12H2z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full bio ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {bioParagraphs.map((p, i) => (
              <p key={i} className="text-[#374151] text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Recognition strip ── */}
      <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-5">
            <Award size={20} className="text-[#2563EB]" />
          </div>
          <p className="font-[var(--font-outfit)] font-bold text-xl sm:text-2xl text-[#0F172A] leading-snug">
            Recognized as one of Manitoba&apos;s Top 10 People to Watch in 2024, and appointed to the Manitoba Premier&apos;s Business &amp; Jobs Council in 2023.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-4">
            Want to Talk AI Strategy or Custom Software?
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            Book a free, no-pressure call with Joshua to discuss where AI and custom technology could create real value for your business.
          </p>
          <a
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0B1220] text-white font-semibold hover:bg-[#1E293B] transition-colors shadow-lg shadow-black/10"
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
