"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const leaders = [
  {
    name: "Joshua Zaporzan",
    title: "Founder & Fractional CAIO",
    photo: "/team/joshua-zaporzan.avif",
    credibility: "[PLACEHOLDER — one-line credibility marker]",
  },
  {
    name: "Riley Peterson",
    title: "[PLACEHOLDER title]",
    photo: "/team/riley-peterson.png",
    credibility: "[PLACEHOLDER — one-line credibility marker]",
  },
];

export default function AboutAudaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative z-10 pt-24 pb-0">
      {/* Thread marker */}
      <div className="hidden lg:block absolute left-8 top-14 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#2E5F8A]/50 z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — matches the "How We Help" treatment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">About Audax</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">
            Strategy That Ships
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* ── Left: copy — slides in from the left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Most AI advisory stops at the roadmap. Audax Ventures pairs executive-level Fractional Chief AI Officer leadership with an in-house development team — so the strategy we set is the same team that builds it. No handoff to a separate vendor, no slide deck that never becomes software. Just a single accountable partner from opportunity assessment through shipped product.
            </p>
          </motion.div>

          {/* ── Right: photo — slides in from the right, drifts gently on scroll ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            style={{ y: photoY }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/about-audax.png"
                alt="Audax Ventures advisor reviewing AI-driven business performance data with a client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Leadership ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Led By</p>
          <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E]">Leadership</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-7 text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-white shadow-md relative">
                <Image src={leader.photo} alt={leader.name} fill className="object-cover object-top" sizes="96px" />
              </div>
              <h4 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base mb-0.5">{leader.name}</h4>
              <p className="text-[#2E5F8A] text-xs font-semibold mb-2">{leader.title}</p>
              <p className="text-[#9CA3AF] text-xs italic leading-snug">{leader.credibility}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
