// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Configuración de directorios
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
    plugins: 'app/plugins',
    public: 'public'
  },

  // CSS Global (los estilos se importan desde el layout)
  css: [],

  // Configuración del App
  app: {
    head: {
      title: 'Inmobiliaria Dreamwell',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Encuentra la propiedad de tus sueños' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // CSS desde /public (se sirven como archivos estáticos)
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/fontawesome.min.css' },
        { rel: 'stylesheet', href: '/css/slick.min.css' },
        { rel: 'stylesheet', href: '/css/light-gallery.min.css' },
        { rel: 'stylesheet', href: '/css/jquery-ui.min.css' },
        { rel: 'stylesheet', href: '/css/odometer.css' },
        { rel: 'stylesheet', href: '/css/animate.css' },
        { rel: 'stylesheet', href: '/css/style.css' }
      ],
      script: [
        // Scripts necesarios del template (se cargarán desde public/)
        { src: '/js/jquery.min.js', body: true, defer: true },
        { src: '/js/jquery.slick.min.js', body: true, defer: true },
        { src: '/js/light-gallery.min.js', body: true, defer: true },
        { src: '/js/jquery-ui.min.js', body: true, defer: true },
        { src: '/js/odometer.js', body: true, defer: true },
        { src: '/js/wow.min.js', body: true, defer: true },
        { src: '/js/main.js', body: true, defer: true }
      ]
    }
  },

  // Variables de entorno públicas
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000/api',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Inmobiliaria Dreamwell',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'info@inmobiliaria.com',
      contactPhone: process.env.NUXT_PUBLIC_CONTACT_PHONE || '+123456789',
      contactAddress: process.env.NUXT_PUBLIC_CONTACT_ADDRESS || 'Calle Principal #123',
      social: {
        facebook: process.env.NUXT_PUBLIC_FACEBOOK_URL || '#',
        twitter: process.env.NUXT_PUBLIC_TWITTER_URL || '#',
        instagram: process.env.NUXT_PUBLIC_INSTAGRAM_URL || '#',
        linkedin: process.env.NUXT_PUBLIC_LINKEDIN_URL || '#',
        youtube: process.env.NUXT_PUBLIC_YOUTUBE_URL || '#'
      }
    }
  },

  // Módulos de Nuxt
  modules: [],

  // Configuración de build
  build: {
    transpile: []
  },

  // Configuración de routing
  router: {
    options: {
      strict: false
    }
  }
})
