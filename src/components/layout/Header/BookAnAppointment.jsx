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
            <AlertDialogTrigger className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-white uppercase font-medium relative cursor-pointer
                     h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] rounded-[3px] 3xl:rounded-[5px] 
                    px-[10px] 2xl:px-[20px]  overflow-hidden
                    flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover leading-0">Book An Appointment
            </AlertDialogTrigger>
            <AlertDialogContent className="!max-w-[1200px] bg-[#00335B] p-[70px_45px] rounded-[15px] border-none max-h-[840px] overflow-auto">
                <Image src="/images/logoModel.png" className="max-w-[320px] w-full   absolute top-0 right-0 pointer-events-none" width="320" height="320" alt="logo" />
                <AlertDialogHeader>
                    <div className="w-full max-w-[615px] mb-[20px]">
                        <div className="text-[18px] text-white uppercase tracking-wider">connect me</div>
                        <div className="text-[50px] text-white mb-[10px] font-unna">Book An Appointment</div>
                        <p className="text-white">Your health and well-being are our top priorities. Experience world-class healthcare with a personal touch in the heart of Coventry. </p>
                    </div>
                    <AlertDialogDescription>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Preferred Date */}
                            <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Preferred Date *
                                </label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-300 my-6"></div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number *
                                </label>
                                <div className="flex">
                                    <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                        <span className="text-gray-600">No: +44</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-300 my-6"></div>

                            {/* Referrals */}
                            <div>
                                <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                                    Referrals if any
                                </label>
                                <input
                                    type="text"
                                    id="referral"
                                    name="referral"
                                    value={formData.referral}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter referral details if any"
                                />
                            </div>

                            {/* Preferred Time */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Preferred Time *
                                </label>
                                <div className="space-y-2">
                                    {["Morning (9AM - 12PM)", "Afternoon (12PM - 5PM)", "Evening (5PM - 8PM)"].map((time) => (
                                        <label key={time} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="preferredTime"
                                                value={time}
                                                checked={formData.preferredTime === time}
                                                onChange={handleChange}
                                                required
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{time}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Insurance Provider */}
                            <div>
                                <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                                    Insurance provider details if any
                                </label>
                                <input
                                    type="text"
                                    id="insuranceProvider"
                                    name="insuranceProvider"
                                    value={formData.insuranceProvider}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter insurance provider details"
                                />
                            </div>

                            {/* Reason for Consultation */}
                            <div>
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                                    Reason for Consultation
                                </label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Briefly describe the reason for your consultation"
                                />
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                                    Additional notes
                                </label>
                                <textarea
                                    id="additionalNotes"
                                    name="additionalNotes"
                                    value={formData.additionalNotes}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Any additional information you'd like to share"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition duration-200"
                            >
                                BOOK CONSULTATION
                            </button>
                        </form>

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
