<template>
  <div class="projects-page">
    <!-- Page Header -->
    <PageHeader 
      title="Nuestros Proyectos" 
      subtitle="Descubre los proyectos inmobiliarios más exclusivos y rentables"
      breadcrumb="Inicio / Proyectos"
    />
    
    <!-- Filter Bar -->
    <section class="py-4 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="filter-bar">
              <div class="row align-items-center">
                <div class="col-lg-8 col-md-8">
                  <div class="filter-buttons d-flex flex-wrap">
                    <button 
                      v-for="category in categories" 
                      :key="category.id"
                      @click="filterProjects(category.id)"
                      :class="[
                        'btn me-2 mb-2',
                        activeFilter === category.id ? 'btn-primary' : 'btn-outline-primary'
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="filter-select">
                    <select v-model="selectedSort" @change="sortProjects" class="form-select">
                      <option value="newest">Más Recientes</option>
                      <option value="oldest">Más Antiguos</option>
                      <option value="price-high">Mayor Precio</option>
                      <option value="price-low">Menor Precio</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="py-5">
      <div class="container">
        <div class="row" v-if="filteredProjects.length > 0">
          <div 
            v-for="project in paginatedProjects" 
            :key="project.id"
            class="col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <div class="project-card">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-image position-relative">
                  <img 
                    :src="project.image" 
                    :alt="project.title"
                    class="card-img-top project-img"
                  />
                  <div class="project-status">
                    <span :class="[
                      'badge',
                      project.status === 'En Construcción' ? 'bg-warning' : 
                      project.status === 'Completado' ? 'bg-success' : 
                      project.status === 'En Venta' ? 'bg-primary' : 'bg-info'
                    ]">
                      {{ project.status }}
                    </span>
                  </div>
                  <div class="project-overlay">
                    <div class="overlay-content">
                      <NuxtLink 
                        :to="`/site/proyecto/${project.id}/${project.slug}`"
                        class="btn btn-light btn-sm"
                      >
                        <i class="fas fa-eye me-2"></i>Ver Detalles
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4">
                  <div class="project-info">
                    <h5 class="project-title mb-2">{{ project.title }}</h5>
                    <p class="project-location text-muted mb-3">
                      <i class="fas fa-map-marker-alt me-2"></i>{{ project.location }}
                    </p>
                    <p class="project-description mb-3">{{ project.description }}</p>
                    
                    <div class="project-features mb-3">
                      <div class="row">
                        <div class="col-6">
                          <small class="text-muted">
                            <i class="fas fa-building me-1"></i>
                            {{ project.units }} unidades
                          </small>
                        </div>
                        <div class="col-6">
                          <small class="text-muted">
                            <i class="fas fa-calendar me-1"></i>
                            {{ project.delivery }}
                          </small>
                        </div>
                      </div>
                    </div>
                    
                    <div class="project-price">
                      <div class="price-range">
                        <span class="price-from">Desde</span>
                        <span class="price-amount">{{ formatPrice(project.priceFrom) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-transparent border-0 px-4 pb-4">
                  <div class="project-actions d-flex justify-content-between">
                    <NuxtLink 
                      :to="`/site/proyecto/${project.id}/${project.slug}`"
                      class="btn btn-outline-primary"
                    >
                      Ver Detalles
                    </NuxtLink>
                    <button @click="toggleFavorite(project.id)" class="btn btn-outline-danger">
                      <i :class="[
                        'fas',
                        favorites.includes(project.id) ? 'fa-heart' : 'fa-heart'
                      ]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No Results -->
        <div v-else class="row">
          <div class="col-12 text-center py-5">
            <div class="no-results">
              <i class="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No se encontraron proyectos</h4>
              <p class="text-muted">Intenta cambiar los filtros de búsqueda</p>
              <button @click="resetFilters" class="btn btn-primary">
                Mostrar Todos los Proyectos
              </button>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="row mt-5">
          <div class="col-lg-12">
            <nav aria-label="Projects pagination">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button 
                    class="page-link" 
                    @click="changePage(currentPage - 1)"
                    :disabled="currentPage === 1"
                  >
                    Anterior
                  </button>
                </li>
                <li 
                  v-for="page in totalPages" 
                  :key="page"
                  class="page-item" 
                  :class="{ active: currentPage === page }"
                >
                  <button class="page-link" @click="changePage(page)">
                    {{ page }}
                  </button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button 
                    class="page-link" 
                    @click="changePage(currentPage + 1)"
                    :disabled="currentPage === totalPages"
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="sec-heading center text-white mb-5">
              <h2>Nuestros Números</h2>
              <p>Estadísticas que reflejan nuestro compromiso y experiencia</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6 mb-4"
          >
            <div class="stat-item text-center">
              <div class="stat-icon mb-3">
                <i :class="[stat.icon, 'fa-3x']"></i>
              </div>
              <div class="stat-number">
                <h3 class="counter">{{ stat.number }}</h3>
              </div>
              <div class="stat-label">
                <p class="mb-0">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 mx-auto text-center">
            <div class="cta-content">
              <h2 class="mb-4">¿Tienes un proyecto inmobiliario?</h2>
              <p class="lead mb-4">
                Únete a nosotros y haz realidad tu proyecto inmobiliario. 
                Ofrecemos el mejor asesoramiento y acompañamiento.
              </p>
              <div class="cta-buttons">
                <NuxtLink to="/site/contacto" class="btn btn-primary btn-lg me-3">
                  <i class="fas fa-phone me-2"></i>Contactar Ahora
                </NuxtLink>
                <NuxtLink to="/site/ofrece" class="btn btn-outline-primary btn-lg">
                  <i class="fas fa-plus me-2"></i>Presentar Proyecto
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta información
useHead({
  title: 'Proyectos - RentUP Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Descubre los mejores proyectos inmobiliarios: residenciales, comerciales y de inversión. Encuentra tu próxima oportunidad.' },
    { name: 'keywords', content: 'proyectos inmobiliarios, desarrollos residenciales, inversión inmobiliaria, nuevos proyectos' },
    { property: 'og:title', content: 'Proyectos Inmobiliarios - RentUP' },
    { property: 'og:description', content: 'Los proyectos inmobiliarios más exclusivos y rentables del mercado' }
  ]
})

// Estado reactivo
const activeFilter = ref('all')
const selectedSort = ref('newest')
const currentPage = ref(1)
const itemsPerPage = 9
const favorites = ref([])

const categories = ref([
  { id: 'all', name: 'Todos' },
  { id: 'residential', name: 'Residencial' },
  { id: 'commercial', name: 'Comercial' },
  { id: 'mixed', name: 'Uso Mixto' },
  { id: 'luxury', name: 'Lujo' }
])

const projects = ref([
  {
    id: 1,
    slug: 'torre-verde-residencial',
    title: 'Torre Verde Residencial',
    location: 'Polanco, Ciudad de México',
    description: 'Moderno desarrollo residencial con amenidades de lujo y tecnología sustentable.',
    image: '/img/png/p-1.png',
    category: 'residential',
    status: 'En Construcción',
    units: 120,
    delivery: 'Dic 2024',
    priceFrom: 3500000,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    slug: 'plaza-comercial-santa-fe',
    title: 'Plaza Comercial Santa Fe',
    location: 'Santa Fe, Ciudad de México',
    description: 'Centro comercial con oficinas y espacios comerciales en zona premium.',
    image: '/img/png/p-2.png',
    category: 'commercial',
    status: 'En Venta',
    units: 45,
    delivery: 'Jun 2024',
    priceFrom: 8500000,
    createdAt: '2024-02-20'
  },
  {
    id: 3,
    slug: 'residencial-bosques',
    title: 'Residencial Los Bosques',
    location: 'Bosques de las Lomas, Ciudad de México',
    description: 'Exclusivo desarrollo de casas con vista al bosque y club de golf.',
    image: '/img/png/p-3.png',
    category: 'luxury',
    status: 'Completado',
    units: 28,
    delivery: 'Entrega inmediata',
    priceFrom: 12500000,
    createdAt: '2023-08-10'
  },
  {
    id: 4,
    slug: 'distrito-central',
    title: 'Distrito Central',
    location: 'Roma Norte, Ciudad de México',
    description: 'Desarrollo de uso mixto con departamentos, oficinas y comercios.',
    image: '/img/png/p-4.png',
    category: 'mixed',
    status: 'En Construcción',
    units: 85,
    delivery: 'Mar 2025',
    priceFrom: 4200000,
    createdAt: '2024-03-05'
  },
  {
    id: 5,
    slug: 'torres-del-valle',
    title: 'Torres del Valle',
    location: 'Valle Oriente, Monterrey',
    description: 'Complejo residencial con dos torres y amenidades exclusivas.',
    image: '/img/png/p-5.png',
    category: 'residential',
    status: 'Pre-venta',
    units: 156,
    delivery: 'Ago 2025',
    priceFrom: 2800000,
    createdAt: '2024-04-12'
  },
  {
    id: 6,
    slug: 'corporativo-insurgentes',
    title: 'Corporativo Insurgentes',
    location: 'Insurgentes Sur, Ciudad de México',
    description: 'Torre corporativa con oficinas premium y espacios de coworking.',
    image: '/img/png/p-6.png',
    category: 'commercial',
    status: 'En Construcción',
    units: 32,
    delivery: 'Oct 2024',
    priceFrom: 15500000,
    createdAt: '2023-12-08'
  }
])

const stats = ref([
  {
    icon: 'fas fa-building',
    number: '25+',
    label: 'Proyectos Completados'
  },
  {
    icon: 'fas fa-home',
    number: '1,500+',
    label: 'Unidades Entregadas'
  },
  {
    icon: 'fas fa-users',
    number: '850+',
    label: 'Familias Satisfechas'
  },
  {
    icon: 'fas fa-award',
    number: '8',
    label: 'Años de Experiencia'
  }
])

// Computed properties
const filteredProjects = computed(() => {
  let filtered = projects.value

  // Filter by category
  if (activeFilter.value !== 'all') {
    filtered = filtered.filter(project => project.category === activeFilter.value)
  }

  // Sort projects
  switch (selectedSort.value) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      break
    case 'oldest':
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      break
    case 'price-high':
      filtered.sort((a, b) => b.priceFrom - a.priceFrom)
      break
    case 'price-low':
      filtered.sort((a, b) => a.priceFrom - b.priceFrom)
      break
  }

  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProjects.value.slice(start, end)
})

// Methods
const filterProjects = (categoryId) => {
  activeFilter.value = categoryId
  currentPage.value = 1
}

const sortProjects = () => {
  currentPage.value = 1
}

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const resetFilters = () => {
  activeFilter.value = 'all'
  selectedSort.value = 'newest'
  currentPage.value = 1
}

const toggleFavorite = (projectId) => {
  const index = favorites.value.indexOf(projectId)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(projectId)
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Watch for filter changes
watch([activeFilter, selectedSort], () => {
  currentPage.value = 1
})
</script>

<style scoped>
.projects-page {
  padding-top: 0;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.card-image {
  overflow: hidden;
  height: 250px;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-status {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.project-location {
  font-size: 0.9rem;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
}

.price-range {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.price-from {
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: uppercase;
}

.price-amount {
  font-size: 1.25rem;
  font-weight: 700;
  color: #27ae60;
}

.filter-bar {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.stat-item {
  padding: 2rem 1rem;
}

.stat-number h3 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.no-results {
  padding: 3rem 1rem;
}

@media (max-width: 768px) {
  .filter-buttons {
    margin-bottom: 1rem;
  }
  
  .cta-buttons .btn {
    display: block;
    margin: 0.5rem 0;
  }
  
  .stat-number h3 {
    font-size: 2rem;
  }
  
  .project-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>