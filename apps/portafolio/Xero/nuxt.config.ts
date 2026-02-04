// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-08',
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'app/',
  
  devServer: {
    port: 3000,
    host: 'localhost'
  },
  
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Xero - Portal Inmobiliario',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portal inmobiliario líder para compra, venta y alquiler de propiedades' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/styles.css' }
      ]
    }
  },
  
  modules: ['@pinia/nuxt', '@nuxt/image'],
  
  runtimeConfig: {
    public: {
      siteName: 'RentUP',
      siteDescription: 'Portal inmobiliario líder'
    }
  },

  vite: {
    build: {
      rollupOptions: {
        external: (id) => id?.startsWith?.('/img/') || id?.startsWith?.('/css/') || id?.startsWith?.('/js/')
      }
    }
  },

  nitro: {
    preset: 'static'
  }
})