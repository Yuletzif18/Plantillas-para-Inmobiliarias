<template>
  <div />
</template>
<script setup>
const route = useRoute()
if (route.path === '/') {
  await navigateTo('/site')
} else {
  // Opcional: podríamos lanzar un 404 aquí
  await navigateTo('/site')
}
</script>
