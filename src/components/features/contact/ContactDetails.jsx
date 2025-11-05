"use client";

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { parseDescriptionToListItemsWithColor, renderHtml } from "@/utils/parseHtml";
import parse from "html-react-parser";
import Image from "next/image";

export default function ContactDetails({ description, title, contact_infos }) {
  const displayPreTitle =
    description ||
    `<p>Mass Care Agency is a registered nursing agency. We are dedicated
    to the health profession and care industry all over the UK by supplying quality healthcare professionals to fulfill your staffing
    needs when required. We are available 24 hours a day, 7 days a week.</p>`;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <Heading size="heading1" as="h2" className="leading-none text-center mb-6">
          {title || "Contact Details"}
        </Heading>

        {/* Description */}
        <Text as="div" size="text1" className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-sm md:text-base">
          {renderHtml(displayPreTitle)}
        </Text>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contact_infos?.map((card, index) => (
            <div key={index} className="group bg-blue-50 rounded-2xl p-6 hover:shadow-lg hover:bg-base2 transition-all duration-300">
              {/* Icon */}
              <div className="w-12 h-12 bg-base2 text-white group-hover:bg-white group-hover:text-base2 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={card?.icon_value || "/images/default-icon.svg"}
                  alt={card?.icon_alt_text_value || card?.title || "icon"}
                  width={24}
                  height={24}
                />
              </div>

              {/* Title */}
              <Heading as="h5" size="heading5" className="font-bold text-lg mb-2 text-[#1e1e1e] group-hover:text-white">
                {card?.title}
              </Heading>

              {/* Content */}
              <Text as="div" size="text1">
                {renderHtml(card?.content, "text-sm [&>p]:text-black group-hover:[&>p]:text-white")}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
