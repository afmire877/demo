<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <UIcon name="i-heroicons-home-modern" class="w-8 h-8 text-primary-600" />
            <span class="text-xl font-bold text-gray-900">PropertyDemo</span>
          </NuxtLink>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-primary-600"
          >
            Properties
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-primary-600"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <UButton 
            variant="ghost" 
            size="sm"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
          </UButton>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink 
            to="/" 
            class="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Properties
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script> 