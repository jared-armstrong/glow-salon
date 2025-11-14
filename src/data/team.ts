/**
 * Team data
 * Single source of truth for team member information
 */

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  isOwner?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jared",
    role: "Owner",
    description:
      "Our new owner focused on expanding service offerings and enhancing our online presence to serve our community better.",
    image: "jared",
    isOwner: true,
  },
  {
    name: "Laura",
    role: "Manager | Hair & Bridal Stylist",
    description:
      "Previous owner who created Glow Salon in 2013, now serving as our talented manager and expert stylist specializing in hair and bridal services.",
    image: "laura",
  },
  {
    name: "Julia",
    role: "Hair Stylist | Lead Bridal Hair Stylist, Makeup Artist",
    description:
      "Our lead bridal specialist with exceptional skills in hair styling and makeup artistry.",
    image: "julia",
  },
  {
    name: "Emily",
    role: "Nail Technician",
    description:
      "Emily is an expert nail technician providing beautiful manicures and pedicure services.",
    image: "emily",
  },
  {
    name: "Marcy",
    role: "Hair Stylist",
    description:
      "The original owner from 2005, Marcy brings many years of experience, including exceptional skill and passion for creating beautiful, personalized looks for every client.",
    image: "marcy",
  },
  {
    name: "Hannah",
    role: "Social Media Manager | Salon Content Creator",
    description:
      "Our creative content creator and social media expert, showcasing our salon's beauty and talent.",
    image: "hannah",
  },
];

