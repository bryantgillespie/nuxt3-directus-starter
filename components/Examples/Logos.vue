<template>
  <div class="grid max-w-4xl grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2">
    <div>
      <h2
        class="text-3xl font-extrabold text-transparent text-gray-900 sm:text-4xl bg-clip-text bg-gradient-to-r from-primary-600 to-pink-600"
      >
        Develop internal or client applications faster
      </h2>
      <div class="mt-4 prose prose-lg dark:prose-invert">
        <p>
          <strong>Directus</strong> is an open data platform backed by a SQL
          database that allows you to quickly created a ready-to-use backend /
          API to power your application without writing any code.
        </p>
        <p>
          <strong>Nuxt</strong> is the leading Vue framework that handles
          routing, server side rendering, and more.
        </p>
        <p>
          <strong>TailwindCSS</strong> is a utility-first CSS framework to make
          quick work of building beautiful apps without writing a ton of custom
          CSS.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-4">
      <NuxtLink
        v-for="logo in logos"
        :key="logo.name"
        :to="logo.link"
        class="relative flex items-center justify-center col-span-1 p-8 overflow-hidden rounded-lg group md:col-span-2 lg:col-span-1 bg-gray-50 dark:brightness-90"
        target="_blank"
      >
        <div
          class="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:bg-white group-hover:bg-opacity-75"
        >
          <span
            class="px-4 py-2 text-3xl font-bold text-transparent transition duration-300 rounded-tr-lg rounded-bl-lg group-hover:bg-primary-100 group-hover:text-primary-700 dark:group-hover:bg-primary-800 dark:group-hover:text-primary-200"
            >Visit →</span
          >
        </div>
        <img
          class="object-contain h-12 max-w-xs"
          :src="logo.src"
          alt="logo.name"
        />
      </NuxtLink>
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
