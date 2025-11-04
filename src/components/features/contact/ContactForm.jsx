"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { fetchDropdownDataAPI } from "@/lib/api";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "@/components/ui/phone-input";
import { multipartPostToAPI, postToAPI } from "@/lib/api";
import { useBookingFormContext } from "@/context/BookingFormContext";
import { Heading } from "@/components/layout/Heading";
import SuccesModal from "../career/SuccesModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone_number: z
    .string()
    .min(10, "Phone_number number must be at least 10 digits"),
  service_id: z.string().min(1, "Please select a service type"),
  message: z.string().optional(),
});

export default function ContactFormSection() {
  const { openSuccess } = useBookingFormContext();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data } = await fetchDropdownDataAPI("get-services");
        setServices(data || []);
      } catch (error) {
        console.error("Failed to load services:", error);
      }
    };
    loadServices();
  }, []);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      service_id: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const formBox = `w-full h-[35px] 3xl:h-[47px] bg-[rgba(255,255,255,0.3)] rounded-[6px] px-[10px] 3xl:px-[20px] text-[10px] 2xl:text-[12px] 3xl:text-[16px] flex items-center`;
  const formControl = `text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-regular text-white placeholder:text-white w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none`;

  const onSubmit = async (data) => {
    function toNumber(value) {
      const num = Number(value);
      return isNaN(num) ? null : num;
    }

    const service = toNumber(data.service_id);
    const formattedData = {
      ...data,
      service_id: service,
    };

    try {
      await postToAPI("contact-enquiry", formattedData);

      toast.success("Form submitted successfully!");
      form.reset();
      openSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-base2 rounded-2xl p-8 shadow-xl text-white">
      <Heading
        size="heading3"
        as="h3"
        className="text-2xl font-bold mb-6 text-center"
      >
        Contact Form
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className={`${formBox}`}>
                    <input
                      {...field}
                      placeholder="Name*"
                      className={formControl}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-300 text-[10px] mt-1" />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className={`${formBox}`}>
                    <input
                      {...field}
                      placeholder="Email*"
                      className={formControl}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-300 text-[10px] mt-1" />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className={formBox}>
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
                  </div>
                </FormControl>
                <FormMessage className="text-red-300 text-[10px] mt-1" />
              </FormItem>
            )}
          />

          {/* Service Type */}
          <FormField
            control={form.control}
            name="service_id"
            render={({ field }) => (
              <FormItem>
                <div className={`${formBox}`}>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ? String(field.value) : ""}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={`border-none outline-none ${formControl} !w-full !m-0 data-[placeholder]:text-white [&>svg]:hidden`}
                      >
                        <SelectValue placeholder="Select Service*" />
                        <div>
                          <svg
                            viewBox="0 0 10 8"
                            style={{ width: "8px" }}
                            className=" text-white ml-auto shrink-0"
                          >
                            <path
                              d="M0.196331 1.31367L4.88879 6.7222C4.96443 6.80933 5.05825 6.87927 5.16383 6.92722C5.26941 6.97517 5.38424 7 5.50044 7C5.61665 7 5.73148 6.97517 5.83705 6.92722C5.94263 6.87927 6.03646 6.80933 6.11209 6.7222L10.8046 1.31367C11.2524 0.797419 10.8811 0 10.1929 0H0.80664C0.118448 0 -0.252839 0.797419 0.196331 1.31367Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent className="bg-white max-h-48 overflow-y-auto">
                      {services?.map((option) => (
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

          {/* Message */}
          {/* Additional Notes Field */}
          
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="w-full min-h-[65px] 2xl:min-h-[80px] 3xl:min-h-[100px] bg-[rgba(255,255,255,0.3)] rounded-[6px] p-[10px_15px]">
                    <FormControl>
                      <textarea
                        placeholder="Messages"
                        {...field}
                        className={`${formControl} w-full !m-0 min-h-[45px] 2xl:min-h-[60px] 3xl:min-h-[80px] resize-none`}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-[10px] text-red-300 mt-1 ml-2" />
                </FormItem>
              )}
            /> 
          {/* Submit Button */}
          <div className="w-full  mt-[25px]">
            <Button
              type="submit"
              className="text-[10px] 2xl:text-[11px] 3xl:text-[15px] tracking-wider btn-base1 
                                hover bg-white text-base1 rounded-[3px] 2xl:h-[40px] 3xl:h-[50px] 2xl:min-w-[185px] 3xl:min-w-[235px] hover:text-white"
              aria-label="consultation_btn"
            >
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </Button>
          </div>
        </form>
      </Form>

      {/* Success Modal */}
      <SuccesModal />
    </div>
  );
}
