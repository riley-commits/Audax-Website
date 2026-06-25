"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  heading = "Ready to Build Something Extraordinary?",
  subtext = "Book a free strategy call and let's get started today.",
  buttonText = "Book a Free Strategy Call",
}: {
  heading?: string;
  subtext?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-[#2E5F8A] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 text-lg mb-8"
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
        >
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#2E5F8A] font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
          >
            {buttonText}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
