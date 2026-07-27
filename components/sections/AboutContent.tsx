"use client";

import { motion } from "framer-motion";
import { MapPin, Check, X, Minus } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const comparison = {
  rows: [
    { label: "Sets AI strategy" },
    { label: "Builds the software" },
    { label: "Ongoing executive accountability" },
    { label: "In-house engineering team" },
    { label: "Fixed-price, transparent scope" },
    { label: "You own 100% of the code" },
  ],
  columns: [
    { name: "Traditional AI Consultancy", values: ["yes", "no", "partial", "no", "partial", "partial"] },
    { name: "Freelance Developer", values: ["no", "yes", "no", "partial", "partial", "partial"] },
    { name: "Audax Ventures", values: ["yes", "yes", "yes", "yes", "yes", "yes"], highlight: true },
  ],
};

function ComparisonMark({ value }: { value: string }) {
  if (value === "yes") return <Check size={16} className="text-green-600 mx-auto" />;
  if (value === "no") return <X size={16} className="text-red-400 mx-auto" />;
  return <Minus size={16} className="text-[#D1D5DB] mx-auto" />;
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function AboutContent() {
  return (
    <div className="bg-[#FAFAF8] relative">

      {/* ── Continuous vertical thread (desktop only) ── */}
      <div
        className="hidden lg:block absolute left-8 pointer-events-none z-0"
        style={{
          top: "420px",
          bottom: "140px",
          width: "1px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(46,95,138,0.22) 6%, rgba(46,95,138,0.22) 94%, transparent 100%)",
        }}
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 relative overflow-visible">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,95,138,0.10) 0%, transparent 68%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(58,123,213,0.07) 0%, transparent 68%)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-6"
          >
            <MapPin size={13} /> Winnipeg, Manitoba, Canada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2E5F8A] mb-6 leading-tight"
          >
            Built by Operators, Not Theorists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Most AI strategy stalls at the roadmap. We close the gap between strategy and execution — setting the plan and building the software ourselves, under one roof.
          </motion.p>
        </div>
      </section>

      {/* ── How We're Different ── */}
      <section className="py-20 pb-32 relative z-10 bg-white">
        <div className="hidden lg:block absolute left-8 top-14 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#2E5F8A]/50 z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">How We&apos;re Different</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">
              Strategy and Execution, One Team
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left text-xs font-semibold uppercase tracking-widest text-[#6B7280] pb-4 pr-4 w-1/3" />
                  {comparison.columns.map((col) => (
                    <th
                      key={col.name}
                      className={`text-center text-xs font-bold uppercase tracking-wide pb-4 px-3 ${
                        col.highlight ? "text-[#2E5F8A]" : "text-[#6B7280]"
                      }`}
                    >
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-[#F8F9FA]" : ""}>
                    <td className="text-sm text-[#374151] font-medium py-3.5 pr-4 rounded-l-xl px-3">{row.label}</td>
                    {comparison.columns.map((col) => (
                      <td
                        key={col.name}
                        className={`text-center py-3.5 px-3 ${col.highlight ? "bg-[#2E5F8A]/6 rounded-r-xl" : ""}`}
                      >
                        <ComparisonMark value={col.values[ri]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
