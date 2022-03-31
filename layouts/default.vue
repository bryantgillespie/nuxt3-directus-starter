<template>
  <div class="min-h-screen transition duration-150 bg-white dark:bg-slate-900">
    <slot />
  </div>
</template>
<script>
// Have use the Options API here because the scrollToTop property is not working inside <script setup> definePageMeta()
export default {
  scrollToTop: true,
}
</script>
