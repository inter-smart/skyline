"use client";

import Image from "next/image";
import parse from "html-react-parser";
import { renderHtml } from "@/utils/parseHtml";
import { generatePriceTable } from "@/utils/priceDataTableParser.";

export default function PricingSection({ data }) {
  return (
    <section className="w-full h-auto py-[40px] block">
      <div className="container">
        {renderHtml(
          data?.content,
          "text_editor md:max-w-[50%] mb-[20px] sm:mb-[30px] lg:mb-[35px] 2xl:mb-[40px] 3xl:mb-[30px] [&>_p]:text-[#1E1E1E] [&_b]:font-medium"
        )}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[65%] lg:pr-[30px] 2xl:pr-[40px] 3xl:pr-[50px] max-lg:mb-[30px]">
            <div
              style={{
                backgroundColor: "#eef6ff",
              }}
              className="w-full p-[20px] sm:p-[30px] 2xl:p-[40px] 3xl:p-[40px_50px] rounded-[5px] overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
            >
              {generatePriceTable(data?.table)}
              {/* <table className="w-full max-sm:min-w-[700px] border-collapse">
                <thead>
                  <tr className="text-left border-b border-[#0A558F]/30">
                    {data?.table?.table_columns?.map((item, index) => (
                      <th
                        key={index}
                        className={`text_editor p-[10px_0] sm:p-[15px_0] lg:p-[20px_0] 2xl:p-[20px_0] 3xl:p-[30px_0] [&>_h5]:m-0 [&_h5]:text-[15px] 2xl:[&_h5]:text-[18px] 3xl:[&_h5]:text-[22px] whitespace-nowrap ${
                          index === 0 ? "w-[50%]" : "w-[25%] text-right"
                        }`}
                      >
                        {parse(item)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.table?.table_row_list?.map((item, index) => (
                    <tr key={index} className="border-b border-[#0A558F]/30">
                      {item?.map((items, index) => (
                        <td
                          key={index}
                          className={`text_editor p-[10px_0] sm:p-[15px_0] 3xl:p-[20px_20px_20px_0] [&>p:last-of-type]:mb-0 [&>_p]:leading-[1.8] [&>_p,h6]:text-[#00335B] [&_b]:font-medium [&_b]:text-[#212121] [&_b]:pt-[20px] mb-0 ${
                            index === 0 ? "text-left" : "text-right"
                          }`}
                        >
                          {parse(items)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>
          </div>
          <div className="w-full lg:w-[35%]">
            <div className="group w-full h-auto sm:h-[280px] lg:h-full aspect-[590/700] rounded-[5px] overflow-hidden block">
              <Image
                src={data?.image}
                alt={data?.imageAlt}
                width={590}
                height={700}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
