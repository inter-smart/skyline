import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
export default function OurTreatmentsection({
    path,
    alt,
    sub_title,
    title,
    description,
    className
}) {
    return (
        <section className="w-full py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">

            <div className="container container-sm">
                <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]  md:pr-[30px] xl:pr-[50px] 2xl:pr-[60px] 3xl:pr-[75px] mb-[30px]">
                    <Heading
                        as="h6"
                        size="heading6"
                        className=" leading-[1] font-normal tracking-[3.06px] text-center md:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
                    >
                        {sub_title}
                    </Heading>
                    <Heading
                        as="h1"
                        size="heading1"
                        className="text-center font-unna md:text-start text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="p"
                        size="text1"
                        className="text-center md:text-start font-normal  text-[#1E1E1E]">
                        {description}
                    </Text>
                </div>
                <div className="w-full md:w-[40%] xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%]">
                    <div className="w-full p-[60px] overflow-hidden bg-[#00335B]">
                       
                    </div>
                </div>


            </div>
        </section>
    );
}