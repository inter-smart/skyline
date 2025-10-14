import InnerHero from "@/components/common/InnerHero";
import FeaturedSection from "@/components/features/service/FeaturedSection";
import MethodUsedSection from "@/components/features/service/MethodUsedSection";
import OurTreatmentsection from "@/components/features/service/OurTreatmentsection";
import WhyChooseUsSection from "@/components/features/service/WhyChooseUsSection";
export default function Service({ data }) {
    return (

        <>
            <InnerHero
                type="image"
                path="/images/service-banner.jpg"
                path_mob="/images/service-mob-banner.jpg"
                sub_title="Services"
                title="Oncology"
                description=" Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades."
            />
            <FeaturedSection
                path="/images/featureimg.jpg"
                alt="feature-image"
                sub_title="FEATURED"
                title="Private Oncology Specialists in Coventry"
                description=" Skyline Hospitals Coventry offers rapid access to leading orthopaedic consultants for joint pain, fractures, arthritis, and sports injuries. Our private orthopaedic services cover everything from diagnosis to advanced surgery — all in one modern, patient-centred hospital setting."
            />
            <WhyChooseUsSection
                sub_title="WHY SKYLINE"
                title="Why Choose Us?"
                description="  Explore our wide range of specialized medical services designed to provide treatments, we are here to support your health journey."
            />
            <OurTreatmentsection
                sub_title="our treatments"
                title="Subspecialties & Treatments"
            />
            <MethodUsedSection
                sub_title="METHODS USED"
                title="Investigations & Diagnostics"
            />
        </>
    );
}
