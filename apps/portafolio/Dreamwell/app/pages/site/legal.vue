<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7">Declaración Legal</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
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
              <h2 class="cs_fs_36 cs_semibold cs_mb_30">Declaración Legal de la Empresa</h2>
              
              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">1. Información de la Empresa</h3>
                <p>Razón Social: [NOMBRE DE LA EMPRESA]</p>
                <p>NIT: [NÚMERO DE IDENTIFICACIÓN TRIBUTARIA]</p>
                <p>Dirección: [DIRECCIÓN COMPLETA]</p>
                <p>Teléfono: [NÚMERO DE TELÉFONO]</p>
                <p>Email: [CORREO ELECTRÓNICO]</p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">2. Objeto Social</h3>
                <p>
                  La empresa se dedica a la intermediación, asesoría y gestión de bienes inmuebles,
                  ofreciendo servicios de compra, venta, arriendo y administración de propiedades.
                </p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">3. Licencias y Autorizaciones</h3>
                <p>
                  La empresa cuenta con todas las licencias y autorizaciones requeridas por las
                  autoridades competentes para ejercer su actividad económica.
                </p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">4. Representación Legal</h3>
                <p>Representante Legal: [NOMBRE DEL REPRESENTANTE LEGAL]</p>
                <p>Cédula: [NÚMERO DE DOCUMENTO]</p>
              </div>

              <div class="cs_legal_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">5. Responsabilidad</h3>
                <p>
                  La empresa actúa como intermediaria en las transacciones inmobiliarias y no se hace
                  responsable por información proporcionada por terceros propietarios de los inmuebles.
                </p>
              </div>

              <div class="cs_legal_section">
                <p class="cs_fs_14 text-muted">
                  Última actualización: {{ new Date().toLocaleDateString('es-ES') }}
                </p>
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
useHead({
  title: 'Declaración Legal',
  meta: [
    { name: 'description', content: 'Información legal de la empresa inmobiliaria.' }
  ]
})
</script>
