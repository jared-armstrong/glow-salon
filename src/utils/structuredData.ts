import { BUSINESS_INFO, AREAS_SERVED } from "../config/constants";
import { reviews } from "../data/reviews";

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
    additionalType: [
      "https://schema.org/BeautySalon",
      "https://schema.org/NailSalon",
      "https://schema.org/DaySpa",
    ],
    "@id": `${BUSINESS_INFO.website}/#business`,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website}/glow-salon-logo.webp`,
    url: BUSINESS_INFO.website,
    telephone: `+1${BUSINESS_INFO.phone.replace(/-/g, "")}`,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    description:
      "Glow Salon & Spa is a full-service hair salon and spa in the Village of West Clay, Carmel, Indiana. We offer professional hair color, balayage, highlights, haircuts, extensions, bridal hair and makeup, manicures, pedicures, and waxing services. Serving Carmel, Westfield, Fishers, Noblesville, Zionsville, and the greater Indianapolis area.",
    foundingDate: "2013",
    hasMap: BUSINESS_INFO.googleMapsUrl,
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
    review: reviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewBody: r.text,
    })),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hair Coloring",
          description:
            "Professional hair color, highlights, balayage, and glaze services in Carmel, Indiana",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Waxing",
          description:
            "Brow waxing and lip waxing services in Carmel, Indiana",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridal Hair and Makeup",
          description:
            "On-site bridal hair and makeup services in Carmel, Westfield, Fishers, and Indianapolis, Indiana",
        },
      },
    ],
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
 * Person schema for named stylists.
 */
export function generatePersonSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#jared`,
      name: "Jared",
      jobTitle: "Owner",
      image: `${BUSINESS_INFO.website}/team/jared.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#laura-brock`,
      name: "Laura",
      jobTitle: "Manager & Hair and Bridal Stylist",
      image: `${BUSINESS_INFO.website}/team/laura_brock.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#julia-zeffner`,
      name: "Julia Zeffner",
      jobTitle: "Lead Bridal Hair Stylist & Makeup Artist",
      image: `${BUSINESS_INFO.website}/team/julia_zeffner.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#emily-saunders`,
      name: "Emily",
      jobTitle: "Nail Technician",
      image: `${BUSINESS_INFO.website}/team/emily_saunders.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BUSINESS_INFO.website}/#hannah`,
      name: "Hannah",
      jobTitle: "Stylist",
      image: `${BUSINESS_INFO.website}/team/hannah_d.webp`,
      worksFor: generateHairSalonRef(),
      url: `${BUSINESS_INFO.website}/team`,
    },
  ];
}

/**
 * Parse a price string and return structured offer data.
 * Returns price + priceCurrency for exact prices like "$55".
 * Returns only description for text prices like "Starting at $150" or "Priced upon consultation".
 */
function parsePrice(priceStr: string): { price?: string; priceCurrency?: string } {
  const exactMatch = priceStr.match(/^\$(\d+(?:\.\d+)?)$/);
  if (exactMatch) {
    return { price: exactMatch[1], priceCurrency: "USD" };
  }
  return {};
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
    areaServed: AREAS_SERVED,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Services`,
      itemListElement: services.map((service) => {
        const priceData = parsePrice(service.price);
        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.serviceName,
            description: service.description || service.serviceName,
          },
          ...priceData,
          ...(priceData.price ? {} : { description: service.price || service.serviceName }),
        };
      }),
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
    hasOfferCatalog: {
      ...baseSchema.hasOfferCatalog,
      itemListElement: services.map((service) => {
        const priceData = parsePrice(service.price);
        return {
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
          ...priceData,
          ...(priceData.price ? {} : { description: service.price || service.serviceName }),
          availability: "https://schema.org/InStock",
        };
      }),
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
 * Generate BlogPosting structured data (for blog posts)
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedTime?: string,
  modifiedTime?: string,
  _author?: string,
  section?: string,
  tag?: string
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Glow Salon & Spa",
      "@id": `${BUSINESS_INFO.website}/#business`,
    },
    publisher: {
      "@type": "Organization",
      name: "Glow Salon & Spa",
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS_INFO.website}/glow-salon-logo.webp`,
      },
    },
  };

  if (publishedTime) schema.datePublished = publishedTime;
  if (modifiedTime) schema.dateModified = modifiedTime;
  if (section) schema.articleSection = section;
  if (tag) schema.articleTag = tag;

  return schema;
}

/**
 * Generate ItemList structured data for the services hub page
 */
export function generateServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services at Glow Salon & Spa",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hair Services",
        url: `${BUSINESS_INFO.website}/services/hair`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nail Services",
        url: `${BUSINESS_INFO.website}/services/nails`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Waxing & Makeup Services",
        url: `${BUSINESS_INFO.website}/services/makeup`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Bridal Hair & Makeup",
        url: `${BUSINESS_INFO.website}/services/bridal`,
      },
    ],
  };
}
