import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
const why_choose_list = [
    {
        method: {
            path: "/images/methodIcon1.svg",
            alt: "choose-link",
        },
        title: "Expert Care",
        description:
            "Consultant oncologists with NHS and private sector experience",
    },
    {
        method: {
            path: "/images/methodIcon2.svg",
            alt: "choose-link",
        },
        title: "Fast Scans",
        description:
            " Multidisciplinary approach including surgery, radiology, pathology, and nursing",
    },
    {
        method: {
            path: "/images/methodIcon3.svg",
            alt: "choose-link",
        },
        title: "Modern Surgery",
        description:
            "On-site imaging, biopsy, and blood test facilities for rapid diagnosis",
    },
    {
        method: {
            path: "/images/methodIcon4.svg",
            alt: "choose-link",
        },
        title: "Recovery Support",
        description:
            "Personalised cancer treatment plans tailored to your specific case",
    },
    {
        method: {
            path: "/images/methodIcon5.svg",
            alt: "choose-link",
        },
        title: "Recovery Support",
        description:
            "Personalised cancer treatment plans tailored to your specific case",
    },
    {
        method: {
            path: "/images/methodIcon6.svg",
            alt: "choose-link",
        },
        title: "Recovery Support",
        description:
            "Personalised cancer treatment plans tailored to your specific case",
    },
    {
        method: {
            path: "/images/methodIcon7.svg",
            alt: "choose-link",
        },
        title: "Recovery Support",
        description:
            "Personalised cancer treatment plans tailored to your specific case",
    },
    {
        method: {
            path: "/images/methodIcon8.svg",
            alt: "choose-link",
        },
        title: "Recovery Support",
        description:
            "Personalised cancer treatment plans tailored to your specific case",
    },

];
export default function MethodUsedSection({
    sub_title,
    title,
    description,

}) {
    return (
        <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
            <div className="container container-sm">
                <div className={`w-full [&_p,&_li]:3xl:text-[18px] [&_p,&_li]:2xl:text-[16px] [&_p,&_li]:xl:text-[14px] [&_p,&_li]:text-[12px] [&_li]:relative [&_li]:pl-[25px] [&_li]:inline-block
                                [&_li]:before:absolute [&_li]:before:top-[4px] [&_li]:before:left-0 [&_li]:before:w-[15px] [&_li]:before:h-[17px]
                                [&_li]:before:bg-[url('/images/expertIcon.svg')] [&_li]:before:bg-no-repeat [&_li]:before:bg-contain [&_li]:before:content-[''] pt-[20px]
                                 xl:pt-[30px] 2xl:pt-[50px] 3xl:pt-[70px] pl-0 max-w-full xs:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] 2xl:max-w-[40%] 3xl:max-w-[35%]`}>
                    <Heading
                        as="h6"
                        size="heading6"
                        className=" leading-[1] font-normal tracking-[3.06px] text-center xs:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
                    >
                        {sub_title}
                    </Heading>
                    <Heading
                        as="h1"
                        size="heading1"
                        className="text-center xs:text-start font-unna text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="p"
                        size="text1"
                        className="text-center xs:text-start font-normal  text-[#1E1E1E]"
                    >
                        {description}
                    </Text>

                </div>
                <div className="w-full flex flex-wrap">
                    {why_choose_list.map((item, index) => (
                        <div className="w-[25%] h-full group px-[15px] lg:px-[20px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px] py-[20px] lg:py-[25px] xl:py-[30px] 2xl:py-[40px] 3xl:py-[45px] flex flex-wrap relative transition-transform duration-300 hover:scale-98">
                            <div className="w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[50px] h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center justify-center  max-xs:mx-auto xs:mr-auto mb-[10px] sm:mb-[20px]">
                                <Image
                                    src={item.method.path}
                                    alt={item.method.alt}
                                    width={50}
                                    height={50}
                                    className="w-[58%] h-auto object-cover block"
                                />
                            </div>
                            <div className="text-start pl-2 w-full  sm:w-[calc(100%-35px)] xl:w-[calc(100%-40px)] 2xl:w-[calc(100%-45px)] 3xl:w-[calc(100%-50px)]">
                                <Heading
                                    as="h5"
                                    size="heading5"
                                    className="text-center xs:text-start text-[#212121] mb-[5px]"
                                >
                                    {item.title}
                                </Heading>
                                <p className="text-center xs:text-start line-clamp-4 text-[#656565] mb-0">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}