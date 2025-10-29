"use client";

import { motion } from "framer-motion";
import { Heading } from "../layout/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { renderHtml } from "@/utils/parseHtml";

const data = [
  {
    title: "What should I bring to my first oncology appointment?",
    description: `<p>Please bring all relevant medical documents such as biopsy reports, imaging scans, blood test results, pathology reports, and a 
    list of your current medications. Having these details helps the oncologist make a complete assessment and develop a personalized treatment plan.</p>`,
  },
  {
    title: "Do I need a referral to see a specialist?",
    description: `<p>Please bring all relevant medical documents...</p>`,
  },
  {
    title: "What payment options are available?",
    description: `<p>Please bring all relevant medical documents...</p>`,
  },
  {
    title: "Will I get my test results on the same day?",
    description: `<p>Please bring all relevant medical documents...</p>`,
  },
  {
    title: "Do you accept my insurance plan?",
    description: `<p>Please bring all relevant medical documents...</p>`,
  },
  {
    title: "Is cancer treatment painful?",
    description: `<p>Please bring all relevant medical documents...</p>`,
  },
];

export default function FaqSection({ sub_title, title, description, faqData = data }) {
  return (
    <section className="py-[30px_60px]">
      <div className="container">
        <div className="lg:w-1/2 max-w-[405px] xl:max-w-[540px] 2xl:max-w-[540px] 3xl:max-w-[685px]">
          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <Heading size="heading1" as="div" className="leading-none">
              {title}
            </Heading>
          </motion.div>
          <motion.div>{renderHtml(description)}</motion.div>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="lg:columns-2 gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[80px]" defaultValue="item-1">
            {faqData?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="break-inside-avoid">
                <AccordionTrigger className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] font-medium !no-underline cursor-pointer [&>svg]:!opacity-100 [&>svg]:!text-black [&>svg]:rotate-275 [&[data-state=open]>svg]:rotate-0 ">
                  {item?.title}
                </AccordionTrigger>
                <AccordionContent>{renderHtml(item?.description)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
