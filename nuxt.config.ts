export default defineNuxtConfig({
  // https://v3.nuxtjs.org/guide/directory-structure/nuxt.config/

  // As of RC12 Nuxt 3 supports Hybrid rendering mode
  // https://v3.nuxtjs.org/guide/concepts/rendering#route-rules
  //   routeRules: {
  //     '/pages/**': { swr: true },
  //     '/posts/**': { static: true },
  //   },

  css: [],

  modules: [
    '@nuxtjs/tailwindcss',
    // https://pinia.esm.dev
    '@pinia/nuxt',
    // https://vueuse.org/
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL,
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //   Currently still needed
  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue'],
  },

  vite: {
    optimizeDeps: {
      include: [
        '@heroicons/vue/20/solid',
        '@heroicons/vue/24/solid',
        '@heroicons/vue/24/outline',
        '@headlessui/vue',
        'vue',
        'pinia',
      ],
    },
  },
})
