import ConsultantClient from "@/components/features/consultation/ConsultantClient";
import { fetchFromAPI, getMetaData } from "@/lib/api";

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData("consultation");
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
  const { data, error } = await fetchFromAPI("consultants");

  if (error) {
    return <div>Something Went Wrong</div>;
  }

  const { banner_and_meta_tags, consultants } = data;

  return <ConsultantClient banner_and_meta_tags={banner_and_meta_tags} consultants={consultants} />;
}
