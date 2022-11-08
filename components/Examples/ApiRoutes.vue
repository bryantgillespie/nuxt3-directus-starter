<template>
  <ExamplesTwoCols label="Nuxt API Routes">
    <template #content>
      <p>This example shows how to use Nuxt API routes for business logic.</p>
      <p>
        While their marketplace is being developed, Directus Cloud doesn't
        support custom extensions to create your own API routes unless you're on
        the Enterprise plan. So you can use Nuxt API Routes to secure your other
        backend logic like connecting to Stripe or other third-party APIs.
      </p>
    </template>
    <template #default>
      <div class="space-y-8">
        <form @submit.prevent="sayHello" class="relative">
          <VInput
            v-model="name"
            label="Your Name"
            type="text"
            placeholder="Directus + Nuxt 3 = ❤️"
          />
          <VButton type="submit" class="mt-2" variant="primary">
            <p v-if="loading">
              <VLoading class="w-6 h-6" />
            </p>
            <p v-else>Say Hello</p>
          </VButton>
        </form>
        <div
          class="flex flex-col p-4 rounded-lg bg-gradient-to-b from-primary-600 to-primary-900"
        >
          <pre
            class="h-full p-4 overflow-x-auto text-sm text-gray-100 whitespace-pre bg-gray-800 border-2 rounded-lg border-primary-800"
            >{{ response }}</pre
          >
        </div>
      </div>
    </template>
  </ExamplesTwoCols>
</template>

<script setup>
const name = ref('')
const response = ref({})
const loading = ref(false)

// Call the API route using the Nuxt useFetch composable
// https://v3.nuxtjs.org/docs/usage/data-fetching#usefetch
async function sayHello() {
  loading.value = true
  const { data } = await useFetch('/api/hello', {
    params: {
      name: name.value,
    },
    // The useFetch composable caches the response, you can disable that by passing initalCache: false as an option. Make sure you check out all the documentation for it.
    initialCache: false,
    // Or if you want to use the cache, you can pass in a key to useFetch
    // key: name.value,
  })

  // As an alternative, you could also use the $fetch helper instead of the useFetch composable. The response is not cached.
  //   const { data } = await $fetch('/api/hello', {
  //     params: {
  //       name: name.value,
  //     },
  //   })

  response.value = data.value
  loading.value = false
}
</script>
