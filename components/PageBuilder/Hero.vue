<script setup lang="ts">
import { PropType } from 'vue'
type Hero = {
  id: string
  headline: string
  content: string
  image: string
  buttons: Array<{
    label: string
    url: string
    open_in_new_window: boolean
  }>
}
const props = defineProps({
  data: {
    type: Object as PropType<Hero>,
    required: true,
  },
})

const { fileUrl } = useFiles()
</script>
<template>
  <section class="">
    <div class="container flex flex-col items-center mx-auto md:flex-row">
      <div
        class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
      >
        <h1
          class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
        >
          {{ data.headline }}
        </h1>
        <div class="mb-8 prose" v-html="data.content" />

        <div class="flex justify-center">
          <NuxtLink
            v-for="button in data.buttons"
            :key="button.id"
            :href="button.url"
            class="btn btn-primary"
          >
            {{ button.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <img
          class="object-cover object-center transition duration-150 rounded-lg shadow-lg shadow-primary-300 hover:rotate-3"
          alt="hero"
          :src="fileUrl(data.image)"
        />
      </div>
    </div>
  </section>
</template>
