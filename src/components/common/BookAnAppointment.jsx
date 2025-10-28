"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { fetchDropdownDataAPI, postToAPI } from "@/lib/api";
import toast from "react-hot-toast";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";

const formBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px] px-[10px] px-[15px] 3xl:px-[20px] flex items-center`;
const selectBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px]  flex items-center`;
const formControl = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-regular text-white placeholder:text-white mx-[10px] w-[calc(100%-15px)] 
outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 
           focus-visible:shadow-none bg-transparent border-none`;

// Form Schema with Zod validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z.string().optional(),
  country_code: z.string().optional(),
  country: z.string().optional(),
  service_id: z.string().min(1, "Please select a service"),
  reason_for_consultation_id: z.string().min(1, "Please select a reason_for_consultation_id"),
  insurance_provider_id: z.string().min(1, "Please select an insurance provider"),
  additionalNotes: z.string().optional(),
});

export default function BookAnAppointment() {
  const { isOpen, openDialog, closeDialog } = useBookingFormContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      country_code: "",
      country: "",
      service_id: "",
      reason_for_consultation_id: "",
      insurance_provider_id: "",
      additionalNotes: "",
    },
  });

  const { formState } = form;
  const { isSubmitting } = formState;

  const [serviceOptions, setServiceOptions] = useState([]);
  const [reasonOptions, setReasonOptions] = useState([]);
  const [insuranceOptions, setInsuranceOptions] = useState([]);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    function toNumber(value) {
      const num = Number(value);
      return isNaN(num) ? null : num;
    }

    const serviceReason = toNumber(data.reason_for_consultation_id);
    const insurance_provider_id = toNumber(data.insurance_provider_id);
    const service = toNumber(data.service_id);

    const formattedData = {
      ...data,
      reason_for_consultation_id: serviceReason,
      insurance_provider_id: insurance_provider_id,
      service_id: service,
    };

    console.log("Form Data:", formattedData);
    try {
      const postData = await postToAPI("appointments", formattedData);
      const result = postData.data;

      console.log("Submission success:", result);

      // ✅ Reset only after success
      form.reset();
      toast.success("Appointment booked successfully!");
      closeDialog();
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const loadDropdownData = async () => {
    try {
      const [servicesData, reasonsData, insuranceData] = await Promise.all([
        fetchDropdownDataAPI("get-services"),
        fetchDropdownDataAPI("get-reason-for-consultations"),
        fetchDropdownDataAPI("get-insurance-providers"),
      ]);   ``

      setServiceOptions(servicesData.data);
      setReasonOptions(reasonsData.data);
      setInsuranceOptions(insuranceData.data);
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  };

  useEffect(() => {
    loadDropdownData();
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => (open ? openDialog() : closeDialog())}>
      <AlertDialogTrigger
        className="text-[8px] sm:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-white uppercase font-medium relative cursor-pointer
                     h-[25px] xl:h-[32px] 2xl:h-[40px] 3xl:h-[50px] rounded-[3px] 3xl:rounded-[5px] 
                    px-[10px] 2xl:px-[20px]  overflow-hidden
                    flex items-center justify-center 
                    transition-all duration-100 bg-base2 hover leading-0"
      >
        Book An Appointment
      </AlertDialogTrigger>
      <AlertDialogTitle className="sr-only">menu</AlertDialogTitle>
      <AlertDialogContent
        className="xl:!max-w-[750px] 2xl:!max-w-[940px] 3xl:!max-w-[1200px] bg-[#00335B] p-[30px_20px] lg:p-[35px_25px] 
                xl:p-[45px_30px] 2xl:p-[55px_35px] 3xl:p-[50px_45px] rounded-[15px] border-none lg:max-h-[450px] xl:max-h-[560px] 2xl:max-h-[670px] 
                3xl:max-h-[860px] overflow-auto"
      >
        <Image
          src="/images/logoModel.png"
          className="max-w-[250px] 2xl:max-w-[280px] 3xl:max-w-[320px] w-full absolute 
                 top-0 right-0 pointer-events-none"
          width="320"
          height="320"
          alt="logo"
        />
        <AlertDialogHeader>
          <div className="w-full max-w-[615px] mb-[20px]">
            <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-white uppercase tracking-wider mb-[12px]">connect me</div>
            <div className="text-[25px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-white mb-[15px] font-unna leading-none">
              Book An Appointment
            </div>
            <p className="text-white mb-0">
              Your health and well-being are our top priorities. Experience world-class healthcare with a personal touch in the heart of Coventry.{" "}
            </p>
          </div>
        </AlertDialogHeader>
        <AlertDialogCancel
          onClick={closeDialog}
          className="bg-transparent border-none cursor-pointer absolute top-[25px] right-[25px] w-[20px] h-[20px] flex items-center group hover:bg-transparent"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="fill-white transition-all duration-all group-hover:scale-75 group-hover:bg-transparent"
          >
            <path
              d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
                        0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
                        1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
                        13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
                        13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"
            />
          </svg>
        </AlertDialogCancel>
        <AlertDialogDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-wrap -m-[5px] 3xl:-m-[10px]">
                {/* Name Field */}
                <div className="w-full xs:w-1/2 p-[5px] 2xl:p-[10px]">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${formBox}`}>
                          <div className="w-[15px] h-[15px] flex items-center">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                              <path
                                d="M6.00044 7.3876C3.96403 7.3876 2.30664 5.73021 2.30664 3.6938C2.30664 1.65739 3.96403 0 6.00044 0C8.03685 0 9.69424 1.65739 9.69424 3.6938C9.69424 5.73021 8.03685 7.3876 6.00044 7.3876ZM6.00044 0.963601C4.49723 0.963601 3.27024 2.19059 3.27024 3.6938C3.27024 5.19702 4.49723 6.424 6.00044 6.424C7.50366 6.424 8.73064 5.19702 8.73064 3.6938C8.73064 2.19059 7.50366 0.963601 6.00044 0.963601Z"
                                fill="white"
                              />
                              <path
                                d="M11.5182 13.8113C11.2548 13.8113 11.0364 13.5928 11.0364 13.3295C11.0364 11.1132 8.77522 9.31446 6.00005 9.31446C3.22484 9.31446 0.963601 11.1132 0.963601 13.3295C0.963601 13.5928 0.745184 13.8113 0.4818 13.8113C0.218416 13.8113 0 13.5928 0 13.3295C0 10.5864 2.69165 8.35086 6.00005 8.35086C9.30841 8.35086 12 10.5864 12 13.3295C12 13.5928 11.7816 13.8113 11.5182 13.8113Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <FormControl>
                            <input type="text" placeholder="Name*" {...field} className={`${formControl}`} />
                          </FormControl>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone Number Field */}
                <div className="w-full xs:w-1/2 p-[5px] 2xl:p-[10px]">
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${formBox}`}>
                          <FormControl>
                            <PhoneInput
                              value={field.value}
                              onChange={(val) => {
                                console.log("VAL", val);
                                field.onChange(val.phoneNumber); // Set only numeric part
                                form.setValue("country_code", val.mobileCode);
                                form.setValue("country", val.countryCode);
                              }}
                              defaultCountry="AE"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                <input type="hidden" {...form.register("country_code")} />
                <input type="hidden" {...form.register("country")} />

                {/* Email Field */}
                <div className="w-full 2xs:w-1/2 p-[5px] 2xl:p-[10px]">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${formBox}`}>
                          <div className="w-[15px] h-[15px] flex items-center">
                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                              <path
                                d="M14.5729 11.2003H1.59143C1.16948 11.1998 0.76495 11.032 0.466599 10.7336C0.168248 10.4352 0.000442739 10.0307 0 9.60875V1.59152C0.000442739 1.16957 0.168248 0.765025 0.466599 0.466646C0.76495 0.168266 1.16948 0.000422022 1.59143 -6.10352e-05H14.5729C14.9948 0.000422022 15.3994 0.168266 15.6977 0.466646C15.9961 0.765025 16.1639 1.16957 16.1643 1.59152V9.60875C16.1639 10.0307 15.9961 10.4352 15.6977 10.7336C15.3994 11.032 14.9948 11.1998 14.5729 11.2003ZM1.59143 0.608226C1.33075 0.608508 1.08082 0.7122 0.896501 0.896547C0.712182 1.08089 0.608529 1.33084 0.608287 1.59152V9.60875C0.608529 9.86943 0.712182 10.1194 0.896501 10.3037C1.08082 10.4881 1.33075 10.5918 1.59143 10.592H14.5729C14.8336 10.5918 15.0835 10.4881 15.2678 10.3037C15.4521 10.1194 15.5558 9.86943 15.556 9.60875V1.59152C15.5558 1.33084 15.4521 1.08089 15.2678 0.896547C15.0835 0.7122 14.8336 0.608508 14.5729 0.608226H1.59143Z"
                                fill="white"
                              />
                              <path
                                d="M8.08198 7.39011C8.00785 7.39016 7.93624 7.36312 7.88064 7.31408L0.550781 0.843728L0.953315 0.387512L8.08198 6.68085L15.211 0.388273L15.6135 0.844488L8.28363 7.31484C8.22788 7.36374 8.15614 7.39052 8.08198 7.39011Z"
                                fill="white"
                              />
                              <path d="M0.384766 10.2452L5.30889 4.63466L5.76632 5.03613L0.842197 10.6466L0.384766 10.2452Z" fill="white" />
                              <path d="M10.4121 5.03058L10.8695 4.62911L15.7938 10.2397L15.3363 10.6412L10.4121 5.03058Z" fill="white" />
                            </svg>
                          </div>
                          <FormControl>
                            <input type="email" placeholder="Email*" {...field} className={`${formControl}`} />
                          </FormControl>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service Select Dropdown */}
                <div className={`w-full 2xs:w-1/2 p-[5px] 2xl:p-[10px]`}>
                  <FormField
                    control={form.control}
                    name="service_id"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${selectBox}`}>
                          <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                            <FormControl>
                              <SelectTrigger
                                className={`border-none focus:ring-0 focus:ring-offset-0 ${formControl} !w-full !m-0 data-[placeholder]:text-white [&>svg]:hidden`}
                              >
                                <SelectValue placeholder="Select Service*" />
                                <div>
                                  <svg viewBox="0 0 10 8" style={{ width: "8px" }} className=" text-white ml-auto shrink-0">
                                    <path
                                      d="M0.196331 1.31367L4.88879 6.7222C4.96443 6.80933 5.05825 6.87927 5.16383 6.92722C5.26941 6.97517 5.38424 7 5.50044 7C5.61665 7 5.73148 6.97517 5.83705 6.92722C5.94263 6.87927 6.03646 6.80933 6.11209 6.7222L10.8046 1.31367C11.2524 0.797419 10.8811 0 10.1929 0H0.80664C0.118448 0 -0.252839 0.797419 0.196331 1.31367Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent className="bg-white max-h-48 overflow-y-auto">
                              {serviceOptions?.map((option) => (
                                <SelectItem key={option.id} value={String(option.id)}>
                                  {option.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Reason Select Dropdown */}
                <div className={`w-full p-[5px] 2xl:p-[10px]`}>
                  <FormField
                    control={form.control}
                    name="reason_for_consultation_id"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${selectBox}`}>
                          <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                            <FormControl>
                              <SelectTrigger
                                className={`border-none focus:ring-0 focus:ring-offset-0 ${formControl} !w-full !m-0 data-[placeholder]:text-white [&>svg]:hidden`}
                              >
                                <SelectValue placeholder="Reason for Consultation*" className="text-white placeholder:text-white" />
                                <div>
                                  <svg viewBox="0 0 10 8" style={{ width: "8px" }} className=" text-white ml-auto shrink-0">
                                    <path
                                      d="M0.196331 1.31367L4.88879 6.7222C4.96443 6.80933 5.05825 6.87927 5.16383 6.92722C5.26941 6.97517 5.38424 7 5.50044 7C5.61665 7 5.73148 6.97517 5.83705 6.92722C5.94263 6.87927 6.03646 6.80933 6.11209 6.7222L10.8046 1.31367C11.2524 0.797419 10.8811 0 10.1929 0H0.80664C0.118448 0 -0.252839 0.797419 0.196331 1.31367Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-48 overflow-y-auto">
                              {reasonOptions?.map((option) => (
                                <SelectItem key={option.id} value={String(option.id)}>
                                  {option.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Insurance Provider Select Dropdown */}
                <div className={`w-full p-[5px] 2xl:p-[10px] `}>
                  <FormField
                    control={form.control}
                    name="insurance_provider_id"
                    render={({ field }) => (
                      <FormItem>
                        <div className={`${selectBox}`}>
                          <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                            <FormControl>
                              <SelectTrigger
                                className={`border-none focus:ring-0 focus:ring-offset-0 ${formControl} !w-full !m-0 data-[placeholder]:text-white [&>svg]:hidden`}
                              >
                                <SelectValue placeholder="Insurance Provider*" className="text-white placeholder:text-white" />
                                <div>
                                  <svg viewBox="0 0 10 8" style={{ width: "8px" }} className=" text-white ml-auto shrink-0">
                                    <path
                                      d="M0.196331 1.31367L4.88879 6.7222C4.96443 6.80933 5.05825 6.87927 5.16383 6.92722C5.26941 6.97517 5.38424 7 5.50044 7C5.61665 7 5.73148 6.97517 5.83705 6.92722C5.94263 6.87927 6.03646 6.80933 6.11209 6.7222L10.8046 1.31367C11.2524 0.797419 10.8811 0 10.1929 0H0.80664C0.118448 0 -0.252839 0.797419 0.196331 1.31367Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-48 overflow-y-auto">
                              {insuranceOptions?.map((option) => (
                                <SelectItem key={option.id} value={String(option.id)}>
                                  {option.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Notes Field */}
                <div className="w-full p-[5px] 2xl:p-[10px]">
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <div className="w-full min-h-[65px] 2xl:min-h-[80px] 3xl:min-h-[100px] bg-[rgba(255,255,255,0.3)] rounded-[6px] p-[10px_15px]">
                          <FormControl>
                            <textarea
                              placeholder="Additional notes"
                              {...field}
                              className={`${formControl} w-full !m-0 min-h-[45px] 2xl:min-h-[60px] 3xl:min-h-[80px] resize-none`}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full p-[10px] mt-[15px]">
                  <Button
                    type="submit"
                    className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 
                                hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white"
                    aria-label="consultation_btn"
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
