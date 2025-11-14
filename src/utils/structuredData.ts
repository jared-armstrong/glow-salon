/**
 * Utility functions for generating structured data (Schema.org JSON-LD)
 * Follows Single Responsibility Principle - each function handles one type of structured data
 */

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
 * Generate LocalBusiness structured data
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    image: "/glow-salon-logo.webp",
    "@id": BUSINESS_INFO.website,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
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
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
      reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
    },
  };
}

/**
 * Generate BeautySalon structured data
 */
export function generateBeautySalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS_INFO.name,
    image: "/glow-salon-logo.webp",
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
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
    ],
  };
}

/**
 * Generate WebPage structured data
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    mainEntity: generateBeautySalonSchema(),
  };
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
    provider: generateBeautySalonSchema(),
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
    provider: {
      ...baseSchema.provider,
      email: BUSINESS_INFO.email,
      paymentAccepted: ["Cash", "Credit Card", "Check"],
      currenciesAccepted: "USD",
    },
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
        validFrom: "2024-01-01",
        seller: {
          "@type": "BeautySalon",
          name: BUSINESS_INFO.name,
        },
      })),
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewBody:
        "The team at Glow Salon made me feel absolutely beautiful on my wedding day. Their mobile service was so convenient and the trial helped me feel confident about my look. Highly recommend for any bride in Carmel!",
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

/**
 * Generate Article structured data (for blog posts or articles)
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

