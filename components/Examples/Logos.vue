<template>
  <div class="bg-white">
    <div class="max-w-4xl py-12 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <NuxtLink
          v-for="logo in logos"
          :key="logo.name"
          :to="logo.link"
          class="relative flex justify-center col-span-1 p-8 overflow-hidden rounded-lg group md:col-span-2 lg:col-span-1 bg-gray-50"
          target="_blank"
        >
          <div
            class="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:bg-white group-hover:bg-opacity-75"
          >
            <span
              class="px-4 py-2 text-3xl font-bold text-transparent transition duration-300 rounded-tr-lg rounded-bl-lg group-hover:bg-primary-100 group-hover:text-primary-600"
              >Visit →</span
            >
          </div>
          <img class="object-contain h-12" :src="logo.src" alt="logo.name" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const logos = [
  {
    name: 'Directus',
    src: '/logos/directus.svg',
    link: 'https://directus.io/',
  },
  { name: 'Nuxt 3', src: '/logos/nuxt3.svg', link: 'https://v3.nuxtjs.org/' },
  {
    name: 'TailwindCSS',
    src: '/logos/tailwind.svg',
    link: 'https://tailwindcss.com/',
  },
]
</script>
