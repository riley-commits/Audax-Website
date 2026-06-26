// ── Marquee data ───────────────────────────────────────────────────────────
const trustedBy: { name: string; logo: string; logoOnly: boolean }[] = [
  { name: "FundEze",                logo: "/logos/fundeze.png",        logoOnly: true  },
  { name: "MigrateEzy",             logo: "/logos/migrateezy.png",     logoOnly: true  },
  { name: "LinkGlobal Network",     logo: "/logos/linkglobal.avif",    logoOnly: false },
  { name: "GreenGlam Tech",         logo: "/logos/greenglam-tech.png", logoOnly: false },
  { name: "H2MB",                   logo: "/logos/h2mb.avif",          logoOnly: false },
  { name: "AssessTEAM",             logo: "/logos/assessteam.svg",     logoOnly: true  },
  { name: "Elkhorn Resort",         logo: "/logos/elkhorn-resort.avif", logoOnly: false },
  { name: "Clear Lake Golf Course", logo: "/logos/clear-lake-golf.avif", logoOnly: false },
];

// ── Main component ─────────────────────────────────────────────────────────
export default function StatsBar() {
  return (
    <>
      {/* ── Trusted By Marquee ── */}
      <section className="bg-[#F8F9FA] py-10 border-y border-gray-100 overflow-hidden">
        <p className="text-center text-[10px] tracking-widest uppercase text-[#6B7280] font-semibold mb-7">
          Trusted by founders and enterprises across North America
        </p>

        {/* Fade-edge wrapper */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

          {/* Duplicated list for seamless loop */}
          <div className="animate-marquee">
            {[...trustedBy, ...trustedBy].map((co, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm text-[#6B7280] font-[var(--font-outfit)] font-bold text-sm tracking-tight select-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={co.logo}
                  alt={co.name}
                  className="h-7 w-auto object-contain"
                />
                {!co.logoOnly && (
                  <span>{co.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
