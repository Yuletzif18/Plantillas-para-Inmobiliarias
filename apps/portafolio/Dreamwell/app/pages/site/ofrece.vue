<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_center_column" data-src="/img/page_header_2.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow zoomIn">Ofrece tu Inmueble</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Ofrecer Inmueble</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="cs_section_heading cs_style_1 text-center cs_mb_50">
              <h2 class="cs_fs_36 cs_semibold cs_mb_20">¿Quieres vender o arrendar tu propiedad?</h2>
              <p class="mb-0">Completa el formulario y nos pondremos en contacto contigo para ayudarte.</p>
            </div>

            <form @submit.prevent="handleSubmit" class="cs_offer_form cs_white_bg cs_radius_15 cs_p_40">
              <h3 class="cs_fs_24 cs_semibold cs_mb_30">Información del Propietario</h3>
              
              <div class="row cs_gap_y_24 cs_mb_40">
                <div class="col-md-6">
                  <input 
                    v-model="form.nombrePropietario" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Nombre Completo *"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="cs_form_field" 
                    placeholder="Email *"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.telefono" 
                    type="tel" 
                    class="cs_form_field" 
                    placeholder="Teléfono *"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.documento" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Documento de Identidad"
                  >
                </div>
              </div>

              <h3 class="cs_fs_24 cs_semibold cs_mb_30">Información del Inmueble</h3>
              
              <div class="row cs_gap_y_24 cs_mb_40">
                <div class="col-md-6">
                  <select v-model="form.tipoInmueble" class="cs_form_field" required>
                    <option value="">Tipo de Inmueble *</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="local">Local Comercial</option>
                    <option value="terreno">Terreno</option>
                    <option value="oficina">Oficina</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select v-model="form.operacion" class="cs_form_field" required>
                    <option value="">Operación *</option>
                    <option value="venta">Venta</option>
                    <option value="arriendo">Arriendo</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.direccion" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Dirección *"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.ciudad" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Ciudad *"
                    required
                  >
                </div>
                <div class="col-md-4">
                  <input 
                    v-model="form.area" 
                    type="number" 
                    class="cs_form_field" 
                    placeholder="Área (m²)"
                  >
                </div>
                <div class="col-md-4">
                  <input 
                    v-model="form.habitaciones" 
                    type="number" 
                    class="cs_form_field" 
                    placeholder="Habitaciones"
                  >
                </div>
                <div class="col-md-4">
                  <input 
                    v-model="form.banos" 
                    type="number" 
                    class="cs_form_field" 
                    placeholder="Baños"
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.precioEsperado" 
                    type="number" 
                    class="cs_form_field" 
                    placeholder="Precio Esperado"
                  >
                </div>
                <div class="col-md-6">
                  <input 
                    v-model="form.anoConstructivo" 
                    type="number" 
                    class="cs_form_field" 
                    placeholder="Año de Construcción"
                  >
                </div>
                <div class="col-12">
                  <textarea 
                    v-model="form.descripcion" 
                    class="cs_form_field" 
                    placeholder="Descripción del inmueble" 
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div class="text-center">
                <button 
                  type="submit" 
                  class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7"
                  :disabled="isSubmitting"
                >
                  <span class="cs_btn_text">{{ isSubmitting ? 'Enviando...' : 'Enviar Información' }}</span>
                  <span class="cs_btn_icon"><i class="fa-solid fa-paper-plane"></i></span>
                </button>
              </div>

              <div v-if="submitMessage" class="cs_mt_30 text-center" :class="submitSuccess ? 'text-success' : 'text-danger'">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  nombrePropietario: '',
  email: '',
  telefono: '',
  documento: '',
  tipoInmueble: '',
  operacion: '',
  direccion: '',
  ciudad: '',
  area: '',
  habitaciones: '',
  banos: '',
  precioEsperado: '',
  anoConstructivo: '',
  descripcion: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Aquí se implementaría el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitMessage.value = 'Información enviada exitosamente. Nos pondremos en contacto pronto.'
    submitSuccess.value = true
    
    // Limpiar formulario
    form.value = {
      nombrePropietario: '',
      email: '',
      telefono: '',
      documento: '',
      tipoInmueble: '',
      operacion: '',
      direccion: '',
      ciudad: '',
      area: '',
      habitaciones: '',
      banos: '',
      precioEsperado: '',
      anoConstructivo: '',
      descripcion: ''
    }
  } catch (error) {
    submitMessage.value = 'Error al enviar la información. Por favor, intente nuevamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Ofrecer Inmueble - Formulario',
  meta: [
    { name: 'description', content: 'Ofrece tu propiedad para venta o arriendo.' }
  ]
})
</script>
