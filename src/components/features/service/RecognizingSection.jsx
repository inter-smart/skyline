import Image from "next/image";
import parse from "html-react-parser";

export default function RecognizingSection({ data }) {
    return (
        <section
            style={{ backgroundColor: data?.section_background_color || "#ffffff" }}
            className="w-full h-auto py-[40px] 2xl:py-[50px] 3xl:py-[60px] block">
            <div className="container">
                <div className="w-full lg:w-[40%]">
                    <div className="text_editor [&>*]:mb-[15px] first:[&>*]:mt-0 sm:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
                        {parse(data?.text_editor)}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[25px] 3xl:gap-x-[40px]">
                    {data?.recongnize_list?.map((item) => (
                        <div
                            key={item?.id}
                            className="w-full h-auto mb-[7px] sm:mb-[10px] 2xl:mb-[15px] block">
                            <div className="[--icon-size:20px] w-full h-full p-[15px] bg-white rounded-[5px] flex items-center hover:bg-[#f6f1f4] transition-all duration-300">
                                <div className="w-[var(--icon-size)] h-auto aspect-square overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/recognizing_icon.svg"
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[1.5] font-medium text-[#212121] w-[calc(100%-var(--icon-size))] pl-[10px] 2xl:pl-[20px] rounded-[5px] first:[&>*]:mt-0 mb-0">
                                    {item?.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
