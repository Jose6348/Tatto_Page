<template>
    <div class="card tattoo-card">
      <div class="img-container">
          <img :src="product.image" class="card-img-top" :alt="product.name">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-primary" @click="openWhatsApp(product)">Saiba Mais</a>
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
        const whatsappLink = `https://wa.me/5519996459448?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .tattoo-card {
    border: 1px solid #555; /* Borda mais escura */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais sutil */
    transition: box-shadow 0.3s ease; /* Transição suave para a sombra */
    height: 500px;
    display: flex;
    flex-direction: column;
    
  }
  
  .tattoo-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Sombra mais intensa no hover */
  }
  
  .img-container{
      height: 250px;
  }
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra todo o espaço */
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .card-text {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
  
  .btn-primary {
    background-color: #f5b74f; /* Cor do botão */
    border: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease; /* Transição suave para a cor do botão */
  }
  
  .btn-primary:hover {
    background-color: #e0a80d; /* Cor do botão no hover */
  }
  
  .d-flex.justify-content-center{
      margin-top: auto;
      padding: 10px;
  }
  </style>