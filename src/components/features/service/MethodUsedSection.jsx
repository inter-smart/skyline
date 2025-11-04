import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { renderHtml } from "@/utils/parseHtml";
const why_choose_list = [
    {
        method: {
            path: "/images/methodIcon1.svg",
            alt: "choose-link",
        },
        title: "MRI Scanning",
        description:
            "Advanced magnetic resonance imaging for detailed internal views",
    },
    {
        method: {
            path: "/images/methodIcon2.svg",
            alt: "choose-link",
        },
        title: "CT Scanning",
        description: "High-resolution computed tomography for precise diagnostics"
    },
    {
        method: {
            path: "/images/methodIcon3.svg",
            alt: "choose-link",
        },
        title: "ECG",
        description: "Electrocardiogram for heart rhythm and electrical activity"
    },
    {
        method: {
            path: "/images/methodIcon4.svg",
            alt: "choose-link",
        },
        title: "X Ray",
        description: "Advanced magnetic resonance imaging for detailed internal views"
    },
    {
        method: {
            path: "/images/methodIcon5.svg",
            alt: "choose-link",
        },
        title: "Spirometry",
        description: "Lung function testing and respiratory assessment"
    },
    {
        method: {
            path: "/images/methodIcon6.svg",
            alt: "choose-link",
        },
        title: "Biopsies",
        description: "Tissue sampling and analysis for accurate diagnosis"
    },
    {
        method: {
            path: "/images/methodIcon7.svg",
            alt: "choose-link",
        },
        title: "Ultrasound",
        description: "Real-time imaging using sound waves for various conditions"
    },
    {
        method: {
            path: "/images/methodIcon8.svg",
            alt: "choose-link",
        },
        title: "OCT Scanning",
        description: "Optical coherence tomography for detailed eye examinations"
    },

];
export default function MethodUsedSection({
    sub_title,
    title,
    description,
    why_choose_list
}) {

    return (
        <section className="w-full py-[0px_40px] sm:py-[0px_60px] xl:py-[0px_80px] 3xl:py-[0px_100px] relative z-0">
            <div className="container container-sm">
                <div className={`w-full [&_p,&_li]:3xl:text-[18px] [&_p,&_li]:2xl:text-[16px] [&_p,&_li]:xl:text-[14px] [&_p,&_li]:text-[12px] [&_li]:relative [&_li]:pl-[25px] [&_li]:inline-block
                                [&_li]:before:absolute [&_li]:before:top-[4px] [&_li]:before:left-0 [&_li]:before:w-[15px] [&_li]:before:h-[17px]
                                [&_li]:before:bg-[url('/images/expertIcon.svg')] [&_li]:before:bg-no-repeat [&_li]:before:bg-contain [&_li]:before:content-[''] pt-[20px]
                                 xl:pt-[30px] 2xl:pt-[50px] 3xl:pt-[70px] pl-0 max-w-full`}>
                    <Heading
                        as="h6"
                        size="heading6"
                        className=" !leading-7 font-normal tracking-[3.06px] text-center xs:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
                    >
                        {sub_title}
                    </Heading>
                    <Heading
                        as="h1"
                        size="heading1"
                        className="text-center xs:text-start font-unna text-black !mb-[8px] !sm:mb-[10px] !xl:mb-[15px] !3xl:mb-[20px]"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="div"
                        size="text1"
                        className="text-center xs:text-start font-normal  text-[#1E1E1E] mb-[10px] lg:max-w-[50%] xl:max-w-[35%]"
                    >
                        {renderHtml(description)}
                    </Text>

                </div>
                <div className="w-full flex flex-wrap">
                    {why_choose_list?.map((item, index) => (
                        
                        <div key={index} className="w-full 3xs:w-1/2 md:w-1/3 xl:w-1/4 h-full group  bg-white relative transition-transform duration-300 hover:scale-98">
                            <div className="flex flex-wrap p-[5px] transition items-center pb-[15px]  max-w-[380px] duration-300">
                                <div className="w-[35px] xl:w-[40px] 2xl:w-[50px] h-[35px] xl:h-[40px] 2xl:h-[50px] flex items-center justify-center max-xs:mx-auto xs:mr-auto  ">
                                    <Image
                                        src={item?.image_value}
                                        alt={item?.image_alt_text_value}
                                        width={50}
                                        height={50}
                                        className="w-[70%] h-auto object-contain block"
                                    />
                                </div>
                                <div className="text-start w-full xs:w-[calc(100%-35px)] xl:w-[calc(100%-40px)] 2xl:w-[calc(100%-50px)] pl-[10px] xl:pl-[15px]">
                                    <Heading
                                        as="h6"
                                        size="heading6"
                                        className="text-center xs:text-start font-medium text-[#212121] !leading-7"
                                    >
                                        {item?.title}
                                    </Heading>
                                    <Text
                                        as="div"
                                        size="text2"
                                        className="text-center xs:text-start text-[#212121] mt-[5px]"
                                    >
                                        {renderHtml(item?.description)}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}