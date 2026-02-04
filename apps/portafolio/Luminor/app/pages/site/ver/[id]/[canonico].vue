<script setup>
/**
 * Página de Detalle Personalizada
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()

// Route parameters
const pagId = route.params.id
const canonico = route.params.canonico

// State
const loading = ref(true)
const WebsiteName = ref('')
const page = ref({})
const children = ref([])

// Función para normalizar datos de página
const normalizePagina = (raw) => {
  if (!raw) return {}
  return {
    id: raw.Id || raw.id || raw.PaginaId || pagId,
    titulo: raw.Titulo || raw.titulo || raw.Title || raw.Nombre || 'Página',
    contenido: raw.Contenido || raw.contenido || raw.Body || raw.Descripcion || '',
    descripcion: raw.Encabezado || raw.descripcion || raw.Descripcion || '',
    imageUrl: raw.ImageUrl || raw.imageUrl || null,
    imageCaption: raw.ImageCaption || raw.imageCaption || '',
    creado: raw.Creado || raw.creado || raw.CreadoFecha || null
  }
}

// Load page data
const cargarDatos = async () => {
  loading.value = true
  try {
    // Get website name
    let res = await $inmostore.getSetting('websitename')
    if (res.operacion && res.operacion.codigo == 1) {
      console.error('API: ' + res.operacion.mensaje)
    }
    WebsiteName.value = res.resultado || '---'

    // Get page data
    res = await $psweb.getPagina(pagId)
    const raw = res.resultado || res.Resultado || res.Result || {}
    page.value = normalizePagina(raw)

    // Get related pages (children)
    res = await $psweb.getPaginaChilds(pagId, 4)
    const items = res.items || res.Items || []
    // Limitar a 6 y excluir la página actual
    children.value = items
      .slice(0, 6)
      .filter(item => (item.Id || item.id) !== pagId)
      .map(item => normalizePagina(item))

    // Set SEO
    useHead({
      title: page.value.titulo ? `${page.value.titulo} - ${WebsiteName.value}` : WebsiteName.value,
      meta: [
        { name: 'description', content: page.value.descripcion || 'Página personalizada' }
      ]
    })
  } catch (error) {
    console.error('Error cargando página:', error)
    await navigateTo('/site/blog')
  } finally {
    loading.value = false
  }
}

// Lifecycle
onMounted(cargarDatos)

// Helper functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

const slugify = (text) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

useHead({
  title: () => page.value.titulo ? `${page.value.titulo} - ${WebsiteName.value}` : 'Página',
  meta: [
    { name: 'description', content: () => page.value.descripcion || 'Página personalizada' }
  ]
})
</script>

<template>
  <!-- Loading State -->
  <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
    <div class="spinner text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt_20">Cargando página...</p>
    </div>
  </div>

  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>{{ page.titulo }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/blog" class="hover-underline-link">Blog</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ page.titulo }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Page Detail -->
    <section class="page-detail py_90" v-if="page.titulo">
      <div class="tf-container">
        <div class="row">
          <div class="col-lg-8">
            <!-- Page Image Banner -->
            <div class="page-image-banner mb_30" v-if="page.imageUrl">
              <img :src="page.imageUrl" :alt="page.titulo" class="rounded w-100" style="height: 500px; object-fit: cover;">
              <p v-if="page.imageCaption" class="text-caption text_secondary-color mt_10">{{ page.imageCaption }}</p>
            </div>

            <!-- Page Content -->
            <div class="page-content-box p_40 bg-white rounded mb_30">
              <h2 class="mb_20">{{ page.titulo }}</h2>
              
              <!-- Content HTML -->
              <div class="page-html-content text-body-2 text_secondary-color" v-html="page.contenido"></div>

              <!-- Meta Info -->
              <div class="page-meta mt_30 pt_30 border-top" v-if="page.creado">
                <p class="text-caption text_secondary-color">
                  <strong>Publicado:</strong> {{ formatDate(page.creado) }}
                </p>
              </div>
            </div>

            <!-- Children Pages Section -->
            <div v-if="children.length > 0" class="related-pages mb_30">
              <h3 class="mb_20">Páginas Relacionadas</h3>
              <div class="row g-3">
                <div v-for="child in children" :key="child.id" class="col-md-6">
                  <div class="page-card p_20 bg-white rounded border h-100 hover-shadow">
                    <div v-if="child.imageUrl" class="page-card-image mb_15">
                      <img :src="child.imageUrl" :alt="child.titulo" class="rounded w-100" style="height: 200px; object-fit: cover;">
                    </div>
                    <h6 class="mb_10">{{ child.titulo }}</h6>
                    <p class="text-caption text_secondary-color mb_15 text-truncate-lines" style="--line-count: 2;">{{ child.descripcion }}</p>
                    <NuxtLink :to="`/site/ver/${child.id}/${slugify(child.titulo)}`" class="tf-btn btn-outline btn-sm">
                      Leer Más
                      <i class="icon-CaretRight"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar-sticky sticky-top" style="top: 100px;">
              <!-- About This Page -->
              <div class="info-box p_25 bg-surface rounded mb_30">
                <h6 class="mb_15">Información de la Página</h6>
                <div class="info-item mb_15">
                  <span class="text-caption text_secondary-color">Sitio</span>
                  <p class="mb_5"><strong>{{ WebsiteName }}</strong></p>
                </div>
                <div v-if="page.creado" class="info-item">
                  <span class="text-caption text_secondary-color">Última actualización</span>
                  <p><strong>{{ formatDate(page.creado) }}</strong></p>
                </div>
              </div>

              <!-- Navigation -->
              <div class="navigation-box bg-white rounded p_25">
                <h6 class="mb_15">Navegación</h6>
                <div class="d-grid gap_10">
                  <NuxtLink to="/site/blog" class="tf-btn btn-outline w-100">
                    <i class="icon-CaretLeft"></i>
                    <span>Volver a Blog</span>
                  </NuxtLink>
                  <NuxtLink to="/site/contacto" class="tf-btn btn-bg-primary w-100">
                    <i class="icon-Envelope"></i>
                    <span>Contactar</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>



<style scoped>
.page-image-banner {
  overflow: hidden;
  border-radius: 12px;
}

.page-content-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.page-html-content {
  line-height: 1.8;
}

.page-html-content h3,
.page-html-content h4,
.page-html-content h5 {
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--primary-color);
}

.page-html-content p {
  margin-bottom: 15px;
}

.page-html-content ul,
.page-html-content ol {
  margin-bottom: 15px;
  margin-left: 30px;
}

.page-html-content li {
  margin-bottom: 8px;
}

.page-card {
  transition: all 0.3s ease;
}

.page-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12) !important;
}

.page-card-image {
  overflow: hidden;
  border-radius: 8px;
}

.text-truncate-lines {
  display: -webkit-box;
  -webkit-line-clamp: var(--line-count, 2);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.info-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.info-item p {
  margin: 0;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .sidebar-sticky {
    position: static !important;
    top: auto !important;
  }
}
</style>
