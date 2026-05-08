import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { renderHtml } from "@/utils/parseHtml";

const menuLink = `text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block
    before:absolute before:top-[5px] 2xl:before:top-[5px] 3xl:before:top-[8px] pl-[15px] transition-all duration-100 hover:opacity-70 
    before:left-0 before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-white`;

const quickLinks = [
  {
    title: "Home",
    link: "/",
    clickable: true,
  },
  {
    title: "About Us",
    link: "/about",
    clickable: true,
  },
  {
    title: "Our Services",
    link: "/service",
    clickable: true,
  },
  {
    title: "Our Consultants",
    link: "/consultants",
    clickable: true,
  },
  {
    title: "Career",
    link: "/career",
    clickable: false,
  },
];

export default function index({ site_settings, social_links, policies, services }) {
  return (
    <footer className="w-full bg-base2 pt-[80px] relative z-0">
      <Image src="/images/footerBg.png" width="1920" height="850" className="absolute top-0 left-0 w-full h-full object-cover -z-1" alt="footerBg" />
      <div className="container realtive z-10 mb-[50px]">
        <div
          className="bg-[#FDFDFD] p-[15px] sm:p-[20px] lg:p-[10px_20px] xl:p-[10px_35px] 2xl:p-[12px_45px] 3xl:p-[17px_55px]
                   rounded-[6px] overflow-hidden mb-[40px] relative"
        >
          <div className="flex flex-wrap items-center ">
            <div className="w-[150px] lg:w-[190px] xl:w-[240px] 2xl:w-[290px] 3xl:w-[360px] max-sm:m-auto">
              <Link href="/" className="block">
                <div className="xl:max-w-[240px] 2xl:max-w-[285px] 3xl:max-w-[350px]">
                  <Image
                    src={site_settings?.header_logo_value || "/images/logo.svg"}
                    alt={site_settings?.header_logo_alt_text_value || "logo"}
                    width="360"
                    height="165"
                  />
                </div>
              </Link>
            </div>
            <div
              className="w-full md:w-[calc(100%-150px)] lg:w-[calc(100%-190px)] xl:w-[calc(100%-240px)] 2xl:w-[calc(100%-290px)] 3xl:w-[calc(100%-360px)] md:pl-[15px] lg:pl-[30px] 2xl:pl-[50px] 3xl:pl-[60px] flex
                         flex-wrap items-center justify-between max-sm:justify-center"
            >
              <div className="text-[22px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-base1 font-normal font-unna ">
                {site_settings?.footer_tagline || "Excellence in Healthcare"}
              </div>

              <div className="lg:max-w-[250px] 3xl:max-w-[300px] max-sm:m-auto max-sm:text-center">
                <div
                  className={`text-[11px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-semibold text-[#671448] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]`}
                >
                  Follow us on
                </div>
                <ul className="flex items-center max-sm:w-full  ">
                  {social_links?.map((social, index) => (
                    <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                      <a href={social.url} target="_blank" className="w-[28px] h-[28px] rounded-full block">
                        <Image
                          src={social?.icon_value} // <-- replace with correct image path
                          alt={social?.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-contains"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* menus */}
        <Accordion type="single" collapsible>
          <div className="flex flex-wrap ">
            {/* Quick Links */}
            <div className="w-full sm:w-4/12 lg:w-2/12 p-[10px]">
              <div className="sm:hidden">
                <AccordionItem value="quick-links">
                  <AccordionTrigger className="!gap-0 !p-0 m-0">
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">Quick Links</div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 my-[15px]">
                    <ul>
                      {quickLinks?.map((item, index) => (
                        <li key={index} className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                          {item?.clickable ? (
                            <Link href={item?.link} className={menuLink} aria-label="menuLink">
                              {item?.title}
                            </Link>
                          ) : (
                            <span className={menuLink}>{item?.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                  Quick Links
                </div>
                <ul>
                  {quickLinks?.map((item, index) => (
                    <li key={index} className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                      {item?.clickable ? (
                        <Link href={item?.link} className={menuLink} aria-label="menuLink">
                          {item?.title}
                        </Link>
                      ) : (
                        <span className={menuLink}>{item?.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policies */}
            <div className="w-full sm:w-4/12 lg:w-2/12 p-[10px] lg:pl-[25px]  3xl:pl-[40px]">
              <div className="sm:hidden">
                <AccordionItem value="our-services">
                  <AccordionTrigger className="!gap-0 !p-0 m-0">
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">Policies</div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 my-[15px]">
                    <ul>
                      {policies?.map((item, index) => (
                        <li key={index} className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                          <Link href={`/policies/${item?.slug}`} className={`${menuLink}`} aria-label="menuLink">
                            {item?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                  Policies
                </div>
                <ul>
                  {policies?.map((item, index) => (
                    <li key={index} className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                      <Link href={`/policies/${item?.slug}`} className={`${menuLink}`} aria-label="menuLink">
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Services */}
            <div className="w-full sm:w-4/12 lg:w-2/12 p-[10px] lg:pl-[25px] 3xl:pl-[40px]">
              <div className="sm:hidden">
                <AccordionItem value="patient-resources">
                  <AccordionTrigger className="!gap-0 !p-0 m-0">
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">Our Services</div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 my-[15px]">
                    <ul>
                      {services?.slice(0, 4).map((item, index) => (
                        <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0" key={item?.id}>
                          <Link href={`/service/${item?.slug}`} className={`${menuLink}`} aria-label="menuLink">
                            {item?.name}
                          </Link>
                        </li>
                      ))}
                      {services?.length > 4 && (
                        <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                          <Link href="/service" className={`${menuLink} font-medium`} aria-label="View All Services">
                            View All Services
                          </Link>
                        </li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                  Our Services
                </div>
                <ul>
                  {services?.slice(0, 4).map((item, index) => (
                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0" key={item?.id}>
                      <Link href={`/service/${item?.slug}`} className={`${menuLink}`} aria-label="menuLink">
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                  {services?.length > 4 && (
                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                      <Link href="/service" className={`${menuLink} font-medium`} aria-label="View All Services">
                        View All Services
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full sm:w-6/12   lg:w-3/12 p-[10px] 2xl:pl-[60px] 3xl:pl-[90px]  max-lg:order-6">
              <div className="sm:hidden">
                <AccordionItem value="contact-info">
                  <AccordionTrigger className="!gap-0 !p-0 m-0">
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">Contact Information</div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 mt-[15px]">
                    <div className="w-full mb-[20px]">
                      <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                        Location
                      </div>
                      {renderHtml(
                        site_settings?.address || "Skyline Hospitals Coventry",
                        "text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block [&>p]:text-white [&>p]:text-[10px] [&>p]:xl:text-[12px] [&>p]:2xl:text-[14px] [&>p]:3xl:text-[18px]",
                      )}
                    </div>
                    <div className="w-full mb-[20px]">
                      <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                        Phone
                      </div>
                      <div
                        className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center mb-[2px]`}
                      >
                        Main:{" "}
                        <a
                          href={`tel:${site_settings?.main_phone_number || "024 7XXX XXXX"}`}
                          className="flex font-light px-[8px]  transition-all duration-100 hover:opacity-70 "
                        >
                          {" "}
                          {site_settings?.main_phone_number || "024 7XXX XXXX"}
                        </a>
                      </div>
                      <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center`}>
                        Main:{" "}
                        <a
                          href={`tel:${site_settings?.emergency_phone_number || "024 7XXX XXXX"}`}
                          className="flex font-light px-[8px]   transition-all duration-100 hover:opacity-70 "
                        >
                          {site_settings?.emergency_phone_number || "024 7XXX XXXX"}
                        </a>
                      </div>
                    </div>
                    <div className="w-full mb-[15px]">
                      <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                        Email
                      </div>
                      <a
                        href={`mailto:${site_settings?.email || "info@skylinehospitalscoventry.co.uk"} `}
                        className="text-[10px] xl:text-[12px] 2xl:text-[14px] 
                                         3xl:text-[18px] text-white font-light relative flex items-center transition-all duration-100 hover:opacity-70 mb-[2px]"
                      >
                        {site_settings?.email || "info@skylinehospitalscoventry.co.uk"}
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                  Contact Information
                </div>
                <div className="w-full mb-[20px]">
                  <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                    Location
                  </div>
                  {renderHtml(
                    site_settings?.address || "Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom",
                    "text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block [&>p]:text-white [&>p]:text-[10px] [&>p]:xl:text-[12px] [&>p]:2xl:text-[14px] [&>p]:3xl:text-[18px]",
                  )}
                </div>
                <div className="w-full mb-[20px]">
                  <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                    Phone
                  </div>
                  <div
                    className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center mb-[2px]`}
                  >
                    Main:{" "}
                    <a
                      href={`tel:${site_settings?.main_phone_number || "024 7XXX XXXX"}`}
                      className="flex font-light px-[8px]  transition-all duration-100 hover:opacity-70 "
                    >
                      {site_settings?.main_phone_number || "024 7XXX XXXX"}
                    </a>
                  </div>
                  <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center`}>
                    Emergency:{" "}
                    <a
                      href={`tel:${site_settings?.emergency_phone_number || "024 7XXX XXXX"}`}
                      className="flex font-light px-[8px]   transition-all duration-100 hover:opacity-70 "
                    >
                      {" "}
                      {site_settings?.emergency_phone_number || "024 7XXX XXXX"}
                    </a>
                  </div>
                </div>
                <div className="w-full mb-0">
                  <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                    Email
                  </div>
                  <a
                    href={`mailto:${site_settings?.email || "info@skylinehospitalscoventry.co.uk"} `}
                    className="text-[10px] xl:text-[12px] 2xl:text-[14px] 
                                     3xl:text-[18px] text-white font-light relative flex items-center transition-all duration-100 hover:opacity-70 mb-[2px]"
                  >
                    {site_settings?.email || "info@skylinehospitalscoventry.co.uk"}{" "}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-[10px] 2xl:pl-[60px] 3xl:pl-[90px] max-lg:order-5">
              <div className="sm:hidden">
                <AccordionItem value="opening-hours">
                  <AccordionTrigger className="!gap-0 !p-0 m-0 lg:hidden">
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">Opening Hours</div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0 mt-[15px]">
                    <Link
                      href={site_settings?.map_link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center mb-[20px] xl:mb-[25px] group relative rounded-[6px] overflow-hidden "
                      aria-label="location_link"
                    >
                      <div className="w-full h-full rounded-[6px] overflow-hidden  transition-all duration-200 group-hover:scale-110">
                        <Image
                          src={site_settings?.map_image_value || "/images/location.jpg"}
                          width="330"
                          height="150"
                          className="w-full h-full object-cover"
                          alt="location-img"
                        />
                      </div>
                      <div
                        className="absolute left-0 right-0 bottom-0 top-0 w-fit h-fit m-auto transition-all duration-300 text-center 
                                                flex items-center justify-center flex-col"
                      >
                        <div className="w-[42px] h-[42px] flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px]">
                          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path
                              d="M21.0803 3.28176C20.6267 3.27848 20.2567 3.64352 20.2534 4.09633C20.2502 4.54915 20.6144 4.91911 21.068 4.92239C21.5208 4.92567 21.8908 4.56145 21.8941 4.10864C21.8973 3.65582 21.5331 3.28586 21.0803 3.28176Z"
                              fill="#00335B"
                            />
                            <path
                              d="M21.0432 8.20327C17.8758 8.1808 15.2819 10.736 15.258 13.9023C15.2341 17.0685 17.7907 19.6636 20.957 19.6875C20.9717 19.6876 20.9863 19.6877 21.001 19.6877C24.1471 19.6877 26.7184 17.1401 26.7422 13.9885C26.7661 10.8225 24.2096 8.22714 21.0432 8.20327ZM21.0008 18.0471C20.9905 18.0471 20.9797 18.047 20.9693 18.047C18.7076 18.0299 16.8815 16.1762 16.8985 13.9146C16.9155 11.6633 18.752 9.84365 20.9994 9.84365C21.0097 9.84365 21.0205 9.84374 21.0309 9.84382C23.2925 9.86088 25.1187 11.7146 25.1017 13.9762C25.0846 16.2275 23.2482 18.0471 21.0008 18.0471Z"
                              fill="#00335B"
                            />
                            <path
                              d="M24.579 3.90383C24.1523 3.7524 23.6831 3.97594 23.5317 4.40299C23.3804 4.83005 23.6039 5.29886 24.0309 5.45029C27.6441 6.73088 30.0521 10.1722 30.0233 14.0135C30.0199 14.4664 30.3844 14.8365 30.8374 14.8399C30.8395 14.8399 30.8416 14.8399 30.8438 14.8399C31.2938 14.8399 31.6605 14.4767 31.6639 14.0258C31.698 9.48558 28.8508 5.41788 24.579 3.90383Z"
                              fill="#00335B"
                            />
                            <path
                              d="M26.033 30.8801C31.4892 23.8569 34.899 20.1947 34.945 14.0502C35.0028 6.31929 28.7288 0 20.9985 0C13.3585 0 7.11275 6.18747 7.05467 13.841C7.00775 20.1521 10.4809 23.8094 15.9747 30.8789C10.5093 31.6956 7.05467 33.7478 7.05467 36.2579C7.05467 37.9393 8.60884 39.4481 11.431 40.5063C13.9996 41.4695 17.3979 42 20.9998 42C24.6018 42 28.0001 41.4695 30.5687 40.5063C33.3909 39.448 34.945 37.9392 34.945 36.2578C34.945 33.7491 31.4935 31.6974 26.033 30.8801ZM8.69522 13.8534C8.7464 7.09982 14.2569 1.64063 20.9987 1.64063C27.8203 1.64063 33.3553 7.21778 33.3045 14.038C33.2608 19.8732 29.6447 23.4692 23.8716 30.995C22.8419 32.3367 21.8962 33.6052 21.0011 34.8461C20.1086 33.6045 19.1818 32.3587 18.1366 30.9945C12.1249 23.1536 8.65075 19.8294 8.69522 13.8534ZM20.9998 40.3595C13.9574 40.3595 8.69522 38.1941 8.69522 36.2579C8.69522 34.822 11.841 33.0081 17.1302 32.38C18.2994 33.9141 19.3244 35.3078 20.3298 36.7312C20.4834 36.9486 20.7329 37.078 20.9991 37.0782C20.9994 37.0782 20.9996 37.0782 20.9998 37.0782C21.2658 37.0782 21.5152 36.9492 21.6691 36.7323C22.6649 35.3274 23.718 33.8993 24.8772 32.3809C30.1615 33.0097 33.3045 34.823 33.3045 36.258C33.3044 38.1941 28.0423 40.3595 20.9998 40.3595Z"
                              fill="#00335B"
                            />
                          </svg>
                        </div>
                        <div className="text-[14px] text-base2 font-medium transition-all duration-all">View Map</div>
                      </div>
                    </Link>
                    <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[8px] 3xl:mb-[10px]">
                      Opening Hours
                    </div>

                    {site_settings?.opening_hours?.map((hours, index) => (
                      <div
                        className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`}
                        aria-label="email_link"
                      >
                        <span className="font-light">{hours?.key}</span>
                        <span className="pl-[5px]">: {hours?.value}</span>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="hidden sm:block">
                <Link
                  href={site_settings?.map_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center mb-[20px] xl:mb-[25px] group relative rounded-[6px] overflow-hidden "
                  aria-label="location_link"
                >
                  <div className="w-full h-full rounded-[6px] overflow-hidden  transition-all duration-200 group-hover:scale-110">
                    <Image
                      src={site_settings?.map_image_value || "/images/location.jpg"}
                      width="330"
                      height="150"
                      className="w-full h-full object-cover"
                      alt={site_settings?.map_image_alt_text_value || "location-img"}
                    />
                  </div>
                  <div
                    className="absolute left-0 right-0 bottom-0 top-0 w-fit h-fit m-auto transition-all duration-300 text-center 
                                    flex items-center justify-center flex-col"
                  >
                    <div className="w-[42px] h-[42px] flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px]">
                      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path
                          d="M21.0803 3.28176C20.6267 3.27848 20.2567 3.64352 20.2534 4.09633C20.2502 4.54915 20.6144 4.91911 21.068 4.92239C21.5208 4.92567 21.8908 4.56145 21.8941 4.10864C21.8973 3.65582 21.5331 3.28586 21.0803 3.28176Z"
                          fill="#00335B"
                        />
                        <path
                          d="M21.0432 8.20327C17.8758 8.1808 15.2819 10.736 15.258 13.9023C15.2341 17.0685 17.7907 19.6636 20.957 19.6875C20.9717 19.6876 20.9863 19.6877 21.001 19.6877C24.1471 19.6877 26.7184 17.1401 26.7422 13.9885C26.7661 10.8225 24.2096 8.22714 21.0432 8.20327ZM21.0008 18.0471C20.9905 18.0471 20.9797 18.047 20.9693 18.047C18.7076 18.0299 16.8815 16.1762 16.8985 13.9146C16.9155 11.6633 18.752 9.84365 20.9994 9.84365C21.0097 9.84365 21.0205 9.84374 21.0309 9.84382C23.2925 9.86088 25.1187 11.7146 25.1017 13.9762C25.0846 16.2275 23.2482 18.0471 21.0008 18.0471Z"
                          fill="#00335B"
                        />
                        <path
                          d="M24.579 3.90383C24.1523 3.7524 23.6831 3.97594 23.5317 4.40299C23.3804 4.83005 23.6039 5.29886 24.0309 5.45029C27.6441 6.73088 30.0521 10.1722 30.0233 14.0135C30.0199 14.4664 30.3844 14.8365 30.8374 14.8399C30.8395 14.8399 30.8416 14.8399 30.8438 14.8399C31.2938 14.8399 31.6605 14.4767 31.6639 14.0258C31.698 9.48558 28.8508 5.41788 24.579 3.90383Z"
                          fill="#00335B"
                        />
                        <path
                          d="M26.033 30.8801C31.4892 23.8569 34.899 20.1947 34.945 14.0502C35.0028 6.31929 28.7288 0 20.9985 0C13.3585 0 7.11275 6.18747 7.05467 13.841C7.00775 20.1521 10.4809 23.8094 15.9747 30.8789C10.5093 31.6956 7.05467 33.7478 7.05467 36.2579C7.05467 37.9393 8.60884 39.4481 11.431 40.5063C13.9996 41.4695 17.3979 42 20.9998 42C24.6018 42 28.0001 41.4695 30.5687 40.5063C33.3909 39.448 34.945 37.9392 34.945 36.2578C34.945 33.7491 31.4935 31.6974 26.033 30.8801ZM8.69522 13.8534C8.7464 7.09982 14.2569 1.64063 20.9987 1.64063C27.8203 1.64063 33.3553 7.21778 33.3045 14.038C33.2608 19.8732 29.6447 23.4692 23.8716 30.995C22.8419 32.3367 21.8962 33.6052 21.0011 34.8461C20.1086 33.6045 19.1818 32.3587 18.1366 30.9945C12.1249 23.1536 8.65075 19.8294 8.69522 13.8534ZM20.9998 40.3595C13.9574 40.3595 8.69522 38.1941 8.69522 36.2579C8.69522 34.822 11.841 33.0081 17.1302 32.38C18.2994 33.9141 19.3244 35.3078 20.3298 36.7312C20.4834 36.9486 20.7329 37.078 20.9991 37.0782C20.9994 37.0782 20.9996 37.0782 20.9998 37.0782C21.2658 37.0782 21.5152 36.9492 21.6691 36.7323C22.6649 35.3274 23.718 33.8993 24.8772 32.3809C30.1615 33.0097 33.3045 34.823 33.3045 36.258C33.3044 38.1941 28.0423 40.3595 20.9998 40.3595Z"
                          fill="#00335B"
                        />
                      </svg>
                    </div>
                    <div className="text-[14px] text-base2 font-medium underline transition-all duration-all">View Map</div>
                  </div>
                </Link>
                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[8px] 3xl:mb-[10px]">
                  Opening Hours
                </div>

                {site_settings?.opening_hours?.map((hours, index) => (
                  <div
                    key={index}
                    className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`}
                    aria-label="email_link"
                  >
                    <span className="font-light">{hours?.key}</span>
                    <span className="pl-[5px]">: {hours?.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      {/* copyright */}
      <div className="border-t border-[rgba(255,255,255,0.3)]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center sm:justify-between py-[20px] xl:py-[30px_20px] 2xl:py-[35px_25px] 3xl:py-[45px_35px]">
            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-white max-sm:w-full max-sm:text-center max-sm:mb-[5px]">
              © 2025 Skyline Hospitals | All rights reserved
            </div>
            <div className="text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-white flex items-center max-sm:justify-center max-sm:w-full">
              Designed By :
              <a href="https://www.intersmartsolution.com/" target="_blank" className="px-[5px]" aria-label="logo">
                <Image src="/images/interLogo.svg" width="105" height="20" className="w-[105px]" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
