<template>
  <div class="privacy-page">
    <!-- Page Header -->
    <PageHeader 
      title="Política de Privacidad" 
      subtitle="Conoce cómo protegemos y manejamos tu información personal"
      breadcrumb="Inicio / Política de Privacidad"
    />
    
    <!-- Privacy Content -->
    <section class="privacy-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="content-wrapper">
              <div class="last-updated mb-4">
                <small class="text-muted">
                  <i class="fas fa-calendar me-2"></i>
                  Última actualización: {{ lastUpdated }}
                </small>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>1. Información que Recopilamos</h2>
                <p>
                  En RentUP recopilamos diferentes tipos de información para brindarte 
                  el mejor servicio posible:
                </p>
                
                <h3>1.1 Información Personal</h3>
                <ul>
                  <li>Nombre completo y datos de contacto</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección postal</li>
                  <li>Información de preferencias inmobiliarias</li>
                </ul>
                
                <h3>1.2 Información de Navegación</h3>
                <ul>
                  <li>Dirección IP y datos de ubicación</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Fuente de referencia a nuestro sitio</li>
                </ul>
                
                <h3>1.3 Cookies y Tecnologías Similares</h3>
                <p>
                  Utilizamos cookies para mejorar tu experiencia de navegación, 
                  personalizar contenido y analizar el tráfico del sitio.
                </p>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>2. Cómo Utilizamos tu Información</h2>
                <p>La información recopilada la utilizamos para:</p>
                <ul>
                  <li>Procesar y responder a tus consultas</li>
                  <li>Proporcionar servicios inmobiliarios personalizados</li>
                  <li>Enviar comunicaciones relevantes sobre propiedades</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir fraude y garantizar la seguridad</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>3. Compartir Información</h2>
                <p>
                  No vendemos ni alquilamos tu información personal a terceros. 
                  Podemos compartir información en las siguientes circunstancias:
                </p>
                <ul>
                  <li>Con agentes inmobiliarios para facilitar transacciones</li>
                  <li>Con proveedores de servicios que nos ayudan a operar</li>
                  <li>Cuando sea requerido por ley o autoridades competentes</li>
                  <li>Para proteger nuestros derechos legales o los de terceros</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>4. Seguridad de los Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizacionales 
                  para proteger tu información:
                </p>
                <ul>
                  <li>Encriptación SSL para todas las transmisiones de datos</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo continuo de sistemas de seguridad</li>
                  <li>Capacitación regular del personal en protección de datos</li>
                  <li>Copias de seguridad y planes de recuperación</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>5. Tus Derechos</h2>
                <p>Como usuario, tienes los siguientes derechos:</p>
                <ul>
                  <li><strong>Acceso:</strong> Solicitar una copia de tu información personal</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
                  <li><strong>Restricción:</strong> Limitar el procesamiento en ciertas circunstancias</li>
                </ul>
                
                <div class="alert alert-info mt-3">
                  <h5><i class="fas fa-info-circle me-2"></i>Ejercer tus Derechos</h5>
                  <p class="mb-0">
                    Para ejercer cualquiera de estos derechos, contáctanos en 
                    <a href="mailto:privacidad@rentup.com">privacidad@rentup.com</a> 
                    o a través de nuestro formulario de contacto.
                  </p>
                </div>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>6. Retención de Datos</h2>
                <p>
                  Conservamos tu información personal durante el tiempo necesario 
                  para cumplir con los fines para los que fue recopilada:
                </p>
                <ul>
                  <li>Datos de contacto: Mientras mantengas una cuenta activa</li>
                  <li>Historial de transacciones: 7 años por requisitos fiscales</li>
                  <li>Datos de navegación: 24 meses máximo</li>
                  <li>Cookies: Según configuración del navegador</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>7. Cookies y Tecnologías de Seguimiento</h2>
                <p>Utilizamos diferentes tipos de cookies:</p>
                
                <h3>7.1 Cookies Esenciales</h3>
                <p>Necesarias para el funcionamiento básico del sitio web.</p>
                
                <h3>7.2 Cookies de Rendimiento</h3>
                <p>Nos ayudan a entender cómo interactúas con nuestro sitio.</p>
                
                <h3>7.3 Cookies de Marketing</h3>
                <p>Utilizadas para mostrar anuncios relevantes y medir campañas.</p>
                
                <div class="cookie-controls mt-3">
                  <button class="btn btn-outline-primary me-2" @click="openCookieSettings">
                    <i class="fas fa-cog me-2"></i>
                    Configurar Cookies
                  </button>
                </div>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>8. Transferencias Internacionales</h2>
                <p>
                  Algunos de nuestros proveedores de servicios pueden estar ubicados 
                  fuera de México. En estos casos, nos aseguramos de que:
                </p>
                <ul>
                  <li>Se implementen salvaguardas adecuadas</li>
                  <li>Se cumplan estándares internacionales de protección</li>
                  <li>Se obtenga tu consentimiento cuando sea requerido</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>9. Menores de Edad</h2>
                <p>
                  Nuestros servicios están dirigidos a personas mayores de 18 años. 
                  No recopilamos intencionalmente información de menores de edad. 
                  Si descubrimos que hemos recopilado información de un menor, 
                  la eliminaremos inmediatamente.
                </p>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>10. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta política de privacidad ocasionalmente. 
                  Te notificaremos sobre cambios significativos a través de:
                </p>
                <ul>
                  <li>Notificación por correo electrónico</li>
                  <li>Aviso destacado en nuestro sitio web</li>
                  <li>Actualización de la fecha de "última modificación"</li>
                </ul>
              </div>
              
              <div class="privacy-section mb-5">
                <h2>11. Contacto</h2>
                <p>
                  Si tienes preguntas sobre esta política de privacidad o sobre 
                  cómo manejamos tu información personal, puedes contactarnos:
                </p>
                
                <div class="contact-info">
                  <div class="row">
                    <div class="col-md-6">
                      <h4>Datos de Contacto</h4>
                      <p>
                        <strong>Email:</strong> 
                        <a href="mailto:privacidad@rentup.com">privacidad@rentup.com</a><br>
                        <strong>Teléfono:</strong> +52 55 1234-5678<br>
                        <strong>Dirección:</strong><br>
                        Av. Reforma 123, Piso 15<br>
                        Col. Centro, Ciudad de México<br>
                        C.P. 06040
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h4>Oficial de Protección de Datos</h4>
                      <p>
                        <strong>Email:</strong> 
                        <a href="mailto:dpo@rentup.com">dpo@rentup.com</a><br>
                        <strong>Horario de Atención:</strong><br>
                        Lunes a Viernes: 9:00 - 18:00 hrs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="quick-actions bg-light p-4 rounded">
                <h4 class="mb-3">Acciones Rápidas</h4>
                <div class="row">
                  <div class="col-md-4 mb-2">
                    <button class="btn btn-outline-primary w-100" @click="requestDataExport">
                      <i class="fas fa-download me-2"></i>
                      Descargar mis Datos
                    </button>
                  </div>
                  <div class="col-md-4 mb-2">
                    <button class="btn btn-outline-warning w-100" @click="requestDataDeletion">
                      <i class="fas fa-trash me-2"></i>
                      Eliminar mi Cuenta
                    </button>
                  </div>
                  <div class="col-md-4 mb-2">
                    <NuxtLink to="/site/contacto" class="btn btn-outline-info w-100">
                      <i class="fas fa-question-circle me-2"></i>
                      Hacer Consulta
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Meta información
useHead({
  title: 'Política de Privacidad - RentUP',
  meta: [
    { name: 'description', content: 'Conoce cómo RentUP protege y maneja tu información personal. Nuestra política de privacidad detalla tus derechos y nuestras responsabilidades.' },
    { name: 'keywords', content: 'política de privacidad, protección de datos, derechos del usuario, cookies, GDPR' },
    { property: 'og:title', content: 'Política de Privacidad - RentUP' },
    { property: 'og:description', content: 'Información sobre cómo protegemos tu privacidad y manejamos tus datos personales' }
  ]
})

// Estado reactivo
const lastUpdated = ref('15 de enero de 2024')

// Métodos
const openCookieSettings = () => {
  // Abrir modal de configuración de cookies
  console.log('Opening cookie settings modal')
}

const requestDataExport = () => {
  // Solicitar exportación de datos
  console.log('Requesting data export')
  // Aquí iría la lógica para generar y enviar los datos del usuario
}

const requestDataDeletion = () => {
  // Solicitar eliminación de cuenta
  if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
    console.log('Requesting account deletion')
    // Aquí iría la lógica para iniciar el proceso de eliminación
  }
}

// JSON-LD para SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Privacidad',
  description: 'Política de privacidad de RentUP Portal Inmobiliario',
  url: 'https://rentup.com/privacidad',
  dateModified: '2024-01-15',
  publisher: {
    '@type': 'Organization',
    name: 'RentUP'
  }
})
</script>

<style scoped>
.privacy-page {
  padding-top: 0;
}

.content-wrapper {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.last-updated {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1rem;
}

.privacy-section h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 2px solid #27ae60;
  padding-bottom: 0.5rem;
}

.privacy-section h3 {
  color: #34495e;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
}

.privacy-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #555;
}

.privacy-section ul {
  margin-bottom: 1rem;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  color: #555;
}

.cookie-controls .btn {
  border-radius: 25px;
}

.contact-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.contact-info h4 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 0;
  font-size: 0.95rem;
}

.contact-info a {
  color: #27ae60;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.quick-actions h4 {
  color: #2c3e50;
}

.quick-actions .btn {
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
}

.alert-info {
  border-left: 4px solid #17a2b8;
}

.alert-info h5 {
  color: #0c5460;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.3rem;
  }
  
  .privacy-section h3 {
    font-size: 1.1rem;
  }
  
  .quick-actions .col-md-4 {
    margin-bottom: 0.5rem;
  }
}
</style>