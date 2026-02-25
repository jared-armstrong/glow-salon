import { BUSINESS_INFO, AREAS_SERVED } from "../config/constants";

export interface Service {
  serviceName: string;
  price: string;
  description?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Canonical HairSalon entity — the single authoritative business block.
 * All other schemas that need a business reference should use
 * generateHairSalonRef() instead of duplicating the full entity.
 */
export function generateHairSalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${BUSINESS_INFO.website}/#business`,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website}/glow-salon-logo.webp`,
    url: BUSINESS_INFO.website,
    telephone: `+1${BUSINESS_INFO.phone.replace(/-/g, "")}`,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    description:
      "Glow Salon & Spa offers professional hair color, balayage, highlights, haircuts, extensions, bridal styling, makeup, manicures, pedicures, and waxing services in Carmel, Indiana.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: [
      BUSINESS_INFO.socialLinks.facebook,
      BUSINESS_INFO.socialLinks.instagram,
      "https://www.yelp.com/biz/glow-salon-and-spa-carmel-2",
    ],
    areaServed: AREAS_SERVED,
    paymentAccepted: ["Cash", "Credit Card", "Check"],
    currenciesAccepted: "USD",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
      reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
      bestRating: BUSINESS_INFO.aggregateRating.bestRating,
      worstRating: BUSINESS_INFO.aggregateRating.worstRating,
    },
  };
}

/**
 * Lightweight reference to the canonical HairSalon entity via @id.
 * Used inside nested schemas (Service.provider, Person.worksFor, etc.)
 * to avoid duplicating the full business block.
 */
export function generateHairSalonRef() {
  return {
    "@type": "HairSalon",
    "@id": `${BUSINESS_INFO.website}/#business`,
  };
}

/**
 * Person schema for named stylists (Block C from audit).
 */
export function generatePersonSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#julia-zeffner`,
      name: "Julia Zeffner",
      jobTitle: "Lead Bridal Hair Stylist & Makeup Artist",
      image: `${BUSINESS_INFO.website}/_astro/julia_zeffner.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#laura`,
      name: "Laura",
      jobTitle: "Manager & Hair and Bridal Stylist",
      image: `${BUSINESS_INFO.website}/_astro/laura_brock.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
  ];
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  services: Service[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: generateHairSalonRef(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.serviceName,
          description: service.description || service.serviceName,
        },
        price: service.price,
        priceCurrency: "USD",
      })),
    },
  };
}

/**
 * Generate Bridal Service structured data with enhanced information
 */
export function generateBridalServiceSchema(
  serviceName: string,
  description: string,
  services: Service[]
) {
  const baseSchema = generateServiceSchema(serviceName, description, services);

  return {
    ...baseSchema,
    category: "Bridal Beauty Services",
    serviceType: "Wedding Hair and Makeup",
    areaServed: AREAS_SERVED,
    hasOfferCatalog: {
      ...baseSchema.hasOfferCatalog,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.serviceName,
          description: service.description || service.serviceName,
          category: service.serviceName.includes("Hair")
            ? "Hair Styling"
            : service.serviceName.includes("Makeup")
            ? "Makeup Application"
            : "Beauty Services",
        },
        price: service.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      })),
    },
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article structured data (for blog posts)
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedTime?: string,
  modifiedTime?: string,
  author?: string,
  section?: string,
  tag?: string
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
  };

  if (publishedTime) schema.datePublished = publishedTime;
  if (modifiedTime) schema.dateModified = modifiedTime;
  if (author) schema.author = { "@type": "Person", name: author };
  if (section) schema.articleSection = section;
  if (tag) schema.articleTag = tag;

  return schema;
}
