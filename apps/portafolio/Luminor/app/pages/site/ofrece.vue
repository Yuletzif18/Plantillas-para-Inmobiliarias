<template>
  <div>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Ofrece tu Propiedad</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Ofrece tu Propiedad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section py_60">
      <div class="tf-container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mb_25">Vende o Arrienda tu Propiedad con Nosotros</h2>
            <p class="text-body-1 text_secondary-color mb_30">
              Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo 
              para brindarte una asesoría personalizada y avaluar tu propiedad sin costo.
            </p>
            <div class="info-cards d-flex gap_20 justify-content-center flex-wrap">
              <div class="info-card-small">
                <i class="icon-Clock"></i>
                <div>
                  <strong>Respuesta en 24h</strong>
                  <p>Te contactamos rápidamente</p>
                </div>
              </div>
              <div class="info-card-small">
                <i class="icon-ChartLine"></i>
                <div>
                  <strong>Avalúo Gratuito</strong>
                  <p>Sin compromiso inicial</p>
                </div>
              </div>
              <div class="info-card-small">
                <i class="icon-Users"></i>
                <div>
                  <strong>Expertos Certificados</strong>
                  <p>Asesoría profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="form-section py_60 bg-surface">
      <div class="tf-container">
        <div class="row">
          <!-- Progress Steps -->
          <div class="col-12 mb_40">
            <div class="progress-steps">
              <div 
                v-for="(step, index) in steps" 
                :key="index" 
                class="step-item"
                :class="{ 
                  'active': currentStep === index + 1,
                  'completed': currentStep > index + 1
                }"
              >
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-label">{{ step }}</div>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mx-auto">
            <div class="form-box p_40 bg-white rounded">
              <form @submit.prevent="handleSubmit">
                <!-- Step 1: Información Personal -->
                <div v-show="currentStep === 1" class="form-step">
                  <h4 class="mb_30">Información Personal</h4>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Nombre Completo *</label>
                      <input 
                        v-model="formData.fullName" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Tipo de Documento *</label>
                      <select v-model="formData.docType" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="cc">Cédula de Ciudadanía</option>
                        <option value="ce">Cédula de Extranjería</option>
                        <option value="nit">NIT</option>
                        <option value="pasaporte">Pasaporte</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Número de Documento *</label>
                      <input 
                        v-model="formData.docNumber" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Teléfono *</label>
                      <input 
                        v-model="formData.phone" 
                        type="tel" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email *</label>
                      <input 
                        v-model="formData.email" 
                        type="email" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Ciudad *</label>
                      <input 
                        v-model="formData.city" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                  </div>
                </div>

                <!-- Step 2: Información de la Propiedad -->
                <div v-show="currentStep === 2" class="form-step">
                  <h4 class="mb_30">Información de la Propiedad</h4>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Tipo de Propiedad *</label>
                      <select v-model="formData.propertyType" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="casa">Casa</option>
                        <option value="oficina">Oficina</option>
                        <option value="local">Local Comercial</option>
                        <option value="lote">Lote</option>
                        <option value="finca">Finca</option>
                        <option value="bodega">Bodega</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Propósito *</label>
                      <select v-model="formData.purpose" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="venta">Venta</option>
                        <option value="arriendo">Arriendo</option>
                        <option value="ambos">Venta o Arriendo</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Dirección Completa *</label>
                      <input 
                        v-model="formData.address" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Ciudad/Municipio *</label>
                      <input 
                        v-model="formData.propertyCity" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Barrio/Sector *</label>
                      <input 
                        v-model="formData.neighborhood" 
                        type="text" 
                        class="form-control" 
                        required
                      >
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Habitaciones</label>
                      <input 
                        v-model.number="formData.bedrooms" 
                        type="number" 
                        class="form-control" 
                        min="0"
                      >
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Baños</label>
                      <input 
                        v-model.number="formData.bathrooms" 
                        type="number" 
                        class="form-control" 
                        min="0"
                      >
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Área (m²) *</label>
                      <input 
                        v-model.number="formData.area" 
                        type="number" 
                        class="form-control" 
                        required
                        min="1"
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Precio Esperado (COP) *</label>
                      <input 
                        v-model="formData.price" 
                        type="text" 
                        class="form-control" 
                        required
                        placeholder="Ej: 350000000"
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Estrato</label>
                      <select v-model="formData.stratum" class="form-select">
                        <option value="">Seleccionar...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Características y Detalles -->
                <div v-show="currentStep === 3" class="form-step">
                  <h4 class="mb_30">Características y Detalles</h4>
                  <div class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Descripción de la Propiedad *</label>
                      <textarea 
                        v-model="formData.description" 
                        class="form-control" 
                        rows="4" 
                        required
                        placeholder="Describe las características principales de tu propiedad..."
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Características Adicionales</label>
                      <div class="row g-2 mt_10">
                        <div v-for="amenity in amenitiesList" :key="amenity" class="col-md-4 col-6">
                          <label class="checkbox-label">
                            <input 
                              type="checkbox" 
                              :value="amenity" 
                              v-model="formData.amenities"
                            >
                            <span>{{ amenity }}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Antigüedad (años)</label>
                      <input 
                        v-model.number="formData.age" 
                        type="number" 
                        class="form-control" 
                        min="0"
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Piso/Nivel</label>
                      <input 
                        v-model="formData.floor" 
                        type="text" 
                        class="form-control"
                      >
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Disponibilidad *</label>
                      <select v-model="formData.availability" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="inmediata">Inmediata</option>
                        <option value="15dias">En 15 días</option>
                        <option value="1mes">En 1 mes</option>
                        <option value="3meses">En 3 meses</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">¿Acepta Mascotas?</label>
                      <select v-model="formData.pets" class="form-select">
                        <option value="">Seleccionar...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="negociable">Negociable</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Step 4: Documentación y Confirmación -->
                <div v-show="currentStep === 4" class="form-step">
                  <h4 class="mb_30">Documentación y Confirmación</h4>
                  <div class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Imágenes de la Propiedad</label>
                      <input 
                        type="file" 
                        class="form-control" 
                        multiple 
                        accept="image/*"
                        @change="handleFileUpload"
                      >
                      <small class="text_secondary-color">Puedes subir hasta 10 imágenes (máx. 5MB cada una)</small>
                      <div v-if="uploadedFiles.length > 0" class="mt_15">
                        <p class="text-caption mb_10">Archivos seleccionados: {{ uploadedFiles.length }}</p>
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label">¿Tiene escrituras al día? *</label>
                      <select v-model="formData.hasDocuments" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="proceso">En proceso</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">¿Tiene deudas o gravámenes? *</label>
                      <select v-model="formData.hasDebts" class="form-select" required>
                        <option value="">Seleccionar...</option>
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Comentarios Adicionales</label>
                      <textarea 
                        v-model="formData.comments" 
                        class="form-control" 
                        rows="3"
                        placeholder="¿Algo más que debamos saber sobre tu propiedad?"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <label class="checkbox-label">
                        <input type="checkbox" v-model="formData.acceptTerms" required>
                        <span>
                          Acepto los 
                          <NuxtLink to="/site/condiciones" target="_blank">términos y condiciones</NuxtLink> 
                          y la 
                          <NuxtLink to="/site/privacidad" target="_blank">política de privacidad</NuxtLink>
                        </span>
                      </label>
                    </div>
                    <div class="col-12">
                      <label class="checkbox-label">
                        <input type="checkbox" v-model="formData.acceptContact">
                        <span>Acepto ser contactado por WhatsApp, correo electrónico y llamadas</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="form-navigation mt_40 d-flex gap_15 justify-content-between">
                  <button 
                    v-if="currentStep > 1" 
                    type="button" 
                    @click="prevStep" 
                    class="tf-btn btn-outline"
                  >
                    <i class="icon-CaretLeft"></i>
                    <span>Anterior</span>
                  </button>
                  <button 
                    v-if="currentStep < 4" 
                    type="button" 
                    @click="nextStep" 
                    class="tf-btn btn-bg-primary ms-auto"
                  >
                    <span>Siguiente</span>
                    <i class="icon-CaretRight"></i>
                  </button>
                  <button 
                    v-if="currentStep === 4" 
                    type="submit" 
                    class="tf-btn btn-bg-primary ms-auto"
                    :disabled="isSubmitting"
                  >
                    <span v-if="!isSubmitting">Enviar Información</span>
                    <span v-else>Enviando...</span>
                  </button>
                </div>
              </form>
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
        <h4 class="mb_15">¡Solicitud Enviada Exitosamente!</h4>
        <p class="text-body-2 text_secondary-color mb_30">
          Hemos recibido la información de tu propiedad. Uno de nuestros asesores 
          se pondrá en contacto contigo dentro de las próximas 24 horas.
        </p>
        <button @click="closeModal" class="tf-btn btn-bg-primary w-100">
          <span>Entendido</span>
        </button>
      </div>
    </div>

    <!-- Why Choose Us -->
    <section class="why-section py_90">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12 text-center">
            <h2 class="mb_20">¿Por Qué Ofrecer tu Propiedad con Nosotros?</h2>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="benefit in benefits" :key="benefit.title" class="col-lg-3 col-md-6">
            <div class="benefit-card text-center p_30">
              <div class="benefit-icon mb_20">
                <i :class="`icon-${benefit.icon}`"></i>
              </div>
              <h6 class="mb_15">{{ benefit.title }}</h6>
              <p class="text-body-2 text_secondary-color mb-0">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Ofrece tu Propiedad - Luminor Real Estate',
  meta: [
    { name: 'description', content: 'Vende o arrienda tu propiedad con nosotros. Avalúo gratuito, asesoría profesional y los mejores resultados en el mercado inmobiliario.' }
  ]
})

// Data
const currentStep = ref(1)
const isSubmitting = ref(false)
const showSuccessModal = ref(false)
const uploadedFiles = ref([])

const steps = [
  'Información Personal',
  'Datos de la Propiedad',
  'Características',
  'Documentación'
]

const formData = ref({
  // Step 1
  fullName: '',
  docType: '',
  docNumber: '',
  phone: '',
  email: '',
  city: '',
  // Step 2
  propertyType: '',
  purpose: '',
  address: '',
  propertyCity: '',
  neighborhood: '',
  bedrooms: null,
  bathrooms: null,
  area: null,
  price: '',
  stratum: '',
  // Step 3
  description: '',
  amenities: [],
  age: null,
  floor: '',
  availability: '',
  pets: '',
  // Step 4
  hasDocuments: '',
  hasDebts: '',
  comments: '',
  acceptTerms: false,
  acceptContact: false
})

const amenitiesList = [
  'Parqueadero',
  'Balcón',
  'Terraza',
  'Piscina',
  'Gimnasio',
  'Zona BBQ',
  'Ascensor',
  'Portería',
  'Closets',
  'Cocina Integral',
  'Calentador',
  'Aire Acondicionado'
]

const benefits = [
  {
    icon: 'Camera',
    title: 'Fotografía Profesional',
    description: 'Sesión fotográfica HD incluida sin costo'
  },
  {
    icon: 'ChartLine',
    title: 'Avalúo Gratuito',
    description: 'Valuación comercial sin compromiso'
  },
  {
    icon: 'MegaphoneSimple',
    title: 'Marketing Digital',
    description: 'Publicación en principales portales'
  },
  {
    icon: 'Handshake',
    title: 'Asesoría Legal',
    description: 'Acompañamiento jurídico completo'
  }
]

// Methods
const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleFileUpload = (event) => {
  uploadedFiles.value = Array.from(event.target.files)
}

const handleSubmit = async () => {
  if (!formData.value.acceptTerms) {
    alert('Debes aceptar los términos y condiciones')
    return
  }

  isSubmitting.value = true

  try {
    // Simular envío al servidor
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showSuccessModal.value = true
    
    // Reset form
    currentStep.value = 1
    formData.value = {
      fullName: '',
      docType: '',
      docNumber: '',
      phone: '',
      email: '',
      city: '',
      propertyType: '',
      purpose: '',
      address: '',
      propertyCity: '',
      neighborhood: '',
      bedrooms: null,
      bathrooms: null,
      area: null,
      price: '',
      stratum: '',
      description: '',
      amenities: [],
      age: null,
      floor: '',
      availability: '',
      pets: '',
      hasDocuments: '',
      hasDebts: '',
      comments: '',
      acceptTerms: false,
      acceptContact: false
    }
    uploadedFiles.value = []
  } catch (error) {
    alert('Error al enviar el formulario. Por favor intenta nuevamente.')
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  showSuccessModal.value = false
}
</script>

<style scoped>
.info-card-small {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: var(--surface-color);
  border-radius: 8px;
}

.info-card-small i {
  font-size: 32px;
  color: var(--primary-color);
}

.info-card-small strong {
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
}

.info-card-small p {
  font-size: 12px;
  color: var(--secondary-color);
  margin: 0;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 30px;
}

.progress-steps::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 30px;
  right: 30px;
  height: 2px;
  background: var(--border-color);
  z-index: 1;
}

.step-item {
  position: relative;
  z-index: 2;
  text-align: center;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.step-item.active .step-number {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.step-item.completed .step-number {
  background: var(--success-color);
  border-color: var(--success-color);
  color: white;
}

.step-label {
  font-size: 14px;
  color: var(--secondary-color);
}

.step-item.active .step-label {
  color: var(--primary-color);
  font-weight: 600;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.checkbox-label:hover {
  background: var(--surface-color);
}

.checkbox-label input[type="checkbox"] {
  margin-top: 3px;
  cursor: pointer;
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

.benefit-card {
  background: var(--surface-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto;
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

@media (max-width: 768px) {
  .progress-steps {
    padding: 0 10px;
  }
  
  .step-label {
    font-size: 11px;
  }
  
  .step-number {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>
