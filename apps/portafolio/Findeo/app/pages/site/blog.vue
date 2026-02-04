<template>
  <div id="wrapper">
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Blog</h2>
            <span>Mantente al día con las últimas noticias</span>
            <nav id="breadcrumbs">
              <ul>
                <li><NuxtLink to="/site">Inicio</NuxtLink></li>
                <li>Blog</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="blog-page">
        <div class="row">
          <div class="col-md-8">
            <div class="blog-post">
              <NuxtLink to="/site/blog-post/1" class="post-img">
                <img src="/img/blog-post-01a.jpg" alt="">
              </NuxtLink>
              <div class="post-content">
                <h3><NuxtLink to="/site/blog-post/1">8 consejos para ayudarte a encontrar un nuevo hogar</NuxtLink></h3>
                <ul class="post-meta">
                  <li>Noviembre 12, 2016</li>
                  <li><a href="#">5 Comentarios</a></li>
                </ul>
                <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa...</p>
                <NuxtLink to="/site/blog-post/1" class="read-more">Leer más <i class="fa fa-angle-right"></i></NuxtLink>
              </div>
            </div>
            <div class="blog-post">
              <NuxtLink to="/site/blog-post/2" class="post-img">
                <img src="/img/blog-post-02a.jpg" alt="">
              </NuxtLink>
              <div class="post-content">
                <h3><NuxtLink to="/site/blog-post/2">Colores de dormitorio de los que nunca te arrepentirás</NuxtLink></h3>
                <ul class="post-meta">
                  <li>Noviembre 9, 2016</li>
                  <li><a href="#">5 Comentarios</a></li>
                </ul>
                <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa...</p>
                <NuxtLink to="/site/blog-post/2" class="read-more">Leer más <i class="fa fa-angle-right"></i></NuxtLink>
              </div>
            </div>
            <div class="blog-post">
              <NuxtLink to="/site/blog-post/3" class="post-img">
                <img src="/img/blog-post-03a.jpg" alt="">
              </NuxtLink>
              <div class="post-content">
                <h3><NuxtLink to="/site/blog-post/3">Qué hacer un año antes de comprar un apartamento</NuxtLink></h3>
                <ul class="post-meta">
                  <li>Octubre 26, 2016</li>
                  <li><a href="#">3 Comentarios</a></li>
                </ul>
                <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa...</p>
                <NuxtLink to="/site/blog-post/3" class="read-more">Leer más <i class="fa fa-angle-right"></i></NuxtLink>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="pagination-container">
              <nav class="pagination">
                <ul>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </nav>
              <nav class="pagination-next-prev">
                <ul>
                  <li><a href="#" class="prev">Anterior</a></li>
                  <li><a href="#" class="next">Siguiente</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sidebar right">
              <div class="widget">
                <h3 class="margin-top-0 margin-bottom-25">Buscar en el blog</h3>
                <div class="search-blog-input">
                  <div class="input"><input class="search-field" type="text" placeholder="Escribe y presiona enter" value=""/></div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="widget">
                <h3>¿Tienes alguna pregunta?</h3>
                <div class="info-box margin-bottom-10">
                  <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                  <NuxtLink to="/site/contacto" class="button fullwidth margin-top-20"><i class="fa fa-envelope-o"></i> Escríbenos</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Listado de noticias del blog
</script>
