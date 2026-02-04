<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                v-model="loginForm.email"
                required
              >
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input 
                type="password" 
                class="form-control" 
                id="password" 
                v-model="loginForm.password"
                required
              >
            </div>
            <div class="mb-3 form-check">
              <input 
                type="checkbox" 
                class="form-check-input" 
                id="remember"
                v-model="loginForm.remember"
              >
              <label class="form-check-label" for="remember">
                Recordarme
              </label>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                {{ isLoading ? 'Iniciando...' : 'Iniciar Sesión' }}
              </button>
            </div>
          </form>
          
          <hr class="my-4">
          
          <div class="text-center">
            <p class="mb-2">¿No tienes cuenta?</p>
            <button class="btn btn-outline-primary" @click="showRegister = true">
              Registrarse
            </button>
          </div>
          
          <div class="text-center mt-3">
            <a href="#" class="text-decoration-none">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loginForm = reactive({
  email: '',
  password: '',
  remember: false
})

const isLoading = ref(false)
const showRegister = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', loginForm)
    
    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Cerrar modal en caso de éxito
    // En un caso real, manejarías el estado de autenticación
    const modal = document.getElementById('loginModal')
    const bootstrapModal = bootstrap.Modal.getInstance(modal)
    bootstrapModal?.hide()
    
    // Reset form
    Object.assign(loginForm, {
      email: '',
      password: '',
      remember: false
    })
    
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.modal-body {
  padding: 2rem;
}

.btn-primary {
  background-color: #27ae60;
  border-color: #27ae60;
}

.btn-primary:hover {
  background-color: #219a52;
  border-color: #219a52;
}

.btn-outline-primary {
  color: #27ae60;
  border-color: #27ae60;
}

.btn-outline-primary:hover {
  background-color: #27ae60;
  border-color: #27ae60;
}
</style>