"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Heading } from "@/components/layout/Heading";

const why_choose_list = [
  {
    media: {
      path: "/images/chooseIcon01.svg",
      alt: "choose-link",
    },
    title: "Expert Care",
    description: "Consultant oncologists with NHS and private sector experience",
  },
  {
    media: {
      path: "/images/chooseIcon02.svg",
      alt: "choose-link",
    },
    title: "Fast Scans",
    description: "Multidisciplinary approach including surgery, radiology, pathology, and nursing",
  },
  {
    media: {
      path: "/images/chooseIcon03.svg",
      alt: "choose-link",
    },
    title: "Modern Surgery",
    description: "On-site imaging, biopsy, and blood test facilities for rapid diagnosis",
  },
  {
    media: {
      path: "/images/chooseIcon04.svg",
      alt: "choose-link",
    },
    title: "Recovery Support",
    description: "Personalised cancer treatment plans tailored to your specific case",
  },
];

export default function WhyChooseUsSlider({ why_choose_list }) {
  return (
    <section className="w-full rounded-md border border-black/20 bg-transparent">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        watchSlidesProgress={true}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1250: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {why_choose_list?.map((item, index) => (
          <SwiperSlide
            key={"icon" + index}
            className={`w-full !h-auto 
                        border-r border-black/20
                        last:border-r-0
                        [&.swiper-slide-visible:last-of-type]:border-r-0
                        `}
          >
            <div className="w-full h-full group px-[15px] lg:px-[20px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px] py-[20px] lg:py-[25px] xl:py-[30px] 2xl:py-[40px] 3xl:py-[45px] relative transition-transform duration-300 hover:scale-98">
              <div className="w-[42%] h-auto absolute right-0 top-0 -z-1">
                <Image src="/images/chooseBg.svg" alt="about icon" width={180} height={175} className="w-full h-auto aspect-square" />
              </div>
              <div className="w-[45px] xl:w-[45px] 2xl:w-[56px] 3xl:w-[70px] h-[45px] xl:h-[45px] 2xl:h-[56px] 3xl:h-[70px] rounded-full bg-[linear-gradient(98deg,#004E8B_-30.8%,#C5DDFF_93.56%)] flex items-center justify-center  max-xs:mx-auto xs:mr-auto mb-[10px] xl:mb-[14px] 2xl:mb-[20px]">
                <Image
                  src={item?.image_value}
                  alt={item?.image_alt_text_value}
                  width={50}
                  height={50}
                  className="w-[58%] h-auto object-cover block"
                />
              </div>
              <div className="w-full text-start">
                <Heading as="h5" size="heading5" noMotion className="text-center xs:text-start font-medium text-[#212121] mb-[5px]">
                  {item?.title}
                </Heading>
                <p className="text-center xs:text-start line-clamp-4 text-[#656565] mb-0">{item?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
