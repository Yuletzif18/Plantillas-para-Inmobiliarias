<template>
  <div>
    <section>
      <div class="cs_height_50 cs_height_lg_50"></div>
      <div class="container">
        <ol class="breadcrumb cs_mb_37">
          <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
          <li class="breadcrumb-item active">{{ page.titulo || 'Página' }}</li>
        </ol>

        <div v-if="loading" class="text-center py-5">
          <p>Cargando página...</p>
        </div>

        <div v-else-if="!page.id" class="text-center py-5">
          <h2>Página no encontrada</h2>
          <NuxtLink to="/site" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 cs_mt_30">
            <span class="cs_btn_text">Volver al inicio</span>
          </NuxtLink>
        </div>

        <template v-else>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <h1 class="cs_fs_48 cs_semibold cs_mb_40">{{ page.titulo }}</h1>
              <div class="cs_custom_page_content" v-html="page.contenido"></div>
            </div>
          </div>
        </template>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const canonico = route.params.canonico

const loading = ref(true)
const page = ref({})

const loadPage = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch(`/api/paginas/${id}`)
    // page.value = response.data
    
    page.value = {
      id,
      canonico,
      titulo: 'Página Personalizada',
      contenido: '<p>Contenido de la página personalizada.</p>'
    }
  } catch (error) {
    console.error('Error cargando página:', error)
    page.value = {}
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadPage()
})

useHead({
  title: () => page.value.titulo || 'Página',
  meta: [
    { name: 'description', content: () => page.value.descripcion || 'Página personalizada' }
  ]
})
</script>
