import parse from "html-react-parser";

export default function UnderstandingADHD({ data }) {
    return (
        <section className="w-full h-auto py-[60px_70px] block">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-[50%]">
                        <div className="text_editor first:[&>*]:mt-0 [&>p:first-of-type]:mb-0 mb-0">
                            {parse(data?.text_editor)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
