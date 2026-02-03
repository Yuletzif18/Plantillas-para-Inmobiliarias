<template>
  <section class="cs_hero cs_style_1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="cs_fs_48 cs_semibold cs_mb_16">Encuentra tu hogar ideal</h1>
          <p class="cs_fs_18 cs_mb_24">Explora inmuebles y proyectos en venta y arriendo con filtros por ubicación, precio y características.</p>
          <div class="cs_btns cs_gap_12">
            <NuxtLink to="/site/inmuebles" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_radius_7">Ver Inmuebles</NuxtLink>
            <NuxtLink to="/site/proyectos" class="cs_btn cs_style_1 cs_type_2 cs_radius_7">Ver Proyectos</NuxtLink>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="/img/hero_img_1.jpg" alt="Encuentra tu hogar" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section class="cs_section cs_gray_bg">
    <div class="container">
      <h2 class="cs_fs_32 cs_semibold cs_mb_20">Búsqueda rápida</h2>
      <form class="row g-3" @submit.prevent="goSearch">
        <div class="col-md-4">
          <input v-model="filters.texto" type="text" class="form-control" placeholder="Ciudad, barrio o palabra clave" />
        </div>
        <div class="col-md-3">
          <select v-model="filters.tipo" class="form-select">
            <option value="">Tipo</option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
          </select>
        </div>
        <div class="col-md-3">
          <select v-model="filters.categoria" class="form-select">
            <option value="">Categoría</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Oficina</option>
          </select>
        </div>
        <div class="col-md-2">
          <button class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_radius_7 w-100">Buscar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const filters = reactive({ texto: '', tipo: '', categoria: '' })

const goSearch = () => {
  const q = new URLSearchParams({
    q: filters.texto || '',
    tipo: filters.tipo || '',
    cat: filters.categoria || ''
  }).toString()
  navigateTo(`/site/inmuebles?${q}`)
}

useHead({
  title: 'Inicio | Inmobiliaria',
  meta: [
    { name: 'description', content: 'Explora inmuebles y proyectos inmobiliarios.' }
  ]
})
</script>

<style scoped>
.cs_hero { padding: 60px 0; }
.cs_section { padding: 40px 0; }
</style>
