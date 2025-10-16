import InnerBanner from "@/components/common/InnerBanner";
import CareerSection from "@/components/features/career/CareerSection";


export default function Page() {
    return (
        <>
            <InnerBanner
                img="/images/careerBanner.jpg"
                alt="Career page banner"
                subTitle="CAREER"
                Title="Join Our Team at Skyline Hospitals Coventry"
                description="Be part of a hospital dedicated to excellence, compassion, and innovation." />

            <CareerSection />
        </>
    )
}
