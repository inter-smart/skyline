import Image from "next/image";
import parse from "html-react-parser";

export default function ManagingADHD({ data }) {
    return (
        <section
            style={{ backgroundColor: data?.section_background_color || "#ffffff" }}
            className="w-full h-auto py-[40px] sm:py-[50px] xl:py-[70px_50px] 2xl:py-[90px_60px] 3xl:py-[115px_80px] block">
            <div className="container">
                <div className="w-full h-auto flex flex-wrap">
                    <div className="[--width:100%] sm:[--width:220px] lg:[--width:370px] xl:[--width:480px] 2xl:[--width:575px] 3xl:[--width:720px] sm:w-[85%] h-full flex flex-wrap">
                        <div className="group w-[var(--width)] h-full aspect-[720/550] rounded-[4px] 2xl:rounded-[5px] overflow-hidden block sm:sticky sm:top-[120px] sm:z-1">
                            <Image
                                src={data?.media?.path}
                                alt={data?.media?.alt}
                                width={720}
                                height={550}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                            />
                        </div>
                        <div className="w-[var(--width)] sm:w-[calc(100%-var(--width))] sm:px-[20px] lg:px-[30px] 2xl:px-[40px] 3xl:px-[50px]">
                            <div className="text_editor h-full flex flex-col justify-center">
                                {parse(data?.text_editor)}
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[15%]">
                        <div
                            style={{
                                background: `linear-gradient(to bottom, ${data?.badge_text?.gradient_color?.from || "#D1EBFF"}, ${data?.badge_text?.gradient_color?.to || "#ffffff"})`,
                            }}
                            className="text-[13px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.5] font-normal text-[#005CA4] w-[180px] sm:w-[120px] lg:w-[150px] 2xl:w-[180px] 3xl:w-[210px] h-[280px] sm:h-auto aspect-[210/550] p-[50px_20px_20px_20px] 2xl:p-[60px_30px_30px_30px] 3xl:p-[80px_35px_35px_35px] sm:ml-auto rounded-[100px_100px_0_0] overflow-hidden">
                            <div>{data?.badge_text?.text_normal}<span className="font-semibold block">{data?.badge_text?.text_bold}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
