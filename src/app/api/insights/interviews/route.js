import { NextResponse } from "next/server";

const interviews = [
  {
    id: 1,
    image_value: "/images/insight1.jpg",
    image_alt_text_value: "Excellence in Healthcare Award",
  },
  {
    id: 2,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Best Patient Care Award",
  },
  {
    id: 3,
    image_value: "/images/insight3.jpg",
    image_alt_text_value: "Innovation in Medical Services",
  },
  {
    id: 4,
    image_value: "/images/insight1.jpg",
    image_alt_text_value: "Top Hospital Recognition",
  },
  {
    id: 5,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Community Service Excellence",
  },
];

const data = {
  pre_title: "INSIGHTS",
  title: "Interviews",
  description: " Hear directly from our experts about the latest trends and insights in healthcare.",
};

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json({ interviews, data });
}
