# Guía de Estilos de Código - Proyecto Luminor

## 📌 Propósito

Esta guía establece estándares de código para mantener un proyecto profesional, legible y mantenible.

## 🎯 Principios Generales

1. **Legibilidad**: El código se lee más que se escribe
2. **Mantenibilidad**: Facilitar cambios futuros
3. **Consistencia**: Mismo estilo en todo el proyecto
4. **Documentación**: Comentarios claros y concisos
5. **Simplidad**: KISS - Keep It Simple, Stupid

## 📄 Convenciones de Nomenclatura

### Variables y Constantes

```javascript
// ✅ Correcto
const maxRetries = 3;
let currentPage = 1;

// ❌ Evitar
const max_retries = 3;
let current_page = 1;
```

### Componentes Vue

```javascript
// ✅ Correcto
// Navbar.vue, ContactForm.vue, PropertyCard.vue

// ❌ Evitar
// navbar.vue, contactForm.vue, property-card.vue
```

### Métodos y Funciones

```javascript
// ✅ Correcto
function handleSubmit() {}
const validateEmail = (email) => {}

// ❌ Evitar
function handle_submit() {}
const validate_email = (email) => {}
```

### Clases CSS

```css
/* ✅ Correcto */
.contact-form-section {}
.property-card__image {}

/* ❌ Evitar */
.contactFormSection {}
.propertyCardImage {}
```

## 🖼️ Estructura de Componentes Vue

### Orden de Elementos

```vue
<template>
  <!-- Estructura HTML semántica -->
</template>

<script setup>
// 1. Imports
import { ref, computed } from 'vue';

// 2. Props
const props = defineProps({
  title: String,
  items: Array,
});

// 3. Emits
const emit = defineEmits(['update']);

// 4. State
const isLoading = ref(false);
const formData = ref({});

// 5. Computed
const displayedItems = computed(() => {
  return props.items.filter((item) => item.active);
});

// 6. Methods
const handleSubmit = () => {};
const fetchData = async () => {};

// 7. Lifecycle
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
```

## 📝 Comentarios

### ✅ Comentarios Útiles

```javascript
// Usar validación estricta (===) para comparaciones
const isEqual = value === targetValue;

// Obtener datos de artículos de blog desde contenido local
const blogsData = [
  { id: 1, title: 'Article 1', date: '2024-01-01' },
];

// Transformar array a objeto indexado por ID para acceso O(1)
const indexedBlogs = blogs.reduce((acc, blog) => {
  acc[blog.id] = blog;
  return acc;
}, {});
```

### ❌ Comentarios a Evitar

```javascript
// NO: Obvio por el código
const name = user.name; // Obtener nombre del usuario

// NO: Información desactualizada
const age = 25; // La edad de Juan (cambió hace 2 años)

// NO: TODO/FIXME sin contexto
// TODO: Arreglar esto
// FIXME: Esto no funciona bien

// NO: Código comentado para "guardar"
// const oldMethod = () => { ... };
```

## 🎯 Reglas de Código

### Longitud de Línea

```javascript
// ✅ Máximo 100 caracteres
const user = getUserById(userId);

// ❌ Muy largo
const user = veryLongModuleNameThatExportsUserUtilities.getUserByIdFromDatabaseWithAllTheComplexLogic(userId);

// ✅ Solución: Dividir en líneas o refactorizar
const user = getUserById(userId);
```

### Funciones

```javascript
// ✅ Máximo 20 líneas
const validateForm = (data) => {
  if (!data.email) return false;
  if (!data.name) return false;
  return true;
};

// ✅ Una responsabilidad
const fetchAndParseBlogs = async () => {
  const response = await fetch('/api/blogs');
  return response.json();
};

// ✅ Nombres descriptivos
const isValidEmail = (email) => email.includes('@');

// ❌ Nombres genéricos
const check = (data) => data.includes('@');
```

### Condicionales

```javascript
// ✅ Legible
if (user.isAdmin) {
  renderAdminPanel();
}

// ❌ Complejo
if (user && user.role === 'admin' && user.status === 'active') {
  renderAdminPanel();
}

// ✅ Solución: Usar computed o helper
const isAdminActive = computed(() => {
  return user.value?.role === 'admin' && user.value?.status === 'active';
});
```

### Objetos y Arrays

```javascript
// ✅ Preferir destructuring
const { name, email } = user;
const [first, ...rest] = items;

// ❌ Repetitivo
const name = user.name;
const email = user.email;

// ✅ Spread operator
const newUser = { ...user, email: 'new@example.com' };

// ❌ Modificación directa
user.email = 'new@example.com';
```

## 🎨 Estilos CSS

### Estructura

```css
/* ✅ Orden lógico */
.element {
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;

  /* Display & Box Model */
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 10px;

  /* Color & Typography */
  color: #333;
  font-size: 16px;
  font-weight: 500;

  /* Effects */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Transitions */
  transition: all 0.3s ease;
}

/* ✅ Hover states */
.element:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

### Variables CSS

```css
:root {
  --color-primary: #e4e95b;
  --color-secondary: #eb4d4d;
  --color-text-primary: #111111;
  --spacing-unit: 10px;
  --border-radius-md: 8px;
  --transition-standard: 0.3s ease;
}

.button {
  background-color: var(--color-primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-standard);
}
```

## 🔒 Mejores Prácticas

### Evitar Variables Globales

```javascript
// ❌ Evitar
window.globalData = { userId: 1 };

// ✅ Usar composables o Pinia
const useAuth = () => {
  const userId = ref(1);
  return { userId };
};
```

### Evitar Lógica en Templates

```vue
<!-- ❌ Evitar: Lógica compleja -->
<div v-if="user && user.role === 'admin' && permissions.includes('write')">
  Admin Panel
</div>

<!-- ✅ Usar computed -->
<div v-if="canAccessAdminPanel">Admin Panel</div>

<script setup>
const canAccessAdminPanel = computed(() => {
  return user.value?.role === 'admin' && permissions.value.includes('write');
});
</script>
```

### Manejo de Errores

```javascript
// ✅ Capturar y manejar errores
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// ❌ Ignorar errores
const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};
```

## 📦 Importaciones

```javascript
// ✅ Agrupa importaciones
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import { validateEmail } from '@/utils/validators';

// ❌ Desorganizado
import Button from '@/components/Button.vue';
import { validateEmail } from '@/utils/validators';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
```

## ✨ Performance

```javascript
// ✅ Lazy loading de componentes
const LazyModal = defineAsyncComponent(
  () => import('@/components/Modal.vue')
);

// ✅ Memoización cuando sea necesario
const expensiveComputation = computed(() => {
  return heavyCalculation(props.data);
});

// ❌ Cálculos en template
{{ complexCalculation(item) }}
```

## 🧪 Testing

```javascript
// ✅ Nombres descriptivos para tests
describe('ContactForm', () => {
  it('should submit form with valid data', () => {});
  it('should show error when email is invalid', () => {});
});

// ❌ Nombres genéricos
describe('ContactForm', () => {
  it('works correctly', () => {});
  it('test 1', () => {});
});
```

## 📋 Checklist para Code Review

- [ ] Código sigue las convenciones de nomenclatura
- [ ] Componentes tienen `<script setup>`
- [ ] No hay `console.log` sin propósito
- [ ] Comentarios son útiles y actualizados
- [ ] Variables tienen nombres descriptivos
- [ ] Funciones tienen una única responsabilidad
- [ ] Estilos CSS usan variables globales
- [ ] No hay código duplicado
- [ ] Manejo de errores adecuado
- [ ] Responsive design validado

---

**Última actualización**: Febrero 2026  
**Versión**: 1.0.0
