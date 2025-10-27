"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";

const testimonials = [
  {
    id: 1,
    quote: "A supportive atmosphere that promotes healing and recovery.",
    description:
      "I had an incredible experience at the hospital. The staff created a warm and welcoming environment that truly made a difference in my recovery. Their compassionate care and dedication were remarkable.",
    name: "Johnson James",
    location: "London, UK",
    image: "/images/avatar.jpg",
  },
  {
    id: 2,
    quote: "Exceptional care and attention to detail.",
    description:
      "From admission to discharge, everything was handled with professionalism and empathy. I felt safe and supported every step of the way.",
    name: "Maria Thomas",
    location: "Dubai, UAE",
    image: "/images/avatar2.jpg",
  },
  {
    id: 3,
    quote: "Highly recommended hospital with kind staff.",
    description: "Doctors and nurses went above and beyond to ensure comfort and recovery. The facility is clean, modern, and well-maintained.",
    name: "David Smith",
    location: "Toronto, Canada",
    image: "/images/avatar.jpg",
  },
];

export default function TestimonialSection({ title, pre_title, textTestimonials = [], videoTestimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-[50px_70px]">
      <div className="container">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-end justify-between mb-[35px] lg:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px] flex-wrap gap-[20px]">
            <div className="max-w-[650px]">
              <SubTitle size="SubTitle" as="div">
                {pre_title || "Testimonials"}
              </SubTitle>
              <Heading size="heading1" as="div" className="!mb-0">
                {title || "What Our Patients Say About Us"}
              </Heading>
            </div>
            {/* <Link href="/" aria-label="View All Testimonials" className="btn-base1 hover min-[105px] 3xl:min-w-[150px]">
              View All Testimonials
            </Link> */}
          </div>
        </motion.div>

        <div className="flex flex-wrap -m-[12px]">
          {/* Left Swiper */}
          <div className="md:w-1/2 p-[12px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1.5}
              spaceBetween={10}
              loop={true}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              direction="vertical"
              className="relative w-full h-[340px] sm:h-[380px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[650px] before:content-[''] before:w-full before:h-[5%] md:before:h-[8%] before:bg-[#FFF] before:blur-[10px] before:absolute before:z-[2] before:-top-[3px] before:right-0 before:left-0 before:pointer-events-none
                 after:content-[''] after:w-full after:h-[5%] md:after:h-[8%] after:bg-[#FFF] after:blur-[10px] after:absolute after:z-[2] after:-bottom-[3px] after:right-0 after:left-0 after:pointer-events-none"
              breakpoints={{
                768: { slidesPerView: 1.7, spaceBetween: 10 },
                1024: { slidesPerView: 2, spaceBetween: 10 },
                1280: { slidesPerView: 2, spaceBetween: 20 },
              }}
            >
              {textTestimonials?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ delay: index * 0.2 }}
                    className="w-full h-full bg-[#F8FAFB] p-[15px_20px] xl:p-[20px_25px] 2xl:p-[25px_30px] 3xl:p-[30px_40px] rounded-[8px]"
                  >
                    <div className="w-[18px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[34px] h-[18px] xl:h-[24px] 2xl:h-[20px] 3xl:h-[24px] flex mb-[10px] 3xl:mb-[15px]">
                      <svg className="w-full h-full" viewBox="0 0 21 19" fill="none">
                        <g clipPath="url(#clip0_2101_2520)">
                          <path d="M-0.753174 10.6743H3.1992L0.564265 15.9441H4.51664L7.15158 10.6743V2.76953H-0.753174V10.6743Z" fill="#671448" />
                          <path d="M9.78638 2.76953V10.6743H13.7388L11.1038 15.9441H15.0562L17.6911 10.6743V2.76953H9.78638Z" fill="#671448" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2101_2520">
                            <rect width="19.6957" height="18.4444" fill="white" transform="translate(0.692627 0.134766)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="text-[12px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] font-medium mb-[10px] 3xl:mb-[15px]">
                      {item?.headline}
                    </div>
                    <p className="mb-[20px] line-clamp-3">{item?.content}</p>

                    <div className="flex items-center">
                      <div className="2xl:w-[40px] 3xl:w-[50px] 2xl:h-[40px] 3xl:h-[50px] rounded-full overflow-hidden">
                        <Image
                          src={item?.avatar_value}
                          alt={item.avatar_alt_text_value}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-50px)] pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                        <div className="text-[12px] 2xl:text-[15px] 3xl:text-[20px] text-base1 font-medium capitalize xl:mb-[3px] 3xl:mb-[5px]">
                          {item.name}
                        </div>
                        <div className="text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-base1 font-normal">{item.location}</div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Video Swiper */}
          <div className="w-full md:w-1/2 p-[12px]">
            <div className="relative w-full h-full">
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 5000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{
                  prevEl: ".navbts-prev",
                  nextEl: ".navbts-next",
                }}
                className="relative w-full h-full"
              >
                {[1, 2].map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full rounded-[6px] overflow-hidden relative aspect-[450/340] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_2.34%,rgba(0,0,0,0)_99.42%)]">
                      {/* <video src={`/videos/testimonial${video}.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" /> */}
                      <Image
                        src="/images/consult1.jpg" // ✅ update path/extension based on your asset
                        alt="testimonial-thumbnail"
                        fill
                        className="object-cover"
                        sizes="100%"
                        priority
                      />

                      {/* <div className="flex items-center justify-between w-full absolute left-0 bottom-0 p-[25px] 2xl:p-[30px] 3xl:p-[40px_45px]">
                        <div className="flex items-center">
                          <div className="w-[40px] 3xl:w-[50px] h-[40px] 3xl:h-[50px] rounded-full overflow-hidden">
                            <Image src="/images/avatar.jpg" alt="avatar" width={50} height={50} className="w-full h-full object-cover" />
                          </div>
                          <div className="2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-50px)] pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                            <div className="text-[12px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium capitalize xl:mb-[3px] 3xl:mb-[5px]">
                              Johnson James
                            </div>
                            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-white font-normal">London , UK</div>
                          </div>
                        </div>
                        <Button className="w-[40px] 2xl:w-[50px] 3xl:w-[60px] h-[40px] 2xl:h-[50px] 3xl:h-[60px] rounded-full cursor-pointer bg-[rgba(217,217,217,0.5)] backdrop-blur-3xl">
                          <div className="w-[12px] :h-[12px] flex items-center">
                            <svg className="w-full h-full" viewBox="0 0 11 12" fill="none">
                              <path d="M10.1953 5.73134L0.499678 11.3291L0.499679 0.133557L10.1953 5.73134Z" fill="white" />
                            </svg>
                          </div>
                        </Button>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              {/* <div className="flex items-center justify-center absolute top-[30px] bottom-0 w-full left-0 m-auto">
                <button className="navbts-prev absolute left-[25px] lg:left-[30px] -translate-y-1/2 z-20 bg-base1 w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[9px] md:p-[10px] flex items-center justify-center cursor-pointer group hover:bg-[#2E4C99]">
                  <svg className="w-full h-full" viewBox="0 0 13 9" fill="none">
                    <path
                      d="M4.71445 0.147316C4.87291 0.307397 4.87331 0.567412 4.71445 0.727494L1.38569 4.08958L12.5937 4.08959C12.818 4.08959 13 4.27324 13 4.49996C13 4.72667 12.818 4.91033 12.5937 4.91033L1.38569 4.91033L4.71404 8.27242C4.87291 8.4325 4.87291 8.69251 4.71404 8.85259C4.55517 9.01268 4.298 9.01268 4.13953 8.85259L0.117629 4.79006C-0.0392101 4.6316 -0.0392101 4.36794 0.117629 4.20948L4.13954 0.146944C4.2984 -0.0131716 4.55558 -0.0131716 4.71445 0.147316Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className=" navbts-next absolute right-[25px] lg:right-[30px] -translate-y-1/2 z-10 bg-base1 w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[9px] md:p-[10px] flex items-center justify-center cursor-pointer group hover:bg-[#2E4C99]">
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                    <path
                      d="M8.28555 0.147316C8.12709 0.307397 8.12669 0.567412 8.28555 0.727494L11.6143 4.08958L0.406284 4.08959C0.182 4.08959 -2.05418e-07 4.27324 -1.95508e-07 4.49996C-1.85598e-07 4.72667 0.182034 4.91033 0.406284 4.91033L11.6143 4.91033L8.28596 8.27242C8.12709 8.4325 8.12709 8.69251 8.28596 8.85259C8.44483 9.01268 8.702 9.01268 8.86047 8.85259L12.8824 4.79006C13.0392 4.6316 13.0392 4.36794 12.8824 4.20948L8.86046 0.146944C8.7016 -0.0131716 8.44442 -0.0131716 8.28555 0.147316Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
