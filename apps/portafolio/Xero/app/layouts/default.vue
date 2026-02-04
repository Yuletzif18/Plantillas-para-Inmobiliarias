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
  meta: [
    { name: 'author', content: 'Xero Team' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Xero' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
  ],
  bodyAttrs: {
    class: 'yellow-skin'
  }
})

// Preloader y carga de scripts externos
onMounted(() => {
  // Lógica del preloader
  setTimeout(() => {
    const preloader = document.querySelector('.preloader')
    if (preloader) {
      preloader.style.display = 'none'
    }
  }, 1000)
  
  // Cargar scripts externos de manera segura
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }
  
  // Cargar scripts en orden
  loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
    .then(() => loadScript('/js/jquery.min.js'))
    .then(() => loadScript('/js/custom.js'))
    .catch(err => console.error('Error loading scripts:', err))
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