"use client";

import { renderHtml } from "@/utils/parseHtml";
import { renderTableFromHTML } from "@/utils/tableDataParser";

export default function TableSection({ data }) {
  return (
    <section className="w-full h-auto py-[40px_20px] sm:py-[50px_30px] lg:py-[70px_35px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] block">
      <div className="container">
        <div className="w-full h-auto block">
          <div className="w-full h-auto mb-[40px] sm:mb-[50px] lg:mb-[70px] 2xl:mb-[80px] 3xl:mb-[100px] last:mb-0 block">
            <div className="text_editor md:max-w-[50%] mb-[20px] sm:mb-[30px] lg:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&>_p]:text-[#1E1E1E] [&_b]:font-medium">
              {data?.content && renderHtml(data?.content)}
            </div>
            {data?.table && (
              <div className="w-full overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                {renderTableFromHTML(data?.table, {
                  headColor: data?.headColor,
                  headTextColor: data?.headTextColor,
                  opacity: data?.opacity,
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
