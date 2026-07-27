"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Code2, ArrowRight, Check } from "lucide-react";

// ── Service data ─────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    icon: Crown,
    title: "Fractional Chief AI Officer",
    tagline: "Executive-level AI leadership & strategic guidance",
    description:
      "Get executive-level AI leadership without the cost of hiring a full-time Chief AI Officer — strategy, governance, training, and ROI tracking on a monthly retainer.",
    href: "/services/fractional-caio",
    badge: "Most Popular",
    accentColor: "#2E5F8A",
    accentBg: "bg-[#2E5F8A]/10",
    accentText: "text-[#2E5F8A]",
    features: [
      "AI opportunity assessment",
      "12-month AI roadmap",
      "Executive strategy sessions",
      "Leadership & employee training",
      "AI governance & risk management",
      "ROI tracking & reporting",
    ],
  },
  {
    num: "02",
    icon: Code2,
    title: "Custom AI & Software Development",
    tagline: "Custom software, automation & AI-powered apps",
    description:
      "Custom software, automation solutions, AI-powered applications, and digital products built around your business — not the other way around.",
    href: "/services/custom-ai-software-development",
    badge: null,
    accentColor: "#7C3AED",
    accentBg: "bg-purple-100",
    accentText: "text-purple-700",
    features: [
      "Custom software development",
      "AI-powered applications",
      "Process automation",
      "Internal tools & dashboards",
      "Integrations & APIs",
      "Ongoing support & iteration",
    ],
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={sectionRef} className="relative z-10 pt-16 pb-24 overflow-hidden">
      {/* Thread marker */}
      <div className="hidden lg:block absolute left-8 top-14 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#2E5F8A]/50 z-10" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2E5F8A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />
      {/* Corner orb — drifts gently on scroll */}
      <motion.div
        style={{ y: orbY }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2E5F8A]/8 blur-3xl pointer-events-none"
      />
      {/* Top fade — hides orb bleed for a clean handoff from the previous section */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAFAF8] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">
            How We Help
          </p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Core Service Areas
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Fractional AI leadership and custom AI & software development — the full path from strategy to shipped software.
          </p>
        </motion.div>

        {/* Equal cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="relative flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 lg:p-10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${s.accentBg} flex items-center justify-center`}>
                  <s.icon size={26} className={s.accentText} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-[var(--font-outfit)] font-extrabold text-xs text-[#D1D5DB] tabular-nums mt-1">
                    {s.num}
                  </span>
                  {s.badge && (
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.accentBg} ${s.accentText} uppercase tracking-wider`}>
                      {s.badge}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-2">
                {s.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                {s.description}
              </p>

              {/* Feature checklist */}
              <div className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-full ${s.accentBg} flex items-center justify-center flex-shrink-0`}>
                      <Check size={11} className={s.accentText} />
                    </div>
                    <span className="text-sm text-[#374151]">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={s.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-bold transition-colors hover:opacity-90 self-start"
                style={{ backgroundColor: s.accentColor }}
              >
                Full Service Details <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all services */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-dashed border-[#2E5F8A]/30 text-sm font-semibold text-[#2E5F8A] hover:border-[#2E5F8A] hover:bg-[#2E5F8A]/5 transition-all"
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
