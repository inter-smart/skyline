"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // <-- add framer motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heading, SubTitle } from "@/components/layout/Heading";
import { renderHtml } from "@/utils/parseHtml";

const announcements = [
  {
    id: 1,
    title: "Complimentary Health Screening Event - December 20th",
    description: "Thorough health check-ups for community members aged 40 and above. Spots are limited!",
  },
  {
    id: 2,
    title: "New Pediatric Wing Inauguration - January 15th",
    description: "Join us for the grand opening of our state-of-the-art pediatric wing, featuring advanced facilities for children's healthcare.",
  },
];

export default function AboutSection({ home_cms = {}, announcements = [] }) {
  const {
    section1_video_thumbnail_image_value,
    section1_video_value,
    section1_pre_title,
    section1_title,
    section1_description,
    section1_block_title,
  } = home_cms;

  return (
    <section className="py-[55px] 3xl:py-[100px] bg-[#FBFBFB] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center -m-[10px]">
          {/* Left Text Section */}
          <motion.div
            className="w-full lg:w-4/12 p-[10px]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SubTitle size="SubTitle" as="div" className="!font-medium !text-[#101010] mb-[5px] 3xl:mb-[10px] after:hidden">
              {section1_pre_title || "About Skyline"}
            </SubTitle>
            <Heading size="heading1" as="div">
              {section1_title || "Welcome to Skyline Hospitals"}
            </Heading>
            {renderHtml(section1_description)}

            <Link href="/about" className="btn-base1 hover" aria-label="know_more">
              Know More
            </Link>
          </motion.div>

          {/* Middle Video Section */}
          <motion.div
            className="w-full lg:w-4/12 max-lg:order-3 p-[10px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[265px] xl:w-[345px] 2xl:w-[400px] 3xl:w-[485px] h-[265px] xl:h-[345px] 2xl:h-[400px] 3xl:h-[490px] m-auto relative">
              <video
                src={section1_video_value || "/videos/about.mp4"} // fallback if value is null
                poster={section1_video_thumbnail_image_value || "/images/default-thumbnail.jpg"} // fallback thumbnail
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

              <motion.div
                className="w-[85px] xl:w-[105px] 2xl:w-[120px] 3xl:w-[145px] h-[85px] xl:h-[105px] 2xl:h-[120px] 3xl:h-[145px] absolute top-0 bottom-0 right-[20%] m-auto"
                // animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <Image src="/images/aboutRound.png" width={145} height={145} alt="skyline" className="w-full h-full object-cover animate-spin-slow" />
                <span
                  className="absolute top-0 bottom-0 -left-[3px] right-0 m-auto 
                  w-[8px] h-[8px] rotate-45 
                  border-b-[10px] border-r-[10px] border-white border-b-transparent"
                ></span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Announcements Section */}
          <motion.div
            className="w-full lg:w-4/12 p-[10px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full relative">
              <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] uppercase tracking-wider mb-[20px]">
                {section1_block_title || "Announcements"}
              </div>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                loop={true}
                speed={5000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                direction="vertical"
                className="relative w-full h-[250px] sm:h-[200px] xl:h-[260px] 2xl:h-[300px] 3xl:h-[380px] before:content-[''] before:w-full before:h-[8%] md:before:h-[10%] before:bg-[#FFF] before:blur-[10px] before:absolute before:z-[2] before:-top-[3px] before:right-0 before:left-0 before:pointer-events-none
                 after:content-[''] after:w-full after:h-[8%] md:after:h-[10%] after:bg-[#FFF] after:blur-[10px] after:absolute after:z-[2] after:-bottom-[3px] after:right-0 after:left-0 after:pointer-events-none"
                breakpoints={{
                  1024: { slidesPerView: 2.1, spaceBetween: 10 },
                  1280: { slidesPerView: 3, spaceBetween: 10 },
                }}
              >
                {announcements?.map((announcement, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div
                      className="relative w-full border-b border-[#2121211c] pb-[15px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-medium mb-[5px]">{announcement?.title}</div>
                      <p className="mb-0">{announcement?.description}</p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
