"use client";

import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import Link from "next/link";
import { renderHtml } from "@/utils/parseHtml";
import { useRouter } from "next/navigation";
import { useBookingFormContext } from "@/context/BookingFormContext";
export default function FeaturedSection({ path, alt, sub_title, title, description, button_text, button_link, className, id }) {
  const { openDialog } = useBookingFormContext();
  const router = useRouter();

  const handleClick = (text, link) => {
    openDialog({
      slug: id,
      source: "services",
    });
  };

  return (
    <section className="w-full pt-[80px] sm:pt-[60px] xl:pt-[80px] 3xl:pt-[100px] relative z-0">
      <div className="container container-sm relative after:content-[''] after:absolute after:clear-both after:block">
        <div className="w-full md:w-[calc(40%+40px)] xl:w-[calc(50%+50px)] 2xl:w-[calc(50%+60px)] 3xl:w-[calc(50%+75px)] md:pr-[30px] xl:pr-[50px] 2xl:pr-[60px] 3xl:pr-[75px] mb-[30px] md:float-left">
          <div className="w-full overflow-hidden ">
            <Image src={path} alt={alt} width={805} height={495} className="w-full h-auto object-cover hover:scale-105 transition-all duration-400" />
          </div>
        </div>

        <div
          className={`[&_p,&_li]:text-[12px] xl:[&_p,&_li]:text-[14px] 2xl:[&_p,&_li]:text-[16px] 3xl:[&_p,&_li]:text-[18px] [&_li]:relative [&_li]:inline-block [&_li]:pl-[25px]
                     [&_li]:before:absolute [&_li]:before:top-[4px] [&_li]:before:left-0 [&_li]:before:w-[15px] [&_li]:before:h-[17px] [&_li]:before:bg-[url('/images/expertIcon.svg')] [&_li]:before:bg-no-repeat
                      [&_li]:before:bg-contain [&_li]:before:content-[''] pt-[10px] xl:pt-[0px] 2xl:pt-[30px] 3xl:pt-[40px] pl-0`}
        >
          <Heading
            as="h6"
            size="heading6"
            className=" leading-[1] font-normal tracking-[3.06px] text-center md:text-start uppercase text-base1 mb-[6px] lg:mb-[10px] max-w-[100%] lg:max-w-[100%] xl:max-w-[92%] 2xl:max-w-[91%] 3xl:max-w-[89%]"
          >
            {sub_title}
          </Heading>
          <Heading
            as="h1"
            size="heading1"
            className="text-center font-unna md:text-start text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px] max-w-[100%] lg:max-w-[100%] xl:max-w-[92%] 2xl:max-w-[91%] 3xl:max-w-[89%]"
          >
            {title}
          </Heading>
          <Text
            as="div"
            size="text1"
            className="text-center md:text-start font-normal  text-[#1E1E1E] max-w-[100%] lg:max-w-[100%] xl:max-w-[92%] 2xl:max-w-[91%] 3xl:max-w-[89%]"
          >
            {renderHtml(description)}
          </Text>

          <button
            onClick={() => handleClick(button_text, button_link)}
            className="btn-base1 hover max-md:mx-auto md:mr-auto"
            aria-label="appointment"
          >
            {button_text || "Book Appointment"}
          </button>
        </div>
      </div>
    </section>
  );
}
