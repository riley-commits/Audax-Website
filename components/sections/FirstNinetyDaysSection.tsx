"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import type { ServicePageData } from "@/lib/service-pages-data";

function SectionEyebrow({ icon: Icon, label, accent }: { icon: React.ElementType; label: string; accent: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}14` }}>
        <Icon size={15} style={{ color: accent }} />
      </div>
      <p className="text-xs font-bold tracking-widest uppercase" style={{ color: accent }}>{label}</p>
    </div>
  );
}

export default function FirstNinetyDaysSection({
  data, accent,
}: {
  data: NonNullable<ServicePageData["firstNinetyDays"]>;
  accent: string;
}) {
  const [active, setActive] = useState(0);
  const stage = data.stages[active];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-12">
          <SectionEyebrow icon={Calendar} label={data.eyebrow} accent={accent} />
          <p className="text-sm font-semibold mb-4" style={{ color: accent }}>{data.permanentNote}</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-4 leading-snug">
            {data.heading}
          </h2>
          <p className="text-[#374151] leading-relaxed">{data.subhead}</p>
        </motion.div>

        {/* ── Horizontal stage tabs with connecting line ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mb-10"
        >
          <div className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-gray-200" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.stages.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="group relative text-left"
                >
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-[var(--font-outfit)] font-extrabold text-sm border-2 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? accent : "#FFFFFF",
                      borderColor: isActive ? accent : "#E5E7EB",
                      color: isActive ? "#FFFFFF" : "#9CA3AF",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                    style={{ color: isActive ? accent : "#9CA3AF" }}
                  >
                    {s.range}
                  </p>
                  <p className={`font-[var(--font-outfit)] font-bold text-base transition-colors duration-300 ${isActive ? "text-[#0F172A]" : "text-[#B0B5BF] group-hover:text-[#374151]"}`}>
                    {s.title}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Detail panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 sm:p-12"
          >
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -top-6 right-4 font-[var(--font-outfit)] font-extrabold text-[160px] leading-none"
              style={{ color: "#0F172A", opacity: 0.035 }}
            >
              0{active + 1}
            </span>

            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>{stage.range}</p>
              <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#0F172A] mb-5">
                {stage.title}
              </h3>
              <p className="text-[#374151] leading-relaxed mb-8">{stage.description}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Typically Includes:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {stage.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-[#374151]">
                    <Check size={15} style={{ color: accent }} className="flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-sm text-[#374151] leading-relaxed mt-6 max-w-2xl">{data.footerNote}</p>
      </div>
    </section>
  );
}
