<template>
  <div id="wrapper">
    <div class="container">
      <h2 class="headline">Términos y condiciones del proyecto {{ route.params.id }}</h2>
      <p>Página canónica: {{ route.params.canonico }}</p>
      <p>Información legal y términos de uso del proyecto.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
</script>
