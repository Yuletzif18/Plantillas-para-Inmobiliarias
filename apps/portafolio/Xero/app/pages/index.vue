<template>
  <div class="loading-container">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p class="loading-text">Cargando RentUP...</p>
    </div>
  </div>
</template>

<script setup>
// Redirección automática a /site
navigateTo('/site', { replace: true })

useHead({
  title: 'RentUP - Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Portal inmobiliario líder para compra, venta y alquiler de propiedades' }
  ]
})
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  text-align: center;
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loading-text {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>