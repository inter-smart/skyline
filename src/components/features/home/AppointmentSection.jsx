"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { renderHtml, renderHtmlWithClassName } from "@/utils/parseHtml";
import Link from "next/link";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { useRouter } from "next/navigation";

export default function AppointmentSection({ sub_title, title, description, path, alt, button_text, button_link }) {
  const { openDialog } = useBookingFormContext();
  const router = useRouter();

  const handleClick = (text, link) => {
    if (text) {
      router.push(link || "/");
    } else {
      openDialog();
    }
  };

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full h-full py-[90px] xl:py-[110px] 2xl:py-[130px] 3xl:py-[165px]
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] 
              after:bg-gradient-to-r after:from-[rgba(0,0,0,0.5)] after:to-[rgba(0,0,0,0.2)] after:z-[1]"
                >
      {/* Background image */}

      <Image src={path} className="object-cover absolute top-0 left-0 w-full h-full" priority width={1920} height={460} alt={alt} />

      <div className="container w-full h-full flex items-center relative z-20">
        <motion.div
          className="max-w-[470px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase font-normal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"
            variants={fadeUp}
          >
            {sub_title}
          </motion.p>

          <motion.h2
            className="text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[66px] text-white font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]"
            variants={fadeUp}
          >
            {title}
          </motion.h2>

          <motion.div
            className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal max-w-[75%] mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]"
            variants={fadeUp}
          >
            {renderHtml(description, "[&>p]:text-white")}
          </motion.div>

          <motion.button
            className="btn-base1 hover min-w-[135px] xl:min-w-[170px] 2xl:min-w-[200px] 3xl:min-w-[250px] tracking-wide"
            aria-label="appointment"
            onClick={() => handleClick(button_text, button_link)}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button_text || "Book an Appointment"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
