<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Gemini_Generated_Image_xlzfyaxlzfyaxlzf.jpg?raw=true" alt="Logo do Estúdio" class="img-fluid logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Início</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/estudio" class="nav-link">O Estúdio</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/servicos" class="nav-link">Serviços</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/artistas" class="nav-link">Artistas</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/contato" class="nav-link">Contato</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  emits: ['filterByCategory'],
  methods: {
    filterByCategory(category) {
      this.$emit('filterByCategory', category);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.6); /* Fundo transparente com leve opacidade */
  transition: background-color 0.3s ease; /* Suavidade na transição */
}


.navbar .nav-link {
  color: #ffffffe5; /* Texto branco */
  margin-left: 1rem; /* Espaçamento entre os itens */
  font-weight: 500; /* Destaque no texto */
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
}

.navbar .nav-link:hover {
  color: #ffcc00; /* Cor ao passar o mouse */
}

.navbar-brand img.logo {
  height: 90px; /* Ajuste da altura do logo */
}

@media (max-width: 992px) {
  .navbar .nav-link {
    margin-left: 0;
    text-align: center; /* Alinhar centralizado em telas menores */
  }
}
</style>
