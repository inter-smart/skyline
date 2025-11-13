// app/robots.ts
import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://beta-skyline-web.netlify.app/sitemap.xml",
  };
}
