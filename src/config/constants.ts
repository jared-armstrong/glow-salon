/**
 * Business constants and configuration
 * Single source of truth for all business-related data
 */

export const BUSINESS_INFO = {
  name: "Glow Salon & Spa",
  phone: "317-846-3073",
  phoneFormatted: "(317) 846-3073",
  email: "glowsalonwestclay@gmail.com",
  website: "https://www.glowsalonwestclay.com",
  priceRange: "$$",
  address: {
    street: "1928 Rhettsbury St",
    city: "Carmel",
    state: "IN",
    zip: "46032",
    country: "US",
    full: "1928 Rhettsbury St, Carmel, IN 46032, United States",
  },
  geo: {
    latitude: 39.924550,
    longitude: -86.183260,
  },
  openingHours: [
    {
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/GlowSalonWestClay/",
    instagram: "https://www.instagram.com/glowsalonwestclay/",
  },
  bookingUrl: "https://glowsalonwestclay.glossgenius.com/services",
  formspreeId: "mkgjnwqo",
  aggregateRating: {
    ratingValue: "4.5",
    reviewCount: "30",
  },
} as const;

export const SERVICES = {
  hair: {
    name: "Hair Services",
    description: "Professional haircuts, coloring, highlights, and treatments",
  },
  nails: {
    name: "Nail Services",
    description: "Manicures, pedicures, gel and dip treatments",
  },
  makeup: {
    name: "Makeup Services",
    description: "Professional makeup application and waxing services",
  },
  bridal: {
    name: "Bridal Services",
    description: "Professional bridal hair and makeup services",
  },
} as const;

export const AREAS_SERVED = [
  {
    "@type": "City",
    name: "Carmel",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Westfield",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Fishers",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
] as const;

export const NAVIGATION_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Our Team" },
] as const;

