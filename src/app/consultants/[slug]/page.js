import DetailSection from "@/components/features/consultation/DetailSection";
import { DefaultOgImage } from "@/data/defaultMeta";
import { fetchFromAPI } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: consultantData, error } = await fetchFromAPI(`consultant-details?slug=${slug}`);

  if (!consultantData || error) {
    return {
      title: "Consultant Not Found",
      description: "The requested consultant profile could not be found.",
    };
  }

  const { meta_title, meta_description, meta_keywords, name, profile_image_value } = consultantData;

  // Use consultant's profile image or fallback
  const ogImage = profile_image_value || DefaultOgImage;

  return {
    title: meta_title || name || "Our Consultant",
    description: meta_description || `Learn more about ${name || "our consultant"}`,
    keywords: meta_keywords || "",

    // Enhanced SEO fields
    openGraph: {
      title: meta_title || name || "Our Consultant",
      description: meta_description || `Learn more about ${name || "our consultant"}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name || "Consultant"} profile image`,
        },
      ],
      type: "profile",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/consultants/${slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: meta_title || name || "Our Consultant",
      description: meta_description || `Learn more about ${name || "our consultant"}`,
      images: [ogImage],
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/consultants/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const { data, error } = await fetchFromAPI(`consultant-details?slug=${slug}`);

  const {
    name,
    designation,
    qualifications,
    experience,
    bio,
    description,
    education,
    certifications,
    schedule,
    meta_title,
    meta_description,
    meta_keywords,
    other_meta_tags,
    profile_image_value,
    profile_image_alt_text_value,
    languages,
    special_interests,
    consultant_testimonials,
  } = data;

  const basicInfo = {
    name,
    designation,
    qualifications,
    experience,
    bio,
    description,
    education,
    certifications,
    schedule,
    meta_title,
    meta_description,
    meta_keywords,
    other_meta_tags,
    profile_image_value,
    profile_image_alt_text_value,
  };

  return (
    <>
      <DetailSection
        basicInfo={basicInfo}
        languages={languages}
        specialInterests={special_interests}
        consultantTestimonials={consultant_testimonials}
      />
    </>
  );
}
