import { BaseStorage, Directus } from '@directus/sdk'
import { useAuth } from '~~/store/auth'
import Cookies from 'universal-cookie'

// Make sure you review the Directus SDK documentation for more information
// https://docs.directus.io/reference/sdk.html

export default defineNuxtPlugin(async (nuxtApp) => {
  const { directusUrl } = useRuntimeConfig()

  const auth = useAuth()

  // Cookie Helpers using universal-cookie package because there's currently some issue with the useCookie composable not being available at the right moment
  const getCookie = (key: string) => {
    let cookie
    if (process.server) {
      cookie = new Cookies(nuxtApp.ssrContext?.event.node.req.headers.cookie)
    } else {
      cookie = new Cookies()
    }
    return cookie.get(key)
  }

  const setCookie = (key: string, value: string) => {
    let cookie
    if (process.server) {
      cookie = new Cookies(nuxtApp.ssrContext?.event.node.req.headers.cookie)
    } else {
      cookie = new Cookies()
    }
    return cookie.set(key, value)
  }
  const removeCookie = (key: string) => {
    let cookie
    if (process.server) {
      cookie = new Cookies(nuxtApp.ssrContext?.event.node.req.headers.cookie)
    } else {
      cookie = new Cookies()
    }
    return cookie.remove(key)
  }

  // Create a new storage class to use with the SDK
  // Needed for the SSR to play nice with the SDK
  class CookieStorage extends BaseStorage {
    deletedKeys = new Set<string>()
    get(key) {
      return getCookie(key)
    }
    set(key, value) {
      return setCookie(key, value)
    }
    delete(key) {
      return removeCookie(key)
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
    try {
      // Try to fetch the user data
      const user = await directus.users.me.read({
        fields: ['*'],
      })
      // Update the auth store with the user data
      auth.$patch({
        loggedIn: true,
        user: user,
      })
    } catch (e) {
      console.log(e)
    }
  }

  // If the user is logged in but there's no token, reset the auth store {
  if (auth.isLoggedIn && !token) {
    console.log('Token not found, resetting auth store from ' + side)
    auth.$reset()
  }
})
