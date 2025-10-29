import { NextResponse } from "next/server";

export async function GET(request) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("key") || "";

  const filters = {
    videos: {
      headings: {
        pre_title: "Videos",
        title: "Categories",
      },
      tags: [
        { label: "All Posts", value: "*" },
        { label: "News", value: "news" },
        { label: "Consultant", value: "consultant" },
        { label: "Patient", value: "patient" },
        { label: "Explainers", value: "explainers" },
        { label: "Educational", value: "educational" },
      ],
    },
    blogs: {
      headings: {
        pre_title: "Blogs",
        title: "Categories",
      },
      tags: [
        { label: "All Posts", value: "*" },
        { label: "News & Updates", value: "news" },
        { label: "Nutrition", value: "nutrition" },
        { label: "Surgery", value: "surgery" },
      ],
    },
    health: {
      headings: {
        pre_title: "Health Blog",
        title: "This is our Health Blog",
      },
      tags: [
        { label: "All Posts", value: "*" },
        { label: "Latest", value: "latest" },
        { label: "Featured", value: "featured" },
      ],
    },
    events: {
      headings: {
        pre_title: "Events",
        title: "This is our Events",
      },
      tags: [
        { label: "All Posts", value: "*" },
        { label: "Explore", value: "explore" },
        { label: "Upcoming", value: "upcoming" },
      ],
    },
  };

  return NextResponse.json({ filters: filters[type] || [] });
}
