<template>
  <div id="wrapper" class="counter-scroll">
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
/* Estilos específicos del layout (si se requieren) */
</style>
