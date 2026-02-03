<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow fadeInLeft">Nuestros Servicios</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Servicios</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div v-if="loading" class="text-center py-5">
          <p>Cargando servicios...</p>
        </div>

        <div v-else-if="services.length === 0" class="text-center py-5">
          <p>No hay servicios disponibles en este momento.</p>
        </div>

        <div v-else class="row cs_gap_y_40">
          <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6">
            <div class="cs_iconbox cs_style_4 cs_white_bg cs_radius_15 text-center cs_p_40">
              <div class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_15 cs_mb_25">
                <i :class="service.icono || 'fa-solid fa-briefcase'"></i>
              </div>
              <h3 class="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_20">{{ service.nombre }}</h3>
              <p class="cs_iconbox_subtitle cs_mb_25">{{ service.descripcionCorta }}</p>
              <NuxtLink 
                :to="`/site/servicio/${service.id}/${service.canonico}`" 
                class="cs_btn cs_style_1 cs_type_1 cs_accent_color cs_medium cs_fs_15"
              >
                <span class="cs_btn_text">Ver Más</span>
                <span class="cs_btn_icon"><i class="fa-solid fa-arrow-right"></i></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const loading = ref(true)
const services = ref([])

const loadServices = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch('/api/servicios')
    // services.value = response.data
    
    services.value = []
  } catch (error) {
    console.error('Error cargando servicios:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadServices()
})

useHead({
  title: 'Servicios - Nuestros Servicios Inmobiliarios',
  meta: [
    { name: 'description', content: 'Conoce todos los servicios inmobiliarios que ofrecemos.' }
  ]
})
</script>
