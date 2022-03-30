<template>
  <section class="relative py-12 space-y-6">
    <h2 class="text-2xl font-extrabold text-gray-700">{{ label }}</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="prose"><slot name="content" /></div>
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
