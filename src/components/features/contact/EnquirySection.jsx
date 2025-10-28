"use client";

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
import ContactFormSection from "./ContactForm";


export default function EnquirySection() {

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:grid-cols-3">
          {/* Left Side - Info */}
          <div className="xl:col-span-2">
            <Heading size="heading1" as="div" className="leading-none">
              Get In Touch With Us
            </Heading>
                <Text
                        noMotion
                        as="div"
                        size="text1"
                        className="text-center sm:text-start text-[#1E1E1E] font-normal"
                    >
              {/* {renderHtml(description)} */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] mt-[44px]">
              {/* Emergency */}
              <div className="flex items-start space-x-3 ">
                <span className="text-blue-600 text-lg">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">
                    Emergency Helpline
                  </p>
                  <p className="text-sm text-gray-500">
                    Available 24/7 for urgent care
                  </p>
                  <p className="font-medium text-gray-800">+44 20 7946 0958</p>
                </div>
              </div>

              {/* Support Email */}
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">Support Email</p>
                  <p className="text-sm text-gray-500">
                    Response within 24 hours
                  </p>
                  <p className="font-medium text-gray-800">
                    support@maxxcare.co.uk
                  </p>
                </div>
              </div>

              {/* General Enquiries */}
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg">💬</span>
                <div>
                  <p className="font-semibold text-gray-800">
                    General Enquiries
                  </p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri 8:00 AM - 6:00 PM
                  </p>
                  <p className="font-medium text-gray-800">+44 20 7946 0955</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
    <ContactFormSection />
        </div>
      </div>
    </section>
  );
}
