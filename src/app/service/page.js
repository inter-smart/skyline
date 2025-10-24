import InnerBanner from "@/components/common/InnerBanner";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import FeaturedserviceSection from "@/components/features/service/FeaturedserviceSection";
import OurserviceSection from "@/components/features/service/OurserviceSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Page() {
  const { data, error } = await fetchFromAPI("services");


 const { service_cms, services, featured_services, banner_and_meta_tags } = data;

  console.log(data);
  
  return (
    <>
      <InnerBanner
        img={banner_and_meta_tags?.banner_value}
        alt={banner_and_meta_tags?.banner_alt_text_value}
        subTitle={banner_and_meta_tags?.banner_pre_title}
        Title={banner_and_meta_tags?.banner_title}
        description={banner_and_meta_tags?.banner_description }
      />
      <OurserviceSection service_cms={service_cms} services={services} />
      <FeaturedserviceSection service_cms={service_cms} services={featured_services} />
      <AppointmentSection service_cms={service_cms} bannerImage={service_cms?.section3_image_value} />
    </>
  );
}