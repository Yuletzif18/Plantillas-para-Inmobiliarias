<template>
  <div id="wrapper">
    <div class="container">
      <h2 class="headline">Declaración legal del proyecto {{ route.params.id }}</h2>
      <p>Página canónica: {{ route.params.canonico }}</p>
      <p>Información legal asociada al proyecto.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
</script>
