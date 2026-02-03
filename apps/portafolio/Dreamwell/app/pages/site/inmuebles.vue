<template>
  <div>
    <!-- Start Page Header Section -->
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow fadeInLeft">Inmuebles Disponibles</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Inmuebles</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->

    <!-- Start Property Grid -->
    <section>
      <div class="cs_height_60 cs_height_lg_60"></div>
      <div class="container">
        <div class="cs_products_with_sidebar">
          <!-- Filtros -->
          <div class="cs_filter_widgets wow fadeInLeft">
            <div class="cs_filter_widget">
              <h3 class="cs_filter_widget_title cs_fs_16 cs_semibold cs_normal cs_body_font cs_mb_15">
                Tipo<i class="fa-solid fa-caret-up"></i>
              </h3>
              <ul class="cs_filter_widget_menu">
                <li>
                  <label>
                    <input v-model="filters.tipos" type="checkbox" value="casa">
                    <span>Casas</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input v-model="filters.tipos" type="checkbox" value="apartamento">
                    <span>Apartamentos</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input v-model="filters.tipos" type="checkbox" value="local">
                    <span>Locales</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input v-model="filters.tipos" type="checkbox" value="terreno">
                    <span>Terrenos</span>
                  </label>
                </li>
              </ul>
            </div>

            <div class="cs_filter_widget">
              <h3 class="cs_filter_widget_title cs_fs_16 cs_semibold cs_normal cs_body_font cs_mb_15">
                Operación<i class="fa-solid fa-caret-up"></i>
              </h3>
              <ul class="cs_filter_widget_menu">
                <li>
                  <label>
                    <input v-model="filters.operacion" type="radio" value="venta">
                    <span>Venta</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input v-model="filters.operacion" type="radio" value="arriendo">
                    <span>Arriendo</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input v-model="filters.operacion" type="radio" value="todas">
                    <span>Todas</span>
                  </label>
                </li>
              </ul>
            </div>

            <div class="cs_filter_widget">
              <h3 class="cs_filter_widget_title cs_fs_16 cs_semibold cs_normal cs_body_font cs_mb_15">
                Rango de Precio
              </h3>
              <div class="cs_range_slider_wrapper">
                <p>Mín: ${{ filters.precioMin.toLocaleString() }}</p>
                <p>Máx: ${{ filters.precioMax.toLocaleString() }}</p>
              </div>
            </div>

            <button @click="applyFilters" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 w-100">
              <span class="cs_btn_text">Aplicar Filtros</span>
            </button>
          </div>

          <!-- Listado de propiedades -->
          <div class="cs_products_wrapper">
            <div class="cs_product_header">
              <p class="mb-0">Mostrando {{ properties.length }} inmuebles</p>
              <select v-model="sortBy" @change="sortProperties" class="cs_custom_select">
                <option value="reciente">Más Recientes</option>
                <option value="precio_asc">Precio: Menor a Mayor</option>
                <option value="precio_desc">Precio: Mayor a Menor</option>
              </select>
            </div>

            <div v-if="loading" class="text-center py-5">
              <p>Cargando inmuebles...</p>
            </div>

            <div v-else-if="properties.length === 0" class="text-center py-5">
              <p>No se encontraron inmuebles con los filtros seleccionados.</p>
            </div>

            <div v-else class="row cs_gap_y_30">
              <div v-for="property in properties" :key="property.id" class="col-lg-4 col-md-6">
                <div class="cs_card cs_style_1 cs_white_bg cs_radius_15">
                  <NuxtLink :to="`/site/inmueble/${property.id}`" class="cs_card_thumbnail position-relative">
                    <img :src="property.imagen || '/img/card_img_1.jpg'" :alt="property.titulo" style="width: 100%; height: 280px; object-fit: cover;">
                    <span class="cs_card_badge cs_accent_bg cs_white_color cs_radius_5">
                      {{ property.operacion }}
                    </span>
                  </NuxtLink>
                  <div class="cs_card_info">
                    <div class="cs_card_price_wrap" style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 15px; border-radius: 10px; margin-bottom: 15px; border: 2px solid #e0e0e0;">
                      <h3 class="cs_card_price cs_fs_24 cs_semibold cs_accent_color mb-0">
                        ${{ property.precio?.toLocaleString() }}
                      </h3>
                      <small class="text-muted">{{ property.operacion === 'Arriendo' ? '/ mes' : '' }}</small>
                    </div>
                    <h3 class="cs_card_title cs_fs_18 cs_semibold" style="min-height: 50px;">
                      <NuxtLink :to="`/site/inmueble/${property.id}`">{{ property.titulo }}</NuxtLink>
                    </h3>
                    <p class="cs_card_location" style="margin-bottom: 15px;">
                      <i class="fa-solid fa-location-dot"></i>{{ property.ubicacion }}
                    </p>
                    <ul class="cs_card_meta" style="margin-bottom: 15px;">
                      <li v-if="property.habitaciones">
                        <i class="fa-solid fa-bed"></i>{{ property.habitaciones }} Hab.
                      </li>
                      <li v-if="property.banos">
                        <i class="fa-solid fa-bath"></i>{{ property.banos }} Baños
                      </li>
                      <li v-if="property.area">
                        <i class="fa-solid fa-chart-area"></i>{{ property.area }} m²
                      </li>
                    </ul>
                    <NuxtLink :to="`/site/inmueble/${property.id}`" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_14 cs_radius_7 w-100">
                      <span class="cs_btn_icon"><i class="fa-solid fa-eye"></i></span>
                      <span class="cs_btn_text">Ver Más Detalles</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="cs_pagination cs_center cs_mt_50">
              <ul class="cs_pagination_list">
                <li v-if="currentPage > 1">
                  <a @click.prevent="changePage(currentPage - 1)" href="#" aria-label="Previous">
                    <i class="fa-solid fa-chevron-left"></i>
                  </a>
                </li>
                <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                  <a @click.prevent="changePage(page)" href="#">{{ page }}</a>
                </li>
                <li v-if="currentPage < totalPages">
                  <a @click.prevent="changePage(currentPage + 1)" href="#" aria-label="Next">
                    <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Property Grid -->
  </div>
</template>

<script setup>
const route = useRoute()

const loading = ref(true)
const properties = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const sortBy = ref('reciente')

const filters = ref({
  tipos: [],
  operacion: 'todas',
  precioMin: 0,
  precioMax: 10000000
})

// Cargar inmuebles
const loadProperties = async (page = 1) => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch('/api/inmuebles', {
    //   query: {
    //     page,
    //     tipos: filters.value.tipos,
    //     operacion: filters.value.operacion,
    //     precioMin: filters.value.precioMin,
    //     precioMax: filters.value.precioMax,
    //     sortBy: sortBy.value
    //   }
    // })
    // properties.value = response.data
    // totalPages.value = response.totalPages

    // Datos de ejemplo (contenido en español)
    const demo = [
      { id: 101, titulo: 'Villa Moderna con Vista al Mar', ubicacion: 'Cartagena, Colombia', operacion: 'Venta', precio: 1250000000, habitaciones: 4, banos: 3, area: 350, imagen: '/img/card_img_1.jpg' },
      { id: 102, titulo: 'Apartamento de Lujo Centro', ubicacion: 'Bogotá, Colombia', operacion: 'Arriendo', precio: 4200000, habitaciones: 2, banos: 2, area: 120, imagen: '/img/card_img_2.jpg' },
      { id: 103, titulo: 'Casa Campestre con Piscina', ubicacion: 'Medellín, Colombia', operacion: 'Venta', precio: 980000000, habitaciones: 5, banos: 4, area: 450, imagen: '/img/card_img_3.jpg' },
      { id: 104, titulo: 'Penthouse Exclusivo', ubicacion: 'Cali, Colombia', operacion: 'Venta', precio: 850000000, habitaciones: 3, banos: 3, area: 280, imagen: '/img/card_img_4.jpg' },
      { id: 105, titulo: 'Apartamento Amoblado', ubicacion: 'Barranquilla, Colombia', operacion: 'Arriendo', precio: 3500000, habitaciones: 2, banos: 2, area: 95, imagen: '/img/card_img_5.jpg' },
      { id: 106, titulo: 'Casa en Conjunto Cerrado', ubicacion: 'Bucaramanga, Colombia', operacion: 'Venta', precio: 650000000, habitaciones: 4, banos: 3, area: 220, imagen: '/img/card_img_6.jpg' }
    ]
    properties.value = demo
    totalPages.value = 1
  } catch (error) {
    console.error('Error cargando inmuebles:', error)
  } finally {
    loading.value = false
  }
}

const applyFilters = () => {
  currentPage.value = 1
  loadProperties(1)
}

const sortProperties = () => {
  loadProperties(currentPage.value)
}

const changePage = (page) => {
  currentPage.value = page
  loadProperties(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Cargar con filtros de query params si existen
onMounted(() => {
  if (route.query.tipo) filters.value.tipos = [route.query.tipo]
  if (route.query.operacion) filters.value.operacion = route.query.operacion
  loadProperties()
})

useHead({
  title: 'Inmuebles - Listado de Propiedades',
  meta: [
    { name: 'description', content: 'Explore nuestra amplia selección de propiedades disponibles para compra y arriendo.' }
  ]
})
</script>
