"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const mainServices = [
  {
    label: "Fractional Chief AI Officer",
    href: "/services/fractional-caio",
    desc: "Executive-level AI leadership & strategic guidance",
    num: "01", icon: "👔",
    stat: "Exec-level AI leadership",
    preview: "Get executive-level AI leadership without the cost of hiring a full-time Chief AI Officer — strategy, governance, training, and ROI tracking on a monthly retainer.",
  },
  {
    label: "Custom AI & Software Development",
    href: "/services/custom-ai-software-development",
    desc: "Custom software, automation & AI-powered apps",
    num: "02", icon: "💻",
    stat: "100% IP ownership",
    preview: "Custom software, automation solutions, AI-powered applications, and digital products built around your business.",
  },
];

const mainIndustries = [
  {
    label: "Financial Services",
    href: "/industries/financial-services",
    desc: "Compliant, secure fintech & finance platforms",
    num: "01", icon: "💳",
    stat: "FINTRAC / PCI DSS / SOC 2 ready",
    preview: "Payment platforms, lending tools, wealth management dashboards, and financial data pipelines built to regulatory-grade standards.",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
    desc: "Practice management for law & accounting firms",
    num: "02", icon: "⚖️",
    stat: "Built for billable hours",
    preview: "Matter management systems, client portals, document automation, and billing platforms for law firms, accounting practices, and consultancies.",
  },
  {
    label: "Hospitality & Tourism",
    href: "/industries/hospitality-tourism",
    desc: "Guest experience, booking & operations software",
    num: "03", icon: "🏨",
    stat: "Built for peak-season demand",
    preview: "Booking platforms, guest-facing chatbots, and operations tools for resorts, hotels, and tourism operators.",
  },
];

const navLinks = [
  { label: "About",      href: "/about",     hasDropdown: false, hasIndustriesDropdown: false },
  { label: "Services",   href: "/services",  hasDropdown: true,  hasIndustriesDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false, hasIndustriesDropdown: true },
  { label: "Work",       href: "/work",      hasDropdown: false, hasIndustriesDropdown: false },
  { label: "Insights",   href: "/insights",  hasDropdown: false, hasIndustriesDropdown: false },
];

// ── Shared sub-components ─────────────────────────────────────────────────────

/** Dark left rail item shared by Services and Industries dropdowns */
/** Large, prominent card for a main service/industry shown directly in the dropdown */
function BigCard({
  href, icon, label, desc, stat, onClose,
}: {
  href: string; icon: string; label: string; desc: string; stat: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 hover:border-[#2E5F8A]/30 hover:bg-[#F8F9FA] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <ArrowRight size={14} className="text-[#9CA3AF] group-hover:text-[#2E5F8A] group-hover:translate-x-0.5 transition-all" />
      </div>
      <div>
        <p className="font-[var(--font-outfit)] font-extrabold text-[#1A1A2E] text-base mb-1 leading-snug">{label}</p>
        <p className="text-[#6B7280] text-sm leading-snug">{desc}</p>
      </div>
      <div className="inline-flex items-center self-start px-2.5 py-1 rounded-full bg-[#2E5F8A]/8 text-[#2E5F8A] text-xs font-bold mt-1">
        {stat}
      </div>
    </Link>
  );
}

/** Full-width CTA strip at the bottom of a dropdown */
function CTAStrip({ prompt, linkLabel, href }: { prompt: string; linkLabel: string; href: string }) {
  return (
    <div
      className="px-6 py-4 flex items-center justify-between"
      style={{ background: "linear-gradient(90deg, #0F172A 0%, #1A3A5C 100%)" }}
    >
      <p className="text-white/55 text-xs">{prompt}</p>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#60A5FA] transition-colors"
      >
        {linkLabel} <ArrowRight size={11} />
      </Link>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
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
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
          : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      {/* Gradient bottom border */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E5F8A]/30 to-transparent"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/audax-logo.png"
            alt="Audax Ventures"
            width={160}
            height={52}
            priority
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {

            /* ── Services Mega Dropdown ── */
            if (link.hasDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href) || servicesOpen
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${servicesOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280]">
                            Core Services
                          </p>
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
                          >
                            View all services <ArrowRight size={10} />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {mainServices.map((s) => (
                            <BigCard
                              key={s.href}
                              href={s.href} icon={s.icon} label={s.label} desc={s.desc} stat={s.stat}
                              onClose={() => setServicesOpen(false)}
                            />
                          ))}
                        </div>
                      </div>

                      <CTAStrip
                        prompt="Not sure which service fits? Tell us what you're building."
                        linkLabel="Book a Free AI Strategy Call"
                        href="https://calendly.com/audax-ventures/30min"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Industries Mega Dropdown ── */
            if (link.hasIndustriesDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href) || industriesOpen
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${industriesOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280]">
                            Main Industries
                          </p>
                          <Link
                            href="/industries"
                            onClick={() => setIndustriesOpen(false)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
                          >
                            View all industries <ArrowRight size={10} />
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {mainIndustries.map((ind) => (
                            <BigCard
                              key={ind.href}
                              href={ind.href} icon={ind.icon} label={ind.label} desc={ind.desc} stat={ind.stat}
                              onClose={() => setIndustriesOpen(false)}
                            />
                          ))}
                        </div>
                      </div>

                      <CTAStrip
                        prompt="Building for a specific industry? Let's talk requirements."
                        linkLabel="Book a Free AI Strategy Call"
                        href="https://calendly.com/audax-ventures/30min"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Regular link ── */
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                    : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA with shimmer ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E5F8A] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#3A7BD5] hover:shadow-[0_0_24px_rgba(46,95,138,0.45)] hover:scale-[1.03]"
          >
            <motion.span
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
            />
            <Phone size={13} />
            Book a Free Strategy Call
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
              {/* Main nav links */}
              <div className="flex flex-col gap-0.5 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-[#2E5F8A]/8 text-[#2E5F8A] font-semibold"
                        : "text-[#1A1A2E] hover:bg-[#F8F9FA] hover:text-[#2E5F8A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Services sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Main Services</p>
                {mainServices.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-base">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
                <Link href="/services" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1.5 pl-3 pr-3 py-2 mt-1 rounded-lg text-sm font-semibold text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                  View all services <ArrowRight size={12} />
                </Link>
              </div>

              {/* Industries sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Main Industries</p>
                {mainIndustries.map((ind) => (
                  <Link key={ind.href} href={ind.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-base">{ind.icon}</span>
                    {ind.label}
                  </Link>
                ))}
                <Link href="/industries" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1.5 pl-3 pr-3 py-2 mt-1 rounded-lg text-sm font-semibold text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                  View all industries <ArrowRight size={12} />
                </Link>
              </div>

              {/* Mobile CTA */}
              <Link
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl bg-[#2E5F8A] text-white text-sm font-bold hover:bg-[#3A7BD5] transition-colors"
              >
                <Phone size={14} />
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
