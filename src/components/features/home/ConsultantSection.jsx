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

];

export default function ConsultantSection() {
    const [expanded, setExpanded] = useState({}); // track which item is expanded

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
                        // modules={[Autoplay]}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={10}
                        loop={true}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        breakpoints={{
                            768: {
                                spaceBetween: 10,
                            },
                            1280: {
                                spaceBetween: 30,
                            },
                            1536: {
                                spaceBetween: 40,
                            },
                        }}
                        className="relative consultantSlider xl:h-[280px] 2xl:h-[330px] 3xl:h-[420px] !w-full"
                    >

                        {items.map((item) => (
                            <SwiperSlide key={item.id} >
                                <div className="consultantBx w-full h-full p-[8px] xl:p-[15px] 3xl:p-[20px] rounded-[4px] border-[#D6E2ED]
                                 border overflow-hidden bg-white flex flex-wrap">

                                    {/* Left Section */}
                                    <div className="w-full cmnBx flex-grow lg:w-[165px] xl:w-[210px] 2xl:w-[250px] 3xl:w-[315px] lg:h-full">
                                        <div className="w-full lg:h-full rounded-[6px] overflow-hidden aspect-[375/270] mb-[20px] bg-[#D6E2ED] relative imgBx">
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
                                    </div>

                                    {/* Right Section */}
                                    <div className={` flex-grow rtBx w-full lg:w-[calc(100%-165px)] xl:w-[calc(100%-210px)] 2xl:w-[calc(100%-250px)] 3xl:w-[calc(100%-315px)] lg:pl-[15px] xl:pl-[20px] 3xl:pl-[30px] transition-all duration-300`}>
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

                                                {item.specialization.length > 2 && (
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

                                            <div className="w-full flex flex-wrap -m-[4px] 2xl:-m-[8px]">
                                                <div className="p-[4px] 2xl:p-[8px] flex-grow">
                                                    <Link
                                                        href="/"
                                                        className="w-full btn-base1 tracking-widest bg-transparent border rounded-[3px] hover:text-white transition-none border-[rgba(103,20,72,0.2)] text-base1"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                                <div className="p-[4px] 2xl:p-[8px] flex-grow">
                                                    <Link
                                                        href="/"
                                                        className="w-full btn-base1 tracking-widest rounded-[3px]"
                                                    >
                                                        Book Consultation
                                                    </Link>
                                                </div>
                                            </div>

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
