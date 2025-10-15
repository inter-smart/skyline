"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Heading, SubTitle } from "@/components/layout/Heading";
import ServiceCard from "@/components/common/ServiceCard";

const services = [
    {
        title: "ENT (Ear, Nose & Throat)",
        mainTitle: "ENT (Ear, Nose & Throat)",
        image: "/images/service2.jpg",
        features: [
            "Same-day and next-day appointments",
            "30–60 minute consultations",
            "Direct access to on-site diagnostics",
            "Women’s & men’s health services",
        ],
        category: "ent",
    },
    {
        title: "Private GP Booking",
        mainTitle: "Private GP Booking",
        image: "/images/service1.jpg",
        features: [
            "Same-day and next-day appointments",
            "30–60 minute consultations",
            "Direct access to on-site diagnostics",
            "Women’s & men’s health services",
        ],
        category: "neuro",
    },
    {
        title: "Neurology",
        mainTitle: "Skin & Hair Treatments",
        image: "/images/service3.jpg",
        features: [
            "Acne and scar treatments",
            "Laser hair removal",
            "Anti-aging solutions",
            "Skin allergy tests",
        ],
        category: "derma",
    },
    // {
    //     title: "Orthopaedics & Sports Medicine",
    //     mainTitle: "Child Care & Vaccinations",
    //     image: "/images/service4.jpg",
    //     features: [
    //         "Newborn to adolescent care",
    //         "Vaccination programs",
    //         "Nutritional guidance",
    //         "Growth tracking",
    //     ],
    //     category: "ortho",
    // },
    
];
export default function FeaturedserviceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#F6F6F6] py-[45px_25px] xl:py-[40px_20px] 2xl:py-[50px] 3xl:py-[70px_90px] relative  ">

            <div className="container">
                <div className="flex flex-wrap items-end justify-between w-full relative z-10 mb-[25px] 2xl:mb-[40px] 3xl:mb-[50px]">
                    <div className="md:w-1/2">
                        <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                            Consultants
                        </SubTitle>
                        <Heading size="heading1" as="div" className="leading-none">
                            Leadership & Senior Team
                        </Heading>
                        <p className="mb-0">Explore our wide range of specialized medical services designed to provide expert care for every stage of life. 
                            From routine check-ups to advanced treatments, we are here to support your health journey.</p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-end justify-center relative max-w-[95px] max-sm:hidden">
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-prev !relative z-20 bg-base2 w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-white" viewBox="0 0 8 6">
                                    <path d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-next !relative z-10 bg-base2 w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-white" viewBox="0 0 8 6" fill="none">
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
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".navbts-prev",
                            nextEl: ".navbts-next",
                        }}
                        className="relative w-full h-[265px] lg:h-[345px] xl:h-[435px] 2xl:h-[520px] 3xl:h-[650px]"
                        breakpoints={{
                            478: { slidesPerView: 2, spaceBetween: 10 },
                            678: { slidesPerView: 3, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 10 },
                            1024: { slidesPerView: 3, spaceBetween: 10 },
                            1280: { slidesPerView: 3, spaceBetween: 12 },
                            1536: { slidesPerView: 3, spaceBetween: 15 },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                   <ServiceCard service={service} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* arrows */}
                    <div className="flex items-end justify-center relative z-1 max-w-[95px] m-auto sm:hidden">
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-prev z-20 bg-base2 w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-white" viewBox="0 0 8 6">
                                    <path d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/2 p-[10px]">
                            <button className="navbts-next z-10 bg-base2 w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                                <svg className="w-full h-full group-hover:fill-white fill-white" viewBox="0 0 8 6" fill="none">
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
