"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SuccesModal() {


    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] uppercase
             font-medium relative cursor-pointer 
            h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
             rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
             bg-transparent border border-[#671448] hover hover:text-[#ffffff] leading-0 tracking-[0.9px]">Success Modal
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-[95%] sm:!max-w-[360px] 2xl:!max-w-[430px] 3xl:!max-w-[540px] bg-white rounded-[4px]">

                <AlertDialogCancel className="bg-transparent border-none cursor-pointer absolute top-[25px] right-[25px] w-[20px] h-[20px] flex items-center group hover:bg-transparent">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="fill-black transition-all duration-all group-hover:scale-75 group-hover:bg-transparent" >
                        <path d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
                        0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
                        1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
                        13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
                        13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"  />
                    </svg>
                </AlertDialogCancel>


                <AlertDialogDescription className="mb-0 text-center">
                    <div className="max-w-[250px] 2xl:max-w-[400px] m-auto">
                        <div className="w-[50px] xl:w-[80px] 2xl:w-[95px] 3xl:w-[120px] h-[50px] xl:h-[80px] 2xl:h-[95px] 3xl:h-[120px]
                         m-auto flex items-center justify-center mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                            <svg width="121" height="121" viewBox="0 0 121 121" fill="none" >
                                <path d="M60.1 120.2C93.2923 120.2 120.2 93.2923 120.2 60.1C120.2 26.9077 93.2923 0 60.1 0C26.9077 0 0 26.9077 0 60.1C0 93.2923 26.9077 120.2 60.1 120.2Z" fill="#C5DDFF" />
                                <path d="M44.7441 87.2114L75.6473 118.115C101.242 111.289 120.201 87.9697 120.201 60.1C120.201 59.5312 120.201 58.9625 120.201 58.3937L95.9334 36.0221L44.7441 87.2114Z" fill="#A6CBFF" />
                                <path d="M61.6188 73.561C64.273 76.2153 64.273 80.7654 61.6188 83.4197L56.1207 88.9178C53.4664 91.572 48.9162 91.572 46.262 88.9178L22.1841 64.6503C19.5298 61.996 19.5298 57.4459 22.1841 54.7916L27.6822 49.2935C30.3364 46.6392 34.8866 46.6392 37.5408 49.2935L61.6188 73.561Z" fill="white" />
                                <path d="M82.6634 31.6615C85.3176 29.0073 89.8678 29.0073 92.522 31.6615L98.0201 37.1596C100.674 39.8139 100.674 44.3641 98.0201 47.0183L56.3104 88.5385C53.6561 91.1928 49.106 91.1928 46.4517 88.5385L40.9536 83.0404C38.2993 80.3861 38.2993 75.836 40.9536 73.1817L82.6634 31.6615Z" fill="white" />
                            </svg>
                        </div>
                        <div className="xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-[#212121] font-medium mb-[5px]">Submitted SUCCESSFULLY!</div>
                        <p className="text-[10px] 2xl:text-[12px] 3xl:text-[16px]">your application has been received. We’ll review it and get back to you soon.</p>
                        <AlertDialogCancel className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] font-medium uppercase border border-[#00335B] text-[#00335B]
                                rounded-[3px] h-[30px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[50px] 
                                max-w-[130px] m-auto"
                        >GO BACK
                        </AlertDialogCancel>
                    </div>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    )
}
