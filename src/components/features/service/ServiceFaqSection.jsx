import {
    Accordion,
    AccordionContent,    
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import parse from "html-react-parser";

export default function ServiceFaqSection({ data }) {
    return (
        <section
            style={{ backgroundColor: data?.section_background_color || "#ffffff" }}
            className="w-full h-auto py-[10px_40px] lg:py-[25px_60px] 2xl:py-[35px_80px] 3xl:py-[40px_100px] block">
            <div className="container">
                <div className="text_editor md:max-w-[40%] mb-[15px] sm:mb-[20px] 2xl:mb-[30px] [&>_p]:text-[#111111] [&_b]:font-medium">
                    {parse(data?.heading_text_editor)}
                </div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={`item-${data?.faq_list?.[0]?.id}`}
                        className="columns-1 lg:columns-2 lg:gap-x-[50px] 3xl:gap-x-[80px]"
                    >
                        {data?.faq_list?.map((item) => (
                            <AccordionItem
                                value={`item-${item.id}`}
                                key={item.id}
                                className="w-full h-fit py-[5px] sm:py-[7px] lg:py-[10px] 2xl:py-[15px] 3xl:py-[20px] mb-[5px] sm:mb-[10px] 2xl:mb-[15px] rounded-[0px] border-b border-[#383838]/10 bg-transparent overflow-hidden break-inside-avoid block relative z-0">
                                <AccordionTrigger className="[&>svg]:text-[#132C26] 2xl:[&>svg]:w-[20px] 2xl:[&>svg]:h-[20px] [&_svg]:rotate-270 [&[data-state=open]>svg]:rotate-0">
                                    <div className="text_editor max-w-[90%] [&>*]:text-[#212121] [&>*]:my-0 mb-0"> {parse(item?.faq_heading_text_editor)}</div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="text_editor [&_p]:text-[13px] 2xl:[&_p]:text-[14px] 2xl:[&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-[#212121] py-[10px_0] sm:py-[20px_0] [&_p]:last:my-0 mb-0 max-w-[90%] [&>*]:mb-[20px] 2xl:[&>*]:mb-[30px]"> {parse(item?.faq_content_text_editor)}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
