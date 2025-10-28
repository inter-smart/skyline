import { Heading, SubTitle } from "@/components/layout/Heading";
import Image from "next/image";
import { renderHtml } from "@/utils/parseHtml";
export default function OurStory({ preTitle, title, description, img, alt }) {
  return (
    <section className="py-[20px] 2xl:py-[25px_20px] 3xl:py-[45px_40px]">
      <div className="container">
        <div className="flex flex-wrap w-full justify-center -m-[8px]">
          <div className="sm:w-5/12 xl:w-1/2 p-[8px] max-sm:order-2">
            <div className="w-full m-auto max-w-[700px]">
              <Image
                src={img}
                className="w-full h-full object-contain"
                width="700"
                height="570"
                alt={alt}
              />
            </div>
          </div>
          <div className="w-full sm:w-7/12 xl:w-1/2 p-[8px] flex items-center">
            <div className="sm:max-w-[400px] 2xl:max-w-[470px] 3xl:max-w-[590px] max-sm:text-center">
              <SubTitle size="SubTitle" as="div">
                {preTitle}
              </SubTitle>
              <Heading size="heading1" as="div">
                {title}
              </Heading>
              <div className="line-clamp-4">
                 {renderHtml(description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
