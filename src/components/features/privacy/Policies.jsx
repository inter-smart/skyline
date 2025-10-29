"use client";

import { Heading } from "@/components/layout/Heading";
import { renderHtml } from "@/utils/parseHtml";

export default function PrivacyPolicySection({
  title, content
}) {
  return (
    <div className="px-20 py-15">
      <div>
        <Heading as={"h1"} size="heading1" className="text-3xl font-bold">{title}</Heading>
      </div>

      {renderHtml(content)}
    </div>
  );
}
