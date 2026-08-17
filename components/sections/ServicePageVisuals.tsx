import type { ServicePageData } from "@/lib/service-pages-data";

/**
 * Shared visual system for the three service landing pages (AI Leadership,
 * Custom Software Development, Digital Operations). Background rhythm, the
 * signature line motif, and per-page accent wayfinding all live here so the
 * same system can be extended to other pages later without duplicating it.
 */

// Section "chapter" backgrounds. A navy-tinted neutral separates
// context/process sections from plain white, and a warm cream marks a
// page's highlight section (First 90 Days / What We Deliver).
export const SECTION_TINT_BG = "#F5F7FA";
export const SECTION_CREAM_BG = "#FBF8F1";

// Deliberately distinct from the sitewide Think/Build/Scale journey-nav
// pill (which stays a fixed blue→purple gradient regardless of page — a
// legend, not a page identity). This is each page's own accent, replacing
// the old flat phase color for every small structural detail on that page
// — header borders, eyebrow chips, checkmarks, circles — so the whole page
// reads as one coherent hue instead of two competing accents. Values are
// checked to hold 4.5:1 contrast on white for text-sized use.
export const pageAccent: Record<ServicePageData["phase"], string> = {
  Think: "#1B3A5C", // AI Leadership — navy
  Build: "#C2410C", // Custom Software Development — burnt orange
  Scale: "#8B6914", // Digital Operations — gold
};

// Thin left-border treatment for left-aligned major section headers.
// Pair with an inline `style={{ borderColor: accent }}` on the heading.
export const headerAccentClass = "border-l-[3px] pl-4 sm:pl-5";

// Short centered underline for headers in centered sections, where a left
// border would sit oddly next to centered text.
export function HeaderAccentUnderline({ color, className = "" }: { color: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`block mt-4 h-[3px] w-10 rounded-full mx-auto ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

// One abstract flowing line motif — a single confident stroke, not a
// literal path/roadmap. Three gentle variants share the same family
// without reading as one static image copy-pasted between sections.
const LINE_PATHS: Record<1 | 2 | 3, string> = {
  1: "M-100,180 C160,40 380,300 650,160 C900,30 1120,260 1360,110 C1460,60 1540,140 1600,100",
  2: "M-80,90 C220,250 460,10 740,200 C1000,360 1200,60 1440,210 C1520,250 1580,190 1620,225",
  3: "M-90,230 C190,60 420,290 700,95 C960,-60 1180,255 1400,65 C1500,15 1560,115 1620,75",
};

export function SignatureLine({
  variant,
  color,
  strokeWidth = 1.75,
  className = "",
}: {
  variant: 1 | 2 | 3;
  color: string;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    >
      <path d={LINE_PATHS[variant]} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
