import Link from "next/link";
import Image from "next/image";
import { renderHtml } from "@/utils/parseHtml";
import BookConsultationButtons from "./BookConsultationButtons";

export default function BookConsultationSection({ data, service_id }) {
  return (
    <section className="w-full h-auto py-[30px] sm:py-[50px] 2xl:py-[60px] 3xl:py-[80px] block">
      <div className="container">
        <div
          style={{ backgroundColor: data?.backgroundColor || "#ffffff" }}
          className="w-full h-auto p-[15px] sm:p-[15px_20px] 2xl:p-[20px_25px] 3xl:p-[25px_30px] rounded-[5px] flex flex-wrap xl:items-end"
        >
          <div className="[--width:100%] sm:[--width:220px] lg:[--width:310px] 2xl:[--width:375px] 3xl:[--width:470px] w-full xl:w-[70%] max-xl:mb-[20px] flex flex-wrap items-center">
            {data?.image && (
              <div className="w-[var(--width)] h-auto aspect-[470/240] max-sm:mb-[15px] rounded-[5px] overflow-hidden block">
                <Image src={data?.image} alt={data?.imageAlt} width={470} height={240} className="w-full h-full object-cover" />
              </div>
            )}
            {data?.content && (
              <div className="w-[var(--width)] sm:w-[calc(100%-var(--width))] sm:pl-[20px] lg:pl-[30px] 2xl:pl-[40px] 3xl:pl-[50px]">
                {renderHtml(
                  data?.content,
                  "text_editor [&>_h4]:font-unna [&>*]:text-white [&>*]:mb-[15px] [&>*]:my-0 first:[&>_p]:mb-0 [&>p:first-of-type]:tracking-[2px] xl:[&>p:first-of-type]:tracking-[4px] last:[&>_p]:mb-0 mb-0"
                )}
              </div>
            )}
          </div>
          <BookConsultationButtons data={data} service_id={service_id} />
        </div>
      </div>
    </section>
  );
}
