import Image from "next/image";

const managing_section_data = {
    section_background_color: "#ffffff",
    media: {
        path: "/images/managing_ahd.jpg",
        alt: "Main Image",
    },
    text_editor: `
    <h1>Understanding and <br> Managing ADHD</h1>
    <h6>Stop Struggling with Focus</h6>
    <p>Is disorganization or restlessness holding you or your child back?</p>
    <h6>That feeling of constant confusion and struggle ends here.</h6>
    <p>At Skyline Hospitals, our expert team provides compassionate validation, clinical clarity, and a trusted partnership to build a focused, confident future for you or your child.</p>
    `,
    badge_text: {
        text_normal: "YOU'RE NOT ALONE. YOU",
        text_bold: "DESERVE CLARITY.",
        gradient_color: {
            from: "#D1EBFF",
            to: "#ffffff",
        },
    },
};

export default function ManagingADHD({ data = managing_section_data }) {
    return (
        <section
            style={{ backgroundColor: data?.section_background_color || "#ffffff" }}
            className="w-full h-auto sm:py-[50px] xl:py-[70px_50px] 2xl:py-[90px_60px] 3xl:py-[115px_80px] block">
            <div className="container">
                <div className="w-full h-auto flex flex-wrap">
                    <div className="[--width:100%] lg:[--width:180px] xl:[--width:480px] 2xl:[--width:575px] 3xl:[--width:720px] w-[85%] h-full flex flex-wrap">
                        <div className="w-[var(--width)] h-full aspect-[720/550] rounded-[4px] 2xl:rounded-[5px] overflow-hidden block sticky top-[120px] z-1">
                            <Image
                                src={data?.media?.path}
                                alt={data?.media?.alt}
                                width={720}
                                height={550}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-[calc(100%-var(--width))] lg:px-[30px] 2xl:px-[40px] 3xl:px-[50px]">
                            <div className="text_editor h-full flex flex-col justify-center"
                                dangerouslySetInnerHTML={{ __html: data?.text_editor }}
                            />
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <div
                            style={{
                                background: `linear-gradient(to bottom, ${data?.badge_text?.gradient_color?.from || "#D1EBFF"}, ${data?.badge_text?.gradient_color?.to || "#ffffff"})`,
                            }}
                            className="text-[13px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.5] font-normal text-[#005CA4] lg:w-[150px] 2xl:w-[180px] 3xl:w-[210px] h-auto aspect-[210/550] sm:p-[50px_20px_20px_20px] xl:p-[50px_20px_20px_20px] 2xl:p-[60px_30px_30px_30px] 3xl:p-[80px_35px_35px_35px] ml-auto rounded-[100px_100px_0_0] overflow-hidden">
                            <div>{data?.badge_text?.text_normal}<span className="font-semibold block">{data?.badge_text?.text_bold}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
