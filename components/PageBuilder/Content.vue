<script setup lang="ts">
import { PropType } from 'vue'
type Content = {
  id: string
  headline: string
  content: string
}
const props = defineProps({
  data: {
    type: Object as PropType<Content>,
    required: true,
  },
})
</script>
<template>
  <div>
    <h2
      class="mt-1 text-4xl font-bold font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-pink-500 sm:text-5xl lg:text-6xl"
    >
      {{ data.headline }}
    </h2>

    <div
      class="mx-auto mt-8 prose md:prose-lg dark:prose-invert"
      v-html="data.content"
    />
  </div>
</template>
