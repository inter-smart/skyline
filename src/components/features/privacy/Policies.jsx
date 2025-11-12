"use client";

import { Heading } from "@/components/layout/Heading";
import { renderHtml } from "@/utils/parseHtml";

export default function PrivacyPolicySection({ title, content }) {
  return (
    <div className="px-20 py-15">
      <div>
        <Heading as={"h1"} size="heading1" className="text-3xl font-bold">
          {title}
        </Heading>
      </div>

      {renderHtml(
        content,
        `list
   [&>p]:text-white [&>p]:text-[10px] [&>p]:xl:text-[12px] [&>p]:2xl:text-[14px] [&>p]:3xl:text-[18px]
   [&_ul]:list-disc [&_ol]:list-decimal
   [&_ul]:pl-5 [&_ol]:pl-5
   [&_ul]:mt-2 [&_ol]:mt-2
   [&_ul]:mb-4 [&_ol]:mb-4
   [&_li]:text-black
   [&_li]:text-[10px]
   xl:[&_li]:text-[12px]
   2xl:[&_li]:text-[14px]
   3xl:[&_li]:text-[18px]
   [&_li]:leading-relaxed
   [&_li]:!list-item`
      )}
    </div>
  );
}
