import InnerBanner from "@/components/common/InnerBanner";
import NewsSection from "@/components/features/News/NewsSection";

export default function page() {
    return (
        <>
            <InnerBanner
                img="/images/newsbanner.jpg"
                alt="NEWS"
                subTitle="NEWS"
                Title="News & Insights"
                description="Be part of a hospital dedicated to excellence, compassion, and innovation."
                 />

                <NewsSection />
        </>
    )
}
