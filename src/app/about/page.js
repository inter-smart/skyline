import InnerBanner from "@/components/common/InnerBanner";
import OurStory from "@/components/features/about/OurStory";
import OverviewSection from "@/components/features/about/OverviewSection";



export default function Page() {
    return (
        <>
            <InnerBanner
                img="/images/aboutBanner.jpg"
                alt=""
                subTitle="ABOUT US"
                Title="About Skyline Hospitals"
                description="Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades." />

            <OurStory />
            <OverviewSection /> 
        </>
    )
}
