import InnerHero from "@/components/common/InnerHero";
import FeaturedSection from "@/components/features/service/FeaturedSection";
import MethodUsedSection from "@/components/features/service/MethodUsedSection";
import OurTreatmentsection from "@/components/features/service/OurTreatmentsection";
import WhyChooseUsSection from "@/components/features/service/WhyChooseUsSection";
import MultidisciplinarySection from "@/components/features/service/MultidisciplinarySection";
import PatientJourneySection from "@/components/features/service/PatientJourneySection";
import PricingInsuranceSection from "@/components/features/service/PricingInsuranceSection";
import FaqSection from "@/components/common/FaqSection";
import RelatedSection from "@/components/features/service/RelatedSection";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import ConditionSection from "@/components/features/service/ConditionSection";
import { fetchFromAPI } from "@/lib/api";


// Map template keys to components
const TEMPLATE_COMPONENTS = {
  "template-1": (section) => (
    <FeaturedSection
      path={section?.service_section_cms?.image_value}
      alt={section?.service_section_cms?.image_alt_text_value}
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      button_text={section?.service_section_cms?.button_text}
      button_link={section?.service_section_cms?.button_link}
    />
  ),

  "template-2": (section) => (
    <WhyChooseUsSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      why_choose_list={section?.service_section_items}
    />
  ),

  "template-3": (section) => (
    <ConditionSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      conditionData={section?.service_section_items}
    />
  ),

  "template-4": (section) => (
    <OurTreatmentsection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      treatments={section?.service_section_items}
    />
  ),

  "template-5": (section) => (
    <MethodUsedSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      why_choose_list={section?.service_section_items}
    />
  ),

  "template-6": (section) => (
    <MultidisciplinarySection
      path={section?.service_section_cms?.image_value}
      alt={section?.service_section_cms?.image_alt_text_value}
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      procedure_list={section?.service_section_items}
    />
  ),

  "template-7": (section) => (
    <PatientJourneySection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      Disciplinary_list={section?.service_section_items}
    />
  ),

  "template-9": (section) => (
    <PricingInsuranceSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      plan_benefit_list={section?.service_section_items}
    />
  ),

  "template-10": (section) => (
    <FaqSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      faqData={section?.service_section_items}
    />
  ),

  "template-11": (section, related_services_list) => (
    <RelatedSection
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      services={related_services_list}
    />
  ),

  "template-12": (section) => (
    <AppointmentSection
      bannerImage="/images/serviceDetailBg.jpg"
      sub_title={section?.title}
      title={section?.service_section_cms?.title}
      description={section?.service_section_cms?.description}
      path={section?.service_section_cms?.image_value}
      alt={section?.service_section_cms?.image_alt_text_value || "Appointment"}
      button_link={section?.service_section_cms?.button_link}
      button_text={section?.service_section_cms?.button_text}
    />
  ),
};




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
    related_services_list,
  } = data;

  // Helper to find a section by template key
  return (
    <>
      {/* ✅ Hero Section */}
      {banner_value && (
        <InnerHero
          type="image"
          path={banner_value}
          path_mob={banner_mobile_value}
          sub_title={banner_pre_title}
          title={banner_title}
          description={banner_description}
        />
      )}


      {/* ✅ Dynamically Render All Templates */}
      {service_sections?.map((section) => {
        const key = section?.service_section_template?.key;
        const RenderComponent = TEMPLATE_COMPONENTS[key];
        if (!RenderComponent) return null; // skip unknown template
        return (
          <div key={section?.id}>
            {RenderComponent(section, related_services_list)}
          </div>
        );
      })}
    </>
  );
}
