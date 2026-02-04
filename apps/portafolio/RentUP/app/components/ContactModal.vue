<template>
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contactModalLabel">Contáctanos</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleContact">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName" class="form-label">Nombre</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="firstName" 
                  v-model="contactForm.firstName"
                  required
                >
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName" class="form-label">Apellidos</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="lastName" 
                  v-model="contactForm.lastName"
                  required
                >
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="contactEmail" class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="contactEmail" 
                  v-model="contactForm.email"
                  required
                >
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input 
                  type="tel" 
                  class="form-control" 
                  id="phone" 
                  v-model="contactForm.phone"
                >
              </div>
            </div>
            
            <div class="mb-3">
              <label for="subject" class="form-label">Asunto</label>
              <select class="form-select" id="subject" v-model="contactForm.subject" required>
                <option value="">Selecciona un asunto</option>
                <option value="compra">Compra de inmueble</option>
                <option value="venta">Venta de inmueble</option>
                <option value="alquiler">Alquiler de inmueble</option>
                <option value="informacion">Información general</option>
                <option value="soporte">Soporte técnico</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea 
                class="form-control" 
                id="message" 
                rows="4" 
                v-model="contactForm.message"
                required
              ></textarea>
            </div>
            
            <div class="mb-3 form-check">
              <input 
                type="checkbox" 
                class="form-check-input" 
                id="acceptTerms"
                v-model="contactForm.acceptTerms"
                required
              >
              <label class="form-check-label" for="acceptTerms">
                Acepto los <a href="/site/legal" target="_blank">términos y condiciones</a> y la <a href="/site/privacidad" target="_blank">política de privacidad</a>
              </label>
            </div>
            
            <div class="d-grid">
              <button type="submit" class="btn btn-primary" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                {{ isLoading ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </div>
          </form>
          
          <div v-if="showSuccess" class="alert alert-success mt-3">
            <i class="fas fa-check-circle me-2"></i>
            ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  acceptTerms: false
})

const isLoading = ref(false)
const showSuccess = ref(false)

const handleContact = async () => {
  isLoading.value = true
  showSuccess.value = false
  
  try {
    // Aquí iría la lógica para enviar el formulario de contacto
    console.log('Contact form submission:', contactForm)
    
    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mostrar mensaje de éxito
    showSuccess.value = true
    
    // Reset form
    Object.assign(contactForm, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      acceptTerms: false
    })
    
    // Cerrar modal después de 2 segundos
    setTimeout(() => {
      const modal = document.getElementById('contactModal')
      const bootstrapModal = bootstrap.Modal.getInstance(modal)
      bootstrapModal?.hide()
      showSuccess.value = false
    }, 2000)
    
  } catch (error) {
    console.error('Contact form error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.modal-body {
  padding: 2rem;
}

.btn-primary {
  background-color: #27ae60;
  border-color: #27ae60;
}

.btn-primary:hover {
  background-color: #219a52;
  border-color: #219a52;
}

.form-check-label a {
  color: #27ae60;
  text-decoration: none;
}

.form-check-label a:hover {
  text-decoration: underline;
}

.alert-success {
  border-color: #27ae60;
  background-color: rgba(39, 174, 96, 0.1);
  color: #155724;
}
</style>