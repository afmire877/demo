<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <UIcon name="i-heroicons-home-modern" class="w-6 h-6 text-primary-600" />
            <span class="text-lg font-bold text-gray-900">PropertyDemo</span>
          </div>
          <p class="text-gray-600 text-sm">
            A beautiful property listing demo built with Nuxt 3 and Sanity CMS.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 text-sm">
                Properties
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 text-sm">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            Built With
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Nuxt 3</span>
            <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Sanity</span>
            <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tailwind</span>
            <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">TypeScript</span>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200">
        <p class="text-center text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} PropertyDemo. Built for demonstration purposes.
        </p>
      </div>
    </div>
  </footer>
</template> 