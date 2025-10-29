import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 10, 2025",
    title: "The Latest Advances in Cataract Surgery",
    link: "/",
  },
  {
    id: 2,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 10, 2025",
    title: "10 Heart-Healthy Foods to Include in Your Diet",
    link: "/",
  },
  {
    id: 3,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 10, 2025",
    title: "Understanding Joint Replacement Surgery",
    link: "/",
  },
  {
    id: 4,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 12, 2025",
    title: "Hospital Achieves New Safety Milestone",
    link: "/",
  },
  {
    id: 5,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 14, 2025",
    title: "The Benefits of a Balanced Diet",
    link: "/",
  },
  {
    id: 6,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 15, 2025",
    title: "How to Prepare for Your Surgery",
    link: "/",
  },
  {
    id: 7,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 16, 2025",
    title: "New Emergency Wing Now Operational",
    link: "/",
  },
  {
    id: 8,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 17, 2025",
    title: "Superfoods for Better Immunity",
    link: "/",
  },
  {
    id: 9,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 18, 2025",
    title: "What to Expect After General Surgery",
    link: "/",
  },
  {
    id: 10,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 18, 2025",
    title: "Hospital Introduces Robotic Surgery",
    link: "/",
  },
  {
    id: 11,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 19, 2025",
    title: "Hydration Tips for a Healthier Body",
    link: "/",
  },
  {
    id: 12,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 20, 2025",
    title: "Minimally Invasive Procedures Explained",
    link: "/",
  },
  {
    id: 13,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 21, 2025",
    title: "SkyCare Receives Excellence Award",
    link: "/",
  },
  {
    id: 14,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 21, 2025",
    title: "Healthy Eating Habits for Kids",
    link: "/",
  },
  {
    id: 15,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 22, 2025",
    title: "Laser Surgery: Benefits & Risks",
    link: "/",
  },
  {
    id: 16,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 23, 2025",
    title: "New Pediatric Department Launched",
    link: "/",
  },
  {
    id: 17,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 23, 2025",
    title: "Understanding Vitamins & Supplements",
    link: "/",
  },
  {
    id: 18,
    category: "surgery",
    image: "/images/insight3.jpg",
    date: "November 24, 2025",
    title: "Tips for Quick Post-Surgery Recovery",
    link: "/",
  },
  {
    id: 19,
    category: "news",
    image: "/images/insight1.jpg",
    date: "November 25, 2025",
    title: "Advancements in MRI Technology",
    link: "/",
  },
  {
    id: 20,
    category: "nutrition",
    image: "/images/insight2.jpg",
    date: "November 26, 2025",
    title: "Foods That Help Reduce Stress",
    link: "/",
  },
];

export async function GET(request) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "6");
  const category = searchParams.get("category") || "";

  // Filter by category
  let filteredVideos = category ? blogs.filter((video) => video.category === category) : blogs;

  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);
  const hasMore = endIndex < filteredVideos.length;

  return NextResponse.json({
    data: paginatedVideos,
    total: filteredVideos.length,
    page,
    perPage,
    hasMore,
  });
}
