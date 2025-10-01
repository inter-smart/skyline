
"use client";
import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";



const menutrigger = `text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-center font-normal w-full overflow-hidden bg-gradient-to-b from-[rgba(7,80,160,0.35)]
    to-[rgba(237,69,70,0.30)] shadow-2xl flex items-center justify-center group cursor-pointer
    min-w-[45px] xl:min-w-[55px] 2xl:min-w-[65px] 3xl:min-w-[83px] min-h-[25px] xl:min-h-[30px] 2xl:min-h-[37px] 3xl:min-h-[47px] px-[8px] 
    rounded-[100px] bg-white border border-[#E2E0E0] text-gray-600 appearance-none
    hover:bg-gradient-to-r hover:from-[rgba(7,80,160,0.40)] hover:to-[rgba(237,69,70,0.50)] focus-visible:outline-0 focus-visible:ring-0
    focus-visible:shadow-none `

const menuOption = `
    text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] w-full py-[15px] px-[20px]  
    focus:bg-[#014FA2] border-none rounded-none hover:bg-[#014FA2] hover:text-white hover:font-medium 
    focus:text-white focus:font-medium cursor-pointer`

const menuSelectcontent = `min-w-[230px] bg-white border-none rounded-[10px] overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,00.25)] font-normal text-black !p-0 focus:outline-none`

const placeholderText = "Enter a keyword to search by products / vendors"
const searchItem = `text-[10px] 2xl:text-[12px] 3xl:text-[15px] realtive flex items-center cursor-pointer not-last-of-type:mb-[10px] not-last-of-type:2xl:mb-[15px] before:relative 
    before:left-0 before:w-[15px] before:h-[15px] before:2xl:w-[18px] before:2xl:h-[18px] before:flex before:bg-[url('/images/search_icon.svg')] 
    before:bg-cover before:bg-no-repeat hover:font-medium `


export default function SearchButton() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="relative w-full lg:max-w-[460px] xl:max-w-[575px] 2xl:max-w-[685px] 3xl:max-w-[850px]">

            <div className="w-full h-[35px] 2xl:h-[37px] 3xl:h-[48px] 
                   flex items-center justify-between  rounded-full lg:border lg:border-gray-300 overflow-hidden bg-[#f4f4f4] lg:bg-white gap-1">
                {/* Left: Select dropdown */}
                <div className=" max-lg:hidden">
                    <Select className="border-none bg-white text-gray-600 focus:ring-0 focus:ring-offset-0 p-0 ">
                        <SelectTrigger className={`${menutrigger} max-w-[75px] lg:max-w-[85px] 3xl:max-w-[100px] border-none bg-transparent shadow-none pr-0
                        hover:bg-transparent flex items-center justify-center 
                        gap-1`}>
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent className={`${menuSelectcontent} !p-0`}>
                            <SelectItem value="agriculture" className={`${menuOption} `}>ALL</SelectItem>
                            <SelectItem value="electronics" className={`${menuOption} `}>Vendors</SelectItem>
                            <SelectItem value="fashion" className={`${menuOption} `}>Products</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {/* Divider */}
                <div className="h-[20px] w-[1px] bg-gray-300 max-lg:hidden" />
                <div className="relative w-full xl:w-[calc(100%-75px)] 2xl:w-[calc(100%-85px)] 3xl:w-[calc(100%-100px)] flex items-center h-full">
                    {/* Input */}
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder={placeholderText}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] text-[12px] placeholder:3xl:text-[16px] placeholder:2xl:text-[12px] 
                            placeholder:xl:text-[10px] 3xs:placeholder:text-[10px] placeholder:text-[8px]  text-[#9E9E9E] font-light placeholder:font-light
                             flex-1 border-none w-full
                            shadow-none text-sm placeholder:text-gray-400 px-4 lg:px-2 2xl:px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>
                    {/* Mic Icon */}
                    <button
                        type="submit"
                        className="rounded-none  text-gray-600 hover:bg-transparent w-[25px] mr-[10px]"            >
                        <svg className="w-full h-full object-contain max-w-[13px]" viewBox="0 0 19 25" fill="none" >
                            <path d="M9.11621 20.7112L8.97852 20.7005C4.48391 20.325 0.941406 16.5463 0.941406 11.9564C0.941628 11.6256 1.20931 11.3579 1.54004 11.3577C1.87096 11.3577 2.13943 11.6254 2.13965 11.9564C2.13965 16.1336 5.53847 19.5325 9.71582 19.5325C13.8931 19.5324 17.291 16.1336 17.291 11.9564C17.2912 11.6254 17.5597 11.3578 17.8906 11.3577C18.2215 11.3577 18.49 11.6254 18.4902 11.9564C18.4902 16.5463 14.9468 20.325 10.4521 20.7005L10.3145 20.7112V23.6507H13.8027C14.1337 23.6507 14.4022 23.9193 14.4023 24.2503C14.4023 24.5814 14.1338 24.8499 13.8027 24.8499H5.62793C5.29689 24.8499 5.02832 24.5814 5.02832 24.2503C5.02847 23.9193 5.29698 23.6507 5.62793 23.6507H9.11621V20.7112Z" fill="black" stroke="white" strokwidth="0.3" />
                            <path d="M9.71387 0.150391C12.2982 0.150391 14.4014 2.25269 14.4014 4.83691V11.957C14.4012 14.5411 12.2981 16.6436 9.71387 16.6436C7.12973 16.6435 5.02749 14.5412 5.02734 11.957V4.83691C5.02736 2.2527 7.12965 0.150406 9.71387 0.150391ZM9.71387 1.34863C7.79044 1.34865 6.2256 2.91349 6.22559 4.83691V11.957C6.22573 13.8803 7.79052 15.4453 9.71387 15.4453C11.6373 15.4453 13.202 13.8804 13.2021 11.957V4.83691C13.2021 2.91347 11.6374 1.34863 9.71387 1.34863Z" fill="black" stroke="white" strokwidth="0.3" />
                        </svg>
                    </button>
                    {/* Search Button */}
                    <button
                        className="w-[65px] xl:w-[80px] 2xl:w-[120px] h-full bg-[#F67436] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#014FA2] px-1 xl:px-6 text-white"
                        aria-label="search"
                    >
                        <svg className="w-[12px] h-[12px] lg:w-[15px] xl:w-[12px] 2xl:w-[15px] 3xl:w-[18px] 3xl:h-[18px]" viewBox="0 0 20 20" fill="none" >
                            <path d="M19.8104 18.912L14.6467 13.8308C15.9989 12.3617 16.8297 10.4188 16.8297 8.28074C16.829 3.70712 13.0619 0 8.41452 0C3.76715 0 0 3.70712 0 8.28074C0 12.8543 3.76715 16.5615 8.41452 16.5615C10.4225 16.5615 12.2642 15.8669 13.7108 14.7123L18.8946 19.8135C19.1471 20.0623 19.5572 20.0623 19.8098 19.8135C20.0629 19.5647 20.0629 19.1609 19.8104 18.912ZM8.41452 15.2874C4.48234 15.2874 1.29469 12.1504 1.29469 8.28074C1.29469 4.41103 4.48234 1.27404 8.41452 1.27404C12.3467 1.27404 15.5344 4.41103 15.5344 8.28074C15.5344 12.1504 12.3467 15.2874 8.41452 15.2874Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Conditionally visible search content */}
            {isFocused && (
                <div className="w-full xl:w-[calc(100%-65px)] 2xl:w-[calc(100%-75px)] 3xl:w-[calc(100%-90px)] absolute top-[calc(100%+5px)] right-0 
                    bg-[rgba(158,158,158,0.5)] p-[1px] 
                    rounded-[10px] overflow-hidden z-10 transition-all">
                    <div className="bg-white w-full p-[10px] lg:p-[20px] rounded-[10px]">
                        <ul>
                            <li className={searchItem}>
                                <div className="w-[50px] h-[50px] flex items-center justify-center p-[4px] bg-[#F5F5F5] rounded-[5px] mx-[15px]">
                                    <Image src="/images/home-category/agri-2.png"
                                        alt="IndiaZone Logo"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-contain" />
                                </div>
                                <span>Basmati Rice</span>
                            </li>
                            <li className={searchItem}>
                                <div className="w-[50px] h-[50px] flex items-center justify-center p-[4px] bg-[#F5F5F5] rounded-[5px] mx-[15px]">
                                    <Image src="/images/home-category/search2.png"
                                        alt="IndiaZone Logo"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-contain" />
                                </div>
                                <span >Non-Basmati Rice</span>
                            </li>
                            <li className={searchItem}>
                                <div className="w-[50px] h-[50px] flex items-center justify-center p-[4px] bg-[#F5F5F5] rounded-[5px]  mx-[15px]">
                                    <Image src="/images/home-category/search3.png"
                                        alt="IndiaZone Logo"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-contain" />
                                </div>
                                <span >White Rice</span>
                            </li>
                            <li className={searchItem}>
                                <div className="w-[50px] h-[50px] flex items-center justify-center p-[4px] bg-[#F5F5F5] rounded-[5px]  mx-[15px]">
                                    <Image src="/images/home-category/search4.png"
                                        alt="IndiaZone Logo"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-contain" />
                                </div>
                                <span >Matta Rice</span>
                            </li>
                            <li className={searchItem}>
                                <div className="w-[50px] h-[50px] flex items-center justify-center p-[4px] bg-[#F5F5F5] rounded-[5px]  mx-[15px]">
                                    <Image src="/images/home-category/search5.png"
                                        alt="IndiaZone Logo"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-contain" />
                                </div>
                                <span >Jeeraga Rice</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}