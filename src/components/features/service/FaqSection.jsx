"use client";

import { motion } from "framer-motion";
import { Heading } from "../../layout/Heading";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What should I bring to my first oncology appointment?",
        answer: `Please bring all relevant medical documents such as biopsy reports, imaging scans, blood test results, pathology reports, and a 
    list of your current medications. Having these details helps the oncologist make a complete assessment and develop a personalized treatment plan.`
    },
    {
        question: "Do I need a referral to see a specialist?",
        answer: `Please bring all relevant medical documents...`
    },
    {
        question: "What payment options are available?",
        answer: `Please bring all relevant medical documents...`
    },
    {
        question: "Will I get my test results on the same day?",
        answer: `Please bring all relevant medical documents...`
    },
    {
        question: "Do you accept my insurance plan?",
        answer: `Please bring all relevant medical documents...`
    },
    {
        question: "Is cancer treatment painful?",
        answer: `Please bring all relevant medical documents...`
    },
];

export default function FaqSection() {
    return (
        <section className='py-[30px_60px]'>
            <div className="container">
                <div className="lg:w-1/2 max-w-[405px] xl:max-w-[540px] 2xl:max-w-[540px] 3xl:max-w-[685px]">
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Heading size="heading1" as="div" className="leading-none">
                            Frequently Asked Questions
                        </Heading>
                    </motion.div>
                    <motion.p>
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the printing and type setting
                        ndsince the 1500s, when an unknown printer took a galleytext of the printing and typesetting industry
                    </motion.p>
                </div>
                <div className="w-full">
                    <Accordion type="single" collapsible className="lg:columns-2 gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[80px]" defalutValue="item-1">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`} className="break-inside-avoid">
                                <AccordionTrigger className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] font-medium !no-underline cursor-pointer [&>svg]:!opacity-100 [&>svg]:!text-black [&>svg]:rotate-275 [&[data-state=open]>svg]:rotate-0 ">{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
