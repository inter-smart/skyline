"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
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
    {
        id: 6,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },

];

export default function ConsultantSection({ variant }) {
    const [expanded, setExpanded] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };



    return (
        <section className="bg-[#00335B] py-[40px] 3xl:py-[70px] overflow-hidden relative z-0">
            <Image src="/images/logoBack.png" className="absolute top-0 left-[10%] bottom-0 m-auto pointer-events-none max-w-[1000px]  w-full h-full object-cover z-10" width="950" height="850" alt="bg" />
            <div className="container">
                <div className="flex items-end justify-between mb-[25px] 2xl:mb-[40px] 3xl:mb-[60px] flex-wrap gap-[20px]">
                    <div className="max-w-[650px]">
                        <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase tracking-wide mb-[10px]r 3xl:mb-[20px]">
                            Consultants
                        </h1>
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-white font-unna leading-[1.1]">
                            Meet Our Expert  <br />
                            Medical Consultants
                        </div>
                    </div>
                    {variant === "servicedetail" ? (
                        <div className="xl:max-w-[400px] 2xl:max-w-[490px] 3xl:max-w-[620px] [&>*]:!text-white">
                            <p>
                                Our oncology specialists are GMC-registered and deeply committed to delivering expert, compassionate care.
                                Many are involved in cutting-edge clinical trials and hold academic or NHS leadership positions.
                            </p>
                        </div>
                    ) : (
                        <Link
                            href="/"
                            aria-label="View All Consultants"
                            className="btn-base1 hover"
                        >
                            View All Consultants
                        </Link>
                    )}
                </div>
                <div className="w-full realtive">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        loop={true}
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
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 10,
                                slidesPerView: 3
                            },
                            1280: {
                                centeredSlides: true,
                                spaceBetween: 30,
                                slidesPerView: 3
                            },
                            1536: {
                                centeredSlides: true,
                                spaceBetween: 40,
                                slidesPerView: 3
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
                                                {item.experience && (
                                                    <li className="relative text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                        <strong className="font-medium">{item.experience}</strong> NHS & Private experience
                                                    </li>
                                                )}
                                                {item.availability && (
                                                    <li className="relative text-[8px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                        before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                        before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                        Available: <strong className="font-medium">{item.availability}</strong>
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

                    {/* arrows */}
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




                </div>
            </div>
        </section >
    );
}
