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
  justify-content: flex-start;
  min-height: 100vh;
  text-align: left;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 20px; /* Ajustado para telas menores */
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
  max-width: 800px;
  margin-left: 20px; /* Reduzido para telas menores */
  width: 100%; /* Para ocupar toda a largura em telas pequenas */
}
.hero-content h1 {
  font-size: 2rem; /* Reduzido para telas menores */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #d9b681;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
.hero-content p {
  font-size: 1.2rem; /* Reduzido para telas menores */
  margin-bottom: 1rem;
  color: #d9b681;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
.btn-outline-light {
  border-color: #d9b681;
  color: #d9b681;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1rem; /* Ajustado para telas menores */
  padding: 10px 20px; /* Ajustado para telas menores */
}
.btn-outline-light:hover {
  background-color: #d9b681;
  color: #fff;
}
/* Media queries para melhorar a responsividade em dispositivos móveis */
@media (max-width: 768px) {
  .hero-content {
    margin-left: 0; /* Remove a margem lateral em telas pequenas */
    padding: 10px; /* Reduz o preenchimento interno */
  }
  .hero-content h1 {
    font-size: 1.5rem; /* Ajuste adicional para telas muito pequenas */
  }
  .hero-content p {
    font-size: 1rem; /* Ajuste adicional para telas muito pequenas */
  }
  .hero-section {
    padding: 10px; /* Ajusta o preenchimento para telas menores */
    padding-bottom: 18em;
  }
}
</style>














