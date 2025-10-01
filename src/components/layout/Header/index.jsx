"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"


import MobileHeader from "./MobileHeader";




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

  const menuLinks = "text-[18px] text-[#010101] font-normal flex items-center justiy-center transition-all duration-100 hover:text-base1"
  return (
    <header>
      <div className={`w-full absolute top-0 left-0 z-10 bg-white border-b border-[#CFCFCF] shadow-l max-lg:hidden ${isScrolled ? "stickyHeader" : ""
        }`}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-[250px]">
              <Image src="/images/logo.svg" width="250" height="115" className="w-full h-full object-contain" />
            </div>
            <div className="w-[calc(100%-250px)] pl-[85px]">
              <div className="flex items-center justify-between">
                {/* menus */}
                <div className="w-[calc(100%-520px)] flex items-center">
                  {menus.map((item, id) => (
                    <div key={id} className="px-[0_20px]">
                      <Link href={item.link} className={menuLinks}>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* .rightSec */}
                <div className="w-[520px] flex items-center -m-[12px]">
                  <div className="p-[12px]">
                    <div className="flex ">
                      <div className="w-[20px]">
                        <div className="w-full flex items-center">
                          <svg className="w-full h-full " viewBox="0 0 21 21" fill="none" >
                            <path d="M20.0625 12.4018V14.5513C20.0608 15.1945 19.8427 15.8184 19.4435 16.3227C19.0442 16.8269 18.487 17.1822 17.8614 17.3314C17.7103 18.3504 17.1984 19.2812 16.4188 19.9545C15.6393 20.6278 14.6439 20.9988 13.6138 21H11.4643C10.8942 21 10.3474 20.7735 9.94432 20.3704C9.5412 19.9673 9.31473 19.4205 9.31473 18.8504C9.31473 18.6604 9.39022 18.4782 9.5246 18.3438C9.65897 18.2094 9.84122 18.1339 10.0312 18.1339C10.2213 18.1339 10.4035 18.2094 10.5379 18.3438C10.6723 18.4782 10.7478 18.6604 10.7478 18.8504C10.7478 19.0405 10.8233 19.2227 10.9576 19.3571C11.092 19.4915 11.2743 19.567 11.4643 19.567H13.6138C14.2474 19.5646 14.8623 19.3524 15.3625 18.9634C15.8626 18.5745 16.2198 18.0309 16.3782 17.4174H15.7634C15.5734 17.4174 15.3911 17.3419 15.2567 17.2075C15.1224 17.0732 15.0469 16.8909 15.0469 16.7009V10.2522C15.0469 10.0622 15.1224 9.87995 15.2567 9.74558C15.3911 9.6112 15.5734 9.53571 15.7634 9.53571H16.4799V8.8192C16.4799 7.10891 15.8005 5.46866 14.5911 4.2593C13.3818 3.04995 11.7415 2.37054 10.0312 2.37054C8.32096 2.37054 6.68072 3.04995 5.47136 4.2593C4.262 5.46866 3.58259 7.10891 3.58259 8.8192V9.53571H4.29911C4.48914 9.53571 4.67139 9.6112 4.80576 9.74558C4.94014 9.87995 5.01562 10.0622 5.01562 10.2522V16.7009C5.01562 16.8909 4.94014 17.0732 4.80576 17.2075C4.67139 17.3419 4.48914 17.4174 4.29911 17.4174H2.86607C2.10594 17.4174 1.37695 17.1154 0.839453 16.578C0.30196 16.0405 0 15.3115 0 14.5513V12.4018C0.00237436 11.7682 0.214608 11.1533 0.603522 10.6532C0.992436 10.153 1.53611 9.79585 2.14955 9.63746V8.8192C2.14955 6.72884 2.97994 4.7241 4.45805 3.246C5.93615 1.76789 7.94089 0.9375 10.0312 0.9375C12.1216 0.9375 14.1263 1.76789 15.6045 3.246C17.0826 4.7241 17.9129 6.72884 17.9129 8.8192V9.63746C18.5264 9.79585 19.0701 10.153 19.459 10.6532C19.8479 11.1533 20.0601 11.7682 20.0625 12.4018Z" fill="#671448" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-[calc(100%-20px)] pl-[10px]">
                        <div className="text-[18px] text-[#333333] leading-none mb-[2px]">Call Emergency</div>
                        <Link href="tel:024 123 456 789" className="text-[18px] text-black transition-all duration-100 hover:text-base1">024 123 456 789</Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-[12px]">
                    <Link href="/" className="text-[15px] text-white uppercase font-medium h-[50px] rounded-[5px] px-[20px] flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover:bg-base1">Book An Appointment</Link>
                  </div>
                  <div className="p-[12px]">
                    <Button className="w-[50px] h-[50px] flex items-center bg-transparent !p-0 rounded-full overflow-hidden group cursor-pointer hover:rotate-">
                      <svg className="!w-full !h-full object-cover fill-base1 group-hover:fill-base2" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24"   />
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
      <div className="lg:hidden w-full absolute top-0 left-0 z-10">
        <MobileHeader />
      </div>
    </header >
  );
}
