import Page from "@/app/404/page";
import PrivacyPolicySection from "@/components/features/privacy/Policies";
import { fetchFromAPI } from "@/lib/api";
import React from "react";

export default async function Policies({ params }) {
  const { slug } = await params;

  const { data, error } = await fetchFromAPI(`policy?slug=${slug}`);

  if (error) return <div></div>;

  const { title, content, meta_title, meta_description, meta_keywords, other_meta_tags } = data;

  console.log(data);

  return (
    <div>
      <PrivacyPolicySection title={title} content={content} />
    </div>
  );
}
