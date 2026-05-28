"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, BrainCircuit, Zap } from "lucide-react";

const programs = [
  {
    icon: Building2,
    badge: "For Enterprise",
    title: "Enterprise Innovation Program",
    description:
      "Senior-only team, executive-ready reporting, and full IP transfer — from whiteboard to production.",
    href: "/programs/enterprise-innovation-program",
    gradient: "from-[#78350F] via-[#92400E] to-[#78350F]",
    accentColor: "#D97706",
    phases: [
      {
        name: "Audit",
        duration: "2–3 wks",
        deliverables: ["Tech landscape audit", "Innovation Blueprint", "Investment case"],
      },
      {
        name: "Build",
        duration: "3–9 mo",
        deliverables: ["Production software", "Full test coverage", "Team training"],
      },
      {
        name: "Scale",
        duration: "6–24 mo",
        deliverables: ["Sprint retainer", "Architecture evolution", "Roadmap reviews"],
      },
    ],
    stat: { value: "100%", label: "IP ownership" },
  },
  {
    icon: BrainCircuit,
    badge: "AI Program",
    title: "AI Implementation",
    description:
      "A structured engagement that takes your business from assessing where AI can drive value, to building the right solution, to refining it over time.",
    href: "/programs/ai-implementation",
    gradient: "from-[#78350F] via-[#92400E] to-[#78350F]",
    accentColor: "#D97706",
    phases: [
      {
        name: "Discover",
        duration: "1–2 wks",
        deliverables: ["Business AI audit", "Opportunity identification", "Build vs. buy analysis"],
      },
      {
        name: "Build",
        duration: "4–16 wks",
        deliverables: ["Custom software or automation", "Platform configuration", "Team training"],
      },
      {
        name: "Evolve",
        duration: "Ongoing",
        deliverables: ["Performance monitoring", "Iterative improvements", "Roadmap enhancements"],
      },
    ],
    stat: { value: "100%", label: "IP ownership" },
  },
  {
    icon: Zap,
    badge: "For Founders",
    title: "Founder Prototype Program",
    description:
      "Idea to working prototype fast — validate before you commit to a full build.",
    href: "https://www.audaxventures.io",
    external: true,
    gradient: "from-[#78350F] via-[#92400E] to-[#78350F]",
    accentColor: "#D97706",
    phases: [
      {
        name: "Define",
        duration: "1 wk",
        deliverables: ["Core hypothesis", "Prototype scope", "Tech recommendation"],
      },
      {
        name: "Build",
        duration: "2–4 wks",
        deliverables: ["Working prototype", "Live URL", "Source code handover"],
      },
      {
        name: "Validate",
        duration: "1–2 wks",
        deliverables: ["User testing sessions", "Feedback synthesis", "Next steps plan"],
      },
    ],
    stat: { value: "4 wks", label: "idea to prototype" },
  },
];

function PhaseStrip({ phases, accentColor, inView }: {
  phases: typeof programs[0]["phases"];
  accentColor: string;
  inView: boolean;
}) {
  return (
    <div className="mt-7 mb-7">
      {/* Connector line + dots row */}
      <div className="relative flex items-start">
        {/* Background track */}
        <div className="absolute top-[13px] left-0 right-0 h-[2px] bg-white/10 rounded-full" />

        {/* Animated fill */}
        <motion.div
          className="absolute top-[13px] left-0 h-[2px] rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        {/* Phase columns */}
        {phases.map((phase, i) => (
          <div key={phase.name} className="flex-1 flex flex-col items-center relative">
            {/* Dot */}
            <motion.div
              className="w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 mb-3"
              style={{ borderColor: accentColor, backgroundColor: "#0F172A" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: accentColor }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.35 + i * 0.2, duration: 0.2 }}
              />
            </motion.div>

            {/* Phase label + duration */}
            <motion.div
              className="text-center px-1"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.3 }}
            >
              <p className="text-white font-[var(--font-outfit)] font-bold text-sm leading-none mb-1">
                {phase.name}
              </p>
              <p className="text-white/40 text-[10px] font-medium mb-3">{phase.duration}</p>
              <div className="space-y-1">
                {phase.deliverables.map((d) => (
                  <p key={d} className="text-white/55 text-[10px] leading-snug">{d}</p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program, delay }: { program: typeof programs[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${program.gradient} p-8 text-white flex flex-col`}
    >
      {/* Decorative orbs */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/4 pointer-events-none" />
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/4 pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide mb-4">
            <program.icon size={12} />
            {program.badge}
          </div>
          <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl mb-2">{program.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">{program.description}</p>
        </div>
        {/* Stat chip */}
        <div className="shrink-0 ml-4 text-center bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
          <p className="font-[var(--font-outfit)] font-extrabold text-2xl text-white leading-none mb-0.5">
            {program.stat.value}
          </p>
          <p className="text-white/45 text-[10px] leading-tight">{program.stat.label}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-white/10 mb-1">
        <span className="absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest text-white/30 bg-transparent">
          Program Journey
        </span>
      </div>

      {/* Animated phase strip */}
      <PhaseStrip phases={program.phases} accentColor={program.accentColor} inView={inView} />

      {/* CTA */}
      <div className="relative mt-auto pt-2 border-t border-white/10">
        <Link
          href={program.href}
          target={"external" in program && program.external ? "_blank" : undefined}
          rel={"external" in program && program.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-semibold text-sm hover:bg-white/90 transition-colors"
          style={{ color: program.accentColor }}
        >
          Full Program Details <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function SolutionsOverview() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">
            Structured Programs
          </p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Our Programs
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Beyond individual services — structured, phased programs designed for where you are in your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
