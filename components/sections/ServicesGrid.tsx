"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Code2, Sparkles, ArrowRight, Check } from "lucide-react";

const pillars = [
  {
    icon: User,
    title: "Fractional CAIO",
    description: "Executive AI leadership without the full-time cost.",
    href: "/services/fractional-caio",
    accentBg: "bg-[#0F172A]",
    features: [
      "AI strategy & opportunity assessment",
      "Governance & responsible AI",
      "Roadmaps & KPI tracking",
      "Team enablement & training",
      "Executive reporting & ROI",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software and AI solutions to solve your most critical challenges.",
    href: "/services/custom-ai-software-development",
    accentBg: "bg-[#7C3AED]",
    features: [
      "Custom web & mobile applications",
      "AI-powered tools & assistants",
      "Process automation & integrations",
      "Dashboards & internal tools",
      "Scalable, secure, future-ready",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Transformation",
    description: "We implement AI across your business for measurable, lasting impact.",
    href: "/services/ai-transformation-advisory",
    accentBg: "bg-[#10B981]",
    features: [
      "Process redesign & optimization",
      "Change management & adoption",
      "Data strategy & infrastructure",
      "Continuous improvement",
      "Measure, learn & scale",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative z-10 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2563EB] font-semibold mb-4">What We Do</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
            End-to-End AI Leadership &amp; Execution
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div className={`w-12 h-12 rounded-2xl ${p.accentBg} flex items-center justify-center mb-6`}>
                <p.icon size={22} className="text-white" />
              </div>

              <h3 className="font-[var(--font-outfit)] font-extrabold text-xl text-[#0F172A] mb-2">
                {p.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="space-y-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#374151]">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href={p.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors self-start"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
