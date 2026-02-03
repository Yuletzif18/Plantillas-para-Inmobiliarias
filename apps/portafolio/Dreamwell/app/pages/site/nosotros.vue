<template>
  <div>
    <!-- Start Page Header Section -->
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_type_2 cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7 wow fadeInLeft">Bienvenido a nuestra empresa</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Nosotros</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Header Section -->

    <!-- Start Our Mission Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_1 text-center">
          <h2 class="cs_fs_48 cs_semibold cs_mb_3 wow fadeInDown">Nuestra Misión</h2>
          <p class="mb-0">Brindamos las mejores soluciones inmobiliarias para nuestros clientes</p>
        </div>
        <div class="cs_height_80 cs_height_lg_50"></div>
        <div class="row cs_gap_y_40 align-items-center">
          <div class="col-lg-6 wow fadeInLeft">
            <div class="cs_mission_thumbnail position-relative">
              <img src="/img/about_img_2.jpg" alt="Sobre nosotros">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cs_mission_text">
              <h3 class="cs_fs_28 cs_semibold cs_body_font cs_mb_30 wow fadeInDown">
                Nuestra misión es proporcionar el hogar de tus sueños con las mejores facilidades posibles.
              </h3>
              <p class="cs_mb_20">
                Nos dedicamos a ofrecer servicios inmobiliarios de alta calidad, brindando asesoría personalizada 
                y acompañamiento en cada etapa del proceso de compra, venta o arriendo de propiedades.
              </p>
              <p class="mb-0">
                Trabajamos con profesionalismo, transparencia y compromiso para garantizar la satisfacción 
                de nuestros clientes, ayudándolos a tomar las mejores decisiones inmobiliarias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Our Mission Section -->

    <!-- Start Counter Section -->
    <div class="container">
      <div class="cs_counter_wrapper cs_light_gray_bg cs_radius_15 wow fadeInUp">
        <div class="cs_funfact cs_style_1 cs_center_column">
          <div class="cs_fs_48 cs_semibold cs_accent_color">
            <span class="odometer" data-count-to="500">500</span>+
          </div>
          <p class="mb-0">PROPIEDADES EN VENTA</p>
        </div>
        <div class="cs_funfact cs_style_1 cs_center_column">
          <div class="cs_fs_48 cs_semibold cs_accent_color">
            <span class="odometer" data-count-to="50">50</span>+
          </div>
          <p class="mb-0">PROPIEDADES EN ARRIENDO</p>
        </div>
        <div class="cs_funfact cs_style_1 cs_center_column">
          <div class="cs_fs_48 cs_semibold cs_accent_color">
            <span class="odometer" data-count-to="100">100</span>+
          </div>
          <p class="mb-0">PROPIEDADES VENDIDAS</p>
        </div>
        <div class="cs_funfact cs_style_1 cs_center_column">
          <div class="cs_fs_48 cs_semibold cs_accent_color">
            <span class="odometer" data-count-to="1000">1000</span>+
          </div>
          <p class="mb-0">CLIENTES SATISFECHOS</p>
        </div>
      </div>
    </div>
    <!-- End Counter Section -->

    <!-- Start Our Vision Section -->
    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_1 text-center">
          <h2 class="cs_fs_48 cs_semibold cs_mb_3 wow fadeInDown">Nuestra Visión</h2>
          <p class="mb-0">Ser líderes en el mercado inmobiliario</p>
        </div>
        <div class="cs_height_80 cs_height_lg_50"></div>
        <div class="row cs_gap_y_40 align-items-center">
          <div class="col-lg-6">
            <div class="cs_vission_text">
              <h3 class="cs_fs_28 cs_semibold cs_body_font cs_mb_30 wow fadeInUp">
                Nuestra visión es convertirnos en un proveedor de viviendas y propiedades estandarizadas con las mejores instalaciones.
              </h3>
              <p class="cs_mb_20">
                Aspiramos a ser reconocidos como la empresa inmobiliaria más confiable y profesional del mercado, 
                destacándonos por nuestra innovación, calidad de servicio y compromiso con nuestros clientes.
              </p>
              <p class="mb-0">
                Buscamos constantemente nuevas formas de mejorar nuestros servicios y adaptarnos a las necesidades 
                cambiantes del mercado inmobiliario, siempre manteniendo nuestros valores de integridad y excelencia.
              </p>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInRight">
            <div class="cs_vission_thumbnail cs_radius_15 position-relative">
              <img src="/img/hero-placeholder.svg" alt="Nuestra visión">
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Our Vision Section -->
  </div>
</template>

<script setup>
// Configuración SEO para la página
useHead({
  title: 'Nosotros - Información Corporativa',
  meta: [
    { name: 'description', content: 'Conoce más sobre nuestra empresa inmobiliaria, nuestra misión, visión y valores.' }
  ]
})
</script>
