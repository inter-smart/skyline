import Image from "next/image";
import { Heading } from "../layout/Heading";
import { Text } from "../layout/Text";
import { renderHtml } from "@/utils/parseHtml";
export default function InnerHero({
    type,
    path_mob,
    path,
    alt,
    sub_title,
    title,
    title_highlight,
    description,
    children,
    className
}) {
    return (
        <section className="w-full h-screen max-h-[280px] sm:max-h-[360px] lg:max-h-[390px] 2xl:max-h-[550px] 3xl:max-h-[565px] flex items-start sm:items-center py-[80px] sm:py-[60px] xl:py-[80px] 3xl:py-[100px] relative z-0">
            <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-b sm:bg-gradient-to-l from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] pointer-events-none" />
            {type === "video" ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover absolute -z-2 inset-0"
                >
                    <source src={path} type="video/mp4" />
                </video>
            ) : (
                <picture className="absolute -z-2 inset-0">
                    <source media="(max-width: 640px)" srcSet={path_mob} />
                    <Image
                        src={path}
                        alt={alt}
                        fill
                        sizes="1920px"
                        className="-z-2 object-cover"
                    />
                </picture>
            )}
            <div className="container container-sm">
                <div className={`w-full max-w-[90%] sm:max-w-[320px] lg:max-w-[490px] 2xl:max-w-[620px] 3xl:max-w-[680px] mx-auto sm:m-0 ${className}`}>
                    <Heading
                        as="h6"
                        noMotion
                        size="heading6"
                        className=" leading-[1] font-normal tracking-[3.06px] text-center sm:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
                    >
                        {sub_title}
                    </Heading>
                    <Heading
                        as="h1"
                        size="heading1"
                        noMotion
                        className="text-[35px] sm:text-[38px] md:text-40px] lg:text-[45px] xl:text-[50px] 2xl:text-[54px] 3xl:text-[67px] text-center font-unna sm:text-start text-black mb-[15px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                        {title_highlight ? handleHighlight(title_highlight, title) : title}
                    </Heading>
                    <Text
                        noMotion
                        as="div"
                        size="text1"
                        className="text-center sm:text-start text-[#1E1E1E] font-normal"
                    >
                        {renderHtml(description) || "sample description"}
                    </Text>
                    {children}
                </div>
            </div>
        </section>
    );
}