import { BaseStorage, Directus } from '@directus/sdk'
import { useAuth } from '~~/store/auth'
import { readRawCookies, writeClientCookie, writeServerCookie } from './cookies'

// Make sure you review the Directus SDK documentation for more information
// https://docs.directus.io/reference/sdk.html
export default defineNuxtPlugin(async (nuxtApp) => {
  const { directusUrl } = useRuntimeConfig()
  const auth = useAuth()

  // Create a new storage class to use with the SDK
  // Needed for the SSR to play nice with the SDK
  class CookieStorage extends BaseStorage {
    get(key) {
      const cookies = readRawCookies(
        process.server ? nuxtApp.ssrContext.req : null
      )
      return cookies[key]
    }
    set(key, value) {
      if (process.client) {
        writeClientCookie(key, value)
      } else if (process.server) {
        writeServerCookie(nuxtApp.ssrContext.res, key, value)
      }
    }
    delete(key) {
      if (process.client) {
        writeClientCookie(key, null)
      } else if (process.server) {
        writeServerCookie(nuxtApp.ssrContext.res, key, null)
      }
    }
  }

  // Create a new instance of the SDK
  const directus = new Directus(directusUrl, {
    storage: new CookieStorage(),
    auth: {
      mode: 'json',
    },
  })

  //   // Inject the SDK into the Nuxt app
  nuxtApp.provide('directus', directus)

  const side = process.server ? 'server' : 'client'
  const token = await directus.auth.token

  //   If there's a token but we don't have a user, fetch the user
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
