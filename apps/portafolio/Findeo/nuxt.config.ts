// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  pages: true,

  nitro: {
    publicAssets: [
      {
        dir: '../public',
        maxAge: 60 * 60 * 24 * 365
      }
    ]
  }
})
