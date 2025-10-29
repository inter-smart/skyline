import { NextResponse } from "next/server";

// Mock database of videos
const ALL_VIDEOS = [
  { id: 1, category: "news", youtubeId: "jbct2ZM8Rj4", title: "Health News Update" },
  { id: 2, category: "consultant", youtubeId: "Muql4WIajH8", title: "Consultant Interview" },
  { id: 3, category: "patient", youtubeId: "V-JheO-yva8", title: "Patient Success Story" },
  { id: 4, category: "explainers", youtubeId: "jbct2ZM8Rj4", title: "Medical Explainer" },
  { id: 5, category: "educational", youtubeId: "Muql4WIajH8", title: "Educational Content" },
  { id: 6, category: "patient", youtubeId: "V-JheO-yva8", title: "Patient Testimonial" },
  { id: 7, category: "news", youtubeId: "jbct2ZM8Rj4", title: "Breaking Health News" },
  { id: 8, category: "consultant", youtubeId: "Muql4WIajH8", title: "Expert Consultation" },
  { id: 9, category: "explainers", youtubeId: "V-JheO-yva8", title: "Disease Explainer" },
  { id: 10, category: "educational", youtubeId: "jbct2ZM8Rj4", title: "Medical Education" },
  { id: 11, category: "news", youtubeId: "Muql4WIajH8", title: "Hospital Updates" },
  { id: 12, category: "patient", youtubeId: "V-JheO-yva8", title: "Recovery Journey" },
  { id: 13, category: "consultant", youtubeId: "jbct2ZM8Rj4", title: "Doctor's Advice" },
  { id: 14, category: "explainers", youtubeId: "Muql4WIajH8", title: "Treatment Explainer" },
  { id: 15, category: "educational", youtubeId: "V-JheO-yva8", title: "Health Education" },
  { id: 16, category: "news", youtubeId: "jbct2ZM8Rj4", title: "Medical Breakthrough" },
  { id: 17, category: "patient", youtubeId: "Muql4WIajH8", title: "Patient Experience" },
  { id: 18, category: "consultant", youtubeId: "V-JheO-yva8", title: "Specialist Insight" },
];

export async function GET(request) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "6");
  const category = searchParams.get("category") || "";

  // Filter by category
  let filteredVideos = category ? ALL_VIDEOS.filter((video) => video.category === category) : ALL_VIDEOS;

  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);
  const hasMore = endIndex < filteredVideos.length;

  return NextResponse.json({
    videos: paginatedVideos,
    total: filteredVideos.length,
    page,
    perPage,
    hasMore,
  });
}
