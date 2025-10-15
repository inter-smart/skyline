import InnerBanner from "@/components/common/InnerBanner";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import FeaturedserviceSection from "@/components/features/service/FeaturedserviceSection";
import OurserviceSection from "@/components/features/service/OurserviceSection";

export default function Page() {
    return (
        <>
            <InnerBanner
                img="/images/servicebanner.jpg"
                alt="Departments & Services"
                subTitle="Departments & Services"
                Title="Explore our specialist healthcare services"
                description="Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades."
            />
            <OurserviceSection />
            <FeaturedserviceSection />
            <AppointmentSection  bannerImage="/images/serviceAppoinment.jpg"/>
        </>
    )
}
