<template>
  <div class="contact-page">
    <!-- Page Header -->
    <PageHeader 
      title="Contacto" 
      subtitle="Estamos aquí para ayudarte con todas tus necesidades inmobiliarias"
      breadcrumb="Inicio / Contacto"
    />
    
    <!-- Contact Section -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Form -->
          <div class="col-lg-8 mb-5">
            <div class="contact-form-wrapper">
              <h2 class="section-title mb-4">Envíanos un Mensaje</h2>
              
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">Nombre *</label>
                    <input 
                      type="text" 
                      class="form-control"
                      id="firstName"
                      v-model="form.firstName"
                      :class="{ 'is-invalid': errors.firstName }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.firstName">
                      {{ errors.firstName }}
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label">Apellido *</label>
                    <input 
                      type="text" 
                      class="form-control"
                      id="lastName"
                      v-model="form.lastName"
                      :class="{ 'is-invalid': errors.lastName }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.lastName">
                      {{ errors.lastName }}
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email *</label>
                    <input 
                      type="email" 
                      class="form-control"
                      id="email"
                      v-model="form.email"
                      :class="{ 'is-invalid': errors.email }"
                      required
                    />
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email }}
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="phone" class="form-label">Teléfono</label>
                    <input 
                      type="tel" 
                      class="form-control"
                      id="phone"
                      v-model="form.phone"
                      :class="{ 'is-invalid': errors.phone }"
                    />
                    <div class="invalid-feedback" v-if="errors.phone">
                      {{ errors.phone }}
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="subject" class="form-label">Asunto *</label>
                  <select 
                    class="form-select"
                    id="subject"
                    v-model="form.subject"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="compra">Interés en Compra</option>
                    <option value="venta">Quiero Vender</option>
                    <option value="alquiler">Busco Alquiler</option>
                    <option value="valoracion">Valoración de Propiedad</option>
                    <option value="inversion">Oportunidades de Inversión</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div class="invalid-feedback" v-if="errors.subject">
                    {{ errors.subject }}
                  </div>
                </div>
                
                <div class="mb-3" v-if="form.subject === 'otro'">
                  <label for="customSubject" class="form-label">Especifica el asunto *</label>
                  <input 
                    type="text" 
                    class="form-control"
                    id="customSubject"
                    v-model="form.customSubject"
                    placeholder="Describe brevemente tu consulta"
                  />
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label">Mensaje *</label>
                  <textarea 
                    class="form-control"
                    id="message"
                    rows="5"
                    v-model="form.message"
                    :class="{ 'is-invalid': errors.message }"
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    required
                  ></textarea>
                  <div class="invalid-feedback" v-if="errors.message">
                    {{ errors.message }}
                  </div>
                </div>
                
                <div class="mb-3">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="newsletter"
                      v-model="form.newsletter"
                    />
                    <label class="form-check-label" for="newsletter">
                      Me gustaría recibir información sobre nuevas propiedades y ofertas especiales
                    </label>
                  </div>
                </div>
                
                <div class="mb-3">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="privacy"
                      v-model="form.acceptPrivacy"
                      :class="{ 'is-invalid': errors.acceptPrivacy }"
                      required
                    />
                    <label class="form-check-label" for="privacy">
                      Acepto la 
                      <NuxtLink to="/site/privacidad" target="_blank">Política de Privacidad</NuxtLink>
                      y 
                      <NuxtLink to="/site/condiciones" target="_blank">Términos de Servicio</NuxtLink> *
                    </label>
                    <div class="invalid-feedback" v-if="errors.acceptPrivacy">
                      {{ errors.acceptPrivacy }}
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  class="btn btn-primary btn-lg"
                  :disabled="submitting"
                >
                  <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
                  {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
                </button>
              </form>
              
              <!-- Success Message -->
              <div v-if="showSuccess" class="alert alert-success mt-4">
                <i class="fas fa-check-circle me-2"></i>
                ¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="col-lg-4">
            <div class="contact-info">
              <h3 class="section-title mb-4">Información de Contacto</h3>
              
              <!-- Office Info -->
              <div class="info-card mb-4">
                <div class="card border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-building text-primary me-2"></i>
                      Oficina Principal
                    </h5>
                    <p class="card-text">
                      <strong>Dirección:</strong><br>
                      Av. Reforma 123, Piso 15<br>
                      Col. Centro, Ciudad de México<br>
                      C.P. 06040
                    </p>
                    <p class="card-text">
                      <strong>Horario:</strong><br>
                      Lunes a Viernes: 9:00 AM - 7:00 PM<br>
                      Sábados: 9:00 AM - 3:00 PM<br>
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Contact Methods -->
              <div class="contact-methods">
                <div class="contact-method mb-3">
                  <div class="d-flex align-items-center">
                    <div class="method-icon">
                      <i class="fas fa-phone text-primary"></i>
                    </div>
                    <div class="method-info">
                      <strong>Teléfono Principal</strong><br>
                      <a href="tel:+525512345678" class="text-decoration-none">
                        +52 55 1234-5678
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="contact-method mb-3">
                  <div class="d-flex align-items-center">
                    <div class="method-icon">
                      <i class="fab fa-whatsapp text-success"></i>
                    </div>
                    <div class="method-info">
                      <strong>WhatsApp</strong><br>
                      <a 
                        href="https://wa.me/525512345678?text=Hola, me interesa obtener información sobre sus servicios inmobiliarios" 
                        class="text-decoration-none"
                        target="_blank"
                      >
                        +52 55 1234-5678
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="contact-method mb-3">
                  <div class="d-flex align-items-center">
                    <div class="method-icon">
                      <i class="fas fa-envelope text-primary"></i>
                    </div>
                    <div class="method-info">
                      <strong>Email General</strong><br>
                      <a href="mailto:info@rentup.com" class="text-decoration-none">
                        info@rentup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="contact-method mb-3">
                  <div class="d-flex align-items-center">
                    <div class="method-icon">
                      <i class="fas fa-headset text-primary"></i>
                    </div>
                    <div class="method-info">
                      <strong>Soporte Cliente</strong><br>
                      <a href="mailto:soporte@rentup.com" class="text-decoration-none">
                        soporte@rentup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="social-media mt-4">
                <h5 class="mb-3">Síguenos</h5>
                <div class="social-links">
                  <a href="https://facebook.com/rentup" class="social-link" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/rentup" class="social-link" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/rentup" class="social-link" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/company/rentup" class="social-link" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com/rentup" class="social-link" target="_blank">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="map-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="section-title text-center mb-4">Ubicación</h3>
            <div class="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.625179311465!2d-99.16617368549317!3d19.42690798688446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f9c5f8b7d%3A0x8b1f4c7b1c1e8b7d!2sAv.%20Reforma%2C%20Cuauht%C3%A9moc%2C%2006040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1699277423847!5m2!1ses!2smx"
                width="100%" 
                height="400" 
                style="border:0; border-radius: 15px; box-shadow: 0 5px 25px rgba(0,0,0,0.1);" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sales Departments Section -->
    <section class="sales-departments py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-12 text-center">
            <h3 class="section-title mb-4">Nuestros Departamentos</h3>
            <p class="section-subtitle">Contacta directamente con el departamento que mejor se adapte a tus necesidades</p>
          </div>
        </div>
        
        <div class="row">
          <!-- Sales Department -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="department-card">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-4">
                  <div class="department-icon mb-3">
                    <i class="fas fa-handshake fa-3x text-primary"></i>
                  </div>
                  <h5 class="card-title">Departamento de Ventas</h5>
                  <p class="card-text text-muted mb-4">Especialistas en compra y venta de propiedades</p>
                  <div class="department-info">
                    <p class="mb-2"><i class="fas fa-phone me-2 text-primary"></i>+52 55 1234-5678</p>
                    <p class="mb-2"><i class="fas fa-envelope me-2 text-primary"></i>ventas@rentup.com</p>
                    <p class="mb-3"><i class="fas fa-clock me-2 text-primary"></i>Lun-Vie 9:00-19:00</p>
                  </div>
                  <a href="mailto:ventas@rentup.com" class="btn btn-primary">Contactar Ventas</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Rental Department -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="department-card">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-4">
                  <div class="department-icon mb-3">
                    <i class="fas fa-key fa-3x text-success"></i>
                  </div>
                  <h5 class="card-title">Departamento de Alquileres</h5>
                  <p class="card-text text-muted mb-4">Expertos en propiedades para alquiler</p>
                  <div class="department-info">
                    <p class="mb-2"><i class="fas fa-phone me-2 text-success"></i>+52 55 1234-5679</p>
                    <p class="mb-2"><i class="fas fa-envelope me-2 text-success"></i>alquiler@rentup.com</p>
                    <p class="mb-3"><i class="fas fa-clock me-2 text-success"></i>Lun-Sab 9:00-18:00</p>
                  </div>
                  <a href="mailto:alquiler@rentup.com" class="btn btn-success">Contactar Alquileres</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Investment Department -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="department-card">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-4">
                  <div class="department-icon mb-3">
                    <i class="fas fa-chart-line fa-3x text-warning"></i>
                  </div>
                  <h5 class="card-title">Departamento de Inversiones</h5>
                  <p class="card-text text-muted mb-4">Asesores especializados en inversión inmobiliaria</p>
                  <div class="department-info">
                    <p class="mb-2"><i class="fas fa-phone me-2 text-warning"></i>+52 55 1234-5680</p>
                    <p class="mb-2"><i class="fas fa-envelope me-2 text-warning"></i>inversiones@rentup.com</p>
                    <p class="mb-3"><i class="fas fa-clock me-2 text-warning"></i>Lun-Vie 10:00-18:00</p>
                  </div>
                  <a href="mailto:inversiones@rentup.com" class="btn btn-warning">Contactar Inversiones</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Office Locations Section -->
    <section class="office-locations bg-light py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-12 text-center">
            <h3 class="section-title mb-4">Nuestras Oficinas</h3>
            <p class="section-subtitle">Visítanos en cualquiera de nuestras sucursales</p>
          </div>
        </div>
        
        <div class="row">
          <!-- Main Office -->
          <div class="col-lg-6 mb-4">
            <div class="office-card">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4">
                  <div class="d-flex align-items-start">
                    <div class="office-icon me-3">
                      <i class="fas fa-building fa-2x text-primary"></i>
                    </div>
                    <div class="office-info">
                      <h5 class="card-title">Oficina Principal - Centro</h5>
                      <p class="card-text text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>
                        Av. Reforma 123, Piso 15<br>
                        Col. Centro, Ciudad de México, 06040
                      </p>
                      <p class="card-text text-muted mb-2">
                        <i class="fas fa-phone me-2"></i>
                        +52 55 1234-5678
                      </p>
                      <p class="card-text text-muted mb-3">
                        <i class="fas fa-clock me-2"></i>
                        Lun-Vie: 9:00-19:00 | Sáb: 9:00-15:00
                      </p>
                      <button 
                        class="btn btn-outline-primary btn-sm" 
                        @click="viewOnMap('principal')"
                      >
                        Ver en Mapa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Branch Office -->
          <div class="col-lg-6 mb-4">
            <div class="office-card">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4">
                  <div class="d-flex align-items-start">
                    <div class="office-icon me-3">
                      <i class="fas fa-building fa-2x text-success"></i>
                    </div>
                    <div class="office-info">
                      <h5 class="card-title">Sucursal Polanco</h5>
                      <p class="card-text text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>
                        Av. Masaryk 234, Local 5<br>
                        Col. Polanco, Ciudad de México, 11560
                      </p>
                      <p class="card-text text-muted mb-2">
                        <i class="fas fa-phone me-2"></i>
                        +52 55 1234-5681
                      </p>
                      <p class="card-text text-muted mb-3">
                        <i class="fas fa-clock me-2"></i>
                        Lun-Vie: 10:00-18:00 | Sáb: 10:00-14:00
                      </p>
                      <button 
                        class="btn btn-outline-success btn-sm"
                        @click="viewOnMap('polanco')"
                      >
                        Ver en Mapa
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

    <!-- FAQ Section -->
    <section class="faq-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h3 class="section-title text-center mb-5">Preguntas Frecuentes</h3>
            
            <div class="accordion" id="contactFAQ">
              <div 
                class="accordion-item" 
                v-for="(faq, index) in faqs" 
                :key="index"
              >
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button collapsed" 
                    type="button" 
                    :data-bs-toggle="`collapse`"
                    :data-bs-target="`#faq${index}`"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div 
                  :id="`faq${index}`" 
                  class="accordion-collapse collapse"
                  data-bs-parent="#contactFAQ"
                >
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
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Meta información
useHead({
  title: 'Contacto - RentUP Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Contáctanos para todas tus necesidades inmobiliarias. Estamos aquí para ayudarte a encontrar tu hogar ideal.' },
    { name: 'keywords', content: 'contacto, RentUP, inmobiliaria, consultas, servicio al cliente, soporte' },
    { property: 'og:title', content: 'Contacto - RentUP' },
    { property: 'og:description', content: 'Ponte en contacto con nuestro equipo de expertos inmobiliarios' }
  ]
})

// Estado reactivo
const submitting = ref(false)
const showSuccess = ref(false)
const errors = ref({})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  customSubject: '',
  message: '',
  newsletter: false,
  acceptPrivacy: false
})

const mapCenter = ref({
  lat: 19.4326,
  lng: -99.1332
})

const officeLocations = ref([
  {
    id: 1,
    name: 'Oficina Principal',
    address: 'Av. Reforma 123, Piso 15, Col. Centro',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    phone: '+52 55 1234-5678',
    hours: 'L-V: 9:00-19:00, S: 9:00-15:00'
  }
])

const faqs = ref([
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Nuestro horario de atención es de lunes a viernes de 9:00 AM a 7:00 PM, y sábados de 9:00 AM a 3:00 PM. Los domingos permanecemos cerrados.'
  },
  {
    question: '¿Ofrecen consultas gratuitas?',
    answer: 'Sí, ofrecemos consultas iniciales gratuitas para evaluar tus necesidades inmobiliarias y explicarte nuestros servicios sin compromiso.'
  },
  {
    question: '¿En qué zonas operan?',
    answer: 'Operamos en toda la Ciudad de México y área metropolitana, así como en las principales ciudades del país.'
  },
  {
    question: '¿Cuánto tiempo toma vender una propiedad?',
    answer: 'El tiempo promedio para vender una propiedad varía entre 60 a 90 días, dependiendo del tipo de propiedad, ubicación y condiciones del mercado.'
  },
  {
    question: '¿Cobran comisión por sus servicios?',
    answer: 'Nuestras comisiones son competitivas y transparentes. Te proporcionaremos un desglose completo de costos durante la consulta inicial.'
  }
])

// Métodos
const validateForm = () => {
  errors.value = {}
  
  if (!form.firstName.trim()) {
    errors.value.firstName = 'El nombre es requerido'
  }
  
  if (!form.lastName.trim()) {
    errors.value.lastName = 'El apellido es requerido'
  }
  
  if (!form.email.trim()) {
    errors.value.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value.email = 'El email no es válido'
  }
  
  if (form.phone && !/^[\d\s\-\+\(\)]+$/.test(form.phone)) {
    errors.value.phone = 'El teléfono no es válido'
  }
  
  if (!form.subject) {
    errors.value.subject = 'Selecciona un asunto'
  }
  
  if (!form.message.trim()) {
    errors.value.message = 'El mensaje es requerido'
  } else if (form.message.trim().length < 10) {
    errors.value.message = 'El mensaje debe tener al menos 10 caracteres'
  }
  
  if (!form.acceptPrivacy) {
    errors.value.acceptPrivacy = 'Debes aceptar la política de privacidad'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  try {
    submitting.value = true
    
    // Preparar los datos para envío
    const formData = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      subject: form.subject === 'otro' ? form.customSubject : form.subject,
      message: form.message,
      newsletter: form.newsletter,
      timestamp: new Date().toISOString()
    }
    
    console.log('Datos del formulario:', formData)
    
    // Aquí iría la llamada a la API
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // })
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    // Mostrar mensaje de error
    alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
  } finally {
    submitting.value = false
  }
}

// Función para ver ubicación en mapa
const viewOnMap = (office) => {
  const address = office === 'principal' 
    ? 'Av. Reforma 123, Ciudad de México' 
    : 'Av. Masaryk 234, Ciudad de México'
  
  const encodedAddress = encodeURIComponent(address)
  const mapsUrl = `https://www.google.com/maps/search/${encodedAddress}`
  
  window.open(mapsUrl, '_blank')
}

// JSON-LD para SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contacto - RentUP',
        description: 'Página de contacto de RentUP Portal Inmobiliario',
        url: 'https://rentup.com/contacto',
        mainEntity: {
          '@type': 'RealEstateAgent',
          name: 'RentUP',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Reforma 123, Piso 15',
            addressLocality: 'Ciudad de México',
            addressCountry: 'México'
          },
          telephone: '+52-55-1234-5678',
          email: 'info@rentup.com',
          openingHours: 'Mo-Fr 09:00-19:00, Sa 09:00-15:00'
        }
      })
    }
  ]
})
</script>

<style scoped>
.contact-page {
  padding-top: 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.contact-form-wrapper {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.contact-form .form-label {
  font-weight: 600;
  color: #2c3e50;
}

.contact-form .form-control,
.contact-form .form-select {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  transition: border-color 0.3s ease;
}

.contact-form .form-control:focus,
.contact-form .form-select:focus {
  border-color: #27ae60;
  box-shadow: 0 0 0 0.2rem rgba(39, 174, 96, 0.25);
}

.contact-info {
  position: sticky;
  top: 2rem;
}

.info-card .card {
  transition: transform 0.3s ease;
}

.info-card .card:hover {
  transform: translateY(-2px);
}

.contact-method {
  padding: 1rem 0;
  border-bottom: 1px solid #e9ecef;
}

.contact-method:last-child {
  border-bottom: none;
}

.method-icon {
  width: 50px;
  height: 50px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.25rem;
}

.method-info a {
  color: #27ae60;
  font-weight: 500;
}

.method-info a:hover {
  color: #219a52;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: #27ae60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #219a52;
  color: white;
  transform: translateY(-2px);
}

.contact-map {
  height: 400px;
  width: 100%;
}

/* Estilos para departamentos */
.department-card {
  transition: transform 0.3s ease;
}

.department-card:hover {
  transform: translateY(-5px);
}

.department-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(39, 174, 96, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.department-info p {
  margin: 0;
  font-size: 0.9rem;
}

/* Estilos para oficinas */
.office-card {
  transition: transform 0.3s ease;
}

.office-card:hover {
  transform: translateY(-3px);
}

.office-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(39, 174, 96, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sección de mapa mejorada */
.map-section {
  background: #f8f9fa;
}

.faq-section .accordion-item {
  border: none;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.faq-section .accordion-button {
  background: #fff;
  border: none;
  font-weight: 600;
  color: #2c3e50;
}

.faq-section .accordion-button:not(.collapsed) {
  background: #27ae60;
  color: white;
}

.faq-section .accordion-button:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  .contact-form-wrapper {
    padding: 1.5rem;
  }
  
  .contact-info {
    position: static;
    margin-top: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>