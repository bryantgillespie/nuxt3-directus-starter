<template>
  <div class="relative max-w-4xl px-6 pt-12 pb-24 mx-auto space-y-8">
    <header
      class="relative overflow-hidden rounded-tr rounded-bl bg-gradient-to-br from-slate-900 to-slate-700 shadow-primary-600 rounded-tl-3xl rounded-br-3xl"
    >
      <h1 class="p-8 text-4xl font-extrabold text-white">
        {{ title }}
      </h1>
      <div
        class="w-full h-4 bg-gradient-to-r from-primary-700 via-primary-600 to-pink-600"
      />
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
    <div id="components" class="relative flex-1 divide-y-2 divide-gray-200">
      <h2
        class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
      >
        Demo of Components
      </h2>
      <ExamplesComponents />
    </div>
    <footer
      class="h-56 rounded-tr rounded-bl bg-gray-50 rounded-tl-3xl rounded-br-3xl"
    ></footer>
  </div>
</template>

<script setup>
const title = 'Directus & Nuxt 3 Starter'
useMeta({
  title: title,
})
</script>
