# Nuxt 3 / Directus Starter

## ⚠️ WORK IN PROGRESS - DO NOT USE ⚠️

Opiniated starter template for Nuxt 3 using Directus 9 as a backend

**[View The Demo Site](https://directus-nuxt3-starter.netlify.app/)**

## Stack

Nuxt 3

Directus SDK

Tailwind CSS

Plugins

- Typography
- Forms
- Aspect Ratio
- Line Clamp

Headless UI

Heroicons

Pinia

### Directus 9 Support

Can be used with Cloud or Self-Hosted versions

- Wrapped Directus SDK into Nuxt Plugin
- Auth Store

Great Examples of

- Authentication
- Fetching content from Directus
- Protecting content with Nuxt Middleware

### Common Utilities

ESLint and Prettier Config

## Directus Setup

**1 Register for a free Directus Cloud account**
https://directus.cloud/register

**2 Create a new project**

- Directus has a free Community Cloud tier that's perfect for tinkering

3 Create pages collection
title
slug
content
image

4 Set public permissions for
Files
Pages

TODO
Seed starter

## Nuxt Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
