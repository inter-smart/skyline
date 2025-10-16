"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function JobDetail() {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-[8px] sm:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] uppercase font-medium relative cursor-pointer h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] 3xl:leading-[32px;] rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 bg-transparent border border-[#671448] hover hover:text-[#ffffff] leading-0 tracking-[0.9px]">VIEW DETAILS
            </AlertDialogTrigger>

            <AlertDialogContent className="xl:!max-w-[750px] 2xl:!max-w-[940px] 3xl:!max-w-[1200px] bg-[#00335B] p-[30px_20px] lg:p-[35px_25px] 
                        xl:p-[45px_30px] 2xl:p-[55px_35px] 3xl:p-[50px_45px] rounded-[15px] border-none lg:max-h-[450px] xl:max-h-[560px] 2xl:max-h-[670px] 
                        3xl:max-h-[860px] overflow-auto">
                <AlertDialogHeader>
                    <div className="w-full max-w-[615px] mb-[20px]">
                        <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase tracking-wider mb-[12px]">connect me</div>
                        <div className="text-[25px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-white mb-[15px] font-unna leading-none">Book An Appointment</div>
                        <p className="text-white mb-0">Your health and well-being are our top priorities. Experience world-class healthcare with a personal touch in the heart of Coventry. </p>
                    </div>
                </AlertDialogHeader>
                <AlertDialogCancel className="bg-transparent border-none cursor-pointer absolute top-[25px] right-[25px] w-[20px] h-[20px] flex items-center group hover:bg-transparent">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="fill-white transition-all duration-all group-hover:scale-75 group-hover:bg-transparent" >
                        <path d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
                                0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
                                1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
                                13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
                                13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"  />
                    </svg>
                </AlertDialogCancel>
                <AlertDialogDescription>
                    <div className="w-full p-[10px] mt-[15px]">
                        <Button className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white" aria-label="APPLY JOB">APPLY NOW</Button>
                    </div>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    )
}
