
 
import { Heading, SubTitle } from "@/components/layout/Heading";
import Image from "next/image";

export default function OverviewSection() {
    return (
        <section className="py-[30px_60px]">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        <SubTitle
                            size="SubTitle"
                            as="div" >
                            Overview
                        </SubTitle>
                        <Heading
                            size="heading1"
                            as="div"  >
                            Our Vision & Mission
                        </Heading>
                        <p className="line-clamp-4">
                            Your health and well-being are our top priorities. Experience world-class healthcare with a
                            personal touch in the heart of Coventry. Your health and well-being are our top priorities.
                            Experience world-class healthcare with a personal touch in the heart of Coventry.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-base2 p-[20px_30px] rounded-[4px] overflow-hidden">
                                    <div className="w-[65px] h-[65px] rounded-full mb-[15px] flex items-center justify-center ">
                                        <Image src="/images/overview_icon.png" className="w-full h-full object-cover" width="65" height="65" alt="image" />
                                    </div>
                                    <div className="text-[18px] text-white font-medium">Mission</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
