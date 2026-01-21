import { fetchFromAPI, getMetaData } from "@/lib/api";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import AboutSection from "@/components/features/home/AboutSection";
import BannerSection from "@/components/features/home/BannerSection";
import SpecialistSection from "@/components/features/home/SpecialistSection";
import WhySection from "@/components/features/home/WhySection";
import ConsultantSection from "@/components/features/home/ConsultantSection";
import InsightSection from "@/components/features/home/InsightSection";
const TestimonialSection = dynamic(() => import("@/components/features/home/TestimonialSection"), { loading: () => <div className="h-[400px]" /> });
const AppointmentSection = dynamic(() => import("@/components/features/home/AppointmentSection"), { loading: () => <div className="h-[300px]" /> });

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData("home");
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}

async function getBannerData() {
  const { data } = await fetchFromAPI("home");
  return data.sliders;
}

async function getHomeContent() {
  const { data } = await fetchFromAPI("home");
  return data;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="h-[500px] bg-gray-100 animate-pulse" />}>
        <BannerWrapper />
      </Suspense>

      <Suspense fallback={<div className="h-[300px] bg-gray-50" />}>
        <ContentWrapper />
      </Suspense>
    </>
  );

  async function BannerWrapper() {
    const sliders = await getBannerData();
    return <BannerSection sliders={sliders} />;
  }

  async function ContentWrapper() {
    const { home_cms, announcements, services, testimonials, consultants, blogs } = await getHomeContent();
    const textTestimonials = testimonials?.filter((item) => item?.type === "text");
    const videoTestimonials = testimonials?.filter((item) => item?.type === "video");

    return (
      <>
        <AboutSection home_cms={home_cms} announcements={announcements} />
        <WhySection home_cms={home_cms} features={home_cms?.section2_features} />
        <SpecialistSection
          title={home_cms?.section3_title}
          pre_title={home_cms?.section3_pre_title}
          description={home_cms?.section3_description}
          services={services}
        />
        <ConsultantSection consultants={consultants} title={home_cms?.section4_title} pre_title={home_cms?.section4_pre_title} />
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
          isHome={true}
        />
        {/* {blogs?.length > 0 && <InsightSection blogs={blogs} />} */}
      </>
    );
  }
}
