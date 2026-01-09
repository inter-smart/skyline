import { DefaultOgImage } from "@/data/defaultMeta";
import { fetchFromAPI } from "@/lib/api";

import InnerBanner from "@/components/common/InnerBanner";
import ConsultantSectionServiceInner from "@/components/features/home/ConsultantSectionServiceInner";
import BookConsultationSection from "@/components/features/service/BookConsultationSection";
import CareSection from "@/components/features/service/CareSection";
import HospitalSection from "@/components/features/service/HospitalSection";
import AppointmentInner from "@/components/features/service/innerService/Appointment";
import IntegatedSection from "@/components/features/service/IntegatedSection";
import ManagingADHD from "@/components/features/service/ManagingADHD";
import PricingSection from "@/components/features/service/PricingSection";
import RecognizingSection from "@/components/features/service/RecognizingSection";
import ServiceFaqSection from "@/components/features/service/ServiceFaqSection";
import TableSection from "@/components/features/service/TableSection";
import UnderstandingADHD from "@/components/features/service/UnderstandingADHD";
import VideoSection from "@/components/features/service/VideoSection";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const { data: Insights, error } = await fetchFromAPI(`blog-details?slug=${params.slug}`);

//   if (!Insights || error) {
//     return {
//       title: "Blog Not Found",
//       description: "The requested blog post could not be found.",
//     };
//   }

//   const { meta_title, meta_description, meta_keywords, title, image_value, image_alt_text_value, published_on, author } = Insights;

//   const ogImage = image_value || DefaultOgImage;

//   return {
//     title: meta_title || title || "Blog Post",
//     description: meta_description || "Read our latest blog post",
//     keywords: meta_keywords || "",

//     openGraph: {
//       title: meta_title || title || "Blog Post",
//       description: meta_description || "Read our latest blog post",
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: image_alt_text_value || title || "Blog post image",
//         },
//       ],
//       type: "article",
//       publishedTime: published_on ? published_on : undefined,
//       authors: author ? [author] : undefined,
//       url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: meta_title || title || "Blog Post",
//       description: meta_description || "Read our latest blog post",
//       images: [ogImage],
//     },

//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/insights/${slug}`,
//     },
//   };
// }

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const { data, error } = await fetchFromAPI(`blog-details?slug=${slug}`);

  if (error || !data) {
    return (
      <div className="text-center py-20">
        <Page />
      </div>
    );
  }

  const {
    banner_pre_title,
    banner_title,
    banner_description,
    banner_value,
    banner_mobile_value,
    banner_alt_text_value,
    section1_content,
    section1_side_note,
    section1_side_note_background_color,
    section1_image_value,
    section1_image_alt_text_value,
    section2_video_thumbnail_image_value,
    section2_video_value,
    section3_content,
    section3_button_text,
    section3_button_url,
    section3_button_text_color,
    section3_button_color,
    section3_background_color,
    section3_image_value,
    section3_image_alt_text_value,
    section4_content,
    section5_content,
    section5_box_content,
    section5_box_background_color,
    section5_image_value,
    section5_image_alt_text_value,
    section6_content,
    section6_background_color,
    section7_content,
    section7_table,
    section8_content,
    section8_table,
    section9_content,
    section10_video_thumbnail_image_value,
    section10_video_value,
    section11_content,
    section11_background_color,
    section12_content,
    section12_table,
    section12_image_value,
    section12_image_alt_text_value,

    section13_content,

    section14_content,
    section14_button_text,
    section14_button_url,
    section14_image_value,
    section14_image_alt_text_value,

    section15_content,

    blog_care_options,
    blog_signals,
    blog_treatment_components,
    blog_treatment_steps,
    blog_faqs,

    consultants,
    highlights,
  } = data;

  const bannerData = {
    banner_pre_title: banner_pre_title ? banner_pre_title : null,
    banner_title: banner_title ? banner_title : null,
    banner_description: banner_description ? banner_description : null,
    banner_value: banner_value ? banner_value : null,
    banner_mobile_value: banner_mobile_value ? banner_mobile_value : null,
    banner_alt_text_value: banner_alt_text_value ? banner_alt_text_value : null,
  };

  const section1Data = {
    content: section1_content ? section1_content : null,
    sideNote: section1_side_note ? section1_side_note : null,
    sideNoteBg: section1_side_note_background_color ? section1_side_note_background_color : null,
    image: section1_image_value ? section1_image_value : null,
    imageAlt: section1_image_alt_text_value ? section1_image_alt_text_value : null,
  };

  const section2Data = {
    videoThumbnail: section2_video_thumbnail_image_value ? section2_video_thumbnail_image_value : null,
    video: section2_video_value ? section2_video_value : null,
  };

  const section3Data = {
    content: section3_content ? section3_content : null,
    buttonText: section3_button_text ? section3_button_text : null,
    buttonUrl: section3_button_url ? section3_button_url : null,
    buttonTextColor: section3_button_text_color ? section3_button_text_color : null,
    buttonColor: section3_button_color ? section3_button_color : null,
    backgroundColor: section3_background_color ? section3_background_color : null,
    image: section3_image_value ? section3_image_value : null,
    imageAlt: section3_image_alt_text_value ? section3_image_alt_text_value : null,
  };

  const section4Data = {
    content: section4_content ? section4_content : null,
    list: blog_care_options ? blog_care_options : null,
  };

  const section5Data = {
    content: section5_content ? section5_content : null,
    boxContent: section5_box_content ? section5_box_content : null,
    boxBackground: section5_box_background_color ? section5_box_background_color : null,
    image: section5_image_value ? section5_image_value : null,
    imageAlt: section5_image_alt_text_value ? section5_image_alt_text_value : null,
  };

  const section6Data = {
    content: section6_content ? section6_content : null,
    backgroundColor: section6_background_color ? section6_background_color : null,
    list: blog_signals ? blog_signals : [],
  };

  const section7Data = {
    content: section7_content ? section7_content : null,
    table: section7_table ? section7_table : null,
    headColor: "#E6F1FFAB",
    headTextColor: "#00335B",
    opacity: "67%",
  };

  const section8Data = {
    content: section8_content ? section8_content : null,
    table: section8_table ? section8_table : null,
    headColor: "#6714481A",
    headTextColor: "#671448",
    opacity: "10%",
  };

  const section9Data = {
    content: section9_content ? section9_content : null,
    treatments: blog_treatment_components ? blog_treatment_components : null,
    steps: blog_treatment_steps ? blog_treatment_steps : [],
  };

  const section10Data = {
    videoThumbnail: section10_video_thumbnail_image_value ? section10_video_thumbnail_image_value : null,
    video: section10_video_value ? section10_video_value : null,
  };

  const section11Data = {
    content: section11_content ? section11_content : null,
    backgroundColor: section11_background_color ? section11_background_color : null,
  };

  const section12Data = {
    content: section12_content ? section12_content : null,
    table: section12_table ? section12_table : null,
    image: section12_image_value ? section12_image_value : null,
    imageAlt: section12_image_alt_text_value ? section12_image_alt_text_value : null,
  };

  const section13Data = {
    content: section13_content ? section13_content : null,
    faqs: blog_faqs ? blog_faqs : [],
  };

  const section14Data = {
    content: section14_content ? section14_content : null,
    buttonText: section14_button_text ? section14_button_text : null,
    buttonUrl: section14_button_url ? section14_button_url : null,
    image: section14_image_value ? section14_image_value : null,
    imageAlt: section14_image_alt_text_value ? section14_image_alt_text_value : null,
  };

  const section15Data = {
    content: section15_content ? section15_content : null,
    highlights: highlights ? highlights : [],
  };

  const service_id = null;

  return (
    <>
      <InnerBanner
        variant="service_Inner_detail"
        mobile_img={bannerData?.banner_mobile_value}
        img={bannerData?.banner_value}
        alt={bannerData?.banner_alt_text_value}
        subTitle={bannerData?.banner_pre_title}
        Title={bannerData?.banner_title}
        description={bannerData?.banner_description}
      />
      <ManagingADHD data={section1Data} />
      {section2Data.video && <VideoSection data={section2Data} />}
      <BookConsultationSection data={section3Data} service_id={service_id} />
      <CareSection data={section4Data} />
      <UnderstandingADHD data={section5Data} />
      <RecognizingSection data={section6Data} />
      <TableSection data={section7Data} />
      <TableSection data={section8Data} />
      <IntegatedSection data={section9Data} />
      {section10Data.video && <VideoSection data={section10Data} />}
      {consultants?.length > 0 && <ConsultantSectionServiceInner consultants={consultants} data={section11Data} />}
      <PricingSection data={section12Data} />
      {section13Data?.faqs?.length > 0 && <ServiceFaqSection data={section13Data} />}
      <AppointmentInner data={section14Data} service_id={service_id} />
      {section15Data?.highlights?.length > 0 && <HospitalSection data={section15Data} />}
    </>
  );
}
