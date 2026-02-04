// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  pages: true,

  vite: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
    build: {
      rollupOptions: {
        external: (id) => {
          if (typeof id === 'string' && id.startsWith('/img/')) {
            return true
          }
          return false
        }
      }
    }
  }
})
