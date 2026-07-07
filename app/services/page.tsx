import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Lock, MapPin, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Strategy & Software Development Services | Audax Ventures",
  description:
    "Fractional Chief AI Officer services, AI transformation & advisory, and custom AI & software development for businesses navigating the future of AI. Based in Canada.",
  alternates: { canonical: "https://audaxventures.ca/services" },
  openGraph: {
    title: "AI Strategy & Software Development Services | Audax Ventures",
    description:
      "Fractional AI leadership, AI transformation services, and custom software development — 3 core service areas, 20 services total.",
    url: "https://audaxventures.ca/services",
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const featured = [
  {
    num: "01",
    icon: "👔",
    title: "Fractional Chief AI Officer",
    badge: "Most Popular",
    tagline: "Executive-level AI leadership & strategic guidance",
    description:
      "Get executive-level AI leadership without the cost of hiring a full-time Chief AI Officer — strategy, governance, training, and ROI tracking on a monthly retainer.",
    href: "/services/fractional-caio",
    highlights: ["AI opportunity assessment", "Executive strategy sessions", "AI governance & risk management", "ROI tracking & reporting"],
    accentColor: "#2E5F8A",
    accentBg: "bg-[#2E5F8A]/10",
    accentText: "text-[#2E5F8A]",
    stat: { value: "Exec", label: "level AI leadership" },
  },
  {
    num: "02",
    icon: "💻",
    title: "Custom AI & Software Development",
    badge: null,
    tagline: "Custom software, automation & AI-powered apps",
    description:
      "Custom software, automation solutions, AI-powered applications, and digital products built around your business — not the other way around.",
    href: "/services/custom-ai-software-development",
    highlights: ["Custom software development", "AI-powered applications", "Process automation", "Integrations & APIs"],
    accentColor: "#7C3AED",
    accentBg: "bg-purple-100",
    accentText: "text-purple-700",
    stat: { value: "100%", label: "IP ownership" },
  },
];

const categories = [
  {
    label: "AI Advisory & Automation",
    description: "AI assessments, roadmaps, governance, training, and implementation planning.",
    services: [
      { icon: "🧭", title: "AI Transformation & Advisory",  tagline: "AI assessments, roadmaps, governance & training",          href: "/services/ai-transformation-advisory" },
      { icon: "🎯", title: "AI Consulting",                 tagline: "Adding real AI features to your product, done right",      href: "/services/ai-consulting" },
      { icon: "🔄", title: "Process Automation",            tagline: "Automated approvals, routing, and system sync",            href: "/services/process-automation" },
      { icon: "💬", title: "Customer Service Automation",   tagline: "AI chatbots and self-service support portals",             href: "/services/customer-service-automation" },
    ],
  },
  {
    label: "Custom AI & Software Development",
    description: "Custom software, automation solutions, AI-powered applications, and digital products.",
    services: [
      { icon: "💻", title: "Custom AI & Software Dev", tagline: "Custom software, automation & AI-powered apps",              href: "/services/custom-ai-software-development" },
      { icon: "🚀", title: "MVP Development",          tagline: "8–16 weeks from idea to launch",                              href: "/services/mvp-development" },
      { icon: "☁️", title: "SaaS Development",         tagline: "End-to-end platform builds",                                  href: "/services/saas-development" },
      { icon: "🌐", title: "Website Development",      tagline: "Marketing sites that load fast and rank higher",             href: "/services/website-development" },
      { icon: "🛍️", title: "E-Commerce Development",  tagline: "Custom storefronts and headless commerce platforms",          href: "/services/ecommerce-development" },
      { icon: "📱", title: "iOS App Development",      tagline: "Swift & SwiftUI apps built for the App Store",               href: "/services/ios-development" },
      { icon: "🤖", title: "Android Development",      tagline: "Kotlin & React Native apps for Google Play",                 href: "/services/android-development" },
      { icon: "⚛️", title: "Front End Development",    tagline: "React & Next.js interfaces that feel instant",               href: "/services/frontend-development" },
      { icon: "🗄️", title: "Back End Development",     tagline: "APIs, databases, and server infrastructure at scale",        href: "/services/backend-development" },
      { icon: "🖥️", title: "Web Development",          tagline: "Full-spectrum web apps, portals, and platforms",             href: "/services/web-development" },
      { icon: "🛠️", title: "Custom Software",          tagline: "Purpose-built when off-the-shelf software falls short",      href: "/services/custom-software-development" },
      { icon: "⚙️", title: "Internal Tools",            tagline: "Replace spreadsheets with software that fits",               href: "/services/internal-tools" },
      { icon: "👥", title: "CRM Systems",               tagline: "Custom CRMs built around your actual sales process",         href: "/services/crm-systems" },
      { icon: "🔍", title: "QA & Testing",              tagline: "Exploratory, automated, and load testing before launch",     href: "/services/qa-testing" },
    ],
  },
  {
    label: "Additional Services",
    description: "Growth support alongside your AI strategy and software development.",
    services: [
      { icon: "📈", title: "Digital Marketing", tagline: "SEO, content, and paid acquisition that compounds", href: "/services/digital-marketing" },
    ],
  },
];

const whyUs = [
  { icon: Zap, title: "8–16 week delivery", description: "Production-ready software in weeks, not quarters." },
  { icon: Lock, title: "You own everything", description: "Full IP transfer and source code on every engagement." },
  { icon: MapPin, title: "Canadian team", description: "Winnipeg-based, working in your timezone and under Canadian law." },
  { icon: Handshake, title: "Fixed-price phases", description: "No runaway invoices — we scope honestly and price clearly." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-semibold mb-6 uppercase tracking-widest">
            20 Services
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E] mb-6 leading-tight">
            AI Leadership &amp; Software Development for{" "}
            <span className="text-[#2E5F8A]">Businesses Navigating AI</span>
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            AI leadership when you need direction, and custom software when you're ready to build — everything in between to get you from an idea to something shipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#2E5F8A] text-[#2E5F8A] font-bold hover:bg-[#2E5F8A] hover:text-white transition-colors"
            >
              Tell Us About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured 3 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-3">Our 2 Core Service Areas</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">
              Core Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featured.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Decorative orb */}
                <div className={`absolute -right-10 -top-10 w-44 h-44 rounded-full ${s.accentBg} blur-2xl pointer-events-none`} />

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-3xl mb-3 block">{s.icon}</span>
                    {s.badge && (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${s.accentBg} ${s.accentText} uppercase tracking-wider mb-2`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-[var(--font-outfit)] font-extrabold text-4xl text-[#D1D5DB] tabular-nums">
                    {s.num}
                  </span>
                </div>

                <h3 className="font-[var(--font-outfit)] font-extrabold text-xl text-[#1A1A2E] mb-1">{s.title}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${s.accentText}`}>{s.tagline}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{s.description}</p>

                <div className="space-y-2 mb-6">
                  {s.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={13} className={`${s.accentText} flex-shrink-0`} />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className={`${s.accentBg} rounded-xl px-4 py-2.5 text-center`}>
                    <p className="font-[var(--font-outfit)] font-extrabold text-lg text-[#1A1A2E] leading-none">{s.stat.value}</p>
                    <p className="text-[#6B7280] text-[10px] mt-0.5">{s.stat.label}</p>
                  </div>
                  <div className={`flex items-center gap-2 text-sm font-semibold ${s.accentText} group-hover:gap-3 transition-all`}>
                    Full details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Audax strip ── */}
      <section className="py-12 bg-[#2E5F8A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center">
                <w.icon size={26} className="mx-auto mb-2 text-white" strokeWidth={2} />
                <p className="font-[var(--font-outfit)] font-bold text-white text-sm mb-1">{w.title}</p>
                <p className="text-blue-200 text-xs leading-snug">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Services by Category ── */}
      {categories.map((cat, ci) => (
        <section key={cat.label} className={ci % 2 === 0 ? "py-20 bg-[#F8F9FA]" : "py-20 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-2">
                {String(ci + 1).padStart(2, "0")} — Service Category
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E]">
                    {cat.label}
                  </h2>
                  <p className="text-[#6B7280] mt-1 text-sm">{cat.description}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2E5F8A] hover:shadow-lg hover:shadow-[#2E5F8A]/6 transition-all duration-250 flex flex-col"
                >
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-1.5 group-hover:text-[#2E5F8A] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed mb-4 flex-1">{s.tagline}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2E5F8A] group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Not sure? CTA ── */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Book a free 30-minute call. We&apos;ll listen to what you&apos;re building, ask the right questions, and tell you exactly where to start — no pitch, no pressure.
          </p>
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </>
  );
}
