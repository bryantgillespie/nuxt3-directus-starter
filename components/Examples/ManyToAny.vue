<template>
  <ExamplesTwoCols label="Many To Any (Page Builder)">
    <template #content>
      <p>
        The
        <NuxtLink
          href="https://docs.directus.io/configuration/data-model/relationships.html#many-to-any-m2a"
          target="_blank"
          >Directus Many-To-Any (M2A) relationship</NuxtLink
        >
        allows you to link items from the parent collection to any item in any
        collection within your database. So...basically a page builder.
      </p>
      <p>
        The
        <code>[slug].vue</code> component within the
        <code>/pages</code> directory shows you how to fetch the page builder
        data and render it using Nuxt.
      </p>
    </template>
    <template #default>
      <div v-if="loading" class="flex items-center justify-center flex-1">
        <VLoading class="w-24 h-24 text-primary-600" />
      </div>
      <div
        v-else-if="pages.length === 0"
        class="relative block w-full px-12 py-16 text-center border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <p class="block mt-2 font-medium text-gray-900 dark:text-gray-200">
          No pages founded.
        </p>
      </div>
      <ul class="space-y-6" v-else-if="pages.length > 0">
        <li v-for="page in pages" :key="page.slug">
          <ExamplesPageCard
            :path="`/${page.slug}`"
            :image="fileUrl(page.image)"
            :title="page.title"
            :description="`/${page.slug}`"
          />
        </li>
      </ul>
    </template>
  </ExamplesTwoCols>
</template>

<script setup>
const { $directus } = useNuxtApp()
const { fileUrl } = useFiles()

const pages = ref([])
const loading = ref(false)

async function fetchPages() {
  loading.value = true
  try {
    const { data } = await $directus.items('pages').readByQuery({
      filter: {
        status: { _eq: 'published' },
      },
      limit: 5,
    })
    pages.value = data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

await fetchPages()
</script>
