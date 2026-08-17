"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scroll-in fade. Triggers once when the element enters the viewport,
 * fades opacity 0 → 1 and translates 24px up.
 *
 * Respects prefers-reduced-motion via a CSS override (see the `.fade-in`
 * rule in globals.css) rather than framer-motion's useReducedMotion hook —
 * that hook caches its value once from `window.matchMedia` and has no
 * `window` to read during SSR, so it isn't reliable in this app on first
 * render. The CSS override always wins over the inline styles set below,
 * regardless of any JS timing.
 *
 * Use sparingly — wrap top-level page sections, not every element.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`fade-in${className ? ` ${className}` : ""}`}
    >
      {children}
    </motion.div>
  );
}
