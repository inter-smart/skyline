"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function ContactBanner({ img, pre_title, title, description, alt }) {
  return (
    <section className="w-full relative py-[30px] flex items-center h-[300px] xl:h-[375px] 2xl:h-[450px] 3xl:h-[565px]">
      <Image src={img} alt={alt} width={1920} height={565} className="object-cover absolute top-0 left-0 w-full h-full" priority />

      <div className="container h-full w-full flex items-center relative ">
        <div className="w-full relative">
          <motion.div
            className="max-w-[480px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textAnimation}
          >
            <motion.h1
              className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#671448] uppercase font-normal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]`}
              variants={textAnimation}
            >
              {pre_title}
            </motion.h1>

            <motion.h2
              className={`text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[65px] "text-[#212121]"} font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]`}
              variants={textAnimation}
              transition={{ delay: 0.3 }}
            >
              {title || ""}
            </motion.h2>

            <motion.p
              className={`text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121]" mb-[20px] max-w-[650px]`}
              variants={textAnimation}
              transition={{ delay: 0.6 }}
            >
              {description || ""}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
