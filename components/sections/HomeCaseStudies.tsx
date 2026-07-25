"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/lib/case-studies-data";

export default function HomeCaseStudies() {
  const featured = caseStudiesData.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">Case Studies</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">
            Strategy That Shipped
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/work/${c.slug}`}
                className="group flex flex-col h-full bg-[#F8F9FA] rounded-3xl border border-gray-100 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  {c.logo && (
                    <div className="relative h-10 w-10 flex-shrink-0 rounded-lg border border-gray-100 bg-white p-1.5">
                      <Image src={c.logo} alt={c.clientName} fill className="object-contain p-1" sizes="40px" />
                    </div>
                  )}
                  <div>
                    <p className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm">{c.clientName}</p>
                    <p className="text-[#9CA3AF] text-xs">{c.clientType}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2E5F8A] mb-1">Problem</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2E5F8A] mb-1">What We Built</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{c.whatWeBuilt}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2E5F8A] mb-1">Outcome</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{c.outcome}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A] group-hover:gap-2.5 transition-all">
                  Read the case study <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-dashed border-[#2E5F8A]/30 text-sm font-semibold text-[#2E5F8A] hover:border-[#2E5F8A] hover:bg-[#2E5F8A]/5 transition-all"
          >
            View all case studies <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
