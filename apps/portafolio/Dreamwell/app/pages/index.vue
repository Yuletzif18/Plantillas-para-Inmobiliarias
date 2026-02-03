<template>
  <div></div>
</template>

<script setup>
// Redirect root to site home
onMounted(() => {
  navigateTo('/site', { replace: true })
})
</script>
