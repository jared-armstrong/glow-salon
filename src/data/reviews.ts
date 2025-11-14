/**
 * Reviews data
 * Single source of truth for customer reviews
 */

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  services?: string[];
  stylist?: string;
  priceRange?: string;
}

export const reviews: Review[] = [
  {
    id: "ingrid-lohneiss",
    name: "Ingrid Lohneiss",
    rating: 5,
    text: "Julia is very good about considering your hair's texture when applying color and styling. Great experience overall.",
    services: ["Shampoo & conditioning", "Blowouts", "Hairstyling"],
    stylist: "Julia",
    priceRange: "$120-140",
  },
  {
    id: "melanie-brooks",
    name: "Melanie Brooks",
    rating: 5,
    text: "Laura is fantastic!! She always knows exactly what I want. And she's super nice.",
    services: ["Shampoo & conditioning", "Haircut", "Hairstyling"],
    stylist: "Laura",
    priceRange: "$160-180",
  },
  {
    id: "madeline-pritchett",
    name: "Madeline Pritchett",
    rating: 5,
    text: "Julia just gave me my favorite haircut I've ever had! She is incredible and very technically skilled.",
    services: ["Shampoo & conditioning", "Blowouts", "Haircut", "Hairstyling"],
    stylist: "Julia Zeffner",
  },
  {
    id: "kathy-williams",
    name: "Kathy Williams",
    rating: 5,
    text: "Julia Zeffner gave me the best haircut I've had in years. She was very precise, while taking the necessary time to achieve our goal. I will definitely be rescheduling with her!",
    services: ["Shampoo & conditioning", "Blowouts", "Haircut"],
    stylist: "Julia Zeffner",
    priceRange: "$60-80",
  },
  {
    id: "rilee-wilson",
    name: "Rilee Wilson",
    rating: 5,
    text: "I have been going here for years and I have never once had a bad experience! All the ladies here are amazing, but Laura is who I usually work with and I could not recommend her enough! She is amazing at haircuts, blow outs, pedicures, and more! I highly recommend this place to anybody who is looking for a new salon! 😊",
    services: ["Haircut", "Blowouts", "Pedicure"],
    stylist: "Laura",
    priceRange: "$40-60",
  },
  {
    id: "erum-s",
    name: "Erum S",
    rating: 5,
    text: "Glow is the best salon in Indy! Laura is very experienced and always does a great job!",
    services: ["Haircut"],
    stylist: "Laura",
  },
];

