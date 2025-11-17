import DetailSection from "@/components/features/consultation/DetailSection";
import { fetchFromAPI } from "@/lib/api";

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
