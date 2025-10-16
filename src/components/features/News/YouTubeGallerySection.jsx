"use client";

import { motion } from "framer-motion";
import { SubTitle, Heading } from "@/components/layout/Heading";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// ✅ Load Isotope and imagesLoaded only on the client
let Isotope, imagesLoaded;
if (typeof window !== "undefined") {
  Isotope = require("isotope-layout");
  imagesLoaded = require("imagesloaded");
}

const youtubes = [
  { id: 1, category: "news", youtubeId: "jbct2ZM8Rj4?si=WWwQmBcnmpGwhiD9" },
  { id: 2, category: "consultant", youtubeId: "Muql4WIajH8?si=aW9UfnXJCWdxlrJr" },
  { id: 3, category: "patient", youtubeId: "V-JheO-yva8Nk?si=h8CBVOwL1Fik-I0S" },
  { id: 4, category: "explainers", youtubeId: "jbct2ZM8Rj4?si=WWwQmBcnmpGwhiD9" },
  { id: 5, category: "educational", youtubeId: "Muql4WIajH8?si=aW9UfnXJCWdxlrJr" },
  { id: 6, category: "patient", youtubeId: "V-JheO-yva8Nk?si=h8CBVOwL1Fik-I0S" },
];

const filters = [
  { label: "All Posts", value: "*" },
  { label: "News", value: ".news" },
  { label: "Consultant", value: ".consultant" },
  { label: "Patient", value: ".patient" },
  { label: "Explainers", value: ".explainers" },
  { label: "Educational", value: ".educational" },
];

const tabButton = `
  text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-black font-normal flex items-center justify-center
  border border-[#E4E4E4] rounded-[6px] lg:min-w-[78px] 2xl:min-w-[95px] 3xl:min-w-[115px]
  h-[25px] 2xl:h-[31px] 3xl:h-[40px] shadow-none px-[10px]
`;

export default function YouTubeGallerySection() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // ✅ Only run on client
    if (typeof window === "undefined" || !Isotope || !imagesLoaded) return;

    const grid = document.querySelector(".youtube-grid");
    if (!grid) return;

    isotope.current = new Isotope(grid, {
      itemSelector: ".youtube-item",
      layoutMode: "fitRows",
      percentPosition: true,
      transitionDuration: "0.3s",
    });

    imagesLoaded(grid, () => isotope.current.layout());

    return () => {
      isotope.current?.destroy();
      isotope.current = null;
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  return (
    <section className="py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between -m-[5px] mb-[25px]">
          <div className="w-full md:w-auto p-[5px]">
            <motion.div
              className="max-w-[350px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SubTitle size="SubTitle" as="div" className="!mb-[10px] leading-none">
                YouTube Videos
              </SubTitle>
              <Heading size="heading1" as="div" className="leading-none !mb-0">
                Health News
                <br className="max-md:hidden" /> & Hospital Updates
              </Heading>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="w-auto p-[5px]">
            <div className="flex flex-wrap items-center bg-transparent -m-[5px] !h-auto">
              {filters.map((filter) => (
                <div className="p-[5px]" key={filter.value}>
                  <button
                    onClick={() => setFilterKey(filter.value)}
                    className={`${tabButton} ${
                      filterKey === filter.value
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

        {/* YouTube Grid */}
        <div className="youtube-grid flex flex-wrap w-full -m-[6px] md:-m-[8px] 3xl:-m-[15px]">
          {youtubes.map((youtube) => (
            <div
              key={youtube.id}
              className={`youtube-item ${youtube.category} w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] 3xl:p-[15px]`}
            >
              <div className="w-full aspect-video overflow-hidden rounded-[6px]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtube.youtubeId}`}
                  title={`Video ${youtube.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-[20px] text-center">
          <Button
            className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 border
                       border-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center
                       h-[32px] 2xl:h-[40px] 3xl:h-[50px] hover m-auto bg-transparent cursor-pointer rounded-[3px]
                       hover:bg-[#671448] hover:text-white transition-all duration-300"
          >
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
