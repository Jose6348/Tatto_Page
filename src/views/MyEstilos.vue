<template>
    <div class="container">
      <h1>Estilos</h1>
      <div class="row">
        <div class="col-md-4" v-for="estilo in estilos" :key="estilo.nome">
          <div class="card">
            <img :src="estilo.imagem" class="card-img-top" alt="Exemplo do Estilo">
            <div class="card-body">
              <h5 class="card-title">{{ estilo.nome }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyEstilos',
    data() {
      return {
        estilos: [
          { nome: 'Realismo', imagem: '...' },
          { nome: 'Aquarela', imagem: '...' },
          // Adicione mais estilos
        ]
      }
    }
  }
  </script>