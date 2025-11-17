"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { ChevronUp } from "lucide-react"; // ✅ Use lucide-react icon

const items = [
  {
    id: 1,
    name: "Dr. Jessy Jhon",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
  {
    id: 2,
    name: "Dr. Sara Tailor",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MRCGP, DRCOG",
    image: "/images/consult1.jpg",
    experience: "15+ years",
    availability: "Same Day",
    specialization: ["Adult ADHD Assessment", "Depression & Anxiety", "Medication Management"],
  },
];

export default function OurconsultantSection({ consultants, searchTerm }) {
  const [expanded, setExpanded] = useState({}); // track which item is expanded
  const { openDialog } = useBookingFormContext();
  const [visibleCount, setVisibleCount] = useState(2); // initially show 2 consultants
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = consultants.filter((item) => {
    const nameMatch = item.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const designationMatch = item.designation?.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || designationMatch;
  });

  const handleClick = (id) => {
    openDialog({
      slug: id,
      source: "consultants",
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const visibleConsultants = filtered.slice(0, visibleCount);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <section className="py-[40px] 3xl:py-[60px]">
      <div className="container">
        <div className="flex flex-wrap -m-[4px] md:-m-[8px] 2xl:-m-[20px] 3xl:-m-[30px]">
          {visibleConsultants?.length > 0 ? (
            visibleConsultants?.map((item) => (
              <div key={item?.id} className="w-full 2xs:w-1/2 p-[4px] md:p-[8px] 2xl:p-[20px] 3xl:p-[30px]">
                <div className="w-full h-full p-[8px] xl:p-[15px] 3xl:p-[20px] rounded-[4px] border-[#D6E2ED] border overflow-hidden bg-white flex flex-wrap">
                  {/* Left Section */}
                  <div className="w-full lg:w-[165px] xl:w-[210px] 2xl:w-[250px] 3xl:w-[315px] lg:h-full">
                    <div className="w-full lg:h-full rounded-[6px] overflow-hidden aspect-[375/270] mb-[20px] bg-[#D6E2ED] relative">
                      {/* logo image */}
                      <Image
                        src="/images/bgLogo.png"
                        className="absolute top-[25px] left-[25px] w-full h-full
                                            max-w-[165px]
                                            object-cover"
                        width={165}
                        height={165}
                        alt="logo"
                      />
                      <Image
                        src={item?.profile_image_value}
                        className="w-full lg:h-full object-cover"
                        width={375}
                        height={270}
                        alt={item?.profile_image_alt_text_value}
                      />
                    </div>
                  </div>

                  {/* Right Section */}
                  <div
                    className={`w-full lg:w-[calc(100%-165px)] xl:w-[calc(100%-210px)] 2xl:w-[calc(100%-250px)] 3xl:w-[calc(100%-315px)] lg:pl-[15px] xl:pl-[20px] 3xl:pl-[30px] transition-all duration-300`}
                  >
                    <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#00335B] font-medium mb-[10px] 2xl:mb-[15px]">
                      {item?.name}
                    </div>
                    <div
                      className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-normal mb-[10px] 2xl:mb-[15px] flex items-start leading-4 relative
                                            before:relative before:block before:content-[''] before:top-0 before:left-0 before:w-[5px] before:bg-[#671448] before:p-[3px]
                                            before:h-[14px] before:rounded-[6px] before:mr-[8px]"
                    >
                      {item?.designation}
                    </div>
                    <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#3D3D3D] font-light uppercase">{item.qualification}</div>

                    <div className="w-full mt-[15px]">
                      <ul className="mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                        {item?.experience >= 0 && (
                          <li
                            className="relative text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
                          >
                            <strong className="font-medium">
                              {item.experience > 0
                                ? item?.experience + "+ years"
                                : item.experience}
                            </strong>{" "}
                            NHS & Private experience
                          </li>
                        )}

                        {item?.languages && (
                          <li
                            className="relative text-[8px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-normal pl-[20px] 3xl:pl-[25px]
                                                    before:absolute before:top-[0px] before:3xl:top-[4px] before:left-0 before:w-[11px] before:h-[11px] before:2xl:w-[14px] before:2xl:h-[14px] before:3xl:w-[17px] before:3xl:h-[17px]
                                                    before:bg-[url('/images/expertIcon.svg')] before:bg-no-repeat before:bg-contain before:content-[''] last-of-type:mb-0 mb-[8px]"
                          >
                            Languages :{" "}
                            {item?.languages?.map((lang, index) => (
                              <strong key={index} className="font-medium">
                                {lang?.name}
                                {index < item.languages.length - 1 ? ", " : ""}
                              </strong>
                            ))}
                          </li>
                        )}
                      </ul>

                      <div className="text-[8px] 2xl:text-[12px] 3xl:text-[16px] text-[#671448] font-medium mb-[10px] 3xl:mb-[15px]">
                        Specialization
                      </div>
                      <ul className="flex flex-wrap items-center -m-[4px] mb-[10px] 3xl:mb-[20px]">
                        {(expanded[item.id] ? item?.special_interests : item?.special_interests?.slice(0, 2)).map((spec, idx) => (
                          <li key={idx} className="p-[4px]">
                            <div className="text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#212121] border border-[rgba(33,33,33,0.3)] p-[5px] 3xl:p-[8px] rounded-[40px] flex items-center justify-center w-full h-full">
                              {spec?.name}
                            </div>
                          </li>
                        ))}

                        {item?.special_interests?.length > 2 && (
                          <li className="p-[4px]">
                            <button
                              onClick={() => toggleExpand(item.id)}
                              className="text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-base1 font-medium transition-all duration-100 hover:text-base2"
                            >
                              {expanded[item.id] ? "- Less" : "+ More"}
                            </button>
                          </li>
                        )}
                      </ul>

                      <div className="w-full flex flex-wrap -m-[4px] 2xl:-m-[8px]">
                        <div className="p-[4px] 2xl:p-[8px] flex-grow">
                          <Link
                            href={`/consultants/${item?.slug}`}
                            className="w-full btn-base1 tracking-widest bg-transparent border rounded-[3px] hover hover:text-white transition-none border-[rgba(103,20,72,0.2)] text-base1"
                          >
                            View Details
                          </Link>
                        </div>
                        <div className="p-[4px] 2xl:p-[8px] flex-grow">
                          <div onClick={() => handleClick(`${item?.id}`)} className="w-full btn-base1 hover tracking-widest rounded-[3px]">
                            Book Consultation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] font-medium mb-[10px] 3xl:mb-[15px]">
              No Consultants Found
            </div>
          )}
        </div>
        {/* Load More Button */}
        {visibleCount < filtered?.length && (
          <div className="mt-[40px] 2xl:mt-[50px] 3xl:mt-[70px] text-center">
            <Button
              onClick={handleLoadMore}
              className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] relative font-medium text-base1 tracking-widest min-w-[130px] 3xl:min-w-[152px] flex items-center justify-center
            h-[32px] 2xl:h-[40px] 3xl:h-[50px] m-auto bg-transparent cursor-pointer
            hover:bg-transparent transition-all duration-300"
            >
              Load More...
            </Button>
          </div>
        )}
      </div>

      {/* Scroll on top */}
      {showScrollTop && (
        <button
          className="fixed bottom-[20px] right-[120px] bg-[#671448] w-[40px] h-[40px] rounded-full flex items-center justify-center z-50 text-white"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
}
