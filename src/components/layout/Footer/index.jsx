import Link from "next/link";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const menuLink = `text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block
    before:absolute before:top-[5px] 2xl:before:top-[5px] 3xl:before:top-[8px] pl-[15px] transition-all duration-100 hover:opacity-70 
    before:left-0 before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-white`

export default function index() {
    return (
        <footer className='w-full bg-base2 pt-[80px] relative z-0'>
            <Image src="/images/footerBg.png" width="1920" height="850" className="absolute top-0 left-0 w-full h-full object-cover -z-1" alt="footerBg" />
            <div className="container realtive z-10 mb-[50px]">
                <div className='bg-[#FDFDFD] p-[15px] sm:p-[20px] lg:p-[10px_20px] xl:p-[10px_35px] 2xl:p-[12px_45px] 3xl:p-[17px_55px]
                   rounded-[6px] overflow-hidden mb-[40px] relative'>
                    <div className='flex flex-wrap items-center '>
                        <div className='w-[150px] lg:w-[190px] xl:w-[240px] 2xl:w-[290px] 3xl:w-[360px] max-sm:m-auto'>
                            <div className='xl:max-w-[240px] 2xl:max-w-[285px] 3xl:max-w-[350px]'>
                                <Image src="/images/logo.svg" width="360" height="165" alt="logo" />
                            </div>
                        </div>
                        <div className='w-full md:w-[calc(100%-150px)] lg:w-[calc(100%-190px)] xl:w-[calc(100%-240px)] 2xl:w-[calc(100%-290px)] 3xl:w-[calc(100%-360px)] md:pl-[15px] lg:pl-[30px] 2xl:pl-[50px] 3xl:pl-[60px] flex
                         flex-wrap items-center justify-between max-sm:justify-center'>
                            <div className='text-[22px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-base1 font-normal font-unna '>Excellence in Healthcare</div>

                            {/* social Links */}
                            <div className="lg:max-w-[250px] 3xl:max-w-[300px] max-sm:m-auto max-sm:text-center">
                                <div className={`text-[11px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-semibold text-[#671448] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]`}>Follow us on</div>
                                <ul className="flex items-center max-sm:w-full  ">
                                    <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                        <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-base2">
                                            <div className="w-[7px] h-[13px] flex items-center justify-center">
                                                <svg viewBox="0 0 8.794 17.725" className="fill-white" >
                                                    <path id="Forma_1_copy_7" data-name="Forma 1 copy 7" d="M132.987,7392.83l-2.109,0c-2.37,0-3.9,1.712-3.9,4.362v2.011h-2.121a.347.347,0,0,0-.332.36v2.916a.347.347,0,0,0,.332.361h2.121v7.352a.349.349,0,0,0,.332.362h2.767a.348.348,0,0,0,.332-.362v-7.352h2.48a.347.347,0,0,0,.331-.361v-2.916a.376.376,0,0,0-.1-.254.314.314,0,0,0-.235-.106h-2.48v-1.705c0-.819.179-1.233,1.158-1.233h1.421a.35.35,0,0,0,.331-.364v-2.7A.348.348,0,0,0,132.987,7392.83Z" transform="translate(-124.523 -7392.826)"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mr-[15px] 2xl:mr-[20px] 3xl:mr-[25px] last-of-type:mr-0">
                                        <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-base2">
                                            <div className="w-[13px] h-[13px] flex items-center justify-center">
                                                <svg viewBox="0 0 20.992 20.992" className="fill-white">
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
                                        <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-base2">
                                            <div className="w-[13px] h-[13px] flex items-center justify-center">
                                                <svg viewBox="0 0 19.995 19.112" className="fill-white" >
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
                                        <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-base2">
                                            <div className="w-[13px] h-[13px] flex items-center justify-center">
                                                <svg viewBox="0 0 19.278 19.683" className="fill-white">
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
                                        <a href="#" className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-base2">
                                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                                <svg viewBox="0 0 21 15" className="fill-white" >
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
                                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">
                                                Quick Links
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-0 mt-[15px]">
                                            <ul>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Our Services
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Consultants
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        About us
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Terms & conditions
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem> 
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                                    Quick Links
                                </div>
                                <ul>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Our Services
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Consultants
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Terms & conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Services */}
                        <div className="w-full sm:w-4/12 lg:w-2/12 p-[10px] lg:pl-[25px]  3xl:pl-[40px]">
                            <div className="sm:hidden"> 
                                    <AccordionItem value="our-services">
                                        <AccordionTrigger className="!gap-0 !p-0 m-0">
                                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">
                                                Our Services
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-0 mt-[15px]">
                                            <ul>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Our Services
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Consultants
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        About us
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Terms & conditions
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem> 
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                                    Our Services
                                </div>
                                <ul>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Our Services
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Consultants
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Terms & conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Patient Resources */}
                        <div className="w-full sm:w-4/12 lg:w-2/12 p-[10px] lg:pl-[25px] 3xl:pl-[40px]">
                            <div className="sm:hidden"> 
                                    <AccordionItem value="patient-resources">
                                        <AccordionTrigger className="!gap-0 !p-0 m-0">
                                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">
                                                Patient Resources
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-0 mt-[15px]">
                                            <ul>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Book Appointment
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Patient Feedback
                                                    </Link>
                                                </li>
                                                <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                                    <Link
                                                        href="#"
                                                        className={`${menuLink}`} aria-label="menuLink" >
                                                        Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem> 
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[20px] 3xl:mb-[30px]">
                                    Patient Resources
                                </div>
                                <ul>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Book Appointment
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Patient Feedback
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] 2xl:mb-[15px] last-of-type:mb-0">
                                        <Link
                                            href="#"
                                            className={`${menuLink}`} aria-label="menuLink" >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full sm:w-6/12   lg:w-3/12 p-[10px] 2xl:pl-[60px] 3xl:pl-[90px]  max-lg:order-6">
                            <div className="sm:hidden"> 
                                    <AccordionItem value="contact-info">
                                        <AccordionTrigger className="!gap-0 !p-0 m-0">
                                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">
                                                Contact Information
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-0 mt-[15px]">
                                            <div className="w-full mb-[20px]">
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                                                    Location
                                                </div>
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block`}>
                                                    Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom
                                                </div>
                                            </div>
                                            <div className="w-full mb-[20px]">
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                                                    Phone
                                                </div>
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center mb-[2px]`}>
                                                    Main: <a href="tel: 024 7XXX XXXX" className="flex font-light px-[8px]  transition-all duration-100 hover:opacity-70 "> 024 7XXX XXXX</a>
                                                </div>
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center`}>
                                                    Main: <a href="tel: 024 7XXX XXXX" className="flex font-light px-[8px]   transition-all duration-100 hover:opacity-70 "> 024 7XXX XXXX</a>
                                                </div>
                                            </div>
                                            <div className="w-full mb-0">
                                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                                                    Email
                                                </div>
                                                <a href="mailto:info@skylinehospitalscoventry.co.uk" className="text-[10px] xl:text-[12px] 2xl:text-[14px] 
                                         3xl:text-[18px] text-white font-light relative flex items-center transition-all duration-100 hover:opacity-70 mb-[2px]">info@skylinehospitalscoventry.co.uk</a>
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
                                    <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative block`}>
                                        Skyline Hospitals Coventry, 123 Medical Way Coventry, CV1 2AB, United Kingdom
                                    </div>
                                </div>
                                <div className="w-full mb-[20px]">
                                    <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                                        Phone
                                    </div>
                                    <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center mb-[2px]`}>
                                        Main: <a href="tel: 024 7XXX XXXX" className="flex font-light px-[8px]  transition-all duration-100 hover:opacity-70 "> 024 7XXX XXXX</a>
                                    </div>
                                    <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-light relative flex items-center`}>
                                        Main: <a href="tel: 024 7XXX XXXX" className="flex font-light px-[8px]   transition-all duration-100 hover:opacity-70 "> 024 7XXX XXXX</a>
                                    </div>
                                </div>
                                <div className="w-full mb-0">
                                    <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium relative block mb-[10px]`}>
                                        Email
                                    </div>
                                    <a href="mailto:info@skylinehospitalscoventry.co.uk" className="text-[10px] xl:text-[12px] 2xl:text-[14px] 
                                     3xl:text-[18px] text-white font-light relative flex items-center transition-all duration-100 hover:opacity-70 mb-[2px]">info@skylinehospitalscoventry.co.uk</a>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-[10px] 2xl:pl-[60px] 3xl:pl-[90px] max-lg:order-5">
                            <div className="sm:hidden">

                                <AccordionItem value="opening-hours">
                                    <AccordionTrigger className="!gap-0 !p-0 m-0 lg:hidden">
                                        <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium">
                                            Opening Hours
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-0 mt-[15px]">
                                        <Link href="#" className="w-full flex items-center mb-[20px] xl:mb-[25px] group relative rounded-[6px] overflow-hidden " aria-label="location_link">
                                            <div className="w-full h-full rounded-[6px] overflow-hidden  transition-all duration-200 group-hover:scale-110">
                                                <Image src="/images/location.jpg" width="330" height="150" className="w-full h-full object-cover" alt="location-img" />
                                            </div>
                                            <div className="absolute left-0 right-0 bottom-0 top-0 w-fit h-fit m-auto transition-all duration-300 text-center 
                                                flex items-center justify-center flex-col">
                                                <div className="w-[42px] h-[42px] flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px]">
                                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" >
                                                        <path d="M21.0803 3.28176C20.6267 3.27848 20.2567 3.64352 20.2534 4.09633C20.2502 4.54915 20.6144 4.91911 21.068 4.92239C21.5208 4.92567 21.8908 4.56145 21.8941 4.10864C21.8973 3.65582 21.5331 3.28586 21.0803 3.28176Z" fill="#00335B" />
                                                        <path d="M21.0432 8.20327C17.8758 8.1808 15.2819 10.736 15.258 13.9023C15.2341 17.0685 17.7907 19.6636 20.957 19.6875C20.9717 19.6876 20.9863 19.6877 21.001 19.6877C24.1471 19.6877 26.7184 17.1401 26.7422 13.9885C26.7661 10.8225 24.2096 8.22714 21.0432 8.20327ZM21.0008 18.0471C20.9905 18.0471 20.9797 18.047 20.9693 18.047C18.7076 18.0299 16.8815 16.1762 16.8985 13.9146C16.9155 11.6633 18.752 9.84365 20.9994 9.84365C21.0097 9.84365 21.0205 9.84374 21.0309 9.84382C23.2925 9.86088 25.1187 11.7146 25.1017 13.9762C25.0846 16.2275 23.2482 18.0471 21.0008 18.0471Z" fill="#00335B" />
                                                        <path d="M24.579 3.90383C24.1523 3.7524 23.6831 3.97594 23.5317 4.40299C23.3804 4.83005 23.6039 5.29886 24.0309 5.45029C27.6441 6.73088 30.0521 10.1722 30.0233 14.0135C30.0199 14.4664 30.3844 14.8365 30.8374 14.8399C30.8395 14.8399 30.8416 14.8399 30.8438 14.8399C31.2938 14.8399 31.6605 14.4767 31.6639 14.0258C31.698 9.48558 28.8508 5.41788 24.579 3.90383Z" fill="#00335B" />
                                                        <path d="M26.033 30.8801C31.4892 23.8569 34.899 20.1947 34.945 14.0502C35.0028 6.31929 28.7288 0 20.9985 0C13.3585 0 7.11275 6.18747 7.05467 13.841C7.00775 20.1521 10.4809 23.8094 15.9747 30.8789C10.5093 31.6956 7.05467 33.7478 7.05467 36.2579C7.05467 37.9393 8.60884 39.4481 11.431 40.5063C13.9996 41.4695 17.3979 42 20.9998 42C24.6018 42 28.0001 41.4695 30.5687 40.5063C33.3909 39.448 34.945 37.9392 34.945 36.2578C34.945 33.7491 31.4935 31.6974 26.033 30.8801ZM8.69522 13.8534C8.7464 7.09982 14.2569 1.64063 20.9987 1.64063C27.8203 1.64063 33.3553 7.21778 33.3045 14.038C33.2608 19.8732 29.6447 23.4692 23.8716 30.995C22.8419 32.3367 21.8962 33.6052 21.0011 34.8461C20.1086 33.6045 19.1818 32.3587 18.1366 30.9945C12.1249 23.1536 8.65075 19.8294 8.69522 13.8534ZM20.9998 40.3595C13.9574 40.3595 8.69522 38.1941 8.69522 36.2579C8.69522 34.822 11.841 33.0081 17.1302 32.38C18.2994 33.9141 19.3244 35.3078 20.3298 36.7312C20.4834 36.9486 20.7329 37.078 20.9991 37.0782C20.9994 37.0782 20.9996 37.0782 20.9998 37.0782C21.2658 37.0782 21.5152 36.9492 21.6691 36.7323C22.6649 35.3274 23.718 33.8993 24.8772 32.3809C30.1615 33.0097 33.3045 34.823 33.3045 36.258C33.3044 38.1941 28.0423 40.3595 20.9998 40.3595Z" fill="#00335B" />
                                                    </svg>
                                                </div>
                                                <div className="text-[14px] text-base2 font-medium transition-all duration-all">View Map</div>
                                            </div>
                                        </Link>
                                        <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[8px] 3xl:mb-[10px]">
                                            Opening Hours
                                        </div>

                                        <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                            <span className="font-light">General Services</span><span className="pl-[5px]">: Mon-Fri: 8AM-8PM</span>
                                        </div>
                                        <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white mb-[8px] font-normal flex items-center`} aria-label="email_link">
                                            <span className="font-light">Emergency Care </span><span className="pl-[5px]">: 24/7 Available</span>
                                        </div>
                                        <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                            <span className="font-light">Specialist Clinics </span><span className="pl-[5px]">: Mon-Sat: 9AM-6PM</span>
                                        </div>
                                        <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white  font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                            <span className="font-light">Diagnostic Services </span><span className="pl-[5px]">: Mon-Fri: 7AM-7PM</span>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                            </div>
                            <div className="hidden sm:block">
                               
                                <Link href="#" className="w-full flex items-center mb-[20px] xl:mb-[25px] group relative rounded-[6px] overflow-hidden " aria-label="location_link">
                                    <div className="w-full h-full rounded-[6px] overflow-hidden  transition-all duration-200 group-hover:scale-110">
                                        <Image src="/images/location.jpg" width="330" height="150" className="w-full h-full object-cover" alt="location-img" />
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 top-0 w-fit h-fit m-auto transition-all duration-300 text-center 
                                    flex items-center justify-center flex-col">
                                        <div className="w-[42px] h-[42px] flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px]">
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" >
                                                <path d="M21.0803 3.28176C20.6267 3.27848 20.2567 3.64352 20.2534 4.09633C20.2502 4.54915 20.6144 4.91911 21.068 4.92239C21.5208 4.92567 21.8908 4.56145 21.8941 4.10864C21.8973 3.65582 21.5331 3.28586 21.0803 3.28176Z" fill="#00335B" />
                                                <path d="M21.0432 8.20327C17.8758 8.1808 15.2819 10.736 15.258 13.9023C15.2341 17.0685 17.7907 19.6636 20.957 19.6875C20.9717 19.6876 20.9863 19.6877 21.001 19.6877C24.1471 19.6877 26.7184 17.1401 26.7422 13.9885C26.7661 10.8225 24.2096 8.22714 21.0432 8.20327ZM21.0008 18.0471C20.9905 18.0471 20.9797 18.047 20.9693 18.047C18.7076 18.0299 16.8815 16.1762 16.8985 13.9146C16.9155 11.6633 18.752 9.84365 20.9994 9.84365C21.0097 9.84365 21.0205 9.84374 21.0309 9.84382C23.2925 9.86088 25.1187 11.7146 25.1017 13.9762C25.0846 16.2275 23.2482 18.0471 21.0008 18.0471Z" fill="#00335B" />
                                                <path d="M24.579 3.90383C24.1523 3.7524 23.6831 3.97594 23.5317 4.40299C23.3804 4.83005 23.6039 5.29886 24.0309 5.45029C27.6441 6.73088 30.0521 10.1722 30.0233 14.0135C30.0199 14.4664 30.3844 14.8365 30.8374 14.8399C30.8395 14.8399 30.8416 14.8399 30.8438 14.8399C31.2938 14.8399 31.6605 14.4767 31.6639 14.0258C31.698 9.48558 28.8508 5.41788 24.579 3.90383Z" fill="#00335B" />
                                                <path d="M26.033 30.8801C31.4892 23.8569 34.899 20.1947 34.945 14.0502C35.0028 6.31929 28.7288 0 20.9985 0C13.3585 0 7.11275 6.18747 7.05467 13.841C7.00775 20.1521 10.4809 23.8094 15.9747 30.8789C10.5093 31.6956 7.05467 33.7478 7.05467 36.2579C7.05467 37.9393 8.60884 39.4481 11.431 40.5063C13.9996 41.4695 17.3979 42 20.9998 42C24.6018 42 28.0001 41.4695 30.5687 40.5063C33.3909 39.448 34.945 37.9392 34.945 36.2578C34.945 33.7491 31.4935 31.6974 26.033 30.8801ZM8.69522 13.8534C8.7464 7.09982 14.2569 1.64063 20.9987 1.64063C27.8203 1.64063 33.3553 7.21778 33.3045 14.038C33.2608 19.8732 29.6447 23.4692 23.8716 30.995C22.8419 32.3367 21.8962 33.6052 21.0011 34.8461C20.1086 33.6045 19.1818 32.3587 18.1366 30.9945C12.1249 23.1536 8.65075 19.8294 8.69522 13.8534ZM20.9998 40.3595C13.9574 40.3595 8.69522 38.1941 8.69522 36.2579C8.69522 34.822 11.841 33.0081 17.1302 32.38C18.2994 33.9141 19.3244 35.3078 20.3298 36.7312C20.4834 36.9486 20.7329 37.078 20.9991 37.0782C20.9994 37.0782 20.9996 37.0782 20.9998 37.0782C21.2658 37.0782 21.5152 36.9492 21.6691 36.7323C22.6649 35.3274 23.718 33.8993 24.8772 32.3809C30.1615 33.0097 33.3045 34.823 33.3045 36.258C33.3044 38.1941 28.0423 40.3595 20.9998 40.3595Z" fill="#00335B" />
                                            </svg>
                                        </div>
                                        <div className="text-[14px] text-base2 font-medium transition-all duration-all">View Map</div>
                                    </div>
                                </Link>
                                <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white font-medium  mb-[8px] 3xl:mb-[10px]">
                                    Opening Hours
                                </div>

                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                    <span className="font-light">General Services</span><span className="pl-[5px]">: Mon-Fri: 8AM-8PM</span>
                                </div>
                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white mb-[8px] font-normal flex items-center`} aria-label="email_link">
                                    <span className="font-light">Emergency Care </span><span className="pl-[5px]">: 24/7 Available</span>
                                </div>
                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                    <span className="font-light">Specialist Clinics </span><span className="pl-[5px]">: Mon-Sat: 9AM-6PM</span>
                                </div>
                                <div className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-white  font-normal mb-[8px] flex items-center`} aria-label="email_link">
                                    <span className="font-light">Diagnostic Services </span><span className="pl-[5px]">: Mon-Fri: 7AM-7PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion>
            </div>
            {/* copyright */}
            <div className="border-t border-[rgba(255,255,255,0.3)]">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between py-[20px] xl:py-[30px_20px] 2xl:py-[35px_25px] 3xl:py-[45px_35px]">
                        <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-white max-sm:w-full max-sm:text-center max-sm:mb-[5px]">© 2025 Skyline Hospitals  |  All rights reserved</div>
                        <div className="text-[9px] 2xl:text-[11px] 3xl:text-[14px] text-white flex items-center max-sm:justify-center max-sm:w-full">Designed By :
                            <a href="/" className="px-[5px]" aria-label="logo">
                                <Image src="/images/interLogo.svg" width="105" height="20" className="w-[105px]" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
