import Link from "next/link";
import Image from "next/image";
import { Heading, SubTitle } from "@/components/layout/Heading";
export default function ContactusSection() {
    return (
        <section className="w-full relative py-[45px]">
            <div className="container">
               <div class="w-full h-full bg-gradient-to-r from-[rgba(230,241,255,1)] to-[rgba(230,241,255,0.63)] p-[30px_40px] rounded-[3px]"> 
                    <div className="w-1/2">
                        <SubTitle size="SubTitle" as="div" className="!mb-[10px] 3xl:!mb-[15px] leading-none">
                            CONTACT US
                        </SubTitle>
                        <Heading size="heading1" as="div" className="leading-none">
                            Get in Touch
                        </Heading>
                        <p>We’re here to support you at every step of your healthcare journey.Reach out to us and we’ll ensure you get the right help, at the right time.</p>
                         <Link href="" className="bg-[#671448] btn-base1 hover min-w-[110px] 2xl:min-w-[130px] 3xl:min-[165px]" aria-label="apply_btn">CONTACT US</Link>
                    </div>
                    <div className="w-1/2">
                            <Image src="/images/careerImg.png" width="300" height="200" className="w-full h-full" alt="contact us " />
                    </div>

                </div>
            </div>
        </section>

    )
}
