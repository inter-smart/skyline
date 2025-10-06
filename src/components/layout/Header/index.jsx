"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

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




export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Consultants", link: "/consultants" },
    { name: "News & Insights", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];

  const menuLinkClass = `
 3xs:text-[11px] text-[9px] font-normal outline-0 underline-0 transition-all
  hover:text-[#F6271F] cursor-pointer hover:text-[#f6271f] hover:underline-none`;
  const menuLinks = "text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#010101] font-normal flex items-center justiy-center transition-all duration-100 hover:text-base1"
  return (
    <header>
      <div className={`w-full  max-lg:hidden ${isScrolled ? "stickyHeader" : ""
        }`}>
        <div className="container">
          <div className="flex items-center">
            <div className="lg:w-[135px] xl:w-[165px] 2xl:w-[200px] 3xl:w-[250px]">
              <Image src="/images/logo.svg" width="250" height="115" className="object-contain" alt="logo" />
            </div>
            <div className="lg:w-[calc(100%-135px)] xl:w-[calc(100%-165px)] 2xl:w-[calc(100%-200px)] 3xl:w-[calc(100%-250px)] pl-[25px] xl:pl-[60px] 2xl:pl-[65px] 3xl:pl-[85px]">
              <div className="w-full flex items-center justify-between">
                {/* menus */}
                <div className="flex items-center">
                  {menus.map((item, id) => (
                    <div key={id} className="px-[10px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[20px]">
                      <Link href={item.link} className={menuLinks} aria-label="menulinks">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* .rightSec */}
                <div className="flex items-center justify-end -m-[9px] 2xl:-m-[12px]">
                  <div className="p-[9px] 2xl:p-[12px]">
                    <div className="flex ">
                      <div className="w-[15px] 3xl:w-[20px]">
                        <div className="w-full flex items-center">
                          <svg className="w-full h-full " viewBox="0 0 21 21" fill="none" >
                            <path d="M20.0625 12.4018V14.5513C20.0608 15.1945 19.8427 15.8184 19.4435 16.3227C19.0442 16.8269 18.487 17.1822 17.8614 17.3314C17.7103 18.3504 17.1984 19.2812 16.4188 19.9545C15.6393 20.6278 14.6439 20.9988 13.6138 21H11.4643C10.8942 21 10.3474 20.7735 9.94432 20.3704C9.5412 19.9673 9.31473 19.4205 9.31473 18.8504C9.31473 18.6604 9.39022 18.4782 9.5246 18.3438C9.65897 18.2094 9.84122 18.1339 10.0312 18.1339C10.2213 18.1339 10.4035 18.2094 10.5379 18.3438C10.6723 18.4782 10.7478 18.6604 10.7478 18.8504C10.7478 19.0405 10.8233 19.2227 10.9576 19.3571C11.092 19.4915 11.2743 19.567 11.4643 19.567H13.6138C14.2474 19.5646 14.8623 19.3524 15.3625 18.9634C15.8626 18.5745 16.2198 18.0309 16.3782 17.4174H15.7634C15.5734 17.4174 15.3911 17.3419 15.2567 17.2075C15.1224 17.0732 15.0469 16.8909 15.0469 16.7009V10.2522C15.0469 10.0622 15.1224 9.87995 15.2567 9.74558C15.3911 9.6112 15.5734 9.53571 15.7634 9.53571H16.4799V8.8192C16.4799 7.10891 15.8005 5.46866 14.5911 4.2593C13.3818 3.04995 11.7415 2.37054 10.0312 2.37054C8.32096 2.37054 6.68072 3.04995 5.47136 4.2593C4.262 5.46866 3.58259 7.10891 3.58259 8.8192V9.53571H4.29911C4.48914 9.53571 4.67139 9.6112 4.80576 9.74558C4.94014 9.87995 5.01562 10.0622 5.01562 10.2522V16.7009C5.01562 16.8909 4.94014 17.0732 4.80576 17.2075C4.67139 17.3419 4.48914 17.4174 4.29911 17.4174H2.86607C2.10594 17.4174 1.37695 17.1154 0.839453 16.578C0.30196 16.0405 0 15.3115 0 14.5513V12.4018C0.00237436 11.7682 0.214608 11.1533 0.603522 10.6532C0.992436 10.153 1.53611 9.79585 2.14955 9.63746V8.8192C2.14955 6.72884 2.97994 4.7241 4.45805 3.246C5.93615 1.76789 7.94089 0.9375 10.0312 0.9375C12.1216 0.9375 14.1263 1.76789 15.6045 3.246C17.0826 4.7241 17.9129 6.72884 17.9129 8.8192V9.63746C18.5264 9.79585 19.0701 10.153 19.459 10.6532C19.8479 11.1533 20.0601 11.7682 20.0625 12.4018Z" fill="#671448" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-[calc(100%-15px)] 3xl:w-[calc(100%-20px)] pl-[10px]">
                        <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#333333] leading-none mb-[1px] 3xl:mb-[2px]">Call Emergency</div>
                        <Link href="tel:024 123 456 789" className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-black leading-none overflow-hidden transition-all duration-100 hover:text-base1" aria-label="call">024 123 456 789</Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-[9px]  2xl:p-[12px]">
                    <Link href="/" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-white uppercase font-medium relative h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] rounded-[3px] 3xl:rounded-[5px]
                    px-[10px] 2xl:px-[20px]  overflow-hidden
                    flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover leading-0">Book An Appointment</Link>
                  </div>
                  <div className="p-[12px]">
                    <Button className="w-[25px] xl:w-[32px] 2xl:w-[40px] 3xl:w-[50px] h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] flex items-center bg-transparent !p-0 rounded-full overflow-hidden group cursor-pointer hover:rotate-">
                      <svg className="!w-full !h-full object-cover fill-base1 group-hover:fill-base2" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24" />
                        <rect x="13" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                        <rect x="27.666" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                        <rect x="27.666" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                        <rect x="13" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container min-lg:hidden">
        <Sheet>
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-between w-full"> 
              <div className="w-[150px] sm:w-[200px]">
                <Image src="/images/logo.svg" width="200" height="115" className="object-contain" alt="logo" />
              </div>
              <div className="flex items-center">
                <div className="mr-[20px]">
                  <Link href="/" className="text-[8px] sm:text-[10px] text-white uppercase font-medium h-[30px] rounded-[3px] 3xl:rounded-[5px]
                    px-[10px]  
                    flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover:bg-base1 leading-0">Book An Appointment</Link>
                </div>
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
          </div>
          <SheetContent side="right">
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
                    <Link href="/" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>Home</span>
                      </div>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-[#f4f4f4]">
                    <Link href="/" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>About Us</span>
                      </div>
                    </Link>

                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-[#f4f4f4]">
                    <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                      <div className="flex items-center">
                        <span>Services</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] bg-[#671448] p-[10px] ">
                      <ul>
                        <li className="last-of-type:mb-0">
                          <Link
                            href="/"
                            aria-label="category_link"
                            className="text-[11px] text-white font-light relative w-full flex items-center py-[5px]
                             transition-all duration-200" >
                            Agriculture & Food
                          </Link>
                        </li>
                        <li className="last-of-type:mb-0">
                          <Link
                            href="/"
                            aria-label="category_link"
                            className="text-[11px] text-white font-light relative w-full flex items-center py-[5px]
                              transition-all duration-200" >
                            Apparel & Fashion
                          </Link>
                        </li>
                        <li className="last-of-type:mb-0">
                          <Link
                            href="/"
                            aria-label="category_link"
                            className="text-[11px] text-white font-light relative w-full flex items-center py-[5px]
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
                        <span>Consultants</span>
                      </div>
                    </div>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-[#f4f4f4]">
                    <Link href="/" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>News & Insights </span>
                      </div>
                    </Link>

                  </AccordionItem>
                  <AccordionItem value="item-6" className="border-b border-[#f4f4f4]">
                    <Link href="/" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>Contact</span>
                      </div>
                    </Link>
                  </AccordionItem>
                </Accordion>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header >

  );
}
