import type { MetadataRoute } from "next";
import { products } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kitalab.online";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
