import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

/**
 * Featured Work — outcome-led project cards.
 *
 * No screenshots (none available for client work yet) — instead, lead with
 * the metric. Outcome stat first, project name + description second,
 * link last. The metric IS the visual.
 *
 * Three cards on desktop, stack on mobile. Alternating accent color
 * (slate, emerald, slate) for visual rhythm. Each card is the link.
 *
 * Outcomes here are intentionally generic-realistic placeholders that
 * map to real client engagements. Replace with real attributed metrics
 * (with permission) before launch — particularly the specific weeks-to-
 * launch numbers and percentage improvements.
 */

interface FeaturedProject {
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  href: string;
  accentVar: string; // CSS variable for accent
  logo?: { src: string; width: number; height: number };
}

const projects: FeaturedProject[] = [
  {
    metric: "11 weeks",
    metricLabel: "MVP to launch",
    client: "FundEze",
    description:
      "Fintech platform built from scoping through launch. Validated user flow + Stripe integration + production deployment.",
    href: "/services/mvp-development",
    accentVar: "--color-accent",
    logo: { src: "/logos/fundeze.png", width: 200, height: 56 },
  },
  {
    metric: "Net-new",
    metricLabel: "Renewable energy software",
    client: "H2MB",
    description:
      "Operations platform for a Manitoba renewable-energy venture. We built the technology stack from scratch alongside fractional COO advisory.",
    href: "/programs",
    accentVar: "--color-accent-secondary",
    logo: { src: "/logos/h2mb.avif", width: 200, height: 56 },
  },
  {
    metric: "Full IP",
    metricLabel: "Owned by the client",
    client: "Audax engagements",
    description:
      "Every codebase we hand off includes documentation, a test suite, and an architecture decision record. No lock-in. You own everything.",
    href: "/process",
    accentVar: "--color-accent",
  },
];

export function FeaturedWork() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <FadeIn>
          <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-6">
            What we&apos;ve shipped
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)] max-w-[20ch] mb-16">
            Outcomes, not adjectives.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.client + i} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group/proj relative block bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 md:p-10 no-underline transition-all duration-300 ease-out hover:border-[var(--proj-accent)] overflow-hidden h-full"
                style={
                  {
                    ["--proj-accent" as string]: `var(${p.accentVar})`,
                  } as React.CSSProperties
                }
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--proj-accent)] transition-all duration-300 ease-out group-hover/proj:w-full"
                />
                <div className="mb-8">
                  <div className="font-[family-name:var(--font-outfit)] text-5xl md:text-6xl font-bold leading-none tracking-tight text-[var(--proj-accent)] mb-3">
                    {p.metric}
                  </div>
                  <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)]">
                    {p.metricLabel}
                  </div>
                </div>
                {p.logo ? (
                  <div className="mb-3 flex items-center h-10">
                    <Image
                      src={p.logo.src}
                      alt={`${p.client} logo`}
                      width={p.logo.width}
                      height={p.logo.height}
                      className="h-10 w-auto object-contain object-left"
                    />
                  </div>
                ) : (
                  <div className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-3">
                    {p.client}
                  </div>
                )}
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)] mb-8">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 group-hover/proj:text-[var(--proj-accent)]">
                  See how we do it
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/proj:translate-x-1"
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
  );
}
