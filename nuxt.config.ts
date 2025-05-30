// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/icon",
  ],

  // SEO and Performance
  app: {
    head: {
      title: "Property Cards Demo - Nuxt + Sanity",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A beautiful property listing demo built with Nuxt 3 and Sanity CMS",
        },
      ],
    },
  },

  // Static generation for Netlify
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  // Environment variables for Sanity
  runtimeConfig: {
    public: {
      sanity: {
        projectId: process.env.NUXT_SANITY_PROJECT_ID || "",
        dataset: process.env.NUXT_SANITY_DATASET || "production",
        apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-01-01",
        useCdn: true,
      },
    },
  },
});
