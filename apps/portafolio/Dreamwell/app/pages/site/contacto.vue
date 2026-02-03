<template>
  <div>
    <!-- Start Page Header Section -->
    <section class="cs_page_heading cs_style_2 position-relative">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_type_1 cs_heading_bg cs_bg_filed cs_center_column" :style="{ backgroundImage: 'url(/img/page_header_2.jpg)' }">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow zoomIn">Estamos ansiosos por escucharte</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Contacto</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->

    <!-- Start Contact Info Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row cs_gap_y_40">
          <div class="col-lg-4">
            <div class="cs_iconbox cs_style_2 text-center cs_white_bg cs_radius_15">
              <div class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_15">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h3 class="cs_iconbox_title cs_fs_24 cs_semibold">Dirección</h3>
              <p class="mb-0">Calle Principal #123<br>Ciudad, País</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_iconbox cs_style_2 text-center cs_white_bg cs_radius_15">
              <div class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_15">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h3 class="cs_iconbox_title cs_fs_24 cs_semibold">Email</h3>
              <p class="mb-0">
                <a href="mailto:info@inmobiliaria.com">info@inmobiliaria.com</a><br>
                <a href="mailto:ventas@inmobiliaria.com">ventas@inmobiliaria.com</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cs_iconbox cs_style_2 text-center cs_white_bg cs_radius_15">
              <div class="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_15">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h3 class="cs_iconbox_title cs_fs_24 cs_semibold">Teléfono</h3>
              <p class="mb-0">
                <a href="tel:+123456789">+123 456 789</a><br>
                <a href="tel:+987654321">+987 654 321</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_60"></div>
    </section>
    <!-- End Contact Info Section -->

    <!-- Start Contact Form Section -->
    <section>
      <div class="container">
        <div class="row cs_gap_y_50">
          <div class="col-lg-6">
            <div class="cs_section_heading cs_style_1">
              <h2 class="cs_fs_48 cs_semibold cs_mb_25 wow fadeInDown">Envíanos un mensaje</h2>
              <p class="mb-0">Complete el formulario y nos pondremos en contacto con usted lo antes posible.</p>
            </div>
            <div class="cs_height_40 cs_height_lg_30"></div>
            <form @submit.prevent="handleSubmit" class="cs_contact_form">
              <div class="row cs_gap_y_24">
                <div class="col-lg-6">
                  <input 
                    v-model="form.nombre" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Nombre Completo *"
                    required
                  >
                </div>
                <div class="col-lg-6">
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="cs_form_field" 
                    placeholder="Email *"
                    required
                  >
                </div>
                <div class="col-lg-6">
                  <input 
                    v-model="form.telefono" 
                    type="tel" 
                    class="cs_form_field" 
                    placeholder="Teléfono *"
                    required
                  >
                </div>
                <div class="col-lg-6">
                  <input 
                    v-model="form.asunto" 
                    type="text" 
                    class="cs_form_field" 
                    placeholder="Asunto"
                  >
                </div>
                <div class="col-lg-12">
                  <textarea 
                    v-model="form.mensaje" 
                    class="cs_form_field" 
                    placeholder="Mensaje *" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="col-lg-12">
                  <button 
                    type="submit" 
                    class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7"
                    :disabled="isSubmitting"
                  >
                    <span class="cs_btn_text">{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
                    <span class="cs_btn_icon"><i class="fa-solid fa-paper-plane"></i></span>
                  </button>
                </div>
              </div>
            </form>
            <div v-if="submitMessage" class="cs_mt_30" :class="submitSuccess ? 'text-success' : 'text-danger'">
              {{ submitMessage }}
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cs_map cs_radius_15 overflow-hidden">
              <!-- Aquí se puede integrar un mapa de Google Maps o similar -->
              <div style="height: 500px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                <p>Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Contact Form Section -->
  </div>
</template>

<script setup>
const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Aquí se implementaría la lógica de envío del formulario
    // Por ejemplo, una llamada a una API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
    
    submitMessage.value = 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.'
    submitSuccess.value = true
    
    // Limpiar formulario
    form.value = {
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    }
  } catch (error) {
    submitMessage.value = 'Error al enviar el mensaje. Por favor, intente nuevamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contacto - Formulario de Contacto',
  meta: [
    { name: 'description', content: 'Contáctenos para más información sobre nuestras propiedades y servicios inmobiliarios.' }
  ]
})
</script>
