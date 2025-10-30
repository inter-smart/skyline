"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InsightSection from "./InsightSection";
import InterviewSection from "./InterviewSection";
import AwardSection from "../about/AwardSection";
import YouTubeGallerySection from "./YouTubeGallerySection";

const tabButton = `text-[7px] sm:text-[8px] md:text-[10px] 2xl:text-[12px] 3xl:text-[18px] text-[rgba(33,33,33,0.56)] uppercase tracking-wider flex items-center justify-center
         rounded-[0px] h-[40px] lg:h-[45px] xl:h-[60px] 2xl:h-[70px] 3xl:h-[90px] shadow-none font-normal border-[#919193] border-r border-top-0 border-l-0 last-of-type:border-r-0
         data-[state=active]:text-[#212121]  data-[state=active]:underline data-[state=active]:font-medium data-[state=active]:shadow-none md:px-[20px] !w-auto sm:w-[calc(100%/4)] `;

export default function NewsSection({ awards, interviews, insightTypes }) {
  return (
    <>
      <section className="relative">
        <Tabs defaultValue={insightTypes[0].type} className="w-full">
          <TabsList className="flex flex-wrap w-full items-center bg-transparent !h-auto p-0">
            {insightTypes?.map((insightType, index) => (
              <TabsTrigger value={insightType.type} key={index} className={tabButton}>
                {insightType.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {insightTypes?.map((insightType, index) => (
            <TabsContent key={index} value={insightType.type}>
              {/* ✅ First Tab → Show Blogs + Interviews + Awards */}
              {index === 0 && (
                <>
                  <InsightSection type={insightType.slug} />
                  {/* <InterviewSection interviews={interviews} /> */}
                  <AwardSection about_cms={awards?.data} accreditation={awards?.awards} />
                </>
              )}

              {/* ✅ Videos Tab → YouTube */}
              {insightType.type === "video" && <YouTubeGallerySection type={insightType.slug} />}

              {/* ✅ All other tabs → Normal Insight Section */}
              {insightType.type !== "video" && index !== 0 && <InsightSection type={insightType.slug} />}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
