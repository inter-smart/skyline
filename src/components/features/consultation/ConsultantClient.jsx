"use client";

import InnerBanner from "@/components/common/InnerBanner";
import React, { useState } from "react";
import OurconsultantSection from "./OurconsultantSection";



export default function ConsultantClient({
  banner_and_meta_tags,
  consultants
}) {

    const [searchTerm, setSearchTerm] = useState("");



  return (
    <>
      <InnerBanner
        img={banner_and_meta_tags?.banner_value}
        alt={banner_and_meta_tags?.banner_alt_text_value}
        subTitle={banner_and_meta_tags?.banner_pre_title}
        Title={banner_and_meta_tags?.banner_title}
        description={banner_and_meta_tags?.banner_description}
        showFormBox={true}
        onSearch={setSearchTerm}
      />

      <OurconsultantSection consultants={consultants} searchTerm={searchTerm} />
    </>
  );
}
