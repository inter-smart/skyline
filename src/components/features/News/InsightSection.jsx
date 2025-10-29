"use client";

import { motion } from "framer-motion";
import { Heading, SubTitle } from "@/components/layout/Heading";
import InsightCard from "@/components/common/InsightCard";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchFromAPI } from "@/lib/api";

// ✅ Load Isotope only on the client to avoid SSR issues
let Isotope;
if (typeof window !== "undefined") {
  Isotope = require("isotope-layout");
}

const filterButton = `
  text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-black font-normal flex items-center justify-center 
  border border-[#E4E4E4] rounded-[6px] lg:min-w-[78px] 2xl:min-w-[95px] 3xl:min-w-[115px] 
  h-[25px] 2xl:h-[31px] 3xl:h-[40px] shadow-none px-[20px]
`;

export default function InsightSection({ type = "blogs" }) {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [filters, setFilters] = useState([]);
  const [headings, setHeadings] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const PER_PAGE = 6;

  // ✅ Fetch filters on mount
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const { data } = await fetchFromAPI(`blog-category?slug=${type}`);
        setFilters(data.tags);
        setHeadings(data);
      } catch (err) {
        console.error("Failed to fetch filters:", err);
        setError("Failed to load filters");
      }
    };

    fetchFilters();
  }, []);

  // ✅ Fetch initial blogs
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const category = filterKey === "*" ? "" : filterKey;
        const { data } = await fetchFromAPI(`blog-list?slug=${type}&per_page=${PER_PAGE}&page=${page}&tag=${category}`);

        console.log(data);

        if (page === 1) {
          setBlogs(data?.blogs || []);
        } else {
          setBlogs((prev) => [...prev, ...data?.blogs]);
        }

        setHasMore(data?.pagination?.total > PER_PAGE * page);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs");
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    };

    fetchVideos();
  }, [page, filterKey]);

  // ✅ Initialize Isotope after blogs load
  useEffect(() => {
    if (typeof window === "undefined" || !Isotope || isLoading) return;

    const grid = document.querySelector(".insight-grid");
    if (!grid) return;

    // Destroy existing instance
    if (isotope.current) {
      isotope.current.destroy();
    }

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      isotope.current = new Isotope(grid, {
        itemSelector: ".insight-item",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: "0.3s",
      });
    }, 100);

    return () => {
      isotope.current?.destroy();
      isotope.current = null;
    };
  }, [blogs, isLoading]);

  // ✅ Apply filter
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({ filter: "*" }) : isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  // ✅ Handle filter change
  const handleFilterChange = (value) => {
    setFilterKey(value);
    setPage(1);
    setBlogs([]);
    setIsLoading(true);
  };

  // ✅ Handle load more
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setPage((prev) => prev + 1);
  };

  return (
    <>
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
                  {headings?.pre_heading}
                </SubTitle>
                <Heading size="heading1" as="div" className="leading-none !mb-0">
                  {headings?.heading}
                </Heading>
                {/* <Heading size="heading1" as="div" className="leading-none !mb-0">
                  Health News
                  <br className="max-md:hidden" />& Hospital Updates
                </Heading> */}
              </motion.div>
            </div>

            {/* Filters */}
            <div className="w-auto p-[5px]">
              <div className="flex flex-wrap items-center bg-transparent -m-[5px] !h-auto">
                {filters.length > 0 ? (
                  <>
                    <div className="p-[5px]">
                      <button
                        onClick={() => handleFilterChange("*")}
                        disabled={isLoading}
                        className={`${filterButton} ${filterKey === "*" ? "bg-[#671448] text-white" : "text-[#212121] hover:bg-[#f4f4f4]"} ${
                          isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {"All"}
                      </button>
                    </div>
                    {filters.map((filter) => (
                      <div className="p-[5px]" key={filter.id}>
                        <button
                          onClick={() => handleFilterChange(filter.id)}
                          disabled={isLoading}
                          className={`${filterButton} ${filterKey === filter.id ? "bg-[#671448] text-white" : "text-[#212121] hover:bg-[#f4f4f4]"} ${
                            isLoading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {filter.title}
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  // Skeleton for filters
                  <>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div className="p-[5px]" key={i}>
                        <Skeleton className="h-[25px] 2xl:h-[31px] 3xl:h-[40px] w-[78px] 2xl:w-[95px] 3xl:w-[115px] rounded-[6px]" />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Insight Grid */}
          <div className="insight-grid flex flex-wrap -m-[6px] md:-m-[8px] lg:-m-[15px] xl:-m-[20px] 2xl:-m-[25px] 3xl:-m-[30px]">
            {isLoading && blogs.length === 0 ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] 3xl:p-[15px]">
                    <Skeleton className="w-full aspect-video rounded-[6px]" />
                  </div>
                ))}
              </>
            ) : (
              blogs?.map((insight) => (
                <div
                  key={insight.id}
                  className={`insight-item w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] lg:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px] ${insight.category}`}
                >
                  <InsightCard insight={insight} />
                </div>
              ))
            )}
            {isLoadingMore &&
              Array.from({ length: 6 }).map((_, index) => (
                <div key={`loading-${index}`} className="w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] 3xl:p-[15px]">
                  <Skeleton className="w-full aspect-video rounded-[6px]" />
                </div>
              ))}
          </div>

          {/* Load More Button */}
          {!isLoading && hasMore && blogs.length > 0 && (
            <div className="mt-[20px] text-center">
              <Button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 border
                           border-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center
                           h-[32px] 2xl:h-[40px] 3xl:h-[50px] m-auto bg-transparent cursor-pointer rounded-[3px]
                           hover:bg-[#671448] hover:text-white transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingMore ? "LOADING..." : "LOAD MORE"}
              </Button>
            </div>
          )}

          {/* No More Videos */}
          {!isLoading && !hasMore && blogs.length > 0 && <div className="mt-[20px] text-center text-gray-500 text-sm">No more blogs to load</div>}

          {/* No Results */}
          {!isLoading && blogs.length === 0 && <div className="text-center py-10 text-gray-500">No blogs found for this category</div>}
        </div>
      </section>
    </>
  );
}
