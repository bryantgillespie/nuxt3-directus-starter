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
  <div class="">
    <h2
      class="mt-1 text-4xl font-bold tracking-tight text-center text-primary-900 sm:text-5xl lg:text-6xl"
    >
      {{ data.headline }}
    </h2>

    <div class="mx-auto mt-8 prose md:prose-lg" v-html="data.content" />
  </div>
</template>
