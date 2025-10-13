import InnerBanner from "@/components/common/InnerBanner";
import AwardSection from "@/components/features/about/AwardSection";
import CareerSection from "@/components/features/about/CareerSection";
import ConsultantSection from "@/components/features/about/ConsultantSection";
import ContactusSection from "@/components/features/about/ContactusSection";
import OurStory from "@/components/features/about/OurStory";
import OurvalueSection from "@/components/features/about/OurvalueSection";
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
            <OurvalueSection />
            <ConsultantSection />
            <AwardSection />
            <CareerSection />
            <ContactusSection />
        </>
    )
}
