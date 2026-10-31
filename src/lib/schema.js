/**
 * Centralized JSON-LD Structured Data Schemas
 *
 * This is the single source of truth for all schema.org markup.
 * To add or modify a schema, edit only this file.
 * Each exported function/object returns a valid JSON-LD schema object.
 */

const SITE_URL = "https://www.skylinehospitals.co.uk";
const SITE_NAME = "Skyline Hospitals";

// ---------------------------------------------------------------------------
// GLOBAL SCHEMAS — injected on every page via layout.js
// ---------------------------------------------------------------------------

/**
 * Global MedicalClinic + MedicalOrganization schema.
 * Injected on every page. Edit business details here only.
 * @see https://schema.org/MedicalClinic
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalOrganization"],
  name: SITE_NAME,
  alternateName: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: "https://www.skylinehospitals.co.uk/_next/image?url=https%3A%2F%2Fadmin.skylinehospitals.co.uk%2Fstorage%2F2841%2FSKYLINE-1-converted.webp&w=640&q=75",
  description:
    "Premium private hospital in Coventry providing personalised consultant-led care, advanced diagnostics, and surgery with fast access and an exceptional patient experience.",
  telephone: "02475100354",
  email: "admin@skylinehospitals.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Park, Eden Road Walsgrave Triangle",
    addressLocality: "Coventry",
    postalCode: "CV2 2TB",
    addressCountry: "UK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/skylinehospitals/",
    "https://www.facebook.com/skylinehospitals/",
    "https://www.youtube.com/@SkylineHospitals",
    "https://www.linkedin.com/company/skyline-hospitals/",
  ],
  availableService: [
    "Orthopaedic",
    "Ophthalmic",
    "Psychiatric",
    "Gynecologic",
    "PrimaryCare",
    "PlasticSurgery",
    "Cardiovascular",
    "Dermatologic",
    "Urologic",
    "Pediatric",
    "Otolaryngologic",
    "Neurologic",
    "Oncologic",
    "PhysicalTherapy",
    "Radiography",
    "SurgicalCare",
  ],
};

// ---------------------------------------------------------------------------
// PAGE-SPECIFIC SCHEMAS — imported and used in individual page files
// ---------------------------------------------------------------------------

/**
 * Home page WebSite schema.
 * Injected only on src/app/page.js.
 * @see https://schema.org/WebSite
 */
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * About page WebPage schema.
 * Import and add to src/app/about/page.js when ready.
 */
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About Us — ${SITE_NAME}`,
  url: `${SITE_URL}/about`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/**
 * Contact page schema.
 * Import and add to src/app/contact/page.js when ready.
 */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact — ${SITE_NAME}`,
  url: `${SITE_URL}/contact`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/**
 * Dynamic Service page schema generator.
 * Call this function with the service data in src/app/service/[slug]/page.js.
 *
 * @param {{ name: string, slug: string, description: string }} service
 */
export function servicePageSchema({ name, slug, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${SITE_URL}/service/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Dynamic Consultant / Doctor profile schema generator.
 * Call this function in src/app/consultants/[slug]/page.js.
 *
 * @param {{ name: string, slug: string, specialty: string, image: string }} consultant
 */
export function consultantSchema({ name, slug, specialty, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    medicalSpecialty: specialty,
    image,
    url: `${SITE_URL}/consultants/${slug}`,
    worksFor: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Dynamic Blog / Insight article schema generator.
 * Call this function in src/app/insights/[slug]/page.js.
 *
 * @param {{ title: string, slug: string, description: string, publishedAt: string, image: string }} article
 */
export function articleSchema({ title, slug, description, publishedAt, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    url: `${SITE_URL}/insights/${slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };
}
