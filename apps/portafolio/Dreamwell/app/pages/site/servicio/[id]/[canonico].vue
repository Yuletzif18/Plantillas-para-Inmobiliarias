<template>
  <div>
    <section>
      <div class="cs_height_50 cs_height_lg_50"></div>
      <div class="container">
        <ol class="breadcrumb cs_mb_37">
          <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
          <li class="breadcrumb-item"><NuxtLink to="/site/servicios">Servicios</NuxtLink></li>
          <li class="breadcrumb-item active">{{ service.nombre || 'Detalle del Servicio' }}</li>
        </ol>

        <div v-if="loading" class="text-center py-5">
          <p>Cargando información del servicio...</p>
        </div>

        <div v-else-if="!service.id" class="text-center py-5">
          <h2>Servicio no encontrado</h2>
          <NuxtLink to="/site/servicios" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 cs_mt_30">
            <span class="cs_btn_text">Ver todos los servicios</span>
          </NuxtLink>
        </div>

        <template v-else>
          <div class="row cs_gap_y_50">
            <div class="col-lg-8">
              <div class="cs_service_content">
                <h1 class="cs_fs_48 cs_semibold cs_mb_30">{{ service.nombre }}</h1>
                <div v-html="service.descripcion"></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cs_service_sidebar cs_white_bg cs_radius_15 cs_p_30">
                <h3 class="cs_fs_24 cs_semibold cs_mb_25">Solicitar este Servicio</h3>
                <form @submit.prevent="handleContactSubmit" class="cs_contact_form">
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.nombre" 
                      type="text" 
                      class="cs_form_field" 
                      placeholder="Nombre *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.email" 
                      type="email" 
                      class="cs_form_field" 
                      placeholder="Email *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.telefono" 
                      type="tel" 
                      class="cs_form_field" 
                      placeholder="Teléfono *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <textarea 
                      v-model="contactForm.mensaje" 
                      class="cs_form_field" 
                      placeholder="Mensaje" 
                      rows="4"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 w-100"
                    :disabled="isSubmitting"
                  >
                    <span class="cs_btn_text">{{ isSubmitting ? 'Enviando...' : 'Solicitar' }}</span>
                  </button>
                </form>
                <div v-if="submitMessage" class="cs_mt_20" :class="submitSuccess ? 'text-success' : 'text-danger'">
                  {{ submitMessage }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const loading = ref(true)
const service = ref({})
const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const loadService = async () => {
  loading.value = true
  try {
    // const response = await $fetch(`/api/servicios/${id}`)
    // service.value = response.data
    service.value = { id, nombre: 'Servicio', descripcion: '<p>Descripción del servicio.</p>' }
  } catch (error) {
    console.error('Error:', error)
    service.value = {}
  } finally {
    loading.value = false
  }
}

const handleContactSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Solicitud enviada exitosamente.'
    submitSuccess.value = true
    contactForm.value = { nombre: '', email: '', telefono: '', mensaje: '' }
  } catch (error) {
    submitMessage.value = 'Error al enviar la solicitud.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  loadService()
})

useHead({
  title: () => service.value.nombre ? `${service.value.nombre} - Servicio` : 'Servicio',
  meta: [{ name: 'description', content: () => service.value.descripcion || 'Detalle del servicio' }]
})
</script>
