import Link from "next/link";
import Image from "next/image";
import { Heading, SubTitle } from "@/components/layout/Heading";
import parse from "html-react-parser";

export default function ContactusSection({
    about_cms
}) {
    return (
        <section className="w-full relative py-[45px]">
            <div className="container">
                <div className="flex flex-wrap relative w-full h-full bg-gradient-to-r from-[rgba(230,241,255,1)] to-[rgba(230,241,255,0.63)]
                 p-[15px_20px] xl:p-[20px_25px] 2xl:p-[25px_30px] 3xl:p-[30px_40px] rounded-[3px] min-h-[220px] xl:min-h-[275px] 2xl:min-h-[320px] 3xl:min-h-[410px]">
                    <div className=" w-full sm:w-1/2 flex items-center">
                        <div className="w-auto max-w-[620px]">
                            <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                                {about_cms?.section9_pre_title}
                            </SubTitle>
                            <Heading size="heading1" as="div" className="leading-none">
                                {about_cms?.section9_title}
                            </Heading>
                            {parse(about_cms?.section9_description)}
                            <div className="bg-[#671448] btn-base1 hover min-w-[110px] 2xl:min-w-[130px] 3xl:min-[165px]" aria-label="apply_btn">CONTACT US</div>
                        </div>
                    </div>
                    <div className="max-w-[400px] xl:max-w-[460px] 2xl:max-w-[550px] 3xl:max-w-[700px] w-full absolute bottom-0 right-[5%] flex items-center justify-end max-sm:opacity-15">
                        {/* contact logo */}
                        <Image src="/images/contactUs.png" width="300" height="200" className="absolute top-0 left-[10%]  w-full h-full max-w-[185px] xl:max-w-[230px] 2xl:max-w-[275px] 
                           3xl:max-w-[350px] opacity-100 -z-1" alt="contact us " /> 

                        <Image src={about_cms?.section9_image_value} width="300" height="200" className="w-full h-full max-w-[220px] xs:max-w-[285px] xl:max-w-[370px] 2xl:max-w-[400px] 3xl:max-w-[490px]" alt={about_cms?.section9_image_alt_text_value} />
                    </div>
                </div>
            </div>
        </section>

    )
} 
