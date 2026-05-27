import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Lightbulb, Building2, BrainCircuit, Zap } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { solutionsData } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Programs | Audax Ventures",
  description:
    "Four structured programs built for where you are in your journey — Catalyst for Founders, Enterprise Innovation Program, AI Implementation Program, and Founder Prototype Program.",
  alternates: { canonical: "https://audaxventures.ca/programs" },
  openGraph: {
    title: "Programs | Audax Ventures",
    description:
      "Four structured, phased programs — for founders, enterprise teams, and businesses ready to put AI to work. Beyond a typical development agency.",
    url: "https://audaxventures.ca/programs",
  },
};

const programMeta = [
  {
    slug: "catalyst-for-founders",
    icon: Lightbulb,
    badge: "For Founders",
    gradient: "from-[#2E5F8A] to-[#3A7BD5]",
    accentColor: "text-[#2E5F8A]",
    accentBg: "bg-[#2E5F8A]/8",
  },
  {
    slug: "enterprise-innovation-program",
    icon: Building2,
    badge: "For Enterprise",
    gradient: "from-[#1A1A2E] to-[#2E5F8A]",
    accentColor: "text-[#1A1A2E]",
    accentBg: "bg-[#1A1A2E]/8",
  },
  {
    slug: "ai-implementation",
    icon: BrainCircuit,
    badge: "AI Program",
    gradient: "from-[#065F46] to-[#059669]",
    accentColor: "text-[#065F46]",
    accentBg: "bg-[#065F46]/8",
  },
  {
    slug: "founder-prototype-program",
    icon: Zap,
    badge: "For Founders",
    gradient: "from-[#78350F] to-[#D97706]",
    accentColor: "text-[#92400E]",
    accentBg: "bg-[#92400E]/8",
  },
];

export default function ProgramsPage() {
  const programs = solutionsData.map((p) => ({
    ...p,
    ...programMeta.find((m) => m.slug === p.slug)!,
  }));

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-semibold mb-6 uppercase tracking-widest">
            Structured Programs
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E] mb-6 leading-tight">
            Beyond a Dev Agency —{" "}
            <span className="text-[#2E5F8A]">A Program Partner</span>
          </h1>
          <p className="text-[#6B7280] text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Four structured, phased programs designed for where you are in your journey — whether you&apos;re a founder, an enterprise innovation team, or a business ready to put AI to work.
          </p>

          {/* Jump buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {programs.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#2E5F8A] text-[#2E5F8A] font-bold hover:bg-[#2E5F8A] hover:text-white transition-colors text-sm"
              >
                <p.icon size={15} />
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Cards (anchor targets) ── */}
      {programs.map((program, idx) => (
        <div key={program.slug} id={program.slug}>

          {/* ── Banner header ── */}
          <section className={`py-16 bg-gradient-to-br ${program.gradient} text-white`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-xs font-semibold mb-5 uppercase tracking-widest">
                <program.icon size={12} />
                {program.badge}
              </div>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl mb-4">
                {program.heroTitle}
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {program.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={program.externalUrl ?? `/programs/${program.slug}`}
                  target={program.externalUrl ? "_blank" : undefined}
                  rel={program.externalUrl ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2E5F8A] font-bold hover:bg-blue-50 transition-colors"
                >
                  Full Program Details <ArrowRight size={15} />
                </Link>
                <Link
                  href="https://calendly.com/audax-ventures/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-bold hover:border-white hover:bg-white/10 transition-colors"
                >
                  Book a Free Call
                </Link>
              </div>
            </div>
          </section>

          {/* ── Description + Who It's For ── */}
          <section className={idx % 2 === 0 ? "py-16 bg-white" : "py-16 bg-[#F8F9FA]"}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-4">About This Program</p>
                <p className="text-[#6B7280] text-base leading-relaxed">{program.description}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">Who It&apos;s For</p>
                <div className="space-y-2.5">
                  {program.whoItsFor.map((w) => (
                    <div key={w} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                      <CheckCircle2 size={16} className="text-[#2E5F8A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#374151] text-sm">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Phases ── */}
          <section className={idx % 2 === 0 ? "py-16 bg-[#F8F9FA]" : "py-16 bg-white"}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-10 text-center">
                The {program.title} Phases
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {program.phases.map((phase) => (
                  <div
                    key={phase.name}
                    className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{phase.icon}</span>
                      <div>
                        <p className="font-[var(--font-outfit)] font-extrabold text-[#1A1A2E] text-base">
                          Phase {phase.number}: {phase.name}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-[#6B7280] mt-0.5">
                          <Clock size={11} /> {phase.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{phase.description}</p>
                    <div className="space-y-1.5">
                      {phase.deliverables.slice(0, 3).map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-[#6B7280]">
                          <CheckCircle2 size={12} className="text-[#2E5F8A] mt-0.5 flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                      {phase.deliverables.length > 3 && (
                        <p className="text-xs text-[#9CA3AF] pl-4">+{phase.deliverables.length - 3} more deliverables</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href={program.externalUrl ?? `/programs/${program.slug}`}
                  target={program.externalUrl ? "_blank" : undefined}
                  rel={program.externalUrl ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
                >
                  See full program details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

        </div>
      ))}

      {/* ── Comparison CTA ── */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-white mb-4">
            Not Sure Which Program Fits?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Book a free 30-minute strategy call. We&apos;ll listen to where you are, what you&apos;re trying to build, and point you to the right starting point — no pitch, no pressure.
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

      <CTABanner />
    </>
  );
}
