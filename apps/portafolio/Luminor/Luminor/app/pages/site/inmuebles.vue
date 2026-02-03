<template>
  <div>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Inmuebles Disponibles</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Inmuebles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Properties Listing -->
    <section class="properties-listing py_90">
      <div class="tf-container">
        <div class="row">
          <!-- Filters Sidebar -->
          <div class="col-lg-3">
            <div class="filters-sidebar">
              <div class="filter-group mb_30">
                <h5 class="filter-title mb_20">Tipo de Operación</h5>
                <div class="filter-options">
                  <label class="custom-radio">
                    <input type="radio" v-model="filters.operacion" value="todas" name="operacion">
                    <span>Todas</span>
                  </label>
                  <label class="custom-radio">
                    <input type="radio" v-model="filters.operacion" value="venta" name="operacion">
                    <span>Venta</span>
                  </label>
                  <label class="custom-radio">
                    <input type="radio" v-model="filters.operacion" value="arriendo" name="operacion">
                    <span>Arriendo</span>
                  </label>
                </div>
              </div>

              <div class="filter-group mb_30">
                <h5 class="filter-title mb_20">Tipo de Inmueble</h5>
                <div class="filter-options">
                  <label class="custom-checkbox" v-for="type in propertyTypes" :key="type.value">
                    <input type="checkbox" v-model="filters.tipos" :value="type.value">
                    <span>{{ type.label }}</span>
                  </label>
                </div>
              </div>

              <div class="filter-group mb_30">
                <h5 class="filter-title mb_20">Rango de Precio</h5>
                <div class="price-range">
                  <div class="mb_15">
                    <label>Mínimo</label>
                    <input v-model.number="filters.precioMin" type="number" class="form-control" placeholder="$0">
                  </div>
                  <div>
                    <label>Máximo</label>
                    <input v-model.number="filters.precioMax" type="number" class="form-control" placeholder="$10,000,000,000">
                  </div>
                </div>
              </div>

              <div class="filter-group mb_30">
                <h5 class="filter-title mb_20">Ubicación</h5>
                <input v-model="filters.ubicacion" type="text" class="form-control" placeholder="Buscar por ubicación">
              </div>

              <div class="filter-actions">
                <button @click="applyFilters" class="tf-btn btn-bg-primary w-100 mb_10">
                  <span>Aplicar Filtros</span>
                  <span class="bg-effect"></span>
                </button>
                <button @click="clearFilters" class="tf-btn btn-outline-primary w-100">
                  <span>Limpiar</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Properties List -->
          <div class="col-lg-9">
            <div class="properties-header mb_30">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap_20">
                <div class="results-info">
                  <span class="results-count">{{ properties.length }} inmuebles encontrados</span>
                </div>
                <div class="sort-options d-flex gap_15 align-items-center">
                  <select v-model="sortBy" @change="sortProperties" class="sort-select">
                    <option value="reciente">Más Recientes</option>
                    <option value="precio_asc">Precio: Menor a Mayor</option>
                    <option value="precio_desc">Precio: Mayor a Menor</option>
                    <option value="area_desc">Área: Mayor a Menor</option>
                  </select>
                  <div class="view-toggle">
                    <button :class="['view-btn', { active: viewMode === 'grid' }]" @click="viewMode = 'grid'">
                      <i class="icon-Grid"></i>
                    </button>
                    <button :class="['view-btn', { active: viewMode === 'list' }]" @click="viewMode = 'list'">
                      <i class="icon-List"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center py_60">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
              </div>
              <p class="mt_20">Cargando inmuebles...</p>
            </div>

            <!-- Grid View -->
            <div v-else-if="viewMode === 'grid'" class="properties-grid row g-4">
              <div class="col-md-6" v-for="property in properties" :key="property.id">
                <div class="property-card">
                  <div class="property-image">
                    <img :src="property.imagen" :alt="property.titulo" width="100%" height="250" />
                    <span class="property-status">{{ property.operacion }}</span>
                  </div>
                  <div class="property-content p_25">
                    <div class="property-price mb_15">
                      <span class="price">${{ property.precio.toLocaleString() }}</span>
                      <span v-if="property.operacion === 'Arriendo'" class="period">/mes</span>
                    </div>
                    <h4 class="property-title mb_15">
                      <NuxtLink :to="`/site/inmueble/${property.id}`">{{ property.titulo }}</NuxtLink>
                    </h4>
                    <div class="property-location mb_20">
                      <i class="icon-MapPin"></i>
                      <span>{{ property.ubicacion }}</span>
                    </div>
                    <div class="property-features d-flex justify-content-between">
                      <div class="feature-item">
                        <i class="icon-Bed"></i>
                        <span>{{ property.habitaciones }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-Bathtub"></i>
                        <span>{{ property.banos }}</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-Ruler"></i>
                        <span>{{ property.area }}m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- List View -->
            <div v-else class="properties-list">
              <div class="property-item-horizontal mb_30" v-for="property in properties" :key="property.id">
                <div class="property-image-h">
                  <img :src="property.imagen" :alt="property.titulo" width="300" height="220" />
                  <span class="property-status">{{ property.operacion }}</span>
                </div>
                <div class="property-content-h flex-grow-1 p_25">
                  <div class="d-flex justify-content-between mb_15">
                    <div>
                      <h4 class="property-title mb_10">
                        <NuxtLink :to="`/site/inmueble/${property.id}`">{{ property.titulo }}</NuxtLink>
                      </h4>
                      <div class="property-location">
                        <i class="icon-MapPin"></i>
                        <span>{{ property.ubicacion }}</span>
                      </div>
                    </div>
                    <div class="property-price text-end">
                      <span class="price">${{ property.precio.toLocaleString() }}</span>
                      <span v-if="property.operacion === 'Arriendo'" class="period">/mes</span>
                    </div>
                  </div>
                  <p class="property-description mb_20">{{ property.descripcion }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="property-features d-flex gap_20">
                      <div class="feature-item">
                        <i class="icon-Bed"></i>
                        <span>{{ property.habitaciones }} Hab</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-Bathtub"></i>
                        <span>{{ property.banos }} Baños</span>
                      </div>
                      <div class="feature-item">
                        <i class="icon-Ruler"></i>
                        <span>{{ property.area }}m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="pagination-wrapper text-center mt_40" v-if="totalPages > 1">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useHead } from '#imports'

// Datos de propiedades disponibles (sincronizado con página de inicio)
const allProperties = [
  {
    id: 101,
    titulo: 'Beach View Villa',
    tipo: 'casa',
    ubicacion: 'Denpasar, Bali, Indonesia',
    operacion: 'Venta',
    precio: 1250000000,
    habitaciones: 3,
    banos: 2,
    area: 1235,
    parqueaderos: 2,
    estrato: 6,
    anoConstructruction: 2018,
    estado: 'Excelente',
    administracion: 350000,
    imagen: '/images/section/features-properties-1.jpg',
    descripcion: 'Villa con vista a la playa, ambientes amplios y excelente iluminación. Piscina privada y acceso directo al mar.',
    caracteristicas: ['Vista al mar', 'Piscina', 'Terraza', 'Jardín'],
    imagenes: ['/images/section/features-properties-1.jpg', '/images/section/features-properties-2.jpg']
  },
  {
    id: 102,
    titulo: 'Modern Apartment',
    tipo: 'apartamento',
    ubicacion: 'Singapore',
    operacion: 'Arriendo',
    precio: 4200000,
    habitaciones: 2,
    banos: 2,
    area: 850,
    parqueaderos: 1,
    estrato: 5,
    anoConstructruction: 2020,
    estado: 'Nuevo',
    administracion: 250000,
    imagen: '/images/section/features-properties-2.jpg',
    descripcion: 'Apartamento moderno en el centro de la ciudad, cerca de centros comerciales y transporte público.',
    caracteristicas: ['Balcón', 'Gimnasio', 'Parqueadero'],
    imagenes: ['/images/section/features-properties-2.jpg']
  },
  {
    id: 103,
    titulo: 'Townhouse Family Home',
    tipo: 'casa',
    ubicacion: 'Queensland',
    operacion: 'Venta',
    precio: 980000000,
    habitaciones: 4,
    banos: 3,
    area: 1600,
    parqueaderos: 2,
    estrato: 4,
    anoConstructruction: 2015,
    estado: 'Bueno',
    administracion: 180000,
    imagen: '/images/section/features-properties-1.jpg',
    descripcion: 'Casa familiar tipo townhouse con patio, zona BBQ y parqueadero doble.',
    caracteristicas: ['Patio', 'Zona BBQ', 'Parqueadero doble'],
    imagenes: ['/images/section/features-properties-1.jpg']
  },
  {
    id: 109,
    titulo: 'Lote Urbano',
    tipo: 'terreno',
    ubicacion: 'Envigado, Antioquia',
    operacion: 'Venta',
    precio: 500000000,
    habitaciones: 0,
    banos: 0,
    area: 1500,
    parqueaderos: 0,
    estrato: 2,
    anoConstructruction: 0,
    estado: 'Disponible',
    administracion: 0,
    imagen: '/images/section/features-properties-1.jpg',
    descripcion: 'Lote urbano con todos los servicios, ideal para construcción de vivienda.',
    caracteristicas: ['Servicios públicos', 'Cerca a colegios'],
    imagenes: ['/images/section/features-properties-1.jpg']
  },
  {
    id: 110,
    titulo: 'Apartamento Familiar',
    tipo: 'apartamento',
    ubicacion: 'Chapinero, Bogotá',
    operacion: 'Arriendo',
    precio: 3200000,
    habitaciones: 3,
    banos: 2,
    area: 1100,
    parqueaderos: 1,
    estrato: 4,
    anoConstructruction: 2012,
    estado: 'Bueno',
    administracion: 180000,
    imagen: '/images/section/features-properties-2.jpg',
    descripcion: 'Apartamento familiar con excelente ubicación, cerca de universidades y centros comerciales.',
    caracteristicas: ['Cocina integral', 'Zona de ropas', 'Balcón'],
    imagenes: ['/images/section/features-properties-2.jpg']
  },
  {
    id: 111,
    titulo: 'Casa Campestre',
    tipo: 'casa',
    ubicacion: 'La Calera, Cundinamarca',
    operacion: 'Venta',
    precio: 1500000000,
    habitaciones: 5,
    banos: 4,
    area: 2500,
    parqueaderos: 3,
    estrato: 5,
    anoConstructruction: 2016,
    estado: 'Excelente',
    administracion: 400000,
    imagen: '/images/section/features-properties-1.jpg',
    descripcion: 'Casa campestre con amplias zonas verdes y vista a la montaña.',
    caracteristicas: ['Zonas verdes', 'Chimenea', 'Vista panorámica'],
    imagenes: ['/images/section/features-properties-1.jpg']
  },
  {
    id: 112,
    titulo: 'Local Comercial Norte',
    tipo: 'local',
    ubicacion: 'Norte, Barranquilla',
    operacion: 'Arriendo',
    precio: 2800000,
    habitaciones: 0,
    banos: 1,
    area: 140,
    parqueaderos: 1,
    estrato: 4,
    anoConstructruction: 2014,
    estado: 'Disponible',
    administracion: 95000,
    imagen: '/images/section/features-properties-2.jpg',
    descripcion: 'Local comercial en zona norte, ideal para oficinas o consultorios.',
    caracteristicas: ['Parqueadero', 'Recepción'],
    imagenes: ['/images/section/features-properties-2.jpg']
  }
]

const route = useRoute()
const loading = ref(true)
const properties = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const sortBy = ref('reciente')
const viewMode = ref('grid')
const filters = ref({
  tipos: [],
  operacion: 'todas',
  precioMin: 0,
  precioMax: 10000000000,
  ubicacion: ''
})

const propertyTypes = [
  { value: 'apartamento', label: 'Apartamento' },
  { value: 'casa', label: 'Casa' },
  { value: 'local', label: 'Local Comercial' },
  { value: 'terreno', label: 'Terreno' }
]

const loadProperties = async (page = 1) => {
  loading.value = true
  try {
    let filtrados = allProperties.filter(p => {
      if (filters.value.tipos.length > 0 && !filters.value.tipos.includes(p.tipo)) return false
      if (filters.value.operacion !== 'todas' && p.operacion.toLowerCase() !== filters.value.operacion.toLowerCase()) return false
      if (filters.value.ubicacion && !p.ubicacion.toLowerCase().includes(filters.value.ubicacion.toLowerCase())) return false
      if (p.precio < filters.value.precioMin || p.precio > filters.value.precioMax) return false
      return true
    })
    
    if (sortBy.value === 'precio_asc') filtrados.sort((a, b) => a.precio - b.precio)
    else if (sortBy.value === 'precio_desc') filtrados.sort((a, b) => b.precio - a.precio)
    else if (sortBy.value === 'area_desc') filtrados.sort((a, b) => b.area - a.area)
    
    properties.value = filtrados
    totalPages.value = Math.max(1, Math.ceil(filtrados.length / 9))
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

const clearFilters = () => {
  filters.value = {
    tipos: [],
    operacion: 'todas',
    precioMin: 0,
    precioMax: 10000000000,
    ubicacion: ''
  }
  loadProperties(1)
}

onMounted(() => {
  if (route.query.tipo) filters.value.tipos = [route.query.tipo]
  if (route.query.operacion) filters.value.operacion = route.query.operacion
  if (route.query.precioMin) filters.value.precioMin = Number(route.query.precioMin)
  if (route.query.precioMax) filters.value.precioMax = Number(route.query.precioMax)
  if (route.query.ubicacion) filters.value.ubicacion = route.query.ubicacion.toLowerCase()
  loadProperties()
})

useHead({
  title: 'Inmuebles - Listado de Propiedades',
  meta: [
    { name: 'description', content: 'Explore nuestra amplia selección de propiedades disponibles para compra y arriendo.' }
  ]
})
</script>

<style scoped>
.filters-sidebar {
  background: var(--surface-color);
  padding: 30px;
  border-radius: 12px;
  position: sticky;
  top: 100px;
}

.filter-title {
  font-weight: 600;
  margin-bottom: 15px;
}

.custom-radio,
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
}

.filter-options-inline {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-filter-option {
  width: 50px;
  height: 50px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-filter-option.active,
.btn-filter-option:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.property-card {
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.property-item-horizontal {
  display: flex;
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.property-image-h {
  flex: 0 0 300px;
  position: relative;
}

.view-toggle {
  display: flex;
  gap: 5px;
  background: var(--background-color);
  padding: 5px;
  border-radius: 8px;
}

.view-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.view-btn.active {
  background: var(--primary-color);
  color: white;
}
</style>
