const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/` || "http://localhost:3001";
export const MEDIA_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { DefaultOgImage } from "@/data/defaultMeta";
import { defaultMeta } from "@/data/defaultMeta";

export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

export async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      return {
        data: null,
        error: true,
      };
    }

    const data = await response.json();

    return {
      error: !data?.status,
      data: data?.status ? data?.data : null,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
}

export async function fetchDropdownDataAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-cache",
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      throw new APIError("Failed to fetch data from API", response.status);
    }
    const data = await response.json();

    return {
      data: data?.status ? data?.data : null,
    };
  } catch (error) {
    throw new APIError(error.message, error.status || 500);
  }
}

export async function postToAPI(endpoint, data) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new APIError("Failed to post data to API", response.status);
    }

    const responseData = await response.json();

    return {
      data: responseData?.status ? responseData?.data : null,
    };
  } catch (error) {
    throw new APIError(error.message, error.status || 500);
  }
}

export async function multipartPostToAPI(endpoint, formData) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      // ❌ DO NOT manually set Content-Type
      // The browser automatically adds the multipart boundary.
      body: formData,
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("❌ multipartPostToAPI error:", error);
    throw error;
  }
}

export async function getMetaData(pageKey, pagename = "") {
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
      `${API_BASE_URL}meta-tags?page=${pageKey}`,
      { cache: "no-store" } // optional: prevents stale data in Next.js
    );

    const result = await response.json();

    const meta = result.data;

    if (result.status) {
      return {
        title: meta?.meta_title || metaTitle,
        description: meta?.meta_description || metaDescription,
        keywords: meta?.meta_keywords || metaKeywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || metaTitle,
          description: meta?.og_description || meta?.meta_description || metaDescription,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [{ url: DefaultOgImage, width: 1200, height: 630 }],
          type: "website",
          siteName: "Skyline Hospitals",
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
        siteName: "Skyline Hospitals",
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
        siteName: "Skyline Hospitals",
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
export async function getMetaDataForInnerPages(endpoint, pagename = "") {
  // fallback meta from defaultMeta
  const fallback = {
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
      `${API_BASE_URL}${endpoint}`,
      { cache: "no-store" } // optional: prevents stale data in Next.js
    );

    const result = await response.json();

    const meta = result.data;

    if (result.status) {
      return {
        title: meta?.meta_title || metaTitle,
        description: meta?.meta_description || metaDescription,
        keywords: meta?.meta_keywords || metaKeywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || metaTitle,
          description: meta?.og_description || meta?.meta_description || metaDescription,
          images: meta?.section1_image_value
            ? [{ url: meta.section1_image_value, width: 1200, height: 630 }]
            : [{ url: DefaultOgImage, width: 1200, height: 630 }],
          type: "website",
          siteName: "Skyline Hospitals",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${pagename}`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || metaTitle,
          description: meta?.twitter_description || meta?.meta_description || metaDescription,
          images: meta?.section1_image_value ? [meta.section1_image_value] : [],
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
        siteName: "Skyline Hospitals",
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
        siteName: "Skyline Hospitals",
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
