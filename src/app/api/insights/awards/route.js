import { NextResponse } from "next/server";

const awards = [
  {
    id: 1,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Excellence in Healthcare Award",
    title: "Excellence in Healthcare Award 2024",
  },
  {
    id: 2,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Best Patient Care Award",
    title: "Best Patient Care Award 2024",
  },
  {
    id: 3,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Innovation in Medical Services",
    title: "Medical Innovation Award 2025",
  },
  {
    id: 4,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Top Hospital Recognition",
    title: "Top Hospital Recognition 2025",
  },
  {
    id: 5,
    image_value: "/images/insight2.jpg",
    image_alt_text_value: "Community Service Excellence",
    title: "Community Service Excellence Award",
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ awards });
}
