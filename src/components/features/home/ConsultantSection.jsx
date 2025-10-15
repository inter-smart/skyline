"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const items = [
    {
        id: 1,
        name: "Dr. Jessy Jhon",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 2,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 3,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 4,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 5,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },

];

export default function ConsultantSection() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };



    return (
        <section className="bg-[#00335B] py-[70px]">
            <div className="container">
                <div className="flex items-end justify-between mb-[60px] flex-wrap gap-[20px]">
                    <div className="max-w-[650px]">
                        <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase tracking-wider mb-[20px]">
                            Consultants
                        </h1>
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-white font-unna leading-[1.1]">
                            Meet Our Expert  <br />
                            Medical Consultants
                        </div>
                    </div>
                    <Link
                        href="/"
                        aria-label="View All Consultants"
                        className="btn-base1 hover" >
                        View All Consultants
                    </Link>
                </div>
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            578: {
                                spaceBetween: 10,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 10,
                                slidesPerView: 3
                            },
                            1280: {
                               centeredSlides:true,
                                spaceBetween: 30,
                            },
                            1536: {
                                centeredSlides:true,
                                spaceBetween: 40,
                            },
                        }}
                        className="relative consultantSlider xl:h-[280px] 2xl:h-[330px] 3xl:h-[420px] !w-full"
                    >

                        {items.map((item) => (
                            <SwiperSlide key={item.id} >
                                <div className="consultantBx w-full h-full p-[12px] xl:p-[15px] 3xl:p-[20px] rounded-[4px] border-[#D6E2ED]
                                 border overflow-hidden bg-white flex flex-wrap">

                                    {/* Left Section */}
                                    <div className="w-full cmnBx flex-grow  xl:w-[210px] 2xl:w-[250px] 3xl:w-[315px] lg:h-full">
                                        <div className="w-full lg:h-full rounded-[6px] overflow-hidden aspect-[375/270] mb-[15px] bg-[#D6E2ED] relative imgBx">
                                            {/* logo image */}
                                            <Image
                                                src="/images/bgLogo.png"
                                                className="absolute top-[25px] left-[25px] w-full h-full
                                            max-w-[165px]
                                            object-cover"
                                                width={165}
                                                height={165}
                                                alt="logo"
                                            />
                                            <Image
                                                src={item.image}
                                                className="w-full lg:h-full object-cover"
                                                width={375}
                                                height={270}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] font-medium mb-[4px] 2xl:mb-[8px]">
                                                {item.name}
                                            </div>
                                            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-normal mb-[5px] 2xl:mb-[8px] flex items-start leading-4 relative
                                            before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                            before:h-[14px] before:rounded-[6px] before:mr-[8px]"
                                            >
                                                {item.role}
                                            </div>
                                            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase">
                                                {item.qualification}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <div className={` flex-grow rtBx w-full   xl:w-[calc(100%-210px)] 2xl:w-[calc(100%-250px)] 3xl:w-[calc(100%-315px)]  xl:pl-[20px] 3xl:pl-[30px] transition-all duration-300`}>
                                        <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] font-medium mb-[10px] 2xl:mb-[15px]">
                                            {item.name}
                                        </div>
                                        <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-normal mb-[10px] 2xl:mb-[15px] flex items-start leading-4 relative
                                            before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                            before:h-[14px] before:rounded-[6px] before:mr-[8px]"
                                        >
                                            {item.role}
                                        </div>
                                        <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase">
                                            {item.qualification}
                                        </div>

                                        <div className="w-full mt-[15px]">
                                            <ul className="mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                                                {item.availability && (
                                                    <li className="relative text-[8px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                        before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                        before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                        Available: <strong className="font-medium">{item.availability}</strong>
                                                    </li>
                                                )}
                                                {item.experience && (
                                                    <li className="relative text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                        <strong className="font-medium">{item.experience}</strong> NHS & Private experience
                                                    </li>
                                                )}
                                            </ul>

                                            <div className="text-[8px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-medium mb-[10px] 3xl:mb-[15px]">Specialization</div>
                                            <ul className="flex flex-wrap items-center -m-[4px] mb-[10px] 3xl:mb-[20px]">
                                                {(expanded[item.id] ? item.specialization : item.specialization.slice(0, 2)).map((spec, idx) => (
                                                    <li key={idx} className="p-[4px]">
                                                        <div className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border border-[rgba(33,33,33,0.3)] p-[5px] 3xl:p-[8px] rounded-[40px] flex items-center justify-center w-full h-full">
                                                            {spec}
                                                        </div>
                                                    </li>
                                                ))}

                                                {item.specialization.length > 3 && (
                                                    <li className="p-[4px]">
                                                        <button
                                                            onClick={() => toggleExpand(item.id)}
                                                            className="text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-base1 font-medium transition-all duration-100 hover:text-base2"
                                                        >
                                                            {expanded[item.id] ? "- Less" : "+ More"}
                                                        </button>
                                                    </li>
                                                )}
                                            </ul>

                                            <Link href="/" className="text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#671448] font-medium uppercase flex items-center transition-all group duration-200 hover:text-base2 hover:tracking-[1px]">
                                                Book Appointment
                                                <div className="w-[13px] h-[13px] flex ml-[10px]">
                                                    <svg width="13" height="9" viewBox="0 0 13 9" className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1" fill="none">
                                                        <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
                                                    </svg>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>


                        ))}
                    </Swiper>


                </div>
            </div>
        </section >
    );
}
