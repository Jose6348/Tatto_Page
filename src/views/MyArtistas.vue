<template>
    <div class="container">
      <h1>Artistas</h1>
      <div class="row">
        <div class="col-md-4" v-for="artista in artistas" :key="artista.nome">
          <div class="card">
            <img :src="artista.foto" class="card-img-top" alt="Foto do Artista">
            <div class="card-body">
              <h5 class="card-title">{{ artista.nome }}</h5>
              <p class="card-text">{{ artista.especialidade }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyArtistas',
    data() {
      return {
        artistas: [
          { nome: 'Artista 1', foto: '...', especialidade: 'Realismo' },
          { nome: 'Artista 2', foto: '...', especialidade: 'Aquarela' },
          // Adicione mais artistas
        ]
      }
    }
  }
  </script>