import InnerHero from "@/components/common/InnerHero";
import FeaturedSection from "@/components/features/service/FeaturedSection";
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
                sub_title="FEATURED"
            />
        </>
    );
}
