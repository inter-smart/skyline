"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

export default function InterviewSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#F6F6F6] py-[40px] 2xl:py-[60px] 3xl:py-[90px]">
            <div className="container">
                {/* Title Section */}
                <motion.div
                    className="max-w-[350px] xl:max-w-[430px] 2xl:max-w-[510px] 3xl:max-w-[640px] relative m-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SubTitle
                        size="SubTitle"
                        as="div"
                        className="!mb-[10px] 3xl:!mb-[15px] leading-none"
                    >
                        INTERVIEWS
                    </SubTitle>
                    <Heading
                        size="heading1"
                        as="div"
                        className="leading-none !mb-[20px] 2xl:!mb-[25px] 3xl:!mb-[30px]"
                    >
                        Consultant Interviews
                    </Heading>
                    <p>
                        At Skyline, we take pride in upholding the highest standards of
                        healthcare. Our accreditations reflect our commitment to safety,
                        quality, and patient-centered care, while our awards highlight the
                        dedication.
                    </p>
                </motion.div>

                {/* Slider Section */}
                <div className="relative lg:mt-[30px] 2xl:mt-[50px] lg:max-w-[640px] xl:max-w-[800px] 2xl:max-w-[960px] 3xl:max-w-[1340px] 
                m-auto px-[25px] md:px-[40px] lg:px-[60px]">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onBeforeInit={(swiper) => setActiveIndex(swiper.realIndex)}
                        navigation={{
                            prevEl: ".navbts-prev",
                            nextEl: ".navbts-next",
                        }}
                        className="interviewSlider"
                    >
                        <SwiperSlide>
                            <div className="w-full aspect-[1200/580] rounded-[6px] overflow-hidden">
                                <Image
                                    src="/images/interview1.jpg"
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={580}
                                    alt="Consultant Interview"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full aspect-[1200/580] rounded-[6px] overflow-hidden">
                                <Image
                                    src="/images/interview1.jpg"
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={580}
                                    alt="Consultant Interview"
                                />
                            </div>
                        </SwiperSlide>

                        {/* Add more SwiperSlides here as needed */}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center  -translate-y-1/2 z-10">
                        {/* Prev Button */}
                        <button className="navbts-prev bg-base2 w-[22px] md:w-[35px] 2xl:w-[40px] h-[22px] md:h-[35px] 2xl:h-[40px] 
                             rounded-full p-[7px] md:p-[12px] flex items-center justify-center cursor-pointer group hover:bg-base1 transition-all">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 13 9"
                                fill="none"  >
                                <path
                                    d="M4.71445 0.147316C4.87291 0.307397 4.87331 0.567412 4.71445 0.727494L1.38569 4.08958L12.5937 4.08959C12.818 4.08959 13 4.27324 13 4.49996C13 4.72667 12.818 4.91033 12.5937 4.91033L1.38569 4.91033L4.71404 8.27242C4.87291 8.4325 4.87291 8.69251 4.71404 8.85259C4.55517 9.01268 4.298 9.01268 4.13953 8.85259L0.117629 4.79006C-0.0392101 4.6316 -0.0392101 4.36794 0.117629 4.20948L4.13954 0.146944C4.2984 -0.0131716 4.55558 -0.0131716 4.71445 0.147316Z"
                                    fill="white"
                                />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button className="navbts-next bg-base2 w-[22px] md:w-[35px] 2xl:w-[40px] h-[22px] md:h-[35px] 2xl:h-[40px] rounded-full p-[7px] md:p-[12px] flex items-center justify-center cursor-pointer 
                             group hover:bg-base1 transition-all">
                            <svg
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"  >
                                <path
                                    d="M8.28555 0.147316C8.12709 0.307397 8.12669 0.567412 8.28555 0.727494L11.6143 4.08958L0.406284 4.08959C0.182 4.08959 -2.05418e-07 4.27324 -1.95508e-07 4.49996C-1.85598e-07 4.72667 0.182034 4.91033 0.406284 4.91033L11.6143 4.91033L8.28596 8.27242C8.12709 8.4325 8.12709 8.69251 8.28596 8.85259C8.44483 9.01268 8.702 9.01268 8.86047 8.85259L12.8824 4.79006C13.0392 4.6316 13.0392 4.36794 12.8824 4.20948L8.86046 0.146944C8.7016 -0.0131716 8.44442 -0.0131716 8.28555 0.147316Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
