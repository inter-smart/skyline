import ContactBanner from "@/components/features/contact/Banner";
import ContactDetails from "@/components/features/contact/ContactDetails";
import ContactFormSection from "@/components/features/contact/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <ContactBanner
        img={"/images/bannerBg.jpg"}
        alt={"Contact Us Banner"}
        pre_title={"Get in Touch"}
        title={"Contact Us"}
        description={"We would love to hear from you. Please reach out with any questions or comments."}
      />
      <ContactDetails />
      <ContactFormSection />
    </>
  );
}
