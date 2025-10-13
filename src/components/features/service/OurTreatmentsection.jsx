// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
// import { Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/thumbs";
// import "swiper/css/effect-fade";
// import { Heading } from "@/components/layout/Heading";
// import { Text } from "@/components/layout/Text";

// const treatmentData = [
//     {
//         title: "Systemic therapy",
//         list: ["Step 1", "Step 2", "Step 3", "Step 4"],
//     },
//     {
//         title: "Targeted therapy",
//         list: ["Step A", "Step B", "Step C"],
//     },
//     {
//         title: "Immunotherapy",
//         list: ["Step X", "Step Y", "Step Z"],
//     },
// ];

// export default function OurTreatmentsection({
//     title,
//     description,
// }) {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
//             <div className="container container-sm flex flex-wrap">
//                 {/* Left Column */}
//                 <div className="w-full md:w-[60%] xl:w-[50%] md:pr-[50px] mb-[30px]">
//                     <motion.div
//                         className="w-full p-[10px]"
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <div className="!font-medium !text-[#101010] mb-[5px] 3xl:mb-[10px]">About Skyline</div>
//                         <h2 className="text-3xl font-bold">{title}</h2>
//                         <p className="line-clamp-4">{description}</p>
//                     </motion.div>

//                     {/* Thumbnails */}
//                     <div className="mt-6">
//                         <Swiper
//                             modules={[Thumbs]}
//                             onSwiper={setThumbsSwiper}
//                             watchSlidesProgress
//                             spaceBetween={10}
//                             slidesPerView={4}
//                             direction="vertical"
//                             className="h-[300px]"
//                             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // <-- track active index
//                         >
//                             {treatmentData?.map((item, index) => (
//                                 <SwiperSlide key={index}>
//                                     <div
//                                         className={`flex items-center justify-between w-full px-4 py-3 border-b border-[#00335B] cursor-pointer hover:bg-gray-50 transition ${activeIndex === index ? "bg-gray-100" : ""
//                                             }`}
//                                         onClick={() => thumbsSwiper?.slideTo(index)} 
//                                     >
//                                         <div
//                                             className={`text-[12px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-center md:text-start w-[calc(100%-15px)] mb-0 ${activeIndex === index ? "text-blue-500" : "text-gray-700"
//                                                 }`}
//                                         >
//                                             {item.title}
//                                         </div>
//                                         <span className="w-[15px] h-[15px] flex items-center justify-center">
//                                             <Image
//                                                 src="/images/arrw.svg"
//                                                 alt="icon"
//                                                 width={13}
//                                                 height={13}
//                                                 className="w-full h-auto object-contain aspect-square"
//                                             />
//                                         </span>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                     </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-full md:w-[40%] xl:w-[50%]">
//                     <div className="w-full h-full relative p-[60px] overflow-hidden bg-base2">
//                         <div className="w-[42%] h-auto absolute right-0 top-0 -z-1">
//                             <Image
//                                 src="/images/traetmentBg.png"
//                                 alt="about icon"
//                                 width={670}
//                                 height={580}
//                                 className="w-full h-auto aspect-square"
//                             />
//                         </div>
//                         <Swiper
//                             modules={[Thumbs, EffectFade]}
//                             watchSlidesProgress
//                             effect="fade"
//                             thumbs={{ swiper: thumbsSwiper }}
//                             spaceBetween={10}
//                             slidesPerView={1}>
//                             {treatmentData?.map((item, index) => (
//                                 <SwiperSlide key={index} className="bg-[#00335B] opacity-0 transition-opacity duration-500 swiper-slide-active:opacity-100">
//                                     <div className="text-white relative z-3">
//                                         <Heading
//                                             as="h4"
//                                             size="heading4"
//                                             className="text-center xs:text-start font-medium text-white mb-[35px]"
//                                         >
//                                             {item.title}
//                                         </Heading>
//                                         <ul>
//                                             {item.list.map((list, liIndex) => (
//                                                 <li key={liIndex} className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px] mb-[8px]
//                                                     before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[17px] before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center
//                                                     before:bg-[url('/images/teartIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']">

//                                                     {list}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { Heading } from "@/components/layout/Heading";

const treatmentData = [
    { title: "Systemic therapy", list: ["Chemotherapy", "Immunotherapy", "Hormonal therapy"] },
    { title: "Targeted therapy", list: ["Targeted therapy1", "Targeted therapy2", "Targeted therapy3"] },
    { title: "Radiotherapy", list: ["Radiotherapy1", "Radiotherapy2", "Radiotherapy3"] },
    { title: "Palliative care", list: ["Palliative1", "Palliative2", "Palliative3"] },
];

export default function OurTreatmentsection({ title, description }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
            <div className="container container-sm flex flex-wrap">
                {/* Left Column */}
                <div className="w-full md:w-[60%] xl:w-[50%] md:pr-[50px] mb-[30px]">
                    <motion.div
                        className="w-full p-[10px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="!font-medium !text-[#101010] mb-[5px] 3xl:mb-[10px]">About Skyline</div>
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p className="line-clamp-4">{description}</p>
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="mt-6">
                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={setThumbsSwiper}
                            watchSlidesProgress
                            spaceBetween={10}
                            slidesPerView={4}
                            direction="vertical"
                            className="h-[300px]"
                        >
                            {treatmentData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`group flex items-center justify-between w-full px-4 py-3 border-b border-[#919193] cursor-pointer hover:text-base2 hover:border-[#00335B] transition
                      ${activeIndex === index ? "" : ""}`}
                                        onClick={() => thumbsSwiper?.slideTo(index)}
                                    >
                                        <div
                                            className={`text-[12px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-center md:text-start text-[#919193] w-[calc(100%-15px)] mb-0 
                        ${activeIndex === index ? "text-base2" : "border-[#00335B]"} group-hover:text-base2`}
                                        >
                                            {item.title}
                                        </div>
                                        <span className="w-[15px] h-[15px] flex items-center justify-center">
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
                <div className="w-full md:w-[40%] xl:w-[50%] overflow-hidden">
                    <div className="w-full h-full relative p-[60px] overflow-hidden bg-base2">
                        <div className="w-70%] h-auto absolute -right-[10%] top-0 z-2">
                            <Image
                                src="/images/traetmentBg.png"
                                alt="about icon"
                                width={670}
                                height={580}
                                className="w-full h-auto aspect-square"
                            />
                        </div>

                        <Swiper
                            modules={[Thumbs, EffectFade]}
                            thumbs={{ swiper: thumbsSwiper }}
                            effect="fade"
                            spaceBetween={10}
                            slidesPerView={1}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {treatmentData.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="bg-[#00335B] opacity-0 transition-opacity duration-500 swiper-slide-active:opacity-100"
                                >
                                    <div className="text-white relative z-3">
                                        <Heading
                                            as="h4"
                                            size="heading4"
                                            className="text-center xs:text-start font-medium text-white mb-[35px]"
                                        >
                                            {item.title}
                                        </Heading>
                                        <ul>
                                            {item.list.map((list, liIndex) => (
                                                <li
                                                    key={liIndex}
                                                    className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal pl-[25px] mb-[8px]
                            before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[17px] before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center
                            before:bg-[url('/images/teartIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                                                >
                                                    {list}
                                                </li>
                                            ))}
                                        </ul>
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
