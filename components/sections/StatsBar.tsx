"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Count-up hook ──────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger || end === 0) {
      setCount(end);
      return;
    }
    let startTs: number | null = null;

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };

    requestAnimationFrame(tick);
  }, [trigger, end, duration]);

  return count;
}

// ── Single animated stat ───────────────────────────────────────────────────
function AnimatedStat({
  end,
  suffix = "",
  prefix = "",
  staticText,
  label,
  delay,
}: {
  end?: number;
  suffix?: string;
  prefix?: string;
  staticText?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const count = useCountUp(end ?? 0, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-white mb-2 tabular-nums">
        {staticText ? (
          // Static values (e.g. "8–16", "$0") pop in with a scale bounce
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: delay + 0.1 }}
          >
            {staticText}
          </motion.span>
        ) : (
          <span>
            {prefix}
            {count}
            {suffix}
          </span>
        )}
      </div>
      <div className="text-blue-200 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

// ── Marquee data ───────────────────────────────────────────────────────────
const trustedBy: { name: string; logo: string; logoOnly: boolean }[] = [
  { name: "FundEze",                logo: "/logos/fundeze.png",        logoOnly: true  },
  { name: "MigrateEzy",             logo: "/logos/migrateezy.png",     logoOnly: true  },
  { name: "LinkGlobal Network",     logo: "/logos/linkglobal.avif",    logoOnly: false },
  { name: "GreenGlam Tech",         logo: "/logos/greenglam-tech.png", logoOnly: false },
  { name: "H2MB",                   logo: "/logos/h2mb.avif",          logoOnly: false },
  { name: "AssessTEAM",             logo: "/logos/assessteam.svg",     logoOnly: true  },
  { name: "Elkhorn Resort",         logo: "/logos/elkhorn-resort.avif", logoOnly: false },
  { name: "Clear Lake Golf Course", logo: "/logos/clear-lake-golf.avif", logoOnly: false },
];

// ── Main component ─────────────────────────────────────────────────────────
export default function StatsBar() {
  return (
    <>
      {/* ── Trusted By Marquee ── */}
      <section className="bg-[#F8F9FA] py-10 border-y border-gray-100 overflow-hidden">
        <p className="text-center text-[10px] tracking-widest uppercase text-[#6B7280] font-semibold mb-7">
          Trusted by founders and enterprises across North America
        </p>

        {/* Fade-edge wrapper */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

          {/* Duplicated list for seamless loop */}
          <div className="animate-marquee">
            {[...trustedBy, ...trustedBy].map((co, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm text-[#6B7280] font-[var(--font-outfit)] font-bold text-sm tracking-tight select-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={co.logo}
                  alt={co.name}
                  className="h-7 w-auto object-contain"
                />
                {!co.logoOnly && (
                  <span>{co.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Count-Up Stats Bar ── */}
      <section className="bg-[#2E5F8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedStat end={50}  suffix="+"     label="Projects Delivered"  delay={0}    />
            <AnimatedStat end={98}  suffix="%"     label="Client Satisfaction" delay={0.1}  />
            <AnimatedStat staticText="Exec-level"  label="AI Leadership"      delay={0.2}  />
            <AnimatedStat staticText="100%"        label="Code Ownership"      delay={0.3}  />
          </div>
        </div>
      </section>
    </>
  );
}
