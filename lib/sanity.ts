import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Safely get runtime config with fallback
function getSanityConfig() {
  try {
    const config = useRuntimeConfig();
    return {
      projectId: config.public.sanity.projectId || "demo-project-id",
      dataset: config.public.sanity.dataset || "production",
      apiVersion: config.public.sanity.apiVersion || "2024-01-01",
      useCdn: config.public.sanity.useCdn ?? true,
    };
  } catch {
    // Fallback for static generation
    return {
      projectId: process.env.NUXT_SANITY_PROJECT_ID || "demo-project-id",
      dataset: process.env.NUXT_SANITY_DATASET || "production",
      apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-01-01",
      useCdn: true,
    };
  }
}

const sanityConfig = getSanityConfig();

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Property type definition
export interface Property {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  location: string;
  image: SanityImageSource;
  summary: string;
  features: string[];
  description?: string;
}
