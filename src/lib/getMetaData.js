import { defaultMeta } from "@/data/defaultMeta";

export async function getMetaData(pageKey, pageType = "common-page", pagename = "") {
  // fallback meta from defaultMeta
  const fallback = defaultMeta[pageKey] || {
    title: "Skyline Hospitals",
    description: "Be part of a hospital dedicated to excellence, compassion, and innovation.",
    keywords:
      "Skyline Hospitals, best hospital, healthcare services, medical care, advanced treatments, multispeciality hospital, patient care, doctors, surgeons, emergency care, health checkup, medical innovation, hospital in UAE, world-class healthcare",
  };

  const metaTitle = fallback.title;
  const metaDescription = fallback.description;
  const metaKeywords = fallback.keywords;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getMeta${pageKey}`,
      { cache: "no-store" } // optional: prevents stale data in Next.js
    );

    const result = await response.json();
    const meta = result.data;

    if (result.success) {
      return {
        title: meta?.meta_title || metaTitle,
        description: meta?.meta_description || metaDescription,
        keywords: meta?.meta_keywords || metaKeywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || metaTitle,
          description: meta?.og_description || meta?.meta_description || metaDescription,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || metaTitle,
          description: meta?.twitter_description || meta?.meta_description || metaDescription,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
        },
        error: null,
      };
    }

    // fallback if API fails but status != success
    return {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
      },
      error: result.message || "No metadata found",
    };
  } catch (error) {
    // catch network or API errors
    return {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
      },
      error: "No metadata found",
    };
  }
}
