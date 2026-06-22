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
    label: "AI Transformation & Advisory",
    href: "/services/ai-transformation-advisory",
    desc: "Assessments, roadmaps, governance & training",
    num: "02", icon: "🧭",
    stat: "4–8 wk typical engagement",
    preview: "AI assessments, roadmaps, governance, training, and implementation planning that turn AI ambition into a structured, de-risked plan.",
  },
  {
    label: "Custom AI & Software Development",
    href: "/services/custom-ai-software-development",
    desc: "Custom software, automation & AI-powered apps",
    num: "03", icon: "💻",
    stat: "100% IP ownership",
    preview: "Custom software, automation solutions, AI-powered applications, and digital products built around your business.",
  },
];

const otherServices = [
  { label: "AI Consulting",               href: "/services/ai-consulting",               icon: "🎯" },
  { label: "MVP Development",             href: "/services/mvp-development",             icon: "🚀" },
  { label: "SaaS Development",            href: "/services/saas-development",            icon: "☁️" },
  { label: "Website Development",         href: "/services/website-development",         icon: "🌐" },
  { label: "E-Commerce Development",      href: "/services/ecommerce-development",       icon: "🛍️" },
  { label: "iOS Development",             href: "/services/ios-development",             icon: "📱" },
  { label: "Android Development",         href: "/services/android-development",         icon: "🤖" },
  { label: "Front End Development",       href: "/services/frontend-development",        icon: "⚛️" },
  { label: "Back End Development",        href: "/services/backend-development",         icon: "🗄️" },
  { label: "Web Development",             href: "/services/web-development",             icon: "🖥️" },
  { label: "Custom Software",             href: "/services/custom-software-development", icon: "🛠️" },
  { label: "QA & Testing",               href: "/services/qa-testing",                  icon: "🔍" },
  { label: "Internal Tools",              href: "/services/internal-tools",             icon: "⚙️" },
  { label: "Process Automation",          href: "/services/process-automation",          icon: "🔄" },
  { label: "Customer Service Automation", href: "/services/customer-service-automation", icon: "💬" },
  { label: "CRM Systems",                 href: "/services/crm-systems",                 icon: "👥" },
  { label: "Digital Marketing",           href: "/services/digital-marketing",           icon: "📈" },
];

// Unified accent color across all 4 programs — per-program icon + label
// still differentiates the offerings.
const PROGRAM_ACCENT = "#D97706";

const programs = [
  {
    label: "Enterprise Innovation Program",
    href: "/programs/enterprise-innovation-program",
    desc: "From internal whiteboard to shipped product.",
    num: "01", icon: "🏗️",
    phases: ["Audit", "Build", "Scale"],
    color: PROGRAM_ACCENT,
  },
  {
    label: "AI Implementation",
    href: "/programs/ai-implementation",
    desc: "From AI audit to deployed solution — structured and bespoke.",
    num: "02", icon: "🤖",
    phases: ["Discover", "Build", "Evolve"],
    color: PROGRAM_ACCENT,
  },
  {
    label: "Founder Prototype Program",
    href: "https://www.audaxventures.io",
    desc: "Idea to working prototype fast — validate before you build.",
    num: "03", icon: "⚡",
    phases: ["Define", "Build", "Validate"],
    color: PROGRAM_ACCENT,
    external: true,
  },
];

const mainIndustries = [
  {
    label: "Healthcare & Medical",
    href: "/industries/healthcare-medical",
    desc: "PIPEDA-compliant platforms & patient tools",
    num: "01", icon: "🏥",
    stat: "42% admin reduction",
    preview: "PIPEDA-compliant patient portals, EHR integrations, and clinical decision tools for Canadian healthcare teams.",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
    desc: "ERP, automation & operations software",
    num: "02", icon: "🏭",
    stat: "23% OEE increase",
    preview: "Production scheduling, MES integrations, predictive maintenance, and supplier portals for modern manufacturers.",
  },
  {
    label: "Real Estate & Construction",
    href: "/industries/real-estate-construction",
    desc: "PropTech, CRM & project management",
    num: "03", icon: "🏗️",
    stat: "Real-time project visibility",
    preview: "Property management platforms, construction project portals, and CRM tools built for the pace of real estate.",
  },
];

const otherIndustries = [
  { label: "FinTech & Finance",             href: "/industries/fintech-finance",                icon: "💳" },
  { label: "Retail & E-Commerce",           href: "/industries/retail-ecommerce",               icon: "🛍️" },
  { label: "Education & EdTech",            href: "/industries/education-edtech",               icon: "🎓" },
  { label: "Hospitality & Tourism",         href: "/industries/hospitality-tourism",            icon: "🏨" },
  { label: "Legal & Professional Services", href: "/industries/legal-professional-services",    icon: "⚖️" },
  { label: "Transportation & Logistics",    href: "/industries/transportation-logistics",       icon: "🚚" },
  { label: "Non-Profit & Social Impact",    href: "/industries/non-profit",                     icon: "🤝" },
  { label: "Technology & SaaS",             href: "/industries/technology-saas",                icon: "💡" },
];

const navLinks = [
  { label: "Home",       href: "/",          hasDropdown: false, hasIndustriesDropdown: false, hasProgramsDropdown: false },
  { label: "Services",   href: "/services",  hasDropdown: true,  hasIndustriesDropdown: false, hasProgramsDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false, hasIndustriesDropdown: true, hasProgramsDropdown: false },
  { label: "Programs",   href: "/programs",  hasDropdown: false, hasIndustriesDropdown: false, hasProgramsDropdown: true  },
  { label: "About",      href: "/about",     hasDropdown: false, hasIndustriesDropdown: false, hasProgramsDropdown: false },
];

// ── Shared sub-components ─────────────────────────────────────────────────────

/** Dark left rail item shared by Services and Industries dropdowns */
function RailItem({
  href, icon, label, desc, active, onClose, onEnter, onLeave,
}: {
  href: string; icon: string; label: string; desc: string;
  active: boolean;
  onClose: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClose}
      className={`flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
        active ? "bg-white/12" : "hover:bg-white/8"
      }`}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-tight transition-colors ${active ? "text-white" : "text-white/80 group-hover:text-white"}`}>
          {label}
        </p>
        <p className="text-white/40 text-xs mt-0.5 leading-snug">{desc}</p>
      </div>
      {active && <ArrowRight size={12} className="text-white/50 flex-shrink-0 mt-1" />}
    </Link>
  );
}

/** Hover preview card shown in the right panel */
function PreviewCard({ item, href }: { item: { icon: string; label: string; stat: string; preview: string }; href: string }) {
  return (
    <motion.div
      key={item.label}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18 }}
      className="h-full flex flex-col justify-between p-6"
    >
      <div>
        <div className="text-4xl mb-4">{item.icon}</div>
        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-bold mb-3">
          {item.stat}
        </div>
        <h4 className="font-[var(--font-outfit)] font-extrabold text-[#1A1A2E] text-lg mb-2 leading-snug">{item.label}</h4>
        <p className="text-[#6B7280] text-sm leading-relaxed">{item.preview}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors group"
      >
        Explore {item.label} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
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
  const [programsOpen, setProgramsOpen]     = useState(false);
  const [hoveredService, setHoveredService]   = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
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
                onMouseLeave={() => { setServicesOpen(false); setHoveredService(null); }}
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[860px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden"
                    >
                      <div className="flex min-h-[260px]">

                        {/* Option 1: Dark left rail */}
                        <div
                          className="w-64 shrink-0 p-4 flex flex-col gap-1"
                          style={{ background: "linear-gradient(160deg, #0F172A 0%, #1A3A5C 100%)" }}
                        >
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-2 mb-2 mt-1">
                            Core Services
                          </p>
                          {mainServices.map((s, i) => (
                            <RailItem
                              key={s.href}
                              href={s.href} icon={s.icon} label={s.label} desc={s.desc}
                              active={hoveredService === i}
                              onEnter={() => setHoveredService(i)}
                              onLeave={() => setHoveredService(null)}
                              onClose={() => setServicesOpen(false)}
                            />
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="mt-auto flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white/40 hover:text-white transition-colors"
                          >
                            View all 20 services <ArrowRight size={10} />
                          </Link>
                        </div>

                        {/* Right panel: Option 2 preview OR Option 3 icon grid */}
                        <div className="flex-1 relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            {hoveredService !== null ? (
                              <PreviewCard
                                key={`preview-${hoveredService}`}
                                item={mainServices[hoveredService]}
                                href={mainServices[hoveredService].href}
                              />
                            ) : (
                              <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="p-5"
                              >
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">
                                  All Services
                                </p>
                                {/* Option 3: icons on grid items */}
                                <div className="grid grid-cols-3 gap-x-1 gap-y-0.5">
                                  {otherServices.map((s) => (
                                    <Link
                                      key={s.href}
                                      href={s.href}
                                      onClick={() => setServicesOpen(false)}
                                      className="flex items-center px-2.5 py-2 rounded-lg text-sm text-[#374151] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-all duration-150 font-medium"
                                    >
                                      <span className="truncate">{s.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Option 4: Full-width CTA strip */}
                      <CTAStrip
                        prompt="Not sure which service fits? Tell us what you're building."
                        linkLabel="Book a free strategy call"
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
                onMouseLeave={() => { setIndustriesOpen(false); setHoveredIndustry(null); }}
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden"
                    >
                      <div className="flex min-h-[240px]">

                        {/* Option 1: Dark left rail */}
                        <div
                          className="w-64 shrink-0 p-4 flex flex-col gap-1"
                          style={{ background: "linear-gradient(160deg, #0F172A 0%, #1A3A5C 100%)" }}
                        >
                          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-2 mb-2 mt-1">
                            Main Industries
                          </p>
                          {mainIndustries.map((ind, i) => (
                            <RailItem
                              key={ind.href}
                              href={ind.href} icon={ind.icon} label={ind.label} desc={ind.desc}
                              active={hoveredIndustry === i}
                              onEnter={() => setHoveredIndustry(i)}
                              onLeave={() => setHoveredIndustry(null)}
                              onClose={() => setIndustriesOpen(false)}
                            />
                          ))}
                          <Link
                            href="/industries"
                            onClick={() => setIndustriesOpen(false)}
                            className="mt-auto flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white/40 hover:text-white transition-colors"
                          >
                            View all industries <ArrowRight size={10} />
                          </Link>
                        </div>

                        {/* Right panel: Option 2 preview OR Option 3 icon grid */}
                        <div className="flex-1 relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            {hoveredIndustry !== null ? (
                              <PreviewCard
                                key={`ind-preview-${hoveredIndustry}`}
                                item={mainIndustries[hoveredIndustry]}
                                href={mainIndustries[hoveredIndustry].href}
                              />
                            ) : (
                              <motion.div
                                key="ind-grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="p-5"
                              >
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">
                                  All Industries
                                </p>
                                {/* Option 3: icons on grid items */}
                                <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
                                  {otherIndustries.map((ind) => (
                                    <Link
                                      key={ind.href}
                                      href={ind.href}
                                      onClick={() => setIndustriesOpen(false)}
                                      className="flex items-center px-2.5 py-2 rounded-lg text-sm text-[#374151] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-all duration-150 font-medium"
                                    >
                                      {ind.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Option 4: Full-width CTA strip */}
                      <CTAStrip
                        prompt="Building for a specific industry? Let's talk requirements."
                        linkLabel="Book a free strategy call"
                        href="https://calendly.com/audax-ventures/30min"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Programs Dropdown ── */
            if (link.hasProgramsDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href) || programsOpen
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${programsOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </Link>

                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl shadow-black/12 border border-gray-100 overflow-hidden"
                    >
                      {/* Option 5: Program mini cards with phase pills */}
                      <div className="p-4 flex flex-col gap-2.5">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] px-2 mb-1">
                          Our Programs
                        </p>
                        {programs.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            target={"external" in p && p.external ? "_blank" : undefined}
                            rel={"external" in p && p.external ? "noopener noreferrer" : undefined}
                            onClick={() => setProgramsOpen(false)}
                            className="group flex items-start gap-4 px-4 py-4 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-md transition-all duration-200 relative overflow-hidden"
                            style={{ borderLeftWidth: 3, borderLeftColor: p.color }}
                          >
                            {/* Subtle hover bg */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                              style={{ background: `linear-gradient(135deg, ${p.color}08 0%, transparent 60%)` }}
                            />
                            <span className="text-2xl flex-shrink-0 relative">{p.icon}</span>
                            <div className="flex-1 min-w-0 relative">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <p className="font-[var(--font-outfit)] font-bold text-sm text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors leading-tight">
                                  {p.label}
                                </p>
                                <span className="text-[10px] font-bold text-white/0 group-hover:text-[#2E5F8A] transition-colors">
                                  <ArrowRight size={13} className="text-gray-300 group-hover:text-[#2E5F8A] transition-colors" />
                                </span>
                              </div>
                              <p className="text-[#6B7280] text-xs mb-2.5 leading-snug">{p.desc}</p>
                              {/* Phase pills */}
                              <div className="flex items-center gap-1.5">
                                {p.phases.map((phase, i) => (
                                  <span key={phase} className="flex items-center gap-1.5">
                                    <span
                                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold"
                                      style={{ backgroundColor: `${p.color}18`, color: p.color }}
                                    >
                                      {phase}
                                    </span>
                                    {i < p.phases.length - 1 && (
                                      <span className="text-[#D1D5DB] text-xs">→</span>
                                    )}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Option 4: Full-width CTA strip */}
                      <CTAStrip
                        prompt="Not sure which program fits your stage?"
                        linkLabel="Book a free intro call"
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
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] px-3 mt-4 mb-2">Other Services</p>
                <div className="grid grid-cols-2 gap-x-2">
                  {otherServices.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg text-xs text-[#6B7280] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                      <span>{s.icon}</span>{s.label}
                    </Link>
                  ))}
                </div>
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
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] px-3 mt-4 mb-2">All Industries</p>
                <div className="grid grid-cols-2 gap-x-2">
                  {otherIndustries.map((ind) => (
                    <Link key={ind.href} href={ind.href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg text-xs text-[#6B7280] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                      <span>{ind.icon}</span>{ind.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Programs sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Programs</p>
                {programs.map((p) => (
                  <Link key={p.href} href={p.href}
                    target={"external" in p && p.external ? "_blank" : undefined}
                    rel={"external" in p && p.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-base">{p.icon}</span>
                    {p.label}
                  </Link>
                ))}
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
