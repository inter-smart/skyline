import Image from "next/image";
import parse from "html-react-parser";
import { renderHtml } from "@/utils/parseHtml";

export default function UnderstandingADHD({ data }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[40px_100px] 2xl:py-[50px_120px] 3xl:py-[60px_140px] block">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[50%] lg:pr-[50px] 2xl:pr-[60px] 3xl:pr-[70px] max-lg:mb-[20px]">
            {data?.content &&
              renderHtml(data?.content, "text_editor [&>*]:mb-[15px] first:[&>*]:mt-0 sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]")}
            {data?.boxContent && (
              <div style={{ backgroundColor: data?.boxBackground || "#ffffff" }}>
                {renderHtml(
                  data?.boxContent,
                  "text_editor p-[20px_15px] sm:p-[30px_15px] lg:p-[35px_20px] 2xl:p-[40px_25px] 3xl:p-[50px_30px] rounded-[5px] first:[&>*]:mt-0 [&>p:first-of-type]:mb-0 mb-0"
                )}
              </div>
            )}
          </div>
          {data?.image && (
            <div className="w-full lg:w-[50%]">
              <div className="w-full h-auto aspect-[880/590] rounded-[5px] overflow-hidden block lg:sticky top-[120px] z-1">
                <Image src={data?.image} alt={data?.imageAlt} width={880} height={590} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
