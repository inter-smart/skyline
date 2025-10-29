import InnerBanner from "@/components/common/InnerBanner";
import NewsSection from "@/components/features/News/NewsSection";

export default async function Page() {
  const awardsData = await fetch("http://localhost:3000/api/insights/awards").then((res) => res.json());
  const interviewsData = await fetch("http://localhost:3000/api/insights/interviews").then((res) => res.json());

  const awards = awardsData.awards;
  const interviews = interviewsData;

  console.log("Awards Data:", awards);
  console.log("Interviews Data:", interviews);

  return (
    <>
      <InnerBanner
        img="/images/newsbanner.jpg"
        alt="NEWS"
        subTitle="NEWS"
        Title="News & Insights"
        description="Be part of a hospital dedicated to excellence, compassion, and innovation."
      />
      <NewsSection awards={awards} interviews={interviews} />
    </>
  );
}
