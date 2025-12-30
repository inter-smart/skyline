import InnerBanner from "@/components/common/InnerBanner";
import BookConsultationSection from "@/components/features/service/BookConsultationSection";
import CareSection from "@/components/features/service/CareSection";
import ManagingADHD from "@/components/features/service/ManagingADHD";
import UnderstandingADHD from "@/components/features/service/UnderstandingADHD";
import VideoSection from "@/components/features/service/VideoSection";

const local_data = {
  managing_ahd_section_data: {
    section_background_color: "#ffffff",
    media: {
      path: "/images/managing_ahd.jpg",
      alt: "Main Image",
    },
    text_editor: `
    <h1>Understanding and <br> Managing ADHD</h1>
    <h6>Stop Struggling with Focus</h6>
    <p>Is disorganization or restlessness holding you or your child back?</p>
    <h6>That feeling of constant confusion and struggle ends here.</h6>
    <p>At Skyline Hospitals, our expert team provides compassionate validation, clinical clarity, and a trusted partnership to build a focused, confident future for you or your child.</p>
    `,
    badge_text: {
      text_normal: "YOU'RE NOT ALONE. YOU",
      text_bold: "DESERVE CLARITY.",
      gradient_color: {
        from: "#D1EBFF",
        to: "#ffffff",
      },
    },
  },
  service_video_section: {
    media: {
      type: "video",
      path: "/videos/service-detail.mp4",
    },
  },
  booking_consultation_section: {
    section_background_color: "#671448",
    media: {
      path: "/images/book_consultation.jpg",
      alt: "Main Image",
    },
    text_editor: `
    <p>TAKE THE FIRST STEP</p>
    <h4>Book Your Initial <br> Complimentary Consultation</h4>
    <p>We’ll Help You Determine the Right Path, Gently.</p>
    `,
    button_list: [
      {
        link: "#",
        target: false,
        label: "BOOK AN APPOINTMENT",
      },
      {
        link: "#",
        target: false,
        label: "MAKE AN ENQUIRY",
      },
    ],
  },
  care_section_data: {
    section_background_color: "#ffffff",
    text_editor: `
    <h1>Your Choice of Care: Across the UK</h1>
    <p>We offer two convenient ways to access our expert ADHD services, ensuring you get the care you need, wherever you are:</p>
    `,
    care_list: [
      {
        id: 1,
        background_color: "#EEF5FF",
        text_editor: `
        <h5>Comprehensive<br>
        Online Consultations</h5>
        <p>Available Nationwide: Accessible from anywhere in the UK, perfect for initial screenings, follow-ups, and ongoing prescribing management.</p>
        `,
      },
      {
        id: 2,
        background_color: "#EEF5FF",
        text_editor: `
        <h5>In-Person <br>
          Consultations</h5>
        <p>For those who prefer face-to-face appointments with our Senior Consultant Psychiatrists</p>
        `,
      },
      {
        id: 3,
        background_color: "#EEF5FF",
        text_editor: `
        <h5>In-Person <br>
          Consultations</h5>
        <p>For those who prefer face-to-face appointments with our Senior Consultant Psychiatrists</p>
        `,
      },
    ],
  },
  understanding_ahd_section_data: {
    text_editor: `
    <h1>Understanding ADHD</h1>
    <h6>Finally Understanding ADHD: The "Why" Behind the Struggle</h6>
    <p>You've probably felt like you're trying harder than everyone else but still falling short. That feeling of frustration, of being driven by a motor you can't control, or constantly losing things—that's not a personal failure; it's ADHD.</p>
    <p>Attention Deficit Hyperactivity Disorder (ADHD) is a real difference in brain function. It affects how you manage attention, control impulses, and regulate activity. It can start early and follow you into adulthood, making everyday life feel unnecessarily hard.</p>
    `,
  }
};

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
      <ManagingADHD data={local_data?.managing_ahd_section_data} />
      <VideoSection data={local_data?.service_video_section} />
      <BookConsultationSection
        data={local_data?.booking_consultation_section}
      />
      <CareSection data={local_data?.care_section_data} />
      <UnderstandingADHD data={local_data?.understanding_ahd_section_data} />
    </>
  );
}
