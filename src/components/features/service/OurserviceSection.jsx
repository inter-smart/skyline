"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heading, SubTitle } from "@/components/layout/Heading";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ServiceCard from "@/components/common/ServiceCard";
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "ENT (Ear, Nose & Throat)",
        mainTitle: "ENT (Ear, Nose & Throat)",
        image: "/images/service2.jpg",
        features: [
            "Same-day and next-day appointments",
            "30–60 minute consultations",
            "Direct access to on-site diagnostics",
            "Women’s & men’s health services",
        ],
        category: "ent",
    },
    {
        title: "Private GP Booking",
        mainTitle: "Private GP Booking",
        image: "/images/service1.jpg",
        features: [
            "Same-day and next-day appointments",
            "30–60 minute consultations",
            "Direct access to on-site diagnostics",
            "Women’s & men’s health services",
        ],
        category: "neuro",
    },
    {
        title: "Neurology",
        mainTitle: "Skin & Hair Treatments",
        image: "/images/service3.jpg",
        features: [
            "Acne and scar treatments",
            "Laser hair removal",
            "Anti-aging solutions",
            "Skin allergy tests",
        ],
        category: "derma",
    },
    {
        title: "Orthopaedics & Sports Medicine",
        mainTitle: "Child Care & Vaccinations",
        image: "/images/service4.jpg",
        features: [
            "Newborn to adolescent care",
            "Vaccination programs",
            "Nutritional guidance",
            "Growth tracking",
        ],
        category: "ortho",
    },
    {
        title: "Ophthalmology",
        mainTitle: "Ophthalmology",
        image: "/images/service5.jpg",
        features: [
            "Newborn to adolescent care",
            "Vaccination programs",
            "Nutritional guidance",
            "Growth tracking",
        ],
        category: "ophthal",
    },
    {
        title: "Dermatology",
        mainTitle: "Dermatology",
        image: "/images/service6.jpg",
        features: [
            "Newborn to adolescent care",
            "Vaccination programs",
            "Nutritional guidance",
            "Growth tracking",
        ],
        category: "pediatric",
    },
    {
        title: "Gynecology",
        mainTitle: "Gynecology",
        image: "/images/service7.jpg",
        features: [
            "Newborn to adolescent care",
            "Vaccination programs",
            "Nutritional guidance",
            "Growth tracking",
        ],
        category: "pediatric",
    },
    {
        title: "Orthopaedics & Sports Medicine",
        mainTitle: "Child Care & Vaccinations",
        image: "/images/service8.jpg",
        features: [
            "Newborn to adolescent care",
            "Vaccination programs",
            "Nutritional guidance",
            "Growth tracking",
        ],
        category: "pediatric",
    },
];

export default function OurserviceSection() {
    const [filter, setFilter] = useState("all");

    const filteredServices =
        filter === "all"
            ? services
            : services.filter((item) => item.category === filter);

    return (
        <section className="py-[35px] 2xl:py-[45px] 3xl:py-[70px]">
            <div className="container">
                {/* Heading Section */}
                <div className="flex flex-wrap items-end justify-between -m-[5px] mb-[10px] md:mb-[15px] lg:mb-[25px]">
                    <div className="w-full sm:w-auto p-[5px]">
                        <motion.div
                            className="md:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[610px] relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <SubTitle
                                size="SubTitle"
                                as="div"
                                className="!mb-[10px] 3xl:!mb-[15px] leading-none"
                            >
                                Services
                            </SubTitle>
                            <Heading size="heading1" as="div" className="leading-none !mb-0">
                                Our Services
                            </Heading>
                        </motion.div>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="w-full sm:w-auto p-[5px]">
                        <div className="flex items-center gap-[8px]">
                            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[#212121] font-medium whitespace-nowrap">
                                Filter by:
                            </div>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger
                                    className="!text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] !text-[#000000] w-full border border-[#E4E4E4] rounded-[6px] 
                                        outline-none shadow-none min-w-[210px] 
                                        focus:outline-none focus:ring-0 focus:shadow-none 
                                        focus-visible:ring-0 focus-visible:shadow-none"
                                >
                                    <SelectValue placeholder="All Services" />
                                </SelectTrigger>

                                <SelectContent className="!text-[10px] xl:!text-[11px] 2xl:!text-[13px] 3xl:!text-[15px] !text-[#000000]">
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="ent">ENT</SelectItem>
                                    <SelectItem value="neuro">Neurology</SelectItem>
                                    <SelectItem value="derma">Dermatology</SelectItem>
                                    <SelectItem value="ortho">Orthopaedics</SelectItem>
                                    <SelectItem value="ophthal">Ophthalmology</SelectItem>
                                    <SelectItem value="pediatric">Pediatrics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="flex flex-wrap -m-[4px] 2xl:-m-[6px] 3xl:-m-[10px]">
                    {filteredServices.map((service, index) => (
                        <div key={index} className="w-full 2xs:w-1/2 md:w-1/3 lg:w-1/4 p-[4px] 2xl:p-[6px] 3xl:p-[10px]">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
                <Button className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 border
                             border-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center !mt-[25px] 2xl:!mt-[45px]
                          h-[32px] 2xl:h-[40px] 3xl:h-[50px] hover m-auto bg-transparent cursor-pointer rounded-[3px] hover:text-white">LOAD MORE</Button>
            </div>
        </section>
    );
}
