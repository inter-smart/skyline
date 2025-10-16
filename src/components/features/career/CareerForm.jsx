"use client";

import { useState } from "react";


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import SuccesModal from "./SuccesModal";

const formcontrol = `text-[8px] xl:!text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] !text-[#000000] w-full border border-[#E4E4E4] rounded-[6px] 
        placeholder:!text-[8px] xl:placeholder:!text-[10px] 2xl:placeholder:!text-[11px] 3xl:!placeholder:text-[15px] 
        h-[32px] xl:h-[40px] 2xl:h-[47px] 3xl:h-[60px] min-h-[32px] xl:min-h-[40px] 2xl:min-h-[47px] 3xl:min-h-[60px]  outline-none shadow-none
         focus:outline-none focus:ring-0 focus:shadow-none
        focus-visible:ring-0 focus-visible:shadow-none`

export default function CareerForm() {

    const [dragActive, setDragActive] = useState(false);
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e, setImage) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setImage(e.dataTransfer.files[0]);
        }
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-[8px] lg:text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#fff] uppercase font-medium relative cursor-pointer 
            h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
             rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
            bg-[#671448] hover leading-0 tracking-[2px]">APPLY NOW
            </AlertDialogTrigger>

            <AlertDialogContent className="!max-w-[95%] sm:!max-w-[630px] 2xl:!max-w-[1000px] 3xl:!max-w-[1270px] bg-white 
                 lg:max-h-[450px] xl:max-h-[560px] 2xl:max-h-[670px] 
                3xl:max-h-[860px] overflow-auto p-[25px_15px] md:p-[25px] lg:p-[35px]
                xl:p-[55px] 2xl:p-[80px] 3xl:p-[100px] rounded-[6px]">

                <AlertDialogCancel className="bg-transparent border-none cursor-pointer absolute md:top-[75px] top-[15px] right-[10px] md:right-[55px] 
                w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] 
                flex items-center group hover:bg-transparent">
                    <svg viewBox="0 0 13 13" fill="none" className="fill-black transition-all duration-all group-hover:scale-75 group-hover:bg-transparent w-full h-full object-cover" >
                        <path d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
                        0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
                        1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
                        13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
                        13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"  />
                    </svg>
                </AlertDialogCancel>
                <AlertDialogHeader>
                    <div className="w-full relative p-[10px] 2xl:p-[12px] 3xl:p-[20px] mb-[5px] 2xl:mb-[10px] 3xl:mb-[20px]">
                        <div className="text-[25px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#212121] mb-[15px] leading-none">Apply Now</div>
                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] tracking-wide">Submit your application for the ICU Nurse Role</div>
                    </div>
                </AlertDialogHeader>

                <AlertDialogDescription className="mb-0">
                    <div className="flex flex-wrap w-full ">
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">Full Name *</div>
                            <Input placeholder="Enter your full name" className={`${formcontrol}`} />
                        </div>
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">Email Address *</div>
                            <Input placeholder="Enter your email address" className={`${formcontrol}`} />
                        </div>
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">Phone Number *</div>
                            <Input placeholder="Enter Phone number" className={`${formcontrol}`} />
                        </div>
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">Experience *</div>
                            <Select>
                                <SelectTrigger
                                    className={`${formcontrol}`}
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
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">Upload CV *</div>
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, setProductImage)}
                                className=" flex flex-col items-center justify-center w-full cursor-pointer rounded-[6px] border  border-dashed border-[#929293] transition 
                               p-[20px]  2xl:p-[30px] 3xl:p-[40px]"
                            >
                                <label
                                    htmlFor="productImage"
                                    className="text-[8px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[18px] text-[rgba(16,16,16,0.4)] font-light w-full max-w-[260px]
                                    h-full flex flex-col items-center justify-center cursor-pointer text-center"
                                >
                                    <div className="w-[18px] 2xl:w-[22px] 3xl:w-[30px] h-[18px] 2xl:h-[22px] 3xl:h-[30px] flex items-center justify-center mb-[10px] 2xl:mb-[20px]">
                                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" >
                                            <path d="M5.16406 14V23.3333C5.16406 23.9522 5.4099 24.5457 5.84748 24.9832C6.28506 25.4208 6.87856 25.6667 7.4974 25.6667H21.4974C22.1162 25.6667 22.7097 25.4208 23.1473 24.9832C23.5849 24.5457 23.8307 23.9522 23.8307 23.3333V14" stroke="#212121" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.1693 6.99992L14.5026 2.33325L9.83594 6.99992" stroke="#212121" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.5 2.33337V17.5" stroke="#212121" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>

                                    Click to upload your CV (PDF, DOC, DOCX)
                                </label>
                                <input
                                    id="productImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => e.target.files && setProductImage(e.target.files[0])}
                                    className="hidden"
                                />
                            </div>

                        </div>

                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="flex items-center mb-[8px]">
                                <Input type="checkbox" className="w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[27px] h-[14px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[27px] rounded-[5px] border border-[#8E8E90]" />
                                <p className="mb-0 px-[10px]">I agree to the terms & conditions *</p>
                            </div>
                        </div>
                        <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                            <div className="flex items-center -m-[5px]">
                                <div className="px-[5px]">
                                    <AlertDialogCancel className=" text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] uppercase
                                        font-medium relative cursor-pointer 
                                        h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
                                        rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
                                        bg-transparent border border-[#671448] hover hover:text-[#ffffff] leading-0 tracking-[0.9px] hover btn-base1">
                                        Cancel
                                    </AlertDialogCancel>
                                </div>
                                <div className="px-[5px]">
                                    <Button className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#fff] uppercase font-medium relative cursor-pointer 
                                        h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
                                        rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
                                        bg-[#671448] hover leading-0 tracking-[2px]">APPLY NOW
                                    </Button>
                                </div>
                                <div className="px-[5px]">
                                    <SuccesModal />
                                </div>
                            </div>
                        </div>

                    </div>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    )
}
