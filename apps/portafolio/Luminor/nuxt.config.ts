// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
    middleware: 'app/middleware'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Luminor is a website specializing in buying and renting properties, connecting buyers and tenants with trusted property owners.' },
        { name: 'keywords', content: 'RealEstate, Buy, Rent, Homes, Apartment, Listings, Sale, Rental, Housing' },
        { name: 'author', content: 'themesflat.com' }
      ],
      link: [
        { rel: 'stylesheet', href: '/css/bootstrap.css' },
        { rel: 'stylesheet', href: '/css/animate.min.css' },
        { rel: 'stylesheet', href: '/css/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/odometer.min.css' },
        { rel: 'stylesheet', href: '/css/sib-styles.css' },
        { rel: 'stylesheet', href: '/css/styles.css' },
        { rel: 'stylesheet', href: '/font/fonts.css' },
        { rel: 'stylesheet', href: '/icons/icomoon/style.css' },
        { rel: 'shortcut icon', href: '/images/favicon.svg' },
        { rel: 'apple-touch-icon-precomposed', href: '/images/favicon.svg' }
      ],
      script: [
        { src: '/js/jquery.min.js', tagPosition: 'bodyClose' },
        { src: '/js/jquery.nice-select.min.js', tagPosition: 'bodyClose' },
        { src: '/js/bootstrap.min.js', tagPosition: 'bodyClose' },
        { src: '/js/swiper-bundle.min.js', tagPosition: 'bodyClose' },
        { src: '/js/carousel.js', tagPosition: 'bodyClose' },
        { src: '/js/counter.js', tagPosition: 'bodyClose' },
        { src: '/js/isotope.pkgd.min.js', tagPosition: 'bodyClose' },
        { src: '/js/magnific-popup.min.js', tagPosition: 'bodyClose' },
        { src: '/js/jquery.fancybox.js', tagPosition: 'bodyClose' },
        { src: '/js/gsap.min.js', tagPosition: 'bodyClose' },
        { src: '/js/SplitText.min.js', tagPosition: 'bodyClose' },
        { src: '/js/ScrollTrigger.min.js', tagPosition: 'bodyClose' },
        { src: '/js/ScrollSmooth.js', tagPosition: 'bodyClose' },
        { src: '/js/splitting.min.js', tagPosition: 'bodyClose' },
        { src: '/js/handleGsap.js', tagPosition: 'bodyClose' },
        { src: '/js/infinityslide.js', tagPosition: 'bodyClose' },
        { src: '/js/parallaxie.js', tagPosition: 'bodyClose' },
        { src: '/js/odometer.min.js', tagPosition: 'bodyClose' },
        // Map scripts removed - will be loaded only on pages that need them
        { src: '/js/main.js', tagPosition: 'bodyClose' }
      ]
    }
  },

  // Ignore source map warnings
  nitro: {
    routeRules: {
      '/**/*.map': { redirect: { statusCode: 404 } }
    }
  },

  // Additional route rules to ignore .map files and redirect /site
  routeRules: {
    '/css/**/*.map': { redirect: { statusCode: 404 } },
    '/js/**/*.map': { redirect: { statusCode: 404 } },
    '/site/**/*.map': { redirect: { statusCode: 404 } },
    '/site': { redirect: { to: '/', statusCode: 301 } }
  },

  modules: ['@nuxt/image']
})