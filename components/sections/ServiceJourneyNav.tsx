"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const journey = [
  { phase: "Think", label: "AI Leadership", href: "/services/ai-leadership" },
  { phase: "Build", label: "Custom Software Development", href: "/services/custom-software-development" },
  { phase: "Scale", label: "Digital Operations", href: "/services/digital-operations" },
] as const;

export default function ServiceJourneyNav({ current }: { current: "Think" | "Build" | "Scale" }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-10">
      {journey.map((j, i) => {
        const isActive = j.phase === current;
        return (
          <div key={j.phase} className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href={j.href}
              title={j.label}
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-sm"
                  : "text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F8F9FA]"
              }`}
            >
              {j.phase}
            </Link>
            {i < journey.length - 1 && (
              <ArrowRight size={13} className="text-gray-300 flex-shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
