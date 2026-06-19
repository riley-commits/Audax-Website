"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceData } from "@/lib/services-data";
import PricingTiers from "@/components/sections/PricingTiers";

// ── Per-service outcome stats shown in the hero ───────────────────────────────

const serviceStats: Record<string, { value: string; label: string }[]> = {
  "mvp-development": [
    { value: "50+", label: "MVPs shipped" },
    { value: "8–16 wks", label: "typical timeline" },
    { value: "98%", label: "on-time delivery" },
  ],
  "saas-development": [
    { value: "99.9%", label: "uptime delivered" },
    { value: "10,000+", label: "concurrent users" },
    { value: "100%", label: "IP ownership" },
  ],
  "internal-tools": [
    { value: "60%", label: "avg. time saved" },
    { value: "4–8 wks", label: "build timeline" },
    { value: "100+", label: "workflows automated" },
  ],
  "website-development": [
    { value: "<2s", label: "avg. load time" },
    { value: "95+", label: "Lighthouse score" },
    { value: "3–6 wks", label: "typical timeline" },
  ],
  "ecommerce-development": [
    { value: "3×", label: "avg. conversion lift" },
    { value: "99.9%", label: "checkout uptime" },
    { value: "6–12 wks", label: "typical timeline" },
  ],
  "ios-development": [
    { value: "4.8★", label: "avg. App Store rating" },
    { value: "8–14 wks", label: "typical timeline" },
    { value: "100%", label: "SwiftUI / Swift" },
  ],
  "android-development": [
    { value: "4.7★", label: "avg. Play Store rating" },
    { value: "8–14 wks", label: "typical timeline" },
    { value: "100%", label: "Kotlin / React Native" },
  ],
  "frontend-development": [
    { value: "<50ms", label: "interaction latency" },
    { value: "100%", label: "TypeScript coverage" },
    { value: "95+", label: "Lighthouse score" },
  ],
  "backend-development": [
    { value: "<100ms", label: "median API latency" },
    { value: "99.9%", label: "API uptime" },
    { value: "100%", label: "automated test suite" },
  ],
  "web-development": [
    { value: "50+", label: "web apps shipped" },
    { value: "4–12 wks", label: "typical timeline" },
    { value: "100%", label: "IP ownership" },
  ],
  "custom-software-development": [
    { value: "100%", label: "bespoke to your needs" },
    { value: "6–20 wks", label: "typical timeline" },
    { value: "100%", label: "IP ownership" },
  ],
  "qa-testing": [
    { value: "95%", label: "avg. defect catch rate" },
    { value: "2–4 wks", label: "typical audit" },
    { value: "0", label: "critical bugs at launch" },
  ],
  "process-automation": [
    { value: "60%", label: "avg. time saved" },
    { value: "3–8 wks", label: "typical timeline" },
    { value: "100+", label: "workflows automated" },
  ],
  "customer-service-automation": [
    { value: "70%", label: "ticket deflection rate" },
    { value: "24/7", label: "AI support coverage" },
    { value: "3–6 wks", label: "deployment timeline" },
  ],
  "ai-consulting": [
    { value: "40%", label: "avg. efficiency gain" },
    { value: "2–4 wks", label: "strategy sprint" },
    { value: "50+", label: "AI features shipped" },
  ],
  "crm-systems": [
    { value: "35%", label: "avg. pipeline increase" },
    { value: "6–12 wks", label: "typical timeline" },
    { value: "100%", label: "fits your process" },
  ],
  "fractional-caio": [
    { value: "$2,500", label: "/month starting tier" },
    { value: "3 mo", label: "structured onboarding" },
    { value: "1/10", label: "the cost of a full-time CAIO" },
  ],
  "digital-marketing": [
    { value: "3×", label: "avg. organic traffic lift" },
    { value: "90-day", label: "measurable results" },
    { value: "100%", label: "data-driven strategy" },
  ],
};

// ── Per-service mid-page CTA headlines ────────────────────────────────────────

const midCTAHeadlines: Record<string, { headline: string; sub: string }> = {
  "mvp-development":         { headline: "Ready to Build Your MVP?", sub: "Most founders are 30 minutes away from a clear plan. Let's define your scope on a free strategy call." },
  "saas-development":        { headline: "Ready to Build a Scalable SaaS?", sub: "Book a free call — we'll map out the architecture, timeline, and budget your platform needs." },
  "internal-tools":          { headline: "Ready to Replace Your Spreadsheets?", sub: "A 30-minute call is all it takes to scope a custom tool that saves your team hours every week." },
  "website-development":     { headline: "Ready for a Website That Performs?", sub: "Fast, beautiful, SEO-optimized — let's scope your new site in 30 minutes." },
  "ecommerce-development":   { headline: "Ready to Build Your Dream Store?", sub: "Let's design a storefront that converts visitors into loyal customers. Book a free strategy call." },
  "ios-development":         { headline: "Ready to Launch on the App Store?", sub: "From concept to App Store approval — book a free call to map out your iOS app." },
  "android-development":     { headline: "Ready to Launch on Google Play?", sub: "Let's build your Android app. Book a free strategy call to define scope and timeline." },
  "frontend-development":    { headline: "Ready for a Blazing-Fast Frontend?", sub: "Every millisecond matters. Book a free call to talk about performance and UX goals." },
  "backend-development":     { headline: "Ready for a Bulletproof Backend?", sub: "APIs, databases, and infrastructure that never let you down. Let's talk architecture." },
  "web-development":         { headline: "Ready to Build Your Web App?", sub: "From portals to platforms, we build web apps that scale. Book a free strategy call." },
  "custom-software-development": { headline: "Ready for Software Built Around You?", sub: "Off-the-shelf doesn't fit? Let's design something that does. Book a free strategy call." },
  "qa-testing":              { headline: "Ready to Ship With Confidence?", sub: "Catch every critical bug before your users do. Book a free QA audit consultation." },
  "process-automation":      { headline: "Ready to Automate Your Bottlenecks?", sub: "We'll map your workflows and show you exactly where automation saves the most time." },
  "customer-service-automation": { headline: "Ready to Deflect 70% of Your Tickets?", sub: "AI-powered support that runs 24/7 without adding headcount. Book a free discovery call." },
  "ai-consulting":           { headline: "Ready to Add Real AI to Your Product?", sub: "LLMs, RAG, and automation — without the hype. Let's build something that actually works." },
  "crm-systems":             { headline: "Ready for a CRM That Fits Your Process?", sub: "Stop forcing your team into generic software. Let's design a CRM around how you actually sell." },
  "fractional-caio":         { headline: "Ready for Senior AI Leadership?", sub: "Get an executive-level perspective on AI strategy, governance, and ROI — starting this month." },
  "digital-marketing":       { headline: "Ready to Grow Your Organic Reach?", sub: "SEO and content that compounds month over month. Book a free marketing strategy call." },
};

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

function FAQAccordion({ faq }: { faq: ServiceData["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen ? "border-[#2E5F8A]/40 bg-white" : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`font-[var(--font-outfit)] font-bold text-sm leading-snug transition-colors ${isOpen ? "text-[#2E5F8A]" : "text-[#1A1A2E]"}`}>
                {item.q}
              </span>
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-[#2E5F8A] text-white" : "bg-gray-100 text-gray-500"}`}>
                {isOpen ? <Minus size={12} /> : <Plus size={12} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[#6B7280] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ── Process Stepper ────────────────────────────────────────────────────────────

function ProcessStepper({ process }: { process: NonNullable<ServiceData["process"]> }) {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const step = process[activeStep];

  return (
    <>
      {/* Desktop stepper */}
      <div className="hidden md:block">
        {/* Step tabs */}
        <div className="flex gap-0 mb-8 border-b border-gray-200 overflow-x-auto">
          {process.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(i)}
              className={`relative flex-shrink-0 flex flex-col items-center gap-1 px-5 py-4 text-sm font-semibold transition-colors ${
                activeStep === i
                  ? "text-[#2E5F8A]"
                  : "text-[#6B7280] hover:text-[#1A1A2E]"
              }`}
            >
              {/* Step number bubble */}
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  activeStep === i
                    ? "bg-[#2E5F8A] text-white"
                    : i < activeStep
                    ? "bg-[#2E5F8A]/20 text-[#2E5F8A]"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                {s.step}
              </span>
              <span className="whitespace-nowrap text-xs">{s.title}</span>
              {/* Active underline */}
              {activeStep === i && (
                <motion.div
                  layoutId="process-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E5F8A] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2E5F8A] text-white flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-[var(--font-outfit)] font-extrabold text-[#1A1A2E] text-xl">{step.title}</h3>
                  <span className="text-xs text-[#6B7280] bg-[#F8F9FA] px-3 py-1 rounded-full border border-gray-200 font-medium">
                    {step.duration}
                  </span>
                </div>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            </div>
            {/* Navigation arrows */}
            <div className="flex justify-between mt-6 pt-5 border-t border-gray-100">
              <button
                onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                disabled={activeStep === 0}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#2E5F8A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous step
              </button>
              <button
                onClick={() => setActiveStep((p) => Math.min(process.length - 1, p + 1))}
                disabled={activeStep === process.length - 1}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#2E5F8A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next step →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile vertical accordion */}
      <div className="md:hidden space-y-3">
        {process.map((s, i) => {
          const isOpen = mobileOpen === i;
          return (
            <div
              key={s.step}
              className={`rounded-2xl border overflow-hidden transition-colors ${
                isOpen ? "border-[#2E5F8A]/40" : "border-gray-100"
              } bg-white`}
            >
              <button
                onClick={() => setMobileOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-4 px-5 py-4"
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#2E5F8A] text-white" : "bg-gray-100 text-[#6B7280]"
                  }`}
                >
                  {s.step}
                </span>
                <div className="flex-1 text-left">
                  <p className={`font-[var(--font-outfit)] font-bold text-sm transition-colors ${isOpen ? "text-[#2E5F8A]" : "text-[#1A1A2E]"}`}>
                    {s.title}
                  </p>
                  <p className="text-[#6B7280] text-xs">{s.duration}</p>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-[#6B7280] text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

interface Props {
  service: ServiceData;
  related: (ServiceData | undefined)[];
}

function buildSectionLinks(service: ServiceData) {
  const links: { id: string; label: string }[] = [
    { id: "whats-included", label: "What's Included" },
    { id: "who-its-for",    label: "Who It's For" },
  ];
  if (service.packages && service.packages.length > 0) {
    links.push({ id: "packages", label: "Packages & Pricing" });
  }
  if (service.process && service.process.length > 0) {
    links.push({ id: "process", label: "Our Process" });
  }
  if (service.techStack && service.techStack.length > 0) {
    links.push({ id: "tech-stack", label: "Tech Stack" });
  }
  links.push({ id: "faq", label: "FAQs" });
  return links;
}

export default function ServicePageContent({ service, related }: Props) {
  const stats = serviceStats[service.slug] ?? [
    { value: "100%", label: "IP ownership" },
    { value: "8–16 wks", label: "typical timeline" },
    { value: "50+", label: "projects shipped" },
  ];
  const midCTA = midCTAHeadlines[service.slug] ?? {
    headline: "Ready to Get Started?",
    sub: "Book a free 30-minute strategy call. No pitch, no pressure — just clarity.",
  };
  const sectionLinks = buildSectionLinks(service);

  return (
    <>
      {/* ── Option 1: Dark gradient hero with stats ── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0F172A] via-[#1A3A5C] to-[#0F172A] relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2E5F8A]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3A7BD5]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold mb-6 uppercase tracking-widest">
            Service
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-white mb-5 leading-tight max-w-3xl">
            {service.heroTitle}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">{service.heroSub}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[120px]">
                <p className="font-[var(--font-outfit)] font-extrabold text-2xl text-white leading-none mb-1">{s.value}</p>
                <p className="text-white/45 text-xs">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://calendly.com/audax-ventures/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-bold hover:bg-white/10 transition-colors"
            >
              Tell Us About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7280] text-lg leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* ── Two-column layout: main content + sticky sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 lg:items-start">

          {/* ── Main content column ── */}
          <div className="space-y-0">

            {/* What's Included */}
            <section id="whats-included" className="py-16 scroll-mt-24">
              <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10">
                What&apos;s Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.whatsIncluded.map((item) => (
                  <div key={item.label} className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-sm transition-all">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-2">{item.label}</h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who It's For */}
            <section id="who-its-for" className="py-16 border-t border-gray-100 scroll-mt-24">
              <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-8">
                Who This Is For
              </h2>
              <div className="space-y-3">
                {service.whoItsFor.map((w) => (
                  <div key={w} className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl px-5 py-3.5">
                    <CheckCircle2 size={18} className="text-[#2E5F8A] flex-shrink-0" />
                    <span className="text-[#1A1A2E] text-sm">{w}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Packages & Pricing (tiered services only) */}
            {service.packages && service.packages.length > 0 && (
              <section id="packages" className="py-16 border-t border-gray-100 scroll-mt-24">
                <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-3">
                  Packages & Pricing
                </h2>
                <p className="text-[#6B7280] text-base mb-10 max-w-2xl">
                  Three structured monthly engagements. Pick the tier that matches where you are — switch up as your AI maturity grows.
                </p>
                <PricingTiers packages={service.packages} />
              </section>
            )}

            {/* Option 3: Process Stepper */}
            {service.process && service.process.length > 0 && (
              <section id="process" className="py-16 border-t border-gray-100 scroll-mt-24">
                <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10">
                  Our Process
                </h2>
                <ProcessStepper process={service.process} />
              </section>
            )}

            {/* Option 5: Mid-page dark CTA break */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1A3A5C] to-[#0F172A] p-10 text-center my-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/4 pointer-events-none" />
              <div className="relative">
                <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-white mb-3">
                  {midCTA.headline}
                </h3>
                <p className="text-white/60 mb-7 max-w-md mx-auto">{midCTA.sub}</p>
                <Link
                  href="https://calendly.com/audax-ventures/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
                >
                  Book a Free Call <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Tech Stack */}
            {service.techStack && service.techStack.length > 0 && (
              <section id="tech-stack" className="py-16 border-t border-gray-100 scroll-mt-24">
                <h2 className="font-[var(--font-outfit)] font-bold text-2xl text-[#1A1A2E] mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-gray-200 text-sm text-[#6B7280] font-medium hover:border-[#2E5F8A]/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Option 2: FAQ Accordion */}
            <section id="faq" className={`py-16 border-t border-gray-100 scroll-mt-24${service.slug === "fractional-caio" ? " text-center" : ""}`}>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10">
                Frequently Asked Questions
              </h2>
              <div className={service.slug === "fractional-caio" ? "max-w-2xl mx-auto text-left" : ""}>
                <FAQAccordion faq={service.faq} />
              </div>
            </section>

          </div>

          {/* ── Option 4: Sticky sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">

              {/* Service name + stats card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1A3A5C] to-[#0F172A] p-6 text-white">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Service</p>
                <h3 className="font-[var(--font-outfit)] font-extrabold text-lg mb-5 leading-snug">{service.title}</h3>
                <div className="space-y-3 mb-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-white/50 text-xs">{s.label}</span>
                      <span className="font-[var(--font-outfit)] font-bold text-sm text-white">{s.value}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="https://calendly.com/audax-ventures/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2E5F8A] text-white font-bold text-sm hover:bg-[#3A7BD5] transition-colors"
                >
                  Book a Free Call <ArrowRight size={14} />
                </Link>
              </div>

              {/* Jump links */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-3">On This Page</p>
                <nav className="space-y-1">
                  {sectionLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#2E5F8A] py-1.5 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#2E5F8A] transition-colors" />
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact alternative */}
              <div className="rounded-2xl border border-gray-100 bg-[#F8F9FA] p-5 text-center">
                <p className="text-[#1A1A2E] text-xs font-semibold mb-1">Prefer to send a message?</p>
                <Link
                  href="/contact"
                  className="text-[#2E5F8A] text-xs font-bold hover:underline inline-flex items-center gap-1"
                >
                  Use our contact form <ArrowRight size={11} />
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Services ── */}
      {related.filter(Boolean).length > 0 && (
        <section className="py-12 bg-[#F8F9FA] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-6 text-center">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2E5F8A] text-[#2E5F8A] text-sm font-semibold hover:bg-[#2E5F8A] hover:text-white transition-colors"
                >
                  {r.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
