import { Heading, SubTitle } from "@/components/layout/Heading";
import Image from "next/image";
import { renderHtml } from "@/utils/parseHtml";
export default function OurStory({ preTitle, title, description, img, alt }) {
  return (
    <section className="py-[60px] 2xl:py-[75px_20px] 3xl:py-[95px_40px]">
      <div className="container">
        {/* <div className="flex flex-wrap w-full justify-center -m-[8px]"> */}
        <div className="md:w-5/12 p-[8px] max-sm:order-2 md:float-left">
          <div className="w-full m-auto max-w-[600px]">
            <Image src={img} className="w-full h-full object-contain" width="700" height="570" alt={alt} />
          </div>
        </div>
        <div className="w-full max-w-[95%] max-sm:order-1">
          <div className="w-full">
            <SubTitle size="SubTitle" as="div">
              {preTitle}
            </SubTitle>
            <Heading size="heading1" as="div">
              {title}
            </Heading>
            {/* <div className="line-clamp-4"> */}
            <div>{renderHtml(description)}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
