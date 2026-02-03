<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando proyectos...</p>
      </div>
    </div>

    <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Nuestros Proyectos</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Proyectos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section py_40">
      <div class="tf-container">
        <div class="row">
          <div class="col-12">
            <div class="filter-box p_30 bg-surface rounded">
              <div class="row align-items-end g-3">
                <div class="col-lg-3 col-md-6">
                  <label class="text-caption mb_10 d-block">Ubicación</label>
                  <select v-model="filters.location" class="form-select">
                    <option value="">Todas las ubicaciones</option>
                    <option value="bogota">Bogotá</option>
                    <option value="medellin">Medellín</option>
                    <option value="cali">Cali</option>
                    <option value="barranquilla">Barranquilla</option>
                    <option value="cartagena">Cartagena</option>
                  </select>
                </div>
                <div class="col-lg-3 col-md-6">
                  <label class="text-caption mb_10 d-block">Estado</label>
                  <select v-model="filters.status" class="form-select">
                    <option value="">Todos los estados</option>
                    <option value="en-venta">En Venta</option>
                    <option value="construccion">En Construcción</option>
                    <option value="entrega-inmediata">Entrega Inmediata</option>
                    <option value="agotado">Agotado</option>
                  </select>
                </div>
                <div class="col-lg-3 col-md-6">
                  <label class="text-caption mb_10 d-block">Tipo</label>
                  <select v-model="filters.type" class="form-select">
                    <option value="">Todos los tipos</option>
                    <option value="apartamentos">Apartamentos</option>
                    <option value="casas">Casas</option>
                    <option value="oficinas">Oficinas</option>
                    <option value="locales">Locales Comerciales</option>
                  </select>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="d-flex gap_10">
                    <button @click="applyFilters" class="tf-btn btn-bg-primary flex-grow-1">
                      <i class="icon-MagnifyingGlass"></i>
                      <span>Buscar</span>
                    </button>
                    <button @click="clearFilters" class="tf-btn btn-outline flex-shrink-0">
                      <i class="icon-ArrowsClockwise"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid py_60">
      <div class="tf-container">
        <div class="row mb_30">
          <div class="col-md-6">
            <p class="text-body-1 text_secondary-color">
              Mostrando {{ filteredProjects.length }} de {{ listado.length }} proyectos
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="d-inline-flex gap_10">
              <button 
                @click="viewMode = 'grid'" 
                :class="['tf-btn btn-icon', viewMode === 'grid' ? 'btn-bg-primary' : 'btn-outline']"
              >
                <i class="icon-SquaresFour"></i>
              </button>
              <button 
                @click="viewMode = 'list'" 
                :class="['tf-btn btn-icon', viewMode === 'list' ? 'btn-bg-primary' : 'btn-outline']"
              >
                <i class="icon-List"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Grid View -->
        <div v-if="viewMode === 'grid'" class="row g-4">
          <div v-for="project in paginatedProjects" :key="project.id" class="col-lg-4 col-md-6">
            <div class="project-card">
              <div class="project-image position-relative">
                <NuxtLink :to="`/site/proyecto/${project.id}/${project.slug}`">
                  <img :src="project.image" :alt="project.name" width="100%" />
                </NuxtLink>
                <div class="project-badges">
                  <span :class="`badge badge-${getStatusColor(project.status)}`">{{ project.statusLabel }}</span>
                </div>
                <div class="project-progress" v-if="project.progress">
                  <div class="progress">
                    <div class="progress-bar" :style="`width: ${project.progress}%`"></div>
                  </div>
                  <span class="progress-text">{{ project.progress }}% Vendido</span>
                </div>
              </div>
              <div class="project-content p_25">
                <div class="project-location mb_10">
                  <i class="icon-MapPin"></i>
                  <span>{{ project.location }}</span>
                </div>
                <h5 class="mb_15">
                  <NuxtLink :to="`/site/proyecto/${project.id}/${project.slug}`">
                    {{ project.name }}
                  </NuxtLink>
                </h5>
                <p class="text-body-2 text_secondary-color mb_20">{{ project.description }}</p>
                <div class="project-features mb_20">
                  <div class="feature-item">
                    <i class="icon-Buildings"></i>
                    <span>{{ project.units }} Unidades</span>
                  </div>
                  <div class="feature-item">
                    <i class="icon-CalendarBlank"></i>
                    <span>{{ project.deliveryDate }}</span>
                  </div>
                </div>
                <div class="project-price mb_20">
                  <span class="text-caption text_secondary-color">Desde</span>
                  <h5 class="text_primary-color">${{ formatNumber(project.priceFrom) }}</h5>
                </div>
                <NuxtLink 
                  :to="`/site/proyecto/${project.id}/${project.slug}`" 
                  class="tf-btn btn-bg-primary w-100"
                >
                  <span>Ver Proyecto</span>
                  <span class="bg-effect"></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- List View -->
        <div v-else class="row g-4">
          <div v-for="project in paginatedProjects" :key="project.id" class="col-12">
            <div class="project-card project-card-horizontal">
              <div class="row g-0">
                <div class="col-md-5">
                  <div class="project-image position-relative h-100">
                    <NuxtLink :to="`/site/proyecto/${project.id}/${project.slug}`">
                      <img :src="project.image" :alt="project.name" class="h-100 object-cover" />
                    </NuxtLink>
                    <div class="project-badges">
                      <span :class="`badge badge-${getStatusColor(project.status)}`">{{ project.statusLabel }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="project-content p_30">
                    <div class="d-flex justify-content-between align-items-start mb_15">
                      <div>
                        <div class="project-location mb_10">
                          <i class="icon-MapPin"></i>
                          <span>{{ project.location }}</span>
                        </div>
                        <h4 class="mb_10">
                          <NuxtLink :to="`/site/proyecto/${project.id}/${project.slug}`">
                            {{ project.name }}
                          </NuxtLink>
                        </h4>
                      </div>
                      <div class="text-end">
                        <span class="text-caption text_secondary-color d-block">Desde</span>
                        <h5 class="text_primary-color">${{ formatNumber(project.priceFrom) }}</h5>
                      </div>
                    </div>
                    <p class="text-body-2 text_secondary-color mb_20">{{ project.description }}</p>
                    <div class="project-features mb_20">
                      <div class="feature-item">
                        <i class="icon-Buildings"></i>
                        <span>{{ project.units }} Unidades</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-House"></i>
                        <span>{{ project.type }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-CalendarBlank"></i>
                        <span>{{ project.deliveryDate }}</span>
                      </div>
                      <div class="feature-item" v-if="project.progress">
                        <i class="icon-ChartBar"></i>
                        <span>{{ project.progress }}% Vendido</span>
                      </div>
                    </div>
                    <div class="project-amenities mb_20">
                      <span v-for="amenity in project.amenities.slice(0, 5)" :key="amenity" class="amenity-tag">
                        {{ amenity }}
                      </span>
                    </div>
                    <NuxtLink 
                      :to="`/site/proyecto/${project.id}/${project.slug}`" 
                      class="tf-btn btn-bg-primary"
                    >
                      <span>Ver Detalles Completos</span>
                      <span class="bg-effect"></span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="row mt_40" v-if="totalPages > 1">
          <div class="col-12">
            <nav class="pagination-nav">
              <ul class="pagination justify-content-center">
                <li :class="['page-item', currentPage === 1 && 'disabled']">
                  <button @click="goToPage(currentPage - 1)" class="page-link">
                    <i class="icon-CaretLeft"></i>
                  </button>
                </li>
                <li v-for="page in totalPages" :key="page" :class="['page-item', page === currentPage && 'active']">
                  <button @click="goToPage(page)" class="page-link">{{ page }}</button>
                </li>
                <li :class="['page-item', currentPage === totalPages && 'disabled']">
                  <button @click="goToPage(currentPage + 1)" class="page-link">
                    <i class="icon-CaretRight"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py_90 bg-primary text-white">
      <div class="tf-container">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h3 class="mb_15">¿Quieres Invertir en un Proyecto?</h3>
            <p class="h6 mb-0">Contáctanos para recibir asesoría personalizada sobre nuestros proyectos disponibles</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink to="/site/contacto" class="tf-btn btn-bg-white btn-px-40">
              <span>Contáctanos</span>
              <span class="bg-effect"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
/**
 * Listado de Proyectos Inmobiliarios
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref, computed } from 'vue'

const { $psweb, $inmostore } = useNuxtApp()

// Variables principales
const WebsiteName = ref('')
const listado = ref([])
const loading = ref(true)
const viewMode = ref('grid')
const currentPage = ref(1)
const perPage = 9

const filters = ref({
  location: '',
  status: '',
  type: ''
})

// Función para crear URL amigables (equivalente a Core.Canonical)
const makeCanonical = (text) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Función para obtener setting de un proyecto
const getProyectoSetting = async (proyectoId, key) => {
  try {
    const res = await $inmostore.getProyectoSetting?.({
      clave: key,
      proyectoId: proyectoId
    })
    return res?.Resultado || res?.resultado || ''
  } catch (error) {
    console.error(`Error obteniendo setting ${key} del proyecto ${proyectoId}:`, error)
    return ''
  }
}

// Función para normalizar proyecto
const normalizarProyecto = (prj) => {
  const estadoNormalizado = prj.Estado || prj.estado || 'en-venta'
  return {
    id: prj.ProyectoId || prj.id,
    name: prj.NombreProyecto || prj.nombre || 'Proyecto Sin Nombre',
    slug: makeCanonical(prj.NombreProyecto || prj.nombre),
    description: prj.Descripcion || prj.descripcionCorta || '',
    status: estadoNormalizado.toLowerCase().replace(/ /g, '-'),
    statusLabel: prj.Estado || prj.estado || 'En Venta',
    location: prj.Ubicacion || prj.ubicacion || '',
    units: prj.UnidadesDisponibles || prj.unidadesDisponibles || 0,
    priceFrom: prj.PrecioDesde || prj.precioDesde || 0,
    deliveryDate: prj.FechaEntrega || prj.fechaEntrega || 'Por definir',
    progress: prj.PorcentajeVendido || prj.porcentajeVendido || 0,
    type: prj.Tipo || prj.tipo || 'Apartamentos',
    amenities: prj.Amenidades || prj.amenidades || [],
    image: ''
  }
}

// Data de demostración (fallback)
const demoProjects = [
  {
    id: 1,
    name: 'Torres del Parque Central',
    slug: 'torres-del-parque-central',
    location: 'Bogotá, Chapinero',
    description: 'Moderno complejo residencial con torres gemelas, amplias zonas verdes y amenidades de primera clase.',
    image: '/images/home/home-list-1.jpg',
    status: 'en-venta',
    statusLabel: 'En Venta',
    type: 'Apartamentos',
    units: 240,
    priceFrom: 450000000,
    deliveryDate: 'Diciembre 2025',
    progress: 65,
    amenities: ['Piscina', 'Gimnasio', 'Zona BBQ', 'Parqueadero', 'Seguridad 24/7', 'Salón Social']
  },
  {
    id: 2,
    name: 'Reserva Natural El Bosque',
    slug: 'reserva-natural-el-bosque',
    location: 'Medellín, El Poblado',
    description: 'Exclusivo proyecto de casas campestres rodeadas de naturaleza, perfectas para vivir en tranquilidad.',
    image: '/images/home/home-list-2.jpg',
    status: 'construccion',
    statusLabel: 'En Construcción',
    type: 'Casas',
    units: 45,
    priceFrom: 680000000,
    deliveryDate: 'Junio 2026',
    progress: 35,
    amenities: ['Club House', 'Senderos', 'Parque Infantil', 'Canchas Deportivas', 'Portería']
  },
  {
    id: 3,
    name: 'Centro Empresarial Titanium',
    slug: 'centro-empresarial-titanium',
    location: 'Bogotá, Zona Norte',
    description: 'Modernas oficinas con tecnología de punta y excelente ubicación estratégica para tu negocio.',
    image: '/images/home/home-list-3.jpg',
    status: 'entrega-inmediata',
    statusLabel: 'Entrega Inmediata',
    type: 'Oficinas',
    units: 120,
    priceFrom: 180000000,
    deliveryDate: 'Disponible Ya',
    progress: 85,
    amenities: ['Recepción', 'Estacionamiento', 'Cafetería', 'Sala de Juntas', 'Internet Fibra']
  },
  {
    id: 4,
    name: 'Bahía Marina Residences',
    slug: 'bahia-marina-residences',
    location: 'Cartagena, Bocagrande',
    description: 'Lujosos apartamentos frente al mar con vista panorámica al Caribe y acabados de primera.',
    image: '/images/home/home-list-4.jpg',
    status: 'en-venta',
    statusLabel: 'En Venta',
    type: 'Apartamentos',
    units: 180,
    priceFrom: 950000000,
    deliveryDate: 'Marzo 2026',
    progress: 45,
    amenities: ['Playa Privada', 'Infinity Pool', 'Spa', 'Restaurante', 'Marina', 'Concierge']
  },
  {
    id: 5,
    name: 'Plaza Comercial Metropolitana',
    slug: 'plaza-comercial-metropolitana',
    location: 'Cali, Norte',
    description: 'Exclusivos locales comerciales en zona de alto tráfico, ideal para tu negocio o inversión.',
    image: '/images/home/home-list-5.jpg',
    status: 'construccion',
    statusLabel: 'En Construcción',
    type: 'Locales Comerciales',
    units: 85,
    priceFrom: 320000000,
    deliveryDate: 'Agosto 2025',
    progress: 55,
    amenities: ['Parqueadero Visitantes', 'Seguridad', 'Zona de Carga', 'Plaza Central']
  },
  {
    id: 6,
    name: 'Conjunto Residencial Las Palmas',
    slug: 'conjunto-residencial-las-palmas',
    location: 'Barranquilla, Norte',
    description: 'Acogedor conjunto de casas unifamiliares con diseño contemporáneo y espacios amplios.',
    image: '/images/home/home-list-6.jpg',
    status: 'en-venta',
    statusLabel: 'En Venta',
    type: 'Casas',
    units: 60,
    priceFrom: 420000000,
    deliveryDate: 'Octubre 2025',
    progress: 70,
    amenities: ['Piscina', 'Parque Infantil', 'Cancha Múltiple', 'Salón Comunal', 'Portería']
  }
]

// Computed
const filteredProjects = computed(() => {
  let result = listado.value

  if (filters.value.location) {
    result = result.filter(p => p.location.toLowerCase().includes(filters.value.location))
  }

  if (filters.value.status) {
    result = result.filter(p => p.status === filters.value.status)
  }

  if (filters.value.type) {
    result = result.filter(p => p.type === filters.value.type)
  }

  return result
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / perPage)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredProjects.value.slice(start, end)
})

// Methods
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const getStatusColor = (status) => {
  const colors = {
    'en-venta': 'success',
    'construccion': 'warning',
    'entrega-inmediata': 'info',
    'agotado': 'secondary'
  }
  return colors[status] || 'primary'
}

const applyFilters = () => {
  currentPage.value = 1
}

const clearFilters = () => {
  filters.value = {
    location: '',
    status: '',
    type: ''
  }
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Equivalente a Page_Load
onMounted(async () => {
  try {
    if ($psweb && $inmostore) {
      // Obtener nombre del sitio web
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'

      // Equivalente a ListProyectosActivos
      res = await $inmostore.listProyectosActivos?.()
      if (!res) {
        res = await $inmostore.listProyectos?.()
      }
      
      const proyectos = (res.items || res.Items || [])
      
      // Normalizar proyectos y obtener imágenes de portada
      const proyectosNormalizados = []
      for (const prj of proyectos) {
        const proyecto = normalizarProyecto(prj)
        
        // Obtener imagen de portada
        const imgPortada = await getProyectoSetting(proyecto.id, 'ImgPortada')
        if (imgPortada) {
          proyecto.image = `https://via.placeholder.com/600x400?text=${proyecto.titulo}`
        }
        
        proyectosNormalizados.push(proyecto)
      }
      
      listado.value = proyectosNormalizados.length > 0 ? proyectosNormalizados : demoProjects

      // Actualizar SEO
      useHead({
        title: `Proyectos - ${WebsiteName.value}`,
        meta: [
          { 
            name: 'description', 
            content: 'Explora nuestros proyectos inmobiliarios disponibles.' 
          }
        ]
      })
    } else {
      console.error('El plugin PSWeb o InmoStore no está disponible.')
      listado.value = demoProjects
      useHead({
        title: 'Proyectos Inmobiliarios - Luminor Real Estate',
        meta: [
          { name: 'description', content: 'Descubre nuestros proyectos inmobiliarios en desarrollo.' }
        ]
      })
    }
  } catch (error) {
    console.error('Error cargando proyectos:', error)
    listado.value = demoProjects
    useHead({
      title: 'Proyectos - Luminor Real Estate'
    })
  } finally {
    loading.value = false
  }
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-badges {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}

.badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-success {
  background: #10b981;
  color: white;
}

.badge-warning {
  background: #f59e0b;
  color: white;
}

.badge-info {
  background: #3b82f6;
  color: white;
}

.badge-secondary {
  background: #6b7280;
  color: white;
}

.project-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  padding: 10px 15px;
}

.progress {
  height: 6px;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
}

.progress-bar {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.progress-text {
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.project-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary-color);
  font-size: 14px;
}

.project-features {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
  font-size: 14px;
}

.feature-item i {
  color: var(--primary-color);
}

.project-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.amenity-tag {
  padding: 4px 12px;
  background: var(--surface-color);
  border-radius: 15px;
  font-size: 12px;
  color: var(--secondary-color);
}

.project-card-horizontal .project-image {
  height: 100%;
  min-height: 300px;
}

.object-cover {
  object-fit: cover;
}

.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}
</style>
