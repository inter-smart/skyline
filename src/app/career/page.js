import InnerBanner from "@/components/common/InnerBanner";
import CareerSection from "@/components/features/career/CareerSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Page() {
  const { data, error } = await fetchFromAPI("careers");

  const { banner_and_meta_tags, careers, departments, job_roles } = data;

  console.log(data);
  return (
    <>
      <InnerBanner
        img={banner_and_meta_tags?.banner_value}
        alt={banner_and_meta_tags?.banner_alt_text_value}
        subTitle={banner_and_meta_tags?.banner_pre_title}
        Title={banner_and_meta_tags?.banner_title}
        description={banner_and_meta_tags?.banner_description}
      />

      <CareerSection
        careers={careers}
        department={departments}
        job_roles={job_roles}
      />
    </>
  );
}
