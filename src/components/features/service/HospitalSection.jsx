"use client";
import Image from "next/image";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { renderHtml } from "@/utils/parseHtml";

export default function HospitalSection({ data }) {
  return (
    <section className="w-full h-auto py-[20px] 2xl:py-[35px] block">
      <div className="container">
        <div className="flex flex-wrap items-center">
          {renderHtml(
            data?.content,
            "text_editor w-full sm:w-[40%] mb-[20px] 2xl:mb-[30px] [&>_p]:text-[#111111] [&>_h3]:font-unna [&>_h3]:text-[20px] sm:[&>_h3]:text-[24px] 2xl:[&>_h3]:text-[28px] 3xl:[&>_h3]:text-[35px] [&>_h3]:text-[#671448] [&_b]:font-medium"
          )}
          <div className="w-full sm:w-[60%]">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={15}
              speed={800}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 80,
                },
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
              }}
              className="hospitalSlider"
            >
              {data?.highlights?.map((item) => (
                <SwiperSlide key={item?.id} className="!h-auto">
                  <div className="w-full h-full text-center block">
                    <div className="w-[40px] lg:w-[50px] 2xl:w-[60px] 3xl:w-[80px] h-auto aspect-square mx-auto overflow-hidden flex items-center justify-center">
                      <Image src={item?.icon_value} alt={item?.icon_alt_text_value} width={80} height={80} className="w-full h-full object-contain" />
                    </div>
                    <div className="text_editor [&_p]:text-[13px] 2xl:[&_p]:text-[16px] [&>_h6]:font-normal [&>_h6]:text-[#671448] block">
                      {item?.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
