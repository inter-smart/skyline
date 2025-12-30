import parse from "html-react-parser";

export default function RecognizingSection({ data }) {
    return (
        <section className="w-full h-auto py-[60px] bg-[#F6F6F6] block">
            <div className="container">
                <div className="w-[40%]">
                    <div className="text_editor [&>*]:mb-[15px] first:[&>*]:mt-0 sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                        {parse(data?.text_editor)}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {data?.recongnize_list?.map((item) => (
                        <div key={item?.id} className="">
                            <div className="[--icon-size:20px] w-full h-auto flex">
                                <div className="w-[var(--icon-size)] h-auto aspect-square overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/recognizing_icon.svg"
                                        alt="Icon"
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text_editor w-[calc(100%-var(--icon-size)] pl-[20px] [&>*]:mb-[15px] first:[&>*]:mt-0 sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
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
