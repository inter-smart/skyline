import Image from "next/image";

export default function WhySection() {
    return (
        <section className='py-[40px] xl:py-[65px] 2xl:py-[80px] 3xl:py-[110px]'>
            <div className="container">
                <div className="flex flex-wrap w-full">
                    <div className='w-full lg:w-1/2 p-[10px] max-lg:order-2'>
                        <div className='w-full h-full lg:pr-[20px] xl:pr-[25px] 2xl:pr-[30px] 3xl:pr-[40px] relative'>
                            <div className="bg-[#00335B] rounded-[6px] overflow-hidden p-[15px] xl:p-[25px] 2xl:p-[28px_30px] 3xl:p-[35px_40px] absolute bottom-[15px] lg:bottom-[60px] left-[15px] lg:left-0 lg:max-w-[185px] xl:max-w-[230px] 2xl:max-w-[275px] 3xl:max-w-[330px]">
                                <Image src="/images/bgLogo.png" className="w-full h-full absolute bottom-0 left-0 right-0" width="335" height="335" alt="logo" />
                                <div className="max-w-[45px] xl:max-w-[50px] 2xl:max-w-[75px] 3xl:max-w-[95px] mb-[10px]">
                                    <Image src="/images/whyIcon.png" width="95" height="95" alt="health_icon" className="w-full h-full" />
                                </div>
                                <div className="lg:text-[16px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[30px] text-white font-normal font-unna leading-[20px] xl:leading-[23px] 2xl:leading-[25px] 3xl:leading-[33px] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                    Your Health is Always Our Priority
                                </div>
                                <ul>
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal  relative pl-[20px] mb-[5px] before:absolute before:content-[''] 
                                    before:top-[10px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-white">CQC Outstanding Rating</li>
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal  relative pl-[20px] mb-[5px]  before:absolute before:content-[''] 
                                    before:top-[10px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-white">NHS Partnership</li>
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal  relative pl-[20px] mb-[5px]  before:absolute before:content-[''] 
                                    before:top-[10px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-white">Joint Commission Accredited</li>
                                </ul>

                            </div>

                            <div className='w-full h-full lg:max-w-[350px] xl:max-w-[440px] 2xl:max-w-[525px] 3xl:max-w-[660px] ml-auto overflow-hidden rounded-[6px] aspect-[660/810]'>
                                <Image src="/images/whySec.jpg" width="660" height="810" className="w-full h-full" alt="whychoose_image" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-[10px] lg:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px]'>
                        <div className="lg:pl-[10px] 3xl:max-w-[630px]">
                            <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase tracking-wider leading-0 mb-[20px] xl:mb-[30px]">WHY Skyline</h1>
                            <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-[#212121] font-unna font-normal leading-[34px]
                         xl:leading-[40px] 2xl:leading-[47px] 3xl:leading-[60px] mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">Why Choose
                                Skyline Hospitals   </div>

                            <p className="line-clamp-4">Your health and well-being are our top priorities. Experience world-class healthcare with a personal
                                touch in the heart of Coventry. Your health and well-being
                                are our top priorities. Experience world-class healthcare with a personal touch in the heart of Coventry.</p>

                            <ul>
                                <li className="flex items-start mb-[15px] xl:mb-[20px] 3xl:mb-[30px] last-of-type:mb-0">
                                    <div className="w-[12px] xl:w-[15px] 2xl:w-[18px] 3xl:w-[25px]">
                                        <div className="w-full h-full flex items-center">
                                            <Image src="/images/expertIcon.svg" width="22" height="22" alt="expertIcon" />
                                        </div>
                                    </div>
                                    <div className="w-[calc(100%-12px)] xl:w-[calc(100%-15px)] 2xl:w-[calc(100%-18px)] 3xl:w-[calc(100%-25px)] pl-[10px] [&>p]:mb-0">
                                        <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-unna mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] leading-3">Expert Consultants</div>
                                        <p className="text-[#1E1E1E]">GMC-registered experts across 15+ medical specialties with NHS & private experience</p>
                                    </div>
                                </li>
                                <li className="flex items-start mb-[15px] xl:mb-[20px] 3xl:mb-[30px]  last-of-type:mb-0">
                                    <div className="w-[12px] xl:w-[15px] 2xl:w-[18px] 3xl:w-[25px]">
                                        <div className="w-full h-full flex items-center">
                                            <Image src="/images/expertIcon.svg" width="22" height="22" alt="expertIcon" />
                                        </div>
                                    </div>
                                    <div className="w-[calc(100%-12px)] xl:w-[calc(100%-15px)] 2xl:w-[calc(100%-18px)] 3xl:w-[calc(100%-25px)] pl-[10px] [&>p]:mb-0">
                                        <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-unna mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] leading-3">Advanced Technology</div>
                                        <p className="text-[#1E1E1E]">GMC-registered experts across 15+ medical specialties with NHS & private experience</p>
                                    </div>
                                </li>
                                <li className="flex items-start mb-[15px] xl:mb-[20px] 3xl:mb-[30px]  last-of-type:mb-0">
                                    <div className="w-[12px] xl:w-[15px] 2xl:w-[18px] 3xl:w-[25px]">
                                        <div className="w-full h-full flex items-center">
                                            <Image src="/images/expertIcon.svg" width="22" height="22" alt="expertIcon" />
                                        </div>
                                    </div>
                                    <div className="w-[calc(100%-12px)] xl:w-[calc(100%-15px)] 2xl:w-[calc(100%-18px)] 3xl:w-[calc(100%-25px)] pl-[10px] [&>p]:mb-0">
                                        <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-unna mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] leading-3">Personalized Care</div>
                                        <p className="text-[#1E1E1E]">Tailored treatment plans focused on your health journey</p>
                                    </div>
                                </li>
                                <li className="flex items-start mb-[15px] xl:mb-[20px] 3xl:mb-[30px] last-of-type:mb-0">
                                    <div className="w-[12px] xl:w-[15px] 2xl:w-[18px] 3xl:w-[25px]">
                                        <div className="w-full h-full flex items-center">
                                            <Image src="/images/expertIcon.svg" width="22" height="22" alt="expertIcon" />
                                        </div>
                                    </div>
                                    <div className="w-[calc(100%-12px)] xl:w-[calc(100%-15px)] 2xl:w-[calc(100%-18px)] 3xl:w-[calc(100%-25px)] pl-[10px] [&>p]:mb-0">
                                        <div className="text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-unna mb-[10px] 2xl:mb-[15px] 3xl:mb-[25px] leading-3">Affordable Excellence</div>
                                        <p className="text-[#1E1E1E]">High-quality private healthcare at transparent, competitive prices</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
