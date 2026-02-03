<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed" data-src="/img/page_header_3.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow fadeInLeft">Nuestros Proyectos</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Proyectos</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div v-if="loading" class="text-center py-5">
          <p>Cargando proyectos...</p>
        </div>

        <div v-else-if="projects.length === 0" class="text-center py-5">
          <p>No hay proyectos disponibles en este momento.</p>
        </div>

        <div v-else class="row cs_gap_y_40">
          <div v-for="project in projects" :key="project.id" class="col-lg-4 col-md-6">
            <div class="cs_card cs_style_5 cs_white_bg cs_radius_15">
              <NuxtLink :to="`/site/proyecto/${project.id}/${project.canonico}`" class="cs_card_thumbnail position-relative">
                <img :src="project.imagen || '/img/card_img_4.jpg'" :alt="project.nombre" style="width: 100%; height: 280px; object-fit: cover;">
                <span class="cs_card_badge cs_accent_bg cs_white_color cs_radius_5">
                  {{ project.estado || 'En venta' }}
                </span>
              </NuxtLink>
              <div class="cs_card_info">
                <h3 class="cs_card_title cs_fs_20 cs_semibold" style="min-height: 55px;">
                  <NuxtLink :to="`/site/proyecto/${project.id}/${project.canonico}`">
                    {{ project.nombre }}
                  </NuxtLink>
                </h3>
                <p class="cs_card_location">
                  <i class="fa-solid fa-location-dot"></i>{{ project.ubicacion }}
                </p>
                <p class="cs_card_description" style="min-height: 48px;">{{ project.descripcionCorta }}</p>
                <div class="cs_card_meta" style="margin-bottom: 20px;">
                  <span v-if="project.unidadesDisponibles">
                    <i class="fa-solid fa-building"></i>{{ project.unidadesDisponibles }} unidades disponibles
                  </span>
                </div>
                <NuxtLink 
                  :to="`/site/proyecto/${project.id}/${project.canonico}`" 
                  class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_14 cs_radius_7 w-100"
                >
                  <span class="cs_btn_icon"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="cs_btn_text">Ver Proyecto</span>
                </NuxtLink>
              </div>
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
const projects = ref([])

const loadProjects = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch('/api/proyectos')
    // projects.value = response.data
    
    projects.value = [
      { id: 201, canonico: 'torres-del-parque', nombre: 'Torres del Parque', ubicacion: 'Laureles, Medellín', descripcionCorta: 'Apartamentos familiares con zonas verdes y piscina.', unidadesDisponibles: 24, estado: 'En venta', imagen: '/img/card_img_7.jpg' },
      { id: 202, canonico: 'mirador-del-norte', nombre: 'Mirador del Norte', ubicacion: 'Suba, Bogotá', descripcionCorta: 'Proyecto mixto con locales y apartamentos.', unidadesDisponibles: 12, estado: 'Preventa', imagen: '/img/card_img_8.jpg' },
      { id: 203, canonico: 'plaza-central', nombre: 'Plaza Central', ubicacion: 'Centro, Cali', descripcionCorta: 'Residencial con excelente ubicación y amenidades.', unidadesDisponibles: 8, estado: 'Entregas 2026', imagen: '/img/card_img_9.jpg' },
      { id: 204, canonico: 'vista-verde', nombre: 'Vista Verde', ubicacion: 'Envigado, Medellín', descripcionCorta: 'Casas campestres con amplios jardines y seguridad.', unidadesDisponibles: 15, estado: 'En venta', imagen: '/img/card_img_10.jpg' },
      { id: 205, canonico: 'alameda-real', nombre: 'Alameda Real', ubicacion: 'Chia, Cundinamarca', descripcionCorta: 'Townhouses modernos con acabados de lujo.', unidadesDisponibles: 10, estado: 'Preventa', imagen: '/img/card_img_11.jpg' },
      { id: 206, canonico: 'parque-central', nombre: 'Parque Central', ubicacion: 'Poblado, Medellín', descripcionCorta: 'Edificio de apartamentos con zona comercial.', unidadesDisponibles: 30, estado: 'En venta', imagen: '/img/card_img_12.jpg' }
    ]
  } catch (error) {
    console.error('Error cargando proyectos:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProjects()
})

useHead({
  title: 'Proyectos - Listado de Proyectos Inmobiliarios',
  meta: [
    { name: 'description', content: 'Explora nuestros proyectos inmobiliarios disponibles.' }
  ]
})
</script>
