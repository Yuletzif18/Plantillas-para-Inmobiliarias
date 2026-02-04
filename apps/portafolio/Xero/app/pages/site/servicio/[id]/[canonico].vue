<template>
  <div class="servicio-detail-page">
    <!-- Hero Section -->
    <section class="service-hero bg-primary text-white">
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8">
            <div class="hero-content">
              <span class="service-category badge bg-light text-dark mb-3">{{ service.category }}</span>
              <h1 class="hero-title display-4 mb-4">{{ service.title }}</h1>
              <p class="hero-description lead mb-4">{{ service.shortDescription }}</p>
              <div class="hero-actions">
                <button @click="scrollToContact" class="btn btn-light btn-lg me-3">
                  <i class="fas fa-phone me-2"></i>
                  Solicitar Servicio
                </button>
                <button @click="scrollToInfo" class="btn btn-outline-light btn-lg">
                  <i class="fas fa-info-circle me-2"></i>
                  Más Información
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-image">
              <img :src="service.heroImage" :alt="service.title" class="img-fluid rounded shadow">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Navigation -->
    <nav class="service-nav sticky-top bg-white shadow-sm">
      <div class="container">
        <ul class="nav nav-pills justify-content-center py-3">
          <li class="nav-item">
            <a class="nav-link" href="#descripcion">Descripción</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#beneficios">Beneficios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proceso">Proceso</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#precios">Precios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonios">Testimonios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Service Description -->
    <section id="descripcion" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="service-description">
              <h2 class="section-title">¿Qué incluye nuestro servicio?</h2>
              <p class="lead">{{ service.fullDescription }}</p>
              
              <div class="service-features mt-5">
                <h3>Características del Servicio</h3>
                <div class="row">
                  <div v-for="feature in service.features" :key="feature.title" class="col-md-6 mb-4">
                    <div class="feature-card">
                      <div class="feature-icon">
                        <i :class="feature.icon"></i>
                      </div>
                      <div class="feature-content">
                        <h5>{{ feature.title }}</h5>
                        <p>{{ feature.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="service-sidebar">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0">Información del Servicio</h5>
                </div>
                <div class="card-body">
                  <div class="info-item">
                    <strong>Duración:</strong>
                    <span>{{ service.duration }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Modalidad:</strong>
                    <span>{{ service.modality }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Garantía:</strong>
                    <span>{{ service.warranty }}</span>
                  </div>
                  <div class="info-item">
                    <strong>Disponibilidad:</strong>
                    <span>{{ service.availability }}</span>
                  </div>
                </div>
              </div>

              <div class="quick-contact-card">
                <div class="card bg-light">
                  <div class="card-body text-center">
                    <h5>¿Necesitas ayuda?</h5>
                    <p>Nuestros expertos están listos para asesorarte</p>
                    <a href="tel:+525512345678" class="btn btn-primary">
                      <i class="fas fa-phone me-2"></i>
                      Llamar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section id="beneficios" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Beneficios de Elegir RentUP</h2>
            <div class="row">
              <div v-for="benefit in service.benefits" :key="benefit.title" class="col-lg-4 col-md-6 mb-4">
                <div class="benefit-card">
                  <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                      <div class="benefit-icon mb-3">
                        <i :class="benefit.icon"></i>
                      </div>
                      <h5 class="card-title">{{ benefit.title }}</h5>
                      <p class="card-text">{{ benefit.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="proceso" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Nuestro Proceso de Trabajo</h2>
            <div class="process-timeline">
              <div v-for="(step, index) in service.process" :key="step.title" class="timeline-item">
                <div class="timeline-marker">
                  <span class="step-number">{{ index + 1 }}</span>
                </div>
                <div class="timeline-content">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <h4>{{ step.title }}</h4>
                      <p>{{ step.description }}</p>
                      <div class="step-duration">
                        <i class="fas fa-clock me-2"></i>
                        {{ step.duration }}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="step-icon">
                        <i :class="step.icon"></i>
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

    <!-- Pricing -->
    <section id="precios" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Planes y Precios</h2>
            <div class="row justify-content-center">
              <div v-for="plan in service.pricingPlans" :key="plan.name" class="col-lg-4 col-md-6 mb-4">
                <div class="pricing-card">
                  <div class="card h-100 shadow-sm" :class="{ 'border-primary': plan.featured }">
                    <div class="card-header text-center" :class="plan.featured ? 'bg-primary text-white' : 'bg-light'">
                      <h5 class="mb-0">{{ plan.name }}</h5>
                      <small v-if="plan.featured" class="badge bg-warning text-dark">Más Popular</small>
                    </div>
                    <div class="card-body">
                      <div class="price-display text-center mb-4">
                        <span class="price-currency">$</span>
                        <span class="price-amount">{{ formatPrice(plan.price) }}</span>
                        <span class="price-period">{{ plan.period }}</span>
                      </div>
                      <ul class="plan-features">
                        <li v-for="feature in plan.features" :key="feature">
                          <i class="fas fa-check text-success me-2"></i>
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div class="card-footer text-center">
                      <button 
                        @click="selectPlan(plan)" 
                        class="btn w-100"
                        :class="plan.featured ? 'btn-primary' : 'btn-outline-primary'"
                      >
                        Solicitar {{ plan.name }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonios" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title text-center mb-5">Lo que dicen nuestros clientes</h2>
            <div class="row">
              <div v-for="testimonial in service.testimonials" :key="testimonial.name" class="col-lg-4 mb-4">
                <div class="testimonial-card">
                  <div class="card h-100 shadow-sm">
                    <div class="card-body">
                      <div class="testimonial-rating mb-3">
                        <i v-for="n in 5" :key="n" class="fas fa-star text-warning"></i>
                      </div>
                      <p class="testimonial-text">"{{ testimonial.text }}"</p>
                      <div class="testimonial-author d-flex align-items-center">
                        <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar me-3">
                        <div>
                          <h6 class="mb-0">{{ testimonial.name }}</h6>
                          <small class="text-muted">{{ testimonial.title }}</small>
                        </div>
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

    <!-- Contact Form -->
    <section id="contacto" class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-center mb-5">Solicita tu Servicio Ahora</h2>
            <form @submit.prevent="submitServiceRequest" class="service-request-form">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="nombre" class="form-label">Nombre Completo *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="nombre" 
                    v-model="form.nombre" 
                    required
                  >
                </div>
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email *</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="form.email" 
                    required
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="telefono" class="form-label">Teléfono *</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="telefono" 
                    v-model="form.telefono" 
                    required
                  >
                </div>
                <div class="col-md-6 mb-3">
                  <label for="plan" class="form-label">Plan de Interés</label>
                  <select class="form-select" id="plan" v-model="form.plan">
                    <option value="">Seleccionar plan</option>
                    <option v-for="plan in service.pricingPlans" :key="plan.name" :value="plan.name">
                      {{ plan.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea 
                  class="form-control" 
                  id="mensaje" 
                  rows="4" 
                  v-model="form.mensaje"
                  placeholder="Cuéntanos más sobre tus necesidades..."
                ></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-light btn-lg">
                  <i class="fas fa-paper-plane me-2"></i>
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta información dinámica
const route = useRoute()
const serviceId = route.params.id
const canonico = route.params.canonico

// Datos del servicio (esto vendría de una API)
const service = ref({
  id: serviceId,
  title: 'Avalúos Profesionales',
  category: 'Servicios Técnicos',
  shortDescription: 'Avalúos certificados para propiedades residenciales, comerciales e industriales con metodología técnica especializada.',
  fullDescription: 'Nuestro servicio de avalúos profesionales está respaldado por valuadores certificados con amplia experiencia en el mercado inmobiliario mexicano. Realizamos evaluaciones precisas y confiables utilizando metodologías reconocidas internacionalmente y cumpliendo con todas las normativas vigentes.',
  heroImage: '/img/avaluos-hero.jpg',
  duration: '3-5 días hábiles',
  modality: 'Presencial',
  warranty: '12 meses',
  availability: '24/7',
  features: [
    {
      title: 'Valuadores Certificados',
      description: 'Profesionales avalados por INDAABIN y FIVAC con años de experiencia.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Metodología Técnica',
      description: 'Aplicamos métodos comparativo, de costos y de ingresos según corresponda.',
      icon: 'fas fa-calculator'
    },
    {
      title: 'Documentación Completa',
      description: 'Informe detallado con fotografías, planos y análisis de mercado.',
      icon: 'fas fa-file-alt'
    },
    {
      title: 'Validez Legal',
      description: 'Avalúos con plena validez ante bancos, notarías e instituciones.',
      icon: 'fas fa-balance-scale'
    }
  ],
  benefits: [
    {
      title: 'Precisión Garantizada',
      description: 'Metodología rigurosa que garantiza la exactitud del valor determinado.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Entrega Rápida',
      description: 'Plazos de entrega competitivos sin comprometer la calidad.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Soporte Post-Entrega',
      description: 'Asesoría y aclaraciones durante 12 meses posteriores.',
      icon: 'fas fa-headset'
    },
    {
      title: 'Múltiples Propósitos',
      description: 'Válido para créditos, seguros, herencias, fusiones y más.',
      icon: 'fas fa-list-ul'
    },
    {
      title: 'Tecnología Avanzada',
      description: 'Uso de drones, software especializado y bases de datos actualizadas.',
      icon: 'fas fa-robot'
    },
    {
      title: 'Transparencia Total',
      description: 'Proceso transparente con comunicación constante del progreso.',
      icon: 'fas fa-eye'
    }
  ],
  process: [
    {
      title: 'Solicitud del Servicio',
      description: 'Recibimos tu solicitud y programamos la visita al inmueble.',
      duration: 'Mismo día',
      icon: 'fas fa-phone'
    },
    {
      title: 'Inspección Física',
      description: 'Nuestro valuador realiza inspección detallada de la propiedad.',
      duration: '2-3 horas',
      icon: 'fas fa-search'
    },
    {
      title: 'Análisis de Mercado',
      description: 'Investigación de comparables y análisis del entorno.',
      duration: '1-2 días',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Elaboración del Informe',
      description: 'Preparación del dictamen técnico con metodología aplicada.',
      duration: '1-2 días',
      icon: 'fas fa-edit'
    },
    {
      title: 'Entrega y Revisión',
      description: 'Entrega del avalúo final y explicación de resultados.',
      duration: '1 día',
      icon: 'fas fa-handshake'
    }
  ],
  pricingPlans: [
    {
      name: 'Básico',
      price: 3500,
      period: 'por avalúo',
      featured: false,
      features: [
        'Inspección física completa',
        'Informe técnico básico',
        'Validez de 6 meses',
        'Entrega en 5 días hábiles',
        'Soporte telefónico'
      ]
    },
    {
      name: 'Profesional',
      price: 5500,
      period: 'por avalúo',
      featured: true,
      features: [
        'Todo lo del plan Básico',
        'Análisis de mercado detallado',
        'Validez de 12 meses',
        'Entrega en 3 días hábiles',
        'Presentación ejecutiva',
        'Soporte prioritario'
      ]
    },
    {
      name: 'Premium',
      price: 8500,
      period: 'por avalúo',
      featured: false,
      features: [
        'Todo lo del plan Profesional',
        'Fotografía aérea con drones',
        'Análisis de tendencias',
        'Entrega en 24 horas',
        'Múltiples formatos digitales',
        'Asesoría personalizada',
        'Garantía extendida'
      ]
    }
  ],
  testimonials: [
    {
      name: 'María González',
      title: 'Directora Financiera',
      text: 'El avalúo fue muy detallado y nos ayudó a obtener el crédito que necesitábamos. Excelente servicio.',
      avatar: '/img/avatar-1.jpg'
    },
    {
      name: 'Carlos Ruiz',
      title: 'Desarrollador Inmobiliario',
      text: 'Trabajamos constantemente con RentUP para nuestros avalúos. Siempre puntuales y precisos.',
      avatar: '/img/avatar-2.jpg'
    },
    {
      name: 'Ana Martínez',
      title: 'Propietaria',
      text: 'Necesitaba un avalúo para una herencia y el proceso fue muy transparente y profesional.',
      avatar: '/img/avatar-3.jpg'
    }
  ]
})

// Formulario reactivo
const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  plan: '',
  mensaje: ''
})

useHead({
  title: `${service.value.title} - Servicios RentUP`,
  meta: [
    { name: 'description', content: `${service.value.shortDescription}` },
    { name: 'keywords', content: `${service.value.title.toLowerCase()}, servicios inmobiliarios, RentUP` },
    { property: 'og:title', content: `${service.value.title} - RentUP` },
    { property: 'og:description', content: service.value.shortDescription },
    { property: 'og:image', content: service.value.heroImage }
  ]
})

// Métodos
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const scrollToContact = () => {
  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
}

const scrollToInfo = () => {
  document.getElementById('descripcion').scrollIntoView({ behavior: 'smooth' })
}

const selectPlan = (plan) => {
  form.value.plan = plan.name
  scrollToContact()
}

const submitServiceRequest = () => {
  // Aquí iría la lógica para enviar el formulario
  alert('Solicitud enviada correctamente. Te contactaremos pronto.')
  // Resetear formulario
  form.value = {
    nombre: '',
    email: '',
    telefono: '',
    plan: '',
    mensaje: ''
  }
}
</script>

<style scoped>
.min-vh-50 {
  min-height: 50vh;
}

.service-category {
  font-size: 0.9rem;
  font-weight: 600;
}

.hero-title {
  font-weight: 700;
  line-height: 1.2;
}

.service-nav .nav-link {
  color: #495057;
  font-weight: 500;
}

.service-nav .nav-link:hover,
.service-nav .nav-link.active {
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  height: 100%;
}

.feature-icon {
  font-size: 2rem;
  color: #007bff;
  margin-right: 1rem;
  flex-shrink: 0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.benefit-card .card {
  transition: transform 0.3s ease;
}

.benefit-card:hover .card {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 3rem;
  color: #007bff;
}

.process-timeline {
  position: relative;
}

.timeline-item {
  position: relative;
  padding: 2rem 0;
  margin-left: 3rem;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 4rem;
  width: 2px;
  height: calc(100% - 2rem);
  background: #e9ecef;
}

.timeline-marker {
  position: absolute;
  left: -3.5rem;
  top: 2rem;
  width: 3rem;
  height: 3rem;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-number {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-icon {
  font-size: 4rem;
  color: #007bff;
  text-align: center;
}

.step-duration {
  color: #6c757d;
  font-style: italic;
}

.pricing-card .card {
  transition: transform 0.3s ease;
}

.pricing-card:hover .card {
  transform: translateY(-5px);
}

.price-display {
  position: relative;
}

.price-currency {
  font-size: 1.5rem;
  vertical-align: top;
}

.price-amount {
  font-size: 3rem;
  font-weight: 700;
  color: #007bff;
}

.price-period {
  font-size: 1rem;
  color: #6c757d;
  display: block;
}

.plan-features {
  list-style: none;
  padding: 0;
}

.plan-features li {
  padding: 0.5rem 0;
}

.testimonial-rating {
  font-size: 1.2rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.service-request-form .form-control,
.service-request-form .form-select {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.service-request-form .form-control:focus,
.service-request-form .form-select:focus {
  background: white;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .timeline-item {
    margin-left: 1rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
    width: 2rem;
    height: 2rem;
  }
  
  .step-number {
    font-size: 1rem;
  }
  
  .timeline-item:not(:last-child)::after {
    left: -0.5rem;
  }
}
</style>