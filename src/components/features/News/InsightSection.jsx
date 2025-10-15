"use client";

import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";
import InsightCard from "@/components/common/InsightCard";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const insights = [
  {
    id: 1,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 10, 2025",
    title: "The Latest Advances in Cataract Surgery",
    link: "/",
  },
  {
    id: 2,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 10, 2025",
    title: "10 Heart-Healthy Foods to Include in Your Diet",
    link: "/",
  },
  {
    id: 3,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 10, 2025",
    title: "Understanding Joint Replacement Surgery",
    link: "/",
  },
  {
    id: 4,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 12, 2025",
    title: "Hospital Achieves New Safety Milestone",
    link: "/",
  },
  {
    id: 5,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 14, 2025",
    title: "The Benefits of a Balanced Diet",
    link: "/",
  },
];

const filters = [
  { label: "All Posts", value: "*" },
  { label: "News & Updates", value: ".news" },
  { label: "Surgery", value: ".surgery" },
  { label: "Nutrition", value: ".nutrition" },
];

const filterButton = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-black font-normal flex items-center justify-center border border-[#E4E4E4]
rounded-[6px] lg:min-w-[78px] 2xl:min-w-[95px] 3xl:min-w-[115px] 
h-[25px] 2xl:h-[31px] 3xl:h-[40px] shadow-none px-[20px]`;

export default function InsightSection() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".insight-grid", {
      itemSelector: ".insight-item",
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
    <section className="py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between -m-[5px] mb-[10px] md:mb-[15px] lg:mb-[25px]">
          <div className="w-full md:w-auto p-[5px]">
            <motion.div
              className="max-w-[350px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px] relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                Insights
              </SubTitle>
              <Heading size="heading1" as="div" className="leading-none !mb-0">
                Health News
                <br className="max-md:hidden" />
                & Hospital Updates
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
                    className={`${filterButton} ${
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

        {/* Insight Grid */}
        <div className="insight-grid flex flex-wrap -m-[6px] md:-m-[8px] lg:-m-[15px] xl:-m-[20px] 2xl:-m-[25px] 3xl:-m-[30px]">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`insight-item w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] lg:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px] ${insight.category}`}
            >
              <InsightCard insight={insight} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-[20px] text-center">
          <Button className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 border
                             border-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center
                             h-[32px] 2xl:h-[40px] 3xl:h-[50px] hover m-auto bg-transparent cursor-pointer rounded-[3px] hover:text-white">
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
