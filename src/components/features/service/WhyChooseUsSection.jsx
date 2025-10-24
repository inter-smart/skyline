import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import WhyChooseUsSlider from "./WhyChooseSlider";
import { renderHtml } from "@/utils/parseHtml";

export default function WhyChooseUsSection({
    sub_title,
    title,
    description,
    why_choose_list
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
                        {renderHtml(description)}
                    </Text>

                </div>
                <div className="w-full">
                    <WhyChooseUsSlider why_choose_list={why_choose_list} />

                </div>
            </div>
        </section>
    );
}