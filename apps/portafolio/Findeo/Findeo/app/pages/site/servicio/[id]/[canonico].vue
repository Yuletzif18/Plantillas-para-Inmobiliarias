<template>
  <div id="wrapper">
    <div class="container">
      <h2 class="headline">Servicio {{ route.params.id }}</h2>
      <p>Página canónica: {{ route.params.canonico }}</p>
      <p>Descripción del servicio relacionado al proyecto.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
</script>
