"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Isotope from "isotope-layout";
import { motion } from "framer-motion";

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
];

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
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[40px]"
        >
          <h6 className="text-[12px] uppercase text-[#671448] tracking-widest mb-[10px]">
            Videos
          </h6>
          <h2 className="text-[26px] lg:text-[32px] xl:text-[40px] font-medium text-[#212121] leading-tight">
            Skyline Hospital YouTube Channel
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-[10px] mb-[40px]">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterKey(filter.value)}
              className={`px-[20px] py-[10px] text-[12px] 2xl:text-[14px] rounded-[6px] border border-[#E4E4E4] uppercase tracking-wider font-medium transition-all ${
                filterKey === filter.value
                  ? "bg-[#671448] text-white"
                  : "text-[#212121] hover:bg-[#f4f4f4]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`video-item ${video.category} bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-all`}
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={530}
                  height={275}
                  className="w-full h-auto object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all">
                  <button className="w-[60px] h-[60px] bg-[#FF0000] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-[15px]">
                <h3 className="text-[16px] xl:text-[18px] font-medium text-[#212121] mb-[5px]">
                  {video.title}
                </h3>
                <p className="text-[13px] text-gray-500">
                  Posted on – {video.date}
                </p>
                <span className="absolute bottom-[15px] right-[15px] text-[13px] text-gray-700">
                  {video.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-[50px]">
          <button className="px-[25px] py-[10px] border border-[#671448] text-[#671448] rounded-[4px] text-[13px] uppercase font-medium tracking-wider hover:bg-[#671448] hover:text-white transition-all">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
