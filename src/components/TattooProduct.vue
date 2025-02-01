<template>
  <div class="card tattoo-card">
    <div class="img-container">
      <img :src="product.image" class="card-img-top" :alt="product.name" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p v-if="product.description" class="card-text">{{ product.description }}</p>
      <div class="card-actions">
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
      const whatsappLink = `https://wa.me/5519999999999?text=${encodedMessage}`;
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
  background: linear-gradient(to right, #333333, #000000); /* Gradiente de cinza escuro para preto */
  margin: 10px 0;
}

.tattoo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.img-container {
  height: 350px; /* Aumentando a altura para uma imagem mais proeminente */
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
  object-fit: cover; /* Cover para preencher todo o espaço */
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

.btn-primary:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>