"use client";

import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { renderHtml } from "@/utils/parseHtml";

const Disciplinary_list = [
    {
        media: {
            path: "/images/chooseIcon01.svg",
            alt: "choose-link",
        },
        slNo: "01",
        title: "Initial Consultation",
        procedureList: [
            "Full history, review of symptoms, and examination",
            "Arrangement of any urgent tests or scans",
        ],
    },
    {
        media: {
            path: "/images/chooseIcon02.svg",
            alt: "choose-link",
        },
        slNo: "02",
        title: "Diagnosis & Staging",
        procedureList: [
            "Rapid access to imaging, biopsy, and pathology",
            "Clarified diagnosis with discussion of next steps",
        ],
    },
    {
        media: {
            path: "/images/chooseIcon03.svg",
            alt: "choose-link",
        },
        slNo: "03",
        title: "Treatment Plan",
        procedureList: [
            "Explanation of options, risks, and benefits",
            "Decision-making support with compassionate guidance",
        ],
    },
    {
        media: {
            path: "/images/chooseIcon04.svg",
            alt: "choose-link",
        },
        slNo: "04",
        title: "Ongoing Monitoring",
        procedureList: [
            "Regular reviews, treatment evaluation, and follow-up scans",
            "Access to holistic and emotional support resources",
        ],
    },
    {
        media: {
            path: "/images/chooseIcon04.svg",
            alt: "choose-link",
        },
        slNo: "05",
        title: "Follow-Up & Recovery",
        procedureList: [
            "Full history, review of symptoms, and examination",
            "Arrangement of any urgent tests or scans",
        ],
    },

];

export default function PatientJourneySection({
    sub_title,
    title,
    description,
    Disciplinary_list

}) {
    return (
        <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
            <div className="container container-sm">
                <div className={`w-full [&_p,&_li]:3xl:text-[18px] [&_p,&_li]:2xl:text-[16px] [&_p,&_li]:xl:text-[14px] [&_p,&_li]:text-[12px] [&_li]:relative [&_li]:pl-[25px] [&_li]:inline-block [&_li]:before:absolute [&_li]:before:top-[4px] [&_li]:before:left-0 [&_li]:before:w-[2.667px] [&_li]:before:h-[2.667px] [&_li]:before:bg-[#00335B] [&_li]:before:content-['']
                 pt-[20px] xl:pt-[30px] 2xl:pt-[50px] 3xl:pt-[70px] pl-0 max-w-full xs:max-w-[60%] lg:max-w-[50%] xl:max-w-[32%] 2xl:max-w-[30%] 3xl:max-w-[35%]`}>
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
                    <Text
                        as="p"
                        size="text1"
                        className="text-center xs:text-start font-normal  text-[#1E1E1E]"
                    >
                        {renderHtml(description)}
                    </Text>

                </div>
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        watchSlidesProgress={true}
                        spaceBetween={10}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            576: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 10 },
                            1024: { slidesPerView: 4, spaceBetween: 15 },
                            1250: { slidesPerView: 5, spaceBetween: 15 }
                        }}
                        className="w-full">
                        {Disciplinary_list.map((item, index) => (
                            <SwiperSlide
                                key={"icon" + index}
                                className={`w-full !h-auto pt-[15px] xl:pt-[25px] 2xl:pt-[30px] 3xl:pt-[35px]`}
                            >
                                <div
                                    className={`w-full h-full group p-[15px_10px_25px] xl:p-[15px_10px_35px] 2xl:p-[20px_15px_45px] 3xl:p-[25px_15px_55px] 
                                    overflow-hidden rounded-[4px] relative transition-transform duration-400 hover:-translate-y-[15px] xl:hover:-translate-y-[25px] 2xl:hover:-translate-y-[30px] 3xl:hover:-translate-y-[35px]
                                    ${index % 2 === 0 ? "bg-[#671448]" : "bg-[rgba(103,20,72,0.17)]"}`}
                                >
                                    <div className={` ${index % 2 === 0 ? "border-b border-white/50" : "border-b border-[rgba(103,20,72,0.17)]"} w-full flex items-end pb-[10px] mb-[10px] xl:mb-[14px] 2xl:mb-[20px]`}>
                                        <div className={`${index % 2 === 0 ? "text-[rgba(255,255,255,0.66)] " : "text-[rgba(103,20,72,0.36)]"}
                                            text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl::text-[35px] 2xl:text-[40px] 3xl:text-[45px] font-light leading-[1] capitalize`}>
                                            {item?.id}
                                        </div>
                                        <div className="pl-[10px]">
                                            <Heading
                                                as="h5"
                                                size="heading5"
                                                className={`${index % 2 === 0 ? "text-white" : "text-[#671448]"} text-center xs:text-start font-medium`}>
                                                {item?.title}
                                            </Heading>
                                        </div>
                                    </div>
                                    <div className="w-full text-start">
                                        <div>
                                            {/* {item?.procedureList.map((procedure, liIndex) => ( */}
                                                <div
                                                    // key={liIndex}
                                                    className={`${index % 2 === 0 ? "text-white before:bg-[#fff]" : "text-[#671448] before:bg-[#671448]"} w-full relative text-[11px] 2xl:text-[14px] 3xl:text-[16px] pl-[15px]
                                                    before:absolute before:top-[4px] 2xl:before:top-[6px] before:left-0 
                                                    before:w-[3px] 2xl:before:w-[5px] before:h-[3px] 2xl:before:h-[5px] 
                                                    before:rounded-full before:bg-no-repeat before:bg-contain 
                                                    before:content-[''] block mb-[6px] xl:mb-[10px] 3xl:mb-[15px]`}>
                                                    {renderHtml(item?.description)}
                                                </div>
                                            {/* ))} */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
}