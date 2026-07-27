"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Quote } from "lucide-react";

const credentials = [
  "Founder & CEO, H2MB Inc.",
  "Managing Director, Audax Ventures",
  "10+ Years in Strategy, Operations & Technology",
  "Board Member & Industry Advisor",
];

export default function FractionalCaioSpotlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-[#2563EB] font-semibold mb-10"
        >
          Meet Your Fractional CAIO
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 lg:gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] w-full max-w-xs mx-auto lg:mx-0"
          >
            <Image
              src="/team/joshua-zaporzan.avif"
              alt="Joshua Zaporzan"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 60vw, 280px"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#0F172A] mb-3">
              Joshua Zaporzan
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Entrepreneur, builder, and AI strategist with a track record of founding companies, leading teams, and delivering innovative solutions that scale.
            </p>
            <div className="space-y-2.5 mb-6">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-2.5">
                  <Briefcase size={14} className="text-[#2563EB] flex-shrink-0" />
                  <span className="text-sm text-[#374151]">{c}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/joshua-zaporzan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="https://twitter.com/audaxventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="mailto:info@audaxventures.ca"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><path d="M2 6h20v12H2z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F8F9FA] rounded-3xl p-7"
          >
            <Quote className="text-[#2563EB]/30 mb-3" size={28} />
            <p className="text-[#0F172A] text-base font-medium leading-relaxed mb-4">
              &ldquo;Most companies don&apos;t need more advice. They need a partner who can set the strategy and build the solution.&rdquo;
            </p>
            <p className="text-[#6B7280] text-sm">— Joshua Zaporzan</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
