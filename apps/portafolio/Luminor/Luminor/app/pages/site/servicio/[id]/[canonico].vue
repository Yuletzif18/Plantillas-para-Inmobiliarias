<script setup>
/**
 * Página de detalle de servicio inmobiliario.
 * Carga información específica del servicio y gestiona solicitudes de contacto.
 */
import { useNuxtApp, useHead } from '#app'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const { $inmostore } = useNuxtApp()
const route = useRoute()

// Route parameters
const id = route.params.id
const canonico = route.params.canonico

// State
const loading = ref(true)
const service = ref({})
const relatedServices = ref([])
const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const showSuccessModal = ref(false)

// Datos de servicios disponibles (contenido estático)
const demoServices = {
  '1': {
    id: 1,
    slug: 'compra-de-propiedades',
    titulo: 'Compra de Propiedades',
    icon: 'ShoppingCart',
    descripcion: 'Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.',
    descripcionLarga: 'Nuestro servicio de compra de propiedades está diseñado para hacer que el proceso de adquisición de tu nuevo hogar o inversión sea lo más simple y seguro posible. Con años de experiencia en el mercado inmobiliario, conocemos cada rincón de la ciudad y tenemos acceso a las mejores oportunidades del mercado.',
    infoAdicional: 'Trabajamos con un equipo de profesionales que te acompañarán en cada etapa del proceso, desde la búsqueda inicial hasta la firma de escrituras.',
    imagen: '/images/section/properties-details-1.jpg',
    caracteristicas: ['Búsqueda personalizada', 'Visitas coordinadas', 'Análisis de mercado', 'Asesoría en negociación', 'Verificación legal', 'Acompañamiento en trámites', 'Gestión hipotecaria', 'Entrega de documentos'],
    proceso: [
      { titulo: 'Consulta Inicial', descripcion: 'Conocemos tus necesidades y presupuesto.' },
      { titulo: 'Búsqueda', descripcion: 'Preseleccionamos opciones para ti.' },
      { titulo: 'Visitas', descripcion: 'Te acompañamos a visitar propiedades.' },
      { titulo: 'Negociación', descripcion: 'Negociamos el mejor precio.' },
      { titulo: 'Verificación', descripcion: 'Verificamos aspectos legales.' },
      { titulo: 'Cierre', descripcion: 'Acompañamos la firma de documentos.' }
    ],
    beneficios: [
      { icon: 'Clock', titulo: 'Ahorro de Tiempo', descripcion: 'Filtrado y preselección de propiedades.' },
      { icon: 'CurrencyDollar', titulo: 'Mejor Precio', descripcion: 'Experiencia en negociación.' },
      { icon: 'ShieldCheck', titulo: 'Seguridad Legal', descripcion: 'Verificación completa de documentos.' },
      { icon: 'UserCheck', titulo: 'Asesoría Experta', descripcion: 'Profesionales certificados.' }
    ],
    tarifas: {
      comision: '3%',
      periodo: 'del valor de compra',
      descripcion: 'Comisión competitiva con todos nuestros servicios.',
      incluye: ['Búsqueda ilimitada', 'Visitas acompañadas', 'Negociación profesional', 'Verificación legal', 'Gestión de documentos', 'Asesoría hipotecaria']
    }
  },
  '2': {
    id: 2,
    slug: 'venta-de-propiedades',
    titulo: 'Venta de Propiedades',
    icon: 'Tag',
    descripcion: 'Vendemos tu propiedad al mejor precio y en el menor tiempo posible con estrategias efectivas.',
    descripcionLarga: 'Especializados en la venta exitosa de propiedades, utilizamos estrategias de marketing digital avanzadas para maximizar la exposición de tu inmueble. Nuestro equipo realiza avalúos comerciales precisos y negocia con compradores reales.',
    infoAdicional: 'Desde la publicación inicial hasta la firma de escrituras, nos encargamos de todo para que tengas una venta segura y transparente.',
    imagen: '/images/section/properties-details-2.jpg',
    caracteristicas: ['Avalúo comercial profesional', 'Marketing digital integral', 'Fotografía y videos profesionales', 'Tours virtuales en 3D', 'Negociación con compradores', 'Gestión de documentos', 'Acompañamiento notarial', 'Seguimiento post-venta'],
    proceso: [
      { titulo: 'Avalúo', descripcion: 'Determinamos el precio justo del mercado.' },
      { titulo: 'Publicación', descripcion: 'Promocionamos tu propiedad en línea.' },
      { titulo: 'Visitas', descripcion: 'Coordinamos encuentros con compradores.' },
      { titulo: 'Negociación', descripcion: 'Gestionamos las propuestas económicas.' },
      { titulo: 'Documentación', descripcion: 'Preparamos toda la papelería necesaria.' },
      { titulo: 'Cierre', descripcion: 'Finalizamos la transacción de forma segura.' }
    ],
    beneficios: [
      { icon: 'TrendUp', titulo: 'Mejor Valor', descripcion: 'Maximizamos el precio de tu propiedad.' },
      { icon: 'Zap', titulo: 'Venta Rápida', descripcion: 'Vendemos más rápido que el promedio.' },
      { icon: 'Eye', titulo: 'Mayor Visibilidad', descripcion: 'Estrategias de marketing profesional.' },
      { icon: 'CheckCircle', titulo: 'Proceso Seguro', descripcion: 'Garantía en cada transacción.' }
    ],
    tarifas: {
      comision: '5%',
      periodo: 'del valor de venta',
      descripcion: 'Comisión competitiva que aumenta con el valor de la propiedad.',
      incluye: ['Avalúo comercial', 'Publicación en portales', 'Fotografía y video', 'Coordinación de visitas', 'Negociación profesional', 'Gestión legal y notarial']
    }
  },
  '3': {
    id: 3,
    slug: 'arriendo-de-propiedades',
    titulo: 'Arriendo de Propiedades',
    icon: 'Key',
    descripcion: 'Administramos tu propiedad en arriendo con servicios completos de gestión y mantenimiento.',
    descripcionLarga: 'Ofrécemos una solución integral para propietarios que desean rentabilizar su inversión sin preocupaciones. Nos encargamos de la búsqueda de arrendatarios, verificación de referencias, recaudo de cánones y mantenimiento preventivo de la propiedad.',
    infoAdicional: 'Nuestro objetivo es garantizar una ocupación constante, arrendatarios confiables y una propiedad bien cuidada que mantenga su valor en el tiempo.',
    imagen: '/images/section/properties-details-3.jpg',
    caracteristicas: ['Búsqueda de arrendatarios', 'Verificación de referencias', 'Contratos profesionales', 'Recaudo de cánones', 'Mantenimiento preventivo', 'Reparaciones menores', 'Gestión administrativa', 'Reportes mensuales'],
    proceso: [
      { titulo: 'Oferta', descripcion: 'Presentamos opciones de arrendamiento.' },
      { titulo: 'Búsqueda', descripcion: 'Seleccionamos candidatos calificados.' },
      { titulo: 'Verificación', descripcion: 'Investigamos referencias personales y laborales.' },
      { titulo: 'Contrato', descripcion: 'Elaboramos contratos protegidos legalmente.' },
      { titulo: 'Ocupación', descripcion: 'Coordinamos entrega y recepción.' },
      { titulo: 'Administración', descripcion: 'Gestionamos recaudos y mantenimiento.' }
    ],
    beneficios: [
      { icon: 'DollarSign', titulo: 'Rentabilidad', descripcion: 'Ingresos pasivos consistentes.' },
      { icon: 'Shield', titulo: 'Protección', descripcion: 'Contratos legales seguros.' },
      { icon: 'Wrench', titulo: 'Mantenimiento', descripcion: 'Cuidado profesional de la propiedad.' },
      { icon: 'FileText', titulo: 'Administración', descripcion: 'Gestión completa sin esfuerzo.' }
    ],
    tarifas: {
      comision: '1 canon',
      periodo: 'por gestión inicial',
      descripcion: 'Comisión de un mes de arriendo por gestión de búsqueda. Administración mensual: 10% del canon.',
      incluye: ['Búsqueda de arrendatarios', 'Verificación completa', 'Elaboración de contratos', 'Gestión de recaudos', 'Mantenimiento preventivo', 'Seguros y documentación']
    }
  },
  '4': {
    id: 4,
    slug: 'asesoria-legal',
    titulo: 'Asesoría Legal',
    icon: 'Scales',
    descripcion: 'Servicio jurídico especializado para garantizar transacciones seguras y sin complicaciones.',
    descripcionLarga: 'Contamos con un equipo de abogados especializados en derecho inmobiliario que protegen tus intereses en cada transacción. Realizamos estudios de títulos exhaustivos, elaboramos contratos protegidos y gestionamos todos los trámites notariales y de registro.',
    infoAdicional: 'La seguridad legal es fundamental en transacciones inmobiliarias. Nuestros servicios garantizan que todos los documentos sean válidos y que tu inversión esté completamente protegida.',
    imagen: '/images/section/properties-details-4.jpg',
    caracteristicas: ['Estudio de títulos', 'Elaboración de contratos', 'Trámites notariales', 'Registro de escrituras', 'Resolución de conflictos', 'Asesoría en impuestos', 'Gestión de deudas', 'Certificados de libertad'],
    proceso: [
      { titulo: 'Análisis', descripcion: 'Revisamos documentación de la propiedad.' },
      { titulo: 'Estudio', descripcion: 'Verificamos antecedentes legales completos.' },
      { titulo: 'Contratos', descripcion: 'Elaboramos documentos protectores.' },
      { titulo: 'Trámites', descripcion: 'Gestionamos notaría y registros.' },
      { titulo: 'Validación', descripcion: 'Certificamos legalidad de la transacción.' },
      { titulo: 'Protección', descripcion: 'Garantizamos tus derechos.' }
    ],
    beneficios: [
      { icon: 'CheckCircle', titulo: 'Seguridad Total', descripcion: 'Protección legal completa.' },
      { icon: 'AlertCircle', titulo: 'Sin Sorpresas', descripcion: 'Identificamos problemas anticipadamente.' },
      { icon: 'Lock', titulo: 'Protección de Derechos', descripcion: 'Garantía de tus inversiones.' },
      { icon: 'Users', titulo: 'Abogados Expertos', descripcion: 'Especialistas en inmobiliario.' }
    ],
    tarifas: {
      comision: 'Desde $500.000',
      periodo: 'por transacción',
      descripcion: 'Tarifas variables según complejidad del caso. Consulta gratuita inicial.',
      incluye: ['Estudio de títulos completo', 'Elaboración de contratos', 'Trámites notariales', 'Gestión de registros', 'Asesoría legal integral', 'Seguimiento post-cierre']
    }
  },
  '5': {
    id: 5,
    slug: 'avaluos-comerciales',
    titulo: 'Avalúos Comerciales',
    icon: 'ChartLine',
    descripcion: 'Valuaciones técnicas y comerciales realizadas por profesionales certificados.',
    descripcionLarga: 'Proporcionamos avalúos profesionales para compra, venta, financiamiento o fines fiscales. Nuestros avaluadores están certificados y utilizan metodologías internacionales para determinar el valor real de la propiedad en el mercado.',
    infoAdicional: 'Los avalúos son documentos técnicos que respaldan decisiones financieras importantes. Aseguramos precisión y credibilidad en cada valuación que realizamos.',
    imagen: '/images/section/properties-details-5.jpg',
    caracteristicas: ['Avalúo catastral', 'Avalúo comercial', 'Avalúo hipotecario', 'Avalúo fiscal', 'Avalúo de seguros', 'Comparativa de mercado', 'Informe detallado', 'Certificación oficial'],
    proceso: [
      { titulo: 'Solicitud', descripcion: 'Recibimos instrucciones del cliente.' },
      { titulo: 'Inspección', descripcion: 'Realizamos visita técnica a la propiedad.' },
      { titulo: 'Análisis', descripcion: 'Estudiamos el mercado local.' },
      { titulo: 'Cálculo', descripcion: 'Aplicamos metodologías certificadas.' },
      { titulo: 'Informe', descripcion: 'Redactamos avalúo profesional.' },
      { titulo: 'Entrega', descripcion: 'Proporcionamos documento oficial.' }
    ],
    beneficios: [
      { icon: 'TrendingUp', titulo: 'Valor Real', descripcion: 'Determina el precio justo.' },
      { icon: 'FileCheck', titulo: 'Documento Oficial', descripcion: 'Válido para trámites.' },
      { icon: 'Users', titulo: 'Profesionales Certificados', descripcion: 'Avaluadores acreditados.' },
      { icon: 'Clock', titulo: 'Entrega Rápida', descripcion: 'Informes en 3-5 días.' }
    ],
    tarifas: {
      comision: 'Desde $300.000',
      periodo: 'por avalúo',
      descripcion: 'Precio varía según tipo de propiedad y complejidad del avalúo.',
      incluye: ['Inspección de propiedad', 'Análisis de mercado', 'Cálculo técnico', 'Informe profesional', 'Fotografías', 'Certificación oficial']
    }
  },
  '6': {
    id: 6,
    slug: 'inversion-inmobiliaria',
    titulo: 'Inversión Inmobiliaria',
    icon: 'TrendUp',
    descripcion: 'Asesoría especializada para invertir en bienes raíces y maximizar tu rentabilidad.',
    descripcionLarga: 'Asesoramos a inversionistas en la identificación de oportunidades rentables, análisis de retorno de inversión y estructuración de portafolios inmobiliarios. Combinamos análisis de mercado con proyecciones financieras para optimizar tus inversiones.',
    infoAdicional: 'La inversión inmobiliaria requiere análisis estratégico. Nuestros expertos ayudan a maximizar rentabilidad minimizando riesgos a través de diversificación inteligente.',
    imagen: '/images/section/properties-details-6.jpg',
    caracteristicas: ['Análisis de mercado', 'Identificación de oportunidades', 'Proyección de rentabilidad', 'Análisis de flujo de caja', 'Estrategia de diversificación', 'Estructuración financiera', 'Seguimiento de inversión', 'Reportes trimestrales'],
    proceso: [
      { titulo: 'Consulta', descripcion: 'Conocemos tus objetivos financieros.' },
      { titulo: 'Análisis', descripcion: 'Estudiamos el mercado inmobiliario.' },
      { titulo: 'Oportunidades', descripcion: 'Presentamos proyectos seleccionados.' },
      { titulo: 'Evaluación', descripcion: 'Proyectamos retorno y riesgos.' },
      { titulo: 'Estructura', descripcion: 'Diseñamos estrategia personalizada.' },
      { titulo: 'Seguimiento', descripcion: 'Monitoreamos desempeño continuo.' }
    ],
    beneficios: [
      { icon: 'Zap', titulo: 'Mayor Rentabilidad', descripcion: 'Optimización de retornos.' },
      { icon: 'Shield', titulo: 'Gestión de Riesgo', descripcion: 'Diversificación estratégica.' },
      { icon: 'TrendingUp', titulo: 'Crecimiento Patrimonial', descripcion: 'Construcción de riqueza.' },
      { icon: 'Briefcase', titulo: 'Asesoría Profesional', descripcion: 'Expertos en inversión.' }
    ],
    tarifas: {
      comision: 'Desde 1%',
      periodo: 'sobre volumen de inversión',
      descripcion: 'Comisión basada en volumen y complejidad. Descuentos por montos superiores.',
      incluye: ['Análisis de mercado', 'Identificación de oportunidades', 'Análisis de rentabilidad', 'Estrategia personalizada', 'Seguimiento trimestral', 'Reportes detallados']
    }
  }
}

// Load service data
const loadService = async () => {
  loading.value = true
  try {
    // Try to load from API (placeholder)
    // const response = await $inmostore.getServicio(id)
    // service.value = response.resultado
    
    // Fallback a datos demo
    service.value = demoServices[id] || demoServices['1']
    
    // Set related services
    relatedServices.value = [
      { id: 1, slug: 'compra-de-propiedades', titulo: 'Compra de Propiedades', icon: 'ShoppingCart' },
      { id: 2, slug: 'venta-de-propiedades', titulo: 'Venta de Propiedades', icon: 'Tag' },
      { id: 3, slug: 'arriendo-de-propiedades', titulo: 'Arriendo', icon: 'Key' },
      { id: 4, slug: 'asesoria-legal', titulo: 'Asesoría Legal', icon: 'Scales' },
      { id: 5, slug: 'avaluos-comerciales', titulo: 'Avalúos', icon: 'ChartLine' },
      { id: 6, slug: 'inversion-inmobiliaria', titulo: 'Inversión', icon: 'TrendUp' }
    ].filter(s => s.id !== parseInt(id))
  } catch (error) {
    console.error('Error cargando servicio:', error)
    service.value = demoServices['1']
  } finally {
    loading.value = false
  }
}

// Handle form submission
const handleContactSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    contactForm.value = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    }
    
    submitSuccess.value = true
    showSuccessModal.value = true
  } catch (error) {
    console.error('Error enviando formulario:', error)
    submitSuccess.value = false
    submitMessage.value = 'Error al enviar la solicitud.'
  } finally {
    isSubmitting.value = false
  }
}

// Close modal
const closeModal = () => {
  showSuccessModal.value = false
}

// Lifecycle
onMounted(loadService)

watch(() => route.params.id, loadService)

// SEO
useHead({
  title: () => service.value.titulo ? `${service.value.titulo} - Servicios Inmobiliarios` : 'Servicios Inmobiliarios',
  meta: [
    { name: 'description', content: () => service.value.descripcion || 'Servicios inmobiliarios profesionales.' }
  ]
})
</script>

<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando servicio...</p>
      </div>
    </div>

    <div v-else>
      <!-- Page Title -->
      <section class="page-title">
        <div class="tf-container w-xxl">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h3>{{ service?.titulo }}</h3>
                <div class="breadcrumbs">
                  <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <NuxtLink to="/site/servicios" class="hover-underline-link">Servicios</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <span>{{ service?.titulo }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Detail -->
      <section class="service-detail py_90" v-if="service">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-8">
              <!-- Hero -->
              <div class="service-hero mb_40">
                <img :src="service.imagen" :alt="service.titulo" class="rounded shadow-lg" width="100%">
              </div>

              <!-- Content -->
              <div class="service-content-box p_40 bg-white rounded mb_30">
                <div class="service-header mb_30">
                  <div class="service-icon mb_20">
                    <i :class="`icon-${service.icon}`"></i>
                  </div>
                  <h2 class="mb_15">{{ service.titulo }}</h2>
                  <p class="h6 text_secondary-color">{{ service.descripcion }}</p>
                </div>

                <!-- Long Description -->
                <div class="service-description mb_40">
                  <p class="text-body-1 text_secondary-color mb_20">{{ service.descripcionLarga }}</p>
                  <p class="text-body-1 text_secondary-color">{{ service.infoAdicional }}</p>
                </div>

                <!-- Features -->
                <div class="service-features mb_40" v-if="service.caracteristicas && service.caracteristicas.length">
                  <h4 class="mb_25">¿Qué Incluye Este Servicio?</h4>
                  <div class="row g-3">
                    <div v-for="feature in service.caracteristicas" :key="feature" class="col-md-6">
                      <div class="feature-item p_20 bg-surface rounded">
                        <i class="icon-CheckCircle"></i>
                        <span>{{ feature }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Process -->
                <div class="service-process mb_40" v-if="service.proceso && service.proceso.length">
                  <h4 class="mb_25">Proceso de Trabajo</h4>
                  <div class="process-steps">
                    <div v-for="(step, index) in service.proceso" :key="index" class="process-step mb_25">
                      <div class="step-header d-flex gap_15 mb_15">
                        <div class="step-number">{{ index + 1 }}</div>
                        <h6>{{ step.titulo }}</h6>
                      </div>
                      <p class="text-body-2 text_secondary-color ps-5">{{ step.descripcion }}</p>
                    </div>
                  </div>
                </div>

                <!-- Benefits -->
                <div class="service-benefits mb_40" v-if="service.beneficios && service.beneficios.length">
                  <h4 class="mb_25">Beneficios</h4>
                  <div class="row g-3">
                    <div v-for="benefit in service.beneficios" :key="benefit.titulo" class="col-md-6">
                      <div class="benefit-card p_25 bg-surface rounded">
                        <div class="benefit-icon mb_15">
                          <i :class="`icon-${benefit.icon}`"></i>
                        </div>
                        <h6 class="mb_10">{{ benefit.titulo }}</h6>
                        <p class="text-body-2 text_secondary-color mb-0">{{ benefit.descripcion }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pricing -->
                <div class="service-pricing" v-if="service.tarifas">
                  <h4 class="mb_25">Tarifas y Comisiones</h4>
                  <div class="pricing-table p_30 bg-surface rounded">
                    <div class="pricing-header mb_20">
                      <h5 class="text_primary-color mb_5">{{ service.tarifas.comision }}</h5>
                      <p class="text-caption text_secondary-color mb-0">{{ service.tarifas.periodo }}</p>
                    </div>
                    <p class="text-body-2 text_secondary-color mb_20">{{ service.tarifas.descripcion }}</p>
                    <ul class="pricing-includes" v-if="service.tarifas.incluye && service.tarifas.incluye.length">
                      <li v-for="item in service.tarifas.incluye" :key="item">
                        <i class="icon-Check"></i>
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
              <!-- Contact Form -->
              <div class="contact-form-box p_30 bg-white rounded mb_30 sticky-top" style="top: 100px;">
                <h5 class="mb_20">Solicita Este Servicio</h5>
                <form @submit.prevent="handleContactSubmit">
                  <div class="mb_15">
                    <input 
                      v-model="contactForm.nombre" 
                      type="text" 
                      class="form-control" 
                      placeholder="Nombre completo *"
                      required
                    >
                  </div>
                  <div class="mb_15">
                    <input 
                      v-model="contactForm.email" 
                      type="email" 
                      class="form-control" 
                      placeholder="Email *"
                      required
                    >
                  </div>
                  <div class="mb_15">
                    <input 
                      v-model="contactForm.telefono" 
                      type="tel" 
                      class="form-control" 
                      placeholder="Teléfono *"
                      required
                    >
                  </div>
                  <div class="mb_20">
                    <textarea 
                      v-model="contactForm.mensaje" 
                      class="form-control" 
                      rows="3"
                      placeholder="Cuéntanos tus necesidades..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    class="tf-btn btn-bg-primary w-100"
                    :disabled="isSubmitting"
                  >
                    <span v-if="!isSubmitting">Solicitar Información</span>
                    <span v-else>Enviando...</span>
                  </button>
                </form>
              </div>

              <!-- Related Services -->
              <div class="related-services-box p_25 bg-white rounded" v-if="relatedServices && relatedServices.length">
                <h6 class="mb_20">Servicios Relacionados</h6>
                <ul class="services-list">
                  <li v-for="relatedService in relatedServices" :key="relatedService.id">
                    <NuxtLink :to="`/site/servicio/${relatedService.id}/${relatedService.slug}`">
                      <i :class="`icon-${relatedService.icon}`"></i>
                      <span>{{ relatedService.titulo }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Success Modal -->
      <div v-if="showSuccessModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-icon success">
            <i class="icon-CheckCircle"></i>
          </div>
          <h4 class="mb_15">¡Solicitud Enviada!</h4>
          <p class="text-body-2 text_secondary-color mb_30">
            Hemos recibido tu solicitud. Uno de nuestros especialistas te contactará pronto.
          </p>
          <button @click="closeModal" class="tf-btn btn-bg-primary w-100">
            <span>Entendido</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.service-content-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.service-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon i {
  font-size: 40px;
  color: white;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-item i {
  font-size: 24px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.benefit-card {
  height: 100%;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon i {
  font-size: 28px;
  color: white;
}

.pricing-includes {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pricing-includes li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.pricing-includes li i {
  color: var(--primary-color);
  font-size: 18px;
}

.contact-form-box,
.related-services-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-list li {
  margin-bottom: 10px;
}

.services-list li a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.services-list li a:hover {
  background: var(--surface-color);
  color: var(--primary-color);
}

.services-list li a i {
  font-size: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.modal-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-icon.success {
  background: var(--success-color);
}

.modal-icon i {
  font-size: 40px;
  color: white;
}

@media (max-width: 768px) {
  .contact-form-box,
  .related-services-box {
    position: static !important;
    top: auto !important;
    margin-bottom: 20px;
  }

  .service-content-box {
    padding: 20px !important;
  }
}
</style>
