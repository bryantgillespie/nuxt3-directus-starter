<template>
  <button
    type="button"
    :class="[
      'btn',
      {
        'btn-default': variant === 'default',
        'btn-primary': variant === 'primary',
        'btn-outline': variant === 'outline',
        'btn-danger': variant === 'danger',
      },
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<style>
/* Using Tailwind @apply so we can easily re-use these styles for other 'button' based components like VDropdown */
.btn {
  @apply inline-flex items-center px-6 py-2 text-base font-medium  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed;
}
.btn-default {
  @apply text-primary-700 bg-primary-100 border border-transparent hover:bg-primary-200;
}
.btn-primary {
  @apply text-white bg-primary-600 border border-transparent hover:bg-primary-700;
}
.btn-outline {
  @apply text-primary-700 bg-transparent border border-primary-500 hover:bg-primary-100;
}
.btn-danger {
  @apply text-red-700 bg-red-100 border border-transparent hover:bg-red-200;
}
</style>
