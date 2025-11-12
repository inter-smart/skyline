"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { renderHtml } from "@/utils/parseHtml";
import { useState } from "react";
const selectTrigger = `
  relative  [&>svg]:hidden
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[17px] !no-underline cursor-pointer
  after:bg-[url('/images/arrow.svg')] after:bg-no-repeat after:bg-contain after:w-[8px] after:h-[8px]
  after:transition-transform after:duration-300 data-[state=open]:after:rotate-180
`;
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function InnerBanner({ img, mobile_img, subTitle, Title, description, alt, showFormBox = false, onSearch = "" }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // 🔥 notify parent (page.js)
  };

  return (
    <section
      className={`w-full relative py-[30px] flex items-center ${
        showFormBox
          ? "h-auto min-h-[300px] xl:min-h-[375px] 2xl:min-h-[450px] 3xl:min-h-[565px]"
          : "h-[300px] xl:h-[375px] 2xl:h-[450px] 3xl:h-[565px]"
      }`}
    >
      <Image src={img} alt={alt} width={1920} height={565} className="object-cover absolute top-0 left-0 w-full h-full" priority />

      <div className="container h-full w-full flex items-center relative ">
        <div className="w-full relative">
          <motion.div
            className="max-w-[480px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textAnimation}
          >
            <motion.h1
              className={`text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] ${
                showFormBox ? "text-white " : "text-[#671448]"
              } uppercase font-normal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]`}
              variants={textAnimation}
            >
              {subTitle}
            </motion.h1>

            <motion.h2
              className={`text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[65px]
               ${showFormBox ? "text-white " : "text-[#212121]"}
               font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]`}
              variants={textAnimation}
              transition={{ delay: 0.3 }}
            >
              {renderHtml(Title)}
            </motion.h2>

            <motion.div
              className={`text-[12px] 2xl:text-[14px] 3xl:text-[18px]   ${showFormBox ? "text-white " : "text-[#212121]"} mb-[20px] max-w-[650px]`}
              variants={textAnimation}
              transition={{ delay: 0.6 }}
            >
              {(description && renderHtml(description)) || ""}
            </motion.div>
          </motion.div>

          {/* formBox */}

          {showFormBox && (
            <div
              className="bg-[rgba(255,255,255,0.4)] p-[10px_4px] lg:p-[8px_10px] 2xl:p-[8px_12px] 3xl:p-[10px_15px]   
           max-w-[550px] xl:max-w-[690px] 2xl:max-w-[820px] 3xl:max-w-[1040px] w-full mt-[20px] xs:mt-[30px] xl:mt-[40px]"
            >
              <div className="flex flex-wrap w-full h-full">
                <div
                  className="w-full h-full xs:w-[calc(100%-105px)] xl:w-[calc(100%-130px)] 2xl:w-[calc(100%-160px)] 3xl:w-[calc(100%-200px)] 
                flex flex-wrap  xs:-mx-[5px] xs:pr-[8px] 2xl:pr-[12px]"
                >
                  <div className="w-full 2xs:w-full max-2xs:p-[5px] px-[5px] ">
                    <div className="w-full  bg-white flex items-center p-[0_10px] 2xl:p-[5px_10px] 3xl:p-[5px_15px]">
                      <div className="w-[15px] 2xl:w-[23px] h-[15px] 2xl:h-[23px] flex items-center">
                        <svg width="23" height="28" viewBox="0 0 23 28" fill="none">
                          <path
                            d="M20.6704 18.0055C19.0198 17.1722 17.2062 16.5984 15.4204 16.2379C14.998 15.7846 14.7075 15.2246 14.5801 
                        14.6182C15.6856 13.7536 16.5319 12.4568 16.9956 10.912C18.2759 10.7182 18.6088 8.75083 18.101 7.67353C20.4326 -2.54352 2.63608 
                        -2.56472 4.91222 7.65126C4.37792 8.72802 4.71038 10.7219 6.00556 10.913C6.46312 12.4579 7.31555 13.7547 8.42102 14.6192C8.28878 15.2523 
                        7.97993 15.835 7.53016 16.2997C6.68486 16.4475 6.16452 16.572 6.15336 16.5842C2.69023 17.5375 -0.383011 18.6088 0.0389115 22.8719C-0.136899 
                        28.9781 23.1358 28.9838 22.9694 22.872C23.1523 20.9486 22.5313 18.8826 20.6704 18.0055ZM11.5157 0.819946C15.5332 0.764616 17.8992 3.40692 
                        17.3782 6.97298C17.1407 6.85856 16.8554 6.85357 16.5997 6.91121C16.4985 6.60751 16.3335 6.12054 16.05 5.32994C16.014 5.2599 15.9551 5.19652 
                        15.9083 5.13255C12.288 2.7238 10.7767 7.19016 7.52608 5.1194C7.50687 5.10728 7.49367 5.09611 7.47649 5.08296C7.31045 5.04062 7.12439 5.06874 
                        7.01894 5.21863C6.68245 5.89622 6.50567 6.64722 6.39432 6.91126C6.14879 6.84842 5.87939 6.85362 5.64723 6.96085C5.12608 3.3978 7.49962 0.765743 
                        11.5157 0.819946ZM6.71014 10.3451C6.50396 9.82356 6.16178 10.1944 5.93773 10.0232C5.42951 9.67775 5.30318 7.91144 5.95603 7.72613C6.29546 7.61445 
                        6.5953 8.047 6.91364 7.79901C7.00284 7.72876 7.06246 7.6276 7.08071 7.51554C7.11108 7.37885 7.32671 6.74919 7.56257 6.09827C11.2676 7.79863 12.0646 
                        3.92265 15.3212 5.74799C15.7505 6.7962 15.7598 7.35218 16.0864 7.79804C16.4037 8.04753 16.7057 7.61058 17.0442 7.72511C17.3044 7.79799 17.5504
                         8.293 17.4896 8.96018C17.439 9.51594 17.2294 9.87127 17.0634 10.0221C16.8223 10.1787 16.456 9.82511 16.291 10.3441C14.8146 16.3426 8.1807 16.344 
                         6.71014 10.3451ZM9.16306 15.1142C10.613 15.9376 12.3891 15.9376 13.8391 15.1142C14.0186 15.7373 14.3422 16.3096 14.7836 16.7846C14.568 17.4639 
                         13.0161 18.7496 11.5036 19.688C9.98506 18.7495 8.43314 17.4608 8.22261 16.7846C8.66208 16.3088 8.98419 15.7368 9.16306 15.1142ZM0.872936 
                         22.8718C0.563444 19.4727 2.42684 18.6297 5.28273 17.6967C5.15114 18.2421 5.04977 18.7943 4.97904 19.3508C3.20811 19.8853 3.30385 21.5148 
                         3.582 23.0085C3.19335 23.5369 3.85028 24.2564 4.41114 23.9104C4.82925 23.6822 4.81321 23.0378 4.39187 22.8232C4.23458 21.7286 3.93507 
                         20.3754 5.43402 20.1528C6.85429 20.09 6.88064 21.4658 6.98856 22.5064C6.62433 22.8212 6.7886 23.4489 7.25287 23.5608C7.86364 23.7466 
                         8.32554 22.9106 7.82173 22.5064C7.7299 21.1014 7.51079 19.5343 5.8203 19.3074C5.91197 18.6721 6.0435 18.0432 6.21411 17.4244C6.48485 17.3533 
                         6.60952 17.3123 7.48664 17.1521C8.02421 18.4124 10.2615 19.8956 11.0885 20.4017V26.6155C6.2264 26.4164 0.876961 25.4218 0.872936 22.8718ZM22.1322 
                         22.8718C22.1309 25.4168 16.7827 26.4176 11.9146 26.6155V20.4017C12.7548 19.8824 15.0225 18.377 15.5296 17.1156C15.9397 17.1934 16.3361 17.2952 
                         16.7272 17.3991C16.965 18.2688 17.1262 19.1576 17.2091 20.0555C15.2731 20.7523 16.2604 23.6489 18.2188 23.0183C19.6994 22.5649 19.5589 20.2859 
                         18.0433 20.0069C17.9696 19.2227 17.8413 18.4447 17.6596 17.6784C20.5301 18.6053 22.4528 19.4529 22.1322 22.8718ZM17.7153 20.7975C18.6665 20.807 
                         18.6689 22.2502 17.7146 22.2547C16.7598 22.2481 16.7662 20.8053 17.7174 20.7975H17.7153Z"
                            fill="#919193"
                          />
                        </svg>
                      </div>
                      <div className="w-[calc(100%-15px)] 2xl:w-[calc(100%-23px)] ">
                        {/* <Select className="h-full">
                          <SelectTrigger
                            className={`${selectTrigger} !text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] w-full border-none outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none`}
                          >
                            <SelectValue
                              placeholder="Search by name"
                              className="placeholder:!text-[8px] xl:placeholder:!text-[10px] 2xl:placeholder:!text-[11px] 3xl:placeholder:!text-[15px]"
                            />
                          </SelectTrigger>

                          <SelectContent className="!text-[8px] xl:!text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] placeholder:!text-[8px] xl:placeholder:!text-[10px] 2xl:placeholder:!text-[11px] 3xl:placeholder:!text-[15px]">
                            <SelectItem value="search" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              Search by name
                            </SelectItem>
                            <SelectItem value="dark" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              Dark
                            </SelectItem>
                            <SelectItem value="system" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              System
                            </SelectItem>
                          </SelectContent>
                        </Select> */}
                        <input
                          type="text"
                          value={query}
                          onChange={handleChange}
                          placeholder="Search by name, speciality"
                          className={`${selectTrigger} w-full rounded-md px-3 py-2 text-[10px] outline-none 2xl:text-[11px] 3xl:text-[15px]`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full 2xs:w-1/2 max-2xs:p-[5px] px-[5px] "> */}
                  {/* <div className="w-full   bg-white flex items-center p-[0_10px] 2xl:p-[5px_10px] 3xl:p-[5px_15px]">
                      <div className="w-[15px] 2xl:w-[23px] h-[15px] 2xl:h-[23px] flex items-center">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M25.034 13.8164L24.8652 13.5868L23.7879 14.3784L23.9566 14.608C25.3735 16.5365 26.3204 20.274 25.4527 23.1903C24.9077 25.0219 23.725 26.2905 21.9373 26.9608C21.1913 27.2406 20.4392 27.3824 19.7017 27.3824C18.1059 27.3824 16.5367 26.7152 15.1333 25.4463C16.581 25.2522 17.9999 24.8281 19.3598 24.1824C19.5363 24.1129 20.3295 23.7784 21.1029 23.1077C22.2774 22.089 22.8339 20.7957 22.7124 19.3673C22.5934 17.9682 21.9011 16.9019 20.7629 16.3646C20.2659 16.13 19.6874 16.0059 19.0899 16.0059C18.4307 16.0059 17.7759 16.1506 17.178 16.4264C16.664 15.2495 15.7842 14.3807 14.7279 14.0193C14.3706 13.8972 14.0008 13.8352 13.6289 13.8352C12.6982 13.8352 11.8231 14.2165 11.1651 14.909C9.84415 16.2988 9.64255 18.5959 10.6257 21.0536C11.0806 22.1908 11.6432 23.2463 12.3017 24.1991C9.77884 23.9886 8.21253 23.0899 8.14497 23.0539C7.6187 22.7731 6.62368 22.1692 5.96072 21.7616L6.38509 21.2978L4.96646 19.8907L3.22363 21.7955L4.69659 23.1432L5.15413 22.6432C5.69063 23.2028 6.93071 23.8666 7.28878 24.0722C7.56581 24.2314 9.01941 25.0442 11.0699 25.3853C11.8004 25.5069 12.551 25.5686 13.3005 25.5686C13.3266 25.5686 13.3528 25.5684 13.3791 25.5683C13.9055 26.1542 14.4672 26.6696 15.0506 27.1016C16.5034 28.1775 18.0638 28.723 19.6883 28.723C20.5892 28.723 21.5038 28.5513 22.4067 28.2127C24.5764 27.3991 26.0728 25.7941 26.7341 23.5716C27.7205 20.2563 26.6443 16.0082 25.034 13.8164ZM13.9826 24.223C13.141 23.1815 12.411 21.917 11.867 20.557C11.0833 18.5977 11.1832 16.8306 12.1342 15.8299C12.5391 15.4039 13.0662 15.1693 13.6185 15.1693C13.8443 15.1693 14.072 15.208 14.2951 15.2843C14.8885 15.4873 15.6415 16.0867 16.0393 17.1678C14.8618 18.1787 15.0753 19.0029 15.2283 19.3188C15.4321 19.7396 15.8659 20.001 16.3603 20.001C16.5013 20.001 16.6425 19.9795 16.7801 19.9372C17.0848 19.8435 17.5984 19.5237 17.6153 18.4355C17.6188 18.2116 17.6008 17.9743 17.5618 17.7278C18.0269 17.4764 18.5609 17.3394 19.0851 17.3394C19.4849 17.3394 19.8677 17.4203 20.1922 17.5736C20.8915 17.9037 21.3023 18.5631 21.3804 19.4806C21.5852 21.8878 18.9722 22.9001 18.8609 22.942L18.8075 22.9647C17.245 23.71 15.6225 24.133 13.9826 24.223Z"
                            fill="#919193"
                          />
                          <path
                            d="M19.173 12.1913C19.1505 12.1602 16.8769 9.01528 15.4563 6.74214C14.6261 5.41397 14.3845 4.11331 14.7934 3.17372C15.1107 2.44476 15.7942 1.95959 16.7698 1.77076L16.9833 1.72943L17.14 2.53943L16.9266 2.58076C16.2198 2.71763 15.7566 3.02784 15.5499 3.50295C15.2511 4.18949 15.472 5.21069 16.1559 6.30495C17.5621 8.55508 19.8187 11.6765 19.8411 11.7074L19.9688 11.8836L19.3005 12.3673L19.173 12.1913Z"
                            fill="#919193"
                          />
                          <path
                            d="M17.6778 3.00825C17.6671 3.01119 17.6564 3.01356 17.6454 3.01535L17.6269 3.01709L16.4783 3.05142C16.3276 3.06917 16.1788 2.95467 16.1293 2.78063L15.9341 2.02144C15.8875 1.85786 15.9479 1.68724 16.0765 1.61748L17.0269 0.846142C17.1191 0.806319 17.2268 0.815393 17.3212 0.870129C17.4201 0.927524 17.4966 1.02989 17.5311 1.1508L17.9124 2.48822C17.9468 2.60931 17.9358 2.73676 17.8822 2.83826C17.8366 2.92409 17.7634 2.98466 17.6778 3.00825ZM16.9581 2.00045V2.0008C16.9581 2.00069 16.9581 2.00057 16.9581 2.00045Z"
                            fill="#919193"
                          />
                          <path
                            d="M4.53504 17.005C3.2538 16.1065 1.46565 16.4316 0.541095 17.7312C-0.383406 19.0309 -0.0942362 20.8128 1.18712 21.7113C2.46836 22.6098 4.25656 22.2847 5.18106 20.9851C6.10556 19.6856 5.81639 17.9036 4.53504 17.005Z"
                            fill="#919193"
                          />
                          <path
                            d="M2.81446 21.6459C2.36258 21.6459 1.9088 21.5144 1.51512 21.2404C1.02088 20.8962 0.69235 20.3794 0.590045 19.7852C0.485428 19.1776 0.628423 18.5629 0.992618 18.0546C1.73517 17.0182 3.17738 16.7585 4.20759 17.4758C4.7019 17.82 5.03043 18.3368 5.13267 18.9311C5.23723 19.5387 5.09424 20.1533 4.73004 20.6616C4.27135 21.3021 3.54533 21.6459 2.81446 21.6459ZM2.90769 17.3561C2.26623 17.3561 1.62858 17.6584 1.22526 18.2213C0.905976 18.6669 0.780551 19.2051 0.872048 19.7367C0.961232 20.2549 1.24769 20.7055 1.67864 21.0056C2.58112 21.6339 3.84565 21.4049 4.49757 20.495C4.81686 20.0495 4.94228 19.5113 4.85084 18.9797C4.76166 18.4614 4.47521 18.0108 4.0442 17.7107C3.70006 17.471 3.30309 17.3561 2.90769 17.3561Z"
                            fill="white"
                          />
                          <path
                            d="M3.21811 18.516C2.75254 18.3273 2.21547 18.5515 2.01843 19.0166C1.82139 19.4817 2.03906 20.0117 2.50464 20.2003C2.97015 20.3889 3.50723 20.1648 3.70426 19.6996C3.9013 19.2345 3.68369 18.7045 3.21811 18.516Z"
                            fill="white"
                          />
                          <path
                            d="M23.2005 15.5285C20.8622 15.5285 19.087 13.2545 18.4067 11.9108L18.2593 11.6199L19.0807 11.204L19.8864 10.7947L20.0332 11.0883C20.0371 11.0958 20.5303 12.0488 21.3333 12.8101C21.9718 13.4155 22.5758 13.7098 23.1796 13.7098C23.477 13.7098 23.7713 13.6397 24.0793 13.4955C24.656 13.2255 24.9963 12.8617 25.1503 12.3507C25.5965 10.8708 24.3472 8.77971 24.3346 8.75873L24.1667 8.48112L24.4431 8.31125L25.7192 7.53009L25.8895 7.80787C25.9588 7.92081 27.5787 10.6006 26.8969 12.8723C26.5918 13.8888 25.9039 14.6538 24.8522 15.1461C24.3101 15.3999 23.7544 15.5285 23.2005 15.5285Z"
                            fill="#919193"
                          />
                          <path
                            d="M25.872 9.02313C25.861 8.98631 24.7468 5.269 23.806 2.75894C23.2564 1.29222 22.3708 0.309575 21.3762 0.0628293C20.6045 -0.128487 19.8038 0.119068 19.0606 0.778791L18.8979 0.923116L19.4457 1.54007L19.6082 1.39574C20.1466 0.917914 20.6746 0.738794 21.1774 0.863583C21.9042 1.0438 22.5806 1.84016 23.0334 3.04846C23.9647 5.53314 25.0706 9.22259 25.0814 9.25918L25.1436 9.46772L25.934 9.23132L25.872 9.02313Z"
                            fill="#919193"
                          />
                          <path
                            d="M19.222 2.26952C19.1106 2.25068 19.0045 2.18299 18.9306 2.08364L18.114 0.98562C18.0402 0.886378 18.006 0.765346 18.0203 0.653793C18.034 0.547269 18.0914 0.45768 18.1776 0.409591L19.3487 0.128686C19.4801 0.0699615 19.6495 0.124813 19.7494 0.259081L20.2257 0.865686C20.332 1.00857 20.3324 1.19318 20.2284 1.30034L19.5144 2.17698L19.502 2.19045C19.494 2.19796 19.4858 2.2049 19.4771 2.21149C19.4075 2.26432 19.3164 2.2853 19.222 2.26952ZM19.1208 1.04671L19.1205 1.04648C19.1207 1.04654 19.1207 1.0466 19.1208 1.04671Z"
                            fill="#919193"
                          />
                        </svg>
                      </div>
                      <div className="w-[calc(100%-15px)] 2xl:w-[calc(100%-23px)]">
                        <Select className="!text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] h-full">
                          <SelectTrigger
                            className={`${selectTrigger} !text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] w-full border-none outline-none shadow-none [&>svg]:hidden 
                              focus:outline-none focus:ring-0 focus:shadow-none 
                              focus-visible:ring-0 focus-visible:shadow-none`}
                          >
                            <SelectValue
                              placeholder="Search by speciality"
                              className="placeholder:text-[8px] xl:placeholder:text-[10px] 2xl:placeholder:text-[11px] 3xl:placeholder:text-[15px] "
                            />
                          </SelectTrigger>

                          <SelectContent className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                            <SelectItem value="search" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              Search by speciality
                            </SelectItem>
                            <SelectItem value="dark" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              Dark
                            </SelectItem>
                            <SelectItem value="system" className="text-[10px] 2xl:text-[11px] 3xl:text-[15px]">
                              System
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
                <div className="w-full   xs:w-[105px] xl:w-[130px] 2xl:w-[160px] 3xl:w-[200px]  max-xs:p-[5px]">
                  <Button
                    className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[15px] btn-base1 hover bg-base2 rounded-[2px] 
                  w-full !min-h-full !h-full tracking-wider"
                    aria-label="consultation_btn"
                  >
                    SEARCH
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
