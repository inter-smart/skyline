import NewsDetailSection from "@/components/features/insights/detail/NewsDetailSection";
import { fetchFromAPI } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { data: Insights, error } = await fetchFromAPI(`blog-details?slug=${params.slug}`);

  if (!Insights || error) {
    notFound();
  }

  return (
    <>
      <NewsDetailSection Insights={Insights} />
    </>
  );
}
