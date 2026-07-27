"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Check, X, Minus } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "Joshua Zaporzan",
    role: "Founder & Fractional CAIO",
    tagline: "[PLACEHOLDER — one-line credibility marker]",
    photo: "/team/joshua-zaporzan.avif",
    bio: "[PLACEHOLDER bio]",
    linkedin: "https://www.linkedin.com/in/joshua-zaporzan/",
  },
  {
    name: "Riley Peterson",
    role: "[PLACEHOLDER title]",
    tagline: "[PLACEHOLDER — one-line credibility marker]",
    photo: "/team/riley-peterson.png",
    bio: "[PLACEHOLDER bio]",
    linkedin: "https://www.linkedin.com/in/riley-peterson-708aa9225/",
  },
];

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

// ── Team card with hover-reveal bio ─────────────────────────────────

function TeamCard({ member, delay }: { member: typeof team[0]; delay: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((v) => !v)}
    >
      {/* Front face */}
      <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-7 text-center transition-colors duration-300 group-hover:border-[#2E5F8A]/30">
        <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-white shadow-md">
          <Image
            src={member.photo}
            alt={member.name}
            width={112}
            height={112}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base mb-0.5">{member.name}</h3>
        <p className="text-[#2E5F8A] text-xs font-semibold mb-2">{member.role}</p>
        <p className="text-[#9CA3AF] text-xs italic leading-snug">{member.tagline}</p>
      </div>

      {/* Slide-up bio overlay */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl flex flex-col justify-between p-7"
            style={{ background: "linear-gradient(160deg, #1A3A5C 0%, #0F172A 100%)" }}
          >
            <div>
              <h3 className="font-[var(--font-outfit)] font-bold text-white text-base mb-0.5">{member.name}</h3>
              <p className="text-[#3A7BD5] text-xs font-semibold mb-4">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
            </div>
            <a
              href={member.linkedin}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mt-4"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
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

      {/* ── Our Story ── */}
      <section className="pt-10 lg:pt-20 pb-16 relative z-10">
        <div className="hidden lg:block absolute left-8 top-14 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#2E5F8A]/50 z-10" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Our Story</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E]">How Audax Started</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-[#6B7280] text-base leading-relaxed"
          >
            <p>[PLACEHOLDER — paragraph 1 of the Audax origin story.]</p>
            <p>[PLACEHOLDER — paragraph 2: the gap between strategy and execution we set out to close.]</p>
            <p>[PLACEHOLDER — paragraph 3: where the firm is today.]</p>
          </motion.div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 relative">
        <div className="hidden lg:block absolute left-8 top-14 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#2E5F8A]/50 z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Leadership</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Who Runs Audax</h2>
            <p className="text-[#6B7280] mt-4 max-w-xl text-sm">
              Hover (or tap) either card to read the full bio.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.07} />
            ))}
          </div>
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
