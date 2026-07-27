"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ClipboardCheck, Box, Rocket, LineChart, CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    accent: "#2563EB",
    description: "We start by understanding your business, goals, and challenges. Through collaborative discussions, we uncover opportunities where technology, AI, and automation can create measurable business value.",
    activities: ["Business Discovery", "Stakeholder Interviews", "Goal Alignment", "Opportunity Mapping"],
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    accent: "#4F46E5",
    description: "Next, we evaluate your current processes, systems, and technology to identify inefficiencies, risks, and the highest-impact opportunities for improvement.",
    activities: ["Process Review", "AI Assessment", "Technology Audit", "Gap Analysis"],
  },
  {
    icon: Box,
    title: "Design & Build",
    accent: "#7C3AED",
    description: "With a clear strategy in place, we design and develop the right solution, whether that's custom software, AI workflows, automation, or digital tools tailored to your business.",
    activities: ["Solution Design", "Custom Software Development", "AI Integration", "User Testing"],
  },
  {
    icon: Rocket,
    title: "Launch",
    accent: "#0891B2",
    description: "We implement the solution with minimal disruption, ensuring your team is prepared, your systems are configured correctly, and everything is ready for successful adoption.",
    activities: ["System Deployment", "Team Training", "Go-Live Support", "Performance Monitoring"],
  },
  {
    icon: LineChart,
    title: "Optimize",
    accent: "#10B981",
    description: "Technology should continuously evolve alongside your business. We provide ongoing improvements, support, and strategic guidance to maximize long-term value and ROI.",
    activities: ["Performance Review", "Continuous Improvement", "Feature Enhancements", "Strategic Advisory"],
  },
];

export default function HomeProcessSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#60A5FA] font-semibold mb-4">Our Approach</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-white mb-4">
            A Clear Path From Strategy to Impact
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl">
            Click a stage to see how we take you from idea to real-world results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-10 items-start">

          {/* ── Vertical step list ── */}
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-250 ${
                    isActive ? "bg-white/10 border border-white/15" : "border border-transparent hover:bg-white/5"
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? s.accent : "rgba(255,255,255,0.06)",
                      boxShadow: isActive ? `0 0 24px ${s.accent}55` : "none",
                    }}
                  >
                    <s.icon size={28} className={isActive ? "text-white" : "text-white/40"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-mono tabular-nums mb-0.5 ${isActive ? "text-white/60" : "text-white/25"}`}>
                      0{i + 1}
                    </p>
                    <p className={`font-[var(--font-outfit)] font-extrabold text-xl transition-colors ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                      {s.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-7 sm:p-10 grid lg:grid-cols-[1fr_260px] gap-8 lg:gap-10 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: step.accent }}
                  >
                    <step.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-7">{step.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Key Activities</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {step.activities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={15} style={{ color: step.accent }} className="flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative icon graphic */}
              <div
                className="hidden lg:flex items-center justify-center rounded-3xl aspect-square relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${step.accent}22 0%, ${step.accent}08 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${step.accent}33 0%, transparent 60%)` }}
                />
                <div
                  className="relative w-28 h-28 rounded-3xl flex items-center justify-center"
                  style={{ backgroundColor: step.accent }}
                >
                  <step.icon size={56} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
