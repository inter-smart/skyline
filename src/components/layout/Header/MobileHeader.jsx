"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SearchButton from "./SearchButton";


const menuLinkClass = `
 3xs:text-[11px] text-[9px] font-normal outline-0 underline-0 transition-all
  hover:text-[#F6271F] cursor-pointer hover:text-[#f6271f] hover:underline-none`;

const menutrigger = `text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-center font-normal w-full overflow-hidden bg-gradient-to-b from-[rgba(7,80,160,0.35)]
    to-[rgba(237,69,70,0.30)] shadow-2xl flex items-center justify-center group 
    min-w-[45px] xl:min-w-[55px] 2xl:min-w-[65px] 3xl:min-w-[83px] min-h-[25px] xl:min-h-[30px] 2xl:min-h-[37px] 3xl:min-h-[47px] px-[8px] 
    rounded-[100px] bg-white border border-[#E2E0E0] text-gray-600 appearance-none
    hover:bg-gradient-to-r hover:from-[rgba(7,80,160,0.40)] hover:to-[rgba(237,69,70,0.50)] focus-visible:outline-0 focus-visible:ring-0
    focus-visible:shadow-none `

const menuOption = `
    text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] py-[8px] px-4
    focus:bg-gradient-to-b  
    focus:from-[rgba(7,80,160,0.35)] focus:to-[rgba(237,69,70,0.30)] hover:bg-gradient-to-b  
    hover:from-[rgba(7,80,160,0.35)] hover:to-[rgba(237,69,70,0.30)] hover:text-black hover:font-medium 
    focus:text-black focus:font-medium cursor-pointer`;

const menuSelectcontent = `bg-white border border-[#CCCCCC] rounded-md shadow-md font-normal text-black focus:outline-none`

export default function MobileHeader() {
    return (
        <section className="bg-white py-[5px_10px]">
            <div className="container">
                <Sheet>
                    <div className="flex items-center justify-between border-b border-[#f4f4f4] mb-[8px] ">
                        <div className="flex items-center w-1/3 ">
                            <SheetTrigger className="w-[25px] h-[25px] flex items-center justify-center">
                                <svg className="w-full h-full" viewBox="0 0 464.205 464.205" >
                                    <g id="grip-solid-horizontal_1_">
                                        <path d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 
                                    29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z"></path>
                                        <path d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013
                                     29.013-29.013h406.18c16.023 0 29.013 12.989 
                                    29.013 29.013s-12.99 29.012-29.014 29.012z"></path>
                                        <path d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023
                                     0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z"></path>
                                    </g>
                                </svg>
                            </SheetTrigger>
                        </div>                         
                    </div>
                     
                    <div className="flex items-center justify-between border-t border-[#f4f4f4] pt-[7px]">
                        <Link
                            href="/become-a-vendor"
                            className={`${menuLinkClass} max-w-auto flex items-center  `}  >
                            <span className="w-full h-full flex items-center">
                                Become A Vendor
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className={`${menuLinkClass} `}>
                            Advertise with us
                        </Link>
                        <Link
                            href="/contact"
                            className={`${menuLinkClass} `}>
                            Sign In / Sign Up
                        </Link>
                    </div>

                    <SheetContent side="left">
                        <SheetHeader>
                            <div className="flex items-center w-full border-b border-[#f4f4f4] pb-[10px] mb-[10px]">
                                <Link href="/" className="block max-w-[115px]  w-full h-full">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="IndiaZone Logo"
                                        width={175}
                                        height={100}
                                        className="w-full h-full 3xl:max-w-[125px] 2xl:max-w-[100px] max-w-[90px] object-contain block hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                            </div>
                            <SheetDescription>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1" className="border-b border-[#f4f4f4]">
                                        <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span> All Categories</span>
                                            </div>

                                        </AccordionTrigger>
                                        <AccordionContent className="text-[12px] bg-[#eeeeee] p-[10px] ">
                                            <ul>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Agriculture & Food
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Apparel & Fashion
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Automotive & Transport
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2" className="border-b border-[#f4f4f4]">
                                        <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Care & Learn</span>
                                            </div>

                                        </AccordionTrigger>
                                        <AccordionContent className="text-[12px] bg-[#eeeeee] p-[10px] ">
                                            <ul>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Agriculture & Food
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Apparel & Fashion
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Automotive & Transport
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3" className="border-b border-[#f4f4f4]">
                                        <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Featured RFQs & Suppliers</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[12px] bg-[#eeeeee] p-[10px] ">
                                            <ul>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Agriculture & Food
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Apparel & Fashion
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Automotive & Transport
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4" className="border-b border-[#f4f4f4]">
                                        <div className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Subscription plan</span>
                                            </div>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="border-b border-[#f4f4f4]">
                                        <AccordionTrigger className="text-[12px] font-normal text-black py-[5px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Vendor</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[12px] bg-[#eeeeee] p-[10px] ">
                                            <ul>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Agriculture & Food
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Apparel & Fashion
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Automotive & Transport
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6" className="border-b border-[#f4f4f4]">
                                        <div className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Help</span>
                                            </div>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem value="item-7" className="border-b border-[#f4f4f4]">
                                        <div className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Contact</span>
                                            </div>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem value="item-8" className="border-b border-[#f4f4f4]">
                                        <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                                            <div className="flex items-center">
                                                <span>Buyer</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[12px] bg-[#eeeeee] p-[10px] ">
                                            <ul>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Agriculture & Food
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Apparel & Fashion
                                                    </Link>
                                                </li>
                                                <li className="last-of-type:mb-0">
                                                    <Link
                                                        href="/"
                                                        aria-label="category_link"
                                                        className="text-[11px] text-[#101010] font-light relative w-full flex items-center py-[5px]
                                                           
                                                            transition-all duration-200" >
                                                        Automotive & Transport
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>


            </div>
        </section>
    )
}