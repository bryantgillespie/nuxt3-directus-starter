import { ref, Ref, watch } from 'vue'
import { appendHeader } from 'h3'
import type { CompatibilityEvent } from 'h3'
import {
  parse,
  serialize,
  CookieParseOptions,
  CookieSerializeOptions,
} from 'cookie-es'
import destr from 'destr'

// In this file, we're hijacking most of the Nuxt useCookie() composable code without the actual composable. This is because there's been some weird issues with useCookie() not being available in the plugin context. This is a workaround for that.

type _CookieOptions = Omit<
  CookieSerializeOptions & CookieParseOptions,
  'decode' | 'encode'
>

export interface CookieOptions<T = any> extends _CookieOptions {
  decode?(value: string): T
  encode?(value: T): string
  default?: () => T | Ref<T>
}

export interface CookieRef<T> extends Ref<T> {}

const CookieDefaults: CookieOptions<any> = {
  path: '/',
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) =>
    encodeURIComponent(typeof val === 'string' ? val : JSON.stringify(val)),
}

export function readRawCookies(
  req,
  opts: CookieOptions = {}
): Record<string, string> | undefined {
  if (process.server) {
    return parse(req.headers.cookie || '', opts)
  } else if (process.client) {
    return parse(document.cookie, opts)
  }
}

export function serializeCookie(
  name: string,
  value: any,
  opts: CookieSerializeOptions = {}
) {
  if (value === null || value === undefined) {
    return serialize(name, value, { ...opts, maxAge: -1 })
  }
  return serialize(name, value, opts)
}

export function writeClientCookie(
  name: string,
  value: any,
  opts: CookieSerializeOptions = {}
) {
  if (process.client) {
    document.cookie = serializeCookie(name, value, opts)
  }
}

export function writeServerCookie(
  event: CompatibilityEvent,
  name: string,
  value: any,
  opts: CookieSerializeOptions = {}
) {
  if (event) {
    // TODO: Try to smart join with existing Set-Cookie headers
    appendHeader(event, 'Set-Cookie', serializeCookie(name, value, opts))
  }
}
