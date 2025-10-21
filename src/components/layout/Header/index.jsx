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
import BookAnAppointment from "../../common/BookAnAppointment";




export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window?.scrollY > 0);
  //   };

  //   window?.addEventListener("scroll", handleScroll);
  //   return () => window?.removeEventListener("scroll", handleScroll);
  // }, []);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      link: "/services",
      submenu: [
        { name: "ENT", link: "/services/ent" },
        { name: "Cardiology", link: "/services/cardiology" },
        { name: "Orthopaedics", link: "/services/orthopaedics" },
        { name: "Neurology", link: "/services/neurology" },
      ],
    },
    { name: "Consultants", link: "/consultants" },
    { name: "News & Insights", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];

  const menuLinkClass = `
 3xs:text-[11px] text-[9px] font-normal outline-0 underline-0 transition-all
  hover:text-[#F6271F] cursor-pointer hover:text-[#f6271f] hover:underline-none`;
  const menuLinks = "text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#010101] font-normal flex items-center justiy-center transition-all duration-100 hover:text-base1"

  const cmnMenuClass = `text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium mb-[12px]`

  return (
    <header>
      <div className={`w-full transition-all duration-100 max-lg:hidden ${isScrolled ? "stickyHeader" : ""
        }`}>
        <div className="container">
          <div className="flex items-center">
            <div className="lg:w-[135px] xl:w-[165px] 2xl:w-[200px] 3xl:w-[250px]">
              <Image src="/images/logo.svg" width="250" height="115" className="object-contain" alt="logo" />
            </div>
            <div className="lg:w-[calc(100%-135px)] xl:w-[calc(100%-165px)] 2xl:w-[calc(100%-200px)] 3xl:w-[calc(100%-250px)] pl-[25px] xl:pl-[60px] 
                  2xl:pl-[65px] 3xl:pl-[85px]">
              <div className="w-full flex items-center justify-between">
                {/* menus */}
                <div className="flex items-center relative">
                  {menus.map((item, id) => (
                    <div key={id} className="relative group px-[10px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[20px]  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[0] !no-underline cursor-pointer
                            after:bg-[url('/images/arrow.svg')] after:bg-no-repeat after:bg-contain after:w-[8px] after:h-[8px]
                            after:transition-transform after:duration-300 hover:after:rotate-180">
                      {/* Main link */}
                      <Link href={item.link} className={menuLinks} aria-label="menulinks relative">
                        {item.name}
                      </Link>

                      {/* Dropdown (if submenu exists) */}
                      {item.submenu && (
                        <div className="absolute left-0 top-full mt-2 hidden w-[220px] bg-white shadow-lg rounded-[6px] overflow-hidden group-hover:block z-50">
                          {item.submenu.map((sub, subId) => (
                            <Link
                              key={subId}
                              href={sub.link}
                              className="block text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#010101] px-4 py-2 hover:bg-[#f6271f] hover:text-white transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
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
                    <BookAnAppointment />
                  </div>
                  <div className="p-[12px]">
                    <Sheet>
                      <SheetTrigger className="w-[25px] xl:w-[32px] 2xl:w-[40px] 3xl:w-[50px] h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] flex items-center bg-transparent !p-0 rounded-full overflow-hidden group cursor-pointer hover:rotate-">
                        <svg className="!w-full !h-full object-cover fill-base1 group-hover:fill-base2" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="24" />
                          <rect x="13" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="27.666" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="27.666" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="13" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                        </svg>
                      </SheetTrigger>

                      <SheetContent side="right" className="bg-base2 p-[40px_25px] md:p-[45px_35px] 2xl:p-[50px_40px] 3xl:p-[80px_50px_70px] h-screen overflow-auto border-none
                      !max-w-[300px] xl:!max-w-[400px] 3xl:!max-w-[500px]">
                        <SheetDescription >
                          <div className="text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[36px] font-normal text-white font-unna mb-[20px]">Contact Information</div>
                          <ul className="mb-[30px] 3xl:mb-[35px]">
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>
                                Location
                              </div>
                              <div className={`${cmnMenuClass} font-normal`}>
                                Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom
                              </div>
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>
                                Email
                              </div>
                              <a href="mailto:info@skylinehospitalscoventry.co.uk" className={`${cmnMenuClass} font-normal mb-[12px] block`} aria-label="email_link">
                                info@skylinehospitalscoventry.co.uk
                              </a>
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>
                                Phone
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                Main: <a href="tel:024 7XXX XXXX" className="flex items-center pl-1"> 024 7XXX XXXX</a>
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                Emergency: <a href="tel:024 7XXX XXXX" className="flex items-center pl-1">024 7XXX XXXX</a>
                              </div>
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>
                                Opening Hours
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                <span className="font-light">General Services</span><span className="pl-[5px]">: Mon-Fri: 8AM-8PM</span>
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                <span className="font-light">Emergency Care </span><span className="pl-[5px]">: 24/7 Available</span>
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                <span className="font-light">Specialist Clinics </span><span className="pl-[5px]">: Mon-Sat: 9AM-6PM</span>
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                <span className="font-light">Diagnostic Services </span><span className="pl-[5px]">: Mon-Fri: 7AM-7PM</span>
                              </div>
                            </li>
                          </ul>

                          {/* social Links */}
                          <div className="w-full">
                            <div className={`${cmnMenuClass} text-[18px] font-medium text-white mb-[20px]`}>Follow us on</div>
                            <ul className="flex items-center ">
                              <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                  <div className="w-[7px] h-[13px] flex items-center justify-center">
                                    <svg viewBox="0 0 8.794 17.725" className="fill-base2" >
                                      <path id="Forma_1_copy_7" data-name="Forma 1 copy 7" d="M132.987,7392.83l-2.109,0c-2.37,0-3.9,1.712-3.9,4.362v2.011h-2.121a.347.347,0,0,0-.332.36v2.916a.347.347,0,0,0,.332.361h2.121v7.352a.349.349,0,0,0,.332.362h2.767a.348.348,0,0,0,.332-.362v-7.352h2.48a.347.347,0,0,0,.331-.361v-2.916a.376.376,0,0,0-.1-.254.314.314,0,0,0-.235-.106h-2.48v-1.705c0-.819.179-1.233,1.158-1.233h1.421a.35.35,0,0,0,.331-.364v-2.7A.348.348,0,0,0,132.987,7392.83Z" transform="translate(-124.523 -7392.826)"></path>
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                  <div className="w-[13px] h-[13px] flex items-center justify-center">
                                    <svg viewBox="0 0 20.992 20.992" className="fill-base2">
                                      <g id="Group_183" data-name="Group 183" transform="translate(0)">
                                        <g id="Group_182" data-name="Group 182">
                                          <path id="Path_143" data-name="Path 143" d="M15.749,0H5.253A5.264,5.264,0,0,0,0,5.248v10.5a5.264,5.264,0,0,0,5.248,5.248h10.5A5.264,5.264,0,0,0,21,15.744V5.248A5.264,5.264,0,0,0,15.749,0Zm3.5,15.744a3.5,3.5,0,0,1-3.5,3.5H5.253a3.5,3.5,0,0,1-3.5-3.5V5.248a3.5,3.5,0,0,1,3.5-3.5h10.5a3.5,3.5,0,0,1,3.5,3.5v10.5Z" transform="translate(-0.005)"></path>
                                        </g>
                                      </g>
                                      <g id="Group_185" data-name="Group 185" transform="translate(14.87 3.499)">
                                        <g id="Group_184" data-name="Group 184">
                                          <circle id="Ellipse_14" data-name="Ellipse 14" cx="1.312" cy="1.312" r="1.312"></circle>
                                        </g>
                                      </g>
                                      <g id="Group_187" data-name="Group 187" transform="translate(5.248 5.248)">
                                        <g id="Group_186" data-name="Group 186">
                                          <path id="Path_144" data-name="Path 144" d="M107.653,102.4a5.248,5.248,0,1,0,5.248,5.248A5.247,5.247,0,0,0,107.653,102.4Zm0,8.747a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,107.653,111.147Z" transform="translate(-102.405 -102.4)"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                  <div className="w-[13px] h-[13px] flex items-center justify-center">
                                    <svg viewBox="0 0 19.995 19.112" className="fill-base2" >
                                      <defs>
                                        <clipPath id="clip-path">
                                          <rect id="Rectangle_91" data-name="Rectangle 91" width="19.995" height="19.112"></rect>
                                        </clipPath>
                                      </defs>
                                      <g id="Group_175" data-name="Group 175" transform="translate(0)">
                                        <g id="Group_174" data-name="Group 174" clip-path="url(#clip-path)">
                                          <path id="Path_139" data-name="Path 139" d="M2.425,0a2.234,2.234,0,1,0-.056,4.456H2.4A2.235,2.235,0,1,0,2.425,0"></path>
                                          <rect id="Rectangle_90" data-name="Rectangle 90" width="4.286" height="12.895" transform="translate(0.253 6.216)"></rect>
                                          <path id="Path_140" data-name="Path 140" d="M229.148,189.108a5.37,5.37,0,0,0-3.863,2.173v-1.87H221v12.9h4.286v-7.2a2.938,2.938,0,0,1,.141-1.046,2.346,2.346,0,0,1,2.2-1.567c1.551,0,2.171,1.183,2.171,2.916v6.9h4.286v-7.394c0-3.961-2.115-5.8-4.935-5.8" transform="translate(-214.088 -183.194)"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                  <div className="w-[13px] h-[13px] flex items-center justify-center">
                                    <svg viewBox="0 0 19.278 19.683" className="fill-base2">
                                      <defs>
                                        <clipPath id="clip-path">
                                          <rect id="Rectangle_915" data-name="Rectangle 915" width="19.278" height="19.683"></rect>
                                        </clipPath>
                                      </defs>
                                      <g id="Group_20806" data-name="Group 20806" clip-path="url(#clip-path)">
                                        <path id="Path_101724" data-name="Path 101724" d="M19.142,19.463,15.721,14.48Q13.8,11.689,11.886,8.9h0l-.34-.553.207-.25h0c.34-.382.667-.775,1-1.162L18.365.407h0l.369-.4-.406,0c-.292,0-.585,0-.879,0h-.428l-.153.176h0Q14.019,3.5,11.172,6.815h0l-.406.452-.312-.452h0c-.326-.481-.656-.959-.985-1.439Q7.8,2.947,6.14.515L5.816,0l-.99.009c-.181,0-.362,0-.544,0H0L.481.631C.534.706.587.781.639.857L5.311,7.665Q6.3,9.112,7.3,10.56l.288.432-.2.232Q4.024,15.106.679,19c-.181.21-.354.426-.563.678.524,0,1,0,1.47,0v0h.225l.254-.308q.243-.285.487-.57,2.614-3.043,5.225-6.088h0l.558-.647.243.341h0q2.2,3.22,4.41,6.436l.555.836h.53l4.67,0h.537c-.064-.1-.1-.16-.136-.216m-2.88-.956-.161,0H14.432l-1.023-1.368h0c-2.764-4-5.557-7.971-8.339-11.953q-1.027-1.47-2.05-2.942h0L3,2.214l-.632-.92h.4l0-.005h.207c.583,0,1.165.005,1.748,0h.245l.373.515h0Q6.482,3.439,7.628,5.073,9.963,8.415,12.3,11.757l4.241,6.075.443.671-.719,0Z"></path>
                                      </g>
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                                    <svg viewBox="0 0 21 15" className="fill-base2" >
                                      <path d="M10.4336 14.785C10.4319 14.785 10.43 14.785 10.4282 14.785C9.81093 14.7808 4.3543 14.731 
                                      2.80833 14.3129C1.7279 14.0225 0.875005 13.1705 0.583789 12.09C0.179271 10.5713 0.205021 7.64743 0.20783 7.41396C0.205177 
                                      7.18158 0.179115 4.23352 0.582541 2.70237C0.583009 2.70097 0.583321 2.69941 0.583789 2.698C0.871728 1.62974 1.74382 0.751414 2.80568 0.460198C2.80833 0.459418 2.81114 0.458793 2.81379 0.458013C4.34229 0.0563037 9.80969 0.00714343 10.4282 
                                      0.00292969H10.4392C11.058 0.00714343 16.5292 0.0569279 18.061 0.475648C19.1386 0.765304 19.9909 1.61617 20.2828 2.69535C20.7025 4.22759 20.6636 
                                      7.18204 20.6594 7.43143C20.6624 7.67708 20.6869 10.5747 20.2847 12.101C20.2844 12.1026 20.2839 12.104 20.2836 12.1054C19.9923 13.186 19.1395 14.0379
                                       18.0578 14.3287C18.0564 14.3292 18.0549 14.3295 18.0535 14.3299C16.5251 14.7315 11.0576 14.7807 10.4392 14.785C10.4374 14.785 10.4355 14.785 10.4336 
                                       14.785ZM2.12726 3.1122C1.77206 4.46372 1.80562 7.37416 1.80593 7.4035V7.42457C1.79532 8.23173 1.83262 10.5693 2.12742 11.6764C2.27038 12.2065 2.69097 
                                       12.6265 3.2244 12.7699C4.36507 13.0785 8.80931 13.1755 10.4336 13.1869C12.0622 13.1755 16.513 13.0811 17.6452 12.7849C18.1769 12.641 18.5961 12.2225 
                                       18.74 11.6917C19.0351 10.5683 19.0721 8.24219 19.0613 7.44017C19.0613 7.43175 19.0613 7.42332 19.0615 7.41489C19.0762 6.59805 19.0473 4.23321 18.7414 3.11719C18.7411 
                                       3.1161 18.7408 3.11501 18.7406 3.11392C18.597 2.58142 18.1763 2.16145 17.6429 2.01803C16.5133 1.70918 12.0618 1.61242 10.4336 1.60103C8.80619 1.61242 4.35976 1.70668 
                                       3.22408 2.00258C2.7008 2.14772 2.27069 2.58267 2.12726 3.1122ZM8.39684 10.63V4.15783L13.9902 7.39398L8.39684 10.63Z"  ></path>
                                    </svg>
                                  </div>
                                </a>
                              </li>
                            </ul>

                            {/* logo section */}

                            <Link href="#" className="flex items-center justify-center w-full h-full max-w-[200px] 3xl:max-w-[250px] mt-[25px]" aria-label="logo">
                              <Image src="/images/whiteLogo.png" width="250" height="250" alt="logo" className="w-full h-full object-contain" />
                            </Link>
                          </div>

                        </SheetDescription>
                      </SheetContent>
                    </Sheet>
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
              <div className="w-[130px] xs::w-[150px] sm:w-[200px]">
                <Image src="/images/logo.svg" width="200" height="115" className="object-contain" alt="logo" />
              </div>
              <div className="flex items-center">
                <div className="mr-[10px] sm:mr-[20px]">
                  <BookAnAppointment />
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
