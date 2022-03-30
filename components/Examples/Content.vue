<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-extrabold text-gray-700">Dynamic Content</h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="prose">
        <p>
          This example shows how to fetch content from the Directus API and
          render that using dynamic routes in Nuxt.
        </p>
        <p>
          Look for the
          <code>[slug].vue</code> component within the
          <code>/pages</code> directory.
        </p>
      </div>
      <div class="">
        <div v-if="loading" class="flex items-center justify-center flex-1">
          <LoadingIcon class="w-24 h-24 text-primary-600" />
        </div>
        <div
          v-else-if="pages.length === 0"
          class="relative block w-full px-12 py-16 text-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <p class="block mt-2 font-medium text-gray-900">
            No pages loaded. <br />What are you waiting for?
          </p>
          <VButton class="mt-2" @click="fetchPages()" variant="primary">
            Fetch Pages</VButton
          >
        </div>
        <ul class="space-y-6" v-else-if="pages.length > 0">
          <li v-for="page in pages" :key="page.slug">
            <NuxtLink
              class="flex items-center justify-between overflow-hidden transition duration-150 bg-white rounded-lg shadow-lg group hover:scale-105"
              :to="`/${page.slug}`"
            >
              <div class="flex h-24">
                <img
                  class="object-cover w-24 h-full"
                  :src="`${$config.directusUrl}/assets/${page.image}`"
                />
                <div class="p-4">
                  <p
                    class="text-2xl font-bold transition duration-150 group-hover:text-primary-600"
                  >
                    {{ page.title }}
                  </p>
                  <p class="mt-2 text-sm font-medium text-gray-500">
                    /{{ page.slug }}
                  </p>
                </div>
              </div>
              <span
                class="pr-4 text-3xl font-bold text-transparent transition duration-300 group-hover:text-primary-500"
                >→</span
              >
            </NuxtLink>
          </li>
        </ul>
        <VButton
          v-if="pages.length > 0"
          class="mt-4"
          @click="pages = []"
          variant="default"
        >
          Clear Pages</VButton
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const { $directus } = useNuxtApp()

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
</script>
