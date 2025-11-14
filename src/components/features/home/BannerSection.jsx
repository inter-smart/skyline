"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { useRouter } from "next/navigation";

const slides = [
  {
    image_value: "/images/bannerBg.jpg",
    image_alt_text_value: "New Consultant Appointments Available",
    title: "New Consultant Appointments Available",
    pre_title: "Consult Your Doctor",
    description: "Meet our specialist consultants for personalized medical care and treatment.",
  },
  {
    image_value: "/images/bannerBg.jpg",
    image_alt_text_value: "New Consultant Appointments Available",
    title: "New Consultant Appointments Available",
    pre_title: "Consult Your Doctor",
    description: "Meet our specialist consultants for personalized medical care and treatment.",
  },
];

// ✨ Animation variants
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

export default function HeroSlider({ sliders = slides }) {
  const { openDialog } = useBookingFormContext();
  const [currentSlide, setCurrentSlide] = useState(1);
  const router = useRouter();

  const handleClick = (type, link) => {
    if (type == "url") {
      const url = link || "/";
      router.push(url);
    } else {
      openDialog();
    }
  };

  return (
    <section className="relative w-full h-[520px] sm:h-[calc(100vh-115px)] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        className="w-full h-full"
      >
        {sliders?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <picture className="absolute -z-2 inset-0">
                <source media="(max-width: 640px)" srcSet={slide?.image_mobile_value} />
                <Image
                  src={slide?.image_value}
                  alt={slide?.image_alt_text_value}
                  width={1920}
                  height={875}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                  priority
                />
              </picture>

              <div className="container w-full h-full flex items-center">
                {/* Animated text content */}
                <motion.div
                  key={currentSlide} // triggers re-animation on slide change
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  className="max-w-[470px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative"
                >
                  <motion.p
                    variants={textAnimation}
                    className="text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase font-nornal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"
                  >
                    {slide?.pre_title}
                  </motion.p>

                  <motion.h2
                    variants={textAnimation}
                    transition={{ delay: 0.5 }}
                    className="text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[66px] text-[#212121] font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]"
                  >
                    {slide?.title}
                  </motion.h2>

                  <motion.p
                    variants={textAnimation}
                    transition={{ delay: 0.7 }}
                    className="text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-[#1E1E1E] font-normal max-w-[75%] mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]"
                  >
                    {slide?.description}
                  </motion.p>

                  <div className="flex gap-3">
                    <motion.button
                      variants={textAnimation}
                      onClick={() => openDialog()}
                      transition={{ delay: 0.9 }}
                      className="btn-base1 hover transitiona-all duration-100"
                      aria-label="appointment"
                    >
                      {"Book an Appointment"}
                    </motion.button>
                    {slide?.action_url && slide?.action_title && (
                      <motion.button
                        variants={textAnimation}
                        transition={{ delay: 0.9 }}
                        className="btn-base1 hover transitiona-all duration-100"
                        aria-label="appointment"
                      >
                        <Link href={slide?.action_url}>{slide?.action_title || "Contact Us"}</Link>
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Counter */}
      <div className="container relative">
        <div className="absolute bottom-5 right-[70px] z-20 text-[#EAF6FF]">
          <span className="text-[23px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[43px] text-[#EAF6FF]">0{currentSlide}</span> /{" "}
          <span className="text-[12px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[23px] text-white">0{sliders.length}</span>
        </div>
      </div>
    </section>
  );
}
