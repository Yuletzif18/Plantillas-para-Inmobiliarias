<template>
  <div class="blog-page">
    <!-- Page Header -->
    <PageHeader 
      title="Blog Inmobiliario" 
      subtitle="Noticias, consejos y tendencias del mercado inmobiliario"
      breadcrumb="Inicio / Blog"
    />
    
    <!-- Blog Content -->
    <section class="blog-section py-5">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <!-- Featured Post -->
            <div class="featured-post mb-5" v-if="featuredPost">
              <div class="card border-0 shadow-sm">
                <div class="featured-image">
                  <img 
                    :src="featuredPost.image" 
                    :alt="featuredPost.title"
                    class="card-img-top"
                  />
                  <div class="featured-badge">
                    <span class="badge bg-primary">Destacado</span>
                  </div>
                </div>
                <div class="card-body p-4">
                  <div class="post-meta mb-3">
                    <span class="text-muted">
                      <i class="fas fa-calendar me-2"></i>
                      {{ formatDate(featuredPost.publishedAt) }}
                    </span>
                    <span class="text-muted ms-3">
                      <i class="fas fa-user me-2"></i>
                      {{ featuredPost.author }}
                    </span>
                    <span class="text-muted ms-3">
                      <i class="fas fa-tag me-2"></i>
                      {{ featuredPost.category }}
                    </span>
                  </div>
                  <h2 class="card-title">
                    <NuxtLink 
                      :to="`/site/blog/${featuredPost.slug}`"
                      class="text-decoration-none"
                    >
                      {{ featuredPost.title }}
                    </NuxtLink>
                  </h2>
                  <p class="card-text">{{ featuredPost.excerpt }}</p>
                  <NuxtLink 
                    :to="`/site/blog/${featuredPost.slug}`"
                    class="btn btn-primary"
                  >
                    Leer más
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <!-- Blog Posts Grid -->
            <div class="blog-posts">
              <div class="row">
                <div 
                  v-for="post in paginatedPosts" 
                  :key="post.id"
                  class="col-md-6 mb-4"
                >
                  <BlogCard :post="post" />
                </div>
              </div>
              
              <!-- No Posts -->
              <div v-if="!loading && posts.length === 0" class="text-center py-5">
                <i class="fas fa-newspaper fa-3x text-muted mb-3"></i>
                <h4>No hay publicaciones disponibles</h4>
                <p class="text-muted">Vuelve pronto para más contenido.</p>
              </div>
            </div>
            
            <!-- Pagination -->
            <Pagination 
              v-if="totalPages > 1"
              :current-page="currentPage"
              :total-pages="totalPages"
              @page-change="handlePageChange"
            />
          </div>
          
          <!-- Sidebar -->
          <div class="col-lg-4">
            <BlogSidebar 
              :categories="categories"
              :recent-posts="recentPosts"
              :tags="tags"
              @category-filter="filterByCategory"
              @tag-filter="filterByTag"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="newsletter-section bg-primary text-white py-5">
      <div class="container text-center">
        <h3 class="mb-3">Mantente Informado</h3>
        <p class="mb-4">
          Suscríbete a nuestro newsletter y recibe las últimas noticias del mercado inmobiliario
        </p>
        <NewsletterForm />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Meta información
useHead({
  title: 'Blog Inmobiliario - RentUP',
  meta: [
    { name: 'description', content: 'Mantente al día con las últimas noticias, consejos y tendencias del mercado inmobiliario con nuestros expertos.' },
    { name: 'keywords', content: 'blog inmobiliario, noticias, consejos, mercado inmobiliario, tendencias, propiedades' },
    { property: 'og:title', content: 'Blog Inmobiliario - RentUP' },
    { property: 'og:description', content: 'Descubre las últimas tendencias y consejos del mercado inmobiliario' }
  ]
})

// Estado reactivo
const posts = ref([])
const featuredPost = ref(null)
const categories = ref([])
const tags = ref([])
const recentPosts = ref([])
const loading = ref(true)
const currentPage = ref(1)
const perPage = 6
const selectedCategory = ref('')
const selectedTag = ref('')

// Computed properties
const filteredPosts = computed(() => {
  let filtered = [...posts.value]
  
  if (selectedCategory.value) {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  if (selectedTag.value) {
    filtered = filtered.filter(post => post.tags.includes(selectedTag.value))
  }
  
  return filtered
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / perPage)
})

// Métodos
const loadPosts = async () => {
  try {
    loading.value = true
    // Aquí iría la llamada a la API
    // const { data } = await $fetch('/api/blog/posts')
    
    // Mock data
    const mockPosts = [
      {
        id: 1,
        title: 'Guía Completa para Comprar tu Primera Casa en 2024',
        slug: 'guia-comprar-primera-casa-2024',
        excerpt: 'Todo lo que necesitas saber antes de dar el gran paso hacia la compra de tu primera vivienda.',
        content: 'Contenido completo del artículo...',
        image: '/img/blog/post-1.jpg',
        author: 'Ana García',
        category: 'Guías de Compra',
        tags: ['primera casa', 'compra', 'consejos', 'hipoteca'],
        publishedAt: '2024-01-15',
        featured: true,
        readTime: 8
      },
      {
        id: 2,
        title: 'Tendencias del Mercado Inmobiliario 2024',
        slug: 'tendencias-mercado-inmobiliario-2024',
        excerpt: 'Análisis de las principales tendencias que marcarán el mercado inmobiliario este año.',
        content: 'Contenido completo del artículo...',
        image: '/img/blog/post-2.jpg',
        author: 'Carlos Mendoza',
        category: 'Análisis de Mercado',
        tags: ['tendencias', 'mercado', '2024', 'análisis'],
        publishedAt: '2024-01-10',
        featured: false,
        readTime: 6
      },
      {
        id: 3,
        title: 'Cómo Valorar tu Propiedad Correctamente',
        slug: 'como-valorar-propiedad-correctamente',
        excerpt: 'Aprende los factores clave para determinar el precio justo de tu propiedad.',
        content: 'Contenido completo del artículo...',
        image: '/img/blog/post-3.jpg',
        author: 'Miguel Rodríguez',
        category: 'Consejos de Venta',
        tags: ['valoración', 'precio', 'venta', 'tasación'],
        publishedAt: '2024-01-05',
        featured: false,
        readTime: 5
      }
    ]
    
    posts.value = mockPosts.filter(post => !post.featured)
    featuredPost.value = mockPosts.find(post => post.featured)
    
    // Extraer categorías y tags únicos
    const allCategories = [...new Set(mockPosts.map(post => post.category))]
    const allTags = [...new Set(mockPosts.flatMap(post => post.tags))]
    
    categories.value = allCategories.map(cat => ({
      name: cat,
      count: mockPosts.filter(post => post.category === cat).length
    }))
    
    tags.value = allTags
    recentPosts.value = mockPosts.slice(0, 3)
    
  } catch (error) {
    console.error('Error loading posts:', error)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const filterByCategory = (category) => {
  selectedCategory.value = category === selectedCategory.value ? '' : category
  selectedTag.value = ''
  currentPage.value = 1
}

const filterByTag = (tag) => {
  selectedTag.value = tag === selectedTag.value ? '' : tag
  selectedCategory.value = ''
  currentPage.value = 1
}

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Lifecycle
onMounted(() => {
  loadPosts()
})

// JSON-LD para SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Inmobiliario RentUP',
  description: 'Noticias, consejos y tendencias del mercado inmobiliario',
  url: 'https://rentup.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'RentUP',
    logo: 'https://rentup.com/img/logo.png'
  }
})
</script>

<style scoped>
.blog-page {
  padding-top: 0;
}

.featured-post {
  position: relative;
}

.featured-image {
  position: relative;
  overflow: hidden;
}

.featured-image img {
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-post:hover .featured-image img {
  transform: scale(1.05);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
}

.post-meta {
  font-size: 0.9rem;
}

.post-meta span {
  display: inline-block;
}

.card-title a {
  color: #2c3e50;
  transition: color 0.3s ease;
}

.card-title a:hover {
  color: #27ae60;
}

.blog-posts .card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-posts .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.newsletter-section {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
}

@media (max-width: 768px) {
  .featured-image img {
    height: 250px;
  }
  
  .post-meta span {
    display: block;
    margin-bottom: 0.25rem;
  }
  
  .post-meta span:not(:last-child) {
    margin-right: 0;
  }
}
</style>