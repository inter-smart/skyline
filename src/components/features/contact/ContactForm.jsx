import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
const enquiriesData = [
  {
    icon: "phone",
    title: "Phone",
    desc: "Mon-Fri 8:00 AM - 6:00 PM",
    details: "0782 444 39 49",
  },
  {
    icon: "email",
    title: "Email",
    desc: "Mon-Fri 8:00 AM - 6:00 PM",
    details: "support@maxxcare.co.uk",
  },
  {
    icon: "location",
    title: "Location",
    desc: "Mon-Fri 8:00 AM - 6:00 PM",
    details: "123 Main St",
  },
];


export default function ContactFormSection() {
  const formBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px] px-[10px] px-[15px] 3xl:px-[20px] text-[10px] 2xl:text-[12px] 3xl:text-[16px] flex items-center`;
const formControl = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-regular text-white placeholder:text-white mx-[10px] w-[calc(100%-15px)] 
outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 
           focus-visible:shadow-none bg-transparent border-none`;


  return (
    <div className="bg-base2 rounded-2xl p-8 shadow-xl text-white">
      <Heading
        size="heading3"
        as="h3"
        className="text-2xl font-bold mb-6 text-center"
      >
        Contact Form
      </Heading>
      <form className="space-y-5">
        <div>
          <input type="text" placeholder="Name*" className={`${formBox}`} />
        </div>

        <div>
          <input type="email" placeholder="Email*" className={`${formBox}`} />
        </div>

        <div className={`${formBox}`}>
          <PhoneInput />
        </div>
        <div>
          <select className={`${formBox}`} defaultValue="">
            <option className="text-black" value="" disabled>
              Service Type*
            </option>
            <option className="text-black" value="care">
              Home Care
            </option>
            <option className="text-black" value="medical">
              Medical Support
            </option>
            <option className="text-black" value="consultation">
              Consultation
            </option>
          </select>
        </div>

        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className={`${formBox}`}
          ></textarea>
        </div>
        <div className="w-full p-[10px] mt-[15px]">
          <Button
            className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 
                                hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white"
            aria-label="consultation_btn"
          >
            book consultation
          </Button>
        </div>
      </form>
    </div>
  );
}
