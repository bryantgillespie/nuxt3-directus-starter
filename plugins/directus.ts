import { BaseStorage, Directus } from '@directus/sdk'
import { useAuth } from '~~/store/auth'

// Make sure you review the Directus SDK documentation for more information
// https://docs.directus.io/reference/sdk.html

export default defineNuxtPlugin(async (nuxtApp) => {
  const { directusUrl } = useRuntimeConfig()

  const auth = useAuth()

  // Create a new storage class to use with the SDK
  // Needed for SSR and client side rendering
  class CookieStorage extends BaseStorage {
    get(key) {
      const cookie = useCookie(key)
      return cookie.value
    }
    set(key, value) {
      const cookie = useCookie(key)
      return (cookie.value = value)
    }
    delete(key) {
      const cookie = useCookie(key)
      return (cookie.value = null)
    }
  }

  // Create a new instance of the SDK
  const directus = new Directus(directusUrl, {
    storage: new CookieStorage(),
    auth: {
      mode: 'json',
    },
  })

  // Inject the SDK into the Nuxt app
  nuxtApp.provide('directus', directus)

  const token = await directus.auth.token
  const side = process.server ? 'server' : 'client'

  // If there's a token but we don't have a user, fetch the user
  if (!auth.isLoggedIn && token) {
    console.log('Token found, fetching user from ' + side)
    console.log('Token is', token)
    try {
      await auth.getUser()
    } catch (e) {
      console.log(e.data.message)
      console.log('Failed to fetch user from ' + side)
    }
  }

  // If the user is logged in but there's no token, reset the auth store {
  if (auth.isLoggedIn && !token) {
    console.log('Token not found, resetting auth store from ' + side)
    auth.$reset()
  }
})
