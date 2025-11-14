"use client";

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
import ContactFormSection from "./ContactForm";
import { renderHtml } from "@/utils/parseHtml";
import Image from "next/image";

export default function EnquirySection({ title, description, contact_items, form_title }) {
  return (
    <section id="connect-us" className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:grid-cols-3">
          {/* Left Side - Info */}
          <div className="xl:col-span-2">
            <Heading size="heading1" as="div" className="leading-none">
              {title}
            </Heading>
            <Text as="div" size="text1" className="text-center sm:text-start text-[#1E1E1E] font-normal">
              {renderHtml(description)}
            </Text>

            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] mt-[44px]">
              {/* Emergency */}

              {contact_items?.map((card, index) => (
                <div key={index} className="flex items-start space-x-3 ">
                  <div className="w-[25px] xl:w-[30px] h-auto aspect-square rounded-full">
                    <Image src={card?.icon_value} alt={card?.icon_alt_text_value} width={24} height={24} className="w-full h-full block" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{card?.title}</div>
                    <p className="text-sm text-gray-500">{card?.subtitle}</p>
                    <div className="break-all">{renderHtml(card?.content, "[&>p]:text-gray-500 [&>p]:text-sm")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactFormSection form_title={form_title} />
          </div>
        </div>
      </div>
    </section>
  );
}
