<template>
  <div class="container artists-page">
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="/">HOME</a></li>
      </ul>
    </nav>
    <div v-if="artistas && artistas.length > 0" class="artist-profile">
      <div class="artist-image-container">
        <img :src="artistas[0].foto" class="artist-image" :alt="`Foto de ${artistas[0].nome}`" />
      </div>
      <div class="artist-info">
        <h1 class="artist-name">{{ artistas[0].nome }}</h1>
        <div class="artist-social-links">
          <a v-if="artistas[0].instagram" :href="artistas[0].instagram" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
          <a v-if="artistas[0].facebook" :href="artistas[0].facebook" target="_blank" class="social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a v-if="artistas[0].portfolio" :href="artistas[0].portfolio" target="_blank" class="social-link">
            <i class="fas fa-globe"></i>
          </a>
        </div>
        <p class="artist-specialty">ESTILO: {{ artistas[0].especialidade }}</p>
        <p class="artist-description">{{ artistas[0].descricao }}</p>
        
        <!-- Seção de Trabalhos Recentes -->
        <div class="recent-works">
          <h2>Trabalhos Recentes</h2>
          <div class="gallery">
            <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/tatto%20Projeto.jpg?raw=true" alt="Tattoo 1" />
            <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/tatto%20Projeto%201.jpg?raw=true" alt="Tattoo 2" />
            <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/tatto%20Projeto%202.jpg?raw=true" alt="Tattoo 3" />
            
            <!-- Adicione mais imagens conforme necessário -->
          </div>
        </div>
        
        <!-- Seção de Depoimentos -->
        <div class="testimonials">
          <h2>Depoimentos</h2>
          <div class="testimonial">
            <p>"Gabriel é incrível! Ele transformou minha ideia em uma obra-prima na minha pele."</p>
            <p class="testimonial-author">- José Jorge</p>
          </div>
          <div class="testimonial">
            <p>"Profissionalismo e criatividade em cada detalhe. Recomendo fortemente!"</p>
            <p class="testimonial-author">- Vinicius Rossi</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Carregando ou sem dados de artista disponíveis...</div>
  </div>
</template>

<script>
export default {
  name: "MyArtistas",
  data() {
    return {
      artistas: [
        {
          nome: "Gabriel Ferracin",
          foto: "https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/gabrielferracin-20250115-0001.jpg?raw=true",
          especialidade: "Tatuagens de diversos estilos",
          descricao:
            "Gabriel é CEO da Ferracin tattoo e um experiente tatuador tendo feito diversas artes tanto no Brasil como no Japão, mostrando seu talento para as mais diversas culturas.",
          instagram: "https://www.instagram.com/ferracin_tattoo/",
          facebook: null,
          portfolio: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #000;
  color: white;
  width: 100%;
  padding: 20px;
  height: 70%;
}

.artists-page {
  width: 100%;
  max-width: 2160px;
  height: auto;
  margin: 0 auto;
  padding-top: 7em;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: #d9b681;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
}

.artist-profile {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}

.artist-image-container {
  position: relative;
  width: 500px;
  height: auto;
  margin-right: 40px;
}

.artist-image {
  width: 100%;
  height: 60vh;
  border: 2px solid #d9b681;
  border-radius: 10px;
  padding: 10px;
}

.artist-image-container::before,
.artist-image-container::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #d9b681;
  transform: rotate(45deg);
}

.artist-image-container::before {
  top: -10px;
  left: -10px;
}

.artist-image-container::after {
  bottom: -10px;
  right: -10px;
}

.artist-info {
  flex: 1;
}

.artist-name {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #d9b681;
}

.artist-social-links {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.social-link {
  color: #d9b681;
  font-size: 1.5rem;
  text-decoration: none;
}

.artist-specialty {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 15px;
  font-style: italic;
}

.artist-description {
  font-size: 1.5rem;
  color: #aaa;
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
}

.recent-works {
  margin-top: 40px;
}

.recent-works h2 {
  font-size: 2rem;
  color: #d9b681;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
justify-content: center;
}

.gallery img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.testimonials {
  margin-top: 40px;
}

.testimonials h2 {
  font-size: 2rem;
  color: #d9b681;
  margin-bottom: 20px;
}

.testimonial {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.testimonial p {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
}

.testimonial-author {
  font-style: italic;
  text-align: right;
  margin-top: 10px;
  color: #aaa;
}

/* Responsividade */
@media (max-width: 768px) {
  .artist-profile {
    flex-direction: column;
    align-items: center;
  }

  .artist-image-container {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .artist-name {
    font-size: 2.5rem;
  }

  .artist-specialty {
    font-size: 1rem;
  }

  .artist-description {
    font-size: 0.9rem;
  }
  .artist-profile {
    flex-direction: column;
    align-items: center;
  }

  .artist-image-container {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .artist-name {
    font-size: 2.5rem;
  }

  .artist-specialty {
    font-size: 1rem;
  }

  .artist-description {
    font-size: 0.9rem;
  }

  .gallery img {
    width: 100px;
    height: 100px;
  }
}
</style>