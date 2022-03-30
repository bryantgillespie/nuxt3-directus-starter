<template>
  <section class="py-12 space-y-6">
    <h2 class="text-2xl font-extrabold text-gray-700">Modal</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="prose">
        <p>
          The modal component is powered by Headless UI from the Tailwind folks.
        </p>
      </div>
      <div class="">
        <VInput
          v-model="modalContent"
          label="Your Modal Content"
          type="text"
          placeholder="Nuxt 3"
        />

        <VButton @click="isModalOpen = true" class="mt-2" variant="primary"
          >Open Modal</VButton
        >
        <VModal
          title="Sample Modal"
          :is-open="isModalOpen"
          @close="isModalOpen = false"
        >
          <div class="prose">
            <p>{{ modalContent }}</p>
          </div>
        </VModal>
      </div>
    </div>
  </section>
</template>

<script setup>
const modalContent = ref('Here is some modal content.')
const isModalOpen = ref(false)
</script>
