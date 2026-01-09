"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { renderHtml } from "@/utils/parseHtml";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { useRouter } from "next/navigation";

export default function AppointmentInner({ data, service_id }) {
  const { openDialog } = useBookingFormContext();
  const router = useRouter();

  const handleClick = (text, link) => {
    if (text) {
      router.push(link || "/");
    } else {
      openDialog({
        slug: service_id,
        source: "services",
      });
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
      {data?.image && (
        <Image
          src={data?.image}
          className="object-cover absolute top-0 left-0 w-full h-full"
          priority
          width={1920}
          height={460}
          alt={data?.imageAlt}
        />
      )}

      <div className="container w-full h-full flex items-center relative z-20">
        <motion.div className=" relative" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {data?.content && renderHtml(data?.content)}

          <div className="flex flex-wrap gap-[15px]">
            <motion.button
              className="btn-base1 hover min-w-[135px] xl:min-w-[170px] 2xl:min-w-[200px] 3xl:min-w-[250px] tracking-wide"
              aria-label="appointment"
              onClick={() => handleClick(null, data?.buttonUrl)}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"Book an Appointment"}
            </motion.button>
            {data?.buttonText && (
              <motion.button
                className="btn-base1 hover min-w-[135px] xl:min-w-[170px] 2xl:min-w-[200px] 3xl:min-w-[250px] bg-transparent border-1 border-[#671448] text-[#671448] tracking-wide hover:text-white"
                aria-label="appointment"
                onClick={() => handleClick(data?.buttonText, data?.buttonUrl)}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {data?.buttonText || "MAKE AN ENQUIRY"}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
