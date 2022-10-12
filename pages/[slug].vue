<script setup lang="ts">
// Import the components you need to use in your page builder
import PageBuilderHero from '~~/components/PageBuilder/Hero.vue'
import PageBuilderContent from '~~/components/PageBuilder/Content.vue'
import PageBuilderFeatures from '~~/components/PageBuilder/Features.vue'

// Map the page builder collection names to the components
const map = {
  page_builder_hero: PageBuilderHero,
  page_builder_content: PageBuilderContent,
  page_builder_features: PageBuilderFeatures,
}

type Page = {
  id: string
  title: string
  slug: string
  image: string
  page_builder: Array<{
    id: string
    collection: string
    item: Object
  }>
}

const { $directus } = useNuxtApp()
const { params, path } = useRoute()

// Fetch the page data from the Directus API using the Nuxt useAsyncData composable
// https://v3.nuxtjs.org/docs/usage/data-fetching#useasyncdata
const {
  data: page = {} as Page,
  pending,
  error,
} = await useAsyncData(
  path,
  () => {
    return $directus.items('pages').readByQuery({
      filter: {
        slug: { _eq: params.slug },
      },
      fields: ['*.item.*', '*.collection'],
      limit: 1,
    })
  },
  {
    transform: (data) => data.data[0],
    pick: ['title', 'page_builder', 'slug', 'id'],
  }
)

useHead({
  title: page.value.title,
})
</script>

<template>
  <div>
    <template v-for="block in page.page_builder" :key="block.item.id">
      <component :is="map[block.collection]" :data="block.item" />
    </template>
  </div>
</template>
