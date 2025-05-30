import { sanityClient } from "~/lib/sanity";
import groq from "groq";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Property slug is required",
    });
  }

  try {
    const query = groq`
      *[_type == "property" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        price,
        location,
        image,
        summary,
        features,
        description
      }
    `;

    const property = await sanityClient.fetch(query, { slug });

    if (!property) {
      // Return mock data for demo purposes
      const mockProperties = [
        {
          _id: "1",
          title: "Modern Downtown Apartment",
          slug: { current: "modern-downtown-apartment" },
          price: 450000,
          location: "Downtown District",
          image: null,
          summary:
            "A stunning modern apartment in the heart of the city with panoramic views.",
          description:
            "This beautiful modern apartment offers the perfect blend of luxury and convenience. Located in the prestigious downtown district, you'll enjoy easy access to restaurants, shopping, and public transportation. The apartment features floor-to-ceiling windows with breathtaking city views, a gourmet kitchen with premium appliances, and a spacious living area perfect for entertaining.",
          features: [
            "2 Bedrooms",
            "2 Bathrooms",
            "City Views",
            "Modern Kitchen",
            "Balcony",
            "Parking",
          ],
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
          description:
            "This charming suburban house is ideal for families looking for space and tranquility. Set in a quiet, tree-lined neighborhood, the property features a large backyard perfect for children and pets. The house has been recently updated with modern amenities while maintaining its classic charm.",
          features: [
            "3 Bedrooms",
            "2.5 Bathrooms",
            "Large Garden",
            "Garage",
            "Fireplace",
            "Updated Kitchen",
          ],
        },
        {
          _id: "3",
          title: "Luxury Waterfront Villa",
          slug: { current: "luxury-waterfront-villa" },
          price: 1200000,
          location: "Waterfront District",
          image: null,
          summary: "Exclusive waterfront property with private beach access.",
          description:
            "Experience luxury living at its finest in this stunning waterfront villa. With direct beach access and panoramic ocean views, this property offers the ultimate in coastal living. The villa features high-end finishes throughout, a gourmet kitchen, and multiple outdoor entertaining areas.",
          features: [
            "4 Bedrooms",
            "3 Bathrooms",
            "Private Beach",
            "Pool",
            "Ocean Views",
            "Wine Cellar",
          ],
        },
      ];

      const mockProperty = mockProperties.find((p) => p.slug.current === slug);

      if (!mockProperty) {
        throw createError({
          statusCode: 404,
          statusMessage: "Property not found",
        });
      }

      return mockProperty;
    }

    return property;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch property",
    });
  }
});
