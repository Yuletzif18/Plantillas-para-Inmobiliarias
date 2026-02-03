<template>
  <div>
    <section class="cs_page_heading cs_style_1">
      <div class="container">
        <div class="cs_page_heading_content_wrapper cs_heading_bg cs_bg_filed cs_radius_20" data-src="/img/page_header_1.jpg">
          <h1 class="cs_fs_48 cs_semibold cs_mb_7">Política de Privacidad</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
            <li class="breadcrumb-item active">Privacidad</li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="cs_height_120 cs_height_lg_80"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cs_privacy_content">
              <h2 class="cs_fs_36 cs_semibold cs_mb_30">Política de Privacidad y Protección de Datos</h2>
              
              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">1. Recopilación de Información</h3>
                <p>
                  Recopilamos información personal que usted nos proporciona voluntariamente cuando:
                </p>
                <ul>
                  <li>Se registra en nuestro sitio web</li>
                  <li>Solicita información sobre propiedades</li>
                  <li>Se suscribe a nuestro boletín informativo</li>
                  <li>Nos contacta a través de formularios</li>
                </ul>
              </div>

              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">2. Uso de la Información</h3>
                <p>
                  Utilizamos la información recopilada para:
                </p>
                <ul>
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Responder a sus consultas y solicitudes</li>
                  <li>Enviar información sobre propiedades de su interés</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">3. Protección de Datos</h3>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
                  sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </div>

              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">4. Derechos del Usuario</h3>
                <p>
                  Usted tiene derecho a:
                </p>
                <ul>
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                </ul>
              </div>

              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">5. Cookies</h3>
                <p>
                  Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar
                  su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div class="cs_privacy_section cs_mb_40">
                <h3 class="cs_fs_24 cs_semibold cs_mb_20">6. Contacto</h3>
                <p>
                  Para ejercer sus derechos o si tiene preguntas sobre esta política, contáctenos en:
                </p>
                <p>Email: privacidad@inmobiliaria.com</p>
              </div>

              <div class="cs_privacy_section">
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
  title: 'Política de Privacidad',
  meta: [
    { name: 'description', content: 'Política de privacidad y protección de datos personales.' }
  ]
})
</script>
