"use client";

import React from "react";
import Link from "next/link";
import { useBookingFormContext } from "@/context/BookingFormContext";

const BookConsultationButtons = ({ data, service_id }) => {
  const { openDialog } = useBookingFormContext();

  const handleClick = () => {
    openDialog({
      slug: service_id,
      source: "services",
    });
  };

  return (
    <div className="w-full xl:w-[30%]">
      <div className="xl:mb-[15px] 2xl:mb-[25px] [&>*]:p-[5px] mx-[-5px] flex flex-wrap xl:justify-end">
        <div className="flex">
          <div
            onClick={handleClick}
            style={{ "--bg-color": data?.buttonColor, "--custom-text-color": data?.buttonTextColor }}
            className="text-[10px] sm:text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-medium text-[var(--custom-text-color)] bg-[var(--bg-color)] w-fit h-auto p-[10px] 2xl:p-[15px]  border-1 border-white rounded-[3px] hover:bg-white hover:text-base1 transition-all duration-300"
          >
            {"BOOK AN APPOINTEMENT"}
          </div>
        </div>
        <div className="flex">
          <Link
            style={{ "--bg-color": data?.buttonColor, "--custom-text-color": data?.buttonTextColor }}
            href={data?.buttonUrl}
            //   target={data?.target ? "_blank" : "_self"}
            className="text-[10px] sm:text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-medium text-[var(--custom-text-color)] bg-[var(--bg-color)]  w-fit h-auto p-[10px] 2xl:p-[15px]  border-1 border-white rounded-[3px] hover:bg-white hover:text-base1 transition-all duration-300"
          >
            {data?.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookConsultationButtons;
