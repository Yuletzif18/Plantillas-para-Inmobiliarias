// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'app',
  pages: true,

  vite: {
    build: {
      rollupOptions: {
        external: (id) => id?.startsWith?.('/img/') || id?.startsWith?.('/css/') || id?.startsWith?.('/js/')
      }
    }
  },

  nitro: {
    preset: 'vercel',
    serveStatic: true
  },

  app: {
    baseURL: '/'
  }
})
