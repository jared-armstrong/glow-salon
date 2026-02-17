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
    slug: "balayage-transformation-carmel-indiana",
    title: "Balayage Transformation in Carmel, IN: Before & After",
    description: "See how our stylists at Glow Salon & Spa create stunning balayage transformations. Learn what to expect during your balayage appointment in Carmel, Indiana.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Hair Color",
    tags: ["balayage", "hair color", "transformation", "Carmel IN"],
    readTime: "4 min read",
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
    slug: "gel-vs-dip-manicure-which-is-right",
    title: "Gel vs. Dip Manicure: Which Is Right for You?",
    description: "Not sure whether to choose a gel or dip manicure? Our nail experts at Glow Salon & Spa break down the differences to help you pick the perfect option.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Nails",
    tags: ["gel manicure", "dip manicure", "nail care", "Carmel IN"],
    readTime: "3 min read",
  },
];
