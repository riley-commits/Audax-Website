import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts, categories } from "@/lib/insights-data";

export const metadata: Metadata = {
  title: "Insights — AI Leadership & Software Development | Audax Ventures",
  description:
    "Insights on AI strategy, Fractional CAIO leadership, and custom software development from the Audax Ventures team. Practical advice for executives and enterprise builders.",
  alternates: { canonical: "https://audaxventures.ca/insights" },
};

export default function InsightsPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Resources</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
            News & Tech Insights
          </h1>
          <p className="text-[#374151] text-lg max-w-xl mx-auto">
            Practical advice on AI strategy, executive AI leadership, and building software that ships.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 text-[#374151] hover:border-[#2E5F8A] hover:text-[#2E5F8A] transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Link
          href={`/insights/${featured.slug}`}
          className="group block mb-12 rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src={featured.thumbnail} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-white bg-[#2E5F8A] px-3 py-1 rounded-full">Featured</span>
                <span className="text-xs font-semibold text-[#2E5F8A] bg-blue-50 px-2.5 py-0.5 rounded-full">{featured.category}</span>
              </div>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E] mb-3 group-hover:text-[#2E5F8A] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[#374151] leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1A1A2E]">{featured.author}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A]">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={post.thumbnail} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#2E5F8A] bg-blue-50 px-2.5 py-0.5 rounded-full">{post.category}</span>
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-base leading-snug mb-3 group-hover:text-[#2E5F8A] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#374151] text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#374151]">{post.author}</span>
                  <span className="text-xs font-semibold text-[#2E5F8A] inline-flex items-center gap-1">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
