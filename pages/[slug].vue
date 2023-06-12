<template>
  <ClientOnly fallback-tag="span" fallback="Loading page...">
    <div class="max-w-3xl px-6 py-12 mx-auto space-y-8">
      <NuxtLink
        class="flex items-center font-bold text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
        to="/"
      >
        <span class="mr-2 text-xl">←</span>
        Back to Home Page
      </NuxtLink>
      <div class="relative pt-48 pb-10 overflow-hidden shadow-xl rounded-2xl">
        <img
          v-if="page.image"
          class="absolute inset-0 object-cover w-full h-full"
          :src="fileUrl(page.image)"
        />
        <div class="absolute inset-0 bg-primary-500 mix-blend-multiply" />
        <div class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-80" />
        <div class="relative px-8">
          <div class="relative text-lg font-medium text-white md:flex-grow">
            <h1 class="text-6xl font-bold drop-shadow-sm">{{ page.title }}</h1>
          </div>
        </div>
      </div>
      <div class="prose dark:prose-invert" v-html="page.content" />
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const { $directus } = useNuxtApp()
const { fileUrl } = useFiles()
const { params } = useRoute()

const page = ref({})

onMounted(async () => {
  const { data, error } = await $directus
    .items('pages')
    .readByQuery({ filter: { slug: params.slug }, limit: 1 })

  if (error) {
    // Handle the error, e.g., show an error message
    console.error(error)
  } else {
    if (data && data.length > 0) {
      page.value.title = data[0].title
      page.value.content = data[0].content
      page.value.image = data[0].image
    } else {
      // Handle the case where the data is empty or not found
      console.error('Page data not found')
    }
  }
})

useHead(() => ({
  title: page.value.title || '',
}))
</script>
