<template>
  <div class="container artists-page">
    <h1 class="page-title">Nossos Artistas</h1>
    <div class="artists-grid">
      <div class="artist-card" v-for="artista in artistas" :key="artista.nome">
        <div class="artist-image-container">
          <img :src="artista.foto" class="artist-image" :alt="`Foto de ${artista.nome}`" />
        </div>
        <div class="artist-info">
          <h2 class="artist-name">{{ artista.nome }}</h2>
          <p class="artist-specialty">{{ artista.especialidade }}</p>
          <p class="artist-description">{{ artista.descricao }}</p>
          <div class="artist-social-links">
            <a v-if="artista.instagram" :href="artista.instagram" target="_blank" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a v-if="artista.facebook" :href="artista.facebook" target="_blank" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a v-if="artista.portfolio" :href="artista.portfolio" target="_blank" class="social-link">
              <i class="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
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
            "Gabriel é CEO da Ferracin tatto e um experiente tatuador tendo feito diversas artes tanto no Brasil como no Japão, mostrando seu talento para as mais diversas culturas. .",
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
.artists-page {
  padding: 20px;
  margin-top: 7em;
  /*background-color: #f8f8f8;  Cor de fundo suave */
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png"); /* Textura de concreto */
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
  font-weight: bold;
  color: #333; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 40px;
}

.artist-card {
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais intensa */
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff; 
}

.artist-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3); /* Sombra mais intensa no hover */
}

.artist-image-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative; /* Para o efeito de overlay */
}

.artist-image {
  width: auto;
  height: 100%;
  object-fit: contain;
  max-height: 400px; 
  transition: transform 0.3s ease; /* Transição suave para o zoom */
}

.artist-image-container:hover .artist-image {
  transform: scale(1.1); /* Efeito de zoom na imagem */
}

/* Overlay com gradiente */
.artist-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent); /* Gradiente */
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease; /* Transição suave */
}

.artist-image-container:hover::before {
  opacity: 1; /* Visível no hover */
}

.artist-info {
  padding: 20px;
}

.artist-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.artist-specialty {
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 15px;
  font-style: italic;
}

.artist-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.6; 
}

.artist-social-links {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.social-link {
  display: inline-block;
  margin-right: 20px;
  color: #555;
  font-size: 2rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #f5b74f; 
}
</style>