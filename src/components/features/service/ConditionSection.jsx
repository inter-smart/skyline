"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { parseDescriptionToListItems, renderHtml } from "@/utils/parseHtml";

const conditionData = [
  {
    question: "Prostate & Urological Cancers",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
  {
    question: "Haematological (Blood) Cancers",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
  {
    question: "Lung Cancer",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
  {
    question: "Colorectal & Gastrointestinal Cancers",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
  {
    question: "Gynaecological Cancers",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
  {
    question: "Breast Cancer",
    procedureList: [
      "PSA testing and prostate MRI",
      "Prostate biopsy and staging",
      "Bladder and kidney cancer diagnosis and management",
      "Androgen deprivation and immunotherapy options",
    ],
  },
];

const className = `w-full relative text-[11px] 2xl:text-[14px] 3xl:text-[16px] pl-[15px] before:absolute before:top-[4px] 2xl:before:top-[6px] before:left-0  before:w-[3px] 2xl:before:w-[5px] before:h-[3px] 2xl:before:h-[5px]  before:rounded-full before:content-[''] mb-[6px] xl:mb-[10px] 3xl:mb-[15px] text-[#212121] before:bg-[#671448]`;
export default function ConditionSection({
  sub_title,
  title,
  description,
  conditionData,
}) {
  return (
    <section className="py-[30px_60px] bg-[#F6F6F6]">
      <div className="container">
        <div
          className={`w-full [&_p,&_li]:3xl:text-[18px] [&_p,&_li]:2xl:text-[16px] [&_p,&_li]:xl:text-[14px] [&_p,&_li]:text-[12px] [&_li]:relative [&_li]:pl-[25px] [&_li]:inline-block
                                [&_li]:before:absolute [&_li]:before:top-[4px] [&_li]:before:left-0 [&_li]:before:w-[15px] [&_li]:before:h-[17px]
                                [&_li]:before:bg-[url('/images/expertIcon.svg')] [&_li]:before:bg-no-repeat [&_li]:before:bg-contain [&_li]:before:content-[''] pt-[20px]
                                 xl:pt-[30px] 2xl:pt-[50px] 3xl:pt-[70px] pl-0 max-w-full xs:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] 2xl:max-w-[40%] 3xl:max-w-[35%]`}
        >
          <Heading
            as="h6"
            size="heading6"
            className=" leading-[1] font-normal tracking-[3.06px] text-center xs:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
          >
            {sub_title}
          </Heading>
          <Heading
            as="h1"
            size="heading1"
            className="text-center xs:text-start font-unna text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
          >
            {title}
          </Heading>
          {/* <Text
            as="div"
            size="text1"
            className="text-center xs:text-start font-normal  text-[#1E1E1E]"
          >
            {renderHtml(description)}
          </Text> */}
        </div>
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[80px]"
            defaultValue="item-1"
          >
            {conditionData?.map((item, index) => {
              const hasContent =
                item?.description && item?.description.trim() !== "";

              return hasContent ? (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="break-inside-avoid bg-white border-none px-[15px] xl:px-[20px] 3xl:px-[25px] mb-[10px] 2xl:mb-[15px] rounded-[8px] "
                >
                  <AccordionTrigger className="text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] font-medium !no-underline cursor-pointer [&>svg]:!opacity-100 [&>svg]:!text-black [&>svg]:rotate-275 [&[data-state=open]>svg]:rotate-0 ">
                    {item?.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full text-start">
                      <ul>
                        {parseDescriptionToListItems(
                          item?.description,
                          className
                        )}
                      </ul>
                    </div>
                    {/* )} */}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div
                  key={index}
                  className="bg-white border-none px-[15px] xl:px-[20px] 3xl:px-[25px] mb-[10px] 2xl:mb-[15px] rounded-[8px] py-4 text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] font-medium text-start"
                >
                  {item?.title}
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
