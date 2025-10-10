"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutSection() {
    return (
        <section className="py-[55px] 3xl:py-[100px] bg-[#FBFBFB]">
            <div className="container">
                <div className="flex flex-wrap items-center -m-[10px]">
                    <div className=" w-full lg:w-4/12 p-[10px]">
                        <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase tracking-wider leading-0 mb-[30px]">About Skyline</h1>
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-[#212121] font-unna font-normal leading-[34px]
                         xl:leading-[40px] 2xl:leading-[47px] 3xl:leading-[60px] mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">Welcome to
                            Skyline Hospitals </div>

                        <p className="line-clamp-4">Your health and well-being are our top priorities. Experience world-class healthcare with
                            a personal touch in the heart of Coventry. Your health and well-being are our top priorities. Experience world-class
                            healthcare with a personal touch in the heart of Coventry.</p>
                        <Link href="/" className="btn-base1 hover" araia-label="know_more">Know More</Link>
                    </div>
                    <div className="w-full lg:w-4/12 max-lg:order-3 p-[10px]">
                        <div className="w-[265px] xl:w-[360px] 2xl:w-[400px] 3xl:w-[500px] h-[265px] xl:h-[345px] 2xl:h-[400px] 3xl:h-[490px] m-auto relative">

                            <video
                                src="/videos/about.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="
                                    w-full h-full object-cover
                                    [mask-image:url('/images/aboutMask.svg')]
                                    [mask-repeat:no-repeat]
                                    [mask-position:center]
                                    [mask-size:cover]
                                    [-webkit-mask-image:url('/images/aboutMask.svg')]
                                    [-webkit-mask-repeat:no-repeat]
                                    [-webkit-mask-position:center]
                                    [-webkit-mask-size:cover]
                                "
                            />
                            <div className="w-[85px] xl:w-[105px] 2xl:w-[120px] 3xl:w-[145px] h-[85px] xl:h-[105px] 2xl:h-[120px] 3xl:h-[145px] absolute top-0 bottom-0 right-[20%] m-auto">
                                <Image
                                    src="/images/aboutRound.png"
                                    width={145}
                                    height={145}
                                    alt="skyline"
                                    className="w-full h-full object-cover animate-spin-slow"
                                />
                                <span className="absolute top-0 bottom-0 left-0 right-0 m-auto 
                                   w-[8px]  h-[8px] rotate-45 
                                    border-b-[10px] border-r-[10px] border-white border-b-transparent ">
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="w-full lg:w-4/12 p-[10px]">
                        <div className="w-full relative">
                            <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] uppercase tracking-wider mb-[20px]">Announcements</div>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                direction="vertical"
                                className="relative w-full h-[250px] sm:h-[200px] xl:h-[260px] 2xl:h-[300px] 3xl:h-[380px] 
                                before:absolute before:content-[''] before:left-0 before:w-full before:h-[75px] 
                                before:bg-white before:rounded-[50px] before:blur-[20px] before:top-0"

                                breakpoints={{
                                    1024: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 10,

                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,

                                    },
                                }}
                            >
                                <SwiperSlide >
                                    <div className="relative w-full border-b border-[#2121211c] pb-[15px]">
                                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-medium mb-[5px]">Complimentary Health Screening Event - December 20th</div>
                                        <p className="mb-0">Thorough health check-ups for community members aged 40 and above. Spots are limited!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="relative w-full border-b border-[#2121211c] pb-[15px]">
                                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-medium mb-[5px]">Complimentary Health Screening Event - December 20th</div>
                                        <p className="mb-0">Thorough health check-ups for community members aged 40 and above. Spots are limited!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="relative w-full border-b border-[#2121211c] pb-[15px]">
                                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-medium mb-[5px]">Complimentary Health Screening Event - December 20th</div>
                                        <p className="mb-0">Thorough health check-ups for community members aged 40 and above. Spots are limited!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="relative w-full border-b border-[#2121211c] pb-[15px]">
                                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-medium mb-[5px]">Complimentary Health Screening Event - December 20th</div>
                                        <p className="mb-0">Thorough health check-ups for community members aged 40 and above. Spots are limited!</p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
