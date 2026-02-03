<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando artículos...</p>
      </div>
    </div>

    <div v-else>
      <!-- Page Title -->
      <section class="page-title">
        <div class="tf-container w-xxl">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h3>{{ pag.titulo || 'Blog & Noticias' }}</h3>
                <div class="breadcrumbs">
                  <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <span>{{ pag.titulo || 'Blog' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section class="blog-section py_90">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-8">
              <!-- Blog Posts -->
              <div class="blog-posts">
                <div v-if="paginatedArticles.length === 0" class="text-center py_60">
                  <p class="text-body-1 text_secondary-color">No hay artículos disponibles en este momento.</p>
                </div>

                <article v-for="post in paginatedArticles" :key="post.id" class="blog-post-item mb_40">
                  <div class="post-image mb_20">
                    <img :src="post.imagen" :alt="post.titulo" width="100%" height="400" class="rounded" style="object-fit: cover;" />
                    <span class="post-category">{{ post.categoria }}</span>
                  </div>
                  <div class="post-content">
                    <div class="post-meta mb_15 d-flex gap_20 text_secondary-color">
                      <span><i class="icon-Calendar me-1"></i>{{ formatDate(post.fecha) }}</span>
                    </div>
                    <h3 class="post-title mb_15">
                      <a href="#">{{ post.titulo }}</a>
                    </h3>
                    <p class="post-excerpt text-body-1 text_secondary-color mb_20">{{ post.resumen }}</p>
                    <a href="#" class="btn-read-more text-button text_primary-color">
                      Leer más <i class="icon-ArrowRight ms-2"></i>
                    </a>
                  </div>
                </article>
              </div>

              <!-- Pagination -->
              <div class="pagination-wrapper text-center" v-if="totalPages > 1">
                <ul class="wg-pagination">
                  <li v-if="currentPage > 1">
                    <a href="#" @click.prevent="changePage(currentPage - 1)">
                      <i class="icon-CaretLeft"></i>
                    </a>
                  </li>
                  <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                    <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
                  </li>
                  <li v-if="currentPage < totalPages">
                    <a href="#" @click.prevent="changePage(currentPage + 1)">
                      <i class="icon-CaretRight"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
              <div class="blog-sidebar">
                <!-- Recent Posts Widget -->
                <div class="sidebar-widget mb_30">
                  <h5 class="widget-title mb_20">Artículos Recientes</h5>
                  <div class="recent-posts">
                    <div v-for="post in recentArticles" :key="post.id" class="recent-post-item mb_20">
                      <div class="d-flex gap_15">
                        <img :src="post.imagen" :alt="post.titulo" width="80" height="80" class="rounded" style="object-fit: cover;" />
                        <div>
                          <h6 class="mb_5">
                            <a href="#">{{ post.titulo }}</a>
                          </h6>
                          <span class="post-date text_secondary-color text-caption">{{ formatDate(post.fecha) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Categories Widget -->
                <div class="sidebar-widget mb_30">
                  <h5 class="widget-title mb_20">Categorías</h5>
                  <ul class="category-list">
                    <li v-for="(count, categoria) in categoryCounts" :key="categoria" class="category-item">
                      <a href="#" class="d-flex justify-content-between">
                        <span>{{ categoria }}</span>
                        <span class="count">{{ count }}</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Info Widget -->
                <div class="sidebar-widget p_30 bg-primary text-white rounded">
                  <h5 class="widget-title mb_15">{{ WebsiteName }}</h5>
                  <p class="mb_0">Mantente informado con las últimas noticias y tendencias del mercado inmobiliario.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
/**
 * Blog & Noticias - Página de artículos y contenido
 * Plantilla: Luminor
 */
import { useHead } from '#app'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Route parameters
const pagId = route.params.id

// State
const WebsiteName = ref('Luminor Inmobiliario')
const pag = ref({ titulo: 'Blog & Noticias', descripcion: 'Mantente informado con las últimas noticias del sector inmobiliario.' })
const loading = ref(true)
const articles = ref([])
const currentPage = ref(1)
const itemsPerPage = 6

// Helper functions
const formatDate = (date) => {
  if (!date) return ''
  try {
    const d = new Date(date)
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return date
  }
}

// Load articles
const loadArticles = async () => {
  loading.value = true
  try {
    // Datos de artículos de blog (contenido de ejemplo)
    articles.value = [
      {
        id: 1,
        titulo: 'Guía Completa para Comprar tu Primera Vivienda en 2025',
        resumen: 'Todo lo que necesitas saber antes de dar el gran paso hacia tu primer hogar. Desde los documentos requeridos hasta los tips para negociar el mejor precio.',
        fecha: new Date(2025, 1, 20).toISOString(),
        categoria: 'Consejos de Compra',
        imagen: '/images/blog/blog-item-1.jpg'
      },
      {
        id: 2,
        titulo: 'Tendencias del Mercado Inmobiliario Colombiano 2025',
        resumen: 'Análisis profundo del comportamiento del mercado inmobiliario en las principales ciudades. Descubre las zonas en crecimiento y las mejores oportunidades de inversión.',
        fecha: new Date(2025, 1, 18).toISOString(),
        categoria: 'Mercado Inmobiliario',
        imagen: '/images/blog/blog-item-2.jpg'
      },
      {
        id: 3,
        titulo: '¿Es Rentable Invertir en Bienes Raíces Ahora?',
        resumen: 'Descubre las ventajas y desventajas de invertir en propiedades en el contexto actual. Análisis de rentabilidad y retorno de inversión esperado.',
        fecha: new Date(2025, 1, 15).toISOString(),
        categoria: 'Inversiones',
        imagen: '/images/blog/blog-item-3.jpg'
      },
      {
        id: 4,
        titulo: 'Aspectos Legales Clave al Comprar una Propiedad',
        resumen: 'Los documentos y trámites legales esenciales para una compra segura. Conoce tus derechos y obligaciones como comprador.',
        fecha: new Date(2025, 1, 12).toISOString(),
        categoria: 'Aspectos Legales',
        imagen: '/images/blog/blog-item-4.jpg'
      },
      {
        id: 5,
        titulo: 'Smart Homes: La Nueva Tendencia en Viviendas',
        resumen: 'Cómo la tecnología está transformando los hogares modernos. Sistemas inteligentes que aumentan la seguridad, comodidad y eficiencia energética.',
        fecha: new Date(2025, 1, 10).toISOString(),
        categoria: 'Tendencias',
        imagen: '/images/blog/blog-item-5.jpg'
      },
      {
        id: 6,
        titulo: 'Financiamiento Inmobiliario: Opciones y Estrategias',
        resumen: 'Explora las diferentes opciones de crédito disponibles para compra de vivienda. Tasas, plazos y condiciones comparativas para elegir la mejor opción.',
        fecha: new Date(2025, 1, 8).toISOString(),
        categoria: 'Financiamiento',
        imagen: '/images/blog/blog-item-6.jpg'
      },
      {
        id: 7,
        titulo: 'Cómo Elegir la Zona Perfecta para Vivir',
        resumen: 'Factores a considerar al elegir dónde vivir: accesibilidad, servicios, seguridad y plusvalía. Guía completa para tomar la mejor decisión.',
        fecha: new Date(2025, 1, 5).toISOString(),
        categoria: 'Consejos de Compra',
        imagen: '/images/blog/blog-item-7.jpg'
      },
      {
        id: 8,
        titulo: 'Renovación y Reforma: Maximiza el Valor de tu Propiedad',
        resumen: 'Proyectos de renovación que realmente agregan valor a tu vivienda. Antes y después de transformaciones exitosas.',
        fecha: new Date(2025, 1, 1).toISOString(),
        categoria: 'Mejoras',
        imagen: '/images/blog/blog-item-8.jpg'
      },
      {
        id: 9,
        titulo: 'Arrendamiento: Derechos y Obligaciones del Propietario',
        resumen: 'Todo lo que debes saber como propietario de un inmueble en alquiler. Normativas, responsabilidades y mejores prácticas.',
        fecha: new Date(2024, 12, 28).toISOString(),
        categoria: 'Arrendamiento',
        imagen: '/images/blog/blog-item-9.jpg'
      },
      {
        id: 10,
        titulo: 'Decoración Moderna: Crea Espacios que Inspiren',
        resumen: 'Ideas innovadoras para transformar tus espacios con diseño moderno y funcional. Tendencias en decoración que maximizan confort y estética.',
        fecha: new Date(2024, 12, 25).toISOString(),
        categoria: 'Diseño',
        imagen: '/images/blog/blog-item-10.jpg'
      },
      {
        id: 11,
        titulo: 'Energías Renovables en Viviendas: Ahorra e Invierte',
        resumen: 'Cómo implementar paneles solares y sistemas sustentables en tu hogar. Análisis de costos y ahorros a largo plazo.',
        fecha: new Date(2024, 12, 20).toISOString(),
        categoria: 'Sustentabilidad',
        imagen: '/images/blog/blog-item-list-1.jpg'
      },
      {
        id: 12,
        titulo: 'Mantenimiento Preventivo: Cuida tu Inversión Inmobiliaria',
        resumen: 'Guía completa de tareas de mantenimiento esenciales para preservar el valor de tu propiedad y evitar reparaciones costosas.',
        fecha: new Date(2024, 12, 15).toISOString(),
        categoria: 'Mantenimiento',
        imagen: '/images/blog/blog-item-list-2.jpg'
      }
    ]
  } catch (error) {
    console.error('Error cargando artículos:', error)
  } finally {
    loading.value = false
  }
}

// Computed properties
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return articles.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(articles.value.length / itemsPerPage)
})

const recentArticles = computed(() => {
  return articles.value.slice(0, 4)
})

const categoryCounts = computed(() => {
  const counts = {}
  articles.value.forEach(article => {
    const cat = article.categoria || 'Sin categoría'
    counts[cat] = (counts[cat] || 0) + 1
  })
  return counts
})

// Methods
const changePage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Lifecycle
onMounted(loadArticles)

// SEO
useHead({
  title: () => `${pag.value.titulo || 'Blog'} - ${WebsiteName.value}`,
  meta: [
    { name: 'description', content: () => pag.value.descripcion || 'Mantente informado con las últimas noticias del sector inmobiliario.' }
  ]
})
</script>

<style scoped>
.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.blog-post-item {
  background: var(--surface-color);
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.blog-post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.post-image {
  position: relative;
  overflow: hidden;
  height: 240px;
  background-color: #f0f0f0;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 600;
}

.post-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 240px);
}

.post-title {
  font-size: 16px;
  margin-bottom: 10px;
  flex-grow: 1;
}

.post-title a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-title a:hover {
  color: var(--primary-color);
}

.post-meta {
  font-size: 12px;
  margin-bottom: 10px;
}

.post-excerpt {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-read-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;
  font-size: 13px;
  align-self: flex-start;
}

.btn-read-more:hover {
  gap: 10px;
}

.sidebar-widget {
  background: var(--surface-color);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.widget-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 15px;
}

.category-item a {
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}

.category-item a:hover {
  color: var(--primary-color);
}

.category-item:last-child a {
  border-bottom: none;
}

.category-item .count {
  background: var(--primary-color);
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
}

.recent-post-item {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.recent-post-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
  margin-bottom: 0;
}

.recent-post-item h6 {
  font-size: 13px;
  margin-bottom: 4px;
}

.recent-post-item h6 a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.recent-post-item h6 a:hover {
  color: var(--primary-color);
}

.recent-post-item .d-flex {
  gap: 10px;
}

.recent-post-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  flex-shrink: 0;
}

.wg-pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.wg-pagination li a {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 13px;
}

.wg-pagination li a:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.wg-pagination li.active a {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .post-content {
    padding: 15px;
  }

  .sidebar-widget {
    padding: 15px;
  }

  .blog-post-item {
    margin-bottom: 15px;
  }
}
</style>
