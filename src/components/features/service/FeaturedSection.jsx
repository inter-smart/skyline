import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
export default function FeaturedSection({
    sub_title,
    title,
    description,
    children,
    className
}) {
    return (
        <section className="w-full h-screen py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
            
            <div className="container container-sm flex flex-wrap ">
                <div className={`w-full max-w-[90%] sm:max-w-[320px] lg:max-w-[490px] 2xl:max-w-[620px] 3xl:max-w-[680px] mx-auto sm:m-0 ${className}`}>
                    <Heading
                        as="h6"
                        size="heading6"
                        className=" leading-[1] font-normal tracking-[3.06px] text-center sm:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
                    >
                        {sub_title}
                    </Heading>
                    <Heading
                        as="h1"
                        size="heading1"
                        className="text-center font-unna sm:text-start text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                       {title}
                    </Heading>
                    <Text
                        as="p"
                        size="text1"
                        className="text-center sm:text-start text-[#1E1E1E] font-normal"
                    >
                        {description}
                    </Text>
                    {children}
                </div>
            </div>
        </section>
    );
}