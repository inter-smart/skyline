"use client";

import { Heading, SubTitle } from "@/components/layout/Heading";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Car } from "lucide-react";

const contactCards = [
  {
    id: 1,
    icon: "location", // we will handle actual icon during UI
    title: "Location",
    details: ["2nd Floor, 23 Lockyer Street,", "Plymouth, PL1 2QW"],
  },
  {
    id: 2,
    icon: "clock",
    title: "Open Hours",
    details: ["Mon - Fri: 8 AM to 8 PM", "Sat: 9 AM to 4 PM"],
  },
  {
    id: 3,
    icon: "email",
    title: "Email",
    details: ["plymouth@massiscareagency.co.uk", "0782 444 39 49"],
  },
  {
    id: 4,
    icon: "car",
    title: "Parking",
    details: ["Free on Street", "Free on Premises"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const icons = {
  location: MapPin,
  clock: Clock,
  email: Mail,
  car: Car,
};

export default function ContactDetails({ pre_title, title }) {
  return (
    <section className="py-[50px_70px]">
      <div className="container">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-end justify-between mb-[35px] lg:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px] flex-wrap gap-[20px]">
            <div className="max-w-[650px]">
              <SubTitle size="SubTitle" as="div">
                {pre_title || "Testimonials"}
              </SubTitle>
              <Heading size="heading1" as="div" className="!mb-0">
                {title || "What Our Patients Say About Us"}
              </Heading>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {contactCards.map((item) => {
            const IconComponent = icons[item.icon];

            return (
              <div key={item.id} className="bg-[#F3F7FF] transition-all duration-300 rounded-2xl p-8 cursor-pointer group">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#212121] ">
                  <IconComponent className="text-white  transition" size={28} />
                </div>

                {/* Title */}
                <Heading size="heading4" as="p" className="!mt-6 !mb-2">
                  {item.title || "What Our Patients Say About Us"}
                </Heading>

                {/* Details */}
                <div className="space-y-1">
                  {item.details.map((line, index) => (
                    <p key={index} className="text-[#4A4A4A]  text-sm leading-relaxed transition">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
