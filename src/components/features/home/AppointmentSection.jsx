
import Link from "next/link";
import Image from "next/image";

export default function AppointmentSection() {
    return (
        <section className="relative w-full h-full py-[90px] xl:py-[110px] 2xl:py-[130px] 3xl:py-[165px]">
            <Image src="/images/appointmentBg.jpg" className="object-cover absolute top-0 left-0 w-full h-full"
                priority width="1920" height="460" alt="appointmentBanner" />

            <div className="container w-full h-full flex items-center">
                <div className="max-w-[470px] 2xl:max-w-[600px] 3xl:max-w-[700px] relative">
                    <p className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase font-nornal tracking-[2px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                        Booking
                    </p>
                    <h2 className="text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[53px] 3xl:text-[66px] text-white font-normal font-unna capitalize leading-[30px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[53px] 3xl:leading-[66px] tracking-wider mb-[20px] xl:mb-[25px]">
                        Book Your <br />
                        Appointment Today
                    </h2>
                    <p className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white font-normal max-w-[75%] mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                        Your health and well-being are our top priorities. Experience world-class healthcare with a personal touch in the heart of Coventry.
                    </p>
                    <button className="btn-base1 hover min-w-[135px] xl:min-w-[170px] 2xl:min-w-[200px] 3xl:min-w-[250px] tracking-wide" aria-label="appointment">
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    )
}
