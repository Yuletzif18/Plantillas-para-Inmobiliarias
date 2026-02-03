<template>
  <div>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Contáctanos</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Contacto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section py_120">
      <div class="tf-container">
        <div class="row mb_80">
          <div class="col-12 text-center">
            <h2 class="mb_30">Estamos Aquí Para Ayudarte</h2>
            <p class="text-body-1 text_secondary-color" style="font-size: 18px; line-height: 1.8; max-width: 600px; margin: 0 auto;">
              ¿Tienes alguna pregunta? Nuestro equipo está listo para asistirte con profesionalismo y dedicación
            </p>
          </div>
        </div>

        <div class="row g-4 mb_80">
          <!-- Contact Info Cards -->
          <div class="col-lg-4 col-md-6">
            <div class="contact-info-card text-center p_50">
              <div class="card-icon mb_30">
                <i class="icon-PhoneCall"></i>
              </div>
              <h5 class="mb_15" style="font-size: 18px; font-weight: 700;">Teléfono</h5>
              <p class="text_secondary-color mb_20" style="font-size: 15px;">Llámanos de Lunes a Sábado</p>
              <a href="tel:+573156666688" class="text_primary-color fw-6" style="font-size: 16px;">+57 315 666 6688</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="contact-info-card text-center p_50">
              <div class="card-icon mb_30">
                <i class="icon-EnvelopeSimple"></i>
              </div>
              <h5 class="mb_15" style="font-size: 18px; font-weight: 700;">Email</h5>
              <p class="text_secondary-color mb_20" style="font-size: 15px;">Escríbenos en cualquier momento</p>
              <a href="mailto:info@luminor.com" class="text_primary-color fw-6" style="font-size: 16px;">info@luminor.com</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="contact-info-card text-center p_50">
              <div class="card-icon mb_30">
                <i class="icon-MapPin"></i>
              </div>
              <h5 class="mb_15" style="font-size: 18px; font-weight: 700;">Oficina</h5>
              <p class="text_secondary-color mb_20" style="font-size: 15px;">Visítanos</p>
              <p class="text_primary-color fw-6" style="font-size: 16px;">Calle 123 #45-67<br>Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Contact Form -->
          <div class="col-lg-7 mb-4 mb-lg-0">
            <div class="contact-form-wrapper p_50 bg-surface rounded">
              <h4 class="mb_40" style="font-size: 20px; font-weight: 700;">Envíanos un Mensaje</h4>
              <form @submit.prevent="handleSubmit">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mb_10">Nombre Completo *</label>
                      <input 
                        v-model="form.nombre" 
                        type="text" 
                        class="form-control" 
                        placeholder="Tu nombre"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mb_10">Empresa</label>
                      <input 
                        v-model="form.empresa" 
                        type="text" 
                        class="form-control" 
                        placeholder="Nombre de tu empresa"
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mb_10">Email *</label>
                      <input 
                        v-model="form.correo" 
                        type="email" 
                        class="form-control" 
                        placeholder="tu@email.com"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mb_10">Teléfono *</label>
                      <input 
                        v-model="form.telefono" 
                        type="tel" 
                        class="form-control" 
                        placeholder="+57 300 000 0000"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="mb_10">Mensaje *</label>
                      <textarea 
                        v-model="form.mensaje" 
                        class="form-control" 
                        rows="6" 
                        placeholder="Escribe tu mensaje aquí..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button 
                      type="submit" 
                      class="tf-btn btn-bg-primary btn-px-40"
                      :disabled="isSubmitting"
                    >
                      <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
                      <span class="bg-effect"></span>
                    </button>
                  </div>
                  <div v-if="submitMessage" class="col-12">
                    <div :class="['alert', submitSuccess ? 'alert-success' : 'alert-danger']">
                      {{ submitMessage }}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="col-lg-5">
            <!-- Office Hours -->
            <div class="info-box mb_40 p_40 bg-surface rounded">
              <h5 class="mb_25" style="font-size: 18px; font-weight: 700;">Horario de Atención</h5>
              <ul class="schedule-list">
                <li class="schedule-item d-flex justify-content-between mb_15">
                  <span class="day">Lunes - Viernes:</span>
                  <span class="hours fw-6">8:00 AM - 6:00 PM</span>
                </li>
                <li class="schedule-item d-flex justify-content-between mb_15">
                  <span class="day">Sábado:</span>
                  <span class="hours fw-6">9:00 AM - 2:00 PM</span>
                </li>
                <li class="schedule-item d-flex justify-content-between">
                  <span class="day">Domingo:</span>
                  <span class="hours fw-6 text_secondary-color">Cerrado</span>
                </li>
              </ul>
            </div>

            <!-- Social Media -->
            <div class="info-box mb_40 p_40 bg-surface rounded">
              <h5 class="mb_25" style="font-size: 18px; font-weight: 700;">Síguenos en Redes Sociales</h5>
              <div class="social-links d-flex gap_15">
                <a href="#" class="social-link">
                  <i class="icon-FacebookLogo"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="icon-InstagramLogo"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="icon-XLogo"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="icon-LinkedinLogo"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="icon-YoutubeLogo"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="info-box p_40 bg-surface rounded">
              <h5 class="mb_25" style="font-size: 18px; font-weight: 700;">Enlaces Rápidos</h5>
              <ul class="quick-links-list">
                <li class="mb_10">
                  <NuxtLink to="/site/inmuebles" class="link-item">
                    <i class="icon-CaretRight me-2"></i>
                    Ver Propiedades
                  </NuxtLink>
                </li>
                <li class="mb_10">
                  <NuxtLink to="/site/proyectos" class="link-item">
                    <i class="icon-CaretRight me-2"></i>
                    Proyectos
                  </NuxtLink>
                </li>
                <li class="mb_10">
                  <NuxtLink to="/site/servicios" class="link-item">
                    <i class="icon-CaretRight me-2"></i>
                    Servicios
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/site/ofrece" class="link-item">
                    <i class="icon-CaretRight me-2"></i>
                    Ofrecer un Inmueble
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Map Section -->
        <div class="row mt_80">
          <div class="col-12">
            <div class="map-section-wrapper">
              <h3 class="mb_30 text-center" style="font-size: 24px; font-weight: 700;">Ubicación de Nuestra Oficina</h3>
              <div class="map-container rounded">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8215479853207!2d-74.07617922346052!3d4.711159471493212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2f8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sCalle%20123%20%2345-67%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1706920800000" 
                  width="100%" 
                  height="500" 
                  style="border: 0; border-radius: 16px;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div class="map-info mt_40">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="info-item p_30 bg-light rounded">
                      <h6 class="mb_15" style="font-size: 16px; font-weight: 700; color: #111;">
                        <i class="icon-MapPin" style="color: #e4e95b; margin-right: 10px;"></i>
                        Dirección
                      </h6>
                      <p style="color: #555; font-size: 14px; margin-bottom: 0;">
                        Calle 123 #45-67<br>
                        Bogotá, Cundinamarca<br>
                        Colombia
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-item p_30 bg-light rounded">
                      <h6 class="mb_15" style="font-size: 16px; font-weight: 700; color: #111;">
                        <i class="icon-PhoneCall" style="color: #e4e95b; margin-right: 10px;"></i>
                        Contacto Directo
                      </h6>
                      <p style="color: #555; font-size: 14px; margin-bottom: 0;">
                        <a href="tel:+573156666688" style="color: #e4e95b; text-decoration: none;">+57 315 666 6688</a><br>
                        <a href="mailto:info@luminor.com" style="color: #e4e95b; text-decoration: none;">info@luminor.com</a>
                      </p>
                    </div>
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
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// Variables del formulario
const form = ref({
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  mensaje: ''
})

const pagId = route.params?.id
const WebsiteName = ref('')
const pag = ref({})
const children = ref([])

// Estado del formulario
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Obtener valor de configuración
const getWebConfigValue = async (key) => {
  try {
    const res = await $psweb.getWebConfigValue?.(key) || await $inmostore.getSetting?.(key) || {}
    return res.resultado || res.Resultado || res.Result || ''
  } catch (error) {
    console.error(`Error obteniendo config ${key}:`, error)
    return ''
  }
}

// Enviar formulario de contacto
let redirectTimeout = null
const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitSuccess.value = false
  try {
    // Validar campos requeridos
    const { nombre, correo, telefono, mensaje } = form.value
    if (!nombre || !correo || !telefono || !mensaje) {
      submitMessage.value = 'Por favor, complete todos los campos requeridos.'
      isSubmitting.value = false
      return
    }

    // Guardar mensaje en base de datos
    const res = await $psweb.addComentario?.({
      Nombre: nombre,
      Empresa: form.value.empresa || '',
      Correo: correo,
      Telefono: telefono,
      Comentarios: mensaje,
      Fecha: new Date().toISOString(),
      Status: 1,
      Ubicacion: 0,
      WebsiteId: null
    }) || {}

    // Nota: Integración de email pendiente de implementación
    try {
      // Obtener configuración de email
      const mailFrom = await getWebConfigValue('MailFrom')
      const mailFromName = await getWebConfigValue('MailFromName')
      const emailBody = `
        <html>
          <body>
            <h1>Nuevo mensaje desde el sitio web</h1>
            <p>Estás recibiendo este mensaje debido a que has recibido un nuevo mensaje desde el sitio web.</p>
            <p><strong>Detalle del mensaje</strong></p>
            <ul>
              <li><strong>Nombre:</strong> ${nombre}</li>
              <li><strong>Empresa:</strong> ${form.value.empresa || 'No especificada'}</li>
              <li><strong>Correo:</strong> ${correo}</li>
              <li><strong>Teléfono:</strong> ${telefono}</li>
              <li><strong>Contenido del mensaje:</strong><br><br>${mensaje}</li>
            </ul>
            <p><small><small>El Equipo de Portal Services.</small></small></p>
          </body>
        </html>
      `
      // Simulación de envío de email
      // await $fetch('/api/email', { ... })
    } catch (emailError) {
      console.warn('Error enviando email:', emailError)
    }

    submitMessage.value = 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.'
    submitSuccess.value = true
    
    // Limpiar formulario
    if (form.value) {
      form.value.nombre = ''
      form.value.empresa = ''
      form.value.correo = ''
      form.value.telefono = ''
      form.value.mensaje = ''
    }
    
    // Redirigir al inicio tras 2 segundos
    redirectTimeout = setTimeout(() => {
      router.push('/site/inicio')
    }, 2000)
  } catch (error) {
    console.error('Error enviando formulario:', error)
    submitMessage.value = 'Error al enviar el mensaje. Por favor, intente nuevamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  if (redirectTimeout) clearTimeout(redirectTimeout)
})

onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'
      if (pagId) {
        res = await $psweb.getPagina(pagId)
        pag.value = res.Resultado || res.resultado || {}
        res = await $psweb.getPaginaChilds(pagId, 3)
        children.value = (res.Items || res.items || [])
      }
      useHead({
        title: 'Contáctenos - ' + WebsiteName.value,
        meta: [
          { name: 'description', content: 'Contáctenos para más información sobre nuestras propiedades y servicios inmobiliarios.' }
        ]
      })
    } catch (error) {
      console.error('Error en contacto.vue:', error)
      useHead({
        title: 'Contáctenos'
      })
    }
  } else {
    console.error('El plugin PSWeb o InmoStore no está disponible.')
  }
})
</script>

<style scoped>
.contact-info-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(228, 233, 91, 0.1);
}

.contact-info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 36px rgba(228, 233, 91, 0.15);
  border-color: rgba(228, 233, 91, 0.3);
}

.card-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(228, 233, 91, 0.2);
  transition: transform 0.3s ease;
}

.contact-info-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-icon i {
  font-size: 40px;
  color: white;
}

.contact-form-wrapper {
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(228, 233, 91, 0.1);
}

.form-control {
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 15px;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(228, 233, 91, 0.1);
  background: #f9fef4;
}

.form-control::placeholder {
  color: #999;
}

.info-box {
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(228, 233, 91, 0.1);
}

.schedule-item {
  padding-bottom: 18px;
  border-bottom: 1px solid #e0e0e0;
}

.schedule-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.schedule-item .day {
  font-size: 15px;
  color: #333;
}

.schedule-item .hours {
  font-size: 15px;
  color: var(--primary-color);
}

.social-link {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 22px;
  border: 2px solid transparent;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-5px) scale(1.08);
  border-color: var(--secondary-color);
}

.link-item {
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 15px;
}

.link-item:hover {
  color: var(--primary-color);
  padding-left: 4px;
}

.alert {
  padding: 16px 20px;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: 500;
}

.alert-success {
  background: #d4edda;
  border: 1.5px solid #b1dfbb;
  color: #155724;
}

.alert-danger {
  background: #f8d7da;
  border: 1.5px solid #f5b6bc;
  color: #721c24;
}

.map-section-wrapper {
  width: 100%;
}

.map-container {
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}

.map-container:hover {
  box-shadow: 0 12px 48px rgba(228, 233, 91, 0.2);
}

.map-container iframe {
  display: block;
  width: 100%;
}

.map-info .info-item {
  background: linear-gradient(135deg, #f9fef4 0%, #f5f5f5 100%);
  border: 1px solid rgba(228, 233, 91, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.map-info .info-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(228, 233, 91, 0.1);
  border-color: rgba(228, 233, 91, 0.3);
}

.map-info .info-item i {
  font-size: 20px;
}

.map-info .info-item a {
  transition: all 0.3s ease;
  font-weight: 600;
}

.map-info .info-item a:hover {
  color: #eb4d4d !important;
  text-decoration: underline;
}
</style>
