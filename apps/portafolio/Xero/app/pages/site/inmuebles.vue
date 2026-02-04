<template>
  <div class="properties-page">
    <div class="page-title" style="background:#f4f4f4 url(/img/png/banner-2.png) no-repeat top center; background-size: cover;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h2 class="ipt-title">Nuestros Inmuebles</h2>
            <span class="ipn-subtitle">Encuentra la propiedad perfecta para ti</span>
          </div>
        </div>
      </div>
    </div>

    <section class="properties-grid py-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="results-info">
              <span class="text-muted">
                Mostrando {{ paginatedProperties.length }} de {{ filteredProperties.length }} inmuebles
              </span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="sort-options d-flex justify-content-end">
              <select v-model="sortBy" @change="sortProperties" class="form-select w-auto">
                <option value="newest">Más recientes</option>
                <option value="price-low">Precio: Menor a mayor</option>
                <option value="price-high">Precio: Mayor a menor</option>
                <option value="area">Área</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center" v-if="!loading">
          <div 
            v-for="property in paginatedProperties" 
            :key="property.id"
            class="col-lg-4 col-md-6 col-sm-12"
          >
            <div class="property-listing property-2 h-100">
              <div class="listing-img-wrapper">
                <div class="_exlio_125">{{ property.featured ? 'Destacado' : 'Disponible' }}</div>
                <div class="list-img-slide">
                  <div class="click">
                    <div>
                      <NuxtImg 
                        :src="property.images[0]" 
                        :alt="property.title"
                        class="img-fluid mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="listing-detail-wrapper">
                <div class="listing-short-detail-wrap">
                  <div class="_card_list_flex mb-2">
                    <div class="_card_list_left">
                      <div class="_card_list_rent">
                        <span>{{ property.type }}</span>
                      </div>
                    </div>
                    <div class="_card_list_right">
                      <div class="_card_list_price">
                        <span>€{{ formatPrice(property.price) }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="_card_list_flex">
                    <h4 class="listing-name verified">
                      <NuxtLink :to="`/site/inmueble/${property.id}`">
                        {{ property.title }}
                      </NuxtLink>
                    </h4>
                  </div>
                </div>
              </div>
              
              <div class="price-features-wrapper">
                <div class="list-fx-features">
                  <div class="listing-card-info-icon" v-if="property.bedrooms > 0">
                    <div class="inc-fleat-icon"><img src="/img/svg/bed.svg" width="13" alt="" /></div>{{ property.bedrooms }} Habitaciones
                  </div>
                  <div class="listing-card-info-icon">
                    <div class="inc-fleat-icon"><img src="/img/svg/bathtub.svg" width="13" alt="" /></div>{{ property.bathrooms }} Baños
                  </div>
                  <div class="listing-card-info-icon">
                    <div class="inc-fleat-icon"><img src="/img/svg/move.svg" width="13" alt="" /></div>{{ property.area }} m²
                  </div>
                </div>
              </div>
              
              <div class="listing-detail-footer">
                <div class="footer-first">
                  <div class="foot-location"><i class="ti-location-pin me-2"></i>{{ property.location }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>

        <div v-if="!loading && filteredProperties.length === 0" class="text-center py-5">
          <i class="fas fa-search fa-3x text-muted mb-3"></i>
          <h4>No se encontraron inmuebles</h4>
          <p class="text-muted">Intenta ajustar tus filtros de búsqueda</p>
        </div>

        <div v-if="totalPages > 1" class="row mt-5">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="handlePageChange(currentPage - 1)">
                    <i class="ti-angle-left"></i>
                  </a>
                </li>
                <li 
                  v-for="page in totalPages" 
                  :key="page" 
                  class="page-item" 
                  :class="{ active: currentPage === page }"
                >
                  <a class="page-link" href="#" @click.prevent="handlePageChange(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click.prevent="handlePageChange(currentPage + 1)">
                    <i class="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section bg-danger text-white py-5">
      <div class="container text-center">
        <h3>¿No encuentras lo que buscas?</h3>
        <p class="mb-4">Contacta con nuestros expertos para una búsqueda personalizada</p>
        <NuxtLink to="/site/contacto" class="btn btn-light btn-lg">
          Contactar Experto
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

useHead({
  title: 'Inmuebles - RentUP Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Explora nuestra amplia selección de inmuebles disponibles para compra, venta y alquiler.' },
    { name: 'keywords', content: 'inmuebles, propiedades, casas, apartamentos, venta, alquiler' },
    { property: 'og:title', content: 'Inmuebles Disponibles - RentUP' },
    { property: 'og:description', content: 'Descubre miles de propiedades disponibles en nuestra plataforma' }
  ]
})

const properties = ref([])
const loading = ref(true)
const currentPage = ref(1)
const perPage = 12
const sortBy = ref('newest')

const filteredProperties = computed(() => {
  return [...properties.value]
})

const sortedProperties = computed(() => {
  const sorted = [...filteredProperties.value]

  switch (sortBy.value) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'area':
      return sorted.sort((a, b) => b.area - a.area)
    case 'newest':
    default:
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }
})

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return sortedProperties.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProperties.value.length / perPage)
})

const loadProperties = async () => {
  try {
    loading.value = true
    properties.value = [
      {
        id: 1,
        title: 'Casa Familiar de Lujo',
        price: 450000,
        type: 'Apartamento',
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        location: 'Madrid, España',
        images: ['/img/png/p-1.png'],
        featured: true,
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        title: 'Hermosa Villa con Vista',
        price: 850000,
        type: 'Villa',
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        location: 'Barcelona, España',
        images: ['/img/png/p-2.png'],
        featured: true,
        createdAt: '2024-01-14'
      },
      {
        id: 3,
        title: 'Palacete en Alquiler',
        price: 1200000,
        type: 'Casa',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        location: 'Valencia, España',
        images: ['/img/png/p-3.png'],
        featured: false,
        createdAt: '2024-01-13'
      },
      {
        id: 4,
        title: 'Apartamento Moderno en Centro',
        price: 380000,
        type: 'Apartamento',
        bedrooms: 2,
        bathrooms: 2,
        area: 95,
        location: 'Sevilla, España',
        images: ['/img/png/p-4.png'],
        featured: false,
        createdAt: '2024-01-12'
      },
      {
        id: 5,
        title: 'Chalet con Jardín Amplio',
        price: 675000,
        type: 'Casa',
        bedrooms: 4,
        bathrooms: 3,
        area: 280,
        location: 'Bilbao, España',
        images: ['/img/png/p-5.png'],
        featured: false,
        createdAt: '2024-01-11'
      },
      {
        id: 6,
        title: 'Oficina Premium en Zona Empresarial',
        price: 950000,
        type: 'Comercial',
        bedrooms: 0,
        bathrooms: 3,
        area: 320,
        location: 'Madrid, España',
        images: ['/img/png/p-6.png'],
        featured: false,
        createdAt: '2024-01-10'
      },
      {
        id: 7,
        title: 'Penthouse con Terraza Panorámica',
        price: 1500000,
        type: 'Apartamento',
        bedrooms: 3,
        bathrooms: 3,
        area: 185,
        location: 'Barcelona, España',
        images: ['/img/png/p-1.png'],
        featured: true,
        createdAt: '2024-01-09'
      },
      {
        id: 8,
        title: 'Casa de Campo Tradicional',
        price: 420000,
        type: 'Casa',
        bedrooms: 4,
        bathrooms: 2,
        area: 210,
        location: 'Valencia, España',
        images: ['/img/png/p-2.png'],
        featured: false,
        createdAt: '2024-01-08'
      },
      {
        id: 9,
        title: 'Loft Industrial Moderno',
        price: 310000,
        type: 'Apartamento',
        bedrooms: 1,
        bathrooms: 1,
        area: 78,
        location: 'Madrid, España',
        images: ['/img/png/p-3.png'],
        featured: false,
        createdAt: '2024-01-07'
      }
    ]
  } catch (error) {
    console.error('Error loading properties:', error)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const sortProperties = () => {
  currentPage.value = 1 // Reset página al ordenar
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Lifecycle
onMounted(() => {
  loadProperties()
})
</script>

<style scoped>
.properties-page {
  min-height: 100vh;
}

.page-title {
  padding: 80px 0;
  text-align: center;
}

.ipt-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
}

.ipn-subtitle {
  font-size: 1.1rem;
  color: #7c8ba1;
}

.results-info {
  display: flex;
  align-items: center;
  height: 100%;
}

.sort-options select {
  min-width: 200px;
  border-radius: 8px;
  border: 2px solid #eee;
  padding: 8px 15px;
}

.property-listing {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  margin-bottom: 30px;
}

.property-listing:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 25px rgba(0,0,0,0.15);
}

.listing-img-wrapper {
  position: relative;
  overflow: hidden;
}

._exlio_125 {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #fa2c5a;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 2;
}

.list-img-slide img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.listing-detail-wrapper {
  padding: 20px;
}

._card_list_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

._card_list_rent span {
  background: rgba(250, 44, 90, 0.1);
  color: #fa2c5a;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 600;
}

._card_list_price span {
  color: #fa2c5a;
  font-size: 1.3rem;
  font-weight: 700;
}

.listing-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 10px 0;
}

.listing-name a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.listing-name a:hover {
  color: #fa2c5a;
}

.price-features-wrapper {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.list-fx-features {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.listing-card-info-icon {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #7c8ba1;
}

.inc-fleat-icon {
  margin-right: 5px;
  display: flex;
  align-items: center;
}

.listing-detail-footer {
  padding: 15px 20px;
}

.foot-location {
  color: #7c8ba1;
  font-size: 0.9rem;
}

.cta-section {
  background: linear-gradient(135deg, #fa2c5a 0%, #fd7e14 100%);
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.pagination {
  margin-top: 30px;
}

.page-link {
  color: #fa2c5a;
  border: 1px solid #eee;
  padding: 8px 15px;
  margin: 0 3px;
  border-radius: 5px;
}

.page-link:hover {
  background-color: #fa2c5a;
  color: white;
  border-color: #fa2c5a;
}

.page-item.active .page-link {
  background-color: #fa2c5a;
  border-color: #fa2c5a;
}

.page-item.disabled .page-link {
  color: #ccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .sort-options {
    justify-content: center !important;
    margin-top: 1rem;
  }
  
  .results-info {
    text-align: center;
  }
  
  .ipt-title {
    font-size: 2rem;
  }
  
  .list-fx-features {
    flex-direction: column;
    gap: 5px;
  }
}
</style>