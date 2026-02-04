// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  pages: true,

  vite: {
    build: {
      rollupOptions: {
        external: (id: string) => {
          return id.startsWith('/img/')
        }
      }
    }
  }
})
