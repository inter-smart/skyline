import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { renderHtml } from "@/utils/parseHtml";
const procedure_list = [
    { procedureList: "Radiologists for diagnostic accuracy" },
    { procedureList: "Surgeons for tumour removal when needed" },
    { procedureList: "Pathologists for definitive diagnosis" },
    { procedureList: "Clinical nurse specialists for treatment support" },
    { procedureList: "Psychologists, nutritionists and palliative care professionals" },
]
export default function ProcedureSection({
    path,
    alt,
    sub_title,
    title,
    description,
    procedure_list,
    className
}) {
    return (
        <section className="w-full py-[30px] sm:py-[40px] xl:py-[50px] 3xl:py-[80px] relative z-0">

            <div className="container container-sm relative flex flex-wrap after:content-[''] after:absolute after:clear-both after:block">

                <div className={`w-full md:w-[calc(100%-55%)] xl:w-[calc(100%-52%)]  md:pr-[25px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[45px] [&_li]:relative [&_p,&_li]:text-[11px] [&_p,&_li]:2xl:text-[14px] [&_p,&_li]:3xl:text-[16px] [&_li]:p-[5px] 2xl:[&_li]:p-[10px] [&_li]:pl-[30px] 2xl:[&_li]:pl-[45px]
                                [&_li]:before:absolute [&_li]:before:top-[7px] 2xl:[&_li]:before:top-[14px] [&_li]:before:left-[10px] 2xl:[&_li]:before:left-[15px] [&_li]:before:w-[12px] 2xl:[&_li]:before:w-[15px] [&_li]:before:h-[12px] 2xl:[&_li]:before:h-[15px]
                                [&_li]:before:bg-[url('/images/multiIcon.svg')] [&_li]:before:bg-no-repeat [&_li]:before:bg-contain [&_li]:before:content-[''] pl-0 max-w-full`}>
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
                        as="div"
                        size="text1"
                        className="text-center xs:text-start font-normal text-[#1E1E1E]">
                        {renderHtml(description)}
                    </Text>
                    <ul className="">
                        {procedure_list?.map((item, index) => (
                            <li key={index} className="w-full block bg-[linear-gradient(90deg,rgba(197,221,255,0.31)_6.73%,rgba(255,255,255,0.31)_100%)] rounded-[4px] mb-[10px]">
                                {item?.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-[55%] xl:w-[52%]">
                    <div className="w-full h-full overflow-hidden rounded-[4px]">
                        <Image
                            src={path}
                            alt={alt? alt: "Image"}
                            width={805}
                            height={495}
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-400"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}