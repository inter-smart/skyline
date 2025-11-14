import { NotFoundClient } from "@/components/common/NotFound";

export const metadata = {
  title: "404 - Page Not Found | Skyline Hospitals",
  description: "Oops! The page you're looking for doesn’t exist or has been moved. Head back home to continue browsing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
