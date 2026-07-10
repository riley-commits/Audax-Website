import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe, Rocket, Megaphone, MessageCircle, Smartphone, Code2, Settings, Compass } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Our Clients — Real Work for Real Businesses | Audax Ventures",
  description: "The founders and businesses we've built software and marketing for — from AI-powered startups to established Manitoba hospitality brands.",
  alternates: { canonical: "https://audaxventures.ca/success-stories" },
};

// ── Work tags ──────────────────────────────────────────────────────────────

const tagIcons: Record<string, typeof Globe> = {
  "Website": Globe,
  "MVP Development": Rocket,
  "Digital Marketing": Megaphone,
  "Chatbot": MessageCircle,
  "App Development": Smartphone,
  "Software Development": Code2,
  "Operations Support": Settings,
  "Strategy Planning": Compass,
};

const clients = [
  {
    name: "FundEze",
    logo: "/logos/fundeze.png",
    href: "https://www.fundeze.io/",
    description:
      "FundEze is an AI-powered platform that matches startup founders with the right investors based on their business and growth plans — making fundraising less about who you know.",
    work: ["MVP Development", "Digital Marketing"],
  },
  {
    name: "MigrateEzy",
    logo: "/logos/migrateezy.png",
    description:
      "MigrateEzy is building a platform to make relocation simpler for the people going through it.",
    work: ["MVP Development"],
  },
  {
    name: "LinkGlobal",
    logo: "/logos/linkglobal.avif",
    description:
      "LinkGlobal is building an AI-powered platform to help people learn languages through real conversation practice.",
    work: ["MVP Development", "Website"],
    note: "Public website currently in development.",
  },
  {
    name: "GreenGlam Tech",
    logo: "/logos/greenglam-tech.png",
    href: "https://www.greenglamtech.com/",
    description:
      "GreenGlamTech's wardrobe-planning app helps people get more out of the clothes they already own, using AI to suggest outfits and cut down on unnecessary buying.",
    work: ["App Development", "Digital Marketing"],
  },
  {
    name: "H2MB",
    logo: "/logos/h2mb.avif",
    href: "https://www.h2mb.ca/",
    description:
      "H2MB is developing a green hydrogen production, storage, and distribution facility in Winnipeg, as part of building out Manitoba's hydrogen economy.",
    work: ["Website", "Operations Support"],
    note: "H2MB was founded by Audax President Joshua Zaporzan — one of several ventures we've helped build from the ground up.",
  },
  {
    name: "AssessTEAM",
    logo: "/logos/assessteam.svg",
    href: "https://www.assessteam.com/",
    description:
      "AssessTEAM is an established employee performance management platform used by teams worldwide. We contributed software development work to their product.",
    work: ["Software Development"],
  },
  {
    name: "Elkhorn Resort",
    logo: "/logos/elkhorn-resort.avif",
    href: "https://www.elkhornresort.mb.ca/",
    description:
      "Elkhorn Resort is a spa and conference centre at Clear Lake, adjacent to Riding Mountain National Park in Manitoba.",
    work: ["Website", "Digital Marketing", "Chatbot"],
  },
  {
    name: "Clear Lake Golf Course",
    logo: "/logos/clear-lake-golf.avif",
    href: "https://www.clearlakegolfcourse.com/",
    description:
      "Clear Lake Golf Course is one of Manitoba's most storied courses, built in stages starting in 1928 inside Riding Mountain National Park.",
    work: ["Website", "Digital Marketing", "Strategy Planning"],
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Our Clients</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
            Real Work for Real Businesses
          </h1>
          <p className="text-[#6B7280] text-lg">
            From AI-powered startups to established Manitoba hospitality brands — here&apos;s who we&apos;ve built for.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {clients.map((c) => (
              <div key={c.name} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-xl border border-gray-100 bg-[#FAFAF8] p-2">
                    <Image src={c.logo} alt={c.name} fill className="object-contain p-1" sizes="48px" />
                  </div>
                  {c.href ? (
                    <Link
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[var(--font-outfit)] font-extrabold text-lg text-[#1A1A2E] hover:text-[#2E5F8A] transition-colors"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-lg text-[#1A1A2E]">{c.name}</h3>
                  )}
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">{c.description}</p>

                {c.note && (
                  <p className="text-[#9CA3AF] text-xs italic leading-relaxed mb-5">{c.note}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {c.work.map((w) => {
                    const Icon = tagIcons[w];
                    return (
                      <span
                        key={w}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2E5F8A]/8 text-[#2E5F8A] text-xs font-semibold"
                      >
                        <Icon size={12} /> {w}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Be Our Next Client?"
        subtext="Book a free strategy call and let's talk about what you're building."
      />
    </>
  );
}
