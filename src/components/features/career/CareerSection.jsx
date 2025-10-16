"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Heading, SubTitle } from "@/components/layout/Heading";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const items = [
    {
        id: 1,
        Departments: "Clinical",
        role: "ICU Nurse",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    },
    {
        id: 2,
        Departments: "Front Desk Coordinator",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    },
    {
        id: 3,
        Departments: "Surgical Nurse",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    },
    {
        id: 4,
        Departments: "ICU Nurse",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    },
    {
        id: 5,
        Departments: "Front Desk Coordinator",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    },
    {
        id: 6,
        Departments: "Non-Clinical",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology", "Diagnostic skill",],
    }
];

import JobDetail from "./JobDetail";
import CareerForm from "./CareerForm";

export default function CareerSection() {
    const [expanded, setExpanded] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const ALL = "all";
    const [selectedDept, setSelectedDept] = useState(ALL);
    const [selectedRole, setSelectedRole] = useState(ALL);

    const departments = useMemo(() => {
        const set = new Set(items.map((i) => i.Departments));
        return [ALL, ...Array.from(set)];
    }, []);

    const roles = useMemo(() => {
        const filtered = selectedDept && selectedDept !== ALL ? items.filter((i) => i.Departments === selectedDept) : items;
        const set = new Set(filtered.map((i) => i.role));
        return [ALL, ...Array.from(set)];
    }, [selectedDept]);

    const filteredItems = useMemo(() => {
        return items.filter((it) => {
            if (selectedDept !== ALL && it.Departments !== selectedDept) return false;
            if (selectedRole !== ALL && it.role !== selectedRole) return false;
            return true;
        });
    }, [selectedDept, selectedRole]);

    function resetFilters() {
        setSelectedDept(ALL);
        setSelectedRole(ALL);
    }

    return (
        <section className="bg-[#F1F7FF] py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
            <div className="container">
                <div className='w-full flex flex-wrap items-center justify-between gap-[10px] 2xl:gap-[15px] mb-[25px] xl:mb-[35px]'>
                    <div className="HeadingWrap">
                        <SubTitle size="SubTitle" as="div" className="!mb-[10px]">
                            CAREER
                        </SubTitle>
                        <Heading size="heading1" as="h2" className="!mb-0">
                            Job Openings
                        </Heading>
                    </div>
                    <div className="flex flex-wrap items-center gap-[5px] xl:gap-[12px]">
                        <div className="flex flex-col">
                            <label className="sr-only">Department</label>
                            <Select value={selectedDept} onValueChange={(v) => { setSelectedDept(v); setSelectedRole(ALL); }}>
                                <SelectTrigger className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] 2xl:min-w-[170px] 3xl:min-w-[210px] px-[10px] xl:px-[20px]
                                 rounded-[3px] xl:rounded-[4px] 3xl:rounded-[6px]
                               text-[#000000] leading-[24px] !h-[28px] 2xl:!h-[30px] 3xl:!h-[40px]">
                                    <SelectValue placeholder="All Departments" />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map((d, idx) => (
                                        <SelectItem key={idx} value={d}>{d === ALL ? "All Departments" : d}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <label className="sr-only">Role</label>
                            <Select value={selectedRole} onValueChange={(v) => setSelectedRole(v)}>
                                <SelectTrigger className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] 2xl:min-w-[170px] 3xl:min-w-[210px] px-[10px] 
                                xl:px-[20px]  rounded-[3px] xl:rounded-[4px] 3xl:rounded-[6px]
                                text-[#000000] leading-[24px] !h-[28px] 2xl:!h-[30px] 3xl:!h-[40px]">
                                    <SelectValue placeholder="All Roles" />
                                </SelectTrigger>
                                <SelectContent>
                                    {roles.map((r, idx) => (
                                        <SelectItem key={idx} value={r}>{r === ALL ? "All Roles" : r}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div> 
                        <button onClick={resetFilters} className="text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#010101] 
                        font-normal leading-normal bg-[#E8EFFF]  h-[30px] 2xl:h-[30px] 3xl:h-[40px] w-[90px] 2xl:w-[110px] 3xl:w-[135px] px-3 
                        rounded-[3px] xl:rounded-[4px] 3xl:rounded-[6px] cursor-pointer">Clear Filters</button>
                    </div>
                </div>

                <div className="flex flex-wrap -m-[8px] xl:-m-[15px] 2xl:-m-[20px] 3xl:-m-[25px]">
                    {filteredItems.map((item, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 p-[8px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[25px]'>
                            <div className="p-[30px_15px] lg:p-[35px_25px] xl:p-[40px_25px] 2xl:p-[40px_30px] 3xl:p-[50px_40px] bg-white rounded-[6px]
                             shadow-md relative w-full h-full flex flex-col justify-between">
                                <div className="w-full">
                                    <div className="Departments text-[11px] 2xl:text-[13px] 3xl:text-[17px] text-[#00335B] font-normal leading-normal 
                                    w-fit 2xl:h-[18px] 3xl:h-[27px] min-w-[85px] 2xl:min-w-[95px] 3xl:min-w-[125px] px-[8px] rounded-b-[8px] bg-[#E8EFFF] text-center
                                     absolute top-0 left-[20px] 2xl:left-[30px] 3xl:left-[40px] flex items-center justify-center">
                                        {item?.Departments}
                                    </div>
                                    <div className="mb-[10px] flex flex-wrap justify-between items-start">
                                        <div className="text-[14px] lg:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-normal leading-normal pr-[10px]">
                                            {item?.role}
                                        </div>
                                        <div className="text-[10px] lg:text-[12px] 2xl:text-[11px] 3xl:text-[15px] text-[#8F8F8F] font-normal leading-normal whitespace-nowrap mt-8px">
                                            {item?.postDate}
                                        </div>
                                    </div>
                                    <ul className="mb-[10px] lg:mb-[15px]">
                                        {item?.experience && (
                                            <li className="relative text-[10px] lg:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[11px] before:3xl:w-[15px] before:h-[11px] before:3xl:h-[17px] before:flex
                                                     before:items-center
                                                    before:bg-[url('/images/JobExp.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                {item.experience}
                                            </li>
                                        )}
                                        {item.availability && (
                                            <li className="relative text-[10px] lg:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[25px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[11px] before:3xl:w-[15px] before:h-[11px] before:3xl:h-[17px]
                                                before:bg-[url('/images/AvailIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                {item.availability}
                                            </li>
                                        )}
                                    </ul>
                                    <div className="w-full">
                                        <div className="text-[11px] 2xl:text-[13px] 3xl:text-[16.761px] text-[#00335B] font-normal leading-normal mb-[8px]">Key Requirements:</div>

                                        <ul className="flex flex-wrap items-center -m-[3px] 3xl:-m-[4px] mb-[10px] 3xl:mb-[20px]">
                                            {(expanded[item.id] ? item.requirements : item.requirements.slice(0, 5)).map((spec, idx) => (
                                                <li key={idx} className="p-[3px] 3xl:p-[4px]">
                                                    <div className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border
                                                     border-[rgba(33,33,33,0.3)]
                                                     p-[4px_10px] 3xl:p-[5px_10px] rounded-[40px] flex items-center justify-center w-full h-full">
                                                        {spec}
                                                    </div>
                                                </li>
                                            ))}

                                            {item.requirements.length > 5 && (
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
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-[8px]">
                                    <JobDetail />
                                     <CareerForm />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
