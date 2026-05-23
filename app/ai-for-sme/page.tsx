import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { getServiceBySlug } from "@/lib/services-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "AI for Canadian SMEs | AI Audit, Roadmap, Implementation",
  description:
    "Audax Ventures helps Canadian SMEs bring AI into their business. Audit, roadmap, and implementation — no hype, no jargon, no offshore handoff.",
  openGraph: {
    title: "Audax Ventures — AI for Canadian SMEs",
    description:
      "AI audit, roadmap, and implementation for Canadian SMEs. We show you where AI fits, then build it.",
    url: "https://audaxventures.ca/ai-for-sme",
  },
  alternates: { canonical: "https://audaxventures.ca/ai-for-sme" },
};

const clientLogos = [
  { src: "/logos/fundeze.png",          alt: "FundEze",         width: 120, height: 32 },
  { src: "/logos/migrateezy.png",       alt: "Migrateezy",      width: 120, height: 32 },
  { src: "/logos/linkglobal.avif",      alt: "LinkGlobal",      width: 120, height: 32 },
  { src: "/logos/greenglam-tech.png",   alt: "GreenGlam Tech",  width: 120, height: 32 },
  { src: "/logos/h2mb.avif",            alt: "H2MB",            width: 120, height: 32 },
  { src: "/logos/assessteam.svg",       alt: "AssessTeam",      width: 120, height: 32 },
  { src: "/logos/elkhorn-resort.avif",  alt: "Elkhorn Resort",  width: 120, height: 32 },
  { src: "/logos/clear-lake-golf.avif", alt: "Clear Lake Golf", width: 120, height: 32 },
];

// Productized entry offering (Phase 2 of design doc — placeholder framing
// for now; replace with real scope + price when the audit deliverable is
// formalized).
const auditDetails = [
  { label: "Duration",   value: "3 weeks"  },
  { label: "Format",     value: "Remote + onsite as needed" },
  { label: "Deliverable", value: "Written roadmap with 3–5 ranked AI use cases" },
];

const industriesToShow = [
  "manufacturing",
  "legal-professional-services",
  "transportation-logistics",
  "retail-ecommerce",
];

export default function AiForSmePage() {
  const program = getSolutionBySlug("ai-implementation");
  if (!program) notFound();

  const featuredServices = ["ai-consulting", "process-automation", "internal-tools"]
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));

  const industries = industriesToShow
    .map((slug) => getIndustryBySlug(slug))
    .filter((i): i is NonNullable<ReturnType<typeof getIndustryBySlug>> => Boolean(i));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",        item: "https://audaxventures.ca" },
      { "@type": "ListItem", position: 2, name: "AI for SMEs", item: "https://audaxventures.ca/ai-for-sme" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO — emerald glow signals "AI for SMEs" audience accent. */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 600px at 90% 0%, rgba(6,95,70,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 pt-20 md:pt-32 pb-16">
          <FadeIn>
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent-secondary)] mb-8">
              For SME operators
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-fg)] max-w-[18ch] mb-8">
              You&apos;ve heard about AI. We&apos;ll show you where it fits.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-xl leading-relaxed text-[var(--color-fg-muted)] max-w-[52ch]">
              Most AI consultants will sell you a strategy deck and disappear long before anything actually ships in your business. We take a different approach by auditing your operations, ranking the AI opportunities by realistic return on investment, and then building the systems that move the metrics that matter to you. Our team is Canadian and stays involved through implementation, so you never end up with a beautiful plan and no one left to execute it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-12 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 mb-6">
          <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] text-center">
            Canadian businesses we work with
          </div>
        </div>
        <div className="animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center opacity-70"
              style={{ height: 32 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AI READINESS AUDIT */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div>
              <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent-secondary)] mb-6">
                Where most SMEs start
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] mb-6">
                The AI Readiness Audit.
              </h2>
              <p className="text-lg leading-relaxed text-[var(--color-fg-muted)] mb-6">
                Three weeks. Fixed scope. We embed with your team, map your workflows, and write a roadmap of 3–5 AI use cases ranked by ROI and feasibility — specific to your business, not a generic deck.
              </p>
              <p className="text-base leading-relaxed text-[var(--color-fg-muted)] mb-8">
                At the end you have a clear yes/no on every AI question your team has been asking. If you decide to build any of them, we already know your stack and your team.
              </p>
              <a
                href="https://calendly.com/audax-ventures/30min"
                className="group inline-flex items-center gap-2 bg-[var(--color-accent-secondary)] hover:bg-[#054a37] text-white px-6 py-3.5 rounded-md font-medium text-base transition-all duration-200 ease-out no-underline shadow-sm hover:shadow-md"
              >
                Book a 20-min AI fit call
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 md:p-10 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-secondary)]"
              />
              <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-6">
                What you get
              </div>
              <dl className="space-y-6">
                {auditDetails.map((d) => (
                  <div key={d.label} className="border-b border-[var(--color-border)] pb-6 last:border-b-0 last:pb-0">
                    <dt className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-2">
                      {d.label}
                    </dt>
                    <dd className="text-lg text-[var(--color-fg)]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROGRAM PHASES */}
      <section className="border-t border-[var(--color-border)] py-24 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent-secondary)] mb-6">
              Beyond the audit
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[28ch] mb-4">
              From audit to implementation in one engagement.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--color-fg-muted)] max-w-[58ch] mb-16">
              {program.heroSub}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.phases.map((phase, i) => (
              <FadeIn key={phase.number} delay={i * 0.08}>
                <div className="border-t-2 border-[var(--color-accent-secondary)] pt-6">
                  <div className="font-[family-name:var(--font-outfit)] text-5xl font-bold leading-none text-[var(--color-fg)] mb-4 tabular-nums">
                    0{phase.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-2">
                    {phase.name}
                  </h3>
                  <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-4">
                    {phase.duration}
                  </div>
                  <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/programs/ai-implementation"
              className="inline-flex items-center gap-2 text-base font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline group/link"
            >
              Read the full AI Implementation program
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/link:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[24ch] mb-16">
            AI use cases by industry.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group/ind relative block bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 no-underline transition-all duration-300 ease-out hover:border-[var(--color-accent-secondary)] overflow-hidden h-full"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--color-accent-secondary)] transition-all duration-300 ease-out group-hover/ind:w-full"
                />
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)] mb-6 line-clamp-3">
                  {industry.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 group-hover/ind:text-[var(--color-accent-secondary)]">
                  See {industry.title} use cases
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/ind:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[24ch] mb-16">
              Services SMEs book most.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group/svc relative block bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 no-underline transition-all duration-300 ease-out hover:border-[var(--color-accent-secondary)] overflow-hidden h-full"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--color-accent-secondary)] transition-all duration-300 ease-out group-hover/svc:w-full"
                  />
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)] mb-6 line-clamp-3">
                    {service.heroSub}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 group-hover/svc:text-[var(--color-accent-secondary)]">
                    Learn more
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/svc:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + MAILTO */}
      <section className="relative border-t border-[var(--color-border)] py-32 bg-[var(--color-bg)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 400px at 100% 50%, rgba(6,95,70,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[28ch] mb-8">
              Curious where AI actually fits in your business?
            </h2>
            <a
              href="https://calendly.com/audax-ventures/30min"
              className="group inline-flex items-center gap-2 bg-[var(--color-accent-secondary)] hover:bg-[#054a37] text-white px-7 py-4 rounded-md font-medium text-base transition-all duration-200 ease-out no-underline shadow-sm hover:shadow-md"
            >
              Book a 20-min AI fit call
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="mt-4 text-sm text-[var(--color-fg-muted)]">
              Or email{" "}
              <a
                href="mailto:info@audaxventures.ca"
                className="underline hover:text-[var(--color-fg)]"
              >
                info@audaxventures.ca
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
