<template>
  <div class="px-6 py-12 space-y-8">
    <header
      class="max-w-4xl p-8 mx-auto rounded-tr rounded-bl shadow-lg bg-gradient-to-br from-slate-900 to-slate-700 shadow-primary-600 rounded-tl-3xl rounded-br-3xl"
    >
      <h1 class="text-4xl font-extrabold text-white">
        {{ title }}
      </h1>
    </header>
    <div class="relative flex max-w-4xl mx-auto">
      <!-- <aside class="hidden md:block">
        <nav class="sticky top-0 space-y-1" aria-label="Sidebar">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'flex items-center px-3 py-2 text-sm font-medium rounded-md',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <span class="truncate">
              {{ item.name }}
            </span>
          </a>
        </nav>
      </aside> -->
      <main class="flex-1 max-w-4xl divide-y-2 divide-gray-200">
        <ExamplesContent id="content" class="py-12" />
        <!-- Demo of authentication and protected content -->
        <ExamplesAuth id="authentication" class="py-12" />
      </main>
    </div>
  </div>
</template>

<script setup>
const navigation = [{ name: 'Auth Example', href: '#authentication' }]
// Define the page title
const title = 'Directus & Nuxt 3 Starter'
useMeta({
  title: title,
})
</script>
