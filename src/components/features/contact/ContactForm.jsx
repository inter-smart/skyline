import { Phone, Mail, MapPin } from "lucide-react";

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

const icons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
};

export default function ContactFormSection() {
  return (
    <section className="py-[50px_70px] bg-[rgba(139,190,255,0.12)]">
      <div className="container">
        <div className="flex flex-wrap -m-[8px]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-[8px] h-500px ">
            <div className="flex flex-wrap">
              {enquiriesData.map((item, index) => {
                const IconComponent = icons[item.icon];
                return (
                  <div key={index} className="w-1/3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#212121] ">
                        <IconComponent className="text-white  transition" size={15} />
                      </div>
                      {item.title}
                    </div>
                    <p className="text-[12px] text-[#2c2a2a] mb-2">{item.desc}</p>
                    <p className="text-[12px] text-[#2c2a2a]">{item.details}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section (Accordion) */}
          <div className="w-full md:w-1/2 p-[8px] h-500px bg-amber-500"></div>
        </div>
      </div>
    </section>
  );
}
