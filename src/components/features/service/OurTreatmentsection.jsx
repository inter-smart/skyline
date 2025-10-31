"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { Heading } from "@/components/layout/Heading";
import { parseDescriptionToListItems, renderHtml } from "@/utils/parseHtml";

const treatmentData = [
  {
    title: "Systemic therapy",
    list: ["Chemotherapy", "Immunotherapy", "Hormonal therapy"],
  },
  {
    title: "Targeted therapy",
    list: ["Targeted therapy1", "Targeted therapy2", "Targeted therapy3"],
  },
  {
    title: "Radiotherapy",
    list: ["Radiotherapy1", "Radiotherapy2", "Radiotherapy3"],
  },
  {
    title: "Palliative care",
    list: ["Palliative1", "Palliative2", "Palliative3"],
  },
];

function OurTreatmentsection({ title, sub_title, treatments }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rightScrollRef = useRef(null);

  useEffect(() => {
    if (rightScrollRef.current) {
      rightScrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const className =
    "relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal pl-[28px] mb-[20px before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[17px] before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center before:bg-[url('/images/teartIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']";

  return (
    <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
      <div className="container container-sm flex flex-wrap">
        {/* Left Column */}
        <div className="w-full sm:w-[55%] xl:w-[50%] sm:pr-[60px] lg:pr-80px] xl:pr-[100px] 3xl:pr-[150px] mb-3 sm:mb-0">
          <Heading
            as="h6"
            size="heading6"
            className=" leading-[1] font-normal tracking-[3.06px] text-center xs:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
          >
            {sub_title}
          </Heading>
          <Heading
            as="h1"
            size="heading1"
            className="text-center xs:text-start font-unna text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
          >
            {title}
          </Heading>

          {/* Thumbnails */}
          <div className="mt-[30px]">
            <Swiper
              modules={[Thumbs]}
              onSwiper={(swiper) => {
                if (!thumbsSwiper) setThumbsSwiper(swiper);
              }}
              watchSlidesProgress
              spaceBetween={0}
              slidesPerView={treatments?.length}
              direction="vertical"
              className="h-[165px] xl:h-[175px] 2xl:h-[225px] 3xl:h-[320px]"
            >
              {treatments.map((item, index) => (
                <SwiperSlide key={index} className={`${index === treatments.length - 1 ? "!mb-0" : ""}`}>
                  <div
                    className={`group flex items-center justify-between w-full px-0 py-[6px] sm:py-[10px] 2xl:py-[15px] border-b border-[#919193] cursor-pointer hover:text-base2 hover:border-[#00335B] transition
                                    ${activeIndex === index ? "" : ""}`}
                    onClick={() => thumbsSwiper?.slideTo(index)}
                  >
                    <div
                      className={`text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-medium text-start  text-[#919193] w-[calc(100%-10px)] 2xl:w-[calc(100%-15px)] mb-0 
                                        ${activeIndex === index ? "text-base2" : "border-[#00335B]"} group-hover:text-base2`}
                    >
                      {item.title}
                    </div>
                    <span className="w-[10px] xl:w-[15px] h-[10px] xl:h-[15px] flex items-center justify-center">
                      <Image
                        src={activeIndex === index ? "/images/arrw-active.svg" : "/images/arrw.svg"}
                        alt="icon"
                        width={13}
                        height={13}
                        className="w-full h-auto object-contain aspect-square"
                      />
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-[45%] xl:w-[50%]">
          <div
            className="relative w-full h-full p-[15px] sm:p-[25px] lg:p-[30px] xl:p-[40px] 2xl:p-[50px] 3xl:p-[60px] rounded-[6px] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${treatments[activeIndex]?.image_value || "/images/traetmentBg.png"})`,
            }}
          >
            {/* Dark overlay for contrast */}

            {/* Scrollable inner content */}
            <div
              ref={rightScrollRef}
              className="relative z-[2] max-h-[300px] overflow-y-auto scroll-smooth pr-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent"
            >
              <Swiper
                modules={[Thumbs, EffectFade]}
                thumbs={{ swiper: thumbsSwiper }}
                effect="fade" // 👈 restores fade transition and prevents overlap
                fadeEffect={{ crossFade: true }}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {treatments.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-white">
                      <Heading as="h4" size="heading4" className="text-start font-medium text-white mb-[25px]">
                        {item?.title}
                      </Heading>
                      <ul className="[&_*]:!text-white">{parseDescriptionToListItems(item?.description, className)}</ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default React.memo(OurTreatmentsection);