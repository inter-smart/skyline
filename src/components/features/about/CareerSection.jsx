
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heading, SubTitle } from "@/components/layout/Heading";
import parse from "html-react-parser";
import {  renderHtml, renderHtmlWithClassName } from "@/utils/parseHtml";

export default function CareerSection({about_cms}) {
    // Fade-up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative w-full h-full py-[60px] lg:py-[90px] xl:py-[110px] 2xl:py-[130px] 3xl:py-[170px]  min-h-[300px] lg:min-h-[420px] xl:min-h-[500px] 2xl:min-h-[670px] 3xl:min-h-[690px] 
            after:absolute after:top-0 after:left-0 after:w-full after:h-full 
            max-md:after:bg-[rgba(0,0,0,0.5)]
            md:after:bg-[linear-gradient(270deg,rgba(0,0,0,0.7)_23.07%,rgba(0,0,0,0.35)_34.69%,rgba(0,0,0,0)_53.34%)] 
            after:content-[''] after:z-0">
            {/* Background image */}
            <Image
                src={about_cms?.section8_image_value}
                className="object-cover absolute top-0 left-0 w-full h-full"
                priority
                width={1920}
                height={460}
                alt={about_cms?.section8_image_alt_text_value}
            />

            <div className="container w-full h-full flex items-center lg:w-4/5 md:ml-auto relative z-1">
                <motion.div
                    className="max-w-[350px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px] relative md:ml-auto [&>*]:!text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SubTitle size="SubTitle" as="div" className="!text-white !mb-[10px] 3xl:!mb-[15px] leading-none">
                        {about_cms?.section8_pre_title}
                    </SubTitle>
                    <Heading size="heading1" as="div" className="text-white leading-none">
                        {about_cms?.section8_title}
                    </Heading>
                    <div>{renderHtmlWithClassName(about_cms?.section8_description, "text-white")}</div>
                    <Link href="/career" className="bg-[#671448] btn-base1 hover min-w-[110px] 2xl:min-w-[130px] 3xl:min-[165px]" aria-label="apply_btn">APPLY NOW</Link>
                </motion.div>
            </div>
        </section>
    );
}
