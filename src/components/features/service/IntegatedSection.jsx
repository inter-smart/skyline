"use client";
import parse from "html-react-parser";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { renderHtml } from "@/utils/parseHtml";

const treatments = [
    {
        id: 1,
        content:
            "<h5>Targeted Therapy<br><br></h5>\r\n<p><span>Psychological support is customized to address the emotional regulation difficulties often seen in AuDHD, alongside practical coping strategies for organization and executive function.</span></p>",
        background_color: "#eef5ff",
    },
    {
        id: 2,
        content:
            "<h5>Executive Function Coaching<br><br></h5>\r\n<p><span>Structured coaching focuses on planning, prioritization, and task completion to help manage daily responsibilities more effectively.</span></p>",
        background_color: "#f5f9ff",
    },
    {
        id: 3,
        content:
            "<h5>Emotional Regulation Skills<br><br></h5>\r\n<p><span>Therapeutic techniques help individuals understand emotional triggers and develop healthier responses to stress and overwhelm.</span></p>",
        background_color: "#f0f6ff",
    },
    {
        id: 4,
        content:
            "<h5>Sensory Processing Support<br><br></h5>\r\n<p><span>Guidance is provided to manage sensory sensitivities and create environments that reduce overload and improve comfort.</span></p>",
        background_color: "#edf4ff",
    },
    {
        id: 5,
        content:
            "<h5>Behavioral Strategies<br><br></h5>\r\n<p><span>Practical behavior-based tools are introduced to improve focus, consistency, and follow-through in everyday life.</span></p>",
        background_color: "#eaf2ff",
    },
    {
        id: 6,
        content:
            "<h5>Personalized Care Planning<br><br></h5>\r\n<p><span>Each treatment plan is tailored to individual strengths, challenges, and long-term goals for sustainable progress.</span></p>",
        background_color: "#e6efff",
    },
];

const steps = [
    {
        id: 1,
        title: "Expert Medication Support",
        title_text_color: "#f21a02",
        content:
            "<p>Your treatment will be overseen by our experienced Consultant Psychiatrists. They will carefully discuss whether medication (stimulants or non-stimulants) could provide the foundational support needed for focus, and they will ensure your safety and monitor your progress closely.</p>",
    },
    {
        id: 2,
        title: "Comprehensive Diagnostic Review",
        title_text_color: "#d97706",
        content:
            "<p>A detailed assessment is conducted to understand your unique presentation, history, and current challenges before finalizing any treatment decisions.</p>",
    },
    {
        id: 3,
        title: "Collaborative Treatment Planning",
        title_text_color: "#2563eb",
        content:
            "<p>You will work together with your care team to develop a treatment approach that aligns with your needs, preferences, and lifestyle.</p>",
    },
    {
        id: 4,
        title: "Ongoing Therapy Sessions",
        title_text_color: "#16a34a",
        content: "<p>Regular therapy sessions focus on building coping strategies, emotional insight, and practical tools for everyday functioning.</p>",
    },
    {
        id: 5,
        title: "Progress Monitoring & Adjustments",
        title_text_color: "#7c3aed",
        content: "<p>Your progress is reviewed consistently, allowing adjustments to therapy or medication to ensure optimal outcomes.</p>",
    },
    {
        id: 6,
        title: "Long-Term Support & Follow-Up",
        title_text_color: "#0f766e",
        content: "<p>Continued follow-up ensures sustained progress, relapse prevention, and support as your needs evolve over time.</p>",
    },
];

export default function IntegatedSection({ data }) {
    return (
        <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[35px_60px] 2xl:py-[50px_80px] block">
            <div className="container">
                {/* <div className="text_editor mb-[20px]">{parse(data?.heading_text_editor)}</div> */}
                {data?.content && renderHtml(data?.content, "text_editor mb-[20px]")}
                {data?.treatments?.length > 0 && (
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
                            {data?.treatments?.map((item) => (
                                <SwiperSlide key={item?.id} className="!h-auto">
                                    {/* {parse(item?.text_editor)} */}
                                    {renderHtml(
                                        item?.content,
                                        `bg-[var(--bg-color)] text_editor w-full h-full
   p-[15px] sm:p-[20px] 2xl:p-[30px] rounded-[5px]
   [&_p]:text-[13px] 2xl:[&_p]:text-[16px] block`,
                                        item?.background_color
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                {data?.steps?.length > 0 && (
                    <Accordion type="single" collapsible defaultValue={`item-${steps?.[0]?.id}`}>
                        {data?.steps?.map((item, index) => (
                            <AccordionItem
                                value={`item-${item.id}`}
                                key={item.id}
                                className="w-full h-auto mb-[5px] sm:mb-[10px] 2xl:mb-[15px] bg-transparent overflow-hidden border-0 rounded-0 relative z-0"
                            >
                                <AccordionTrigger className="[&>svg]:text-[#132C26] 2xl:[&>svg]:w-[17px] 2xl:[&>svg]:h-[17px] [&[data-state=open]>svg]:rotate-270 &[data-state=open]>svg]:fill-[#00335B] 3xl:[&_svg]:!w-[25px] 3xl:[&_svg]:!h-[25px] py-[10px] 2xl:py-[15px] 3xl:py-[20px] border-b border-[#8E8E8E]/40 !rounded-[0px]">
                                    <div
                                        style={{ "--bg-color": item?.title_text_color }}
                                        className="text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-[1.4] font-medium text-[var(--bg-color)] max-w-[90%]"
                                    >
                                        {index + 1}. {item?.title}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    {/* <div className="text_editor [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-[#1E1E1E] py-[20px_0] [&_p]:last:my-0 mb-0 max-w-[90%] [&>*]:mb-[20px] 2xl:[&>*]:mb-[30px]">
                  {parse(item?.text_editor)}
                </div> */}
                                    {renderHtml(
                                        item?.content,
                                        "text_editor [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-[#1E1E1E] py-[20px_0] [&_p]:last:my-0 mb-0 max-w-[90%] [&>*]:mb-[20px] 2xl:[&>*]:mb-[30px]"
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </div>
        </section>
    );
}
