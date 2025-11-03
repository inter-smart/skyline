import ContactBanner from "@/components/features/contact/Banner";
import FaqSection from "@/components/common/FaqSection";
import ContactDetails from "@/components/features/contact/ContactDetails";
import ContactFormSection from "@/components/features/contact/ContactForm";
import EnquirySection from "@/components/features/contact/EnquirySection";
import { fetchFromAPI } from "@/lib/api";

export default async function ContactUsPage() {
  const { data, error } = await fetchFromAPI("contact-us");

  const { contact_cms, contact_infos, contact_items, banner_and_meta_tags } = data;
  return (
    <>
      <ContactBanner
        mobile_img={banner_and_meta_tags?.mobile_banner_value || banner_and_meta_tags?.banner_mobile_value}
        img={banner_and_meta_tags?.banner_value}
        alt={banner_and_meta_tags?.banner_alt_text_value}
        pre_title={banner_and_meta_tags?.banner_pre_title}
        title={banner_and_meta_tags?.banner_title}
        description={banner_and_meta_tags?.banner_description}
      />
      <ContactDetails description={contact_cms?.section1_description} title={contact_cms?.section1_title} contact_infos={contact_infos} />
      <EnquirySection description={contact_cms?.section2_description} title={contact_cms?.section2_title} contact_items={contact_items} />
    </>
  );
}
