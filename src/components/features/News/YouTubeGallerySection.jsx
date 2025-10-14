"use client"; 

import { motion } from "framer-motion";
import Image from "next/image"; 
import { Heading, SubTitle } from "@/components/layout/Heading";
import { useEffect, useRef, useState } from "react"; 
import Isotope from "isotope-layout";

const videos = [
    {
        id: 1,
        category: "consultant",
        title: "Consultant Introductions",
        date: "25 Sep 2024",
        thumbnail: "/images/video1.jpg",
        time: "4:02",
    },
    {
        id: 2,
        category: "testimonial",
        title: "Patient Testimonials & Recovery Stories",
        date: "25 Sep 2024",
        thumbnail: "/images/video2.jpg",
        time: "4:02",
    },
    {
        id: 3,
        category: "explainer",
        title: "Procedure Explainers & Walkthroughs",
        date: "25 Sep 2024",
        thumbnail: "/images/video3.jpg",
        time: "4:02",
    },
    {
        id: 4,
        category: "consultant",
        title: "Consultant Introductions",
        date: "25 Sep 2024",
        thumbnail: "/images/video4.jpg",
        time: "4:02",
    },
    {
        id: 5,
        category: "testimonial",
        title: "Patient Testimonials & Recovery Stories",
        date: "25 Sep 2024",
        thumbnail: "/images/video5.jpg",
        time: "4:02",
    },
    {
        id: 6,
        category: "explainer",
        title: "Procedure Explainers & Walkthroughs",
        date: "25 Sep 2024",
        thumbnail: "/images/video6.jpg",
        time: "4:02",
    },
];

const filters = [
    { label: "All Videos", value: "*" },
    { label: "Consultant Introductions", value: ".consultant" },
    { label: "Patient Testimonials", value: ".testimonial" },
    { label: "Explainers & Walkthroughs", value: ".explainer" },
    { label: "Educational Videos", value: ".educational" },
];


const tabButton = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-black font-normal flex items-center justify-center border border-[#E4E4E4]
 rounded-[6px] lg:min-w-[78px] 2xl:min-w-[95px] 3xl:min-w-[115px] 
 h-[25px] 2xl:h-[31px] 3xl:h-[40px] shadow-none 
 data-[state=active]:bg-base1 data-[state=active]:text-white px-[10px]`

export default function YouTubeGallerySection() {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        isotope.current = new Isotope(".video-grid", {
            itemSelector: ".video-item",
            layoutMode: "fitRows",
        });

        return () => isotope.current?.destroy();
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: "*" })
                : isotope.current.arrange({ filter: filterKey });
        }
    }, [filterKey]);

    return (
        <section className="py-[80px] px-[60px] bg-white">
            <div className="container">
                <div className="flex flex-wrap items-end justify-between -m-[5px] mb-[10px] md:mb-[15px] lg:mb-[25px]">
                    <div className='w-full xl:w-auto p-[5px]'>
                        <motion.div
                            className="xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px] relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                                VIDEOS
                            </SubTitle>
                            <Heading size="heading1" as="div" className="leading-none !mb-0">
                                Skyline Hospital<br className="max-xl:hidden" />
                               YouTube Channel
                            </Heading>
                        </motion.div>
                    </div>
                    <div className="w-auto p-[5px]">
                        <div className="flex flex-wrap items-center bg-transparent -m-[5px] !h-auto">
                            {filters.map((filter) => (
                                <div className="p-[5px]">
                                    <button
                                        key={filter.value}
                                        onClick={() => setFilterKey(filter.value)}
                                        className={` ${tabButton} ${filterKey === filter.value
                                            ? "bg-[#671448] text-white"
                                            : "text-[#212121] hover:bg-[#f4f4f4]"
                                            }`}
                                    >
                                        {filter.label}
                                    </button>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>  
                {/* Video Grid */}
                <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className={`video-item ${video.category} w-full h-full flex transition-all`}
                        >

                           
 
                        </div>
                    ))}
                </div>

                 
            </div>
        </section>
    );
}
