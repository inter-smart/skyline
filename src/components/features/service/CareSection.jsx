"use client";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { renderHtml } from "@/utils/parseHtml";

export default function CareSection({ data }) {
  return (
    <section className="w-full h-auto py-[5px_20px] sm:py-[10px_30px] lg:py-[10px_40px] 2xl:py-[10px_50px] 3xl:py-[10px_60px] block">
      <div className="container">
        {data?.content && renderHtml(data?.content, "text_editor mb-[10px] lg:mb-[15px] 2xl:mb-[25px]")}
        {data?.list?.length > 0 && (
          <div className="xl:w-[90%]">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1536: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
              }}
              className="careSlider"
            >
              {data?.list?.map((item, index) => (
                <SwiperSlide key={item.id ?? index} className="!h-auto">
                  <div
                    style={{ backgroundColor: item?.background_color || "#ffffff" }}
                    className="group [--width:20px] sm:[--width:30px] lg:[--width:40px] 2xl:[--width:50px] w-full h-full p-[15px] sm:p-[20px] lg:p-[25px] 2xl:p-[30px_35px] 3xl:p-[35px_40px] rounded-[5px] flex flex-wrap"
                  >
                    <div className="w-[var(--width)] h-full">
                      <div
                        style={{
                          "--badge-color": item?.badge_color || "#00335B",
                        }}
                        className="
    text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[26px]
    leading-[1] font-medium text-[#00335B]
    w-fit h-auto aspect-square
    p-[10px] sm:p-[10px_15px]
    bg-white rounded-full
    transition-all duration-500 ease-in-out
    group-hover:bg-[var(--badge-color)]
    group-hover:text-white
  "
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="w-[calc(100%-var(--width))] pl-[20px]">
                      {renderHtml(item?.content, "text_editor first:[&>*]:mt-0 [&>p:first-of-type]:mb-0 mb-0 text-white")}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
