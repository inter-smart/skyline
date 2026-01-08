import InnerBanner from "@/components/common/InnerBanner";
import AppointmentSection from "@/components/features/home/AppointmentSection";
import ConsultantSection from "@/components/features/home/ConsultantSection";
import BookConsultationSection from "@/components/features/service/BookConsultationSection";
import CareSection from "@/components/features/service/CareSection";
import HospitalSection from "@/components/features/service/HospitalSection";
import IntegatedSection from "@/components/features/service/IntegatedSection";
import ManagingADHD from "@/components/features/service/ManagingADHD";
import PricingSection from "@/components/features/service/PricingSection";
import RecognizingSection from "@/components/features/service/RecognizingSection";
import ServiceFaqSection from "@/components/features/service/ServiceFaqSection";
import TableSection from "@/components/features/service/TableSection";
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
    section_background_color: "#ffffff",
    text_editor: `
    <h1>Understanding ADHD</h1>
    <h6>Finally Understanding ADHD: The "Why" Behind the Struggle</h6>
    <p>You've probably felt like you're trying harder than everyone else but still falling short. That feeling of frustration, of being driven by a motor you can't control, or constantly losing things—that's not a personal failure; it's ADHD.</p>
    <p>Attention Deficit Hyperactivity Disorder (ADHD) is a real difference in brain function. It affects how you manage attention, control impulses, and regulate activity. It can start early and follow you into adulthood, making everyday life feel unnecessarily hard.</p>
    `,
    text_editor_box: `
    <h5>Your Path to Confidence: <br>
    A Gentle Start with Skyline Hospitals</h5>
    <p>We know the idea of a formal diagnosis can be overwhelming. That’s why we’ve designed a process that is efficient, supportive, and respects your time and peace of mind.</p>
        `,
    box_color: "#f6f1f4",
    media: {
      path: "/images/understanding_adhd.jpg",
      alt: "Understanding ADHD",
    },
  },
  recognizing_section_data: {
    section_background_color: "#F6F6F6",
    text_editor: `
    <h1>Recognizing the Signals: <br>
    Is This Me or My Child?</h1>
        <p>It can be difficult to pinpoint symptoms, but finding the right words can lead to immense relief. Our assessments are based on well-established criteria, looking for consistent struggles in two key areas:
    </p>
    `,
    recongnize_list: [
      {
        id: 1,
        title: "Difficulty Focusing and Staying Organized (Inattention)",
      },
      {
        id: 2,
        title:
          "Feeling like your mind constantly wanders, leading to careless mistakes even when you try hard.",
      },
      {
        id: 3,
        title:
          "Having a hard time sticking with tasks that demand sustained mental effort, like filling out forms or studying.",
      },
      {
        id: 4,
        title:
          "The constant feeling of losing important things (keys, phone, paperwork)—it’s frustrating, not deliberate.",
      },
      {
        id: 5,
        title:
          "Often feeling like you're not listening, even when spoken to directly.",
      },
      {
        id: 6,
        title:
          "Restlessness and Impulse Control (Hyperactivity & Impulsivity) : The need to constantly move, fidget, or feeling an overwhelming internal restlessness (even as an adult).",
      },
      {
        id: 7,
        title:
          "Frequently interrupting others, or blurting out answers—it's not rudeness, it's impulsivity.",
      },
      {
        id: 8,
        title:
          "Difficulty waiting your turn or feeling like you are constantly on the go with no internal brakes.",
      },
    ],
  },
  table_section_data: {
    table_list: [
      {
        id: 1,
        heading_text_editor: `<h1>The Skyline Promise: <br> Clarity Without the Pressure</h1>`,
        table: {
          table_header_bg_color: "#eef6ff",
          table_header_text_color: "#00335B",
          table_body_bg_color: "#ffff",
          table_columns: [
            "<h5>Step</h5>",
            "<h5>What This Means for You</h5>",
            "<h5>The Personal Touch</h5>",
          ],
          table_row_list: [
            [
              "<P><b>1. Initial Screening Assessment</b></P>",
              "<P>A quick, low-stress conversation with a specialist to review your experiences.</P>",
              "<P>Peace of Mind: You won't pay for a full consultation unless we mutually agree it's the right fit. We're here to save you time and anxiety.</P>",
            ],
            [
              "<P><b>2. Full Consultation & Diagnosis</b></P>",
              "<P>If the screening suggests it, we move to a thorough, compassionate assessment following proven guidelines (DSM).</P>",
              "<P>Validation: Receiving a definitive diagnosis can be life-changing. We provide the trusted documentation you need.</P>",
            ],
            [
              "<P><b>3. A Tailored Plan, Together</b></P>",
              "<P>Creating a treatment strategy that works for your life—combining medication (if needed) and personalized coaching.</P>",
              "<P>Partnership: This is your plan. We listen to your goals and tailor every element to help you thrive, not just cope.</P>",
            ],
            [
              "<P><b>4. Ongoing Encouragement</b></P>",
              "<P>Regular check-ins and continued therapy to support your progress.</P>",
              "<P>Consistent Care: We're committed to supporting you long after the diagnosis, ensuring you feel empowered every step of the way.</P>",
            ],
          ],
        },
      },
      {
        id: 2,
        heading_text_editor: `<h1>Why Trust Your Care to a Hospital? The Skyline Hospitals Advantage</h1>
        <p>Unlike many online-only providers who offer virtual assessments (there are hundreds of them in the market!), Skyline Hospitals is a proper, established healthcare facility.</p>
        <p><b>This difference is crucial for safety, comprehensive care, and peace of mind.</b></p>
        `,
        table: {
          table_header_bg_color: "#f0e7ed",
          table_header_text_color: "#671448",
          table_body_bg_color: "#ffff",
          table_columns: [
            "<h5>Feature</h5>",
            "<h5>Skyline Hospitals (Hospital-Based)</h5>",
            "<h5>Online-Only Provider</h5>",
          ],
          table_row_list: [
            [
              "<P><b>Physical Location</b></P>",
              "<P><b>Real Hospital Building:</b>State-of-the-art facility you can visit for appointments, tests, and support.</P>",
              "<P><b>Real Hospital Building:</b>State-of-the-art facility you can visit for appointments, tests, and support.</P> <P><b>Virtual Office:</b> Often run from private homes or shared offices with no physical patient facility.</P>",
            ],
            [
              "<P><b>Safety & Monitoring</b></P>",
              "<P><b>Integrated Medical Care:</b>Immediate access to Cardiology, Diagnostics, and Neurology teams for pre-med checks and continuous physical health monitoring (essential for stimulant medications).</P>",
              "<P><b>Limited Scope:</b>Relies on you to arrange separate appointments with your GP for vital checks (ECG, blood pressure).</P>",
            ],
            [
              "<P><b>Comprehensive Diagnosis</b></P>",
              "<P><b>Holistic Mental Health Assessment:</b> Includes the option for in-person clinical examinations, vital sign checks, and on-site diagnostic imaging if needed.</P>",
              "<P><b>Purely Virtual Intake, scope limited to ADHD:</b>Diagnosis is based solely on video consultation and self-report questionnaires.</P>",
            ],
            [
              "<P><b>Crisis Support</b></P>",
              "<P><b>On-site Support:</b> Immediate clinical resources available during appointments if unexpected distress or crisis occurs.</P>",
              "<P><b>Referral Required:</b>Cannot manage on-site emergencies; must refer you to external emergency services.</P>",
            ],
            [
              "<P><b>Trust & Regulation</b></P>",
              "<P><b>Highest Standards:</b> Regulated healthcare facility that provides services across 15+ specialties, ensuring robust governance.</P>",
              "<P><b>Variable Standards:</b>Scope is often limited strictly to mental health/prescribing, lacking wider medical oversight.</P>",
            ],
          ],
        },
      },
    ],
  },
  integrated_section_data: {
    section_background_color: "#ffffff",
    heading_text_editor: `
    <h1>Our Integrated Treatment Approach: <br> More Than Just a Prescription</h1>
    <p>Your journey with ADHD requires a plan that respects the complexity of your brain and your life. Our approach at Skyline Hospitals is holistic and personal, combining cutting-edge medical oversight with practical psychological support. We treat the whole person, ensuring all your needs are met under one safe roof.</p>
    <h3>Specialized Care for ADHD & Autism (Neurodiversity)</h3>
    <p>It is extremely common for ADHD and Autism Spectrum Disorder (ASD) to co-occur (sometimes referred to as &quot;AuDHD&quot;). When diagnosing and treating, our specialists use an integrated lens to ensure your unique presentation is fully understood. We offer:</p>
    `,
    integrated_list: [
      {
        id: 1,
        box_background_color: "#EEF5FF",
        text_editor: `
        <h5>Personalized Diagnosis and Treatment</h5>
        <p>We look beyond a single condition to identify the overlap and distinction between ADHD and Autism symptoms.</p>
        `,
      },
      {
        id: 2,
        box_background_color: "#EEF5FF",
        text_editor: `
        <h5>Targeted Therapy</h5>
        <p>Psychological support is customized to address the emotional regulation difficulties often seen in AuDHD, alongside practical coping strategies for organization and executive function.</p>
        `,
      },
      {
        id: 3,
        box_background_color: "#EEF5FF",
        text_editor: `
            <h5>Sensitive Medication Management</h5>
            <p>Our Consultant Psychiatrists carefully manage any medication plan, considering how treatments for ADHD may interact with or affect Autistic traits and sensory sensitivities. We ensure maximum therapeutic benefit with minimum side effects.</p>
            `,
      },
      {
        id: 4,
        box_background_color: "#EEF5FF",
        text_editor: `
        <h5>Targeted Therapy</h5>
        <p>Psychological support is customized to address the emotional regulation difficulties often seen in AuDHD, alongside practical coping strategies for organization and executive function.</p>
        `,
      },
    ],
    integrated_faq_list: [
      {
        id: 1,
        title: "1. Expert Medication Support",
        text_editor: `
        <p>Your treatment will be overseen by our experienced Consultant Psychiatrists. They will carefully discuss whether medication (stimulants or non-stimulants) could provide the foundational support needed for focus, and they will ensure your safety and monitor your progress closely.</p>
        `,
      },
      {
        id: 2,
        title: "2. Practical Skills and Therapy",
        text_editor: `
        <p>Your treatment will be overseen by our experienced Consultant Psychiatrists. They will carefully discuss whether medication (stimulants or non-stimulants) could provide the foundational support needed for focus, and they will ensure your safety and monitor your progress closely.</p>
        `,
      },
      {
        id: 3,
        title: "2. Practical Skills and Therapy",
        text_editor: `
        <p>3. Seamless, Integrated Monitoring (The Hospital Advantage)</p>
        `,
      },
    ],
  },
  service_video_section: {
    media: {
      type: "video",
      path: "/videos/service-detail-2.mp4",
    },
  },
  consultant_section_data: {
    section_background_color: "#ffffff",
  },
  pricing_section_data: {
    section_background_color: "#ffffff",
    heading_text_editor: `
    <h1>Our Pricing</h1>
    <p>Fees below are for online consultations. Add £200 for in-person consultations</p>
    `,
    table: {
      table_background_color: "#eef6ff",
      table_columns: [
        "<h5>Service</h5>",
        "<h5>Price (Adults)</h5>",
        "<h5>Price (Child <18)</h5>",
      ],
      table_row_list: [
        ["<P>Initial consultation</P>", "<h6>£0</h6>", "<h6>£0</h6>"],
        ["<P><b>ADHD Assessment</b></P>"],
        ["<P>New Consultation</P>", "<h6>£1195</h6>", "<h6>£1550</h6>"],
        [
          "<P>Follow-Up consultation (Consultant)</P>",
          "<h6>£250</h6>",
          "<h6>£250</h6>",
        ],
        ["<P><b>Follow-Up consultation (Specialist Nurse Prescriber)</b></P>"],
        [
          "<P>Repeat Prescription fee (medication NOT included)</P>",
          "<h6>FREE</h6>",
          "<h6>FREE</h6>",
        ],
        ["<P><b>CHILD AUTISM/ ASD assessment</b></P>"],
        [
          "<P>Package price (All inclusive)</P>",
          "<h6>-</h6>",
          "<h6>£1995</h6>",
        ],
      ],
    },
    media: {
      path: "/images/our-pricing.jpg",
      alt: "Pricing",
    },
  },
  service_faq_section_data: {
    section_background_color: "#ffffff",
    heading_text_editor: `
    <h2>Frequently Asked Questions </h2>
    <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the printing and typesetting ndsince the 1500s, when an unknown printer took a galleytext of the printing and typesetting industry</p>
    `,
    faq_list: [
      {
        id: 1,
        faq_heading_text_editor: `
        <h6> I feel anxious about starting this process. How gentle is the Initial Screening?</h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 2,
        faq_heading_text_editor: `
        <h6>I'm an adult. Is it too late to get a diagnosis? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 3,
        faq_heading_text_editor: `
        <h6> I also struggle with anxiety or low mood. Will you treat these co-occurring issues? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 4,
        faq_heading_text_editor: `
        <h6>Is medication mandatory if I pursue treatment? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 5,
        faq_heading_text_editor: `
        <h6>What if I have other questions that aren't listed here? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 6,
        faq_heading_text_editor: `
        <h6>How fast can I speak to someone who understands? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 7,
        faq_heading_text_editor: `
        <h6>Is my privacy and confidentiality guaranteed? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 8,
        faq_heading_text_editor: `
        <h6>What if I start treatment and don't feel better right away? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 9,
        faq_heading_text_editor: `
        <h6>Will the cost of medication be a surprise, or can I plan for it? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 10,
        faq_heading_text_editor: `
        <h6>Does ADHD affect my relationships, and do you offer support for my partner or family? </h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
      {
        id: 11,
        faq_heading_text_editor: `
        <h6>What is the difference between the psychiatrist and the psychologist I might</h6>`,
        faq_content_text_editor: `
      <p>We understand. The Initial Screening Assessment is specifically designed to be low-stress. It's a focused conversation aimed at helping us determine if a full assessment is truly warranted, meaning you aren't committing time or money to a service you might not need. Our goal is to make the first step feel safe.</p>
      `,
      },
    ],
  },
  hospital_section_data: {
    section_background_color: "#ffff",
    heading_text_editor: `
    <h3>Skyline Hospitals:</h3>
    `,
    hospital_list: [
      {
        id: 1,
        media: {
          path: "/images/hospital-section-1.svg",
          alt: "hospital-section-1",
        },
        text_editor: `
        <h6>Doctor-Led Excellence</h6>
        `,
      },
      {
        id: 2,
        media: {
          path: "/images/hospital-section-2.svg",
          alt: "hospital-section-1",
        },
        text_editor: `
        <h6>Affordable Private Care</h6>
        `,
      },
      {
        id: 3,
        media: {
          path: "/images/hospital-section-3.svg",
          alt: "hospital-section-1",
        },
        text_editor: `
        <h6>Personalised Treatment.</h6>
        `,
      },
      {
        id: 4,
        media: {
          path: "/images/hospital-section-2.svg",
          alt: "hospital-section-1",
        },
        text_editor: `
        <h6>Doctor-Led Excellence</h6>
        `,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerBanner
        variant="service_Inner_detail"
        mobile_img="/images/service-inner-detail.png"
        img="/images/service-inner-detail.png"
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
      <RecognizingSection data={local_data?.recognizing_section_data} />
      <TableSection data={local_data?.table_section_data} />
      <IntegatedSection data={local_data?.integrated_section_data} />
      <VideoSection data={local_data?.service_video_section} />
      <ConsultantSection variant={"servicedetail"} />
      <PricingSection data={local_data?.pricing_section_data} />
      <ServiceFaqSection data={local_data?.service_faq_section_data} />
      <AppointmentSection
        variant={"service-detail"}
        bannerImage="/images/service-detail-appointment.jpg"
        title="Ready to take the next step toward understanding and support?"
        description="Trust your care to the established expertise of Skyline Hospitals. We are here to listen.BOOK Your FREE Assessment Now!"
        path="/images/service-detail-appointment.jpg"
      />
      <HospitalSection data={local_data?.hospital_section_data} />
    </>
  );
}
