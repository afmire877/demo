<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Property
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover beautiful homes and premium properties with our modern,
            fast, and accessible property platform.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" color="white" variant="solid">
              <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 mr-2" />
              Browse Properties
            </UButton>
            <UButton size="lg" variant="outline" color="white">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              Contact Us
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Properties Grid Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in prime
            locations.
          </p>
        </div>

        <!-- Loading State -->
        <div
          v-if="pending"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div class="h-48 bg-gray-200 animate-pulse" />
            <div class="p-6">
              <div class="h-6 bg-gray-200 rounded animate-pulse mb-2" />
              <div class="h-4 bg-gray-200 rounded animate-pulse mb-4" />
              <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <UIcon
            name="i-heroicons-exclamation-triangle"
            class="w-16 h-16 text-yellow-500 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Unable to Load Properties
          </h3>
          <p class="text-gray-600 mb-4">
            There was an error loading the property data. This might be because
            Sanity isn't configured yet.
          </p>
          <UButton variant="outline" @click="refresh()">
            <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 mr-2" />
            Try Again
          </UButton>
        </div>

        <!-- Properties Grid -->
        <div
          v-else-if="data && data.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <PropertyCard
            v-for="property in data"
            :key="property._id"
            :property="property"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <UIcon
            name="i-heroicons-home-modern"
            class="w-16 h-16 text-gray-400 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            No Properties Available
          </h3>
          <p class="text-gray-600">
            Properties will appear here once they're added to the Sanity CMS.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Ready to Find Your Perfect Property?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get in touch with our team to discuss your requirements and let us
          help you find the ideal property.
        </p>
        <NuxtLink to="/contact">
          <UButton size="lg" color="primary">
            <UIcon
              name="i-heroicons-chat-bubble-left-right"
              class="w-5 h-5 mr-2"
            />
            Contact Us Today
          </UButton>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Property } from "~/lib/sanity";

// SEO
useHead({
  title: "Featured Properties - PropertyDemo",
  meta: [
    {
      name: "description",
      content:
        "Discover beautiful homes and premium properties with our modern property platform. Browse our featured listings today.",
    },
  ],
});

// Fetch properties from Sanity
const { data, pending, error, refresh } =
  useLazyFetch<Property[]>("/api/properties");
</script>
