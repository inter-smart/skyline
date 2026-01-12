import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { renderHtml } from "@/utils/parseHtml";

const subServiceFaqs = [
  {
    id: 1,
    question: "What is AuDHD?",
    question_text_color: "#f20707",
    answer:
      "<p>AuDHD refers to the co-occurrence of Autism Spectrum Disorder (ASD) and Attention Deficit Hyperactivity Disorder (ADHD) in the same individual.</p>",
  },
  {
    id: 2,
    question: "How is AuDHD diagnosed?",
    question_text_color: "#2563eb",
    answer:
      "<p>Diagnosis involves a comprehensive assessment by qualified mental health professionals, including clinical interviews, standardized tools, and developmental history.</p>",
  },
  {
    id: 3,
    question: "Can adults be diagnosed with AuDHD?",
    question_text_color: "#16a34a",
    answer:
      "<p>Yes, many adults receive a diagnosis later in life after recognizing long-standing patterns of attention, communication, and sensory challenges.</p>",
  },
  {
    id: 4,
    question: "Is medication always required?",
    question_text_color: "#d97706",
    answer:
      "<p>Medication is not mandatory for everyone; treatment plans are individualized and may include therapy, coaching, lifestyle adjustments, or medication where appropriate.</p>",
  },
  {
    id: 5,
    question: "How does therapy help with AuDHD?",
    question_text_color: "#7c3aed",
    answer:
      "<p>Therapy helps build coping strategies for emotional regulation, executive functioning, social communication, and managing daily stressors.</p>",
  },
  {
    id: 6,
    question: "What challenges are common with AuDHD?",
    question_text_color: "#0f766e",
    answer:
      "<p>Common challenges include inattention, sensory sensitivities, emotional overwhelm, impulsivity, and difficulty with organization or time management.</p>",
  },
  {
    id: 7,
    question: "Can AuDHD be managed without medication?",
    question_text_color: "#be123c",
    answer: "<p>Yes, many people manage AuDHD through therapy, behavioral strategies, environmental adjustments, and supportive routines.</p>",
  },
  {
    id: 8,
    question: "How long does treatment usually take?",
    question_text_color: "#0284c7",
    answer: "<p>Treatment duration varies by individual goals and needs; some benefit from short-term support while others require ongoing care.</p>",
  },
  {
    id: 9,
    question: "Will treatment cure AuDHD?",
    question_text_color: "#9333ea",
    answer: "<p>There is no cure, but effective treatment can significantly improve quality of life, daily functioning, and emotional wellbeing.</p>",
  },
  {
    id: 10,
    question: "Is AuDHD support personalized?",
    question_text_color: "#15803d",
    answer: "<p>Yes, care plans are personalized to reflect individual strengths, challenges, preferences, and long-term goals.</p>",
  },
];

export default function ServiceFaqSection({ data }) {
  return (
    <section className="w-full h-auto py-[10px_40px] lg:py-[25px_60px] 2xl:py-[35px_80px] 3xl:py-[40px_100px] block">
      <div className="container">
        {renderHtml(data?.content, "text_editor md:max-w-[40%] mb-[15px] sm:mb-[20px] 2xl:mb-[30px] [&>_p]:text-[#111111] [&_b]:font-medium")}
        <div>
          <Accordion
            type="single"
            collapsible
            defaultValue={`item-${data?.faqs?.[0]?.id}`}
            className="columns-1 lg:columns-2 lg:gap-x-[50px] 3xl:gap-x-[80px]"
          >
            {data?.faqs?.map((item) => (
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className="w-full h-fit py-[5px] sm:py-[7px] lg:py-[10px] 2xl:py-[15px] 3xl:py-[20px] mb-[5px] sm:mb-[10px] 2xl:mb-[15px] rounded-[0px] border-b border-[#383838]/10 bg-transparent overflow-hidden break-inside-avoid block relative z-0"
              >
                <AccordionTrigger className="[&>svg]:text-[#132C26] 2xl:[&>svg]:w-[20px] 2xl:[&>svg]:h-[20px] [&_svg]:rotate-270 [&[data-state=open]>svg]:rotate-0">
                  {renderHtml(item?.question, "text_editor max-w-[90%] text-[var(--bg-color)] mb-0", item?.question_text_color)}
                </AccordionTrigger>
                <AccordionContent>
                  {renderHtml(
                    item?.answer,
                    "text_editor [&_p]:text-[13px] 2xl:[&_p]:text-[14px] 2xl:[&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-[#212121] py-[10px_0] sm:py-[20px_0] [&_p]:last:my-0 mb-0 max-w-[90%] [&>*]:mb-[20px] 2xl:[&>*]:mb-[30px]"
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
