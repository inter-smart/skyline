import InnerBanner from "@/components/common/InnerBanner";
import OurconsultantSection from "@/components/features/consultation/OurconsultantSection";


export default function Page() {
    return (
        <>
            <InnerBanner
                img="/images/consultationBanner.jpg"
                alt="CONSULTATION"
                subTitle="CONSULTATION"
                Title="<p>Meet Our Consultants</p>"
                description="<p>Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades.</p>"
                 showFormBox={true}  />

            <OurconsultantSection />
        </>
    )
}
