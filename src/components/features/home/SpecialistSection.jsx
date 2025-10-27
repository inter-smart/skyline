"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";
import { renderHtml } from "@/utils/parseHtml";

const serviceItems = [
  {
    title: "ENT (Ear, Nose & Throat)",
    mainTitle: "ENT (Ear, Nose & Throat)",
    image: "/images/service2.jpg",
    features: [
      "Same-day and next-day appointments",
      "30–60 minute consultations",
      "Direct access to on-site diagnostics",
      "Women’s & men’s health services",
    ],
  },
  {
    title: "Private GP Booking",
    mainTitle: "Private GP Booking",
    image: "/images/service1.jpg",
    features: [
      "Same-day and next-day appointments",
      "30–60 minute consultations",
      "Direct access to on-site diagnostics",
      "Women’s & men’s health services",
    ],
  },

  {
    title: "Neurology",
    mainTitle: "Skin & Hair Treatments",
    image: "/images/service3.jpg",
    features: ["Acne and scar treatments", "Laser hair removal", "Anti-aging solutions", "Skin allergy tests"],
  },
  {
    title: "Orthopaedics & Sports Medicine",
    mainTitle: "Child Care & Vaccinations",
    image: "/images/service4.jpg",
    features: ["Newborn to adolescent care", "Vaccination programs", "Nutritional guidance", "Growth tracking"],
  },
  {
    title: "Ophthalmology",
    mainTitle: "Ophthalmology",
    image: "/images/service5.jpg",
    features: ["Newborn to adolescent care", "Vaccination programs", "Nutritional guidance", "Growth tracking"],
  },
  {
    title: "Dermatology",
    mainTitle: "Dermatology",
    image: "/images/service6.jpg",
    features: ["Newborn to adolescent care", "Vaccination programs", "Nutritional guidance", "Growth tracking"],
  },
  {
    title: "Gynecology",
    mainTitle: "Gynecology",
    image: "/images/service7.jpg",
    features: ["Newborn to adolescent care", "Vaccination programs", "Nutritional guidance", "Growth tracking"],
  },
  {
    title: "Orthopaedics & Sports Medicine",
    mainTitle: "Child Care & Vaccinations",
    image: "/images/service8.jpg",
    features: ["Newborn to adolescent care", "Vaccination programs", "Nutritional guidance", "Growth tracking"],
  },
];

export default function SpecialistSection({ title, pre_title, description, services = serviceItems }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-[50px_70px] overflow-hidden bg-[#FBFBFB]">
      <div className="container">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-[35px] 2xl:mb-[50px] 3xl:mb-[90px] flex-wrap gap-[20px]">
          <motion.div className="max-w-[650px]" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <SubTitle size="SubTitle" as="div">
              {pre_title || "Specialist Services"}
            </SubTitle>
            {/* <Heading size="heading1" as="div" className="!mb-0">
              Our Specialist <br />
              Healthcare Services
            </Heading> */}
            <Heading size="heading1" as="div" className="!mb-0">
              {title || "Our Specialist Healthcare Services"}
            </Heading>
          </motion.div>

          <motion.div
            className="line-clamp-4 max-w-[326px] xl:max-w-[400px] 2xl:max-w-[468px] 3xl:max-w-[600px] mb-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {renderHtml(description) ||
              "Comprehensive medical care across multiple specialties, delivered by expert consultants using state-of-the-art facilities"}
          </motion.div>

          <Link href="/services" className="btn-base1 hover" aria-label="know_more">
            View All Services
          </Link>
        </div>

        {/* Swiper Section */}
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            watchSlidesProgress={true}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onBeforeInit={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              prevEl: ".navbts-prev",
              nextEl: ".navbts-next",
            }}
            className="relative w-full h-[300px] md:h-[350px] xl:h-[440px] 2xl:h-[520px] 3xl:h-[650px] serviceSlider
                        md:max-w-[75%] xl:max-w-[90%] 3xl:max-w-[80%] !overflow-visible"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {services?.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`!flex items-center transition-all duration-500 not:[.swiper-slide-visible]:!h-[470px] ${
                  activeIndex === index ? "scaleX-125 z-20" : "scale-95"
                }`}
              >
                <div
                  className={`relative w-full rounded-[6px] overflow-hidden p-[20px] flex items-end justify-center transition-all duration-500 
                                        after:absolute after:bottom-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-b after:from-[40%] after:to-[120%] after:from-[rgba(0,0,0,0.1)] after:to-[rgba(0,0,0)] after:content-['']
                                        ${activeIndex === index ? "h-full" : "h-[250px] xl:h-[320px] 2xl:h-[375px] 3xl:h-[470px]"}`}
                >
                  {/* Title (only visible on inactive slides) */}
                  <div
                    className={`text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-white realtive z-20 font-medium transition-all duration-500 ${
                      activeIndex === index ? "opacity-0 hidden" : "opacity-100 visible"
                    }`}
                  >
                    {item.title}
                  </div>

                  {/* Background Image */}
                  <Image src={item.image} alt={item.title} width={560} height={650} className="object-cover absolute inset-0 w-full h-full" />

                  {/* Info Card (visible only for active slide) */}
                  <div
                    className={`relative w-full bg-[rgba(255,255,255,0.85)] rounded-[6px] p-[20px_15px] xl:p-[25px_20px] 2xl:p-[30px_25px] 3xl:p-[30px_40px_20px] transition-all z-20 duration-500 ${
                      activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px] hidden"
                    }`}
                  >
                    <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-medium mb-[15px] xl:mb-[20px] capitalize">
                      {item.mainTitle}
                    </div>
                    {/* <ul>
                      {item.features.map((feature, i) => (
                        <li
                          key={i}
                          className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px] mb-[8px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[17px] before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul> */}
                    <Link
                      href="/"
                      className="text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#671448] font-medium uppercase flex items-center transition-all mt-[20px]
                                         group duration-200 hover:text-base2 hover:tracking-[1px]"
                    >
                      View Details
                      <div className="w-[13px] h-[13px] flex ml-[10px]">
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
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center absolute top-[30px] bottom-0 w-full left-[-30px] sm:left-[-50px] m-auto ">
            <button
              className="navbts-prev absolute left-[15px]  -translate-y-1/2 z-20 bg-white 
                                   w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px]
                                    flex items-center justify-center cursor-pointer group hover:bg-base1"
            >
              <svg className="w-full h-full group-hover:fill-white fill-base1" viewBox="0 0 8 6">
                <path
                  d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 
                                3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 
                                2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 
                                0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449C2.69626 0.861856 2.8655 1.03283 2.78099 0.947449Z"
                />
              </svg>
            </button>
            <button
              className=" navbts-next absolute right-[-45px] sm:right-[-65px] -translate-y-1/2 z-10 bg-white 
                              w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px]
                              flex items-center justify-center cursor-pointer group hover:bg-base1"
            >
              <svg className="w-full h-full group-hover:fill-white  fill-base1" viewBox="0 0 8 6" fill="none">
                <path
                  d="M5.15236 0.947449C5.06785 1.03283 5.06763 1.1715 5.15236 1.25688L6.9277 3.04999L0.950083 3.04999C0.830465 3.04999 0.733398 
                                3.14794 0.733398 3.26886C0.733398 3.38977 0.830483 3.48772 0.950083 3.48772L6.9277 3.48772L5.15258 5.28084C5.06785 5.36621 5.06785 
                                5.50489 5.15258 5.59026C5.23731 5.67564 5.37447 5.67564 5.45898 5.59026L7.604 3.42358C7.68764 3.33907 7.68764 3.19845 7.604 
                                3.11393L5.45898 0.94725C5.37425 0.861855 5.23709 0.861856 5.15236 0.947449C5.23709 0.861856 5.06785 1.03283 5.15236 0.947449Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
