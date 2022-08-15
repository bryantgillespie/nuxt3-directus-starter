export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
})
