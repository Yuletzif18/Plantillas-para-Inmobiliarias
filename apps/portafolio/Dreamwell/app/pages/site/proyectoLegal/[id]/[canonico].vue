<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7">Declaración Legal del Proyecto</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item"><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
            <li class="breadcrumb-item active">Legal</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cs_legal_content">
              <h2 class="cs_fs_36 cs_semibold cs_mb_30">Declaración Legal - {{ projectName }}</h2>
              
              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">1. Información del Proyecto</h3>
                <p>Nombre del Proyecto: {{ projectName }}</p>
                <p>Código del Proyecto: {{ $route.params.id }}</p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">2. Constructor y Desarrollador</h3>
                <p>Información del constructor y licencias de construcción.</p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">3. Características Legales</h3>
                <p>Especificaciones técnicas y legales del proyecto.</p>
              </div>

              <div class="cs_legal_section">
                <NuxtLink :to="`/site/proyecto/${$route.params.id}/${$route.params.canonico}`" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7">
                  <span class="cs_btn_icon"><i class="fa-solid fa-arrow-left"></i></span>
                  <span class="cs_btn_text">Volver al Proyecto</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const projectName = ref('Proyecto')

useHead({
  title: `Declaración Legal - ${projectName.value}`,
  meta: [{ name: 'description', content: 'Información legal del proyecto inmobiliario.' }]
})
</script>
