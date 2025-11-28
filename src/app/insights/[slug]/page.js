import NewsDetailSection from "@/components/features/insights/detail/NewsDetailSection";
import { DefaultOgImage } from "@/data/defaultMeta";
import { fetchFromAPI } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: Insights, error } = await fetchFromAPI(`blog-details?slug=${params.slug}`);

  if (!Insights || error) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { meta_title, meta_description, meta_keywords, title, image_value, image_alt_text_value, published_on, author } = Insights;

  // Use blog's own image or fallback
  const ogImage = image_value || DefaultOgImage;

  return {
    title: meta_title || title || "Blog Post",
    description: meta_description || "Read our latest blog post",
    keywords: meta_keywords || "",

    // Enhanced SEO fields
    openGraph: {
      title: meta_title || title || "Blog Post",
      description: meta_description || "Read our latest blog post",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: image_alt_text_value || title || "Blog post image",
        },
      ],
      type: "article",
      publishedTime: published_on ? published_on : undefined,
      authors: author ? [author] : undefined,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: meta_title || title || "Blog Post",
      description: meta_description || "Read our latest blog post",
      images: [ogImage],
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/insights/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { data: Insights, error } = await fetchFromAPI(`blog-details?slug=${params.slug}`);

  if (!Insights || error) {
    notFound();
  }

  return (
    <>
      <NewsDetailSection Insights={Insights} />
    </>
  );
}
