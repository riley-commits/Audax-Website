"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePackage } from "@/lib/services-data";

export default function PricingTiers({ packages }: { packages: ServicePackage[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {packages.map((pkg, i) => {
        const highlighted = i === 1;
        return (
          <div
            key={pkg.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
              highlighted
                ? "border-[#2E5F8A] bg-gradient-to-br from-[#0F172A] via-[#1A3A5C] to-[#0F172A] text-white shadow-lg"
                : "border-gray-200 bg-white text-[#1A1A2E] hover:border-[#2E5F8A]/30 hover:shadow-sm"
            }`}
          >
            {highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2E5F8A] text-white text-[10px] font-bold uppercase tracking-widest">
                Most Popular
              </span>
            )}

            <h3
              className={`font-[var(--font-outfit)] font-extrabold text-xl mb-2 leading-snug ${
                highlighted ? "text-white" : "text-[#1A1A2E]"
              }`}
            >
              {pkg.name}
            </h3>
            <p className={`text-sm mb-5 ${highlighted ? "text-white/70" : "text-[#6B7280]"}`}>
              {pkg.tagline}
            </p>

            <div className="flex items-baseline gap-1 mb-5">
              <span
                className={`font-[var(--font-outfit)] font-extrabold text-4xl ${
                  highlighted ? "text-white" : "text-[#1A1A2E]"
                }`}
              >
                {pkg.price}
              </span>
              <span className={`text-sm ${highlighted ? "text-white/60" : "text-[#6B7280]"}`}>
                {pkg.priceUnit}
              </span>
            </div>

            <div
              className={`rounded-xl px-4 py-3 mb-6 text-xs leading-relaxed ${
                highlighted ? "bg-white/10 text-white/80" : "bg-[#F8F9FA] text-[#6B7280]"
              }`}
            >
              <span className={`font-bold ${highlighted ? "text-white" : "text-[#1A1A2E]"}`}>
                Best for:
              </span>{" "}
              {pkg.bestFor}
            </div>

            <div className="space-y-2 mb-7 flex-1">
              {pkg.features && pkg.features.length > 0
                ? pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex gap-2.5 text-sm leading-relaxed ${
                        highlighted ? "text-white/80" : "text-[#4B5563]"
                      }`}
                    >
                      <CheckCircle2
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${
                          highlighted ? "text-white/60" : "text-[#2E5F8A]"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))
                : pkg.monthlyPhases.map((phase) => (
                    <div key={phase.month}>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                            highlighted
                              ? "bg-white/15 text-white"
                              : "bg-[#2E5F8A]/10 text-[#2E5F8A]"
                          }`}
                        >
                          {phase.month}
                        </span>
                        <h4
                          className={`font-[var(--font-outfit)] font-bold text-sm ${
                            highlighted ? "text-white" : "text-[#1A1A2E]"
                          }`}
                        >
                          Month {phase.month}: {phase.title}
                        </h4>
                      </div>
                      <ul className="space-y-1.5 ml-9">
                        {phase.activities.map((a) => (
                          <li
                            key={a}
                            className={`flex gap-2 text-xs leading-relaxed ${
                              highlighted ? "text-white/75" : "text-[#6B7280]"
                            }`}
                          >
                            <CheckCircle2
                              size={12}
                              className={`mt-0.5 flex-shrink-0 ${
                                highlighted ? "text-white/50" : "text-[#2E5F8A]"
                              }`}
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      {phase.deliverables.length > 0 && (
                        <div className="ml-9 mt-2 space-y-1">
                          {phase.deliverables.map((d) => (
                            <div
                              key={d}
                              className={`inline-block mr-2 rounded-md px-2 py-1 text-[11px] font-semibold ${
                                highlighted
                                  ? "bg-white/15 text-white"
                                  : "bg-[#2E5F8A]/10 text-[#2E5F8A]"
                              }`}
                            >
                              📄 {d}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
            </div>

            <Link
              href="https://calendly.com/audax-ventures/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                highlighted
                  ? "bg-white text-[#1A1A2E] hover:bg-white/90"
                  : "bg-[#2E5F8A] text-white hover:bg-[#3A7BD5]"
              }`}
            >
              Book a Call <ArrowRight size={14} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
