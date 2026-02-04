<template>
  <div class="page-header-section">
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h2 class="ipt-title">{{ title }}</h2>
            <span class="ipn-subtitle" v-if="subtitle">{{ subtitle }}</span>
            <nav aria-label="breadcrumb" v-if="breadcrumb" class="mt-3">
              <ol class="breadcrumb">
                <li 
                  v-for="(item, index) in breadcrumbItems" 
                  :key="index"
                  class="breadcrumb-item"
                  :class="{ active: index === breadcrumbItems.length - 1 }"
                >
                  <NuxtLink v-if="index < breadcrumbItems.length - 1" :to="item.link || '/'">
                    {{ item.name }}
                  </NuxtLink>
                  <span v-else>{{ item.name }}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  breadcrumb: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: ''
  }
})

// Parse breadcrumb string into items
const breadcrumbItems = computed(() => {
  if (!props.breadcrumb) return []
  
  return props.breadcrumb.split(' / ').map((item, index, array) => {
    const isLast = index === array.length - 1
    let link = '/'
    
    if (item.toLowerCase() === 'inicio') {
      link = '/'
    } else if (item.toLowerCase() === 'nosotros') {
      link = '/site/nosotros'
    } else if (item.toLowerCase() === 'contacto') {
      link = '/site/contacto'
    } else if (item.toLowerCase() === 'proyectos') {
      link = '/site/proyectos'
    } else if (item.toLowerCase() === 'inmuebles') {
      link = '/site/inmuebles'
    }
    
    return {
      name: item,
      link: isLast ? null : link
    }
  })
})
</script>

<style scoped>
.page-header-section {
  margin-bottom: 0;
}

.page-title {
  background: linear-gradient(135deg, #fa2c5a 0%, #fd7e14 100%);
  padding: 120px 0 80px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.page-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: url('/img/png/banner-home.png') center/cover; */
  background: rgba(0, 0, 0, 0.1);
  opacity: 0.1;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.ipt-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.ipn-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  display: block;
  margin-bottom: 20px;
}

.breadcrumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 10px 20px;
  margin-bottom: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.breadcrumb-item {
  color: rgba(255, 255, 255, 0.8);
}

.breadcrumb-item.active {
  color: #fff;
  font-weight: 600;
}

.breadcrumb-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: #fff;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "→";
  color: rgba(255, 255, 255, 0.6);
  margin: 0 8px;
}

@media (max-width: 768px) {
  .page-title {
    padding: 80px 0 50px;
  }
  
  .ipt-title {
    font-size: 2rem;
  }
  
  .ipn-subtitle {
    font-size: 1rem;
  }
  
  .breadcrumb {
    font-size: 0.875rem;
  }
}
</style>