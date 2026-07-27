"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const serviceLinks = [
  { label: "Fractional CAIO", href: "/services/fractional-caio", desc: "Executive AI leadership without the full-time cost" },
  { label: "AI Software Development", href: "/services/custom-ai-software-development", desc: "Custom software and AI solutions" },
  { label: "AI Transformation & Advisory", href: "/services/ai-transformation-advisory", desc: "Process, data, and adoption at scale" },
];

const resourceLinks = [
  { label: "Articles", href: "/insights", desc: "AI leadership & software insights" },
  { label: "Case Studies", href: "/work", desc: "Real results from real engagements" },
  { label: "Guides", href: "/guides", desc: "In-depth guides for builders & buyers" },
  { label: "Tools", href: "/mvp-calculator", desc: "MVP cost & timeline calculator" },
];

const navLinks = [
  { label: "Services",     href: "/services",  kind: "services" as const },
  { label: "Our Approach", href: "/approach",   kind: "link" as const },
  { label: "Our Work",     href: "/work",       kind: "link" as const },
  { label: "About",        href: "/about",      kind: "link" as const },
  { label: "Resources",    href: "/insights",   kind: "resources" as const },
  { label: "Contact",      href: "/contact",    kind: "link" as const },
];

// ── Shared dropdown panel ──────────────────────────────────────────────────────

function DropdownPanel({
  items, onClose,
}: {
  items: { label: string; href: string; desc: string }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden p-2"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#F8F9FA] transition-colors"
        >
          <span className="font-semibold text-sm text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
            {item.label}
          </span>
          <span className="text-xs text-[#6B7280]">{item.desc}</span>
        </Link>
      ))}
    </motion.div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "resources" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3"
          : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/audax-icon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <span className="leading-none">
            <span className="block font-[var(--font-outfit)] font-extrabold text-sm tracking-wide text-[#0F172A]">
              AUDAX
            </span>
            <span className="block font-[var(--font-outfit)] font-medium text-[9px] tracking-[0.2em] text-[#6B7280]">
              VENTURES
            </span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.kind === "services" || link.kind === "resources") {
              const isOpen = openMenu === link.kind;
              const items = link.kind === "services" ? serviceLinks : resourceLinks;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.kind)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(link.href) || isOpen
                        ? "text-[#0F172A] bg-[#0F172A]/6 font-semibold"
                        : "text-[#374151] hover:text-[#0F172A] hover:bg-[#0F172A]/5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-250 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && <DropdownPanel items={items} onClose={() => setOpenMenu(null)} />}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#0F172A] bg-[#0F172A]/6 font-semibold"
                    : "text-[#374151] hover:text-[#0F172A] hover:bg-[#0F172A]/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B1220] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#1E293B] hover:shadow-[0_0_24px_rgba(11,18,32,0.35)] hover:scale-[1.03]"
          >
            Book a Free Strategy Call
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="bg-white px-4 py-4">
              <div className="flex flex-col gap-0.5 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-[#0F172A]/6 text-[#0F172A] font-semibold"
                        : "text-[#374151] hover:bg-[#F8F9FA] hover:text-[#0F172A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#0F172A] px-3 mb-2">Services</p>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center pl-3 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#0F172A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    {s.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#0F172A] px-3 mb-2">Resources</p>
                {resourceLinks.map((r) => (
                  <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center pl-3 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#0F172A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    {r.label}
                  </Link>
                ))}
              </div>

              <Link
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl bg-[#0B1220] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors"
              >
                Book a Free Strategy Call
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
