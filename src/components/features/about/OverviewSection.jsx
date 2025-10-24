import { Heading, SubTitle } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Image from "next/image";

export default function OverviewSection({ about_cms }) {
  return (
    <section className="py-[30px_60px]">
      <div className="container">
        <div className="flex flex-wrap -m-[8px]">
          <div className="lg:w-5/12 xl:w-1/2 flex items-center p-[8px]">
            <div className="w-full max-w-[620px]">
              <SubTitle size="SubTitle" as="div">
                {about_cms?.section2_pre_title}
              </SubTitle>
              <Heading size="heading1" as="div">
                {about_cms?.section2_title}
              </Heading>
              <p className="line-clamp-4">
                {parse(about_cms?.section2_description)}
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 xl:w-1/2 p-[8px]">
            <div className="flex flex-wrap -m-[8px] xl:-m-[10px] 2xl:-m[15px] 3xl:-m-[20px]">
              <div className="w-full xs:w-1/2 p-[8px] xl:p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                <div className="bg-base2 p-[15px_20px] xl:p-[20px_25px] 2xl:p-[22px_35px] 3xl:p-[20px_30px] rounded-[4px] overflow-hidden w-full h-full">
                  <div className="w-[35px] xl:w-[40px] 2xl:w-[50px] 3xl:w-[65px] h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[65px] rounded-full mb-[15px] flex items-center justify-center ">
                    <Image
                      src={about_cms?.section3_icon_value}
                      className="w-full h-full object-cover"
                      width="65"
                      height="65"
                      alt={about_cms?.section3_icon_alt_text_value}
                    />
                  </div>

                  <div className="text-[13px] 2xl:text-[14px] 3xl:text-[18px] text-white font-medium uppercase tracking-widest mb-[20px]">
                    {about_cms?.section3_title}
                  </div>
                  <ul>
                    <li
                      className="relative text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white font-normal leading-[22px] 2xl:leading-[24px] 3xl:leading-[26px] pl-[25px] md:pl-[35px] mb-[12px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[23px] before:h-[15px] before:2xl:h-[23px] before:flex before:align-items-center
                                                    before:bg-[url('/images/whiteLog.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                    >
                      {parse(about_cms?.section3_description)}
                    </li>
                    {/* <li
                                            className="relative text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white font-normal leading-[22px] 2xl:leading-[24px] 3xl:leading-[26px] pl-[25px] md:pl-[35px] mb-[12px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[23px] before:h-[15px] before:2xl:h-[23px] before:flex before:align-items-center
                                                    before:bg-[url('/images/whiteLog.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                                        >
                                            To ensure accessible, affordable, and quality treatment for all.
                                        </li>
                                        <li
                                            className="relative text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white font-normal leading-[22px] 2xl:leading-[24px] 3xl:leading-[26px] pl-[25px] md:pl-[35px] mb-[12px]
                                                    before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[23px] before:h-[15px] before:2xl:h-[23px] before:flex before:align-items-center
                                                    before:bg-[url('/images/whiteLog.svg')] before:bg-no-repeat before:bg-contain before:content-['']"
                                        >
                                            To combine advanced technology with skilled expertise for better outcomes.
                                        </li> */}
                  </ul>
                </div>
              </div>
              <div className="w-full xs:w-1/2  p-[8px] xl:p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                <div className="w-full h-full rounded-[6px] overflow-hidden aspect-[285/270] xs:aspect-[380/455]">
                  <Image
                    src={about_cms?.section3_image_value}
                    width="380"
                    height="455"
                    className="w-full h-full object-cover object-[top_center]"
                    alt={about_cms?.section3_image_value_alt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
