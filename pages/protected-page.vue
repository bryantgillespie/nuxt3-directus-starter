<template>
  <div class="max-w-3xl px-6 py-12 mx-auto space-y-8">
    <NuxtLink
      class="flex items-center font-bold text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
      to="/"
    >
      <span class="mr-2 text-xl">←</span>
      Back to Home Page
    </NuxtLink>
    <h1 class="text-4xl font-bold dark:text-white">
      This page is protected by Nuxt 3 Route Middleware.
    </h1>
    <img
      class="object-contain shadow-md max-h-56 rounded-3xl"
      src="https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif"
    />
    <div class="prose dark:prose-invert">
      Learn more about
      <a
        href="https://v3.nuxtjs.org/docs/directory-structure/middleware"
        target="_blank"
        >Nuxt 3 Route Middleware</a
      >
      on their documentation.
    </div>
    <VButton class="block" @click="auth.logout()">Logout</VButton>
  </div>
</template>

<script setup>
import { useAuth } from '~~/store/auth'

const auth = useAuth()

// Set middleware
definePageMeta({
  middleware: 'auth',
})

// Define the page title
useHead({
  title: 'Protected Content',
})
</script>
