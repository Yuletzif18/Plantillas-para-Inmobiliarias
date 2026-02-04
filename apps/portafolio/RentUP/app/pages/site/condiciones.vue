<template>
  <div class="condiciones-page">
    <!-- Page Header -->
    <PageHeader 
      title="Condiciones Legales" 
      subtitle="Términos y condiciones de uso de RentUP"
      breadcrumb="Inicio / Condiciones"
    />
    
    <!-- Condiciones Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="condiciones-content">
              
              <!-- Introducción -->
              <div class="mb-5">
                <h2 class="section-title">1. Introducción</h2>
                <p>
                  Bienvenido a RentUP. Estos términos y condiciones rigen el uso de nuestro sitio web 
                  y servicios. Al acceder y utilizar este sitio, usted acepta cumplir con estos términos.
                </p>
              </div>

              <!-- Definiciones -->
              <div class="mb-5">
                <h2 class="section-title">2. Definiciones</h2>
                <ul class="terms-list">
                  <li><strong>"RentUP":</strong> Se refiere a nuestra empresa y plataforma inmobiliaria.</li>
                  <li><strong>"Usuario":</strong> Cualquier persona que acceda a nuestros servicios.</li>
                  <li><strong>"Propiedad":</strong> Cualquier inmueble listado en nuestra plataforma.</li>
                  <li><strong>"Servicios":</strong> Todos los servicios ofrecidos a través de RentUP.</li>
                </ul>
              </div>

              <!-- Uso del Sitio -->
              <div class="mb-5">
                <h2 class="section-title">3. Uso del Sitio Web</h2>
                <h4>3.1 Uso Permitido</h4>
                <p>Usted puede utilizar nuestro sitio web para:</p>
                <ul class="terms-list">
                  <li>Buscar propiedades inmobiliarias</li>
                  <li>Contactar agentes inmobiliarios</li>
                  <li>Solicitar información sobre propiedades</li>
                  <li>Acceder a contenido educativo sobre bienes raíces</li>
                </ul>

                <h4>3.2 Uso Prohibido</h4>
                <p>Está prohibido:</p>
                <ul class="terms-list">
                  <li>Usar el sitio para actividades ilegales</li>
                  <li>Publicar contenido falso o engañoso</li>
                  <li>Interferir con el funcionamiento del sitio</li>
                  <li>Copiar o reproducir contenido sin autorización</li>
                </ul>
              </div>

              <!-- Registro y Cuentas -->
              <div class="mb-5">
                <h2 class="section-title">4. Registro y Cuentas de Usuario</h2>
                <p>
                  Para acceder a ciertas funciones, puede necesitar crear una cuenta. Usted es responsable de:
                </p>
                <ul class="terms-list">
                  <li>Mantener la confidencialidad de su contraseña</li>
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Notificar inmediatamente cualquier uso no autorizado</li>
                  <li>Cumplir con estos términos en todo momento</li>
                </ul>
              </div>

              <!-- Contenido y Propiedades -->
              <div class="mb-5">
                <h2 class="section-title">5. Contenido y Listados de Propiedades</h2>
                <h4>5.1 Exactitud de la Información</h4>
                <p>
                  Nos esforzamos por mantener información precisa, pero no garantizamos la exactitud, 
                  integridad o actualidad de todos los listados de propiedades.
                </p>

                <h4>5.2 Responsabilidad del Usuario</h4>
                <p>
                  Los usuarios que publican propiedades son responsables de la veracidad y legalidad 
                  de la información proporcionada.
                </p>
              </div>

              <!-- Servicios Profesionales -->
              <div class="mb-5">
                <h2 class="section-title">6. Servicios Profesionales</h2>
                <p>
                  RentUP actúa como intermediario entre compradores, vendedores y agentes inmobiliarios. 
                  No somos parte de ninguna transacción inmobiliaria y no garantizamos resultados específicos.
                </p>
              </div>

              <!-- Limitación de Responsabilidad -->
              <div class="mb-5">
                <h2 class="section-title">7. Limitación de Responsabilidad</h2>
                <p>
                  RentUP no será responsable por daños directos, indirectos, incidentales o 
                  consecuenciales que resulten del uso de nuestros servicios, incluyendo pero no 
                  limitado a pérdidas financieras o transacciones fallidas.
                </p>
              </div>

              <!-- Propiedad Intelectual -->
              <div class="mb-5">
                <h2 class="section-title">8. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y software, 
                  está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
              </div>

              <!-- Modificaciones -->
              <div class="mb-5">
                <h2 class="section-title">9. Modificaciones de los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
                </p>
              </div>

              <!-- Contacto -->
              <div class="mb-5">
                <h2 class="section-title">10. Información de Contacto</h2>
                <p>
                  Si tiene preguntas sobre estos términos y condiciones, puede contactarnos:
                </p>
                <div class="contact-info">
                  <p><strong>Email:</strong> <a href="mailto:legal@RentUP.com">legal@RentUP.com</a></p>
                  <p><strong>Teléfono:</strong> +52 55 1234 5678</p>
                  <p><strong>Dirección:</strong> Av. Paseo de la Reforma 123, Ciudad de México</p>
                </div>
              </div>

              <!-- Fecha de Vigencia -->
              <div class="text-muted">
                <small>
                  <strong>Última actualización:</strong> {{ new Date().toLocaleDateString('es-MX', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) }}
                </small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta información
useHead({
  title: 'Condiciones Legales - RentUP',
  meta: [
    { name: 'description', content: 'Términos y condiciones de uso de RentUP. Conoce tus derechos y responsabilidades al utilizar nuestros servicios inmobiliarios.' },
    { name: 'keywords', content: 'condiciones, términos, legal, RentUP, inmobiliaria, derechos, responsabilidades' },
    { property: 'og:title', content: 'Condiciones Legales - RentUP' },
    { property: 'og:description', content: 'Términos y condiciones de uso de nuestros servicios inmobiliarios' }
  ]
})

// JSON-LD para SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Condiciones Legales - RentUP',
  description: 'Términos y condiciones de uso de RentUP Portal Inmobiliario',
  url: 'https://RentUP.com/condiciones',
  isPartOf: {
    '@type': 'WebSite',
    name: 'RentUP'
  }
})
</script>

<style scoped>
.condiciones-page {
  padding-top: 0;
}

.section-title {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #27ae60;
}

.terms-list {
  margin-left: 1rem;
}

.terms-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.contact-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-info a {
  color: #27ae60;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.25rem;
  }
  
  .terms-list {
    margin-left: 0.5rem;
  }
}
</style>