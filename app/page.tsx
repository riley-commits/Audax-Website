import type { Metadata } from "next";
import Image from "next/image";
import TwoDoorPicker from "@/components/sections/TwoDoorPicker";
import { AnimatedHero } from "@/components/sections/AnimatedHero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title:
    "Audax Ventures — Canadian Software Studio for Founders and SMEs",
  description:
    "Canadian software studio. We build MVPs for funded founders and bring AI into Canadian SMEs. Winnipeg-based, working coast to coast.",
  openGraph: {
    title:
      "Audax Ventures — Canadian Software Studio for Founders and SMEs",
    description:
      "We build the products you can't, and audit the AI you should. Winnipeg-based, working coast to coast.",
    url: "https://audaxventures.ca",
  },
  alternates: { canonical: "https://audaxventures.ca" },
};

// Organization JSON-LD now lives in app/layout.tsx so every page emits it.

// Trust strip — real client logos from /public/logos/. Duplicated so the
// marquee animation can loop seamlessly via -50% translate.
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

// CountUp metrics: SSR renders `display`, animation runs after in-view.
const metrics = [
  { value: 50,   display: "50+",  suffix: "+",  label: "Projects shipped" },
  { value: 8,    display: "8",    suffix: "",   label: "Weeks to MVP"     },
  { value: 98,   display: "98%",  suffix: "%",  label: "On-time delivery" },
];

// Headline word chunks. Colored spans stay self-contained so the
// AnimatedHero wrapper animates each chunk as one unit.
const headlineChunks = [
  "Canadian",
  "Software",
  "Studio",
  "for",
  <span key="founders" className="text-[var(--color-accent)]">Founders</span>,
  "and",
  <span key="smes" className="text-[var(--color-accent-secondary)]">SMEs</span>,
  ".",
];

export default function HomePage() {
  return (
    <>
      {/* HERO — cinematic, ~85% viewport on first paint. Animated entrance. */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Decorative gradient — more pronounced than the polish pass. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1100px 700px at 90% -10%, rgba(58,123,213,0.14), transparent 60%), radial-gradient(800px 600px at -10% 110%, rgba(6,95,70,0.08), transparent 55%), radial-gradient(600px 400px at 50% 50%, rgba(46,95,138,0.03), transparent 70%)",
          }}
        />
        {/* Subtle grid pattern — adds texture without distraction. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,26,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,46,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] w-full px-6 md:px-12 py-20 md:py-32">
          <AnimatedHero
            eyebrow="Winnipeg, Manitoba · Working coast to coast"
            headline={headlineChunks}
            subhead={
              <>We build the products you can&apos;t, and audit the AI you should.</>
            }
          />
        </div>
        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-fg-muted)]"
        >
          <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-[10px] font-medium tracking-[0.18em] uppercase">
            Scroll
          </div>
          <div className="w-px h-8 bg-[var(--color-border)] animate-pulse" />
        </div>
      </section>

      {/* TWO-DOOR PICKER */}
      <FadeIn>
        <TwoDoorPicker />
      </FadeIn>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-16 overflow-hidden">
        <FadeIn>
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 mb-8">
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] text-center">
              Builders who trust us
            </div>
          </div>
        </FadeIn>
        <div className="animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center"
              style={{ height: 40 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* METRICS ROW — animated count-up on scroll-in. */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-0 md:px-8 ${i > 0 ? "md:border-l md:border-[var(--color-border)] pt-6 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]" : ""}`}
              >
                <CountUp
                  value={m.value}
                  display={m.display}
                  suffix={m.suffix}
                  className="block font-[family-name:var(--font-outfit)] text-5xl md:text-6xl font-bold leading-none tracking-tight tabular-nums text-[var(--color-fg)] mb-3"
                />
                <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FEATURED WORK — outcome-led project cards. */}
      <FeaturedWork />

      {/* Testimonials section intentionally omitted — Riley removed it
          from the homepage on 2026-05-15 (commit 3be6045 on the OLD
          repo). Bring back when real attributed quotes are ready. */}

      {/* FINAL CTA — magnetic button + glow. */}
      <section className="relative border-t border-[var(--color-border)] py-32 md:py-40 bg-[var(--color-bg)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 50%, rgba(46,95,138,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)] max-w-[20ch] mx-auto mb-12">
              Ready to build something Canadian builders are proud of?
            </h2>
            <MagneticButton
              href="https://calendly.com/audax-ventures/30min"
              ariaLabel="Book a strategy call"
              className="group inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-9 py-5 rounded-md font-medium text-lg transition-colors duration-200 ease-out no-underline shadow-lg hover:shadow-xl"
            >
              Book a strategy call
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </MagneticButton>
            <p className="mt-6 text-sm text-[var(--color-fg-muted)]">
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
