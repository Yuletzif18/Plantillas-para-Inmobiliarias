<template>
  <div></div>
</template>

<script setup>
import { navigateTo } from '#app';
definePageMeta({ layout: 'default' });
if (process.client) {
  navigateTo('/site/inicio');
}
</script>
