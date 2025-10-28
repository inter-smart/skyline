"use client";

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";


export default function EnquirySection() {
  const formBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px] px-[10px] px-[15px] 3xl:px-[20px] flex items-center`;
  const formControl = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-regular text-white placeholder:text-white mx-[10px] w-[calc(100%-15px)] 
outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 
           focus-visible:shadow-none"`;

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

            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] mt-[44px]">
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
          <div className="bg-base2 rounded-2xl p-8 shadow-xl text-white">
            <Heading size="heading3" as="h3" className="text-2xl font-bold mb-6 text-center">
              Contact Form
            </Heading>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  className={`${formBox}`}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className={`${formBox}`}
                />
              </div>

              <div className={`${formBox}`}>
                <PhoneInput />
              </div>
              <div>
                <select className={`${formBox}`} defaultValue="">
                  <option className={`${formBox}`} value="" disabled>
                    Service Type*
                  </option>
                  <option className={`${formBox}`} value="care">Home Care</option>
                  <option className={`${formBox}`} value="medical">Medical Support</option>
                  <option className={`${formBox}`} value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className={`${formBox}`}
                ></textarea>
              </div>
              <div className="w-full p-[10px] mt-[15px]">
                <Button
                  className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 
                                hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white"
                  aria-label="consultation_btn"
                >
                  book consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
