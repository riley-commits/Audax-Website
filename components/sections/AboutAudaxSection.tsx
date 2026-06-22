"use client";

import { motion } from "framer-motion";

export default function AboutAudaxSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">About Audax</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-6 leading-tight">
            An AI Strategy &amp; Innovation Firm
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            Audax Ventures is an AI strategy and innovation firm that helps organizations identify, implement, and scale technology solutions that create measurable business value. Through Fractional Chief AI Officer services, AI transformation initiatives, and custom software development, we work alongside leadership teams to turn emerging technology into practical business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
