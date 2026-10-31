"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useBookingFormContext } from "@/context/BookingFormContext";

export default function ConsultantCard({ item, expanded, toggleExpand }) {
  const { openDialog } = useBookingFormContext();

  const handleClick = (id) => {
    openDialog({
      slug: id,
      source: "consultants",
    });
  };

  return (
    <div
      className="consultantBx w-full h-full p-[12px] xl:p-[15px] 3xl:p-[20px] rounded-[4px] border-[#D6E2ED]
                     border overflow-hidden bg-white flex flex-wrap"
    >
      {/* Left Section */}
      <div className="w-full cmnBx flex-grow  xl:w-[190px] 2xl:w-[250px] 3xl:w-[315px] lg:h-full">
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
            src={item?.profile_image_value}
            className="w-full h-full object-cover"
            width={375}
            height={270}
            alt={item?.profile_image_alt_text_value}
          />
        </div>
        <div className="info">
          <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#00335B] font-medium mb-[4px] 2xl:mb-[8px]">
            {item.name}
          </div>
          <div
            className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-normal mb-[5px] 2xl:mb-[8px] flex items-start leading-4 relative
                                before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                before:h-[14px] before:rounded-[6px] before:mr-[8px]"
          >
            {item?.designation}
          </div>
          <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase">{item?.qualifications}</div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={` flex-grow rtBx w-full   xl:w-[calc(100%-190px)] 2xl:w-[calc(100%-250px)] 3xl:w-[calc(100%-315px)]  xl:pl-[20px] 3xl:pl-[30px] pr-[20px] transition-all duration-300`}
      >
        <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#00335B] font-medium mb-[10px] 2xl:mb-[15px]">
          {item?.name}
        </div>
        <div
          className="text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[#671448] font-normal mb-[10px] 2xl:mb-[15px] flex items-start leading-4 relative
                                before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                before:h-[14px] before:rounded-[6px] before:mr-[8px]"
        >
          {item?.designation}
        </div>
        <div className="text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase">{item?.qualifications}</div>

        <div className="w-full mt-[15px] inline">
          <ul className="mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
            {item?.experience && (
              <li
                className="relative text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                        before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                        before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
              >
                <strong className="font-medium">{item?.experience}</strong> Years Experience
              </li>
            )}
            {item?.languages && (
              <li
                className="relative text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
              >
                Languages:{" "}
                {item?.languages.map((lang, index) => (
                  <strong key={index} className="font-medium">
                    {lang?.name}
                    {index !== item?.languages.length - 1 && ", "}
                  </strong>
                ))}
              </li>
            )}
          </ul>

          <div className="text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-[#671448] font-medium mb-[10px] 3xl:mb-[15px]">Specialization</div>
          <ul className="flex flex-wrap items-center -m-[4px] mb-[10px] 3xl:mb-[20px]">
            {(expanded[item?.id] ? item?.special_interests : item?.special_interests.slice(0, 2)).map((spec, idx) => (
              <li key={idx} className="p-[4px]">
                <div className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border border-[rgba(33,33,33,0.3)] p-[5px] 3xl:p-[8px] rounded-[40px] flex items-center justify-center w-full h-full">
                  {spec?.name}
                </div>
              </li>
            ))}

            {item?.special_interests.length > 3 && (
              <li className="p-[4px]">
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-[11px] 2xl:text-[13px] 3xl:text-[14px] text-base1 font-medium transition-all duration-100 hover:text-base2"
                >
                  {expanded[item.id] ? "- Less" : "+ More"}
                </button>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2   w-100 border-t border-black-10 pt-4">
            <Link
              href={`/consultants/${item?.slug}`}
              className="text-[12px] 2xl:text-[14px] 3xl:text-[15px] text-[#671448] p-[10px] border border-black-10 font-medium uppercase flex items-center transition-all group duration-200 hover:text-base2 hover:tracking-[1px] cursor-pointer"
            >
              View Details
              <div className="w-[13px] h-[13px] flex ml-[10px]">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1"
                  fill="none"
                >
                  <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
                </svg>
              </div>
            </Link>
            <div
              onClick={() => handleClick(`${item?.id}`)}
              className="text-[12px] 2xl:text-[14px] 3xl:text-[15px] text-[#671448] p-[10px] border border-black-10  font-medium uppercase flex items-center transition-all group duration-200 hover:text-base2 hover:tracking-[1px]  cursor-pointer"
            >
              Book Appointment
              <div className="w-[13px] h-[13px] flex ml-[10px]">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1"
                  fill="none"
                >
                  <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
