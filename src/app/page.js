import AboutSection from "@/components/features/home/AboutSection"; 
import AppointmentSection from "@/components/features/home/AppointmentSection";
import BannerSection from "@/components/features/home/BannerSection";
import ConsultantSection from "@/components/features/home/ConsultantSection";
import InsightSection from "@/components/features/home/InsightSection";
import SpecialistSection from "@/components/features/home/SpecialistSection";
import TestimonialSection from "@/components/features/home/TestimonialSection";
import WhySection from "@/components/features/home/WhySection";

 

export default function Home() {
  return (
    <>
      <BannerSection /> 
      <AboutSection />
      <WhySection />
      <SpecialistSection />
      <ConsultantSection /> 
      <TestimonialSection />
      <AppointmentSection />
      <InsightSection />
    </>
  );
}
