<template>
  <div class="ofrece-page">
    <!-- Page Header -->
    <PageHeader 
      title="Ofrece tu Propiedad" 
      subtitle="Publica tu inmueble de forma gratuita y encuentra el comprador ideal"
      breadcrumb="Inicio / Ofrece tu Propiedad"
    />
    
    <!-- Form Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            
            <!-- Info Alert -->
            <div class="alert alert-info d-flex align-items-center mb-4" role="alert">
              <i class="fas fa-info-circle me-3"></i>
              <div>
                <strong>¡Es totalmente gratuito!</strong> Publica tu propiedad sin costo y recibe contactos de compradores interesados.
              </div>
            </div>

            <!-- Property Form -->
            <div class="property-form-card">
              <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                  <h4 class="mb-0">
                    <i class="fas fa-home me-2"></i>
                    Información de tu Propiedad
                  </h4>
                </div>
                <div class="card-body p-4">
                  <form @submit.prevent="submitProperty" class="property-form">
                    
                    <!-- Tipo de Operação -->
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <label class="form-label required">Tipo de Operación</label>
                        <select v-model="propertyForm.operationType" class="form-select" required>
                          <option value="">Seleccionar...</option>
                          <option value="venta">Venta</option>
                          <option value="renta">Renta</option>
                          <option value="venta-renta">Venta o Renta</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label required">Tipo de Propiedad</label>
                        <select v-model="propertyForm.propertyType" class="form-select" required>
                          <option value="">Seleccionar...</option>
                          <option value="casa">Casa</option>
                          <option value="departamento">Departamento</option>
                          <option value="oficina">Oficina</option>
                          <option value="local">Local Comercial</option>
                          <option value="terreno">Terreno</option>
                          <option value="bodega">Bodega</option>
                        </select>
                      </div>
                    </div>

                    <!-- Ubicación -->
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <label class="form-label required">Estado</label>
                        <select v-model="propertyForm.state" class="form-select" required>
                          <option value="">Seleccionar...</option>
                          <option value="cdmx">Ciudad de México</option>
                          <option value="edomex">Estado de México</option>
                          <option value="jalisco">Jalisco</option>
                          <option value="nuevo-leon">Nuevo León</option>
                          <option value="quintana-roo">Quintana Roo</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label required">Municipio/Delegación</label>
                        <input 
                          v-model="propertyForm.municipality" 
                          type="text" 
                          class="form-control" 
                          placeholder="Ej. Miguel Hidalgo"
                          required
                        >
                      </div>
                    </div>

                    <div class="row mb-4">
                      <div class="col-md-8">
                        <label class="form-label required">Colonia</label>
                        <input 
                          v-model="propertyForm.neighborhood" 
                          type="text" 
                          class="form-control" 
                          placeholder="Ej. Polanco"
                          required
                        >
                      </div>
                      <div class="col-md-4">
                        <label class="form-label">Código Postal</label>
                        <input 
                          v-model="propertyForm.zipCode" 
                          type="text" 
                          class="form-control" 
                          placeholder="11560"
                          maxlength="5"
                        >
                      </div>
                    </div>

                    <!-- Características -->
                    <div class="row mb-4">
                      <div class="col-md-3">
                        <label class="form-label">Recámaras</label>
                        <select v-model="propertyForm.bedrooms" class="form-select">
                          <option value="">N/A</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5+</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Baños</label>
                        <select v-model="propertyForm.bathrooms" class="form-select">
                          <option value="">N/A</option>
                          <option value="1">1</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="4">4+</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Estacionamientos</label>
                        <select v-model="propertyForm.parking" class="form-select">
                          <option value="">N/A</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4+</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">M² Construcción</label>
                        <input 
                          v-model="propertyForm.constructionArea" 
                          type="number" 
                          class="form-control" 
                          placeholder="150"
                          min="1"
                        >
                      </div>
                    </div>

                    <!-- Precio -->
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <label class="form-label required">Precio</label>
                        <div class="input-group">
                          <span class="input-group-text">$</span>
                          <input 
                            v-model="propertyForm.price" 
                            type="number" 
                            class="form-control" 
                            placeholder="2500000"
                            required
                            min="1"
                          >
                          <span class="input-group-text">MXN</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Precio Negociable</label>
                        <div class="form-check form-switch mt-2">
                          <input 
                            v-model="propertyForm.negotiable" 
                            class="form-check-input" 
                            type="checkbox" 
                            id="negotiableSwitch"
                          >
                          <label class="form-check-label" for="negotiableSwitch">
                            Sí, el precio es negociable
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Descripción -->
                    <div class="mb-4">
                      <label class="form-label required">Descripción de la Propiedad</label>
                      <textarea 
                        v-model="propertyForm.description" 
                        class="form-control" 
                        rows="4" 
                        placeholder="Describe tu propiedad, incluye características especiales, amenidades, ubicación, etc."
                        required
                        maxlength="1000"
                      ></textarea>
                      <div class="form-text">{{ propertyForm.description.length }}/1000 caracteres</div>
                    </div>

                    <!-- Información de Contacto -->
                    <div class="contact-section">
                      <h5 class="mb-3">
                        <i class="fas fa-user me-2"></i>
                        Información de Contacto
                      </h5>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <label class="form-label required">Nombre Completo</label>
                          <input 
                            v-model="propertyForm.contactName" 
                            type="text" 
                            class="form-control" 
                            placeholder="Juan Pérez"
                            required
                          >
                        </div>
                        <div class="col-md-6">
                          <label class="form-label required">Teléfono</label>
                          <input 
                            v-model="propertyForm.contactPhone" 
                            type="tel" 
                            class="form-control" 
                            placeholder="55 1234 5678"
                            required
                          >
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <label class="form-label required">Email</label>
                          <input 
                            v-model="propertyForm.contactEmail" 
                            type="email" 
                            class="form-control" 
                            placeholder="juan@email.com"
                            required
                          >
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Horario de Contacto</label>
                          <select v-model="propertyForm.contactSchedule" class="form-select">
                            <option value="cualquier-hora">Cualquier hora</option>
                            <option value="mañanas">Mañanas (9:00 - 13:00)</option>
                            <option value="tardes">Tardes (13:00 - 18:00)</option>
                            <option value="fines-semana">Solo fines de semana</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <!-- Términos y Condiciones -->
                    <div class="mb-4">
                      <div class="form-check">
                        <input 
                          v-model="propertyForm.acceptTerms" 
                          class="form-check-input" 
                          type="checkbox" 
                          id="acceptTerms"
                          required
                        >
                        <label class="form-check-label" for="acceptTerms">
                          Acepto los <NuxtLink to="/site/condiciones" target="_blank">términos y condiciones</NuxtLink> 
                          y la <NuxtLink to="/site/privacidad" target="_blank">política de privacidad</NuxtLink>
                        </label>
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="d-grid">
                      <button 
                        type="submit" 
                        class="btn btn-primary btn-lg"
                        :disabled="isSubmitting"
                      >
                        <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                        <i v-else class="fas fa-paper-plane me-2"></i>
                        {{ isSubmitting ? 'Enviando...' : 'Publicar Propiedad' }}
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
          
          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="benefits-card">
              <div class="card shadow-sm">
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0">
                    <i class="fas fa-check-circle me-2"></i>
                    Beneficios
                  </h5>
                </div>
                <div class="card-body">
                  <ul class="benefits-list list-unstyled">
                    <li class="mb-3">
                      <i class="fas fa-star text-warning me-2"></i>
                      <strong>Publicación gratuita</strong><br>
                      <small class="text-muted">Sin costos ocultos ni comisiones</small>
                    </li>
                    <li class="mb-3">
                      <i class="fas fa-eye text-info me-2"></i>
                      <strong>Máxima visibilidad</strong><br>
                      <small class="text-muted">Tu propiedad será vista por miles</small>
                    </li>
                    <li class="mb-3">
                      <i class="fas fa-shield-alt text-success me-2"></i>
                      <strong>Contactos verificados</strong><br>
                      <small class="text-muted">Solo compradores reales</small>
                    </li>
                    <li class="mb-3">
                      <i class="fas fa-headset text-primary me-2"></i>
                      <strong>Soporte 24/7</strong><br>
                      <small class="text-muted">Te acompañamos en todo el proceso</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Tips -->
            <div class="tips-card mt-4">
              <div class="card shadow-sm">
                <div class="card-header bg-warning text-dark">
                  <h5 class="mb-0">
                    <i class="fas fa-lightbulb me-2"></i>
                    Tips para vender más rápido
                  </h5>
                </div>
                <div class="card-body">
                  <ul class="tips-list small">
                    <li>Incluye fotos de alta calidad</li>
                    <li>Describe todas las características</li>
                    <li>Menciona amenidades cercanas</li>
                    <li>Sé honesto con el precio</li>
                    <li>Responde rápido a los interesados</li>
                  </ul>
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
  title: 'Ofrece tu Propiedad - RentUP',
  meta: [
    { name: 'description', content: 'Publica tu propiedad de forma gratuita en RentUP. Llega a miles de compradores potenciales sin comisiones.' },
    { name: 'keywords', content: 'vender propiedad, publicar inmueble, gratis, RentUP, venta casa, renta departamento' },
    { property: 'og:title', content: 'Ofrece tu Propiedad Gratis - RentUP' },
    { property: 'og:description', content: 'Publica tu inmueble sin costo y encuentra el comprador ideal' }
  ]
})

// Estado reactivo
const isSubmitting = ref(false)
const propertyForm = ref({
  operationType: '',
  propertyType: '',
  state: '',
  municipality: '',
  neighborhood: '',
  zipCode: '',
  bedrooms: '',
  bathrooms: '',
  parking: '',
  constructionArea: '',
  price: '',
  negotiable: false,
  description: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  contactSchedule: 'cualquier-hora',
  acceptTerms: false
})

// Métodos
const submitProperty = async () => {
  try {
    isSubmitting.value = true
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aquí iría la lógica real de envío
    console.log('Property form submitted:', propertyForm.value)
    
    // Mostrar mensaje de éxito
    alert('¡Propiedad enviada con éxito! Te contactaremos pronto.')
    
    // Limpiar formulario
    Object.keys(propertyForm.value).forEach(key => {
      if (typeof propertyForm.value[key] === 'boolean') {
        propertyForm.value[key] = false
      } else {
        propertyForm.value[key] = ''
      }
    })
    
  } catch (error) {
    console.error('Error submitting property:', error)
    alert('Error al enviar la propiedad. Por favor intenta de nuevo.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.ofrece-page {
  padding-top: 0;
}

.property-form-card .card-header {
  background: linear-gradient(135deg, #27ae60, #2ecc71) !important;
}

.required::after {
  content: ' *';
  color: #dc3545;
}

.contact-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.benefits-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.benefits-list li:last-child {
  border-bottom: none;
}

.tips-list {
  margin: 0;
  padding-left: 1rem;
}

.tips-list li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.form-check-input:checked {
  background-color: #27ae60;
  border-color: #27ae60;
}

.btn-primary {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #219a52, #27ae60);
}

@media (max-width: 768px) {
  .property-form-card,
  .benefits-card,
  .tips-card {
    margin-bottom: 2rem;
  }
}
</style>