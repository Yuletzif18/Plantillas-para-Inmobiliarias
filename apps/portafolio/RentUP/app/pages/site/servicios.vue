<template>
  <div class="services-page">
    <!-- Page Header -->
    <PageHeader 
      title="Nuestros Servicios" 
      subtitle="Soluciones integrales para todas tus necesidades inmobiliarias"
      breadcrumb="Inicio / Servicios"
    />
    
    <!-- Services Grid -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="sec-heading center mb-5">
              <h2>Servicios Profesionales</h2>
              <p>Ofrecemos una amplia gama de servicios inmobiliarios para cubrir todas tus necesidades</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <div class="service-card h-100">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-4">
                  <div class="service-icon mb-4">
                    <i :class="[service.icon, 'fa-3x', 'text-primary']"></i>
                  </div>
                  <h4 class="service-title mb-3">{{ service.title }}</h4>
                  <p class="service-description mb-4">{{ service.description }}</p>
                  <ul class="service-features list-unstyled mb-4">
                    <li v-for="(feature, fIndex) in service.features" :key="fIndex" class="mb-2">
                      <i class="fas fa-check-circle text-success me-2"></i>
                      {{ feature }}
                    </li>
                  </ul>
                  <NuxtLink 
                    :to="`/site/servicio/${service.id}/${service.slug}`"
                    class="btn btn-outline-primary"
                  >
                    Más Información
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="sec-heading center mb-5">
              <h2>Nuestro Proceso</h2>
              <p>Un proceso simple y transparente para garantizar tu satisfacción</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="col-lg-3 col-md-6 col-sm-12 mb-4"
          >
            <div class="process-step text-center">
              <div class="step-number">
                <span class="number">{{ index + 1 }}</span>
              </div>
              <div class="step-icon mb-3">
                <i :class="[step.icon, 'fa-2x', 'text-primary']"></i>
              </div>
              <h5 class="step-title">{{ step.title }}</h5>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="why-choose-content">
              <h2 class="mb-4">¿Por qué elegirnos?</h2>
              <p class="lead mb-4">
                Somos más que una inmobiliaria, somos tu socio estratégico 
                en el mundo de los bienes raíces.
              </p>
              
              <div class="advantages-list">
                <div 
                  v-for="(advantage, index) in advantages" 
                  :key="index"
                  class="advantage-item d-flex align-items-start mb-3"
                >
                  <div class="advantage-icon me-3">
                    <i :class="[advantage.icon, 'text-primary']"></i>
                  </div>
                  <div class="advantage-content">
                    <h6 class="advantage-title">{{ advantage.title }}</h6>
                    <p class="advantage-description mb-0">{{ advantage.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-4">
                <NuxtLink to="/site/contacto" class="btn btn-primary btn-lg">
                  Solicitar Consulta Gratuita
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="why-choose-image">
              <img src="/img/jpg/banner-5.jpg" class="img-fluid rounded" alt="Por qué elegirnos" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="sec-heading center mb-5">
              <h2>Lo que dicen nuestros clientes</h2>
              <p>Testimonios reales de clientes satisfechos con nuestros servicios</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <div class="testimonial-card">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-4">
                  <div class="testimonial-content mb-4">
                    <div class="stars mb-3">
                      <i 
                        v-for="star in 5" 
                        :key="star"
                        :class="['fas fa-star', star <= testimonial.rating ? 'text-warning' : 'text-muted']"
                      ></i>
                    </div>
                    <p class="testimonial-text">"{{ testimonial.content }}"</p>
                  </div>
                  <div class="testimonial-author d-flex align-items-center">
                    <img 
                      :src="testimonial.avatar" 
                      :alt="testimonial.name"
                      class="author-avatar rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div class="author-info">
                      <h6 class="author-name mb-0">{{ testimonial.name }}</h6>
                      <small class="author-role text-muted">{{ testimonial.role }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="call-action-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="call-action-inner">
              <div class="call-action-container">
                <div class="text-center">
                  <h2 class="text-white mb-3">¿Necesitas asesoría personalizada?</h2>
                  <p class="text-white mb-4">
                    Nuestros expertos están listos para ayudarte a encontrar la 
                    solución perfecta para tus necesidades inmobiliarias.
                  </p>
                  <div class="cta-buttons">
                    <NuxtLink to="/site/contacto" class="btn btn-light btn-lg me-3">
                      <i class="fas fa-phone me-2"></i>Contactar Ahora
                    </NuxtLink>
                    <NuxtLink to="/site/ofrece" class="btn btn-outline-light btn-lg">
                      <i class="fas fa-plus me-2"></i>Publicar Propiedad
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
// Meta información
useHead({
  title: 'Servicios - RentUP Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Descubre nuestros servicios inmobiliarios profesionales: compra, venta, alquiler, tasaciones, asesoría legal y más.' },
    { name: 'keywords', content: 'servicios inmobiliarios, compra venta, alquiler, tasaciones, asesoría legal, gestión propiedades' },
    { property: 'og:title', content: 'Servicios Inmobiliarios - RentUP' },
    { property: 'og:description', content: 'Soluciones integrales para todas tus necesidades inmobiliarias' }
  ]
})

// Estado reactivo
const services = ref([
  {
    id: 1,
    slug: 'compra-venta',
    title: 'Compra y Venta',
    icon: 'fas fa-handshake',
    description: 'Te acompañamos en todo el proceso de compra o venta de tu propiedad, desde la valoración hasta la escrituración.',
    features: [
      'Valoración gratuita de propiedades',
      'Marketing especializado',
      'Negociación profesional',
      'Tramitación completa'
    ]
  },
  {
    id: 2,
    slug: 'alquiler-gestion',
    title: 'Alquiler y Gestión',
    icon: 'fas fa-key',
    description: 'Servicios completos de alquiler y gestión de propiedades para propietarios e inquilinos.',
    features: [
      'Búsqueda de inquilinos cualificados',
      'Gestión de contratos',
      'Cobro de rentas',
      'Mantenimiento de propiedades'
    ]
  },
  {
    id: 3,
    slug: 'tasaciones',
    title: 'Tasaciones Oficiales',
    icon: 'fas fa-calculator',
    description: 'Tasaciones profesionales realizadas por expertos certificados para diferentes propósitos.',
    features: [
      'Tasaciones hipotecarias',
      'Valoraciones para seguros',
      'Informes técnicos detallados',
      'Certificación oficial'
    ]
  },
  {
    id: 4,
    slug: 'asesoria-legal',
    title: 'Asesoría Legal',
    icon: 'fas fa-gavel',
    description: 'Asesoramiento jurídico especializado en derecho inmobiliario y urbanístico.',
    features: [
      'Revisión de documentos',
      'Asesoría fiscal',
      'Tramitación de licencias',
      'Resolución de conflictos'
    ]
  },
  {
    id: 5,
    slug: 'inversion-inmobiliaria',
    title: 'Inversión Inmobiliaria',
    icon: 'fas fa-chart-line',
    description: 'Asesoramiento para inversores en la búsqueda de oportunidades rentables.',
    features: [
      'Análisis de rentabilidad',
      'Identificación de oportunidades',
      'Estrategias de inversión',
      'Seguimiento de mercado'
    ]
  },
  {
    id: 6,
    slug: 'reformas-interiorismo',
    title: 'Reformas e Interiorismo',
    icon: 'fas fa-paint-roller',
    description: 'Servicios de reforma y decoración para maximizar el valor de tu propiedad.',
    features: [
      'Diseño de interiores',
      'Reformas integrales',
      'Home staging',
      'Supervisión de obras'
    ]
  }
])

const processSteps = ref([
  {
    icon: 'fas fa-search',
    title: 'Consulta Inicial',
    description: 'Analizamos tus necesidades y objetivos para diseñar la estrategia perfecta.'
  },
  {
    icon: 'fas fa-clipboard-list',
    title: 'Planificación',
    description: 'Desarrollamos un plan detallado con plazos, presupuestos y acciones específicas.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Ejecución',
    description: 'Implementamos el plan con seguimiento constante y comunicación transparente.'
  },
  {
    icon: 'fas fa-check-circle',
    title: 'Entrega',
    description: 'Completamos el proceso asegurando tu total satisfacción y tranquilidad.'
  }
])

const advantages = ref([
  {
    icon: 'fas fa-medal',
    title: 'Experiencia Comprobada',
    description: 'Más de 8 años de experiencia en el mercado inmobiliario local.'
  },
  {
    icon: 'fas fa-users',
    title: 'Equipo Especializado',
    description: 'Profesionales certificados en todas las áreas del sector inmobiliario.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Garantía Total',
    description: 'Todas nuestras operaciones están respaldadas por seguros y garantías.'
  },
  {
    icon: 'fas fa-clock',
    title: 'Atención 24/7',
    description: 'Servicio de atención al cliente disponible cuando lo necesites.'
  },
  {
    icon: 'fas fa-dollar-sign',
    title: 'Precios Competitivos',
    description: 'Tarifas transparentes y competitivas sin costos ocultos.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Tecnología Avanzada',
    description: 'Herramientas digitales para una experiencia moderna y eficiente.'
  }
])

const testimonials = ref([
  {
    name: 'María González',
    role: 'Propietaria',
    content: 'Excelente servicio de gestión de alquiler. Se ocupan de todo y siempre están disponibles.',
    rating: 5,
    avatar: '/img/team-1.jpg'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Comprador',
    content: 'Me ayudaron a encontrar la casa perfecta para mi familia. Muy profesionales y eficientes.',
    rating: 5,
    avatar: '/img/team-2.jpg'
  },
  {
    name: 'Ana Martín',
    role: 'Inversora',
    content: 'Sus consejos de inversión fueron clave para mi éxito. Recomiendo totalmente sus servicios.',
    rating: 5,
    avatar: '/img/team-3.jpg'
  }
])
</script>

<style scoped>
.services-page {
  padding-top: 0;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.service-features li {
  font-size: 0.9rem;
  text-align: left;
}

.process-step {
  position: relative;
  padding: 2rem 1rem;
}

.step-number {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #27ae60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
}

.advantage-item {
  padding: 1rem 0;
}

.advantage-icon {
  width: 40px;
  font-size: 1.25rem;
}

.testimonial-card {
  height: 100%;
}

.author-avatar {
  object-fit: cover;
}

.call-action-wrap {
  background: linear-gradient(rgba(39, 174, 96, 0.9), rgba(39, 174, 96, 0.9)), url('/img/banner-2.jpg');
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
}

@media (max-width: 768px) {
  .cta-buttons .btn {
    display: block;
    margin: 0.5rem 0;
  }
  
  .process-step {
    margin-bottom: 2rem;
  }
  
  .step-number {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin: 0 auto 1rem;
  }
}
</style>