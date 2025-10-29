
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heading, SubTitle } from "@/components/layout/Heading";

export default function CareerSection() {
    // Fade-up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section class="relative w-full h-full py-[60px] lg:py-[90px] xl:py-[110px] 2xl:py-[130px] 3xl:py-[170px]  min-h-[250px] lg:min-h-[320px] xl:min-h-[450px] 2xl:min-h-[540px] 3xl:min-h-[690px] 
            after:absolute after:top-0 after:left-0 after:w-full after:h-full 
            max-md:after:bg-[rgba(0,0,0,0.5)]
            md:after:bg-[linear-gradient(270deg,rgba(0,0,0,0.7)_23.07%,rgba(0,0,0,0.35)_34.69%,rgba(0,0,0,0)_53.34%)] 
            after:content-[''] after:z-0">
            {/* Background image */}
            <Image
                src="/images/carrerbanner.jpg"
                className="object-cover absolute top-0 left-0 w-full h-full"
                priority
                width={1920}
                height={460}
                alt="appointmentBanner"
            />

            <div className="container w-full h-full flex items-center lg:w-4/5 md:ml-auto relative z-1">
                <motion.div
                    className="max-w-[350px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px] relative md:ml-auto [&>*]:!text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SubTitle size="SubTitle" as="div" className="!text-white !mb-[10px] 3xl:!mb-[15px] leading-none">
                        CAREER AT SKYLINE
                    </SubTitle>
                    <Heading size="heading1" as="div" className="text-white leading-none">
                        Shape the Future
                        of Patient Care with Us
                    </Heading>
                    <p>Your health and well-being are our top priorities. Experience world-class healthcare
                        with a personal touch in the heart of Coventry. </p>
                    <Link href="" className="bg-[#671448] btn-base1 hover min-w-[110px] 2xl:min-w-[130px] 3xl:min-[165px]" aria-label="apply_btn">APPLY NOW</Link>
                </motion.div>
            </div>
        </section>
    );
}
