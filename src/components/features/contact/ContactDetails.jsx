"use client";

import {
  ClockBlueOutline,
  MailBlueOutline,
  MapPinWithBg,
  PhoneBlueOutline,
} from "@/components/helpers/svg";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { renderHtml } from "@/utils/parseHtml";
import { MapPin, Clock, Mail, Car, Phone } from "lucide-react";

// Centralized data array
const contactCards = [
  {
    id: 1,
    icon: <MapPin />,
    title: "Location",
    details: "2nd Floor, 23 Lockyer Street,</br> Plymouth, PL1 2QW",
  },
  {
    id: 2,
    icon: <Clock />,
    title: "Open Hours",
    details: "Mon - Fri: 8 AM to 8 PM, Sat: 9 AM to 4 PM",
  },
  {
    id: 3,
    icon: <Mail />,
    title: "Email",
    details: `plymouth@massiscareagency.co.uk career@massiscareagency.co.uk`,
  },
  {
    id: 4,
    icon: <Phone />,
    title: "Phone",
    details: "01752 418385, 0782 444 39 49",
  },
];

const pre_title = `<p>Mass Care Agency is a registered nursing agency. We are dedicated
to the health profession, care industry all over the UK by supplying quality health care professionals to fulfill your staffing
needs when you require, and we are available 24 hours a day 7 days a week.</p>`;

export default function ContactDetails({ pre_title: dynamicPreTitle, title }) {
  const displayPreTitle = dynamicPreTitle || pre_title;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <Heading sizes="heading1" as="h2" className="leading-none text-center">
          Contact Information
        </Heading>

        <Text
          as="div"
          size="text1"
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-sm md:text-base"
        >
          {renderHtml(displayPreTitle)}
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="group bg-blue-50 rounded-2xl p-6 hover:shadow-lg hover:bg-base2 transition-shadow"
            >
              <div className="w-12 h-12 bg-base2 text-white group-hover:bg-white group-hover:text-base2 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>

              <Heading
                as={"h5"}
                size="heading5"
                className="font-bold text-lg mb-2 group-hover:text-white"
              >
                {card.title}
              </Heading>

              <div className="text-sm text-gray-700 group-hover:text-white">
                <Text
                  as="p"
                  size="text1"
                  className="break-words group-hover:text-white"
                >
                  {renderHtml(card.details)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
