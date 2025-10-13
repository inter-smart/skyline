"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 
import { Heading, SubTitle } from "@/components/layout/Heading";

export default function AwardSection() {
    return (
        <section className='py-[50px]'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className='w-full md:w-1/2'>
                        <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                            Accreditations & Awards
                        </SubTitle>
                        <Heading size="heading1" as="div" className="leading-none !mb-[15px]">
                            Our Recognitions
                        </Heading>
                        <div className="md:max-w-[300px] lg:max-w-[340px] xl:max-w-[420px] 2xl:max-w-[500px] 3xl:max-w-[640px]">
                            <p>At Skyline, we take pride in upholding the highest standards of healthcare.
                                Our accreditations reflect our commitment to safety, quality, and patient-centered care, while
                                our awards highlight the dedication of our team in delivering excellence every day.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:pl-40px'>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            watchSlidesProgress
                            loop
                            autoplay={{ delay: 5000 }}
                            spaceBetween={10} 
                            slidesPerView={2} 
                            className="relative w-full"
                            breakpoints={{
                                578: { slidesPerView: 2, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 40 }, 
                                1280: { slidesPerView: 2, spaceBetween: 55 },
                                1536: { slidesPerView: 2, spaceBetween: 70 },
                            }}
                        >
    
                                <SwiperSlide >
                                    <Link href="#" className="flex flex-col relative aspect-[360/250]" aria-label="consultants">
                                        <div className="bg-white flex items-center justify-center rounded-[5px] overflow-hidden z-0 w-full h-full border border-[#E3E5E8] ">
                                            
                                            <Image
                                                src="/images/award2.png"
                                                className="w-full h-full object-contain max-w-[80px] xs:max-w-[100px] sm:max-w-[130px] xl:max-w-[160px] 2xl:max-w-[200px] 3xl:max-w-[250px]"
                                                width={250}
                                                height={165}
                                                alt="team_img"
                                            />
                                        </div>
                                         
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <Link href="#" className="flex flex-col relative aspect-[360/250]" aria-label="consultants">
                                        <div className="bg-white flex items-center justify-center rounded-[5px] overflow-hidden z-0 w-full h-full border border-[#E3E5E8] ">
                                            
                                            <Image
                                                src="/images/award1.png"
                                                className="w-full h-full object-contain max-w-[80px] xs:max-w-[100px] sm:max-w-[130px] xl:max-w-[160px] 2xl:max-w-[200px] 3xl:max-w-[250px]"
                                                width={250}
                                                height={165}
                                                alt="team_img"
                                            />
                                        </div>
                                         
                                    </Link>
                                </SwiperSlide>
                         
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    )
}
