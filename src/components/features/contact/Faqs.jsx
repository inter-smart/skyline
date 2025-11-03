"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Are your caregivers trained and certified?",
    answer:
      "Yes, all our caregivers are fully trained and certified professionals. They undergo comprehensive background checks, complete specialized training programs, and maintain current certifications in healthcare and safety protocols.",
  },
  {
    id: 2,
    question: "How is the cost of care determined?",
    answer:
      "The cost of care depends on the type and duration of services required. We provide a personalized quote after assessing your needs.",
  },
  {
    id: 3,
    question: "How do I know if home care is right for my loved one?",
    answer:
      "Home care is ideal for individuals who need assistance with daily activities but prefer to remain in the comfort of their own home. We offer free consultations to assess your loved one's needs and determine if our services are the right fit.",
  },
  {
    id: 4,
    question: "Is Massscare's home care covered by insurance?",
    answer:
      "In many cases, insurance may cover part or all of the home care services. Please check with your insurance provider for details.",
  },
  {
    id: 5,
    question: "Can I choose the caregiver for my loved one?",
    answer:
      "Yes, we ensure compatibility by allowing you to participate in the caregiver selection process based on your preferences.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-[60px] sm:py-[80px] xl:py-[100px] bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Heading */}
        <div className="mb-[50px]">
          <h2 className="text-[32px] sm:text-[36px] xl:text-[40px] font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] text-[14px] sm:text-[16px] leading-relaxed max-w-[600px]">
            Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting ndsince the 1500s, when an unknown printer
            took a galleytext of the printing and typesetting industry
          </p>
        </div>

        {/* Two Column Grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
          {faqs.map((item) => (
            <Accordion
              key={item.id}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value={`faq-${item.id}`}
                className="border-none bg-white rounded-[16px] shadow-sm data-[state=open]:bg-[#0066FF] data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-[16px] sm:text-[18px] font-semibold px-6 py-5 hover:no-underline data-[state=open]:text-white data-[state=closed]:text-black [&[data-state=open]>svg]:rotate-45 [&>svg]:transition-transform">
                  {item.question}
                  <Plus className="h-5 w-5 shrink-0 text-[#0066FF] data-[state=open]:text-white transition-transform duration-200" />
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-[14px] sm:text-[15px] leading-relaxed data-[state=open]:text-white data-[state=closed]:text-[#6B7280]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}