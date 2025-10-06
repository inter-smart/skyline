import Link from "next/link";
import Image from "next/image";

export default function SpecialistSection() {
    return (
        <section className="py-[50px_70px]">
            <div className="container">
                <div className="flex items-end">
                    <div className="max-w-[650px]">
                        <h1 className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-base1 uppercase tracking-wider leading-0 mb-[30px]">Services</h1>
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[47px] 3xl:text-[60px] text-[#212121] font-unna font-normal leading-[34px]
                         xl:leading-[40px] 2xl:leading-[47px] 3xl:leading-[60px] mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">Our Specialist
                            Healthcare Services </div>
                    </div>

                    <p className="line-clamp-4">Comprehensive medical care across multiple specialties, delivered by expert consultants using state-of-the-art facilities.</p>

                    <Link href="/" className="btn-base1 hover" araia-label="View_All_Services">View All Services</Link>
                </div>
            </div>
        </section>
    )
}
