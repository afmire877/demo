<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="animate-pulse">
        <div class="h-64 md:h-96 bg-gray-200 rounded-lg mb-8" />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="h-8 bg-gray-200 rounded mb-4" />
            <div class="h-6 bg-gray-200 rounded mb-6 w-1/2" />
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded" />
              <div class="h-4 bg-gray-200 rounded" />
              <div class="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
          <div>
            <div class="h-32 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
    >
      <UIcon
        name="i-heroicons-exclamation-triangle"
        class="w-16 h-16 text-yellow-500 mx-auto mb-4"
      />
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h1>
      <p class="text-gray-600 mb-6">
        The property you're looking for doesn't exist or has been removed.
      </p>
      <NuxtLink to="/">
        <UButton>
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
          Back to Properties
        </UButton>
      </NuxtLink>
    </div>

    <!-- Property Detail -->
    <div v-else-if="data" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Image -->
      <div
        class="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 bg-gray-200"
      >
        <NuxtImg
          v-if="data.image"
          :src="urlFor(data.image).width(1200).height(600).url()"
          :alt="data.title"
          class="w-full h-full object-cover"
        />
        <div v-else class="w-full h-full flex items-center justify-center">
          <UIcon name="i-heroicons-photo" class="w-24 h-24 text-gray-400" />
        </div>

        <!-- Back Button -->
        <div class="absolute top-4 left-4">
          <NuxtLink to="/">
            <UButton variant="solid" color="white" size="sm">
              <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
              Back
            </UButton>
          </NuxtLink>
        </div>
      </div>

      <!-- Property Information -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {{ data.title }}
            </h1>
            <div class="flex items-center text-gray-600 mb-4">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2" />
              <span class="text-lg">{{ data.location }}</span>
            </div>
            <div class="text-3xl font-bold text-primary-600 mb-6">
              ${{ data.price.toLocaleString() }}
            </div>
          </div>

          <!-- Features -->
          <div v-if="data.features && data.features.length > 0" class="mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Features</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div
                v-for="feature in data.features"
                :key="feature"
                class="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                />
                <span class="text-sm font-medium text-gray-900">{{
                  feature
                }}</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              {{ data.description || data.summary }}
            </p>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div
            class="bg-white rounded-lg border border-gray-200 p-6 sticky top-8"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Interested in this property?
            </h3>
            <p class="text-gray-600 mb-6">
              Get in touch with our team to schedule a viewing or request more
              information.
            </p>

            <div class="space-y-4">
              <NuxtLink to="/contact" class="block">
                <UButton size="lg" class="w-full">
                  <UIcon
                    name="i-heroicons-chat-bubble-left-right"
                    class="w-5 h-5 mr-2"
                  />
                  Contact Agent
                </UButton>
              </NuxtLink>

              <UButton variant="outline" size="lg" class="w-full">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
                Call Now
              </UButton>

              <UButton variant="ghost" size="lg" class="w-full">
                <UIcon name="i-heroicons-heart" class="w-5 h-5 mr-2" />
                Save Property
              </UButton>
            </div>

            <!-- Property Stats -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <div class="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-gray-900">ID</div>
                  <div class="text-sm text-gray-500">
                    {{ data._id.slice(-6).toUpperCase() }}
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gray-900">Type</div>
                  <div class="text-sm text-gray-500">Property</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Property } from "~/lib/sanity";
import { urlFor } from "~/lib/sanity";

const route = useRoute();
const slug = route.params.slug as string;

// Fetch property data
const { data, pending, error } = useLazyFetch<Property>(
  `/api/property/${slug}`
);

// SEO
useHead(() => ({
  title: data.value
    ? `${data.value.title} - PropertyDemo`
    : "Property - PropertyDemo",
  meta: [
    {
      name: "description",
      content: data.value
        ? data.value.summary
        : "Property details and information",
    },
  ],
}));
</script>
