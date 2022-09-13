<template>
  <div class="divide-y-2 divide-gray-200 dark:divide-gray-800">
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
          <div class="prose dark:prose-invert">
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
        <VLabel label="Example Usage" />
        <pre>{{ alertSample }}</pre>
      </template>
      <template #default>
        <VInput
          v-model="alertContent"
          label="Alert Content"
          type="text"
          placeholder="Danger Will Robinson!
          "
        />
        <div class="mt-4">
          <VLabel label="Alert Type" />
          <div class="space-x-2">
            <VButton
              v-for="type in alertTypes"
              :key="type.type"
              @click="alertType = type.type"
            >
              <component class="w-5 h-5" :is="type.icon" />
            </VButton>
          </div>
        </div>
        <VAlert class="mt-4" :type="alertType">{{ alertContent }}</VAlert>
      </template>
    </ExamplesTwoCols>
    <ExamplesTwoCols class="py-12" label="Buttons">
      <template #content>
        <p>The button component description.</p>
        <VLabel label="Example Usage" />
        <pre>{{ buttonSample }}</pre>
      </template>
      <template #default>
        <VLabel label="Button Variants" />
        <div class="flex flex-wrap">
          <div
            v-for="button in ['primary', 'default', 'outline', 'danger']"
            :key="button"
            class="p-2"
          >
            <VButton :variant="button">
              {{ button }}
            </VButton>
          </div>
        </div>
      </template>
    </ExamplesTwoCols>
    <ExamplesTwoCols class="py-12" label="File Uploads">
      <template #content>
        <p>
          Note - You have to be logged in to the example user above before you
          can upload.
        </p>
        <VLabel label="Example Usage" />
        <pre>{{ uploadSample }}</pre>
      </template>
      <template #default>
        <VUpload
          v-model="files"
          :size-limit-mb="1"
          accept="image/png, image/jpeg"
        />
        <div
          class="flex flex-col p-4 mt-4 rounded-lg bg-gradient-to-b from-primary-600 to-primary-900"
        >
          <pre
            class="h-full p-4 overflow-x-auto text-sm text-gray-100 whitespace-pre bg-gray-800 border-2 rounded-lg border-primary-800"
            >{{ files }}</pre
          >
        </div>
      </template>
    </ExamplesTwoCols>
  </div>
</template>

<script setup>
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/solid'

import {
  uploadSample,
  buttonSample,
  alertSample,
} from '~/examples/code-samples'

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
  { icon: ExclamationTriangleIcon, type: 'warning' },
  { icon: XCircleIcon, type: 'error' },
  { icon: CheckCircleIcon, type: 'success' },
]
const alertType = ref('warning')
const alertContent = ref('Here is some alert content.')

// Upload
const files = ref([])
</script>
