"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { renderHtml } from "@/utils/parseHtml";
import ConsultantCard from "./ConsultantCard";

const items = [
  {
    id: 1,
    name: "Dr. Jessy Jhon",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 2,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 3,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 4,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 5,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 6,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
];

const consultantss = [
  {
    id: 1,
    name: "Dr. Arun Kumar",
    slug: "dr-arun-kumar",
    designation: "Consultant Ophthalmologist",
    qualifications: "MBBS, MS, FRCS",
    experience: 18,
    profile_image_value: "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1773/Untitled-2-converted.webp",
    profile_image_alt_text_value: "Dr. Arun Kumar",
    languages: [
      {
        id: 1,
        name: "English",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "English",
      },
      {
        id: 2,
        name: "Hindi",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "Hindi",
      },
    ],
    special_interests: [
      { id: 1, name: "Cataract Surgery" },
      { id: 2, name: "Glaucoma Management" },
    ],
  },
  {
    id: 2,
    name: "Dr. Sneha Menon",
    slug: "dr-sneha-menon",
    designation: "Senior Ophthalmologist",
    qualifications: "MBBS, DO, DNB",
    experience: 12,
    profile_image_value: "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1773/Untitled-2-converted.webp",
    profile_image_alt_text_value: "Dr. Sneha Menon",
    languages: [
      {
        id: 1,
        name: "English",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "English",
      },
      {
        id: 3,
        name: "Malayalam",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "Malayalam",
      },
    ],
    special_interests: [
      { id: 3, name: "Lens Replacement Surgery" },
      { id: 4, name: "Refractive Surgery" },
    ],
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    slug: "dr-rahul-verma",
    designation: "Consultant Eye Surgeon",
    qualifications: "MBBS, MS, FICO",
    experience: 22,
    profile_image_value: "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1773/Untitled-2-converted.webp",
    profile_image_alt_text_value: "Dr. Rahul Verma",
    languages: [
      {
        id: 1,
        name: "English",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "English",
      },
      {
        id: 2,
        name: "Hindi",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "Hindi",
      },
    ],
    special_interests: [
      { id: 5, name: "Pediatric Ophthalmology" },
      { id: 6, name: "Corneal Transplant" },
    ],
  },
  {
    id: 4,
    name: "Dr. AAAA",
    slug: "dr-rahul-verma",
    designation: "Consultant Eye Surgeon",
    qualifications: "MBBS, MS, FICO",
    experience: 22,
    profile_image_value: "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1773/Untitled-2-converted.webp",
    profile_image_alt_text_value: "Dr. Rahul Verma",
    languages: [
      {
        id: 1,
        name: "English",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "English",
      },
      {
        id: 2,
        name: "Hindi",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "Hindi",
      },
    ],
    special_interests: [
      { id: 5, name: "Pediatric Ophthalmology" },
      { id: 6, name: "Corneal Transplant" },
    ],
  },
  {
    id: 5,
    name: "Dr. BBBBB",
    slug: "dr-rahul-verma",
    designation: "Consultant Eye Surgeon",
    qualifications: "MBBS, MS, FICO",
    experience: 22,
    profile_image_value: "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1773/Untitled-2-converted.webp",
    profile_image_alt_text_value: "Dr. Rahul Verma",
    languages: [
      {
        id: 1,
        name: "English",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "English",
      },
      {
        id: 2,
        name: "Hindi",
        image_value:
          "https://www.skyline-hospitals.dev5.intersmarthosting.in/storage/1513/conversions/WhatsApp-Image-2025-11-26-at-11.13.13-converted.webp",
        image_alt_text_value: "Hindi",
      },
    ],
    special_interests: [
      { id: 5, name: "Pediatric Ophthalmology" },
      { id: 6, name: "Corneal Transplant" },
    ],
  },
];

export default function ConsultantSection({ variant, consultants, title, pre_title, description }) {
  const [expanded, setExpanded] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const { openDialog } = useBookingFormContext();

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClick = (id) => {
    openDialog({
      slug: id,
      source: "consultants",
    });
  };

  return (
    <section
      className={`bg-[#00335B] py-[40px] 3xl:py-[70px] overflow-hidden relative z-0 ${
        variant === "servicedetail" && "mt-[40px] sm:mt-[60px] lg:mt-[90px] 2xl:mt-[110px] 3xl:mt-[140px]"
      }`}
    >
      <Image
        src="/images/logoBack.png"
        className="absolute top-0 left-[10%] bottom-0 m-auto pointer-events-none max-w-[1000px]  w-full h-full object-cover z-10"
        width="950"
        height="850"
        alt="bg"
      />
      <div className="container">
        <div className="flex items-end justify-between mb-[25px] 2xl:mb-[40px] 3xl:mb-[60px] flex-wrap gap-[20px]">
          <div className="max-w-[650px]">
            <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase tracking-wide mb-[10px]r mb-[20px]">{pre_title}</h1>
            <div className="max-w-[468px] text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-white font-unna leading-[1.1]">{title}</div>
          </div>
          {variant === "servicedetail" ? (
            <>{renderHtml(description, "xl:max-w-[400px] 2xl:max-w-[490px] 3xl:max-w-[620px] [&>*]:text-white")}</>
          ) : (
            <Link href="/consultants" aria-label="View All Consultants" className="btn-base1 hover">
              View All Consultants
            </Link>
          )}
        </div>
        <div className="w-full realtive">
          <Swiper
            key={consultantss?.length}
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            loop={consultantss?.length > 1}
            centerInsufficientSlides={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onBeforeInit={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            navigation={{
              prevEl: ".navbts-prevs",
              nextEl: ".navbts-nexts",
            }}
            breakpoints={{
              578: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
              1280: {
                centeredSlides: consultantss?.length > 1,
                spaceBetween: 30,
                slidesPerView: 3,
              },
              1536: {
                centeredSlides: consultantss?.length > 1,
                spaceBetween: 40,
                slidesPerView: 3,
              },
            }}
            className="relative consultantSlider xl:h-[280px] 2xl:h-[330px] 3xl:h-[420px] !w-full"
          >
            {consultantss?.map((item) => (
              <SwiperSlide key={item.id}>
                <ConsultantCard item={item} expanded={expanded} toggleExpand={toggleExpand} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows */}
          {consultantss?.length > 1 && (
            <div className="flex items-end justify-center relative z-1 max-w-[95px] m-auto mt-[30px] ">
              <div className="w-1/2 p-[10px]">
                <button className="navbts-prevs z-20 bg-white w-[28px] lg:w-[35px] 2xl:w-[40px] h-[28px] lg:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                  <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6">
                    <path d="M2.78099 0.947449C2.8655 1.03283 2.86572 1.1715 2.78099 1.25688L1.00565 3.04999L6.98327 3.04999C7.10288 3.04999 7.19995 3.14794 7.19995 3.26886C7.19995 3.38977 7.10287 3.48772 6.98327 3.48772L1.00565 3.48772L2.78077 5.28084C2.8655 5.36621 2.8655 5.50489 2.78077 5.59026C2.69604 5.67564 2.55888 5.67564 2.47437 5.59026L0.329353 3.42358C0.245705 3.33907 0.245705 3.19845 0.329353 3.11393L2.47437 0.94725C2.5591 0.861855 2.69626 0.861856 2.78099 0.947449Z" />
                  </svg>
                </button>
              </div>
              <div className="w-1/2 p-[10px]">
                <button className="navbts-nexts z-10 bg-white w-[28px] md:w-[35px] 2xl:w-[40px] h-[28px] md:h-[35px] 2xl:h-[40px] rounded-full p-[8px] lg:p-[13px] flex items-center justify-center cursor-pointer group hover:bg-base1">
                  <svg className="w-full h-full group-hover:fill-white fill-base2" viewBox="0 0 8 6" fill="none">
                    <path d="M5.15236 0.947449C5.06785 1.03283 5.06763 1.1715 5.15236 1.25688L6.9277 3.04999L0.950083 3.04999C0.830465 3.04999 0.733398 3.14794 0.733398 3.26886C0.733398 3.38977 0.830483 3.48772 0.950083 3.48772L6.9277 3.48772L5.15258 5.28084C5.06785 5.36621 5.06785 5.50489 5.15258 5.59026C5.23731 5.67564 5.37447 5.67564 5.45898 5.59026L7.604 3.42358C7.68764 3.33907 7.68764 3.19845 7.604 3.11393L5.45898 0.94725C5.37425 0.861855 5.23709 0.861856 5.15236 0.947449Z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
