"use client";

import { Heading, SubTitle } from "@/components/layout/Heading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { renderHtml } from "@/utils/parseHtml";

  const values = [
    {
      number: "01",
      title: "Excellence",
      description:
        "Your health and well-being are our top priorities. Experience personal touch in the heart of Coventry. Your health and well-being are our top priorities. With a personal touch in the heart of Coventry.",
      gradient:
        // "bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_100%,#FFF_100%)]",
        "bg-[linear-gradient(170deg,rgba(197,221,255,0.60)_7.6%,#E8F2FF_66.54%)]",
    },
    {
      number: "02",
      title: "Compassion",
      description:
        "Your health and well-being are our top priorities. Experience personal touch in the heart of Coventry. Your health and well-being are our top priorities. With a personal touch in the heart of Coventry.",
      gradient:
        // "bg-[linear-gradient(180deg,rgba(197,221,255,0.21)_100%,#FFF_100%)]",
        "bg-[linear-gradient(170deg,rgba(197,221,255,0.60)_7.6%,#E8F2FF_66.54%)]",
    },
    {
      number: "03",
      title: "Innovation",
      description:
        "Your health and well-being are our top priorities. Experience personal touch in the heart of Coventry. Your health and well-being are our top priorities. With a personal touch in the heart of Coventry.",
      gradient:
        // "bg-[linear-gradient(180deg,rgba(197,221,255,0.45)_100%,#FFF_100%)]",
        "bg-[linear-gradient(170deg,rgba(197,221,255,0.60)_7.6%,#E8F2FF_66.54%)]",
    },
    {
      number: "04",
      title: "Integrity",
      description:
        "Your health and well-being are our top priorities. Experience personal touch in the heart of Coventry. Your health and well-being are our top priorities. With a personal touch in the heart of Coventry.",
      gradient:
        // "bg-[linear-gradient(180deg,rgba(197,221,255,0.55)_100%,#FFF_100%)]",
        "bg-[linear-gradient(170deg,rgba(197,221,255,0.60)_7.6%,#E8F2FF_66.54%)]",
    },
  ];

export default function OurvalueSection({
  about_cms, values
}) {


  return (
    <section className="py-[35px] xl:py-[40px] 2xl:py-[60px] bg-[rgba(139,190,255,0.12)]">
      <div className="container">
        <div className="flex flex-wrap -m-[8px]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-[8px]">
            <div className="w-full">
              <SubTitle
                size="SubTitle"
                as="div"
                className="!mb-[5px] 2xl:!mb-[15px]"
              >
                {about_cms?.section5_pre_title}
              </SubTitle>
              <Heading size="heading1" as="div">
                {about_cms?.section5_title}
              </Heading>
            </div>
            <div className="w-full overflow-hidden rounded-[6px] md:max-w-[400px] xl:max-w-[490px] 2xl:max-w-[590px] 3xl:max-w-[740px] aspect-[740/385]">
              <Image
                src="/images/ourvalueImg.jpg"
                className="w-full h-full object-cover"
                width="500"
                height="256"
                alt="ourvalueImg"
              />
            </div>
          </div>

          {/* Right Section (Accordion) */}
          <div className="w-full md:w-1/2 p-[8px]">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="rounded-[4px] overflow-hidden bg-[rgba(197,221,255,0.35)]"
            >
              {values.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className={`${item.gradient} p-[10px_25px] border-none 2xl:p-[20px_30px] 3xl:p-[25px_45px] rounded-[6px_6px_0_0]`}
                >
                  <AccordionTrigger className="text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#00335B] font-normal uppercase p-0 [&>svg]:hidden tracking-wider !no-underline flex items-center justify-start">
                    <div className="text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#00335B] font-normal w-[28px] xl:w-[33px] h-[28px] 2xl:w-[40px] 3xl:w-[50px] xl:h-[33px] 2xl:h-[40px] 3xl:h-[50px] flex items-center justify-center bg-white rounded-full">
                      {item.id}
                    </div>
                    <div className="w-[calc(100%-28px)] xl:w-[calc(100%-33px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-50px)]">
                      {item.title}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] font-normal lg:max-w-[70%] p-0 pt-[15px] xl:pt-[25px]">
                    {renderHtml(item.description)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
