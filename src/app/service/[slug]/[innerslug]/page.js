import InnerBanner from "@/components/common/InnerBanner";
import ManagingADHD from "@/components/features/service/ManagingADHD";

export default function page() {
  return (
    <>
      <InnerBanner
        variant="service_Inner_detail"
        mobile_img="/images/service-inner-detail.jpg"
        img="/images/service-inner-detail.jpg"
        alt="service Inner Detail"
        subTitle="Services"
        Title="ADHD and Autism Diagnosis and Treatment in London and the Midlands"
        description="Dedicated to providing exceptional healthcare with compassion, innovation, and excellence for over two decades."
      />
      <ManagingADHD />
    </>
  );
}
