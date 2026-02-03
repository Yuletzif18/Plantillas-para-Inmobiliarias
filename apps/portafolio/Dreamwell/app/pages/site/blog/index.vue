<template>
  <div>
    <!-- Start Page Header Section -->
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed" data-src="/img/page_header_2.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow fadeInLeft">Noticias y Blog</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Blog</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->

    <!-- Start Blog Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <!-- Aquí se renderizarán dinámicamente los artículos del blog -->
          <div v-if="loading" class="col-12 text-center">
            <p>Cargando noticias...</p>
          </div>
          
          <div v-else-if="articles.length === 0" class="col-12 text-center">
            <p>No hay noticias disponibles en este momento.</p>
          </div>
          
          <div v-else v-for="article in articles" :key="article.id" class="col-lg-12">
            <div class="cs_card cs_style_3 cs_white_bg cs_radius_15" style="display: flex; flex-direction: row; overflow: hidden;">
              <NuxtLink :to="`/site/blog/${article.id}`" class="cs_card_thumbnail" style="flex: 0 0 400px; max-width: 400px;">
                <img :src="article.imagen || '/img/post_img_1.jpg'" :alt="article.titulo" style="width: 100%; height: 100%; min-height: 350px; object-fit: cover;">
              </NuxtLink>
              <div class="cs_card_info" style="flex: 1; padding: 40px;">
                <div class="cs_card_meta" style="margin-bottom: 20px; display: flex; gap: 20px; flex-wrap: wrap;">
                  <span><i class="fa-solid fa-calendar-days"></i>{{ formatDate(article.fecha) }}</span>
                  <span v-if="article.categoria"><i class="fa-solid fa-folder"></i>{{ article.categoria }}</span>
                  <span v-if="article.autor"><i class="fa-solid fa-user"></i>{{ article.autor }}</span>
                  <span v-if="article.tiempo_lectura"><i class="fa-solid fa-clock"></i>{{ article.tiempo_lectura }}</span>
                </div>
                <h3 class="cs_card_title cs_fs_32 cs_semibold" style="margin-bottom: 20px;">
                  <NuxtLink :to="`/site/blog/${article.id}`">{{ article.titulo }}</NuxtLink>
                </h3>
                <p class="cs_card_subtitle" style="margin-bottom: 30px; line-height: 1.8; font-size: 16px;">{{ article.resumen }}</p>
                <NuxtLink :to="`/site/blog/${article.id}`" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7">
                  <span class="cs_btn_icon"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="cs_btn_text">Leer Artículo Completo</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="cs_height_60 cs_height_lg_40"></div>
        <div v-if="totalPages > 1" class="cs_pagination cs_center">
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
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Blog Section -->
  </div>
</template>

<script setup>
const loading = ref(true)
const articles = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const itemsPerPage = 9

// Función para cargar artículos (simulada - se conectará con la API)
const loadArticles = async (page = 1) => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch('/api/blog', { query: { page, limit: itemsPerPage } })
    // articles.value = response.data
    // totalPages.value = response.totalPages
    
    // Datos de ejemplo (contenido en español)
    const demo = [
      { 
        id: 1, 
        titulo: 'Consejos para comprar tu primera vivienda en Colombia', 
        resumen: 'Comprar tu primera vivienda es una de las decisiones más importantes de tu vida. Descubre los aspectos clave que debes considerar al evaluar un inmueble, desde la ubicación hasta las opciones de financiación. Te compartimos consejos prácticos sobre presupuesto, inspección de propiedades y documentación legal necesaria.', 
        fecha: '2026-01-15', 
        categoria: 'Guías', 
        imagen: '/img/post_img_1.jpg',
        autor: 'María González',
        tiempo_lectura: '8 min'
      },
      { 
        id: 2, 
        titulo: 'Inversión en bienes raíces: guía completa para el 2026', 
        resumen: 'El mercado inmobiliario sigue siendo una de las mejores opciones de inversión a largo plazo. Aprende todo lo que necesitas saber para invertir con éxito: desde análisis de mercado, selección de zonas con potencial de valorización, hasta estrategias de rentabilidad y administración de propiedades para generar ingresos pasivos.', 
        fecha: '2026-01-10', 
        categoria: 'Inversión', 
        imagen: '/img/post_img_5.jpg',
        autor: 'Carlos Rodríguez',
        tiempo_lectura: '12 min'
      },
      { 
        id: 3, 
        titulo: 'Tendencias del mercado inmobiliario colombiano 2026', 
        resumen: 'Análisis completo de las proyecciones y oportunidades del sector inmobiliario en Colombia. Descubre qué sectores ofrecen mayor potencial de crecimiento, las nuevas tendencias en construcción sostenible, el impacto de la tecnología en las transacciones inmobiliarias y las mejores ciudades para invertir este año.', 
        fecha: '2026-01-05', 
        categoria: 'Mercado', 
        imagen: '/img/post_img_4.jpg',
        autor: 'Ana Martínez',
        tiempo_lectura: '10 min'
      }
    ]
    articles.value = demo
    totalPages.value = 1
  } catch (error) {
    console.error('Error cargando artículos:', error)
  } finally {
    loading.value = false
  }
}

const changePage = (page) => {
  currentPage.value = page
  loadArticles(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Cargar artículos al montar el componente
onMounted(() => {
  loadArticles()
})

useHead({
  title: 'Blog - Noticias',
  meta: [
    { name: 'description', content: 'Mantente informado con las últimas noticias del sector inmobiliario.' }
  ]
})
</script>
