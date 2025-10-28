import InnerBanner from "@/components/common/InnerBanner";
import PrivacyPolicySection from "@/components/features/privacy/Policies";

export default function CqcComplianceReports() {
  return (
    <>
      <InnerBanner
        img="/images/newsbanner.jpg"
        alt="NEWS"
        subTitle="cQC Compliance & Reports"
        Title="CQC Compliance & Reports"
        description="Be part of a hospital dedicated to excellence, compassion, and innovation."
      />
      <PrivacyPolicySection />
    </>
  );
}
