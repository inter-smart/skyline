"use client";
 
import { motion } from "framer-motion"; 
import { Heading, SubTitle } from "@/components/layout/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InsightCard from "@/components/common/InsightCard";
import { Button } from "@/components/ui/button"

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


const tabButton = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-black font-normal flex items-center justify-center border border-[#E4E4E4]
 rounded-[6px] lg:min-w-[78px] 2xl:min-w-[95px] 3xl:min-w-[115px] 
 h-[25px] 2xl:h-[31px] 3xl:h-[40px] shadow-none 
 data-[state=active]:bg-base1 data-[state=active]:text-white px-[20px]`



export default function InsightSection() {
    return (
        <section className="py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
            <div className="container">
                <Tabs defaultValue="all" className="w-full">
                    <div className="flex flex-wrap items-end justify-between -m-[5px] mb-[10px] md:mb-[15px] lg:mb-[25px]">
                        <div className='w-full md:w-auto p-[5px]'>
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
                                    Health News<br className="max-md:hidden" />
                                    & Hospital Updates
                                </Heading>
                            </motion.div>
                        </div>
                        <div className="w-auto p-[5px]">
                            <TabsList className="flex flex-wrap items-center bg-transparent -m-[5px] !h-auto">
                                <div className="p-[5px]">
                                    <TabsTrigger value="all" className={`${tabButton}`}>
                                        All Posts
                                    </TabsTrigger>
                                </div>
                                <div className="p-[5px]">
                                    <TabsTrigger value="News & Updates " className={`${tabButton}`}>
                                        News & Updates
                                    </TabsTrigger>
                                </div>
                                <div className="p-[5px]">
                                    <TabsTrigger value="Annoncements" className={`${tabButton}`}>
                                        Annoncements
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                        </div>
                    </div>


                    {/* All News Tab */}
                    <TabsContent value="all" className="space-y-6">
                        <div className="flex flex-wrap -m-[6px] md:-m-[8px] lg:-m-[15px] xl:-m-[20px] 2xl:-m-[25px] 3xl:-m-[30px] !mb-[15px]">
                            {insights.map((insight) => (
                                <div className="w-full 2xs:w-1/2 sm:w-1/3 p-[6px] md:p-[8px] lg:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px]" key={insight.id}>
                                    <InsightCard insight={insight} />
                                </div>
                            ))}
                        </div>
                            <Button className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 border
                             border-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center
                          h-[32px] 2xl:h-[40px] 3xl:h-[50px] hover m-auto bg-transparent cursor-pointer rounded-[3px] hover:text-white">LOAD MORE</Button>
                    </TabsContent>

                    {/* Surgery Tab */}
                    <TabsContent value="surgery" className="space-y-6">
                        cc
                    </TabsContent>

                    {/* Nutrition Tab */}
                    <TabsContent value="nutrition" className="space-y-6">
                        cccc
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
