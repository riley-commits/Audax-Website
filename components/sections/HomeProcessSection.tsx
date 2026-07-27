"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, SearchCheck, Box, Rocket, Flag, LineChart,
  ChevronLeft, ChevronRight, CheckCircle2, Play,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We learn your business, your data, and where AI can create real impact.",
    checklist: ["Discovery workshops", "Stakeholder interviews", "Data & systems audit", "Opportunity mapping"],
  },
  {
    icon: SearchCheck,
    title: "Assess",
    description: "We assess feasibility, risk, and ROI before committing to a direction.",
    checklist: ["Feasibility & risk assessment", "ROI modeling", "Technical readiness review", "Prioritization"],
  },
  {
    icon: Box,
    title: "Design & Build",
    description: "We design the right solution and build secure, scalable software that integrates seamlessly with your operations.",
    checklist: ["Solution architecture", "Rapid prototyping", "Agile development", "Quality & security"],
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We deploy into production with the infrastructure and monitoring to support real usage.",
    checklist: ["Production deployment", "Monitoring & alerting", "Security hardening", "Team handoff"],
  },
  {
    icon: Flag,
    title: "Launch",
    description: "We launch to your team and users, with training and support built in.",
    checklist: ["User onboarding", "Change management", "Launch communications", "Support readiness"],
  },
  {
    icon: LineChart,
    title: "Optimize",
    description: "We measure results and continuously improve based on real-world data.",
    checklist: ["Performance monitoring", "Continuous iteration", "ROI tracking", "Quarterly strategy reviews"],
  },
];

export default function HomeProcessSection() {
  const [active, setActive] = useState(2);
  const step = steps[active];

  const go = (dir: -1 | 1) => {
    setActive((prev) => Math.min(steps.length - 1, Math.max(0, prev + dir)));
  };

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
        <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#60A5FA] font-semibold mb-4">Our Approach</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-white mb-4">
              A Clear Path From Strategy to Impact
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Scroll or drag to explore how we take you from idea to real-world results.
            </p>
          </motion.div>

          {/* Stepper */}
          <div className="w-full">
            <div className="flex items-center justify-between gap-1 mb-6">
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center gap-2 flex-1"
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      i === active
                        ? "bg-gradient-to-br from-[#7C3AED] to-[#2563EB] text-white scale-110 shadow-lg shadow-purple-900/40"
                        : i < active
                        ? "bg-white/15 text-white"
                        : "bg-white/5 text-white/30 group-hover:bg-white/10"
                    }`}
                  >
                    <s.icon size={17} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight ${i === active ? "text-white font-semibold" : "text-white/35"}`}>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs font-mono tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  disabled={active === 0}
                  aria-label="Previous step"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => go(1)}
                  disabled={active === steps.length - 1}
                  aria-label="Next step"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active step detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-7 sm:p-9 grid md:grid-cols-[1fr_320px] gap-8 items-center"
          >
            <div>
              <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">{step.description}</p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {step.checklist.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-[#374151]">
                    <CheckCircle2 size={14} className="text-[#7C3AED] flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative code + chart preview */}
            <div className="relative hidden md:block">
              <div className="bg-[#0B1220] rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#080D18]">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="p-3 font-mono text-[9px] leading-relaxed text-white/50">
                  <p><span className="text-[#7C3AED]">function</span> <span className="text-[#60A5FA]">optimize</span>(data) {"{"}</p>
                  <p className="pl-3">const result = ai.<span className="text-[#60A5FA]">predict</span>(data)</p>
                  <p className="pl-3"><span className="text-[#7C3AED]">return</span> {"{"} result, score {"}"}</p>
                  <p>{"}"}</p>
                </div>
              </div>
              <button
                aria-label="Play preview"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={16} className="text-[#0F172A] ml-0.5" fill="currentColor" />
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
