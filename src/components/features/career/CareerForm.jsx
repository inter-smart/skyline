"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import toast from "react-hot-toast";

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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import SuccesModal from "./SuccesModal";
import { multipartPostToAPI, postToAPI } from "@/lib/api";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const formcontrol = `text-[8px] xl:!text-[10px] 2xl:!text-[11px] 3xl:!text-[15px] !text-[#000000] w-full border border-[#E4E4E4] rounded-[6px] 
        placeholder:!text-[8px] xl:placeholder:!text-[10px] 2xl:placeholder:!text-[11px] 3xl:!placeholder:text-[15px] 
        h-[32px] xl:h-[40px] 2xl:h-[47px] 3xl:h-[60px] min-h-[32px] xl:min-h-[40px] 2xl:min-h-[47px] 3xl:min-h-[60px]  outline-none shadow-none
         focus:outline-none focus:ring-0 focus:shadow-none
        focus-visible:ring-0 focus-visible:shadow-none`;

const SECURITY_PATTERNS = {
  xssPattern: /<[^>]*>?|javascript:|on\w+\s*=/gi,
  sqlInjectionPattern: /('|`|;|--|"|\b(DROP|DELETE|INSERT|UPDATE|SELECT|UNION|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
  scriptPattern: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  templateInjectionPattern: /\{\{.*?\}\}/g,
};

const validateSecurity = (value) => {
  if (typeof value !== "string") return true;

  return (
    !SECURITY_PATTERNS.xssPattern.test(value) &&
    !SECURITY_PATTERNS.sqlInjectionPattern.test(value) &&
    !SECURITY_PATTERNS.scriptPattern.test(value) &&
    !SECURITY_PATTERNS.templateInjectionPattern.test(value)
  );
};

const validateNotOnlySpecialChars = (value) => {
  if (typeof value !== "string") return true;
  return !/^[^a-zA-Z0-9\s]+$/.test(value.trim());
};

const validateNotEmpty = (value) => {
  if (typeof value !== "string") return false;
  return value.trim().length > 0;
};

const validateNotOnlyWhitespace = (value) => {
  if (typeof value !== "string") return false;
  return /\S/.test(value);
};

export default function CareerForm({ careerId }) {
  const [dragActive, setDragActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_FILE_SIZE_MB = MAX_FILE_SIZE / (1024 * 1024); // Convert bytes → MB
  const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

  const formSchema = z.object({
    name: z
      .string()
      .transform((val) => val?.trim() || "")
      .refine(validateNotEmpty, "Name is required")
      .refine(validateNotOnlyWhitespace, "Name cannot be only whitespace")
      .refine((val) => val.length >= 2, "Name must be at least 2 characters")
      .refine((val) => val.length <= 255, "Name is too long")
      .refine(validateSecurity, "Invalid characters detected")
      .refine(validateNotOnlySpecialChars, "Name cannot contain only special characters")
      .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
      .refine(
        (val) => /^[a-zA-Z\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF\s'\-]+$/u.test(val),
        "Name can only contain letters, spaces, hyphens, and apostrophes"
      ),

    phone_number: z
      .string()
      .transform((val) => val?.trim() || "")
      .refine(validateNotEmpty, "Phone number is required")
      .refine(validateNotOnlyWhitespace, "Phone number cannot be only whitespace")
      .refine(validateSecurity, "Invalid characters detected")
      .refine((val) => {
        const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
        return cleaned.length >= 5 && cleaned.length <= 15;
      }, "Phone number must be between 5-15 digits")
      .refine((val) => {
        const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
        return /^\d+$/.test(cleaned) && !/^0+$/.test(cleaned);
      }, "Phone number must contain valid digits and cannot be all zeros")
      .refine((val) => /^[\d\s\(\)\-\+]+$/.test(val), "Phone number contains invalid characters"),

    email: z
      .string()
      .email("Please enter a valid email address")
      .transform((val) => val?.trim().toLowerCase() || "")
      .refine(validateNotEmpty, "Email is required")
      .refine(validateNotOnlyWhitespace, "Email cannot be only whitespace")
      .refine(validateSecurity, "Invalid characters detected")
      .refine((val) => val.length <= 256, "Email is too long")
      .refine((val) => val.includes("@"), "Email must contain @ symbol")
      .refine((val) => {
        const parts = val.split("@");
        return parts.length === 2 && parts[1].length > 0;
      }, "Email must have a valid domain"),
    experience: z
      .string()
      .min(1, "Experience is required")
      .refine((val) => !isNaN(Number(val)), "Experience must be a number")
      .transform((val) => Number(val))
      .refine((val) => val >= 0 && val <= 50, "Experience must be between 0 and 50 years"),
    resume: z
      .any()
      .refine((files) => files?.length === 1, "Please upload your resume file")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
      .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), "Only .pdf, .doc, and .docx files are allowed"),
    terms: z.preprocess(
      (val) => val === true || val === "on", // convert checkbox value
      z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms & conditions",
      })
    ),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      experience: "",
      resume: undefined,
      terms: false,
    },
  });

  const { formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    if (!careerId) {
      toast.error("Career ID missing!");
      return;
    }

    // const recaptchaToken = await executeRecaptcha("careers");

    const formData = new FormData();
    formData.append("career_id", careerId);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("experience", data.experience);
    // formData.append("captcha_key", recaptchaToken);

    if (data.resume && data.resume[0]) {
      formData.append("resume", data.resume[0]);
    }

    try {
      const response = await multipartPostToAPI("career-enquiry", formData);
      console.log("API Response:", response);

      if (!response.status) {
        toast.error(response.message);
      }

      if (response.status) {
        form.reset({
          name: "",
          email: "",
          phone_number: "",
          experience: "",
          resume: undefined,
          terms: false, // Explicitly reset checkbox to false
        });
      }
      setOpen(false);
      setTimeout(() => {
        setSuccessOpen(true);
      }, 100);
    } catch (error) {
      console.error("❌ Submission error:", error);
      toast.error("Error submitting form.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e, setImage) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleClose = () => {
    console.log("clickable");
    form.reset({
      name: "",
      email: "",
      phone_number: "",
      experience: "",
      resume: undefined,
      terms: false, // Explicitly reset checkbox to false
    });
    setOpen(false);
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger
          className="text-[8px] lg:text-[10px] 2xl:text-[12px] 3xl:text-[15px] text-[#fff] uppercase font-medium relative cursor-pointer 
            h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
             rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
            bg-[#671448] hover leading-0 tracking-[2px]"
        >
          APPLY NOW
        </AlertDialogTrigger>

        <AlertDialogContent
          className="!max-w-[95%] sm:!max-w-[630px] 2xl:!max-w-[1000px] 3xl:!max-w-[1270px] bg-white 
                 lg:max-h-[450px] xl:max-h-[560px] 2xl:max-h-[670px] 
                3xl:max-h-[860px] overflow-auto p-[25px_15px] md:p-[25px] lg:p-[35px]
                xl:p-[55px] 2xl:p-[80px] 3xl:p-[100px] rounded-[6px]"
        >
          <AlertDialogCancel
            onClick={(e) => {
              handleClose();
            }}
            className="bg-transparent border-none cursor-pointer absolute md:top-[75px] top-[15px] right-[10px] md:right-[55px] 
    w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] 
    flex items-center group hover:bg-transparent z-50"
          >
            <svg viewBox="0 0 13 13" fill="none" className="fill-black transition-all w-full h-full pointer-events-none">
              <path
                d="M7.69099 6.5001L12.7529 1.4379C13.0824 1.10862 13.0824 0.576231 12.7529 0.246956C12.4237 -0.0823187 11.8913 -0.0823187 11.562 
        0.246956L6.49992 5.30915L1.43798 0.246956C1.10856 -0.0823187 0.576335 -0.0823187 0.247067 0.246956C-0.0823556 0.576231 -0.0823556 
        1.10862 0.247067 1.4379L5.30901 6.5001L0.247067 11.5623C-0.0823556 11.8916 -0.0823556 12.424 0.247067 12.7532C0.411161 12.9175 0.62692 
        13 0.842525 13C1.05813 13 1.27374 12.9175 1.43798 12.7532L6.49992 7.69104L11.562 12.7532C11.7263 12.9175 11.9419 13 12.1575 13C12.3731 
        13 12.5887 12.9175 12.7529 12.7532C13.0824 12.424 13.0824 11.8916 12.7529 11.5623L7.69099 6.5001Z"
              />
            </svg>
          </AlertDialogCancel>
          <AlertDialogHeader>
            <div className="w-full relative p-[10px] 2xl:p-[12px] 3xl:p-[20px] mb-[5px] 2xl:mb-[10px] 3xl0px]">
              <div className="text-[25px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#212121] mb-[15px] leading-none">Apply Now</div>
              <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#1E1E1E] tracking-wide">
                Submit your application for the ICU Nurse Role
              </div>
            </div>
          </AlertDialogHeader>

          <AlertDialogDescription className="mb-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="flex flex-wrap w-full ">
                  <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">
                            Full Name *
                          </div>

                          <FormControl>
                            <Input {...field} placeholder="Enter your full name" className={`${formcontrol}`} />
                          </FormControl>
                          <FormMessage className="text-[10px] text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-wrap w-full ">
                    <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">
                              Email Address *
                            </div>
                            <FormControl>
                              <Input {...field} placeholder="Enter your email address" className={`${formcontrol}`} />
                            </FormControl>
                            <FormMessage className="text-[10px] text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-wrap w-full ">
                    <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                      <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                          <FormItem>
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">
                              Phone Number *
                            </div>
                            <FormControl>
                              <Input {...field} placeholder="Enter your phone number" className={`${formcontrol}`} />
                            </FormControl>
                            <FormMessage className="text-[10px] text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex flex-wrap w-full ">
                    <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">
                              Experience *
                            </div>
                            <FormControl>
                              <Input {...field} placeholder="Enter your experience (in years)" className={`${formcontrol}`} />
                            </FormControl>
                            <FormMessage className="text-[10px] text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Upload CV */}
                  <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <div className="text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[20px] text-[#212121] mb-[3px] 2xl:mb-[5px] 3xl:mb-[10px]">
                            Upload CV *
                          </div>

                          <FormControl>
                            <div
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={(e) => {
                                e.preventDefault();
                                setDragActive(false);
                                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                                  field.onChange(e.dataTransfer.files);
                                }
                              }}
                              className={`flex flex-col items-center justify-center w-full cursor-pointer rounded-[6px] border border-dashed border-[#929293] transition 
                        p-[20px] 2xl:p-[30px] 3xl:p-[40px] ${dragActive ? "bg-gray-100" : "bg-white"}`}
                            >
                              <label
                                htmlFor="resume"
                                className="text-[8px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[18px] text-[rgba(16,16,16,0.4)] font-light w-full max-w-[260px]
                          h-full flex flex-col items-center justify-center cursor-pointer text-center"
                              >
                                <div className="w-[18px] 2xl:w-[22px] 3xl:w-[30px] h-[18px] 2xl:h-[22px] 3xl:h-[30px] flex items-center justify-center mb-[10px] 2xl:mb-[20px]">
                                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
                                    <path
                                      d="M5.16406 14V23.3333C5.16406 23.9522 5.4099 24.5457 5.84748 24.9832C6.28506 25.4208 6.87856 25.6667 7.4974 25.6667H21.4974C22.1162 25.6667 22.7097 25.4208 23.1473 24.9832C23.5849 24.5457 23.8307 23.9522 23.8307 23.3333V14"
                                      stroke="#212121"
                                      strokeWidth="1.33333"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.1693 6.99992L14.5026 2.33325L9.83594 6.99992"
                                      stroke="#212121"
                                      strokeWidth="1.33333"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.5 2.33337V17.5"
                                      stroke="#212121"
                                      strokeWidth="1.33333"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                Click or drag to upload your CV (PDF, DOC, DOCX) <br />
                                <span className="text-[#929293] text-[8px] 2xl:text-[12px] 3xl:text-[14px]">
                                  Max file size: {MAX_FILE_SIZE_MB} MB
                                </span>
                              </label>
                              <input id="resume" type="file" accept="*/*" onChange={(e) => field.onChange(e.target.files)} className="hidden" />
                              {field.value && field.value.length > 0 && (
                                <p className="text-[10px] mt-2 text-[#212121]">Selected file: {field.value[0].name}</p>
                              )}
                            </div>
                          </FormControl>

                          <FormMessage className="text-[10px] text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center mb-[8px]">
                            <FormControl>
                              <Input
                                type="checkbox"
                                checked={field.value}
                                onChange={(e) => field.onChange(e.target.checked)}
                                className="w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[27px] h-[14px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[27px] rounded-[5px] border border-[#8E8E90]"
                              />
                            </FormControl>
                            <p className="mb-0 px-[10px]">I agree to the terms & conditions *</p>
                          </div>
                          <FormMessage className="text-[10px] text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[20px] w-full">
                    <div className="flex items-center -m-[5px]">
                      <div className="px-[5px]">
                        <AlertDialogCancel
                          onClick={handleClose}
                          className=" text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] uppercase
                                        font-medium relative cursor-pointer 
                                        h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
                                        rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
                                        bg-transparent border border-[#671448] hover hover:text-[#ffffff] leading-0 tracking-[0.9px] hover btn-base1"
                        >
                          Cancel
                        </AlertDialogCancel>
                      </div>
                      <div className="px-[5px]">
                        <Button
                          type="submit"
                          className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#fff] uppercase font-medium relative cursor-pointer 
                                        h-[25px] xl:!min-h-[32px] 2xl:!min-h-[35px] 3xl:!min-h-[50px] 3xl:leading-[32px;]
                                        rounded-[3px] px-[10px] 2xl:px-[20px] overflow-hidden flex items-center justify-center transition-all duration-300 
                                        bg-[#671448] hover leading-0 tracking-[2px]"
                        >
                          {isSubmitting ? "Applying..." : "APPLY NOW"}
                        </Button>
                      </div>
                      {/* <div className="px-[5px]">
                      <SuccesModal />
                    </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>

      <SuccesModal open={successOpen} setOpen={setSuccessOpen} />
    </>
  );
}
