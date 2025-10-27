import ContactBanner from "@/components/features/contact/Banner";

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
    </>
  );
}
