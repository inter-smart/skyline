import InnerHero from "@/components/common/InnerHero";
import FeaturedSection from "@/components/features/service/FeaturedSection";
import MethodUsedSection from "@/components/features/service/MethodUsedSection";
import OurTreatmentsection from "@/components/features/service/OurTreatmentsection";
import WhyChooseUsSection from "@/components/features/service/WhyChooseUsSection";
import MultidisciplinarySection from "@/components/features/service/MultidisciplinarySection";
import PatientJourneySection from "@/components/features/service/PatientJourneySection";
import PricingInsuranceSection from "@/components/features/service/PricingInsuranceSection";
import FaqSection from "@/components/features/service/FaqSection";
import RelatedSection from "@/components/features/service/RelatedSection";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import ConsultantSection from "@/components/features/home/ConsultantSection";
import ConditionSection from "@/components/features/service/ConditionSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Service({ params }) {
  const { data, error } = await fetchFromAPI(
    `service-details?slug=${params.slug}`
  );

  if (error || !data) {
    return (
      <div className="text-center py-20">
        Failed to load service details. Please try again later.
      </div>
    );
  }

  const {
    banner_value,
    banner_mobile_value,
    banner_alt_text_value,
    banner_pre_title,
    banner_title,
    banner_description,
    service_sections,
    consultants,
    related_services_list,
  } = data;

  // Helper to find a section by template key
  const getSectionByKey = (key) =>
    service_sections?.find((s) => s.service_section_template?.key === key);

  return (
    <>
      {/* Hero Section */}
      <InnerHero
        type="image"
        path={banner_value}
        path_mob={banner_mobile_value}
        sub_title={banner_pre_title}
        title={banner_title}
        description={banner_description}
      />

      {/* Featured Section - Template 1 */}
      <FeaturedSection
        path={getSectionByKey("template-1")?.service_section_cms?.image_value}
        alt={
          getSectionByKey("template-1")?.service_section_cms
            ?.image_alt_text_value
        }
        sub_title={getSectionByKey("template-1")?.title}
        title={getSectionByKey("template-1")?.service_section_cms?.title}
        description={
          getSectionByKey("template-1")?.service_section_cms?.description
        }
        button_text={
          getSectionByKey("template-1")?.service_section_cms?.button_text
        }
        button_link={
          getSectionByKey("template-1")?.service_section_cms?.button_link
        }
      />

      {/* WhyChooseUsSection - Template 2 */}
      <WhyChooseUsSection
        sub_title={getSectionByKey("template-2")?.title}
        title={getSectionByKey("template-2")?.service_section_cms?.title}
        description={
          getSectionByKey("template-2")?.service_section_cms?.description
        }
        why_choose_list={getSectionByKey("template-2")?.service_section_items}
      />

      {/* ConditionSection - Template 3 */}
      <ConditionSection
        sub_title={getSectionByKey("template-3")?.title}
        title={getSectionByKey("template-3")?.service_section_cms?.title}
        description={
          getSectionByKey("template-3")?.service_section_cms?.description
        }
        conditionData={getSectionByKey("template-3")?.service_section_items}
      />

      {/* OurTreatmentsection - Template 4 */}
      <OurTreatmentsection
        sub_title={getSectionByKey("template-4")?.title}
        title={getSectionByKey("template-4")?.service_section_cms?.title}
        treatments={getSectionByKey("template-4")?.service_section_items}
      />

      {/* MethodUsedSection - Template 5 */}
      <MethodUsedSection
        sub_title={getSectionByKey("template-5")?.title}
        title={getSectionByKey("template-5")?.service_section_cms?.title}
        description={
          getSectionByKey("template-5")?.service_section_cms?.description
        }
        why_choose_list={getSectionByKey("template-5")?.service_section_items}
      />

      {/* Multidisciplinary Section - Template 6 */}
      <MultidisciplinarySection
        path={getSectionByKey("template-6")?.service_section_cms?.image_value}
        alt={
          getSectionByKey("template-6")?.service_section_cms
            ?.image_alt_text_value
        }
        sub_title={getSectionByKey("template-6")?.title}
        title={getSectionByKey("template-6")?.service_section_cms?.title}
        description={
          getSectionByKey("template-6")?.service_section_cms?.description
        }
        procedure_list={getSectionByKey("template-6")?.service_section_items}
      />

      {/* PatientJourney Section - Template 7 */}
      <PatientJourneySection
        sub_title={getSectionByKey("template-7")?.title}
        title={getSectionByKey("template-7")?.service_section_cms?.title}
        description={
          getSectionByKey("template-7")?.service_section_cms?.description
        }
        Disciplinary_list={getSectionByKey("template-7")?.service_section_items}
      />

      {/* ConsultantSection - Template 8 */}
      {/* <ConsultantSection variant="servicedetail" /> */}

      {/* PricingInsuranceSection - Template 9*/}
      <PricingInsuranceSection
        sub_title={getSectionByKey("template-9")?.title}
        title={getSectionByKey("template-9")?.service_section_cms?.title}
        description={
          getSectionByKey("template-9")?.service_section_cms?.description
        }
      />

      {/* FaqSection - Template 10*/}
      <FaqSection
        sub_title={getSectionByKey("template-10")?.title}
        title={getSectionByKey("template-10")?.service_section_cms?.title}
        description={
          getSectionByKey("template-10")?.service_section_cms?.description
        }
        faqData={getSectionByKey("template-10")?.service_section_items}
      />

      {/* RelatedSection - Template 11*/}
      <RelatedSection
        sub_title={getSectionByKey("template-11")?.title}
        title={getSectionByKey("template-11")?.service_section_cms?.title}
        description={
          getSectionByKey("template-11")?.service_section_cms?.description
        }
        services={related_services_list}
      />

      {/* Appointment Section - Template 12 */}
      <AppointmentSection
        bannerImage="/images/serviceDetailBg.jpg"
        sub_title={getSectionByKey("template-12")?.title}
        title={getSectionByKey("template-12")?.service_section_cms?.title}
        description={
          getSectionByKey("template-12")?.service_section_cms?.description
        }
        path={getSectionByKey("template-12")?.service_section_cms?.image_value}
        alt={
          getSectionByKey("template-12")?.service_section_cms
            ?.image_alt_text_value || "test"
        }
        button_link={
          getSectionByKey("template-12")?.service_section_cms?.button_link
        }
        button_text={
          getSectionByKey("template-12")?.service_section_cms?.button_text
        }
      />
    </>
  );
}
