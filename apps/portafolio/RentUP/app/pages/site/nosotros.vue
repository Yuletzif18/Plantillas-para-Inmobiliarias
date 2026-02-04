<template>
  <div class="about-page">
    <!-- Page Header -->
    <PageHeader 
      title="Nosotros" 
      subtitle="Conoce más sobre RentUP y nuestro compromiso contigo"
      breadcrumb="Inicio / Nosotros"
    />
    
    <!-- Company Story -->
    <section class="company-story py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="story-content">
              <h2 class="section-title">Nuestra Historia</h2>
              <p class="lead">
                Desde 2012, RentUP ha sido líder en el mercado inmobiliario, 
                conectando a familias con sus hogares ideales.
              </p>
              <p>
                Fundada con la visión de revolucionar la experiencia inmobiliaria, 
                nuestra empresa ha crecido hasta convertirse en la plataforma de 
                confianza para miles de clientes en todo el país.
              </p>
              <p>
                Nos enorgullece ofrecer un servicio personalizado, tecnología 
                innovadora y un equipo de expertos comprometidos con tu éxito.
              </p>
              <div class="story-stats mt-4">
                <div class="row">
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h3 class="stat-number">{{ stats.yearsExperience }}+</h3>
                      <p class="stat-label">Años de Experiencia</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h3 class="stat-number">{{ stats.propertiesSold }}k+</h3>
                      <p class="stat-label">Propiedades Vendidas</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h3 class="stat-number">{{ stats.happyClients }}k+</h3>
                      <p class="stat-label">Clientes Satisfechos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="story-image">
              <img 
                src="/img/about/company-story.jpg" 
                alt="Nuestra Historia"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mission & Vision -->
    <section class="mission-vision bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="mission-card h-100">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-5">
                  <div class="icon-wrapper mb-4">
                    <i class="fas fa-bullseye fa-3x text-primary"></i>
                  </div>
                  <h3 class="card-title">Nuestra Misión</h3>
                  <p class="card-text">
                    Facilitar el proceso de búsqueda, compra y venta de inmuebles 
                    a través de tecnología innovadora y un servicio excepcional, 
                    ayudando a las personas a encontrar el hogar de sus sueños.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="vision-card h-100">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center p-5">
                  <div class="icon-wrapper mb-4">
                    <i class="fas fa-eye fa-3x text-primary"></i>
                  </div>
                  <h3 class="card-title">Nuestra Visión</h3>
                  <p class="card-text">
                    Ser la plataforma inmobiliaria líder a nivel nacional, 
                    reconocida por nuestra innovación, transparencia y 
                    compromiso con la satisfacción del cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values -->
    <section class="values py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title">Nuestros Valores</h2>
            <p class="section-subtitle">
              Los principios que guían cada una de nuestras acciones
            </p>
          </div>
        </div>
        <div class="row">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="value-item text-center">
              <div class="value-icon mb-3">
                <i :class="[value.icon, 'fa-2x', 'text-primary']"></i>
              </div>
              <h4 class="value-title">{{ value.title }}</h4>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="team-section bg-light py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title">Nuestro Equipo</h2>
            <p class="section-subtitle">
              Conoce a los profesionales que hacen posible tu experiencia inmobiliaria
            </p>
          </div>
        </div>
        <div class="row">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="index"
            class="col-lg-3 col-md-6 mb-4"
          >
            <div class="team-card">
              <div class="card border-0 shadow-sm">
                <div class="team-image text-center p-4">
                  <div class="team-avatar-initials-large mb-3">
                    {{ getInitials(member.name) }}
                  </div>
                  <div class="social-links">
                    <a 
                      v-for="(social, socialIndex) in member.social" 
                      :key="socialIndex"
                      :href="social.url" 
                      class="social-link me-2"
                      target="_blank"
                    >
                      <i :class="social.icon"></i>
                    </a>
                  </div>
                </div>
                <div class="card-body text-center">
                  <h5 class="member-name">{{ member.name }}</h5>
                  <p class="member-role text-muted">{{ member.role }}</p>
                  <p class="member-bio">{{ member.bio }}</p>
                  <div class="member-contact">
                    <small class="text-muted">
                      <i class="fas fa-envelope me-1"></i>
                      {{ member.email }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Awards & Recognition -->
    <section class="awards py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title">Reconocimientos</h2>
            <p class="section-subtitle">
              Orgullosos de los logros alcanzados a lo largo de los años
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div 
            v-for="(award, index) in awards" 
            :key="index"
            class="col-lg-3 col-md-4 col-6 mb-4"
          >
            <div class="award-item text-center">
              <div class="award-logo mb-3">
                <img 
                  :src="award.logo" 
                  :alt="award.name"
                  class="img-fluid"
                />
              </div>
              <h6 class="award-name">{{ award.name }}</h6>
              <small class="award-year text-muted">{{ award.year }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section bg-primary text-white py-5">
      <div class="container text-center">
        <h3 class="mb-3">¿Listo para trabajar con nosotros?</h3>
        <p class="mb-4">
          Únete a miles de clientes satisfechos y encuentra tu próximo hogar con RentUP
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/site/contacto" class="btn btn-light btn-lg me-3">
            Contactanos
          </NuxtLink>
          <NuxtLink to="/site/inmuebles" class="btn btn-outline-light btn-lg">
            Ver Propiedades
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Meta información
useHead({
  title: 'Nosotros - RentUP Portal Inmobiliario',
  meta: [
    { name: 'description', content: 'Conoce la historia, misión y equipo de RentUP. Somos líderes en el mercado inmobiliario con más de 10 años de experiencia.' },
    { name: 'keywords', content: 'sobre nosotros, RentUP, inmobiliaria, equipo, historia, misión, visión' },
    { property: 'og:title', content: 'Sobre Nosotros - RentUP' },
    { property: 'og:description', content: 'Descubre quiénes somos y por qué somos la mejor opción para tus necesidades inmobiliarias' }
  ]
})

// Estado reactivo
const stats = ref({
  yearsExperience: 12,
  propertiesSold: 15,
  happyClients: 8
})

const values = ref([
  {
    icon: 'fas fa-handshake',
    title: 'Confianza',
    description: 'Construimos relaciones duraderas basadas en la transparencia y honestidad en cada transacción.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Innovación',
    description: 'Utilizamos la última tecnología para mejorar continuamente la experiencia de nuestros clientes.'
  },
  {
    icon: 'fas fa-award',
    title: 'Excelencia',
    description: 'Nos comprometemos a superar las expectativas en cada proyecto que emprendemos.'
  },
  {
    icon: 'fas fa-users',
    title: 'Trabajo en Equipo',
    description: 'Colaboramos estrechamente para lograr los mejores resultados para nuestros clientes.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Pasión',
    description: 'Amamos lo que hacemos y eso se refleja en la dedicación que ponemos en cada detalle.'
  },
  {
    icon: 'fas fa-leaf',
    title: 'Responsabilidad',
    description: 'Promovemos prácticas sostenibles y responsables en el desarrollo inmobiliario.'
  }
])

const teamMembers = ref([
  {
    name: 'Carlos Mendoza',
    role: 'Director General',
    bio: 'Líder visionario con más de 15 años en el sector inmobiliario.',
    email: 'carlos.mendoza@rentup.com',
    image: '/img/team/carlos-mendoza.jpg',
    social: [
      { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/carlosmendoza' },
      { icon: 'fab fa-twitter', url: 'https://twitter.com/carlosmendoza' }
    ]
  },
  {
    name: 'Ana García',
    role: 'Directora de Ventas',
    bio: 'Experta en ventas inmobiliarias con un enfoque centrado en el cliente.',
    email: 'ana.garcia@rentup.com',
    image: '/img/team/ana-garcia.jpg',
    social: [
      { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/anagarcia' },
      { icon: 'fab fa-instagram', url: 'https://instagram.com/anagarcia' }
    ]
  },
  {
    name: 'Miguel Rodríguez',
    role: 'Director de Marketing',
    bio: 'Especialista en marketing digital y estrategias de comunicación.',
    email: 'miguel.rodriguez@rentup.com',
    image: '/img/team/miguel-rodriguez.jpg',
    social: [
      { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/miguelrodriguez' },
      { icon: 'fab fa-facebook', url: 'https://facebook.com/miguelrodriguez' }
    ]
  },
  {
    name: 'Laura Martínez',
    role: 'Directora de Tecnología',
    bio: 'Ingeniera de software enfocada en innovación y desarrollo tecnológico.',
    email: 'laura.martinez@rentup.com',
    image: '/img/team/laura-martinez.jpg',
    social: [
      { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/lauramartinez' },
      { icon: 'fab fa-github', url: 'https://github.com/lauramartinez' }
    ]
  }
])

const awards = ref([
  {
    name: 'Mejor Inmobiliaria 2023',
    year: '2023',
    logo: '/img/awards/award-1.png'
  },
  {
    name: 'Excelencia en Servicio',
    year: '2022',
    logo: '/img/awards/award-2.png'
  },
  {
    name: 'Innovación Tecnológica',
    year: '2021',
    logo: '/img/awards/award-3.png'
  },
  {
    name: 'Empresa del Año',
    year: '2020',
    logo: '/img/awards/award-4.png'
  }
])

// Función para obtener iniciales del nombre
const getInitials = (name) => {
  if (!name) return '??'
  const names = name.split(' ')
  if (names.length >= 2) {
    return `${names[0][0]}${names[1][0]}`.toUpperCase()
  }
  return names[0].substring(0, 2).toUpperCase()
}

// JSON-LD para SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'RentUP',
        description: 'Portal inmobiliario líder especializado en venta y alquiler de propiedades',
        url: 'https://rentup.com',
        logo: 'https://rentup.com/img/logo.png',
        foundingDate: '2012',
        numberOfEmployees: '50-100',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Reforma 123',
          addressLocality: 'Ciudad de México',
          addressCountry: 'México'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+52-55-1234-5678',
          contactType: 'customer service'
        },
        sameAs: [
          'https://facebook.com/rentup',
          'https://twitter.com/rentup',
          'https://instagram.com/rentup',
          'https://linkedin.com/company/rentup'
        ]
      })
    }
  ]
})
</script>

<style scoped>
.about-page {
  padding-top: 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
}

.story-content {
  padding-right: 2rem;
}

.story-content .lead {
  font-size: 1.25rem;
  color: #27ae60;
  margin-bottom: 1.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.mission-vision .card {
  transition: transform 0.3s ease;
}

.mission-vision .card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.value-item {
  padding: 2rem 1rem;
}

.value-icon {
  width: 60px;
  height: 60px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
}

.team-card {
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-image {
  position: relative;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(39, 174, 96, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.team-card:hover .team-image img {
  transform: scale(1.1);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.member-role {
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.award-item {
  padding: 1rem;
}

.award-logo img {
  max-height: 60px;
  width: auto;
}

.award-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.cta-section {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
}

.cta-buttons .btn {
  min-width: 150px;
}

.team-avatar-initials-large {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 auto;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .story-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-buttons .btn {
    display: block;
    margin: 0.5rem 0;
  }
}
</style>