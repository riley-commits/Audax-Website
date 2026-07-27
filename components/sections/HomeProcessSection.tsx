"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Map, Hammer, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search,          number: "01", title: "Discover", description: "We learn your business, your data, and where AI could realistically move the needle.", value: 100 },
  { icon: ClipboardCheck,  number: "02", title: "Assess",   description: "An honest opportunity assessment — including where AI isn't the right answer yet.", value: 100 },
  { icon: Map,             number: "03", title: "Roadmap",  description: "A prioritized, sequenced plan aligned to your budget and business goals.", value: 100 },
  { icon: Hammer,          number: "04", title: "Build",    description: "Our in-house team ships the software the roadmap calls for — the same team that wrote it.", value: 65 },
  { icon: TrendingUp,      number: "05", title: "Scale",    description: "Ongoing strategy sessions, governance, and iteration as the initiative grows.", value: 20 },
];

export default function HomeProcessSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">How We Work</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            The Engagement Model
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            The same five-phase path from first conversation to shipped software — whether we&apos;re setting strategy, building product, or both.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#2E5F8A]/10 flex items-center justify-center">
                  <step.icon size={20} className="text-[#2E5F8A]" />
                </div>
                <span className="font-[var(--font-outfit)] font-extrabold text-xs text-[#D1D5DB] tabular-nums">
                  {step.number}
                </span>
              </div>
              <h3 className="font-[var(--font-outfit)] font-extrabold text-lg text-[#1A1A2E] mb-2">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">{step.description}</p>
              <div className="h-1.5 rounded-full bg-[#F0F4F8] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#2E5F8A]"
                  style={{ width: `${step.value}%` }}
                />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-11 -right-3 w-5 h-px bg-[#2E5F8A]/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
