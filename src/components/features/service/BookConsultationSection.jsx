import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { renderHtml } from "@/utils/parseHtml";

export default function BookConsultationSection({ data }) {
  return (
    <section className="w-full h-auto py-[30px] sm:py-[50px] 2xl:py-[60px] 3xl:py-[80px] block">
      <div className="container">
        <div
          style={{ backgroundColor: data?.backgroundColor || "#ffffff" }}
          className="w-full h-auto p-[15px] sm:p-[15px_20px] 2xl:p-[20px_25px] 3xl:p-[25px_30px] rounded-[5px] flex flex-wrap xl:items-end"
        >
          <div className="[--width:100%] sm:[--width:220px] lg:[--width:310px] 2xl:[--width:375px] 3xl:[--width:470px] w-full xl:w-[70%] max-xl:mb-[20px] flex flex-wrap items-center">
            <div className="w-[var(--width)] h-auto aspect-[470/240] max-sm:mb-[15px] rounded-[5px] overflow-hidden block">
              <Image src={data?.image} alt={data?.imageAlt} width={470} height={240} className="w-full h-full object-cover" />
            </div>
            <div className="w-[var(--width)] sm:w-[calc(100%-var(--width))] sm:pl-[20px] lg:pl-[30px] 2xl:pl-[40px] 3xl:pl-[50px]">
              {renderHtml(
                data?.content,
                "text_editor [&>_h4]:font-unna [&>*]:text-white [&>*]:mb-[15px] [&>*]:my-0 first:[&>_p]:mb-0 [&>p:first-of-type]:tracking-[2px] xl:[&>p:first-of-type]:tracking-[4px] last:[&>_p]:mb-0 mb-0"
              )}
            </div>
          </div>
          <div className="w-full xl:w-[30%]">
            <div className="xl:mb-[15px] 2xl:mb-[25px] [&>*]:p-[5px] mx-[-5px] flex flex-wrap xl:justify-end">
              <div className="flex">
                <Link
                  href={"/"}
                  className="text-[10px] sm:text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-medium text-white w-fit h-auto p-[10px] 2xl:p-[15px] bg-transparent border-1 border-white rounded-[3px] hover:bg-white hover:text-base1 transition-all duration-300"
                >
                  {"BOOK AN APPOINTEMENT"}
                </Link>
              </div>
              <div className="flex">
                <Link
                  href={data?.buttonUrl}
                  //   target={data?.target ? "_blank" : "_self"}
                  className="text-[10px] sm:text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-medium text-white w-fit h-auto p-[10px] 2xl:p-[15px] bg-transparent border-1 border-white rounded-[3px] hover:bg-white hover:text-base1 transition-all duration-300"
                >
                  {data?.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
