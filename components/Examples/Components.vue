<template>
  <div class="divide-y-2 divide-gray-200">
    <ExamplesTwoCols class="py-12" label="Modal">
      <template #content>
        <p>The modal component description.</p>
      </template>
      <template #default>
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
      </template>
    </ExamplesTwoCols>
    <ExamplesTwoCols class="py-12" label="Dropdown">
      <template #content>
        <p>The dropdown component description.</p>
      </template>
      <template #default>
        <VDropdown
          button-label="Dropdown Menu"
          variant="primary"
          :menu-items="dropdownItems"
        />
      </template>
    </ExamplesTwoCols>
    <ExamplesTwoCols class="py-12" label="Alert">
      <template #content>
        <p>The alert component description.</p>
      </template>
      <template #default>
        <VInput
          v-model="alertContent"
          label="Alert Content"
          type="text"
          placeholder="Danger Will Robinson!
          "
        />
        <div class="mt-4 space-x-2">
          <p class="block mb-1 text-sm font-medium text-gray-700">Alert Type</p>
          <VButton
            v-for="type in alertTypes"
            :key="type.type"
            @click="alertType = type.type"
            ><component class="w-5 h-5" :is="type.icon"
          /></VButton>
        </div>
        <VAlert class="mt-4" :type="alertType">{{ alertContent }}</VAlert>
      </template>
    </ExamplesTwoCols>
  </div>
</template>

<script setup>
import {
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
} from '@heroicons/vue/solid'

const router = useRouter()

// Modal
const modalContent = ref('Here is some modal content.')
const isModalOpen = ref(false)

// Dropdown
const dropdownItems = [
  {
    label: 'Console Log',
    action: () => {
      console.log('Dropdown button clicked!')
    },
  },
  {
    label: 'Visit Protected Page',
    action: () => {
      router.push('/protected-page')
    },
  },
]

// Alert
const alertTypes = [
  { icon: InformationCircleIcon, type: 'info' },
  { icon: ExclamationIcon, type: 'warning' },
  { icon: XCircleIcon, type: 'error' },
  { icon: CheckCircleIcon, type: 'success' },
]
const alertType = ref('warning')
const alertContent = ref('Here is some alert content.')
</script>
