import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "UI/UX Gallery — Portfolio | Audax Ventures",
  description: "Browse our UI/UX design gallery: mobile apps, web applications, dashboards, and e-commerce interfaces built by the Audax Ventures design team.",
  alternates: { canonical: "https://audaxventures.ca/gallery" },
  robots: { index: false, follow: false },
};

const items = [
  { id: 1, category: "Dashboard", title: "Analytics Platform", img: "https://picsum.photos/600/400?random=20" },
  { id: 2, category: "Mobile", title: "iOS Fintech App", img: "https://picsum.photos/400/600?random=21" },
  { id: 3, category: "Web App", title: "SaaS Project Manager", img: "https://picsum.photos/600/450?random=22" },
  { id: 4, category: "E-Commerce", title: "DTC Brand Store", img: "https://picsum.photos/600/400?random=23" },
  { id: 5, category: "Dashboard", title: "Operations Dashboard", img: "https://picsum.photos/600/400?random=24" },
  { id: 6, category: "Mobile", title: "Health Tracking App", img: "https://picsum.photos/400/600?random=25" },
  { id: 7, category: "Web App", title: "CRM Platform", img: "https://picsum.photos/600/400?random=26" },
  { id: 8, category: "E-Commerce", title: "Marketplace MVP", img: "https://picsum.photos/600/450?random=27" },
  { id: 9, category: "Dashboard", title: "Real-Time Monitoring", img: "https://picsum.photos/600/400?random=28" },
];

const categories = ["All", "Mobile", "Web App", "Dashboard", "E-Commerce"];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Portfolio</p>
            <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
              UI/UX Gallery
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              A showcase of interfaces, dashboards, and mobile experiences designed and built by our team.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 text-[#6B7280] hover:border-[#2E5F8A] hover:text-[#2E5F8A] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="text-xs text-blue-200 font-semibold uppercase tracking-widest">{item.category}</span>
                    <p className="text-white font-[var(--font-outfit)] font-bold text-lg">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
