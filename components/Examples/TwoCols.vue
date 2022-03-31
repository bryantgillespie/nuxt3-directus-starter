<template>
  <section class="relative py-12 space-y-6">
    <h2 class="text-2xl font-extrabold text-gray-700 dark:text-gray-200">
      {{ label }}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="prose dark:prose-invert"><slot name="content" /></div>
      <div>
        <slot />
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>
