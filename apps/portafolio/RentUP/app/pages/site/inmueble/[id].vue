<template>
  <div class="property-detail-page">
    <!-- Property Gallery -->
    <PropertyGallery 
      :images="property.images" 
      :title="property.title"
    />
    
    <!-- Property Details -->
    <section class="property-details py-5">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <!-- Property Header -->
            <div class="property-header mb-4">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h1 class="property-title">{{ property.title }}</h1>
                  <p class="property-location text-muted mb-2">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    {{ property.location }}
                  </p>
                  <div class="property-features">
                    <span class="badge bg-primary me-2">{{ property.type }}</span>
                    <span class="badge bg-success" v-if="property.featured">Destacado</span>
                  </div>
                </div>
                <div class="property-price">
                  <h2 class="price-text text-primary mb-0">
                    ${{ formatPrice(property.price) }}
                  </h2>
                  <small class="text-muted">{{ property.priceType }}</small>
                </div>
              </div>
            </div>
            
            <!-- Property Stats -->
            <div class="property-stats mb-4">
              <div class="row">
                <div class="col-3">
                  <div class="stat-item text-center">
                    <i class="fas fa-bed fa-2x text-primary mb-2"></i>
                    <div class="stat-number">{{ property.bedrooms }}</div>
                    <div class="stat-label">Habitaciones</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="stat-item text-center">
                    <i class="fas fa-bath fa-2x text-primary mb-2"></i>
                    <div class="stat-number">{{ property.bathrooms }}</div>
                    <div class="stat-label">Baños</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="stat-item text-center">
                    <i class="fas fa-ruler-combined fa-2x text-primary mb-2"></i>
                    <div class="stat-number">{{ property.area }}</div>
                    <div class="stat-label">m²</div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="stat-item text-center">
                    <i class="fas fa-car fa-2x text-primary mb-2"></i>
                    <div class="stat-number">{{ property.parking || 0 }}</div>
                    <div class="stat-label">Parking</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Property Description -->
            <div class="property-description mb-5">
              <h3 class="section-title">Descripción</h3>
              <div class="description-content" v-html="property.description"></div>
            </div>
            
            <!-- Property Features -->
            <div class="property-features-section mb-5" v-if="property.features && property.features.length">
              <h3 class="section-title">Características</h3>
              <div class="row">
                <div class="col-md-6" v-for="(feature, index) in property.features" :key="index">
                  <div class="feature-item d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-3"></i>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Property Map -->
            <div class="property-map mb-5" v-if="property.coordinates">
              <h3 class="section-title">Ubicación</h3>
              <PropertyMap 
                :coordinates="property.coordinates"
                :title="property.title"
              />
            </div>
            
            <!-- Similar Properties -->
            <div class="similar-properties">
              <h3 class="section-title">Propiedades Similares</h3>
              <SimilarProperties 
                :current-property-id="property.id"
                :property-type="property.type"
                :price-range="property.price"
              />
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="property-sidebar">
              <!-- Contact Form -->
              <div class="contact-form-card mb-4">
                <div class="card">
                  <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Contactar Agente</h5>
                  </div>
                  <div class="card-body">
                    <PropertyContactForm :property-id="property.id" />
                  </div>
                </div>
              </div>
              
              <!-- Agent Info -->
              <div class="agent-info-card mb-4" v-if="property.agent">
                <div class="card">
                  <div class="card-body text-center">
                    <img 
                      :src="property.agent.avatar" 
                      :alt="property.agent.name"
                      class="agent-avatar rounded-circle mb-3"
                    />
                    <h5>{{ property.agent.name }}</h5>
                    <p class="text-muted">{{ property.agent.role }}</p>
                    <div class="agent-contact">
                      <p class="mb-1">
                        <i class="fas fa-phone me-2"></i>
                        {{ property.agent.phone }}
                      </p>
                      <p class="mb-3">
                        <i class="fas fa-envelope me-2"></i>
                        {{ property.agent.email }}
                      </p>
                    </div>
                    <button class="btn btn-outline-primary btn-sm">
                      Ver Perfil Completo
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Property Actions -->
              <div class="property-actions mb-4">
                <div class="d-grid gap-2">
                  <button 
                    class="btn btn-primary btn-lg"
                    @click="openScheduleTour"
                  >
                    <i class="fas fa-calendar me-2"></i>
                    Agendar Visita
                  </button>
                  <button 
                    class="btn btn-outline-primary"
                    @click="toggleFavorite"
                  >
                    <i :class="['fas', isFavorite ? 'fa-heart' : 'fa-heart-o', 'me-2']"></i>
                    {{ isFavorite ? 'Guardado' : 'Guardar' }}
                  </button>
                  <button 
                    class="btn btn-outline-secondary"
                    @click="shareProperty"
                  >
                    <i class="fas fa-share me-2"></i>
                    Compartir
                  </button>
                </div>
              </div>
              
              <!-- Mortgage Calculator -->
              <div class="mortgage-calculator">
                <div class="card">
                  <div class="card-header">
                    <h6 class="mb-0">Calculadora de Hipoteca</h6>
                  </div>
                  <div class="card-body">
                    <MortgageCalculator :property-price="property.price" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const propertyId = route.params.id

// Estado reactivo
const property = ref({})
const loading = ref(true)
const isFavorite = ref(false)

// Métodos
const loadProperty = async () => {
  try {
    loading.value = true
    // Aquí iría la llamada a la API
    // const { data } = await $fetch(`/api/properties/${propertyId}`)
    
    // Mock data
    property.value = {
      id: propertyId,
      title: 'Apartamento Moderno en Centro Histórico',
      location: 'Centro Histórico, Ciudad de México',
      price: 4500000,
      priceType: 'Venta',
      type: 'Apartamento',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      parking: 1,
      featured: true,
      description: `
        <p>Hermoso apartamento completamente renovado en el corazón del centro histórico. 
        Esta propiedad única combina el encanto arquitectónico colonial con todas las 
        comodidades modernas.</p>
        <p>Ubicado en un edificio histórico restaurado, el apartamento cuenta con 
        techos altos, pisos de duela original y acabados de lujo. La cocina ha sido 
        completamente remodelada con electrodomésticos de alta gama.</p>
      `,
      features: [
        'Aire acondicionado',
        'Cocina equipada',
        'Closets empotrados',
        'Piso de duela',
        'Techos altos',
        'Balcón privado',
        'Edificio con elevador',
        'Seguridad 24/7'
      ],
      images: [
        '/img/properties/detail-1.jpg',
        '/img/properties/detail-2.jpg',
        '/img/properties/detail-3.jpg',
        '/img/properties/detail-4.jpg'
      ],
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      },
      agent: {
        name: 'Ana García',
        role: 'Agente Inmobiliario Senior',
        phone: '+52 55 1234-5678',
        email: 'ana.garcia@rentup.com',
        avatar: '/img/agents/agent-1.jpg'
      }
    }
  } catch (error) {
    console.error('Error loading property:', error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Propiedad no encontrada'
    })
  } finally {
    loading.value = false
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX').format(price)
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  // Aquí iría la lógica para guardar/quitar de favoritos
}

const openScheduleTour = () => {
  // Abrir modal o navegar a página de agendamiento
  console.log('Opening schedule tour modal')
}

const shareProperty = () => {
  if (navigator.share) {
    navigator.share({
      title: property.value.title,
      text: `Mira esta increíble propiedad: ${property.value.title}`,
      url: window.location.href
    })
  } else {
    // Fallback para navegadores que no soportan Web Share API
    navigator.clipboard.writeText(window.location.href)
    // Mostrar notificación de éxito
  }
}

// Meta información dinámica
useHead(() => ({
  title: `${property.value.title} - RentUP`,
  meta: [
    { name: 'description', content: `${property.value.title} en ${property.value.location}. ${property.value.bedrooms} habitaciones, ${property.value.bathrooms} baños, ${property.value.area}m². Precio: $${formatPrice(property.value.price)}` },
    { name: 'keywords', content: `${property.value.type}, ${property.value.location}, inmueble, propiedad, ${property.value.priceType}` },
    { property: 'og:title', content: property.value.title },
    { property: 'og:description', content: `${property.value.title} - ${property.value.location}` },
    { property: 'og:image', content: property.value.images?.[0] },
    { property: 'og:type', content: 'website' }
  ]
}))

// JSON-LD para SEO
useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: property.value.title,
  description: property.value.description,
  price: property.value.price,
  priceCurrency: 'MXN',
  address: {
    '@type': 'PostalAddress',
    addressLocality: property.value.location
  },
  floorSize: {
    '@type': 'QuantitativeValue',
    value: property.value.area,
    unitText: 'square meter'
  },
  numberOfRooms: property.value.bedrooms,
  numberOfBathroomsTotal: property.value.bathrooms
}))

// Lifecycle
onMounted(() => {
  loadProperty()
})
</script>

<style scoped>
.property-detail-page {
  padding-top: 0;
}

.property-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.property-location {
  font-size: 1.1rem;
}

.price-text {
  font-size: 2rem;
  font-weight: 700;
}

.property-stats {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #27ae60;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.feature-item {
  padding: 0.5rem 0;
}

.agent-avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.contact-form-card .card {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.property-sidebar {
  position: sticky;
  top: 2rem;
}

@media (max-width: 768px) {
  .property-title {
    font-size: 1.8rem;
  }
  
  .price-text {
    font-size: 1.5rem;
  }
  
  .property-stats .col-3 {
    margin-bottom: 1rem;
  }
  
  .property-sidebar {
    position: static;
    margin-top: 2rem;
  }
}
</style>