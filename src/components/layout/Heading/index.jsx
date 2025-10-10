"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  offscreen: {
    y: 120,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOut", // fixed typo
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Subtitle classes
const subTitleClasses =
  "text-[12px] 2xl:text-[14px] 3xl:text-[18px] !text-[#671448] !font-normal uppercase tracking-wider mb-[20px]";

// Heading size classes
const sizes = {
  heading1:
    "text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-[#212121] font-unna font-normal leading-[34px] xl:leading-[40px] 2xl:leading-[47px] 3xl:leading-[60px] mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]",
  heading2:
    "text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] font-semibold leading-[1.2] text-black relative after:absolute after:content-[''] after:bottom-[4px] after:3xl:bottom-[7px] after:m-[auto_10px] after:p-[3px] after:w-[5px] after:h-[5px] after:3xl:w-[7px] after:3xl:h-[7px] after:rounded-full after:bg-[#F67436]",
  heading3:
    "text-[16px] sm:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[35px] 3xl:text-[46px] font-medium leading-[1.2]",
  heading4:
    "text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] 3xl:text-[30px] font-medium leading-[1.2]",
  heading5:
    "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-[#1C1C1C] font-medium leading-[1.2]",
  heading6:
    "text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium leading-[1.2]",
};

// Heading component
const Heading = ({ children, className = "", size = "heading1", as, ...restProps }) => {
  const Component = as || "h1";

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Component className={`${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

// Subtitle component
const SubTitle = ({ children, className = "", size="subTitleClasses" , as, ...restProps }) => {
  const Component = as || "p";

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Component className={`${className} ${subTitleClasses}`} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export { Heading, SubTitle };
