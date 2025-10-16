"use client";

import { useState } from "react";
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
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import PhoneInput from "@/components/ui/phone-input";

const formBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px] px-[10px] px-[15px] 3xl:px-[20px] flex items-center`
const formControl = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-regular text-white placeholder:text-white mx-[10px] w-[calc(100%-15px)] 
outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 
           focus-visible:shadow-none"`

export default function BookAnAppointment() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        preferredDate: "",
        phoneNumber: "",
        referral: "",
        preferredTime: "",
        insuranceProvider: "",
        reason: "",
        additionalNotes: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-[8px] sm:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-white uppercase font-medium relative cursor-pointer
                     h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] rounded-[3px] 3xl:rounded-[5px] 
                    px-[10px] 2xl:px-[20px]  overflow-hidden
                    flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover leading-0">Book An Appointment
            </AlertDialogTrigger>
            <AlertDialogContent className="xl:!max-w-[750px] 2xl:!max-w-[940px] 3xl:!max-w-[1200px] bg-[#00335B] p-[30px_20px] lg:p-[35px_25px] 
                xl:p-[45px_30px] 2xl:p-[55px_35px] 3xl:p-[50px_45px] rounded-[15px] border-none lg:max-h-[450px] xl:max-h-[560px] 2xl:max-h-[670px] 
                3xl:max-h-[860px] overflow-auto">
                <Image src="/images/logoModel.png" className="max-w-[250px] 2xl:max-w-[280px] 3xl:max-w-[320px] w-full absolute 
                 top-0 right-0 pointer-events-none" width="320" height="320" alt="logo" />
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-wrap -m-[5px] 3xl:-m-[10px]">
                            <div className="w-full xs:w-1/2 p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <div className="w-[15px] h-[15px] flex items-center">
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" >
                                            <path d="M6.00044 7.3876C3.96403 7.3876 2.30664 5.73021 2.30664 3.6938C2.30664 1.65739 3.96403 0 6.00044 0C8.03685 0 9.69424 1.65739 9.69424 3.6938C9.69424 5.73021 8.03685 7.3876 6.00044 7.3876ZM6.00044 0.963601C4.49723 0.963601 3.27024 2.19059 3.27024 3.6938C3.27024 5.19702 4.49723 6.424 6.00044 6.424C7.50366 6.424 8.73064 5.19702 8.73064 3.6938C8.73064 2.19059 7.50366 0.963601 6.00044 0.963601Z" fill="white" />
                                            <path d="M11.5182 13.8113C11.2548 13.8113 11.0364 13.5928 11.0364 13.3295C11.0364 11.1132 8.77522 9.31446 6.00005 9.31446C3.22484 9.31446 0.963601 11.1132 0.963601 13.3295C0.963601 13.5928 0.745184 13.8113 0.4818 13.8113C0.218416 13.8113 0 13.5928 0 13.3295C0 10.5864 2.69165 8.35086 6.00005 8.35086C9.30841 8.35086 12 10.5864 12 13.3295C12 13.5928 11.7816 13.8113 11.5182 13.8113Z" fill="white" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl}`}
                                    />
                                </div>
                            </div>
                            <div className="w-full xs:w-1/2 p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <PhoneInput />
                                </div>
                            </div>

                            <div className="w-full 2xs:w-1/2  p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <div className="w-[15px] h-[15px] flex items-center">
                                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5729 11.2003H1.59143C1.16948 11.1998 0.76495 11.032 0.466599 10.7336C0.168248 10.4352 0.000442739 10.0307 0 9.60875V1.59152C0.000442739 1.16957 0.168248 0.765025 0.466599 0.466646C0.76495 0.168266 1.16948 0.000422022 1.59143 -6.10352e-05H14.5729C14.9948 0.000422022 15.3994 0.168266 15.6977 0.466646C15.9961 0.765025 16.1639 1.16957 16.1643 1.59152V9.60875C16.1639 10.0307 15.9961 10.4352 15.6977 10.7336C15.3994 11.032 14.9948 11.1998 14.5729 11.2003ZM1.59143 0.608226C1.33075 0.608508 1.08082 0.7122 0.896501 0.896547C0.712182 1.08089 0.608529 1.33084 0.608287 1.59152V9.60875C0.608529 9.86943 0.712182 10.1194 0.896501 10.3037C1.08082 10.4881 1.33075 10.5918 1.59143 10.592H14.5729C14.8336 10.5918 15.0835 10.4881 15.2678 10.3037C15.4521 10.1194 15.5558 9.86943 15.556 9.60875V1.59152C15.5558 1.33084 15.4521 1.08089 15.2678 0.896547C15.0835 0.7122 14.8336 0.608508 14.5729 0.608226H1.59143Z" fill="white" />
                                            <path d="M8.08198 7.39011C8.00785 7.39016 7.93624 7.36312 7.88064 7.31408L0.550781 0.843728L0.953315 0.387512L8.08198 6.68085L15.211 0.388273L15.6135 0.844488L8.28363 7.31484C8.22788 7.36374 8.15614 7.39052 8.08198 7.39011Z" fill="white" />
                                            <path d="M0.384766 10.2452L5.30889 4.63466L5.76632 5.03613L0.842197 10.6466L0.384766 10.2452Z" fill="white" />
                                            <path d="M10.4121 5.03058L10.8695 4.62911L15.7938 10.2397L15.3363 10.6412L10.4121 5.03058Z" fill="white" />
                                        </svg>

                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Email*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl}`}
                                    />
                                </div>
                            </div>
                            <div className="w-full 2xs:w-1/2  p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <div className="w-[15px] h-[15px] flex items-center">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1859 11.7691C10.1519 11.7718 10.102 11.7744 10.036 11.777C9.96475 11.7799 9.91462 11.7813 9.88574 11.7813C8.84016 11.7813 7.89212 11.356 7.20556 10.6694C6.51899 9.98271 6.09375 9.03457 6.09375 7.98888C6.09375 6.94371 6.51893 5.99587 7.2054 5.3091C7.89292 4.62125 8.84115 4.19531 9.88574 4.19531C10.62 4.19531 11.3067 4.40566 11.8888 4.76933C12.4889 5.14421 12.9775 5.6836 13.2915 6.32451L12.5647 6.67997C12.3186 6.17773 11.934 5.75392 11.4603 5.45805C11.0038 5.17281 10.464 5.00783 9.88574 5.00783C9.06334 5.00783 8.31848 5.34151 7.77986 5.88039C7.2404 6.4201 6.90626 7.16581 6.90626 7.98887C6.90626 8.81032 7.24046 9.55527 7.78002 10.0949C8.3196 10.6345 9.06446 10.9688 9.88574 10.9688C9.94688 10.9688 9.98643 10.9684 10.0043 10.9677C10.0281 10.9668 10.0676 10.9641 10.1224 10.9597L10.1859 11.7691L10.1859 11.7691Z" fill="white" />
                                            <path d="M10.7495 13.1505C10.5839 13.1927 10.4147 13.2247 10.2426 13.2462C10.0722 13.2674 9.9001 13.2782 9.72696 13.2782C9.15882 13.2782 8.6088 13.1637 8.10143 12.9456C7.65474 12.7535 7.24159 12.4804 6.87878 12.1338C6.25287 12.5274 5.72996 13.0469 5.32685 13.6669C4.88674 14.3439 4.58755 15.1441 4.45079 16.0351L4.4492 16.0367L4.43848 16.1055L3.63867 15.9817L3.64911 15.9146L3.6478 15.9144C3.80201 14.9098 4.14351 14.0013 4.64766 13.2258C5.1552 12.4451 5.82587 11.8022 6.63486 11.3344L6.63804 11.3328L6.74608 11.2715L7.02134 11.1151L7.2396 11.3445L7.32431 11.4335C7.64149 11.7659 8.01396 12.0243 8.42198 12.1997C8.82765 12.3741 9.26918 12.4657 9.72697 12.4657C9.86841 12.4657 10.0077 12.457 10.1442 12.44C10.2812 12.423 10.4165 12.3973 10.5496 12.3634L10.7495 13.1505Z" fill="white" />
                                            <path d="M15.5767 16.0781C14.2803 16.0781 13.1048 15.5508 12.2535 14.6994C11.4023 13.848 10.875 12.6725 10.875 11.376C10.875 10.0798 11.4022 8.90447 12.2533 8.05295C13.1056 7.20032 14.2813 6.67236 15.5767 6.67236C16.8732 6.67236 18.0488 7.19961 18.9002 8.05087C19.7515 8.90212 20.2788 10.0776 20.2788 11.3739C20.2788 12.6695 19.7514 13.8452 18.8999 14.6971C18.0476 15.5498 16.8721 16.0781 15.5767 16.0781ZM12.828 14.1249C13.5323 14.8293 14.5046 15.2656 15.5767 15.2656C16.6498 15.2656 17.622 14.8296 18.3254 14.1258C19.0299 13.421 19.4663 12.4475 19.4663 11.374C19.4663 10.3019 19.03 9.3296 18.3257 8.62534C17.6213 7.9211 16.6489 7.48489 15.5767 7.48489C14.5035 7.48489 13.5312 7.9206 12.8278 8.62425C12.1237 9.3287 11.6875 10.3019 11.6875 11.376C11.6875 12.4482 12.1237 13.4206 12.828 14.1249Z" fill="white" />
                                            <path d="M12.1273 22.321H22.3437C22.3529 21.07 22.1238 19.9144 21.6025 18.9038C21.094 17.918 20.3025 17.0627 19.1767 16.3829C18.7117 16.8414 18.1772 17.2007 17.597 17.4501C16.967 17.721 16.2837 17.8632 15.5776 17.8632C14.8716 17.8632 14.1884 17.721 13.5584 17.4501C12.9783 17.2007 12.4438 16.8414 11.9787 16.3829C11.7651 16.5119 11.5644 16.6466 11.3762 16.7866C11.1456 16.9581 10.9316 17.1392 10.7337 17.3292L10.1719 16.7452C10.3933 16.5328 10.6336 16.3295 10.8938 16.1359C11.1485 15.9464 11.4201 15.7677 11.7093 15.6006L11.7125 15.599L11.8494 15.521L12.1245 15.3644L12.343 15.594L12.4504 15.7069C12.8634 16.1398 13.3482 16.476 13.879 16.7043C14.4073 16.9314 14.982 17.0506 15.5776 17.0506C16.1733 17.0506 16.7481 16.9314 17.2765 16.7043C17.8074 16.4761 18.2921 16.1398 18.705 15.7069L18.7082 15.7038L18.8178 15.5908L19.0376 15.3643L19.3113 15.5226L19.4462 15.6006C20.7863 16.3746 21.724 17.3713 22.323 18.5324C22.9661 19.7794 23.2125 21.2069 23.1427 22.7447L23.1251 23.1335H22.738H12.1273L12.1273 22.321Z" fill="white" />
                                            <path d="M7.35648 15.9804L5.39483 17.8541H6.08098H6.43048L6.48247 18.2016C6.65966 19.3863 7.15229 20.2613 7.8178 20.8975C8.2279 21.2895 8.70574 21.5945 9.21808 21.8277C9.03744 21.5844 8.88103 21.3256 8.74809 21.0503C8.36483 20.2564 8.18201 19.3356 8.18201 18.2603V17.8541H8.58827H9.31644L7.35648 15.9804ZM4.10352 17.9668L7.0773 15.1264L7.35674 14.8595L7.6359 15.1264L10.6071 17.9668L10.3278 18.6666H9.00447C9.0435 19.4459 9.19821 20.1183 9.47808 20.698C9.80165 21.3681 10.2979 21.9251 10.9816 22.3919L10.6769 23.125C9.44413 22.889 8.20703 22.3908 7.25919 21.4847C6.53706 20.7943 5.98773 19.8751 5.7409 18.6666H4.38282L4.10352 17.9668Z" fill="white" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Referrals if any *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl}`}
                                    />
                                </div>
                            </div>
                            <div className="w-full 2xs:w-1/2  p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <div className="w-[15px] h-[15px] flex items-center">
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.393 1.01038H10.965V0.373502C10.965 0.274435 10.9257 0.179426 10.8556 0.109375C10.7856 0.0393238 10.6906 -3.05176e-05 10.5915 -3.05176e-05C10.4924 -3.05176e-05 10.3974 0.0393238 10.3274 0.109375C10.2573 0.179426 10.218 0.274435 10.218 0.373502V1.01038H4.19851V0.373502C4.19851 0.274435 4.15915 0.179426 4.0891 0.109375C4.01905 0.0393238 3.92404 -3.05176e-05 3.82497 -3.05176e-05C3.72591 -3.05176e-05 3.6309 0.0393238 3.56085 0.109375C3.4908 0.179426 3.45144 0.274435 3.45144 0.373502V1.01038H1.02348C0.751864 1.01087 0.491543 1.11912 0.299656 1.31135C0.10777 1.50359 -4.50587e-07 1.76411 0 2.03572V12.9765C0.000493708 13.2478 0.108483 13.5078 0.300315 13.6997C0.492148 13.8915 0.752187 13.9995 1.02348 14H13.3874C13.659 14 13.9195 13.8922 14.1118 13.7003C14.304 13.5084 14.4123 13.2481 14.4128 12.9765V2.03572C14.4128 1.76475 14.3055 1.5048 14.1144 1.31267C13.9233 1.12054 13.664 1.01186 13.393 1.01038ZM1.02908 1.75744H3.45704V2.39431C3.45704 2.49338 3.4964 2.58839 3.56645 2.65844C3.6365 2.72849 3.73151 2.76785 3.83058 2.76785C3.92964 2.76785 4.02465 2.72849 4.0947 2.65844C4.16475 2.58839 4.20411 2.49338 4.20411 2.39431V1.75744H10.2236V2.39431C10.2236 2.49338 10.2629 2.58839 10.333 2.65844C10.403 2.72849 10.4981 2.76785 10.5971 2.76785C10.6962 2.76785 10.7912 2.72849 10.8612 2.65844C10.9313 2.58839 10.9707 2.49338 10.9707 2.39431V1.75744H13.3986C13.4724 1.75744 13.5432 1.78676 13.5954 1.83895C13.6476 1.89114 13.6769 1.96192 13.6769 2.03572V3.96688H0.752668V2.03572C0.752667 1.96224 0.781729 1.89174 0.833514 1.8396C0.885298 1.78747 0.955601 1.75793 1.02908 1.75744ZM13.393 13.2529H1.02908C0.992783 13.2529 0.956839 13.2458 0.923303 13.2319C0.889767 13.218 0.859295 13.1976 0.833628 13.1719C0.807961 13.1463 0.7876 13.1158 0.773709 13.0823C0.759818 13.0487 0.752668 13.0128 0.752668 12.9765V4.71395H13.6713V12.9765C13.6708 13.05 13.6413 13.1203 13.5891 13.1721C13.537 13.2238 13.4665 13.2529 13.393 13.2529Z" fill="white" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Preferred Date*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl}`}
                                    />
                                </div>
                            </div>
                            <div className="w-full 2xs:w-1/2  p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <div className="w-[15px] h-[15px] flex items-center">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.50093 3.09767C9.72811 3.09767 9.91398 2.9118 9.91398 2.68463V2.47811C9.91398 2.25093 9.72811 2.06506 9.50093 2.06506C9.27376 2.06506 9.08789 2.25093 9.08789 2.47811V2.68463C9.08789 2.9118 9.27376 3.09767 9.50093 3.09767Z" fill="white" />
                                            <path d="M9.50093 15.902C9.27376 15.902 9.08789 16.0879 9.08789 16.3151V16.5216C9.08789 16.7488 9.27376 16.9346 9.50093 16.9346C9.72811 16.9346 9.91398 16.7488 9.91398 16.5216V16.3151C9.91398 16.0879 9.72811 15.902 9.50093 15.902Z" fill="white" />
                                            <path d="M2.68402 9.08698H2.4775C2.25032 9.08698 2.06445 9.27284 2.06445 9.50002C2.06445 9.72719 2.25032 9.91306 2.4775 9.91306H2.68402C2.91119 9.91306 3.09706 9.72719 3.09706 9.50002C3.09706 9.27284 2.91119 9.08698 2.68402 9.08698Z" fill="white" />
                                            <path d="M16.5219 9.08698H16.3154C16.0882 9.08698 15.9023 9.27284 15.9023 9.50002C15.9023 9.72719 16.0882 9.91306 16.3154 9.91306H16.5219C16.7491 9.91306 16.935 9.72719 16.935 9.50002C16.935 9.27284 16.7491 9.08698 16.5219 9.08698Z" fill="white" />
                                            <path d="M4.83303 4.25428C4.66782 4.08907 4.41999 4.08907 4.25477 4.25428C4.08956 4.4195 4.08956 4.66733 4.25477 4.83254L4.39934 4.97711C4.48195 5.05972 4.58521 5.10102 4.68847 5.10102C4.79173 5.10102 4.89499 5.05972 4.9776 4.97711C5.14282 4.81189 5.14282 4.56407 4.9776 4.39885L4.83303 4.25428Z" fill="white" />
                                            <path d="M4.39934 14.0228L4.25477 14.1674C4.08956 14.3326 4.08956 14.5804 4.25477 14.7457C4.33738 14.8283 4.44064 14.8696 4.5439 14.8696C4.64716 14.8696 4.75042 14.8283 4.83303 14.7457L4.9776 14.6011C5.14282 14.4359 5.14282 14.1881 4.9776 14.0228C4.81238 13.8576 4.56455 13.8576 4.39934 14.0228Z" fill="white" />
                                            <path d="M14.1669 4.25428L14.0224 4.39885C13.8571 4.56407 13.8571 4.81189 14.0224 4.97711C14.105 5.05972 14.2082 5.10102 14.3115 5.10102C14.4147 5.10102 14.518 5.05972 14.6006 4.97711L14.7452 4.83254C14.9104 4.66733 14.9104 4.4195 14.7452 4.25428C14.58 4.08907 14.3321 4.08907 14.1669 4.25428Z" fill="white" />
                                            <path d="M9.91398 9.33476V5.57607C9.91398 5.34889 9.72811 5.16302 9.50093 5.16302C9.27376 5.16302 9.08789 5.34889 9.08789 5.57607V9.49998C9.08789 9.60324 9.12919 9.7065 9.2118 9.78911L13.7346 14.3119C13.8172 14.3945 13.9205 14.4359 14.0238 14.4359C14.127 14.4359 14.2303 14.3945 14.3129 14.3119C14.4781 14.1467 14.4781 13.8989 14.3129 13.7337L9.91398 9.33476Z" fill="white" />
                                            <path d="M9.5 0C4.25435 0 0 4.25435 0 9.5C0 14.7457 4.25435 19 9.5 19C14.7457 19 19 14.7457 19 9.5C19 4.25435 14.7457 0 9.5 0ZM9.5 18.1739C4.7087 18.1739 0.826087 14.2913 0.826087 9.5C0.826087 4.7087 4.7087 0.826087 9.5 0.826087C14.2913 0.826087 18.1739 4.7087 18.1739 9.5C18.1739 14.2913 14.2913 18.1739 9.5 18.1739Z" fill="white" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Preferred Time*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl}`}
                                    />
                                </div>
                            </div>
                            <div className="w-full p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Insurance provider details if any"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl} !w-full !m-0`}
                                    />
                                </div>
                            </div>
                            <div className="w-full p-[5px] 2xl:p-[10px]">
                                <div className={`${formBox}`}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Insurance provider details if any"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl} !w-full !m-0`}
                                    />
                                </div>
                            </div>
                            <div className="w-full p-[5px] 2xl:p-[10px]">
                                <div className="w-full min-h-[65px] 2xl:min-h-[80px] 3xl:min-h-[100px]  bg-[rgba(255,255,255,0.3)] rounded-[6px] p-[10px_15px]">
                                    <textarea
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Additional notes"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`${formControl} w-full !m-0 items`}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-full p-[10px] mt-[15px]">
                                <Button className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 
                                hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white" aria-label="consultation_btn">book consultation</Button>
                            </div>
                        </div>
                    </form>

                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    )
}
