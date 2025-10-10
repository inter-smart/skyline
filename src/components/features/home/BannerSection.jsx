"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    {
      src: "/images/bannerBg.jpg",
      alt: "New Consultant Appointments Available",
      title: "New Consultant Appointments Available",
      subtitle: "Consult Your Doctor",
      desc: "Meet our specialist consultants for personalized medical care and treatment.",
    },
    {
      src: "/images/bannerBg.jpg",
      alt: "New Consultant Appointments Available",
      title: "New Consultant Appointments Available",
      subtitle: "Consult Your Doctor",
      desc: "Meet our specialist consultants for personalized medical care and treatment.",
    },
    // Add more slides here if needed
  ];

  return (
    <section className="relative w-full h-[520px] sm:h-[calc(100vh-115px)] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true} 
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={875}
                className="object-cover absolute top-0 left-0 w-full h-full"
                priority
              />
              <div className="container w-full h-full flex items-center">
                <div className="max-w-[470px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative">
                  <p className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase font-nornal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[66px] text-[#212121] font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]">
                    {slide.title}
                  </h2>
                  <p className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] font-normal max-w-[75%] mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                    {slide.desc}
                  </p>
                  <button className="btn-base1 hover" aria-label="appointment">
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container relative">
        {/* Slide Counter */}
        <div className="absolute bottom-5 right-5 z-20 text-[#EAF6FF]">
          <span className="text-[23px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[43px] text-[#EAF6FF]"> 0{currentSlide}</span> / <span className="text-[12px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[23px] text-white">0{slides.length}</span>
        </div>
      </div>
    </section>
  );
}
