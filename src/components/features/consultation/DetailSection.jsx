import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { parseDescriptionToListItems, renderHtml } from "@/utils/parseHtml";

const accordionTrigger = `
  relative text-[16px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[30px] font-unna text-base1 bg-[rgba(103,20,72,0.05)] p-[7px_15px] 2xl:p-[8px_13px] 3xl:p-[15px_17px] [&>svg]:hidden
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[17px] !no-underline cursor-pointer
  after:bg-[url('/images/arrow.svg')] after:bg-no-repeat after:bg-contain after:w-[8px] after:h-[8px]
  after:transition-transform after:duration-300 data-[state=open]:after:rotate-180
`;

const educationClassName = `
    relative text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"`;

const certificateClassName = `relative text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]`;
export default function DetailSection({
  basicInfo,
  languages,
  specialInterests,
  consultantTestimonials,
}) {
  return (
    <section className="py-[35px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[70px] relative">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="md:w-[230px] lg:w-[265px] xl:w-[300px] 2xl:w-[395px] 3xl:w-[495px] max-md:mb-[10px]">
            <div className="flex md:flex-col flex-wrap">
              <div className="w-full border border-[#D6E2ED] p-[15px_10px] 2xl:p-[15px] 3xl:p-[20px] mb-[10px] md:mb-[20px] 3xl:mb-[30px]">
                <div className="w-full lg:h-full rounded-[6px] overflow-hidden aspect-[375/380] mb-[20px] bg-[#D6E2ED] relative flex items-end">
                  {/* logo image */}
                  <Image
                    src="/images/logoConsult.png"
                    className="absolute top-[25px] left-[25px] w-full   max-w-[165px]  object-cover"
                    width={165}
                    height={165}
                    alt="logo"
                  />
                  <Image
                    src={basicInfo?.profile_image_value}
                    className="w-full lg:h-full object-cover"
                    width={375}
                    height={270}
                    alt={basicInfo?.profile_image_alt}
                  />
                </div>
                <div className="w-full ">
                  <div className="text-[17px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[33px] text-[#00335B] font-medium mb-[5px] 2xl:mb-[5px]">
                    {basicInfo?.name}
                  </div>
                  <div
                    className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#671448] font-normal mb-[5px] 2xl:mb-[10px] flex items-start leading-4 relative
                                            before:relative before:block before:content-[''] before:top-[2px]  before:bottom-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                            before:h-[12px] before:rounded-[6px] before:mr-[8px]"
                  >
                    {basicInfo?.designation}
                  </div>
                  <div className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                    {basicInfo?.qualifications}
                  </div>
                  <div className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[40px] text-[#00335B] font-normal">
                    {basicInfo?.experience}
                    <span className="text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] px-[5px] ">
                      Years Experience
                    </span>
                  </div>
                  <div className="text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-[#656565]">
                    {basicInfo?.bio}
                  </div>
                </div>
              </div>

              <div className="w-full bg-base1 rounded-[6px] p-[20px_15px] xl:p-[25px_20px] 2xl:p-[30px_25px] 3xl:p-[35px_30px]">
                <div className="xl:text-[20px] 2xl:text-[23px] 3xl:text-[30px] text-white font-unna mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                  Time Schedule
                </div>
                <ul>
                  {basicInfo?.schedule?.map((item, index) => (
                    <li
                      key={index}
                      className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-normal flex items-center justify-between border-b 
                                   border-dashed border-b-[rgba(255,255,255,0.53)] py-[10px] last:border-0"
                    >
                      <span>{item?.day}</span>
                      <span>{item?.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[calc(100%-230px)] lg:w-[calc(100%-265px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-395px)] 3xl:w-[calc(100%-495px)] md:pl-[30px]">
            <div className="w-full">
              <Accordion
                type="multiple"
                defaultValue={[
                  "item-1",
                  "item-2",
                  "item-3",
                  "item-4",
                  "item-5",
                ]}
                collapsible
              >
                <AccordionItem
                  value="item-1"
                  className="mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] border-0"
                >
                  <AccordionTrigger className={`${accordionTrigger}`}>
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className="py-[10px] 3xl:py-[20px] [&>p]:mb-0">
                    <div>{renderHtml(basicInfo?.description)}</div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] border-0"
                >
                  <AccordionTrigger className={`${accordionTrigger}`}>
                    Special Interests
                  </AccordionTrigger>
                  <AccordionContent className="py-[10px] 3xl:py-[20px] [&>p]:mb-0">
                    <div className="flex flex-wrap">
                      {specialInterests?.map((item, index) => (
                        <div className="p-[5px]" key={index}>
                          <div
                            className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border border-[rgba(33,33,33,0.3)]
                                                 p-[5px] 3xl:p-[5px_15px] rounded-[40px] flex items-center justify-center w-full h-full"
                          >
                            {item?.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] border-0"
                >
                  <AccordionTrigger className={`${accordionTrigger}`}>
                    Languages Spoken
                  </AccordionTrigger>
                  <AccordionContent className="py-[10px] 3xl:py-[20px] [&>p]:mb-0">
                    <div className="flex flex-wrap">
                      {languages?.map((item, index) => (
                        <div className="p-[5px]">
                          <div
                            className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border border-[rgba(33,33,33,0.3)]
                                                 p-[5px] 3xl:p-[5px_15px] rounded-[40px] flex items-center justify-center w-full h-full"
                          >
                            <div className="w-[15px] h-[15px] rounded-full overflow-hidden">
                              <Image
                                src={item?.image_value}
                                className="w-full h-full object-cover"
                                width="15"
                                height="15"
                                alt={item?.image_alt_text_value}
                              />
                            </div>
                            <span className="px-[5px]">{item?.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] border-0"
                >
                  <AccordionTrigger className={`${accordionTrigger}`}>
                    Qualifications
                  </AccordionTrigger>
                  <AccordionContent className="py-[10px] 3xl:py-[20px] [&>p]:mb-0">
                    <div className="text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] font-normal tracking-widest uppercase mb-[15px]">
                      Education
                    </div>
                    <ul className="mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                      {parseDescriptionToListItems(
                        basicInfo?.education,
                        educationClassName
                      )}
                    </ul>
                    <div className="text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B]  font-normal tracking-widest uppercase mb-[15px]">
                      Certifications
                    </div>
                    <ul>
                      {parseDescriptionToListItems(
                        basicInfo?.certifications,
                        certificateClassName
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="mb-[10px] md:mb-[15px] 3xl:mb-[25px] border-0"
                >
                  <AccordionTrigger className={`${accordionTrigger}`}>
                    What Our Patients Says
                  </AccordionTrigger>
                  <AccordionContent className="py-[10px] 3xl:py-[20px]  [&>p]:3xl:text-[16px]">

                    {consultantTestimonials?.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-[15px]">
                        <div className="w-[25px] 2xl:w-[33px] 3xl:w-[50px] h-[25px] 2xl:h-[33px] 3xl:h-[50px] rounded-full overflow-hidden   flex items-center justify-center">
                          <Image
                            src={item?.avatar_value}
                            className="w-full h-full object-cover"
                            width="50"
                            height="50"
                            alt={item?.avatar_alt_text_value}
                          />
                        </div>
                        <div className="pl-[15px]">
                          <div className="text-[10px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[20px] font-medium text-[#1E1E1E] mb-[1px]">
                            {item?.name}
                          </div>
                          <div className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[15px] font-normal text-[#1E1E1E]">
                            {item?.location}
                          </div>
                        </div>
                      </div>
                      <div>
                      {renderHtml(item?.content)}
                      </div>
                    </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
