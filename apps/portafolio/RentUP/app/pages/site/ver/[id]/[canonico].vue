<template>
  <div class="pagina-personalizada">
    <!-- Hero Section Dinámico -->
    <section class="hero-section" :style="{ backgroundColor: pagina.colorHero || '#007bff' }">
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8">
            <div class="hero-content text-white">
              <h1 class="hero-title display-4 mb-4">{{ pagina.titulo }}</h1>
              <p class="hero-description lead mb-4" v-if="pagina.descripcion">
                {{ pagina.descripcion }}
              </p>
              <nav aria-label="breadcrumb" v-if="pagina.mostrarBreadcrumb">
                <ol class="breadcrumb bg-transparent">
                  <li class="breadcrumb-item">
                    <NuxtLink to="/site/" class="text-light">Inicio</NuxtLink>
                  </li>
                  <li class="breadcrumb-item active text-warning" aria-current="page">
                    {{ pagina.titulo }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-lg-4" v-if="pagina.imagenHero">
            <div class="hero-image">
              <img :src="pagina.imagenHero" :alt="pagina.titulo" class="img-fluid rounded shadow">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido Principal -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Contenido HTML dinámico -->
            <div class="contenido-personalizado" v-html="pagina.contenido"></div>
            
            <!-- Secciones adicionales -->
            <div v-if="pagina.secciones && pagina.secciones.length" class="secciones-adicionales mt-5">
              <div 
                v-for="(seccion, index) in pagina.secciones" 
                :key="index"
                class="seccion-personalizada mb-5"
              >
                <h2 v-if="seccion.titulo" class="seccion-title">{{ seccion.titulo }}</h2>
                <div v-html="seccion.contenido"></div>
              </div>
            </div>

            <!-- Call to Action -->
            <div v-if="pagina.cta" class="cta-section mt-5">
              <div class="card bg-primary text-white">
                <div class="card-body text-center py-5">
                  <h3 class="mb-3">{{ pagina.cta.titulo }}</h3>
                  <p class="lead mb-4">{{ pagina.cta.descripcion }}</p>
                  <NuxtLink 
                    :to="pagina.cta.enlace" 
                    class="btn btn-light btn-lg"
                  >
                    {{ pagina.cta.textoBoton }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Información de contacto -->
            <div v-if="pagina.mostrarContacto" class="contacto-section mt-5">
              <div class="card">
                <div class="card-header bg-light">
                  <h4 class="mb-0">¿Necesitas más información?</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <p><strong>Teléfono:</strong> +52 (55) 1234-5678</p>
                      <p><strong>Email:</strong> info@rentup.mx</p>
                    </div>
                    <div class="col-md-6">
                      <p><strong>Horarios:</strong> Lun - Vie 9:00 - 18:00</p>
                      <p><strong>Ubicación:</strong> Polanco, Ciudad de México</p>
                    </div>
                  </div>
                  <div class="text-center mt-3">
                    <NuxtLink to="/site/contacto" class="btn btn-primary">
                      <i class="fas fa-envelope me-2"></i>
                      Contactar Ahora
                    </NuxtLink>
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
// Obtener parámetros de la ruta
const route = useRoute()
const paginaId = route.params.id
const canonico = route.params.canonico

// Simulación de datos de página personalizada (esto vendría de una API/CMS)
const pagina = ref({
  id: paginaId,
  canonico: canonico,
  titulo: 'Página Personalizada',
  descripcion: 'Contenido personalizado dinámico para RentUP',
  colorHero: '#2c3e50',
  imagenHero: '/img/custom-page-hero.jpg',
  mostrarBreadcrumb: true,
  mostrarContacto: true,
  contenido: `
    <div class="row">
      <div class="col-lg-8">
        <h2 class="mb-4">Contenido Principal</h2>
        <p class="lead">
          Esta es una página personalizada que puede contener cualquier tipo de contenido 
          dinámico según las necesidades específicas del negocio inmobiliario.
        </p>
        <p>
          El contenido puede incluir información sobre servicios especiales, promociones, 
          eventos, guías de compra, artículos informativos, o cualquier otro tipo de 
          información relevante para los usuarios.
        </p>
        
        <h3>Características Destacadas</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check-circle text-success me-2"></i>Contenido completamente personalizable</li>
          <li><i class="fas fa-check-circle text-success me-2"></i>SEO optimizado</li>
          <li><i class="fas fa-check-circle text-success me-2"></i>Responsive design</li>
          <li><i class="fas fa-check-circle text-success me-2"></i>Integración con CMS</li>
        </ul>
      </div>
      <div class="col-lg-4">
        <div class="info-sidebar">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Información Importante</h5>
            </div>
            <div class="card-body">
              <p>Esta página puede ser utilizada para mostrar contenido específico como:</p>
              <ul class="list-unstyled">
                <li>• Promociones especiales</li>
                <li>• Guías de inversión</li>
                <li>• Artículos informativos</li>
                <li>• Eventos y noticias</li>
                <li>• Servicios adicionales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  secciones: [
    {
      titulo: 'Sección Adicional 1',
      contenido: `
        <p>
          Las páginas personalizadas permiten crear contenido específico para 
          diferentes necesidades del negocio inmobiliario, manteniendo la 
          coherencia visual y funcional del sitio.
        </p>
        <div class="row mt-4">
          <div class="col-md-4 text-center">
            <i class="fas fa-home fa-3x text-primary mb-3"></i>
            <h5>Propiedades</h5>
            <p>Información detallada sobre propiedades disponibles</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-chart-line fa-3x text-success mb-3"></i>
            <h5>Inversiones</h5>
            <p>Guías y consejos para invertir en bienes raíces</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-handshake fa-3x text-info mb-3"></i>
            <h5>Servicios</h5>
            <p>Servicios profesionales especializados</p>
          </div>
        </div>
      `
    }
  ],
  cta: {
    titulo: '¿Interesado en nuestros servicios?',
    descripcion: 'Contáctanos para obtener más información personalizada',
    textoBoton: 'Contactar Ahora',
    enlace: '/site/contacto'
  }
})

// Función para cargar datos de página desde API
const cargarPagina = async () => {
  try {
    // Aquí iría la llamada a la API para obtener el contenido de la página
    // const response = await $fetch(`/api/paginas/${paginaId}/${canonico}`)
    // pagina.value = response
    
    // Por ahora usamos datos simulados
    console.log(`Cargando página: ${paginaId}/${canonico}`)
  } catch (error) {
    console.error('Error cargando página:', error)
    // Manejar error - mostrar página 404 o contenido por defecto
  }
}

// Cargar datos al montar el componente
onMounted(() => {
  cargarPagina()
})

// Meta tags dinámicos
useHead({
  title: `${pagina.value.titulo} - RentUP`,
  meta: [
    { 
      name: 'description', 
      content: pagina.value.descripcion || `${pagina.value.titulo} - RentUP Portal Inmobiliario` 
    },
    { 
      name: 'keywords', 
      content: `${pagina.value.titulo.toLowerCase()}, RentUP, inmobiliaria, ${canonico}` 
    },
    { property: 'og:title', content: `${pagina.value.titulo} - RentUP` },
    { 
      property: 'og:description', 
      content: pagina.value.descripcion || `Contenido personalizado: ${pagina.value.titulo}` 
    },
    { property: 'og:image', content: pagina.value.imagenHero || '/img/rentup-default.jpg' }
  ]
})
</script>

<style scoped>
.min-vh-50 {
  min-height: 50vh;
}

.hero-title {
  font-weight: 700;
  line-height: 1.2;
}

.contenido-personalizado {
  font-size: 1.1rem;
  line-height: 1.7;
}

.contenido-personalizado h2,
.contenido-personalizado h3,
.contenido-personalizado h4 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.contenido-personalizado h2:first-child {
  margin-top: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.seccion-personalizada {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.seccion-title {
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-section .card {
  background: linear-gradient(135deg, #007bff, #0056b3);
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .seccion-personalizada {
    padding: 1.5rem;
  }
  
  .contenido-personalizado {
    font-size: 1rem;
  }
}
</style>