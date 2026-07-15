import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /products is disallowed until productsData in lib/products-data.ts has
    // real entries — remove it here once that's done.
    rules: { userAgent: "*", allow: "/", disallow: ["/blog", "/gallery", "/products"] },
    sitemap: "https://audaxventures.ca/sitemap.xml",
  };
}
