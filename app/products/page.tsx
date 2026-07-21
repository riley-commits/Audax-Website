import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { productsData, withUtm } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Products | Audax Ventures",
  description: "Software products built by Audax Ventures — browse what we've shipped and visit each one directly.",
  alternates: { canonical: "https://audaxventures.ca/products" },
};

function ProductScreenshot({ product }: { product: (typeof productsData)[number] }) {
  if (product.screenshot) {
    return (
      <div className="relative w-full md:w-[420px] aspect-[16/10] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100">
        <Image
          src={product.screenshot}
          alt={`${product.name} homepage screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>
    );
  }
  return (
    <div className="relative w-full md:w-[420px] aspect-[16/10] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-[#0D1526]">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#080F1C] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      </div>
      <div className="absolute inset-0 top-9 flex flex-col items-center justify-center gap-2">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center font-[var(--font-outfit)] font-extrabold text-2xl text-white"
          style={{ backgroundColor: product.accentColor }}
        >
          {product.name.charAt(0)}
        </div>
        <p className="text-white/30 text-xs font-medium">Screenshot coming soon</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Products</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
            Software Products You Can Go Use
          </h1>
          <p className="text-[#6B7280] text-lg">
            Every product below is live — click through to visit it directly.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {productsData.map((product) => (
              <Link
                key={product.name}
                href={withUtm(product.url, product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col md:flex-row gap-6 md:items-center"
              >
                <ProductScreenshot product={product} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-xl text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors">
                      {product.name}
                    </h3>
                    <ArrowUpRight size={18} className="flex-shrink-0 text-[#9CA3AF] group-hover:text-[#2E5F8A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-[#6B7280] text-base leading-relaxed">{product.description}</p>
                  {product.note && (
                    <p className="text-[#9CA3AF] text-xs italic leading-relaxed mt-3">{product.note}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6B7280] text-sm">
              Want to see how we build these?{" "}
              <Link href="/success-stories" className="text-[#2E5F8A] font-semibold hover:underline">
                See our client work →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a Product Idea of Your Own?"
        subtext="Book a free strategy call and let's talk about what you're building."
      />
    </>
  );
}
