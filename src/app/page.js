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
      <ConsultantSection />
      <TestimonialSection />
      <AppointmentSection bannerImage="/images/appointmentBg.jpg" />
      <InsightSection />
    </>
  );
}
