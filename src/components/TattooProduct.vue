<template>
  <div class="card tattoo-card">
    <div class="img-container">
      <img :src="product.image" class="card-img-top" :alt="product.name" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p v-if="product.description" class="card-text">{{ product.description }}</p>
      <div class="card-actions">
        <a href="#" class="btn btn-dark-red-gradient" @click="openWhatsApp(product)">Solicitar orçamento</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TattooProduct',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openWhatsApp(product) {
      const message = `Olá, gostaria de fazer um orçamento da tatuagem "${product.name}"`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/5519971652715?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');
    },
  },
};
</script>

<style scoped>
.tattoo-card {
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to right, #333333, #000000);
  /* Gradiente de cinza escuro para preto */
  margin: 10px 0;
}

.tattoo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.img-container {
  height: 350px;
  /* Aumentando a altura para uma imagem mais proeminente */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f8f8f8;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Cover para preencher todo o espaço */
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.card-actions {
  margin-top: auto;
  text-align: center;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-dark-red-gradient {
  /* Definindo um gradiente linear de vermelho escuro */
  background: linear-gradient(to right, #8B0000, #660000);
  /* Cores em hexadecimal: #8B0000 é um vermelho mais escuro e #660000 é ainda mais escuro */
  
  /* Removendo estilo de botão padrão */
  border: none;
  
  /* Estilizando o texto */
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  
  /* Ajustando o espaçamento interno */
  padding: 10px 20px;
  
  /* Ajustando a borda arredondada */
  border-radius: 25px;
  
  /* Adicionando uma sombra para dar um efeito de profundidade */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Efeito hover para interatividade */
  transition: all 0.3s ease;
}

.btn-dark-red-gradient:hover {
  /* Aumentando um pouco o botão ao passar o mouse */
  transform: scale(1.05);
  /* Intensificando o gradiente no hover */
  background: linear-gradient(to right, #730000, #550000);
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>