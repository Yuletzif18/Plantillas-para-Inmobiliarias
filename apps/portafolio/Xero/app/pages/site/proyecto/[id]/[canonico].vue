<template>
  <div class="proyecto-detail-page">
    <!-- Hero Section -->
    <section class="project-hero">
      <div class="hero-image" :style="{ backgroundImage: `url(${project.heroImage})` }">
        <div class="hero-overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="hero-content text-white">
                  <span class="project-badge">{{ project.status }}</span>
                  <h1 class="hero-title">{{ project.name }}</h1>
                  <p class="hero-location">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    {{ project.location }}
                  </p>
                  <div class="hero-price">
                    <span class="price-from">Desde</span>
                    <span class="price-amount">{{ formatPrice(project.priceFrom) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Navigation -->
    <nav class="project-nav sticky-top bg-white shadow-sm">
      <div class="container">
        <ul class="nav nav-pills justify-content-center py-3">
          <li class="nav-item">
            <a class="nav-link" href="#overview">Resumen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#amenities">Amenidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#location">Ubicación</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#plans">Planos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Galería</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Project Overview -->
    <section id="overview" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="project-overview">
              <h2 class="section-title">Descripción del Proyecto</h2>
              <p class="lead">{{ project.description }}</p>
              
              <div class="project-highlights">
                <h3>Características Principales</h3>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="feature-list">
                      <li v-for="feature in project.features.slice(0, Math.ceil(project.features.length/2))" :key="feature">
                        <i class="fas fa-check-circle text-success me-2"></i>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="feature-list">
                      <li v-for="feature in project.features.slice(Math.ceil(project.features.length/2))" :key="feature">
                        <i class="fas fa-check-circle text-success me-2"></i>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="project-info-card">
              <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0">Información del Proyecto</h5>
                </div>
                <div class="card-body">
                  <div class="info-item">
                    <strong>Total de Unidades:</strong>
                    <span>{{ project.totalUnits }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Unidades Disponibles:</strong>
                    <span>{{ project.availableUnits }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Fecha de Entrega:</strong>
                    <span>{{ project.deliveryDate }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Desarrollador:</strong>
                    <span>{{ project.developer }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Tipo:</strong>
                    <span>{{ project.type }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities -->
    <section id="amenities" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Amenidades y Servicios</h2>
            <div class="row">
              <div v-for="amenity in project.amenities" :key="amenity.name" class="col-lg-3 col-md-4 col-6 mb-4">
                <div class="amenity-item text-center">
                  <div class="amenity-icon">
                    <i :class="amenity.icon"></i>
                  </div>
                  <h6 class="amenity-name">{{ amenity.name }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section id="location" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Ubicación Privilegiada</h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="location-info">
                  <h4>{{ project.location }}</h4>
                  <p>{{ project.locationDescription }}</p>
                  
                  <h5>Puntos de Interés Cercanos</h5>
                  <ul class="nearby-places">
                    <li v-for="place in project.nearbyPlaces" :key="place.name">
                      <i :class="place.icon" class="me-2"></i>
                      <strong>{{ place.name }}</strong> - {{ place.distance }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="map-placeholder">
                  <div class="map-container">
                    <img src="/img/jpg/map-placeholder.jpg" alt="Mapa de ubicación" class="img-fluid rounded">
                    <div class="map-overlay">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>Ver mapa interactivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floor Plans -->
    <section id="plans" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Planos y Distribuciones</h2>
            <div class="row">
              <div v-for="plan in project.floorPlans" :key="plan.id" class="col-lg-4 col-md-6 mb-4">
                <div class="plan-card">
                  <div class="card shadow-sm">
                    <img :src="plan.image" :alt="plan.name" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">{{ plan.name }}</h5>
                      <div class="plan-details">
                        <div class="plan-feature">
                          <i class="fas fa-bed me-2"></i>
                          {{ plan.bedrooms }} Recámaras
                        </div>
                        <div class="plan-feature">
                          <i class="fas fa-bath me-2"></i>
                          {{ plan.bathrooms }} Baños
                        </div>
                        <div class="plan-feature">
                          <i class="fas fa-expand me-2"></i>
                          {{ plan.area }} m²
                        </div>
                      </div>
                      <div class="plan-price">
                        <span class="price">{{ formatPrice(plan.price) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Galería de Imágenes</h2>
            <div class="row">
              <div v-for="(image, index) in project.gallery" :key="index" class="col-lg-4 col-md-6 mb-4">
                <div class="gallery-item">
                  <img :src="image.src" :alt="image.alt" class="img-fluid rounded">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-4">¿Interesado en este proyecto?</h2>
            <p class="lead mb-4">
              Nuestros asesores especializados te brindarán toda la información que necesitas
            </p>
            <div class="contact-buttons">
              <a href="tel:+525512345678" class="btn btn-light btn-lg me-3">
                <i class="fas fa-phone me-2"></i>
                Llamar Ahora
              </a>
              <button @click="openContactModal" class="btn btn-outline-light btn-lg">
                <i class="fas fa-envelope me-2"></i>
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta información dinámica
const route = useRoute()
const projectId = route.params.id
const canonico = route.params.canonico

// Datos del proyecto (esto vendría de una API)
const project = ref({
  id: projectId,
  name: 'Torres del Bosque Residencial',
  location: 'Polanco, Ciudad de México',
  status: 'En Construcción',
  description: 'Exclusivo desarrollo residencial que combina diseño arquitectónico vanguardista con la tranquilidad de vivir rodeado de áreas verdes. Torres del Bosque ofrece departamentos de lujo con acabados premium y amenidades de primer nivel.',
  priceFrom: 8500000,
  heroImage: '/img/project-hero.jpg',
  totalUnits: 180,
  availableUnits: 95,
  deliveryDate: 'Junio 2025',
  developer: 'Grupo Inmobiliario Premier',
  type: 'Residencial',
  features: [
    'Diseño arquitectónico contemporáneo',
    'Acabados de lujo',
    'Vista panorámica de la ciudad',
    'Balcones amplios',
    'Cocinas equipadas',
    'Closets vestidores',
    'Pisos de mármol',
    'Ventanas panorámicas'
  ],
  amenities: [
    { name: 'Gimnasio', icon: 'fas fa-dumbbell' },
    { name: 'Alberca', icon: 'fas fa-swimming-pool' },
    { name: 'Salón de Eventos', icon: 'fas fa-glass-cheers' },
    { name: 'Terraza Garden', icon: 'fas fa-tree' },
    { name: 'Kids Club', icon: 'fas fa-child' },
    { name: 'Business Center', icon: 'fas fa-briefcase' },
    { name: 'Seguridad 24/7', icon: 'fas fa-shield-alt' },
    { name: 'Estacionamiento', icon: 'fas fa-car' }
  ],
  locationDescription: 'Ubicado en el corazón de Polanco, una de las zonas más exclusivas de la Ciudad de México, con acceso directo a las principales vías de comunicación.',
  nearbyPlaces: [
    { name: 'Parque Lincoln', distance: '200m', icon: 'fas fa-tree' },
    { name: 'Centro Comercial Antara', distance: '500m', icon: 'fas fa-shopping-bag' },
    { name: 'Metro Polanco', distance: '800m', icon: 'fas fa-train' },
    { name: 'Hospital ABC', distance: '1.2km', icon: 'fas fa-hospital' }
  ],
  floorPlans: [
    {
      id: 1,
      name: 'Modelo A',
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      price: 8500000,
      image: '/img/floor-plan-1.jpg'
    },
    {
      id: 2,
      name: 'Modelo B',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 120,
      price: 12000000,
      image: '/img/floor-plan-2.jpg'
    },
    {
      id: 3,
      name: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      price: 25000000,
      image: '/img/floor-plan-3.jpg'
    }
  ],
  gallery: [
    { src: '/img/gallery-1.jpg', alt: 'Fachada del proyecto' },
    { src: '/img/gallery-2.jpg', alt: 'Lobby principal' },
    { src: '/img/gallery-3.jpg', alt: 'Área de alberca' },
    { src: '/img/gallery-4.jpg', alt: 'Gimnasio' },
    { src: '/img/gallery-5.jpg', alt: 'Departamento modelo' },
    { src: '/img/gallery-6.jpg', alt: 'Terraza garden' }
  ]
})

useHead({
  title: `${project.value.name} - RentUP`,
  meta: [
    { name: 'description', content: `${project.value.description.substring(0, 160)}...` },
    { name: 'keywords', content: `${project.value.name}, ${project.value.location}, proyecto inmobiliario, departamentos lujo` },
    { property: 'og:title', content: `${project.value.name} - RentUP` },
    { property: 'og:description', content: project.value.description },
    { property: 'og:image', content: project.value.heroImage }
  ]
})

// Métodos
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const openContactModal = () => {
  // Aquí iría la lógica para abrir un modal de contacto
  alert('Modal de contacto (implementar)')
}
</script>

<style scoped>
.project-hero {
  position: relative;
  height: 60vh;
  min-height: 500px;
}

.hero-image {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6));
  display: flex;
  align-items: center;
}

.project-badge {
  background: #27ae60;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-location {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.price-from {
  display: block;
  font-size: 1rem;
  opacity: 0.9;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 700;
}

.project-nav .nav-link {
  color: #495057;
  font-weight: 500;
}

.project-nav .nav-link:hover,
.project-nav .nav-link.active {
  color: #27ae60;
  background-color: rgba(39, 174, 96, 0.1);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.project-info-card .info-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.amenity-item {
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.amenity-item:hover {
  transform: translateY(-5px);
}

.amenity-icon {
  font-size: 2.5rem;
  color: #27ae60;
  margin-bottom: 1rem;
}

.nearby-places {
  list-style: none;
  padding: 0;
}

.nearby-places li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.map-container {
  position: relative;
  cursor: pointer;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(39, 174, 96, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.map-container:hover .map-overlay {
  opacity: 1;
}

.plan-feature {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #6c757d;
}

.plan-price .price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #27ae60;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .price-amount {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-buttons .btn {
    display: block;
    margin: 0.5rem 0;
  }
}
</style>