<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <NuxtLink :to="`/property/${property.slug.current}`" class="block">
      <!-- Property Image -->
      <div class="relative h-48 bg-gray-200">
        <NuxtImg
          v-if="property.image"
          :src="urlFor(property.image).width(400).height(240).url()"
          :alt="property.title"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div v-else class="w-full h-full flex items-center justify-center">
          <UIcon name="i-heroicons-photo" class="w-12 h-12 text-gray-400" />
        </div>

        <!-- Price Badge -->
        <div class="absolute top-4 right-4">
          <span
            class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            ${{ property.price.toLocaleString() }}
          </span>
        </div>
      </div>

      <!-- Property Details -->
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {{ property.title }}
        </h3>

        <div class="flex items-center text-gray-600 mb-3">
          <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-1" />
          <span class="text-sm">{{ property.location }}</span>
        </div>

        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
          {{ property.summary }}
        </p>

        <!-- Features -->
        <div
          v-if="property.features && property.features.length > 0"
          class="mb-4"
        >
          <div class="flex flex-wrap gap-1">
            <span
              v-for="feature in property.features.slice(0, 3)"
              :key="feature"
              class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {{ feature }}
            </span>
            <span
              v-if="property.features.length > 3"
              class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              +{{ property.features.length - 3 }} more
            </span>
          </div>
        </div>

        <!-- View Details Button -->
        <UButton variant="outline" size="sm" class="w-full">
          View Details
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
        </UButton>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { urlFor } from "~/lib/sanity";

defineProps({
  property: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
