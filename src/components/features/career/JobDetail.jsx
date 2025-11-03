"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import CareerForm from "./CareerForm";
import { renderHtml } from "@/utils/parseHtml";

export default function JobDetail({careerId, careers }) {
  const [open, setOpen] = useState(false); // Track open/close state

  // Close alert when form is submitted


  const handleFormSubmit = () => {
    setOpen(false);
    
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] uppercase
             font-medium relative cursor-pointer 
            h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
             rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
             bg-transparent border border-[#671448] hover hover:text-[#ffffff] leading-0 tracking-[0.9px]"
      >
        VIEW DETAILS
      </AlertDialogTrigger>

      <AlertDialogContent
        className="max-w-[95%] sm:!max-w-[630px] 2xl:!max-w-[750px] 3xl:!max-w-[950px] bg-white p-[40px_20px] lg:p-[35px_25px] 
                        xl:p-[45px_30px] 2xl:p-[55px_35px] 3xl:p-[85px] rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px] overflow-auto"
      >
        <div
          className="Departments text-[11px] 2xl:text-[13px] 3xl:text-[17px] text-[#00335B] font-normal leading-normal 
                    w-fit 2xl:h-[18px] 3xl:h-[27px] min-w-[85px] 2xl:min-w-[95px] 3xl:min-w-[125px] px-[8px] rounded-b-[8px] bg-[#E8EFFF] text-center
                    absolute top-0 left-[20px] 2xl:left-[30px] 3xl:left-[80px] flex items-center justify-center"
        >
          {careers?.department?.title}
        </div>
        <AlertDialogCancel className="bg-transparent border-none cursor-pointer absolute top-[25px] right-[25px] w-[20px] h-[20px] flex items-center group hover:bg-transparent">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="fill-black transition-all duration-all group-hover:scale-75 group-hover:bg-transparent"
          >
            <path
              d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
                        0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
                        1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
                        13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
                        13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"
            />
          </svg>
        </AlertDialogCancel>
        <AlertDialogHeader>
          <div className="w-full relative mb-[5px] 2xl:mb-[10px] 3xl:mb-[20px]">
            <div className="text-[25px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#212121] text-left mb-[15px] leading-none">
              {careers?.title}
            </div>
            <ul className="flex items-center gap-3">
              <li
                className="relative text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                   before:absolute before:top-[4px] before:left-0 before:w-[11px] before:3xl:w-[15px] before:h-[11px] before:3xl:h-[17px] before:flex
                                    before:items-center
                                    before:bg-[url('/images/JobExp.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0  "
              >
                {careers?.experience}+ Years Exp Required
              </li>
              <li
                className="relative text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[25px]
                                    before:absolute before:top-[4px] before:left-0 before:w-[11px] before:3xl:w-[15px] before:h-[11px] before:3xl:h-[17px]
                                    before:bg-[url('/images/AvailIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 "
              >
                {careers?.job_type?.title}
              </li>
            </ul>
          </div>
        </AlertDialogHeader>

        <AlertDialogDescription className="mb-0">
          <div className="w-full">
            <div
              className="text-[11px] xl:text-[13px] 2xl:text-[16.761px] 3xl:text-[20px] text-[#00335B] font-normal 
                        leading-normal mb-[10px] 3xl:mb-[15px]"
            >
              Key Requirements:
            </div>

            <ul className="flex flex-wrap items-center -m-[3px] 3xl:-m-[4px] mb-[10px] 3xl:mb-[20px]">
              {careers?.job_tags?.map((job, index) =>(
                <li className="p-[3px] 3xl:p-[4px]">
                  <div
                    className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border
                                    border-[rgba(33,33,33,0.3)]  p-[4px_10px] 3xl:p-[5px_10px] rounded-[40px] flex items-center justify-center w-full h-full"
                  >
                    {job?.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <div
              className="text-[11px] xl:text-[13px] 2xl:text-[16.761px] 3xl:text-[20px] text-[#00335B] 
                            font-normal leading-normal mb-[15px] 3xl:mb-[20px]"
            >
              Job Description:
            </div>
            <div className="w-full">
              <div className="2xl:text-[12px] 3xl:text-[16px] text-[#1E1E1E] w-max-full mb-0 ">
               {renderHtml(careers?.description)}
              </div>
            </div>
          </div>
          <div className="w-full  mt-[15px] 2xl:mt-[25px]">
            <CareerForm careerId={careerId} onSubmitSuccess={handleFormSubmit} />
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
