import AboutSection from "@/components/features/home/AboutSection";
import BannerSection from "@/components/features/home/BannerSection";
import SpecialistSection from "@/components/features/home/SpecialistSection";
import WhySection from "@/components/features/home/WhySection";

 

export default function Home() {
  return (
    <>
      <BannerSection /> 
      <AboutSection />
      <WhySection />
      <SpecialistSection />
    </>
  );
}
