<template>
  <ExamplesTwoCols label="Authentication">
    <template #content>
      <p>
        This example shows how to authenticate using the Directus SDK, save the
        user to the store (provided by Pinia), and view protected content behind
        an <code>auth</code> Nuxt route middleware.
      </p>

      <div class="not-prose">
        <NuxtLink
          class="inline-flex items-center font-bold text-primary-600 group hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-400"
          to="/protected-page"
          >View Protected Content <span class="ml-2 text-xl">→</span></NuxtLink
        >
      </div>
    </template>
    <template #default>
      <div class="space-y-12">
        <!-- Login Form -->
        <div class="">
          <ExamplesLoginForm v-if="!isLoggedIn" />
          <div v-if="isLoggedIn" class="flex items-center justify-between">
            <div class="flex items-center">
              <img
                class="w-20 h-20 mr-4 border-2 rounded-3xl border-primary-300"
                :src="fileUrl(user.avatar)"
              />
              <div class="mr-4">
                <p class="text-2xl font-bold dark:text-white">
                  Welcome {{ user.first_name }}!
                </p>
                <p class="text-sm font-medium text-gray-500">
                  {{ user.email }}
                </p>
              </div>
            </div>
            <VButton variant="primary" @click="auth.logout()"> Logout</VButton>
          </div>
        </div>
        <!-- User Details -->
        <div
          class="flex flex-col p-4 rounded-lg bg-gradient-to-b from-primary-600 to-primary-900"
        >
          <p
            class="text-xl font-bold tracking-wide text-center text-primary-200"
          >
            You are currently
            <span class="text-white animate-pulse">{{
              isLoggedIn ? 'logged in 👍' : 'logged out 👎'
            }}</span>
          </p>
          <pre
            class="h-full p-4 mt-4 overflow-x-auto text-sm text-gray-100 whitespace-pre bg-gray-800 border-2 rounded-lg border-primary-800"
            >{{ user }}</pre
          >
        </div>
      </div>
    </template>
  </ExamplesTwoCols>
</template>

<script setup>
// Get user data from the store
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'
const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)
</script>
