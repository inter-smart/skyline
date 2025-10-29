"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const BannerSection = dynamic(() => import("@/components/features/home/BannerSection"), {
  loading: () => <Skeleton />,
  ssr: false,
});

export default function HomeBannerClient({ sliders }) {
  return (
    <>
      <BannerSection sliders={sliders} />
    </>
  );
}
