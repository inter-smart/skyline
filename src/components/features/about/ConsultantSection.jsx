"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Heading, SubTitle } from "@/components/layout/Heading";

const consultants = [
    {
        name: "Dr. John Smith",
        position: "Chief Executive Officer",
        image: "/images/team1.png",
        bgLogo: "/images/bgLogo1.png",
    },
    {
        name: "Dr. Jane Doe",
        position: "Chief Medical Officer",
        image: "/images/team2.png",
        bgLogo: "/images/bgLogo1.png",
    },
    {
        name: "Dr. Mark Lee",
        position: "Chief Operating Officer",
        image: "/images/team3.png",
        bgLogo: "/images/bgLogo1.png",
    },
    {
        name: "Dr. Alice Brown",
        position: "Chief Financial Officer",
        image: "/images/team4.png",
        bgLogo: "/images/bgLogo1.png",
    },
];

export default function ConsultantSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-[45px_25px] xl:py-[40px_20px] 2xl:py-[50px] 3xl:py-[70px_90px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[rgba(0,51,91,0.92)]">
            <Image
                src="/images/consutlantBg.jpg"
                className="w-full h-full object-cover absolute top-0 left-0"
                width={1920}
                height={840}
                alt="consultantBg"
            />
            <div className="container">
                <div className="flex flex-wrap items-end justify-between w-full relative z-10 mb-[25px] 2xl:mb-[40px] 3xl:mb-[50px]">
                    <div className="w-auto">
                        <SubTitle size="SubTitle" as="div" className="!text-white !mb-[10px] 3xl:!mb-[15px] leading-none">
                            Consultants
                        </SubTitle>
                        <Heading size="heading1" as="div" className="text-white !mb-0 leading-none">
                            Leadership & Senior Team
                        </Heading>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-end justify-center relative max-w-[95px] max-sm:hidden">
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-prev !relative z-20 bg-white w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6">
                                    <path d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-next !relative z-10 bg-white w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6" fill="none">
                                    <path d="M5.15236 0.947449C5.06785 1.03283 5.06763 1.1715 5.15236 1.25688L6.9277 3.04999L0.950083 3.04999C0.830465 3.04999 0.733398 3.14794 0.733398 3.26886C0.733398 3.38977 0.830483 3.48772 0.950083 3.48772L6.9277 3.48772L5.15258 5.28084C5.06785 5.36621 5.06785 5.50489 5.15258 5.59026C5.23731 5.67564 5.37447 5.67564 5.45898 5.59026L7.604 3.42358C7.68764 3.33907 7.68764 3.19845 7.604 3.11393L5.45898 0.94725C5.37425 0.861855 5.23709 0.861856 5.15236 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        watchSlidesProgress
                        loop
                        autoplay={{ delay: 5000 }}
                        spaceBetween={10}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onBeforeInit={(swiper) => setActiveIndex(swiper.realIndex)}
                        slidesPerView={2}
                        navigation={{
                            prevEl: ".navbts-prev",
                            nextEl: ".navbts-next",
                        }}
                        className="relative w-full"
                        breakpoints={{
                            578: { slidesPerView: 3, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 10 },
                            1024: { slidesPerView: 4, spaceBetween: 10 },
                            1280: { slidesPerView: 4, spaceBetween: 15 },
                            1536: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                    >
                        {consultants.map((consultant, index) => (
                            <SwiperSlide key={index}>
                                <Link href="#" className="flex flex-col relative" aria-label="consultants">
                                    <div className="bg-[#D6E2ED] flex items-end justify-center rounded-[5px] overflow-hidden z-0 aspect-[410/440] mb-[10px] 2xl:mb-[20px] w-full h-[calc(100%-35px)] relative max-h-[240px] xl:max-h-[290px] 2xl:max-h-[360px] 3xl:max-h-[400px]">
                                        <Image
                                            src={consultant.bgLogo}
                                            className="absolute top-[-10px] left-0 max-w-[265px] right-0 m-auto w-full h-full object-contain -z-1"
                                            width={390}
                                            height={475}
                                            alt="team_bg"
                                        />
                                        <Image
                                            src={consultant.image}
                                            className="w-full object-contain max-w-[220px] xl:max-w-[280px] 2xl:max-w-[320px] 3xl:max-w-[420px]"
                                            width={390}
                                            height={475}
                                            alt="team_img"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="text-[10px] md:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal uppercase mb-[5px]">
                                            {consultant.name}
                                        </div>
                                        <div className="text-[9px] md:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-white font-normal mb-[15px] flex items-start leading-4 relative before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-white before:p-[3px] before:h-[14px] before:rounded-[6px] before:mr-[8px]">
                                            {consultant.position}
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                        {/* arrows */}
                    <div className="flex items-end justify-center relative z-1 max-w-[95px] m-auto sm:hidden">
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-prev z-20 bg-white w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6">
                                    <path d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-next z-10 bg-white w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6" fill="none">
                                    <path d="M5.15236 0.947449C5.06785 1.03283 5.06763 1.1715 5.15236 1.25688L6.9277 3.04999L0.950083 3.04999C0.830465 3.04999 0.733398 3.14794 0.733398 3.26886C0.733398 3.38977 0.830483 3.48772 0.950083 3.48772L6.9277 3.48772L5.15258 5.28084C5.06785 5.36621 5.06785 5.50489 5.15258 5.59026C5.23731 5.67564 5.37447 5.67564 5.45898 5.59026L7.604 3.42358C7.68764 3.33907 7.68764 3.19845 7.604 3.11393L5.45898 0.94725C5.37425 0.861855 5.23709 0.861856 5.15236 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
