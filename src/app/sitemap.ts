import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://web24.ai";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#como-funciona`, lastModified: now, priority: 0.8 },
    { url: `${base}/#configurador`, lastModified: now, priority: 0.9 },
    { url: `${base}/#ejemplos`, lastModified: now, priority: 0.7 },
    { url: `${base}/#contacto`, lastModified: now, priority: 0.8 },
  ];
}
