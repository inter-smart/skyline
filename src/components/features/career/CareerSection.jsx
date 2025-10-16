"use client";

import Link from "next/link";
import { Heading, SubTitle } from "@/components/layout/Heading";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const items = [
    {
        id: 1,
        Departments: "Clinical",
        role: "ICU Nurse",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology"],
    },
    {
        id: 2,
        Departments: "Non-Clinical",
        role: "Front Desk Coordinator",
        postDate: "2 Days ago",
        experience: "2+ Years Exp Required",
        availability: "Full-time",
        requirements: ["MBBS degree", "Cardiology Fellowship", "Medical License", "Diagnostic skill", "Pediatric Cardiology"],
    }
];

import JobDetail from "./JobDetail";
import { useMemo, useState } from "react";

export default function CareerSection() {
    const ALL = "all";
    const [selectedDept, setSelectedDept] = useState(ALL);
    const [selectedRole, setSelectedRole] = useState(ALL);

    // derive unique departments
    const departments = useMemo(() => {
        const set = new Set(items.map((i) => i.Departments));
        return [ALL, ...Array.from(set)];
    }, []);

    // derive roles, optionally filtered by selected department
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
        <section className="bg-[#F1F7FF] py-[70px]">
            <div className="container">
                <div className='w-full flex flex-wrap items-center justify-between gap-[15px] mb-[35px]'>
                    <div className="HeadingWrap">
                        <SubTitle size="SubTitle" as="div">
                            CAREER
                        </SubTitle>
                        <Heading size="heading1" as="h2" className="!mb-0">
                            Job Openings
                        </Heading>
                    </div>
                    <div className="flex flex-wrap items-center gap-[12px]">
                        <div className="flex flex-col">
                            <label className="sr-only">Department</label>
                            <Select value={selectedDept} onValueChange={(v) => { setSelectedDept(v); setSelectedRole(ALL); }}>
                                <SelectTrigger className="min-w-[210px] px-[20px] py-[10px] rounded-[6px] text-[#000000] text-[16px] leading-[24px] h-[40px]">
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
                                <SelectTrigger className="min-w-[210px] px-[20px] py-[10px] rounded-[6px] text-[#000000] text-[16px] leading-[24px] h-[40px]">
                                    <SelectValue placeholder="All Roles" />
                                </SelectTrigger>
                                <SelectContent>
                                    {roles.map((r, idx) => (
                                        <SelectItem key={idx} value={r}>{r === ALL ? "All Roles" : r}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <button onClick={resetFilters} className="text-[16px] text-[#010101] font-normal leading-normal bg-[#E8EFFF] h-[40px] w-[135px] px-3 py-2 rounded-[6px] cursor-pointer">Clear Filters</button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-[50px]">
                    {filteredItems.map((item, index) => (
                        <div key={index} className='w-full md:w-1/3'>
                            <div className="JobCard md:p-[50px_40px] bg-white rounded-[6px] shadow-md relative h-full flex flex-col justify-between">
                                <div className="TopContent">
                                    <div className="Departments text-[13px] 2xl:text-[15px] 3xl:text-[17px] text-[#00335B] font-normal leading-normal w-fit h-[27px] min-w-[125px] px-[8px] rounded-b-[8px] bg-[#E8EFFF] text-center absolute top-0 left-[40px] flex items-center justify-center">
                                        {item?.Departments}
                                    </div>
                                    <div className="mb-[10px] flex flex-wrap justify-between items-start">
                                        <div className="text-[25.141px] text-[#212121] font-normal leading-normal pr-[10px]">
                                            {item?.role}
                                        </div>
                                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[15px] text-[#8F8F8F] font-normal leading-normal whitespace-nowrap mt-8px">
                                            {item?.postDate}
                                        </div>
                                    </div>
                                    <ul className="mb-[15px]">
                                        {item?.experience && (
                                            <li className="relative text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#212121] font-normal pl-[25px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[15px] before:h-[17px]
                                                    before:bg-[url('/images/JobExp.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                {item.experience}
                                            </li>
                                        )}
                                        {item.availability && (
                                            <li className="relative text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#212121] font-normal pl-[25px]
                                                before:absolute before:top-[4px] before:left-0 before:w-[17px] before:h-[17px]
                                                before:bg-[url('/images/AvailIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]">
                                                {item.availability}
                                            </li>
                                        )}
                                    </ul>
                                    <div className="w-full">
                                        <div className="text-[16.761px] text-[#00335B] font-normal leading-normal mb-[8px]">Key Requirements:</div>
                                        <ul className="mb-[30px] flex flex-wrap gap-[6px] gap-y-[15px]">
                                            {item.requirements.map((require, idx) => (
                                                <li key={idx} className="text-[14px] h-[26px] text-[#212121] border border-[rgba(33,33,33,0.3)] px-[15px] py-[6px] rounded-[40px] min-h-[26px] inline-block items-center leading-3 truncate">
                                                    {require}
                                                </li>
                                            ))}
                                            <li className="px-[8px] inline-block items-center leading-[26px]">
                                                <Link href="/" className="text-[14px] text-base1 font-medium transition-all duration-100 hover:text-base2">
                                                    + More
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-[8px]">
                                    <JobDetail />
                                    <Link href="/" className="btn-base1 hover min-w-[150px]" aria-label="know_more">APPLY NOW</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
