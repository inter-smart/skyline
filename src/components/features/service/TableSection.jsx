import parse from "html-react-parser";

export default function TableSection({ data }) {
    return (
        <section className="w-full h-auto py-[40px_20px] sm:py-[50px_30px] lg:py-[70px_35px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] block">
            <div className="container">
                <div className="w-full h-auto block">
                    {data?.table_list?.map((item) => (
                        <div key={item?.id} className="w-full h-auto mb-[40px] sm:mb-[50px] lg:mb-[70px] 2xl:mb-[80px] 3xl:mb-[100px] last:mb-0 block">
                            <div className="text_editor md:max-w-[50%] mb-[20px] sm:mb-[30px] lg:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&>_p]:text-[#1E1E1E] [&_b]:font-medium">
                                {parse(item?.heading_text_editor)}
                            </div>
                            <div className="w-full overflow-x-auto [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                                <table className="w-full min-w-[700px] sm:min-w-full border-collapse">
                                    <thead>
                                        <tr
                                            style={{
                                                backgroundColor: item?.table?.table_header_bg_color,
                                                "--th-color": item?.table?.table_header_text_color,
                                            }}
                                            className="text-left"
                                        >
                                            {item?.table?.table_columns?.map((item, index) => (
                                                <th
                                                    key={index}
                                                    className={`text_editor p-[10px_20px] sm:p-[15px_25px] lg:p-[20px_30px] 2xl:p-[25px_35px] 3xl:p-[30px_40px] [&>_h5]:m-0 first:rounded-[5px_0_0_5px] last:rounded-[0_5px_5px_0] ${index === 0 ? 'w-[30%]' : 'w-[35%]'} !text-[var(--th-color)] [&_*]:!text-[var(--th-color)] [&_*]:!fill-[var(--th-color)]`}
                                                >
                                                    {parse(item)}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody
                                        style={{ backgroundColor: item?.table?.table_body_bg_color }}
                                    >
                                        {item?.table?.table_row_list?.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-[#191919]/30 hover:bg-[#D3D3D3]/20 transition-all duration-300 ease-in-out"
                                            >
                                                {item?.map((items, index) => (
                                                    <td
                                                        key={index}
                                                        className="text_editor p-[15px_20px] sm:p-[20px_25px] lg:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[35px_40px] [&>p:last-of-type]:mb-0 [&>_p]:leading-[1.8] [&>_p]:text-[#212121] [&_b]:font-medium mb-0">
                                                        {parse(items)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}