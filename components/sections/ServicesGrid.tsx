"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Crown, Code2, ArrowRight, Check, ChevronRight } from "lucide-react";

// ── Shared right-panel visual ───────────────────────────────────────────────

function PillarVisual({
  items,
  statLabel,
  stats,
}: {
  items: { label: string; sub: string; icon: string }[];
  statLabel: string;
  stats: { stat: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
        {statLabel}
      </p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="flex items-center gap-3 bg-white/8 hover:bg-white/12 transition-colors rounded-xl px-4 py-3 border border-white/10"
          >
            <span className="text-xl w-7 text-center">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-none mb-0.5">{item.label}</p>
              <p className="text-xs text-white/45 truncate">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-[var(--font-outfit)] font-extrabold text-2xl text-white">{s.stat}</div>
            <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    tabAccent: "text-blue-400",
    tabActiveBg: "bg-[#2E5F8A]",
    panelGradient: "from-[#1A3A5C] via-[#2E5F8A] to-[#1A3A5C]",
    features: [
      "AI opportunity assessment",
      "12-month AI roadmap",
      "Executive strategy sessions",
      "Leadership & employee training",
      "AI governance & risk management",
      "ROI tracking & reporting",
    ],
    visualItems: [
      { label: "Executive Strategy", sub: "Regular leadership sessions", icon: "👔" },
      { label: "AI Governance",      sub: "Ownership, risk, and policy", icon: "📋" },
      { label: "Team Training",      sub: "Leadership & employee enablement", icon: "📚" },
      { label: "ROI Reporting",      sub: "Measured business outcomes", icon: "📊" },
    ],
    visualStats: [
      { stat: "Strategy", label: "+ implementation" },
      { stat: "Exec",     label: "level leadership" },
      { stat: "Built",    label: "real AI tools" },
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
    tabAccent: "text-purple-400",
    tabActiveBg: "bg-purple-800",
    panelGradient: "from-purple-950 via-purple-800 to-purple-950",
    features: [
      "Custom software development",
      "AI-powered applications",
      "Process automation",
      "Internal tools & dashboards",
      "Integrations & APIs",
      "Ongoing support & iteration",
    ],
    visualItems: [
      { label: "Custom Software",     sub: "Built around your workflows", icon: "🛠️" },
      { label: "AI-Powered Apps",     sub: "LLM features, shipped",       icon: "🤖" },
      { label: "Process Automation",  sub: "Less manual work",            icon: "🔄" },
      { label: "Integrations & APIs", sub: "Connect your existing stack", icon: "🔗" },
    ],
    visualStats: [
      { stat: "6–16 wks", label: "typical build" },
      { stat: "100%",     label: "IP ownership" },
      { stat: "0",        label: "vendor lock-in" },
    ],
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2E5F8A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />
      {/* Corner orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2E5F8A]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">
            How We Help
          </p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Core Service Areas
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Fractional AI leadership and custom AI & software development — the full path from strategy to shipped software.
          </p>
        </motion.div>

        {/* Split panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-[340px_1fr] gap-4 items-stretch"
        >
          {/* ── Left: tab list ── */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setActiveIdx(i)}
                  className={`group relative text-left rounded-2xl border transition-all duration-250 overflow-hidden ${
                    isActive
                      ? "border-transparent shadow-lg"
                      : "border-gray-100 bg-white hover:border-[#2E5F8A]/20 hover:shadow-sm"
                  }`}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className={`absolute inset-0 bg-gradient-to-br ${s.panelGradient}`}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  )}

                  <div className="relative px-6 py-5 flex items-start gap-4">
                    {/* Number */}
                    <span className={`font-[var(--font-outfit)] font-extrabold text-xs mt-0.5 tabular-nums ${
                      isActive ? "text-white/40" : "text-[#D1D5DB]"
                    }`}>
                      {s.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <s.icon
                          size={15}
                          className={isActive ? "text-white/70" : s.tabAccent}
                        />
                        <h3 className={`font-[var(--font-outfit)] font-bold text-sm leading-none ${
                          isActive ? "text-white" : "text-[#1A1A2E]"
                        }`}>
                          {s.title}
                        </h3>
                        {s.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#2E5F8A]/10 text-[#2E5F8A]"
                          }`}>
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed ${
                        isActive ? "text-white/60" : "text-[#6B7280]"
                      }`}>
                        {s.tagline}
                      </p>
                    </div>

                    <ChevronRight
                      size={14}
                      className={`mt-0.5 flex-shrink-0 transition-transform duration-200 ${
                        isActive
                          ? "text-white rotate-90"
                          : "text-[#D1D5DB] group-hover:text-[#2E5F8A] group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              );
            })}

            {/* View all services */}
            <Link
              href="/services"
              className="mt-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-dashed border-[#2E5F8A]/30 text-sm font-semibold text-[#2E5F8A] hover:border-[#2E5F8A] hover:bg-[#2E5F8A]/5 transition-all"
            >
              View all 20 services <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Right: content panel ── */}
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${active.panelGradient} shadow-2xl min-h-[520px]`}>
            {/* Soft noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative h-full p-8 lg:p-10 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <active.icon size={20} className="text-white" />
                      </div>
                      {active.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white uppercase tracking-wider">
                          {active.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-white mb-2">
                      {active.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-md">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Two-column body: features left, visual right */}
                <div className="flex-1 grid md:grid-cols-2 gap-8">
                  {/* Feature checklist */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                      What&apos;s Included
                    </p>
                    <div className="space-y-2.5">
                      {active.features.map((f, i) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                            <Check size={11} className="text-white" />
                          </div>
                          <span className="text-sm text-white/80">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href={active.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-bold hover:bg-white/90 transition-colors"
                        style={{ color: activeIdx === 0 ? "#2E5F8A" : "#7C3AED" }}
                      >
                        Full Service Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Dynamic visual */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <PillarVisual items={active.visualItems} statLabel="What's Included" stats={active.visualStats} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
