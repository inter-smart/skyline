import Page from "@/app/404/page";
import PrivacyPolicySection from "@/components/features/privacy/Policies";
import { DefaultOgImage } from "@/data/defaultMeta";
import { fetchFromAPI } from "@/lib/api";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data, error } = await fetchFromAPI(`policy?slug=${slug}`);

  // Handle error or missing data
  if (error || !data) {
    return {
      title: "Policy Not Found",
      description: "The requested policy page could not be found.",
    };
  }

  const { meta_title, meta_description, meta_keywords, title } = data;

  return {
    title: meta_title || title || "Policy",
    description: meta_description || "View our policy details",
    keywords: meta_keywords || "",

    // Enhanced SEO fields
    openGraph: {
      title: meta_title || title || "Policy",
      description: meta_description || "View our policy details",
      images: [{ url: DefaultOgImage, width: 1200, height: 630 }],
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/policies/${slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: meta_title || title || "Policy",
      description: meta_description || "View our policy details",
      images: [DefaultOgImage],
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/policies/${slug}`,
    },
  };
}

export default async function Policies({ params }) {
  const { slug } = await params;

  const { data, error } = await fetchFromAPI(`policy?slug=${slug}`);

  console.log(data);

  if (error) return <div></div>;

  const { title, content, meta_title, meta_description, meta_keywords } = data;

  return (
    <div>
      <PrivacyPolicySection title={title} content={content} />
    </div>
  );
}
