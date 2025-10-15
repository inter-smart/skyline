

import Link from "next/link";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function DetailSection() {
    return (
        <section className="py-[70px] relative">
            <div className="container">
                <div className='flex flex-wrap'>
                    <div className='md:w-[230px] lg:w-[265px] xl:w-[300px] 2xl:w-[395px] 3xl:w-[495px]'>
                        <div className="flex md:flex-col flex-wrap">

                            <div className='w-full border border-[#D6E2ED] p-[15px_10px] 3xl:p-[15px] mb-[20px] 3xl:mb-[30px]'>
                                <div className="w-full lg:h-full rounded-[6px] overflow-hidden aspect-[375/380] mb-[20px] bg-[#D6E2ED] relative flex items-end">
                                    {/* logo image */}
                                    <Image
                                        src="/images/bgLogo.png"
                                        className="absolute top-[25px] left-[25px] w-full h-full max-w-[165px]  object-cover"
                                        width={165}
                                        height={165}
                                        alt="logo"
                                    />
                                    <Image
                                        src="/images/consult1.jpg"
                                        className="w-full lg:h-full object-cover"
                                        width={375}
                                        height={270}
                                        alt="consulation"
                                    />
                                </div>
                                <div className="w-full ">
                                    <div className="text-[17px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[33px] text-[#00335B] font-medium mb-[5px] 2xl:mb-[5px]">
                                        Dr. Jessy Jhon
                                    </div>
                                    <div className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#671448] font-normal mb-[5px] 2xl:mb-[10px] flex items-start leading-4 relative
                                            before:relative before:block before:content-[''] before:top-[2px]  before:bottom-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                            before:h-[12px] before:rounded-[6px] before:mr-[8px]"  >
                                        Consultant Psychiatrist
                                    </div>
                                    <div className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                        MBBS, MRCGP, DRCOG
                                    </div>
                                    <div className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[40px] text-[#00335B] font-normal">
                                        14
                                        <span className="text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] px-[5px] ">Years Experience</span>
                                    </div>
                                    <div className="text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-[#656565]">Your health and well-being are our top priorities. Experience  personal touch
                                        in the heart of Coventry. </div>

                                </div>
                            </div>

                            <div className="w-full bg-base1 rounded-[6px] p-[20px_15px] xl:p-[25px_20px] 2xl:p-[30px_25px] 3xl:p-[35px_30px]">
                                <div className="xl:text-[20px] 2xl:text-[23px] 3xl:text-[30px] text-white font-unna mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">Time Schedule</div>
                                <ul>
                                    <li className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-normal flex items-center justify-between border-b 
                                   border-dashed border-b-[rgba(255,255,255,0.53)] py-[10px] last:border-0">
                                        <span>Monday - Friday</span>
                                        <span>09:30 - 07:30</span>
                                    </li>
                                    <li className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-normal flex items-center justify-between border-b 
                                   border-dashed border-b-[rgba(255,255,255,0.53)] py-[10px] last:border-0">
                                        <span>Saturday</span>
                                        <span>09:30 - 05:30</span>
                                    </li>
                                    <li className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-normal flex items-center justify-between border-b 
                                   border-dashed border-b-[rgba(255,255,255,0.53)] py-[10px] last:border-0">
                                        <span>Sunday</span>
                                        <span>Not Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[calc(100%-230px)] lg:w-[calc(100%-265px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-395px)] 3xl:w-[calc(100%-495px)] pl-[30px]">
                        <div className="w-full">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-[30px] font-unna text-base1 bg-[rgba(103,20,72,0.05)] p-[15px_17px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
