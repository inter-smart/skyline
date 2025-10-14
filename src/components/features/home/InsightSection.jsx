"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";

export default function InsightSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const insights = [
    {
      id: 1,
      image: "/images/insight1.jpg",
      date: "November 10, 2025",
      title: "The Latest Advances in Cataract Surgery",
      link: "/",
    },
    {
      id: 2,
      image: "/images/insight2.jpg",
      date: "November 10, 2025",
      title: "10 Heart-Healthy Foods to Include in Your Diet",
      link: "/",
    },
    {
      id: 3,
      image: "/images/insight3.jpg",
      date: "November 10, 2025",
      title: "Understanding Joint Replacement Surgery",
      link: "/",
    },
    // Add more insights here
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[110px] bg-white">
      <div className="container">
        {/* Heading */}
        <div className="flex items-end justify-between mb-[35px] lg:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px] flex-wrap gap-[20px]">
          <div className="max-w-[650px]">
            <SubTitle
              size="SubTitle"
              as="div"
            >
              Insights
            </SubTitle>
            <Heading
              size="heading1"
              as="div"
              className="!mb-0"
            >
              Health <br />
              Insights & News
            </Heading>


          </div>
          <Link
            href="/"
            aria-label="View All Insights"
            className="btn-base1 hover min-[105px] 3xl:min-w-[150px]"
          >
            View All
          </Link>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          className="relative w-full"
          breakpoints={{
            478: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            1280: { slidesPerView: 3, spaceBetween: 50 },
            1536: { slidesPerView: 3, spaceBetween: 60 },
          }}
        >
          {insights.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={item.link} className="w-full h-full group">
                  {/* Image */}
                  <div className="w-full aspect-[530/275] mb-[15px] 3xl:mb-[20px] overflow-hidden rounded-[6px]">
                    <Image
                      src={item.image}
                      className="w-full h-full object-cover transition-all duration-150 group-hover:scale-[1.1]"
                      width={530}
                      height={275}
                      alt={item.title}
                    />
                  </div>

                  {/* Date */}
                  <div
                    className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#313131] font-light pl-[10px] relative 
                    before:absolute before:top-[4px] before:2xl:top-[8px] before:3xl:top-[10px] before:left-0 before:content-[''] 
                    before:w-[4px] before:h-[4px] before:rounded-full mb-[10px] 3xl:mb-[15px] before:bg-[#313131]"
                  >
                    {item.date}
                  </div>

                  {/* Title */}
                  <div className="text-[13px] lg:text-[15px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-normal capitalize lg:max-w-[75%] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                    {item.title}
                  </div>

                  {/* Read More */}
                  <div className="border-[rgba(0,51,91,0.1)] border-t pt-[12px] 2xl:pt-[15px] 3xl:pt-[20px]">
                    <div className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] font-medium uppercase flex items-center transition-all duration-200 group-hover:text-base2 group-hover:tracking-[1px]">
                      Read More
                      <div className="w-[9px] lg:w-[13px] h-[9px] lg:h-[13px] flex mx-[10px]">
                        <svg
                          width="13"
                          height="9"
                          viewBox="0 0 13 9"
                          className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1"
                          fill="none"
                        >
                          <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
