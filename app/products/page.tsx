import type { Metadata } from "next";
import ProductsContent from "@/components/sections/ProductsContent";

export const metadata: Metadata = {
  title: "Products | Audax Ventures",
  description: "Software products built by Audax Ventures — browse what we've shipped and visit each one directly.",
  alternates: { canonical: "https://audaxventures.ca/products" },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
