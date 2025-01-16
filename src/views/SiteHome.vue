<template>
  <div class="home-container">
    <div class="hero-section">
      <video autoplay loop muted class="background-video">
        <source src="https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/Tatto_page/4125984-uhd_4096_2160_25fps.mp4" type="video/mp4">
        Seu navegador não suporta a tag video.
      </video>
      <div class="hero-content text-start"> 
        <h1 class="display-4">PIONEIRISMO E MODERNIDADE <br> EM CADA TRAÇO</h1>
        <p class="lead">FERRACIN TATTO</p>
        <router-link to="/servicos" class="btn btn-lg btn-outline-light">VEJA NOSSAS TATTOOS</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHome'
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinhar à esquerda */
  min-height: 100vh;
  text-align: left; /* Alinhar o texto à esquerda */
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 100px 20px; /* Adicionar padding */
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  padding: 20px;
  z-index: 1;
  max-width: 800px; /* Limitar a largura máxima do conteúdo */
  margin-left: 50px; /* Adicionar margem à esquerda */
}

.hero-content h1 {
  font-size: 3rem; /* Ajustar o tamanho da fonte */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #d9b681; /* Cor do título */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Sombra no texto */
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #d9b681; /* Cor do parágrafo */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Sombra no texto */
}

.btn-outline-light {
  border-color: #d9b681; /* Cor da borda do botão */
  color: #d9b681; /* Cor do texto do botão */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra no botão */
}

.btn-outline-light:hover {
  background-color: #d9b681;
  color: #fff;
}
</style>