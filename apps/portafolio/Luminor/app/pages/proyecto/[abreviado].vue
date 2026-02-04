<script setup>
import { useNuxtApp } from '#app'
import { onMounted } from 'vue'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const abreviado = route.params.abreviado

// Configuración de la página sin layout
definePageMeta({
  layout: false,
})

// SEO para evitar indexación de páginas de redirección
useHead({
  title: 'Redirigiendo...',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Lógica de redirección
onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      const proyectoId = await $inmostore.getProyectoIdBySubdomain(abreviado)
      if (proyectoId != null && proyectoId !== '') {
        const res = await $inmostore.getProyecto(proyectoId)
        const proyecto = res.resultado
        // Redirigir a la página del proyecto
        router.replace(`/site/proyecto/${proyecto.proyectoId}/${proyecto.subdominio}`)
      } else {
        // El proyecto no existe, redirigir al inicio del sitio web
        console.warn('Proyecto no encontrado.')
        router.replace('/')
      }
    } catch (error) {
      // Error en la consulta, redirigir al inicio
      console.error('Error al obtener el proyecto:', error)
      router.replace('/')
    }
  } else {
    // El plugin PSWeb no está disponible, redirigir al inicio del sitio web
    console.error('El plugin PSWeb o $inmostore no está disponible.')
    router.replace('/')
  }
})
</script>

<template>
  <div class="redirect-page">
    <div class="tf-container">
      <div class="redirect-content text-center py_90">
        <div class="spinner mb_30">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>
        <h4 class="mb_15">Redirigiendo...</h4>
        <p class="text-body-2 text_secondary-color">
          Estás siendo redirigido a la nueva página del proyecto.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.redirect-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}
</style>
