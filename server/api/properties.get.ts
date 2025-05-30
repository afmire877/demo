import { sanityClient } from "~/lib/sanity";
import groq from "groq";

export default defineEventHandler(async (_event) => {
  try {
    const query = groq`
      *[_type == "property"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        price,
        location,
        image,
        summary,
        features
      }
    `;

    const properties = await sanityClient.fetch(query);
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);

    // Return mock data if Sanity is not configured
    return [
      {
        _id: "1",
        title: "Modern Downtown Apartment",
        slug: { current: "modern-downtown-apartment" },
        price: 450000,
        location: "Downtown District",
        image: null,
        summary:
          "A stunning modern apartment in the heart of the city with panoramic views.",
        features: ["2 Bedrooms", "2 Bathrooms", "City Views", "Modern Kitchen"],
      },
      {
        _id: "2",
        title: "Cozy Suburban House",
        slug: { current: "cozy-suburban-house" },
        price: 650000,
        location: "Suburban Heights",
        image: null,
        summary:
          "Perfect family home with a large garden and quiet neighborhood.",
        features: ["3 Bedrooms", "2.5 Bathrooms", "Large Garden", "Garage"],
      },
      {
        _id: "3",
        title: "Luxury Waterfront Villa",
        slug: { current: "luxury-waterfront-villa" },
        price: 1200000,
        location: "Waterfront District",
        image: null,
        summary: "Exclusive waterfront property with private beach access.",
        features: ["4 Bedrooms", "3 Bathrooms", "Private Beach", "Pool"],
      },
    ];
  }
});
