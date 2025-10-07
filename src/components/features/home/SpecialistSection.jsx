"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

export default function SpecialistSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <section className="py-[50px_70px] overflow-hidden">
            <div className="container">
                {/* Header Section */}
                <div className="flex items-end justify-between mb-[90px] flex-wrap gap-[20px]">
                    <div className="max-w-[650px]">
                        <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase tracking-wider mb-[30px]">
                            Services
                        </h1>
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-[#212121] font-unna leading-[1.1]">
                            Our Specialist <br />
                            Healthcare Services
                        </div>
                    </div>

                    <p className="line-clamp-4 max-w-[600px] mb-0">
                        Comprehensive medical care across multiple specialties, delivered by expert
                        consultants using state-of-the-art facilities.
                    </p>

                    <Link
                        href="/"
                        aria-label="View All Services"
                        className="btn-base1 hover"
                    >
                        View All Services
                    </Link>
                </div>


                {/* Swiper Section */}
                <div className="w-full">
                    <Swiper
                        // modules={[Autoplay]}
                       watchSlidesProgress={true}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{ delay: 5000 }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="relative w-full h-[650px] max-w-[80%] !overflow-visible"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1536: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6,].map((item, index) => (
                            <SwiperSlide
                                key={item}
                                className={`!flex items-center transition-all duration-500 not:[.swiper-slide-visible]:!h-[470px] ${activeIndex === index ? "scaleX-135 z-20" : "scale-95"}`}
                            >
                                <div
                                    className={`relative w-full rounded-[6px] overflow-hidden p-[20px] flex items-end justify-center transition-all duration-500 
                                        after:absolute after:bottom-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-b after:from-[40%] after:to-[120%] after:from-[rgba(0,0,0,0.1)] after:to-[rgba(0,0,0)] after:content-['']
                                        ${activeIndex === index ? "h-full" : "h-[425px]"
                                        }`}
                                >
                                    {/* Title (only visible on inactive slides) */}
                                    <div
                                        className={`text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-white realtive z-20 font-medium transition-all duration-500 ${activeIndex === index
                                            ? "opacity-0 hidden"
                                            : "opacity-100 visible"
                                            }`}
                                    >
                                        ENT (Ear, Nose & Throat)
                                    </div>

                                    {/* Background Image */}
                                    <Image
                                        src="/images/service1.jpg"
                                        alt="Service Image"
                                        width={560}
                                        height={650}
                                        className="object-cover absolute inset-0 w-full h-full"
                                    />

                                    {/* Info Card (visible only for active slide) */}
                                    <div
                                        className={`relative bg-[rgba(255,255,255,0.85)] rounded-[6px] p-[30px_40px_20px] transition-all z-20 duration-500 ${activeIndex === index
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-[20px] hidden"
                                            }`}
                                    >
                                        <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-medium mb-[20px] capitalize">
                                            Private GP Booking
                                        </div>
                                        <ul>
                                            {[
                                                "Same-day and next-day appointments",
                                                "30–60 minute consultations",
                                                "Direct access to on-site diagnostics",
                                                "Women’s & men’s health services",
                                            ].map((text, i) => (
                                                <li
                                                    key={i}
                                                    className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[17px] before:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                                                >
                                                    {text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}
