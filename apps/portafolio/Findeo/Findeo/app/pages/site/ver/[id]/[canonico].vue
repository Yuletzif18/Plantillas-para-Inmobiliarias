<template>
  <div id="wrapper">
    <div class="container">
      <h2 class="headline">Vista del recurso {{ route.params.id }}</h2>
      <p>Página canónica: {{ route.params.canonico }}</p>
      <p>Contenido de visualización del recurso solicitado.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
</script>
