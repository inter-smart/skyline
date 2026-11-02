import fs from "fs";
import path from "path";
import { fetchFromAPI } from "@/lib/api";

const baseUrl = "https://skylinehospitals.co.uk";

// Automatically discover static routes from app directory
function getStaticRoutes(dir, baseRoute = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip special directories and dynamic routes
    if (
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name.includes("[") // Skip [slug] folders
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      // Check if directory has page.js
      const hasPage = fs.existsSync(path.join(fullPath, "page.js")) || fs.existsSync(path.join(fullPath, "page.tsx"));

      if (hasPage) {
        const route = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`;
        routes.push(route);
      }

      // Recursively check subdirectories
      routes = routes.concat(getStaticRoutes(fullPath, baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`));
    }
  }

  return routes;
}

function toRoute(url, priority) {
  return {
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

// Services (/service/[slug]) plus their sub-services (/service/[slug]/[innerslug])
async function getServiceRoutes() {
  const { data, error } = await fetchFromAPI("services");

  if (error || !data?.services?.length) {
    return [];
  }

  const slugs = data.services.map((service) => service?.slug).filter(Boolean);

  const routes = slugs.map((slug) => toRoute(`/service/${slug}`, 0.8));

  const subServiceSlugLists = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const { data: detail, error: detailError } = await fetchFromAPI(`service-details?slug=${slug}`);

        if (detailError || !detail?.service_sections?.length) {
          return [];
        }

        const subSlugs = new Set();

        for (const section of detail.service_sections) {
          const templateKey = section?.service_section_template?.key;
          if (templateKey !== "template-3" && templateKey !== "template-4") {
            continue;
          }

          for (const item of section?.service_section_items || []) {
            const subSlug = item?.sub_service?.slug;
            if (subSlug) {
              subSlugs.add(subSlug);
            }
          }
        }

        return [...subSlugs].map((subSlug) => toRoute(`/service/${slug}/${subSlug}`, 0.6));
      } catch {
        return [];
      }
    })
  );

  return [...routes, ...subServiceSlugLists.flat()];
}

// Insights / blog posts (/insights/[slug])
async function getInsightRoutes() {
  try {
    const { data, error } = await fetchFromAPI("blog-list?slug=blogs&per_page=1&page=1&tag=");

    if (error) {
      return [];
    }

    const total = data?.pagination?.total || 0;
    if (!total) {
      return [];
    }

    const { data: fullData, error: fullError } = await fetchFromAPI(`blog-list?slug=blogs&per_page=${total}&page=1&tag=`);

    if (fullError || !fullData?.blogs?.length) {
      return [];
    }

    return fullData.blogs.filter((blog) => blog?.slug).map((blog) => toRoute(`/insights/${blog.slug}`, 0.6));
  } catch {
    return [];
  }
}

// Policy pages (/policies/[slug])
async function getPolicyRoutes() {
  try {
    const { data, error } = await fetchFromAPI("site-settings");

    if (error || !data?.policies?.length) {
      return [];
    }

    return data.policies.filter((policy) => policy?.slug).map((policy) => toRoute(`/policies/${policy.slug}`, 0.6));
  } catch {
    return [];
  }
}

// Consultant profiles (/consultants/[slug])
async function getConsultantRoutes() {
  try {
    const { data, error } = await fetchFromAPI("consultants");

    if (error || !data?.consultants?.length) {
      return [];
    }

    return data.consultants.filter((consultant) => consultant?.slug).map((consultant) => toRoute(`/consultants/${consultant.slug}`, 0.6));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const appDir = path.join(process.cwd(), "src", "app");

  // Get all static routes automatically
  const staticPaths = getStaticRoutes(appDir);

  // Add root route
  const allStaticPaths = ["/", ...staticPaths];

  const staticRoutes = allStaticPaths.map((route) => toRoute(route, route === "/" ? 1 : 0.8));

  const [serviceRoutes, insightRoutes, policyRoutes, consultantRoutes] = await Promise.all([
    getServiceRoutes(),
    getInsightRoutes(),
    getPolicyRoutes(),
    getConsultantRoutes(),
  ]);

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes, ...policyRoutes, ...consultantRoutes];
}
