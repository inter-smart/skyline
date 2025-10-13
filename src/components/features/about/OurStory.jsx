import { Heading, SubTitle } from "@/components/layout/Heading";
import Image from "next/image";

export default function OurStory() {
    return (
        <section className="py-[40px_20px] 2xl:py-[45px_20px] 3xl:py-[85px_40px]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className='w-full sm:w-1/2'>
                        <div className='w-full m-auto max-w-[700px]'>
                            <Image src="/images/ourStory.png" className="w-full h-full object-contain" width="700" height="570" alt="ourStory" />
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 flex items-center'>
                        <div className="sm:max-w-[400px] 2xl:max-w-[470px] 3xl:max-w-[590px] max-sm:text-center">
                            <SubTitle
                                size="SubTitle"
                                as="div"
                               
                            >
                                Our Story
                            </SubTitle>
                            <Heading
                                size="heading1"
                                as="div"  >
                                Dedicated to <br />
                                Every Life We Touch
                            </Heading>
                            <p className="line-clamp-4">
                                Our journey has been marked by continuous innovation, from being among the first to adopt
                                robotic surgery techniques to pioneering telemedicine services in our community. Every milestone reflects
                                our commitment to advancing medical care while maintaining the personal touch that defines us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
