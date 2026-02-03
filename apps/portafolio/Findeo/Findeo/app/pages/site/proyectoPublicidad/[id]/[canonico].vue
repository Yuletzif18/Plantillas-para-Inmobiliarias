<template>
  <div id="wrapper">
    <div class="container">
      <h2 class="headline">Política de publicidad del proyecto {{ route.params.id }}</h2>
      <p>Página canónica: {{ route.params.canonico }}</p>
      <p>Información sobre publicidad y contenidos promocionales del proyecto.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
</script>
