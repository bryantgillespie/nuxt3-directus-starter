<template>
  <div class="px-6 py-12 space-y-8">
    <header
      class="relative max-w-4xl mx-auto overflow-hidden rounded-tr rounded-bl bg-gradient-to-br from-slate-900 to-slate-700 shadow-primary-600 rounded-tl-3xl rounded-br-3xl"
    >
      <h1 class="p-8 text-4xl font-extrabold text-white">
        {{ title }}
      </h1>
      <div class="w-full h-4 bg-primary-500" />
    </header>
    <ExamplesLogos />
    <div
      class="relative flex-1 max-w-4xl mx-auto border-t-2 border-gray-200 divide-y-2 divide-gray-200"
    >
      <ExamplesContent id="content" class="py-12" />
      <ExamplesAuth id="authentication" class="py-12" />
      <ExamplesApiRoutes id="api" class="py-12" />
    </div>
  </div>
</template>

<script setup>
// Define the page title
const title = 'Directus & Nuxt 3 Starter'
useMeta({
  title: title,
})
</script>
