<template>
  <div class="relative max-w-4xl px-6 pt-12 pb-24 mx-auto space-y-8">
    <header
      class="relative overflow-hidden rounded-tr rounded-bl bg-gradient-to-br from-slate-900 to-slate-700 shadow-primary-600 rounded-tl-3xl rounded-br-3xl"
    >
      <div class="md:flex md:justify-between">
        <h1 class="px-8 py-6 text-4xl font-extrabold text-white">
          {{ title }}
        </h1>
        <div class="flex items-center justify-end p-4 space-x-2">
          <NuxtLink
            to="https://github.com/bryantgillespie/nuxt3-directus-starter"
            target="_blank"
            class="p-1 text-primary-200 hover:text-primary-400"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
          </NuxtLink>
          <ExamplesDarkModeToggle
            class="text-primary-200 hover:text-primary-400"
          />
        </div>
      </div>
      <div
        class="w-full h-4 bg-gradient-to-r from-primary-700 via-primary-600 to-pink-600"
      />
    </header>

    <div>
      <VAlert type="warning">
        <strong>Warning:</strong>
        Nuxt 3 is currently still in Release Candiate so I wouldn't recommend it
        for production use because of possible breaking changes.
      </VAlert>
      <ExamplesLogos />
    </div>

    <div
      id="examples"
      class="relative flex-1 divide-y-2 divide-gray-200 dark:divide-gray-800"
    >
      <h2
        class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
      >
        Examples of Functionality
      </h2>
      <ExamplesContent id="content" class="py-12" />
      <ExamplesAuth id="authentication" class="py-12" />
      <ExamplesApiRoutes id="api" class="py-12" />
    </div>
    <div
      id="components"
      class="relative flex-1 divide-y-2 divide-gray-200 dark:divide-gray-800"
    >
      <h2
        class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
      >
        Demo of Components
      </h2>
      <ExamplesComponents />
    </div>
    <footer
      class="relative rounded-tr rounded-bl md:flex md:justify-between bg-gray-50 dark:bg-gray-800 rounded-tl-3xl rounded-br-3xl"
    >
      <div class="p-8">
        <h1 class="text-4xl font-extrabold dark:text-white">
          {{ title }}
        </h1>
        <div class="mt-4 text-gray-700 dark:text-gray-200">
          <p>Created by Bryant Gillespie</p>
          <NuxtLink to="https://twitter.com/bryantgillespie" target="_blank"
            >@bryantgillespie</NuxtLink
          >
        </div>
      </div>

      <div class="flex items-center justify-end p-4 space-x-2">
        <NuxtLink
          to="https://github.com/bryantgillespie/nuxt3-directus-starter"
          target="_blank"
          class="p-1 dark:text-primary-200 dark:hover:text-primary-400 text-primary-700 hover:text-primary-900"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
            ></path>
          </svg>
        </NuxtLink>
        <ExamplesDarkModeToggle
          class="dark:text-primary-200 dark:hover:text-primary-400 text-primary-700 hover:text-primary-900"
        />
      </div>
    </footer>
  </div>
</template>

<script setup>
const title = 'Directus & Nuxt 3 Starter'
useHead({
  title: title,
})
</script>
