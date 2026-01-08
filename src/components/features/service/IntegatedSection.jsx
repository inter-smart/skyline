"use client";
import parse from "html-react-parser";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function IntegatedSection({ data }) {
    return (
        <section
            style={{ backgroundColor: data?.section_background_color || "#ffffff" }}
            className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[35px_60px] 2xl:py-[50px_80px] block">
            <div className="container">
                <div className="text_editor mb-[20px]">
                    {parse(data?.heading_text_editor)}
                </div>
                <div className="mb-[20px]">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        speed={800}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1536: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="integratedSlider"
                    >
                        {data?.integrated_list?.map((item) => (
                            <SwiperSlide key={item?.id} className="!h-auto">
                                <div
                                    style={{ backgroundColor: item?.box_background_color || "#ffffff" }}
                                    className="text_editor w-full h-full p-[15px] sm:p-[20px] 2xl:p-[30px] rounded-[5px] [&_p]:text-[13px] 2xl:[&_p]:text-[16px] block">
                                    {parse(item?.text_editor)}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue={`item-${data?.integrated_faq_list?.[1]?.id}`}
                >
                    {data?.integrated_faq_list?.map((item) => (
                        <AccordionItem
                            value={`item-${item.id}`}
                            key={item.id}
                            className="w-full h-auto mb-[5px] sm:mb-[10px] 2xl:mb-[15px] bg-transparent overflow-hidden border-0 rounded-0 relative z-0">
                            <AccordionTrigger className="[&>svg]:text-[#132C26] 2xl:[&>svg]:w-[17px] 2xl:[&>svg]:h-[17px] [&[data-state=open]>svg]:rotate-270 &[data-state=open]>svg]:fill-[#00335B] 3xl:[&_svg]:!w-[25px] 3xl:[&_svg]:!h-[25px] py-[10px] 2xl:py-[15px] 3xl:py-[20px] border-b border-[#8E8E8E]/40 !rounded-[0px]">
                                <div className="text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-[1.4] font-medium text-[#00335B] max-w-[90%]">{item?.title}</div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div
                                    className="text_editor [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-[#1E1E1E] py-[20px_0] [&_p]:last:my-0 mb-0 max-w-[90%] [&>*]:mb-[20px] 2xl:[&>*]:mb-[30px]"
                                >{parse(item?.text_editor)}</div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
