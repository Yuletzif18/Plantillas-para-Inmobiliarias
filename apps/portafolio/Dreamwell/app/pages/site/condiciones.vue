<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7">Términos y Condiciones</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Condiciones</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cs_terms_content">
              <h2 class="cs_fs_36 cs_semibold cs_mb_30">Términos y Condiciones de Uso</h2>
              
              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">1. Aceptación de Términos</h3>
                <p>
                  Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y
                  condiciones de uso. Si no está de acuerdo con alguno de estos términos, no utilice
                  este sitio.
                </p>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">2. Uso del Sitio</h3>
                <p>
                  Este sitio está diseñado para proporcionar información sobre propiedades inmobiliarias.
                  Usted se compromete a:
                </p>
                <ul>
                  <li>Utilizar el sitio de manera legal y apropiada</li>
                  <li>No intentar obtener acceso no autorizado</li>
                  <li>No transmitir material ilegal o dañino</li>
                  <li>Proporcionar información veraz y actualizada</li>
                </ul>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">3. Propiedad Intelectual</h3>
                <p>
                  Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos y software,
                  está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">4. Información de Propiedades</h3>
                <p>
                  La información sobre propiedades se proporciona de buena fe, pero no garantizamos
                  su exactitud absoluta. Los precios y disponibilidad están sujetos a cambios sin previo aviso.
                </p>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">5. Limitación de Responsabilidad</h3>
                <p>
                  No seremos responsables por daños directos, indirectos, incidentales o consecuentes
                  que resulten del uso o la imposibilidad de uso de este sitio.
                </p>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">6. Enlaces a Terceros</h3>
                <p>
                  Este sitio puede contener enlaces a sitios web de terceros. No somos responsables
                  del contenido o las prácticas de privacidad de estos sitios.
                </p>
              </div>

              <div class="cs_terms_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">7. Modificaciones</h3>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las
                  modificaciones entrarán en vigor inmediatamente después de su publicación.
                </p>
              </div>

              <div class="cs_terms_section">
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
  title: 'Términos y Condiciones',
  meta: [
    { name: 'description', content: 'Términos y condiciones de uso del sitio web.' }
  ]
})
</script>
