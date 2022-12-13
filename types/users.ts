export type Avatar = {
  id: string
}

export type Role = {
  id: string
  name: string
  description?: string
  icon?: string
  enforce_tfa?: null | boolean
  external_id?: null | string
  ip_whitelist?: string[]
  app_access: boolean
  admin_access: boolean
}

export type User = {
  id: string
  status?: string
  first_name?: string
  last_name?: string
  email?: string
  token?: string
  last_login?: string
  last_page?: string
  theme?: 'auto' | 'dark' | 'light'
  role: Role
  timezone?: string
  language?: string
  avatar?: null | Avatar
  company?: string | null
  title?: string | null
  email_notifications?: boolean
  // Add any custom fields you added to directus_users collection below here so you can use autocomplete
}
