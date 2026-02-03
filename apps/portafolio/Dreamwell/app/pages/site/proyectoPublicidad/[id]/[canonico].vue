<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7">Política de Publicidad del Proyecto</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item"><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
            <li class="breadcrumb-item active">Publicidad</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cs_publicity_content">
              <h2 class="cs_fs_36 cs_semibold cs_mb_30">Política de Publicidad - {{ projectName }}</h2>
              
              <div class="cs_publicity_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">1. Imágenes y Representaciones</h3>
                <p>Las imágenes mostradas son representaciones artísticas y pueden diferir del producto final.</p>
              </div>

              <div class="cs_publicity_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">2. Especificaciones</h3>
                <p>Las especificaciones están sujetas a cambios sin previo aviso de acuerdo con las normas técnicas.</p>
              </div>

              <div class="cs_publicity_section">
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
  title: `Política de Publicidad - ${projectName.value}`,
  meta: [{ name: 'description', content: 'Política de publicidad del proyecto inmobiliario.' }]
})
</script>
