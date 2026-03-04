/**
 * Blog post data
 * Single source of truth for blog post metadata
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "2026-bridal-hair-trends-indianapolis",
    title: "2026 Bridal Hair Trends: What Indianapolis Brides Are Booking Right Now",
    description: "From softly sculpted updos to Hollywood waves, here are the bridal hair trends our Carmel stylists are seeing most in 2026 — and how to make them work for your wedding day.",
    publishedDate: "2026-03-03",
    author: "Glow Salon & Spa",
    category: "Bridal",
    tags: ["bridal hair", "wedding trends", "Indianapolis bride", "Carmel IN", "2026 wedding"],
    readTime: "5 min read",
  },
  {
    slug: "bridal-hair-tips-indiana-brides",
    title: "5 Bridal Hair Tips Every Indiana Bride Should Know",
    description: "Planning your wedding hair? Our bridal stylists share essential tips for brides in Carmel, Westfield, and Fishers to ensure flawless wedding day hair.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Bridal",
    tags: ["bridal hair", "wedding tips", "Indiana bride", "Carmel IN"],
    readTime: "5 min read",
  },
  {
    slug: "how-to-keep-hair-color-lasting-longer",
    title: "How to Make Your Hair Color Last Longer Between Salon Visits",
    description: "Your color appointment is an investment. Our Carmel stylists share the tips they actually tell clients to keep highlights, all-over color, and glazes vibrant for weeks longer.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Hair Care",
    tags: ["hair color", "color care", "highlights", "Carmel IN"],
    readTime: "4 min read",
  },
  {
    slug: "how-to-choose-the-right-haircut",
    title: "How to Choose the Right Haircut for Your Face Shape and Lifestyle",
    description: "Not sure what to ask for at the salon? Our stylists at Glow Salon & Spa explain how face shape, hair texture, and daily routine should guide your next haircut.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Hair",
    tags: ["haircut", "face shape", "hair styling", "Carmel IN"],
    readTime: "4 min read",
  },
];
