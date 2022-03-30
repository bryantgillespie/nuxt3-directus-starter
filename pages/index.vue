<template>
  <div class="max-w-4xl px-6 py-12 mx-auto space-y-8">
    <header
      class="relative overflow-hidden rounded-tr rounded-bl bg-gradient-to-br from-slate-900 to-slate-700 shadow-primary-600 rounded-tl-3xl rounded-br-3xl"
    >
      <h1 class="p-8 text-4xl font-extrabold text-white">
        {{ title }}
      </h1>
      <div class="w-full h-4 bg-primary-500" />
    </header>
    <div>
      <VAlert type="warning">
        <strong>Warning:</strong>
        Nuxt 3 is still in beta and is not recommended for production use.
      </VAlert>
      <ExamplesLogos />
    </div>

    <div id="examples" class="relative flex-1 divide-y-2 divide-gray-200">
      <h2
        class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
      >
        Examples of Functionality
      </h2>
      <ExamplesContent id="content" class="py-12" />
      <ExamplesAuth id="authentication" class="py-12" />
      <ExamplesApiRoutes id="api" class="py-12" />
    </div>
  </div>
</template>

<script setup>
const title = 'Directus & Nuxt 3 Starter'
useMeta({
  title: title,
})
</script>
