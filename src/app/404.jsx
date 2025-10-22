
"use client";


import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-[50px] 3xl:py-[80px] bg-[#f8fafc] text-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} >
                <div className="max-w-[560px] flex items-center justify-center mb-[20px]">
                    <Image src="/images/404.png" width="560" height="360" className="w-full h-full object-contain" />
                </div>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[28px] font-semibold text-[#1e1e1e] mb-[10px]"
            >
               Internal Server Error
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#4b5563]  sm:text-[15px] md:text-[17px] mb-[30px]"
            >
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link
                    href="/"
                    className="bg-base1 hover btn-base1"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
}
