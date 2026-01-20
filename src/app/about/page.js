import InnerBanner from "@/components/common/InnerBanner";
import AwardSection from "@/components/features/about/AwardSection";
import CareerSection from "@/components/features/about/CareerSection";
import ConsultantSection from "@/components/features/about/ConsultantSection";
import ContactusSection from "@/components/features/about/ContactusSection";
import OurStory from "@/components/features/about/OurStory";
import OurvalueSection from "@/components/features/about/OurvalueSection";
import OverviewSection from "@/components/features/about/OverviewSection";
import { fetchFromAPI, getMetaData } from "@/lib/api";

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData("about-us");
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}

export default async function Page() {
  const { data, error } = await fetchFromAPI("about-us");

  const { about_cms, values, team_members, accreditation, banner_and_meta_tags } = data;

  return (
    <>
      <InnerBanner
        img={banner_and_meta_tags?.banner_value}
        mobile_img={banner_and_meta_tags?.mobile_banner_value}
        alt={banner_and_meta_tags?.banner_alt_text_value}
        subTitle={banner_and_meta_tags?.banner_pre_title}
        Title={banner_and_meta_tags?.banner_title}
        description={banner_and_meta_tags?.banner_description}
      />

      {/* section 1 */}
      <OurStory
        preTitle={about_cms?.section1_pre_title}
        title={about_cms?.section1_title}
        description={about_cms?.section1_description}
        img={about_cms?.section1_image_value}
        alt={about_cms?.section1_image_alt_text_value}
      />

      {/* section 2 */}
      <OverviewSection about_cms={about_cms} />

      {/* section 3 */}
      {/* <OurvalueSection values={values} about_cms={about_cms} /> */}

      {/* section 4 */}
      {/* <ConsultantSection
        team_members={team_members}
        title={about_cms?.section6_title}
        preTitle={about_cms?.section6_pre_title}
        image={about_cms?.section6_image_value}
      /> */}

      <AwardSection about_cms={about_cms} accreditation={accreditation} />
      <CareerSection about_cms={about_cms} />
      <ContactusSection about_cms={about_cms} />
    </>
  );
}
