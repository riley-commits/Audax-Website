import type { Metadata } from "next";
import CareersContent from "@/components/sections/CareersContent";
import { careersData } from "@/lib/careers-data";

const job = careersData[0];

export const metadata: Metadata = job
  ? {
      title: job.metaTitle,
      description: job.metaDescription,
      alternates: { canonical: "https://audaxventures.ca/careers" },
    }
  : {
      title: "Careers | Audax Ventures",
      description: "Open positions at Audax Ventures.",
      alternates: { canonical: "https://audaxventures.ca/careers" },
    };

export default function CareersPage() {
  if (!job) {
    return (
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-widest uppercase text-[#2563EB] font-semibold mb-3">Careers</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl text-[#0F172A] mb-4">
            No Open Positions Right Now
          </h1>
          <p className="text-[#374151] text-lg">
            We don&apos;t have any open roles at the moment, but check back soon.
          </p>
        </div>
      </section>
    );
  }

  return <CareersContent job={job} />;
}
