import Image from "next/image";

const trustedBy: { name: string; logo: string; logoOnly: boolean }[] = [
  { name: "LinkGlobal Network", logo: "/logos/linkglobal.avif",     logoOnly: true  },
  { name: "H2MB",               logo: "/logos/h2mb.avif",           logoOnly: true  },
  { name: "FundEze",            logo: "/logos/fundeze.png",         logoOnly: true  },
  { name: "MigrateEzy",         logo: "/logos/migrateezy.png",      logoOnly: true  },
  { name: "Verclara",           logo: "/logos/verclara.png",        logoOnly: true  },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] tracking-widest uppercase text-[#9CA3AF] font-semibold mb-8">
          Trusted by Innovative Organizations
        </p>
        <div className="flex flex-nowrap items-center justify-center gap-x-3 sm:gap-x-8 lg:gap-x-14">
          {trustedBy.map((co) => (
            <div key={co.name} className="flex items-center gap-2 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <div className="relative h-6 w-14 sm:h-9 sm:w-24 lg:h-10 lg:w-28 flex-shrink-0">
                <Image src={co.logo} alt={co.name} fill className="object-contain" sizes="(max-width: 640px) 56px, (max-width: 1024px) 96px, 128px" />
              </div>
              {!co.logoOnly && (
                <span className="text-[#374151] font-[var(--font-outfit)] font-bold text-sm tracking-tight select-none">
                  {co.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
