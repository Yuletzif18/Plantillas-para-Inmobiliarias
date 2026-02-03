<template>
  <div>
    <!-- Redirector para proyectos - redirige a la ruta correcta del proyecto -->
  </div>
</template>

<script setup>
const route = useRoute()
const abreviado = route.params.abreviado

// Redirigir al proyecto correspondiente
// En una implementación real, aquí se buscaría el ID y canonical del proyecto
// basándose en el código abreviado
navigateTo(`/site/proyectos`)
</script>
