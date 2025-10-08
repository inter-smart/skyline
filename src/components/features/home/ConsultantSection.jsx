
"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";


const items = [
    {
        id: 1,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 1,
        name: "Dr. Sara Tailor",
        role: "Consultant Psychiatrist",
        qualification: "MBBS, MRCGP, DRCOG",
        image: "/images/consult1.jpg",
        experience: "15+ years",
        availability: "Same Day",
        specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"]
    },
    {
        id: 1,
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
    const [activeIndex, setActiveIndex] = useState(null);
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

                <Swiper
                    // modules={[Autoplay]}
                    watchSlidesProgress={true}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 5000 }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="relative  " 
                    spaceBetween={20}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1280: { slidesPerView: 3, spaceBetween: 20 },
                        1536: { slidesPerView: 2 , spaceBetween: 15 },
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide 
                           >
                            <div className="w-full h-full p-[18px] rounded-[8px] overflow-hidden bg-white flex flex-wrap">
                                <div className="w-[375px]">
                                    <div className="w-full h-full rounded-[6px] overflow-hidden aspect-[375/270] mb-[20px] bg-[#D6E2ED]">
                                        <Image
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                            width={375}
                                            height={270}
                                            alt={item.name}
                                        />
                                    </div>
                                </div>
                                <div className="w-full xl:w-[calc(100%-375px)] pl-[30px]">
                                    <div className="text-[18px] text-[#00335B] font-medium mb-[15px]">
                                        {item.name}
                                    </div>
                                    <div className="text-[16px] text-[#671448] font-normal mb-[15px] flex items-start leading-4 relative
                                        before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[4px]
                                        before:h-[14px] before:rounded-[6px] before:mr-[10px]"
                                    >
                                        {item.role}
                                    </div>
                                    <div className="text-[16px] text-[#3D3D3D] font-light uppercase">
                                        {item.qualification}
                                    </div>
                                    <div className="w-full mt-[15px]">
                                        <ul className="mb-[30px]">
                                            {item.experience && (
                                                <li className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px]
                                                before:absolute before:top-[4px] before:left-0 before:w-[17px] before:h-[17px]
                                                before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
                                                >
                                                    <strong className="font-medium">{item.experience}</strong> NHS & Private experience
                                                </li>
                                            )}
                                            {item.availability && (
                                                <li className="relative text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#212121] font-normal pl-[25px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[17px] before:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
                                                >
                                                    Available: <strong className="font-medium">{item.availability}</strong>
                                                </li>
                                            )}
                                        </ul>
                                        <div className="text-[18px] text-[#671448] font-medium mb-[15px]">Specialization</div>
                                        <ul className="flex flex-wrap items-center -m-[4px] mb-[20px]">
                                            {item.specialization.map((spec, idx) => (
                                                <li key={idx} className="w-1/2 p-[4px]">
                                                    <div className="border border-[rgba(33,33,33,0.3)] p-[10px_15px] rounded-[40px] flex items-center justify-center w-full h-full">
                                                        {spec}
                                                    </div>
                                                </li>
                                            ))}
                                            <li className="w-1/2 p-[4px]">
                                                <Link href="/" className="text-[14px] text-base1 font-medium transition-all duration-100 hover:text-base2">
                                                    + More
                                                </Link>
                                            </li>
                                        </ul>
                                        <Link href="/" className="text-[15px] text-[#671448] font-medium uppercase flex items-center transition-all group duration-200 hover:text-base2 hover:tracking-[1px]">
                                            Book Appointment
                                            <div className="w-[13px] h-[13px] flex">
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
        </section>
    )
}
