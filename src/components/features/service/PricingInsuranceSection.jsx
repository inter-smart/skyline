import Image from "next/image";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { parseDescriptionToListItems, renderHtml } from "@/utils/parseHtml";

const plan_benefit_list = [
  {
    plan_title: "Accepted Insurance Plans",
    plan_list: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "United Healthcare",
      "Humana",
      "Medicare & Medicaid ",
      "Kaiser Permanente",
    ],
  },
  {
    plan_title: "Coverage Benefits",
    plan_list: [
      "Preventive care at no cost",
      "Reduced copays for consultations",
      "Covered diagnostic testing",
      "Prescription drug coverage",
      "Specialist referrals included",
      "Annual wellness visits",
    ],
  },
];

const pricingData = [
  {
    id: 1,
    box_title: "Consultations",
    price_description: "Professional medical consultations",
    items: [
      { price_title: "Initial Consultation", rate: "$$150" },
      { price_title: "Follow-up Consultation", rate: "$100" },
      { price_title: "Specialist Consultation", rate: "$200" },
      { price_title: "Telemedicine Consult", rate: "$75" },
    ],
  },
  {
    id: 2,
    box_title: "Imaging & Tests",
    price_description: "Diagnostic imaging and laboratory tests",
    items: [
      { price_title: "X-Ray", rate: "$120" },
      { price_title: "Ultrasound", rate: "$200" },
      { price_title: "MRI Scan", rate: "$75" },
      { price_title: "CT Scan", rate: "$75" },
    ],
  },
  {
    id: 2,
    box_title: "Annual Plans",
    items: [
      { price_title: "Premium Plan", rate: "$150" },
      { price_title: "Ultimate Plan", rate: "$200" },
      { price_title: "Consultation Plan", rate: "$75" },
    ],
  },
  {
    id: 2,
    box_title: "Annual Plans",
    items: [
      { price_title: "Premium Plan", rate: "$150" },
      { price_title: "Ultimate Plan", rate: "$200" },
      { price_title: "Consultation Plan", rate: "$75" },
    ],
  },
];

export default function PricingInsuranceSection({
  sub_title,
  title,
  description,
  plan_benefit_list,
}) {
  const className =
    "text-[11px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] pl-[20px] 2xl:pl-[25px] relative before:absolute before:top-[5px] before:left-0 before:w-[10px] 2xl:before:w-[12px] before:h-[10px] 2xl:before:h-[12px] before:bg-[url('/images/tick.svg')] before:bg-no-repeat before:bg-contain before:content-[''] w-full block mb-[10px]";

  return (
    <section className="w-full py-[20px] sm:py-[40px] 2xl:py-[60px] 3xl:py-[100px] relative z-0">
      <div className="container">
        <div className="flex flex-wrap -m-[8px]">
          <div className="xl:w-1/2 p-[8px]">
            <div className="max-w-[550px]">
              <Heading
                as="h6"
                size="heading6"
                className="leading-[1] font-normal tracking-[3.06px] text-center xs:text-start uppercase text-base1 mb-[6px] lg:mb-[10px]"
              >
                {sub_title}
              </Heading>
              <Heading
                as="h1"
                size="heading1"
                className="text-center xs:text-start font-unna text-black !mb-[8px] !xl:mb-[10px] !2xl:mb-[10px] !3xl:mb-[10px]"
              >
                {title}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-center xs:text-start font-normal text-[#1E1E1E]"
              >
                {renderHtml(description)}
              </Text>
            </div>
            <div className="flex flex-wrap md:max-w-[800px] xl:max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[700px]">
              {plan_benefit_list?.map((item, parentIndex) => (
                <div
                  key={`plan-${parentIndex}`}
                  className={`w-full md:w-1/2   ${
                    parentIndex % 2 === 0
                      ? "border-l-none  "
                      : "md:border-l md:border-dashed border-[rgba(75,75,75,0.15)]  md:pl-[25px] xl:pl-[40px] 3xl:pl-[60px]"
                  }`}
                >
                  <Heading
                    as="h6"
                    size="heading6"
                    className="leading-[1] font-medium text-start text-base1 mb-[10px] lg:mb-[18px]"
                  >
                    {item?.title}
                  </Heading>
                  <ul>
                    {parseDescriptionToListItems(
                      item?.description,
                      className
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="xl:w-1/2 p-[8px]">
                        <Heading as="h5" size="heading5" className="leading-[1] font-medium text-start text-[#212121] mb-[10px] lg:mb-[18px]">
                            Pricing Details
                        </Heading>
                        <div className="w-full pr-[35px] h-[300px] xl:h-[350px] 3xl:h-[420px] overflow-auto">
                            <div className="flex flex-wrap -m-[5px] xl:-m-[10px] 2xl:-m-[15px]">
                                {pricingData?.map((box, index) => (
                                    <div
                                        key={`price-${box.id}`}
                                        className="w-full md:w-1/2 p-[5px] xl:p-[10px] 2xl:p-[15px]"
                                    >
                                        <div
                                            className={`w-full h-full p-[25px_10px] xl:p-[30px_20px] 3xl:p-[45px_30px]                                            
                                            ${index % 2 === 1 ? "bg-[rgba(103,20,72,0.06)] text-white" : "bg-[rgba(230,241,255,0.67)] "}`}
                                        >
                                            <div className="w-full mb-[15px] 2xl:mb-[35px]">
                                                <Heading
                                                    as="h6"
                                                    size="heading6"
                                                    className={`text-[#1E1E1E] font-medium mb-[15px] ${index % 2 === 1 ? "text-[#212121]" : ""
                                                        }`}
                                                >
                                                    {box.box_title}
                                                </Heading>
                                                <Text
                                                    as="p"
                                                    size="text1"
                                                    className={`!text-[9px] 2xl:!text-[11px] 3xl:!text-[14px] text-[#2C2C2C] font-normal leading-[1] mb-[5px]  
                                                        }`}
                                                >
                                                    {box.price_description}
                                                </Text>
                                            </div>

                                            {box.items.map((item, itemIndex) => (
                                                <div
                                                    key={`item-${box.id}-${itemIndex}`}
                                                    className={`flex flex-wrap justify-between mb-[10px] 3xl:mb-[20px] pb-[8px] 2xl:pb-[10px] 3xl:pb-[20px] border-b border-[#4B4B4B]/15 ${index % 2 === 1 ? "border-[rgba(103,20,72,0.4)]" : ""
                                                        }`}
                                                >
                                                    <Heading
                                                        as="h6"
                                                        size="heading6"
                                                        className={`!text-[10px] lg:!text-[11px] xl:!text-[10px] 2xl:!text-[12px] 3xl:!text-[16px]  text-[#1E1E1E] font-normal ${index % 2 === 1 ? "!text-[#671448]" : ""
                                                            }`}
                                                    >
                                                        {item.price_title}
                                                    </Heading>
                                                    <span className={`text-[11px] xl:text-[13px] 3xl:text-[20px] ${index % 2 === 1 ? "text-[#671448]" : ""}`}>
                                                        {item.rate}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
}
