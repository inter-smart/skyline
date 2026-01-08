import Image from "next/image";
import parse from "html-react-parser";
import { renderHtml } from "@/utils/parseHtml";

const subServiceSignals = [
  {
    content: "<p><span>Difficulty Focusing and Staying Organized (Inattention)</span></p>",
    background_color: "#1062d5",
  },
  {
    content: "<p><span>Having a hard time sticking with tasks that demand sustained mental effort, like filling out forms or studying.</span></p>",
    background_color: "#0ea5e9",
  },
  {
    content: "<p><span>Often feeling like you're not listening, even when spoken to directly.</span></p>",
    background_color: "#22c55e",
  },
  {
    content: "<p><span>Frequently interrupting others, or blurting out answers—it's not rudeness, it's impulsivity.</span></p>",
    background_color: "#f59e0b",
  },
  {
    content: "<p><span>Feeling like your mind constantly wanders, leading to careless mistakes even when you try hard.</span></p>",
    background_color: "#ef4444",
  },
  {
    content: "<p><span>The constant feeling of losing important things (keys, phone, paperwork)—it’s frustrating, not deliberate.</span></p>",
    background_color: "#8b5cf6",
  },
  {
    content:
      "<p><span>Restlessness and Impulse Control (Hyperactivity & Impulsivity): The need to constantly move, fidget, or feeling an overwhelming internal restlessness (even as an adult).</span></p>",
    background_color: "#14b8a6",
  },
  {
    content: "<p><span>Difficulty waiting your turn or feeling like you are constantly on the go with no internal brakes.</span></p>",
    background_color: "#ec4899",
  },
];

export default function RecognizingSection({ data }) {
  return (
    <section style={{ backgroundColor: data?.backgroundColor || "#ffffff" }} className="w-full h-auto py-[40px] 2xl:py-[50px] 3xl:py-[60px] block">
      <div className="container">
        <div className="w-full lg:w-[40%]">
          {renderHtml(data?.content, "text_editor [&>*]:mb-[15px] first:[&>*]:mt-0 sm:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[25px] 3xl:gap-x-[40px]">
          {data?.list.map((item) => {
            const bgColor = item?.background_color;
            return (
              <div key={item?.id} className="w-full h-auto mb-[7px] sm:mb-[10px] 2xl:mb-[15px] block">
                <div
                  style={{ "--bg-color": bgColor }}
                  className="
    [--icon-size:20px]
    w-full h-full p-[15px] rounded-[5px]
    flex items-center
    bg-[var(--bg-color)]
    hover:bg-[#f6f1f4]
    transition-all duration-300
  "
                >
                  <div className="w-[var(--icon-size)]  h-auto aspect-square overflow-hidden flex items-center justify-center">
                    <Image src="/images/recognizing_icon.svg" alt="Icon" width={20} height={20} className="w-full h-full object-contain" />
                  </div>
                  {renderHtml(
                    item?.content,
                    "[&>p]:mb-0 [&_p]:text-[13px] sm:[&_p]:text-[14px] 2xl:[&_p]:text-[16px] [&_p]:leading-[1.5] [&_p]:font-medium [&_p]:text-[#212121] w-[calc(100%-var(--icon-size))] pl-[10px] 2xl:pl-[20px] rounded-[5px] "
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
