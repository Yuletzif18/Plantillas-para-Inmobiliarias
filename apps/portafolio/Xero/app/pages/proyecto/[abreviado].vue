<template>
  <div class="project-redirect">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="container text-center py-5">
        <div class="spinner-border text-primary mb-3" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <h4>Redirigiendo al proyecto...</h4>
        <p class="text-muted">Por favor espera un momento</p>
      </div>
    </div>
    
    <!-- Error State -->
    <div v-if="error && !loading" class="error-container">
      <div class="container text-center py-5">
        <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
        <h2>Proyecto no encontrado</h2>
        <p class="text-muted mb-4">
          El proyecto que buscas no existe o ha sido movido.
        </p>
        <div class="error-actions">
          <NuxtLink to="/site/proyectos" class="btn btn-primary me-3">
            Ver Todos los Proyectos
          </NuxtLink>
          <NuxtLink to="/site/index" class="btn btn-outline-primary">
            Ir al Inicio
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Fallback Content (should not normally be seen) -->
    <div v-if="!loading && !error" class="fallback-container">
      <div class="container text-center py-5">
        <i class="fas fa-building fa-3x text-primary mb-3"></i>
        <h3>Proyecto: {{ projectAbbreviation }}</h3>
        <p class="text-muted mb-4">
          Si no fuiste redirigido automáticamente, haz clic en el botón de abajo.
        </p>
        <button @click="manualRedirect" class="btn btn-primary">
          Ir al Proyecto
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Meta información dinámica
useHead({
  title: `Redirigiendo... - RentUP`,
  meta: [
    { name: 'description', content: 'Redirigiendo a la página del proyecto solicitado' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Estado reactivo
const loading = ref(true)
const error = ref(false)
const projectAbbreviation = ref('')

// Obtener la abreviación del proyecto desde los params
projectAbbreviation.value = route.params.abreviado

// Mapeo de abreviaciones a URLs completas de proyectos
const projectMappings = {
  'tb': { id: 1, canonical: 'torres-del-bosque' },
  'rsa': { id: 2, canonical: 'residencial-san-angel' },
  'vp': { id: 3, canonical: 'vista-polanco' },
  'cc': { id: 4, canonical: 'conjunto-condesa' },
  'pr': { id: 5, canonical: 'plaza-reforma' },
  'er': { id: 6, canonical: 'edificio-roma' },
  'td': { id: 7, canonical: 'torres-diamante' },
  'mv': { id: 8, canonical: 'monte-verde' },
  'pa': { id: 9, canonical: 'parque-alameda' },
  'lr': { id: 10, canonical: 'lomas-residencial' }
}

// Métodos
const redirectToProject = async () => {
  try {
    const abbreviation = projectAbbreviation.value.toLowerCase()
    
    // Buscar el mapeo del proyecto
    const projectMapping = projectMappings[abbreviation]
    
    if (projectMapping) {
      // Construir la URL completa del proyecto
      const projectUrl = `/site/proyecto/${projectMapping.id}/${projectMapping.canonical}`
      
      // Simular una pequeña carga para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirigir al proyecto
      await router.push(projectUrl)
    } else {
      // Si no se encuentra el mapeo, mostrar error
      error.value = true
    }
  } catch (err) {
    console.error('Error redirecting to project:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const manualRedirect = () => {
  const abbreviation = projectAbbreviation.value.toLowerCase()
  const projectMapping = projectMappings[abbreviation]
  
  if (projectMapping) {
    const projectUrl = `/site/proyecto/${projectMapping.id}/${projectMapping.canonical}`
    router.push(projectUrl)
  } else {
    router.push('/site/proyectos')
  }
}

// Función para registrar el redirect (para analytics)
const logRedirect = () => {
  // Aquí se podría registrar el redirect para análisis
  console.log(`Redirect: ${projectAbbreviation.value} -> ${projectMappings[projectAbbreviation.value.toLowerCase()]?.canonical}`)
  
  // Ejemplo de tracking con Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'project_redirect', {
      'project_abbreviation': projectAbbreviation.value,
      'project_id': projectMappings[projectAbbreviation.value.toLowerCase()]?.id
    })
  }
}

// Lifecycle
onMounted(() => {
  // Validar que tenemos una abreviación
  if (!projectAbbreviation.value) {
    error.value = true
    loading.value = false
    return
  }
  
  // Registrar el redirect
  logRedirect()
  
  // Ejecutar la redirección
  redirectToProject()
})

// Watch para cambios en la ruta (por si acaso)
watch(() => route.params.abreviado, (newAbbreviation) => {
  if (newAbbreviation) {
    projectAbbreviation.value = newAbbreviation
    loading.value = true
    error.value = false
    redirectToProject()
  }
})
</script>

<style scoped>
.project-redirect {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-container,
.error-container,
.fallback-container {
  width: 100%;
}

.loading-container .spinner-border {
  width: 3rem;
  height: 3rem;
}

.error-actions .btn {
  min-width: 180px;
}

.fallback-container {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  margin: 0 1rem;
}

@media (max-width: 768px) {
  .error-actions .btn {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
  }
  
  .error-actions .me-3 {
    margin-right: 0 !important;
  }
}

/* Animación de carga */
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.loading-container h4 {
  animation: pulse 1.5s infinite;
}
</style>