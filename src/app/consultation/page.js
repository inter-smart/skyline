import InnerBanner from "@/components/common/InnerBanner";
import OurconsultantSection from "@/components/features/consultation/OurconsultantSection";


export default function Page() {
    return (
        <>
            <InnerBanner
                img="/images/consultationBanner.jpg"
                alt="CONSULTATION"
                subTitle="CONSULTATION"
                Title="Meet Our Consultants"
                description="Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades."
                 showFormBox={true}  />

            <OurconsultantSection />
        </>
    )
}
