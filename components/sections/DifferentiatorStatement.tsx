"use client";

import { motion } from "framer-motion";

export default function DifferentiatorStatement() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1220 0%, #111C33 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 68%)" }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 68%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-widest uppercase text-[#60A5FA] mb-6"
        >
          Why Audax
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-outfit)] font-medium text-2xl sm:text-3xl lg:text-4xl leading-snug"
        >
          <span className="text-white/45">
            Most firms help you define the strategy or build the technology.{" "}
          </span>
          <span className="font-extrabold bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#C4B5FD] bg-clip-text text-transparent">
            Audax does both, then stays with you to ensure it delivers real business results.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
