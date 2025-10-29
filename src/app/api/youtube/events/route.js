import { NextResponse } from "next/server";

const healthCategories = [
  // Latest
  {
    id: 1,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 01, 2025",
    title: "Breakthrough in Cancer Diagnosis",
    link: "/",
  },
  {
    id: 2,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 03, 2025",
    title: "New Vaccine for Seasonal Flu",
    link: "/",
  },
  {
    id: 3,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 05, 2025",
    title: "AI in Healthcare: What’s New?",
    link: "/",
  },
  {
    id: 4,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 07, 2025",
    title: "Advances in Heart Surgery",
    link: "/",
  },
  {
    id: 5,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 10, 2025",
    title: "Improved Diabetes Treatment Options",
    link: "/",
  },
  {
    id: 6,
    category: "upcoming",
    image: "/images/insight1.jpg",
    date: "December 12, 2025",
    title: "How Robotics Helps Surgeons",
    link: "/",
  },

  // Featured
  {
    id: 7,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 05, 2026",
    title: "Top Hospitals Lead in Cardiac Care",
    link: "/",
  },
  {
    id: 8,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 08, 2026",
    title: "Revolutionary Kidney Transplants",
    link: "/",
  },
  {
    id: 9,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 12, 2026",
    title: "Pediatrics: Newborn Care Improvements",
    link: "/",
  },
  {
    id: 10,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 15, 2026",
    title: "Vision Surgery Made Safer",
    link: "/",
  },
  {
    id: 11,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 20, 2026",
    title: "Bone Health Awareness Leap",
    link: "/",
  },
  {
    id: 12,
    category: "explore",
    image: "/images/insight1.jpg",
    date: "January 25, 2026",
    title: "Fighting Cancer with Early Screening",
    link: "/",
  },
];

export async function GET(request) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "6");
  const category = searchParams.get("category") || "";

  let filteredItems = category ? healthCategories.filter((item) => item.category === category) : healthCategories;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  const hasMore = endIndex < filteredItems.length;

  return NextResponse.json({
    data: paginatedItems,
    total: filteredItems.length,
    page,
    perPage,
    hasMore,
  });
}
