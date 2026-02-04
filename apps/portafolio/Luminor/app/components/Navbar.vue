<template>
  <!-- Header -->
  <header class="header style-default header-sticky">
    <div class="tf-container w-xxl">
      <div class="row">
        <div class="col-12">
          <div class="header-inner">
            <NuxtLink to="/" class="site-logo">
              <img class="logo_header" :alt="WebsiteName || 'logo'" width="292" height="48" src="/images/logo/logo.svg">
            </NuxtLink>

            <nav class="main-menu">
              <ul class="navigation">
                <li><NuxtLink to="/">Inicio</NuxtLink></li>
                <li><NuxtLink to="/site/nosotros">Nosotros</NuxtLink></li>
                <li><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
                <li><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
                <li><NuxtLink to="/site/servicios">Servicios</NuxtLink></li>
                <li><NuxtLink to="/site/ofrece">Ofrece tu Propiedad</NuxtLink></li>
                <li><NuxtLink to="/site/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/site/contacto">Contacto</NuxtLink></li>
              </ul>
            </nav>

            <div class="header-right d-flex align-items-center gap_20">
              <button class="header-menu-mobile" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile" aria-controls="menu-mobile">
                <i class="icon icon-menu-bold"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div class="offcanvas offcanvas-start mobile-menu" tabindex="-1" id="menu-mobile" aria-labelledby="menu-mobileLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="menu-mobileLabel">
        <img :src="'/images/logo/logo.svg'" :alt="WebsiteName || 'logo'">
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <nav class="mobile-navigation">
        <ul>
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/site/nosotros">Nosotros</NuxtLink></li>
          <li><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
          <li><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
          <li><NuxtLink to="/site/servicios">Servicios</NuxtLink></li>
          <li><NuxtLink to="/site/ofrece">Ofrece tu Propiedad</NuxtLink></li>
          <li><NuxtLink to="/site/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/site/contacto">Contacto</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { onMounted, ref } from 'vue'

const { $psweb, $inmostore } = useNuxtApp()
const WebsiteName = ref('')

onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      const res = await $inmostore.getSetting('websitename')
      if (res?.operacion?.codigo == 1) console.error('API: ' + res.operacion.mensaje)
      WebsiteName.value = res?.resultado || res?.Resultado || '---'
    } catch (error) {
      console.error('Error obteniendo WebsiteName:', error)
    }
  } else {
    console.error('El plugin PSWeb o InmoStore no está disponible.')
  }
})
</script>

<style scoped>
/* Estilos del Navbar si se requieren */
</style>