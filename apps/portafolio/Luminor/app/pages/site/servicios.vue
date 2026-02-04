<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando servicios...</p>
      </div>
    </div>

    <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>{{ pag.Titulo || 'Nuestros Servicios' }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ pag.Titulo || 'Servicios' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Hero -->
    <section class="services-hero py_90" v-if="pag.Contenido">
      <div class="tf-container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div v-html="pag.Contenido"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Services -->
    <section class="main-services py_60">
      <div class="tf-container">
        <div class="row g-4">
          <div v-for="service in displayServices" :key="service.id" class="col-lg-4 col-md-6">
            <div class="service-card h-100">
              <div class="service-icon mb_25">
                <i :class="service.icono"></i>
              </div>
              <h4 class="mb_15">{{ service.nombre }}</h4>
              <p class="text-body-2 text_secondary-color mb_25">{{ service.descripcionCorta }}</p>
              <ul class="service-features mb_25">
                <li v-for="feature in service.features" :key="feature">
                  <i class="icon-Check"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <NuxtLink 
                :to="`/site/servicio/${service.id}/${service.canonico}`" 
                class="tf-btn btn-outline w-100"
              >
                <span>Más Información</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="additional-services py_90 bg-surface">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12 text-center">
            <h2 class="mb_20">Servicios Adicionales</h2>
            <p class="text-body-1 text_secondary-color">Soluciones complementarias para tu propiedad</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="service in additionalServices" :key="service.id" class="col-lg-3 col-md-6">
            <div class="additional-service-card text-center p_30">
              <div class="service-icon-small mb_20">
                <i :class="service.icono"></i>
              </div>
              <h6 class="mb_15">{{ service.nombre }}</h6>
              <p class="text-body-2 text_secondary-color mb-0">{{ service.descripcionCorta }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section py_90">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12 text-center">
            <h2 class="mb_20">Nuestro Proceso</h2>
            <p class="text-body-1 text_secondary-color">Así trabajamos para garantizar tu satisfacción</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(step, index) in processSteps" :key="index" class="col-lg-3 col-md-6">
            <div class="process-step text-center">
              <div class="step-number mb_20">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="step-icon mb_20">
                <i :class="step.icono"></i>
              </div>
              <h6 class="mb_15">{{ step.nombre }}</h6>
              <p class="text-body-2 text_secondary-color mb-0">{{ step.descripcionCorta }}</p>
            </div>
            <div v-if="index < processSteps.length - 1" class="process-arrow d-none d-lg-block">
              <i class="icon-ArrowRight"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section py_90 bg-primary text-white">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12 text-center">
            <h2 class="mb_20">Beneficios de Trabajar con Nosotros</h2>
            <p class="h6">Lo que nos hace diferentes</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="benefit in benefits" :key="benefit.nombre" class="col-lg-3 col-md-6">
            <div class="benefit-card text-center p_30">
              <div class="benefit-icon mb_20">
                <i :class="benefit.icono"></i>
              </div>
              <h6 class="mb_10">{{ benefit.nombre }}</h6>
              <p class="text-body-2 mb-0 opacity-90">{{ benefit.descripcionCorta }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section py_90">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12 text-center">
            <h2 class="mb_20">Planes y Comisiones</h2>
            <p class="text-body-1 text_secondary-color">Transparencia en nuestras tarifas</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="plan in pricingPlans" :key="plan.name" class="col-lg-4 col-md-6">
            <div class="pricing-card p_40 text-center" :class="{ 'featured': plan.featured }">
              <div v-if="plan.featured" class="featured-badge mb_20">Más Popular</div>
              <h4 class="mb_10">{{ plan.name }}</h4>
              <div class="pricing-value mb_25">
                <h2 class="text_primary-color mb-0">{{ plan.commission }}</h2>
                <span class="text-caption text_secondary-color">{{ plan.period }}</span>
              </div>
              <p class="text-body-2 text_secondary-color mb_30">{{ plan.description }}</p>
              <ul class="pricing-features mb_30">
                <li v-for="feature in plan.features" :key="feature">
                  <i class="icon-Check"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <button class="tf-btn w-100" :class="plan.featured ? 'btn-bg-primary' : 'btn-outline'">
                <span>Contratar Servicio</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row mt_40">
          <div class="col-12 text-center">
            <p class="text-body-2 text_secondary-color">
              * Las comisiones pueden variar según el tipo y valor de la propiedad. 
              <NuxtLink to="/site/contacto" class="text_primary-color">Contáctanos</NuxtLink> para una cotización personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section py_90 bg-surface">
      <div class="tf-container">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="mb_25">Preguntas Frecuentes</h2>
            <p class="text-body-1 text_secondary-color mb_30">
              Resolvemos tus dudas sobre nuestros servicios inmobiliarios
            </p>
            <img src="/images/section/section-faq.jpg" alt="FAQ" class="rounded shadow" width="100%" />
          </div>
          <div class="col-lg-6">
            <div class="accordion" id="faqAccordion">
              <div v-for="(faq, index) in faqs" :key="index" class="accordion-item mb_15">
                <h6 class="accordion-header">
                  <button 
                    class="accordion-button" 
                    :class="{ collapsed: activeFaq !== index }"
                    type="button" 
                    @click="toggleFaq(index)"
                  >
                    {{ faq.question }}
                  </button>
                </h6>
                <div :class="['accordion-collapse', activeFaq === index ? 'show' : 'collapse']">
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py_90">
      <div class="tf-container">
        <div class="cta-box p_60 bg-primary text-white text-center rounded">
          <h2 class="mb_20">¿Necesitas Asesoría Personalizada?</h2>
          <p class="h6 mb_30">Agenda una consulta gratuita con nuestros expertos</p>
          <div class="d-flex gap_15 justify-content-center flex-wrap">
            <NuxtLink to="/site/contacto" class="tf-btn btn-bg-white btn-px-40">
              <span>Agendar Consulta</span>
              <span class="bg-effect"></span>
            </NuxtLink>
            <a href="tel:+573156666688" class="tf-btn btn-outline-white btn-px-40">
              <i class="icon-Phone"></i>
              <span>Llamar Ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
/**
 * Listado de Servicios Disponibles
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref, computed } from 'vue'

const { $psweb, $inmostore } = useNuxtApp()

// Variables principales
const WebsiteName = ref('')
const pag = ref({
  Titulo: '',
  Contenido: ''
})
const children = ref([])
const loading = ref(true)
const activeFaq = ref(0)

// Función para crear URL amigables (equivalente a Core.Canonical)
const makeCanonical = (text) => {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Función para normalizar servicio
const normalizarServicio = (srv) => {
  return {
    id: srv.Id || srv.id,
    nombre: srv.Titulo || srv.titulo,
    canonico: makeCanonical(srv.Titulo || srv.titulo),
    descripcionCorta: srv.Encabezado || srv.encabezado || '',
    contenido: srv.Contenido || srv.contenido || '',
    imagen: srv.ImageUrl || srv.imageUrl || '',
    icono: srv.Icono || srv.icono || 'icon-Briefcase',
    features: srv.Features || srv.features || []
  }
}

// Data de demostración (fallback)
const mainServices = ref([
  {
    id: 1,
    nombre: 'Compra de Propiedades',
    canonico: 'compra-de-propiedades',
    descripcionCorta: 'Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.',
    icono: 'icon-ShoppingCart',
    features: [
      'Búsqueda personalizada',
      'Asesoría en la selección',
      'Negociación del precio',
      'Acompañamiento legal',
      'Gestión de crédito hipotecario'
    ]
  },
  {
    id: 2,
    nombre: 'Venta de Propiedades',
    canonico: 'venta-de-propiedades',
    descripcionCorta: 'Vendemos tu propiedad al mejor precio y en el menor tiempo posible con estrategias efectivas.',
    icono: 'icon-Tag',
    features: [
      'Avalúo comercial',
      'Marketing digital',
      'Fotografía profesional',
      'Tours virtuales',
      'Negociación con compradores'
    ]
  },
  {
    id: 3,
    nombre: 'Arriendo de Propiedades',
    canonico: 'arriendo-de-propiedades',
    descripcionCorta: 'Administramos tu propiedad en arriendo con servicios completos de gestión y mantenimiento.',
    icono: 'icon-Key',
    features: [
      'Búsqueda de arrendatarios',
      'Verificación de referencias',
      'Elaboración de contratos',
      'Cobro de cánones',
      'Mantenimiento preventivo'
    ]
  },
  {
    id: 4,
    nombre: 'Asesoría Legal',
    canonico: 'asesoria-legal',
    descripcionCorta: 'Servicio jurídico especializado para garantizar transacciones seguras y sin complicaciones.',
    icono: 'icon-Scales',
    features: [
      'Estudio de títulos',
      'Elaboración de contratos',
      'Trámites notariales',
      'Registro de escrituras',
      'Resolución de conflictos'
    ]
  },
  {
    id: 5,
    nombre: 'Avalúos Comerciales',
    canonico: 'avaluos-comerciales',
    descripcionCorta: 'Valuaciones técnicas y comerciales realizadas por profesionales certificados.',
    icono: 'icon-ChartLine',
    features: [
      'Avalúo catastral',
      'Avalúo comercial',
      'Avalúo hipotecario',
      'Informe detallado',
      'Certificación oficial'
    ]
  },
  {
    id: 6,
    nombre: 'Inversión Inmobiliaria',
    canonico: 'inversion-inmobiliaria',
    descripcionCorta: 'Asesoría especializada para invertir en bienes raíces y maximizar tu rentabilidad.',
    icono: 'icon-TrendUp',
    features: [
      'Análisis de mercado',
      'Proyección de rentabilidad',
      'Selección de proyectos',
      'Estructuración financiera',
      'Seguimiento de inversión'
    ]
  }
])

const additionalServices = ref([
  {
    id: 7,
    nombre: 'Remodelaciones',
    icono: 'icon-Hammer',
    descripcionCorta: 'Servicios de remodelación y mejoras para tu propiedad'
  },
  {
    id: 8,
    nombre: 'Seguros',
    icono: 'icon-Shield',
    descripcionCorta: 'Seguros de hogar y propiedades con las mejores coberturas'
  },
  {
    id: 9,
    nombre: 'Mudanzas',
    icono: 'icon-Package',
    descripcionCorta: 'Servicios de mudanza profesional y segura'
  },
  {
    id: 10,
    nombre: 'Decoración',
    icono: 'icon-PaintBrush',
    descripcionCorta: 'Asesoría en decoración y home staging'
  }
])

const processSteps = ref([
  {
    icono: 'icon-Handshake',
    nombre: 'Consulta Inicial',
    descripcionCorta: 'Conocemos tus necesidades y objetivos inmobiliarios'
  },
  {
    icono: 'icon-MagnifyingGlass',
    nombre: 'Búsqueda y Análisis',
    descripcionCorta: 'Identificamos las mejores opciones del mercado'
  },
  {
    icono: 'icon-PresentationChart',
    nombre: 'Presentación',
    descripcionCorta: 'Te mostramos propiedades que cumplen tus criterios'
  },
  {
    icono: 'icon-CheckCircle',
    nombre: 'Cierre Exitoso',
    descripcionCorta: 'Acompañamos el proceso hasta la firma final'
  }
])

const benefits = ref([
  {
    icono: 'icon-Clock',
    nombre: 'Ahorro de Tiempo',
    descripcionCorta: 'Gestión eficiente que acelera tus procesos'
  },
  {
    icono: 'icon-CurrencyDollar',
    nombre: 'Mejor Precio',
    descripcionCorta: 'Negociación experta para optimizar tu inversión'
  },
  {
    icono: 'icon-UserCheck',
    nombre: 'Profesionalismo',
    descripcionCorta: 'Equipo certificado y con experiencia comprobada'
  },
  {
    icono: 'icon-ShieldCheck',
    nombre: 'Seguridad Legal',
    descripcionCorta: 'Transacciones 100% respaldadas jurídicamente'
  }
])

const pricingPlans = ref([
  {
    name: 'Básico',
    commission: '3%',
    period: 'del valor de venta',
    description: 'Para propiedades residenciales estándar',
    features: [
      'Publicación en portales',
      'Fotografías básicas',
      'Visitas coordinadas',
      'Negociación incluida',
      'Trámites legales básicos'
    ],
    featured: false
  },
  {
    name: 'Premium',
    commission: '4%',
    period: 'del valor de venta',
    description: 'Para propiedades de mayor valor o complejidad',
    features: [
      'Todo lo del plan Básico',
      'Fotografía profesional HD',
      'Tour virtual 360°',
      'Video promocional',
      'Home staging incluido',
      'Marketing digital avanzado'
    ],
    featured: true
  },
  {
    name: 'Empresarial',
    commission: 'Cotizar',
    period: 'según proyecto',
    description: 'Para desarrollos y portafolios inmobiliarios',
    features: [
      'Todo lo del plan Premium',
      'Gestión de portafolio',
      'Estrategia personalizada',
      'Sala de ventas',
      'Equipo dedicado',
      'Reportes mensuales'
    ],
    featured: false
  }
])

const faqs = ref([
  {
    question: '¿Cuánto tiempo toma vender una propiedad?',
    answer: 'El tiempo promedio de venta varía entre 2 y 6 meses, dependiendo del tipo de propiedad, ubicación, precio y condiciones del mercado. Nuestro equipo trabaja para optimizar este tiempo mediante estrategias de marketing efectivas.'
  },
  {
    question: '¿Qué documentos necesito para vender mi propiedad?',
    answer: 'Necesitas: escritura de la propiedad, certificado de libertad y tradición (no mayor a 30 días), certificado de paz y salvo de administración (si aplica), impuesto predial al día, y cédula del propietario. Nuestro equipo te guiará en todo el proceso.'
  },
  {
    question: '¿Cobran por el avalúo de la propiedad?',
    answer: 'El avalúo comercial inicial es gratuito cuando contratas nuestros servicios de venta. Si requieres un avalúo certificado para otros fines, tiene un costo que varía según el tipo de propiedad.'
  },
  {
    question: '¿Ofrecen servicios de administración de propiedades?',
    answer: 'Sí, ofrecemos servicios completos de administración que incluyen búsqueda de arrendatarios, cobro de cánones, mantenimiento, y gestión de reparaciones. Trabajamos con un sistema transparente de reportes mensuales.'
  },
  {
    question: '¿Puedo cancelar el contrato si no estoy satisfecho?',
    answer: 'Sí, nuestros contratos tienen cláusulas de cancelación flexibles. Si no estás satisfecho con nuestro servicio, puedes cancelar con previo aviso según lo establecido en el contrato. Tu satisfacción es nuestra prioridad.'
  }
])

// Computed para combinar servicios de API + demo
const displayServices = computed(() => {
  return children.value.length > 0 ? children.value : mainServices.value
})

// Methods
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Equivalente a Page_Load
onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      // Obtener nombre del sitio web
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'

      // Obtener campos personalizados de la página "servicios-contenedor"
      let titulo = 'Servicios'
      let paginaId = null
      
      try {
        res = await $psweb.getWebPaginaCustomField?.('servicios-contenedor', 'Titulo')
        titulo = res?.Resultado || res?.resultado || titulo
      } catch (error) {
        console.warn('No se pudo obtener titulo personalizado, usando default:', error)
      }

      // Obtener el ID de la página padre
      try {
        res = await $psweb.getWebPaginaCustomField?.('servicios-contenedor', 'Id')
        paginaId = parseInt(res?.Resultado || res?.resultado || 0)
      } catch (error) {
        console.warn('No se pudo obtener ID personalizado, usando default:', error)
      }

      // Si no se obtuvo ID, intentar obtener la página por nombre
      if (!paginaId) {
        try {
          res = await $psweb.getPaginaField?.(0, 'servicios-contenedor', 'id')
          paginaId = parseInt(res?.Resultado || res?.resultado || 0)
        } catch (error) {
          console.warn('No se pudo obtener página de servicios:', error)
        }
      }

      // Obtener página principal de servicios
      if (paginaId && paginaId > 0) {
        res = await $psweb.getPagina(paginaId)
        const pageData = res?.Resultado || res?.resultado || {}
        
        pag.value = {
          Titulo: pageData.Titulo || pageData.titulo || titulo,
          Contenido: pageData.Contenido || pageData.contenido || ''
        }

        // Obtener servicios (páginas hijas)
        res = await $psweb.getPaginasActivas?.(null, 3, paginaId)
        const servicios = (res?.Items || res?.items || [])
        children.value = servicios.map(normalizarServicio)
      }

      // Actualizar SEO
      useHead({
        title: `${pag.value.Titulo || titulo} - ${WebsiteName.value}`,
        meta: [
          { 
            name: 'description', 
            content: 'Conoce todos los servicios inmobiliarios que ofrecemos.' 
          }
        ]
      })
    } catch (error) {
      console.error('Error cargando servicios:', error)
      useHead({
        title: `Servicios - ${WebsiteName.value}`
      })
    } finally {
      loading.value = false
    }
  } else {
    console.error('El plugin PSWeb no está disponible.')
    loading.value = false
  }
})
</script>

<style scoped>
.service-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
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

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.service-features li i {
  color: var(--primary-color);
  flex-shrink: 0;
}

.additional-service-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.additional-service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.service-icon-small {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon-small i {
  font-size: 28px;
  color: white;
}

.process-step {
  position: relative;
  background: var(--surface-color);
  padding: 30px;
  border-radius: 12px;
}

.step-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  opacity: 0.2;
  line-height: 1;
}

.step-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon i {
  font-size: 32px;
  color: white;
}

.process-arrow {
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: var(--primary-color);
}

.benefit-card {
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon i {
  font-size: 28px;
}

.pricing-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.pricing-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.pricing-card.featured:hover {
  transform: translateY(-5px) scale(1.07);
}

.featured-badge {
  background: var(--primary-color);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--text-color);
}

.pricing-features li i {
  color: var(--primary-color);
  flex-shrink: 0;
}

.accordion-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-button {
  width: 100%;
  padding: 20px;
  text-align: left;
  background: white;
  border: none;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.accordion-button::after {
  content: '▼';
  position: absolute;
  right: 20px;
  transition: transform 0.3s ease;
}

.accordion-button.collapsed::after {
  transform: rotate(-90deg);
}

.accordion-button:hover {
  background: var(--surface-color);
}

.accordion-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-collapse.show {
  max-height: 500px;
}

.accordion-body {
  padding: 20px;
  border-top: 1px solid var(--border-color);
  color: var(--secondary-color);
}

.btn-outline-white {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline-white:hover {
  background: white;
  color: var(--primary-color);
}

.loading-container {
  background-color: #f8f9fa;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}
</style>
