import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
const plan_benefit_list = [
    {
        plan_title: "Accepted Insurance Plans",
        plan_list: [
            "Blue Cross Blue Shield",
            "Blue Cross Blue Shield",
            "Blue Cross Blue Shield",
        ]
    },
    {
        plan_title: "Coverage Benefits",
        plan_list: [
            "Blue Cross Blue Shield",
            "Blue Cross Blue Shield",
            "Blue Cross Blue Shield",
        ]
    },
]
export default function PricingInsuranceSection({
    sub_title,
    title,
    description,
}) {
    return (
        <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">

            <div className="container container-sm relative flex flex-wrap after:content-[''] after:absolute after:clear-both after:block">

                <div className={`w-full md:w-[calc(100%-55%)] xl:w-[calc(100%-52%)]  md:pr-[25px] xl:pr-[35px] 2xl:pr-[140px] 3xl:pr-[155px] pl-0 max-w-full`}>
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
                        className="text-center xs:text-start font-unna text-black !mb-[8px] !xl:mb-[10px] !2xl:mb-[10px] !3xl:mb-[10px]"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="p"
                        size="text1"
                        className="text-center xs:text-start font-normal text-[#1E1E1E]">
                        {description}
                    </Text>
                    <div className="flex flex-wrap">

                        {plan_benefit_list.map((item, index) => (
                            <div key={"plan" + index} className={`w-1/2 py-[15px]
                             ${index % 2 == 0 ? "border-l-none pr-[65px]" : "border-l border-dashed border-[rgba(75,75,75,0.15)] pl-[90px]"} `}>
                                <Heading
                                    as="h6"
                                    size="heading6"
                                    className=" leading-[1] font-medium text-center xs:text-start text-base1 mb-[10px] lg:mb-[18px]"
                                >
                                    {item.plan_title}
                                </Heading>
                                <ul className="">
                                    {item.plan_list.map((planItem, index) => (
                                        <li
                                            key={"planlist" + index}
                                            className="text-[11px] 2xl:text-[14px] 3xl:text-[16px] pl-[20px] 2xl:pl-[25px] relative
                                            before:absolute before:top-[5px] before:left-0 before:w-[10px] 2xl:before:w-[12px] before:h-[10px] 2xl:before:h-[12px]
                                            before:bg-[url('/images/tick.svg')] before:bg-no-repeat before:bg-contain before:content-[''] w-full block mb-[10px]">
                                            {planItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full md:w-[55%] xl:w-[52%]">
                    <Heading
                        as="h5"
                        size="heading5"
                        className=" leading-[1] font-medium text-center xs:text-start text-base1 mb-[10px] lg:mb-[18px]">
                        Pricing Detils
                    </Heading>
                    <div className="w-full pr-[35px] h-[420px] overflow-auto">
                        <div className="flex flex-wrap">
                            {item.price_box.map(( index) => (
                                <div
                                    key={"planlist" + index}
                                    className="w-1/2 p-[15px]">
                                    <div className="p-[45px_30px_65px] bg-[rgba(230,241,255,0.67)]">

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}