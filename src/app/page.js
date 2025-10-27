import AboutSection from "@/components/features/home/AboutSection";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import BannerSection from "@/components/features/home/BannerSection";
import ConsultantSection from "@/components/features/home/ConsultantSection";
import InsightSection from "@/components/features/home/InsightSection";
import SpecialistSection from "@/components/features/home/SpecialistSection";
import TestimonialSection from "@/components/features/home/TestimonialSection";
import WhySection from "@/components/features/home/WhySection";
import { fetchFromAPI } from "@/lib/api";

export default async function Home() {
  const { data, error } = await fetchFromAPI("home");

  const { sliders, home_cms, announcements, banner_and_meta_tags, services, consultants, testimonials, blogs } = data;

  const textTestimonials = testimonials?.filter((item) => item?.type == "text");
  const videoTestimonials = testimonials?.filter((item) => item?.type == "video");

  return (
    <>
      <BannerSection sliders={sliders} />
      <AboutSection home_cms={home_cms} announcements={announcements} />
      <WhySection home_cms={home_cms} features={home_cms?.section2_features} />
      <SpecialistSection
        title={home_cms?.section3_title}
        pre_title={home_cms?.section3_pre_title}
        description={home_cms?.section3_description}
        services={services}
      />
      {/* <ConsultantSection /> */}
      <TestimonialSection
        textTestimonials={textTestimonials}
        videoTestimonials={videoTestimonials}
        title={home_cms?.section5_title}
        pre_title={home_cms?.section5_pre_title}
      />
      <AppointmentSection
        path={home_cms?.section6_image_value}
        alt={home_cms?.section6_image_alt_text_value}
        title={home_cms?.section6_title}
        sub_title={home_cms?.section6_pre_title}
        description={home_cms?.section6_description}
      />
      {/* <InsightSection /> */}
    </>
  );
}
