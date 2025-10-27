import Link from "next/link";
import Image from "next/image";
import { parseDescriptionToListItems, renderHtml } from "@/utils/parseHtml";

const className =
  "relative text-[8px] 2xl:text-[10px] 3xl:text-[13px] text-[#212121] font-normal pl-[25px] mb-[8px] before:absolute before:top-[4px] before:left-0 before:w-[15px]  before:2xl:w-[17px] before:h-[15px] before:2xl:h-[17px] before:flex before:align-items-center before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-['']";
export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/service/${service?.slug}`}
      className={`relative w-full  h-full  rounded-[6px] overflow-hidden  flex flex-col items-center justify-end transition-all duration-500 
                        aspect-ratio-[560/650] group min-h-[210px] lg:min-h-[250px] xl:min-h-[320px] 2xl:min-h-[385px] 3xl:min-h-[480px]
                        p-[15px] 2xl:p-[20px_10px] 3xl:p-[30px]
                        after:absolute after:bottom-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-b after:from-[40%] 
                        after:to-[120%] after:from-[rgba(0,0,0,0.1)] after:to-[rgba(0,0,0)] after:content-['']
                       "
                        
                }`}
      aria-label="servicecard"
    >
      {/* Background Image */}
      <Image
        src={service?.image_value}
        alt={service?.image_alt_text_value}
        width={560}
        height={650}
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Title (only visible on inactive slides) */}

      {/* Info Card (visible only for active slide) */}
      <div
        className={`relative bg-[rgba(255,255,255,0.85)] rounded-[6px] p-[20px_15px] xl:p-[25px_20px] 
            2xl:p-[22px_17px] 3xl:p-[25px_20px transition-all z-20 duration-300
            w-full  sm:opacity-0 sm:invisible sm:translate-y-[40px]
            group-hover:h-auto group-hover:opacity-100 group-hover:visible group-hover:translate-y-[20px]`}
      >
        <div className="text-[11px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] font-medium mb-[15px] xl:mb-[20px] capitalize">
          {service?.name}
        </div>
        <ul>{parseDescriptionToListItems(service?.description, className)}</ul>

        <div
          className="text-[8px] xl:text-[10px] 3xl:text-[11px] text-[#671448] font-medium uppercase flex items-center transition-all group duration-200 hover:text-base2 
                hover:tracking-[1px] mt-[15px] 2xl:mt-[18px] 3xl:mt-[25px]"
        >
          View Details
          <div className="w-[10px] 2xl:w-[13px] h-[10px] 2xl:h-[13px] ml-[4px] flex items-center">
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1"
              fill="none"
            >
              <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`text-[10px] xl:ext-[13px] 2xl:text-[15px] 3xl:text-[20px] text-white realtive text-center z-20 max-sm:hidden
                     font-medium transition-all group-hover:opacity-0  
                     `}
      >
        {service?.name}
      </div>
    </Link>
  );
}
