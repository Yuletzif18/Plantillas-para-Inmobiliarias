<template>
  <div>
    <Header />
    <main id="main-content">
      <slot />
    </main>
    <Footer />
    <LoginModal />
    <ContactModal />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  title: 'RentUP - Portal Inmobiliario',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Portal inmobiliario líder para compra, venta y alquiler de propiedades' },
    { name: 'author', content: 'RentUP Team' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'RentUP' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
  ],
  bodyAttrs: {
    class: 'yellow-skin'
  }
})

// Preloader
onMounted(() => {
  // Lógica del preloader
  setTimeout(() => {
    const preloader = document.querySelector('.preloader')
    if (preloader) {
      preloader.style.display = 'none'
    }
  }, 1000)
})
</script>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader::after {
  content: '';
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #27ae60;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#main-content {
  min-height: calc(100vh - 200px);
}
</style>