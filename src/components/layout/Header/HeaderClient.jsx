"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BookAnAppointment from "../../common/BookAnAppointment";
import { renderHtml } from "@/utils/parseHtml";
import { usePathname } from "next/navigation";

export default function HeaderClient({ site_settings, social_links, services, reasons, insurance }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 0);
    };

    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const isActive = (item) => {
    // Exact match for home page
    if (item.link === "/" && currentPath === "/") {
      return true;
    }

    // For pages with slugs, check if current path starts with the menu link
    if (item.link !== "/" && currentPath.startsWith(item.link)) {
      return true;
    }
  };

  const servicesList = services?.map((service) => ({
    name: service?.name,
    link: `/service/${service?.slug}`,
  }));

  const menus = [
    { id: 1, name: "Home", link: "/", clickable: true },
    { id: 2, name: "About Us", link: "/about", clickable: true },
    {
      id: 3,
      name: "Services",
      link: "/service",
      submenu: servicesList,
      clickable: true,
    },
    { id: 4, name: "Consultants", link: "/consultants", clickable: true },
    { id: 5, name: "News & Insights", link: "/insights", clickable: true },
    { id: 6, name: "Contact", link: "/contact", clickable: true },
  ];

  const menuLinkClass = `3xs:text-[11px] text-[9px] font-normal outline-0 underline-0 transition-all
  hover:text-[#F6271F] cursor-pointer hover:text-[#f6271f] hover:underline-none`;
  const menuLinks =
    "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] text-[#010101] font-normal flex items-center justiy-center transition-all duration-100 hover:text-base1 relative p-[20px_0]";

  const cmnMenuClass = `text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium mb-[12px]`;

  return (
    <header>
      <div className={`w-full transition-all duration-100 max-lg:hidden ${isScrolled ? "stickyHeader" : ""}`}>
        <div className="container">
          <div className="flex items-center">
            <Link href="/">
              <div className="lg:w-[135px] xl:w-[165px] 2xl:w-[200px] 3xl:w-[250px] logo transition-all duration-150 p-[10px_0]">
                <Image
                  src={site_settings?.header_logo_value || "/images/logo.svg"}
                  width="250"
                  height="115"
                  className="object-contain"
                  alt={site_settings?.header_logo_alt_text_value || "logo"}
                />
              </div>
            </Link>
            <div
              className="lg:w-[calc(100%-135px)] xl:w-[calc(100%-165px)] 2xl:w-[calc(100%-200px)] 3xl:w-[calc(100%-250px)] pl-[25px] xl:pl-[60px] 
                  2xl:pl-[65px] 3xl:pl-[85px] ritBx"
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center relative">
                  {menus.map((item) => {
                    const active = isActive(item);

                    return (
                      <div
                        key={item.id}
                        className={`relative group px-[10px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[20px] ${item.submenu
                            ? "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[0] !no-underline cursor-pointer after:bg-[url('/images/linkarrow.svg')] after:bg-no-repeat after:bg-contain after:w-[9px] after:h-[6px] after:transition-transform after:duration-300 hover:after:rotate-180"
                            : ""
                          }`}
                      >
                        {item.clickable ? (
                          <a
                            href={item.link}
                            className={`${menuLinks} ${active ? "text-[#00335b]  relative after:absolute after:bottom-[10px] after:left-0 after:right-0 after:h-[2.5px] after:w-full after:bg-base1 decoration-[#00335b] underline-offset-4 after:rounded" : "text-[#010101]"
                              }`}
                            aria-label="menulinks"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <span className={menuLinks}>{item.name}</span>
                        )}

                        {item.submenu && (
                          <div className="absolute left-0 top-full hidden w-[220px] bg-white shadow-lg rounded-[6px] group-hover:block z-50 max-h-[350px] overflow-auto overflow-x-hidden">
                            {item.submenu.map((sub, subId) => {
                              const subActive = currentPath === sub.link;

                              return (
                                <a
                                  key={subId}
                                  href={sub.link}
                                  className={`block text-[11px] xl:text-[12px] 2xl:text-[14px] px-4 py-2 hover relative hover:text-white ${subActive
                                      ? "text-base1 before:content-[''] pl-[25px] before:absolute before:left-[10px] before:top-[15px] before:w-2 before:h-2 before:bg-base1 before:rounded-full before:z-10 hover:before:bg-white font-medium"
                                      : "text-[#010101]"
                                    }`}
                                >
                                  {sub.name}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* .rightSec */}
                <div className="flex items-center justify-end -m-[9px] 2xl:-m-[12px]">
                  <div className="p-[9px] 2xl:p-[12px]">
                    <div className="flex ">
                      <div className="w-[15px] 3xl:w-[20px]">
                        <div className="w-full flex items-center">
                          <svg className="w-full h-full " viewBox="0 0 21 21" fill="none">
                            <path
                              d="M20.0625 12.4018V14.5513C20.0608 15.1945 19.8427 15.8184 19.4435 16.3227C19.0442 16.8269 18.487 17.1822 17.8614 17.3314C17.7103 18.3504 17.1984 19.2812 16.4188 19.9545C15.6393 20.6278 14.6439 20.9988 13.6138 21H11.4643C10.8942 21 10.3474 20.7735 9.94432 20.3704C9.5412 19.9673 9.31473 19.4205 9.31473 18.8504C9.31473 18.6604 9.39022 18.4782 9.5246 18.3438C9.65897 18.2094 9.84122 18.1339 10.0312 18.1339C10.2213 18.1339 10.4035 18.2094 10.5379 18.3438C10.6723 18.4782 10.7478 18.6604 10.7478 18.8504C10.7478 19.0405 10.8233 19.2227 10.9576 19.3571C11.092 19.4915 11.2743 19.567 11.4643 19.567H13.6138C14.2474 19.5646 14.8623 19.3524 15.3625 18.9634C15.8626 18.5745 16.2198 18.0309 16.3782 17.4174H15.7634C15.5734 17.4174 15.3911 17.3419 15.2567 17.2075C15.1224 17.0732 15.0469 16.8909 15.0469 16.7009V10.2522C15.0469 10.0622 15.1224 9.87995 15.2567 9.74558C15.3911 9.6112 15.5734 9.53571 15.7634 9.53571H16.4799V8.8192C16.4799 7.10891 15.8005 5.46866 14.5911 4.2593C13.3818 3.04995 11.7415 2.37054 10.0312 2.37054C8.32096 2.37054 6.68072 3.04995 5.47136 4.2593C4.262 5.46866 3.58259 7.10891 3.58259 8.8192V9.53571H4.29911C4.48914 9.53571 4.67139 9.6112 4.80576 9.74558C4.94014 9.87995 5.01562 10.0622 5.01562 10.2522V16.7009C5.01562 16.8909 4.94014 17.0732 4.80576 17.2075C4.67139 17.3419 4.48914 17.4174 4.29911 17.4174H2.86607C2.10594 17.4174 1.37695 17.1154 0.839453 16.578C0.30196 16.0405 0 15.3115 0 14.5513V12.4018C0.00237436 11.7682 0.214608 11.1533 0.603522 10.6532C0.992436 10.153 1.53611 9.79585 2.14955 9.63746V8.8192C2.14955 6.72884 2.97994 4.7241 4.45805 3.246C5.93615 1.76789 7.94089 0.9375 10.0312 0.9375C12.1216 0.9375 14.1263 1.76789 15.6045 3.246C17.0826 4.7241 17.9129 6.72884 17.9129 8.8192V9.63746C18.5264 9.79585 19.0701 10.153 19.459 10.6532C19.8479 11.1533 20.0601 11.7682 20.0625 12.4018Z"
                              fill="#671448"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-[calc(100%-15px)] 3xl:w-[calc(100%-20px)] pl-[10px]">
                        <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#333333] leading-none mb-[1px] 3xl:mb-[2px]">
                          Call Emergency
                        </div>
                        <Link
                          href={`tel:${site_settings?.emergency_phone_number || "024 123 456 789"}`}
                          className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-black leading-none overflow-hidden transition-all duration-100 hover:text-base1"
                          aria-label="call"
                        >
                          {site_settings?.emergency_phone_number || "024 123 456 789"}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-[9px]  2xl:p-[12px]">
                    <BookAnAppointment services={services} reasons={reasons} insurance={insurance} />
                  </div>
                  <div className="p-[12px]">
                    <Sheet>
                      <SheetTrigger className="w-[25px] xl:w-[32px] 2xl:w-[40px] 3xl:w-[50px] h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] flex items-center bg-transparent !p-0 rounded-full overflow-hidden group cursor-pointer ">
                        <svg className="!w-full !h-full object-cover fill-base1 group-hover:fill-base2" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="24" />
                          <rect x="13" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="27.666" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="27.666" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                          <rect x="13" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
                        </svg>
                      </SheetTrigger>

                      <SheetContent
                        side="right"
                        className="bg-base2 p-[40px_25px] md:p-[45px_35px] 2xl:p-[50px_40px] 3xl:p-[80px_50px_70px] h-screen overflow-auto border-none
                      !max-w-[300px] xl:!max-w-[400px] 3xl:!max-w-[500px]"
                      >
                        <SheetDescription>
                          <div className="text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[36px] font-normal text-white font-unna mb-[20px]">
                            Contact Information
                          </div>
                          <ul className="mb-[30px] 3xl:mb-[35px]">
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>Location</div>
                              {site_settings?.address
                                ? renderHtml(
                                  site_settings.address,
                                  "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] [&>p]:text-white font-medium mb-[12px] font-normal"
                                )
                                : "Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom"}
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>Email</div>
                              <a
                                href={`mailto:${site_settings?.email || "info@skylinehospitalscoventry.co.uk"} `}
                                className={`${cmnMenuClass} font-normal mb-[12px] block`}
                                aria-label="email_link"
                              >
                                {site_settings?.email || "info@skylinehospitalscoventry.co.uk"}
                              </a>
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>Phone</div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                Main:{" "}
                                <a href={`tel:${site_settings?.main_phone_number || "024 7XXX XXXX"}`} className="flex items-center pl-1">
                                  {" "}
                                  {site_settings?.main_phone_number || "024 7XXX XXXX"}
                                </a>
                              </div>
                              <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                Emergency:{" "}
                                <a href={`tel:${site_settings?.emergency_phone_number || "024 7XXX XXXX"}`} className="flex items-center pl-1">
                                  {site_settings?.emergency_phone_number || "024 7XXX XXXX"}
                                </a>
                              </div>
                            </li>
                            <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                              <div className={`${cmnMenuClass}`}>Opening Hours</div>
                              {site_settings?.opening_hours?.map((hours, index) => (
                                <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                                  <span className="font-light">{hours?.key}</span>
                                  <span className="pl-[5px]">: {hours?.value}</span>
                                </div>
                              ))}
                            </li>
                          </ul>

                          {/* social Links */}
                          <div className="w-full">
                            {/* <div className={`${cmnMenuClass} text-[18px] font-medium text-white mb-[20px]`}>Follow us on</div>
                            <ul className="flex items-center ">
                              {social_links?.map((social, index) => (
                                <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                  <a href={social?.url} className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                                    <div className="w-[7px] h-[13px] flex items-center justify-center">
                                      <Image
                                        src={social?.icon_value} // <-- replace with correct image path
                                        alt={social?.name}
                                        width={7}
                                        height={13}
                                        className="fill-base2"
                                      />
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>  */}

                            {/* logo section */}
                            <Link
                              href="/"
                              className="flex items-center justify-center w-full h-full max-w-[200px] 3xl:max-w-[250px] mt-[25px]"
                              aria-label="logo"
                            >
                              <Image
                                src={site_settings?.footer_logo_value || "/images/whiteLogo.png"}
                                width="250"
                                height="250"
                                alt={site_settings?.footer_logo_alt_text_value || "logo"}
                                className="w-full h-full object-contain"
                              />
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
      <div className="container min-lg:hidden relative pr-[40px]">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="w-[25px] xl:w-[32px] 2xl:w-[40px] 3xl:w-[50px] h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] absolute top-0 bottom-0 right-0 m-auto
           flex items-center bg-transparent !p-0 rounded-full overflow-hidden group cursor-pointer "
          >
            <svg className="!w-full !h-full object-cover fill-base1 group-hover:fill-base2" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" />
              <rect x="13" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
              <rect x="27.666" y="14" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
              <rect x="27.666" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
              <rect x="13" y="26.4667" width="7.33333" height="7.33333" rx="3.66667" fill="white" />
            </svg>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-base2 p-[40px_25px] md:p-[45px_35px] 2xl:p-[50px_40px] 3xl:p-[80px_50px_70px] h-screen overflow-auto border-none sidemenu
                      !max-w-[300px] xl:!max-w-[400px] 3xl:!max-w-[500px]"
          >
            <SheetDescription >
              <div className="text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[36px] font-normal text-white font-unna mb-[20px] ">
                Contact Information
              </div>
              <ul className="mb-[30px] 3xl:mb-[35px]">
                <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                  <div className={`${cmnMenuClass}`}>Location</div>
                  {site_settings?.address
                    ? renderHtml(
                      site_settings.address,
                      "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] [&>p]:text-white font-medium mb-[12px] font-normal"
                    )
                    : "Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom"}
                </li>
                <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                  <div className={`${cmnMenuClass}`}>Email</div>
                  <a
                    href={`mailto:${site_settings?.email || "mailto:info@skylinehospitalscoventry.co.uk"} `}
                    className={`${cmnMenuClass} font-normal mb-[12px] block`}
                    aria-label="email_link"
                  >
                    {site_settings?.email || "mailto:info@skylinehospitalscoventry.co.uk"}
                  </a>
                </li>
                <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                  <div className={`${cmnMenuClass}`}>Phone</div>
                  <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                    Main:{" "}
                    <a href={`tel:${site_settings?.main_phone_number || "024 7XXX XXXX"}`} className="flex items-center pl-1">
                      {" "}
                      {site_settings?.main_phone_number || "024 7XXX XXXX"}
                    </a>
                  </div>
                  <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                    Emergency:{" "}
                    <a href={`tel:${site_settings?.emergency_phone_number || "024 7XXX XXXX"}`} className="flex items-center pl-1">
                      {site_settings?.emergency_phone_number || "024 7XXX XXXX"}
                    </a>
                  </div>
                </li>
                <li className="mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0">
                  <div className={`${cmnMenuClass}`}>Opening Hours</div>
                  {site_settings?.opening_hours?.map((hours, index) => (
                    <div className={`${cmnMenuClass} font-normal mb-[12px] flex items-center`} aria-label="email_link">
                      <span className="font-light">{hours?.key}</span>
                      <span className="pl-[5px]">: {hours?.value}</span>
                    </div>
                  ))}
                </li>
              </ul>

              {/* social Links */}
              <div className="w-full">
                {/* <div className={`${cmnMenuClass} text-[18px] font-medium text-white mb-[20px]`}>Follow us on</div> */}
                {/* <ul className="flex items-center ">
                  {social_links?.map((social, index) => (
                    <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                      <a href={social?.url} className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white">
                        <div className="w-[7px] h-[13px] flex items-center justify-center">
                          <Image
                            src={social?.icon} // <-- change to your actual icon path
                            alt={social?.name}
                            width={7}
                            height={13}
                            className="!w-[7px] !h-[13px]"
                            priority={true}
                          />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul> */}

                {/* logo section */}

                <Link href="/" className="flex items-center justify-center w-full h-full max-w-[200px] 3xl:max-w-[250px] mt-[25px]" aria-label="logo">
                  <Image
                    src={site_settings?.footer_logo_value || "/images/whiteLogo.png"}
                    width="250"
                    height="250"
                    alt={site_settings?.footer_logo_alt_text_value || "logo"}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>

        <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="w-[130px] xs:w-[140px] sm:w-[170px] p-[10px_0]">
                <Image src={site_settings?.header_logo_value || "/images/logo.svg"} width="200" height="115" className="object-contain" alt="logo" />
              </Link>
              <div className="flex items-center">
                <div className="mr-[10px] sm:mr-[20px] max-3xs:hidden">
                  <BookAnAppointment services={services} reasons={reasons} insurance={insurance} />
                </div>
                <SheetTrigger className="w-[25px] h-[25px] flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 464.205 464.205">
                    <g id="grip-solid-horizontal_1_">
                      <path
                        d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 
                            29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z"
                      ></path>
                      <path
                        d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013
                            29.013-29.013h406.18c16.023 0 29.013 12.989 
                          29.013 29.013s-12.99 29.012-29.014 29.012z"
                      ></path>
                      <path
                        d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023
                            0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z"
                      ></path>
                    </g>
                  </svg>
                </SheetTrigger>
              </div>
            </div>
          </div>
          <SheetContent side="right" className="h-[100vh] overflow-auto">
            <SheetHeader>
              <div className="flex items-center w-full border-b border-[#f4f4f4] pb-[10px] mb-[10px]">
                <Link href="/" className="block max-w-[115px]  w-full h-full">
                  <Image
                    src={site_settings?.header_logo_value || "/images/logo.svg"}
                    alt={site_settings?.header_logo_alt_text_value || "logo"}
                    width={175}
                    height={100}
                    className="w-full h-full 3xl:max-w-[125px] 2xl:max-w-[100px] max-w-[90px] object-contain block hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <SheetDescription >
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-b border-[#f4f4f4]">
                    <Link href="/" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>Home</span>
                      </div>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-[#f4f4f4]">
                    <Link href="/about" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>About Us</span>
                      </div>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-[#f4f4f4]">
                    <AccordionTrigger className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                      <Link href="/service" className="flex items-center">
                        <span>Services</span>
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] bg-[#671448] p-[10px] ">
                      <ul>
                        {servicesList?.map((item, index) => (
                          <li key={index} className="last-of-type:mb-0">
                            <Link
                              href={item?.link}
                              aria-label="category_link"
                              className="text-[11px] text-white font-light relative w-full flex items-center py-[5px]
                             transition-all duration-200"
                            >
                              {item?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-[#f4f4f4]">
                    <Link href="/consultants" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center  ">
                      <div className="flex items-center">
                        <span>Consultants</span>
                      </div>
                    </Link>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-[#f4f4f4]">
                    <Link href="/news" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
                      <div className="flex items-center">
                        <span>News & Insights </span>
                      </div>
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="border-b border-[#f4f4f4]">
                    <Link href="/contact" className="text-[12px] font-normal text-black py-[8px] w-full flex items-center" aria-label="menuLink">
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
    </header>
  );
}
