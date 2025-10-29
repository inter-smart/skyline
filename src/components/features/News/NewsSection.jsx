"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InsightSection from "./InsightSection";
import InterviewSection from "./InterviewSection";
import AwardSection from "../about/AwardSection";
import YouTubeGallerySection from "./YouTubeGallerySection";

const tabButton = `text-[7px] sm:text-[8px] md:text-[10px] 2xl:text-[12px] 3xl:text-[18px] text-[rgba(33,33,33,0.56)] uppercase tracking-wider flex items-center justify-center
         rounded-[0px] h-[40px] lg:h-[45px] xl:h-[60px] 2xl:h-[70px] 3xl:h-[90px] shadow-none font-normal border-[#919193] border-r border-top-0 border-l-0 last-of-type:border-r-0
         data-[state=active]:text-[#212121]  data-[state=active]:underline data-[state=active]:font-medium data-[state=active]:shadow-none md:px-[20px] !w-auto sm:w-[calc(100%/4)] `;

export default function NewsSection({ awards, interviews }) {
  return (
    <>
      <section className="relative">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap w-full items-center bg-transparent !h-auto p-0">
            <TabsTrigger value="all" className={`${tabButton}`}>
              News & Updates
            </TabsTrigger>

            <TabsTrigger value="YouTube" className={`${tabButton}`}>
              YouTube Channel
            </TabsTrigger>

            <TabsTrigger value="Health" className={`${tabButton}`}>
              Health Blog
            </TabsTrigger>

            <TabsTrigger value="Events" className={`${tabButton}`}>
              Events, Talks & Webinars
            </TabsTrigger>
          </TabsList>

          {/* All News Tab */}
          <TabsContent value="all">
            <InsightSection type="blogs" />
            <InterviewSection interviews={interviews} />
            <AwardSection accreditation={awards} />
          </TabsContent>

          {/* Surgery Tab */}
          <TabsContent value="YouTube">
            <YouTubeGallerySection />
          </TabsContent>
          <TabsContent value="Health">
            <InsightSection type="health" />
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="Events">
            <InsightSection type="events" />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
