import InnerBanner from "@/components/common/InnerBanner";
import NewsSection from "@/components/features/insights/NewsSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Page() {
  const { data } = await fetchFromAPI("blogs");

  console.log(data);

  const { accreditation_cms, accreditation, interviews, banner_and_meta_tags: bannerData, blog_categories: insightTypes, blog_cms } = data;

  const awards = {
    data: accreditation_cms,
    awards: accreditation,
  };

  return (
    <>
      <InnerBanner
        img={bannerData?.banner_value || "/images/newsbanner.jpg"}
        alt={bannerData?.banner_alt_text_value || "NEWS"}
        subTitle={bannerData?.banner_pre_title || "News & Insights"}
        Title={bannerData?.banner_title || "News & Insights"}
        description={bannerData?.banner_description || "Be part of a hospital dedicated to excellence, compassion, and innovation."}
      />
      <NewsSection awards={awards} interviews={interviews} insightTypes={insightTypes} blog_cms={blog_cms} />
    </>
  );
}
