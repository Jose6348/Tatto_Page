<template>
  <div class="card tattoo-card">
    <div class="img-container">
      <img :src="product.image" class="card-img-top" :alt="product.name" />
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
  border: 1px solid #555;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tattoo-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 250px; /* Altura fixa para padronizar */
}

.card-img-top {
  max-width: 100%; /* Ajusta a largura da imagem ao container */
  max-height: 100%; /* Ajusta a altura da imagem ao container */
  width: auto; /* Largura automática para manter a proporção */
  height: auto; /* Altura automática para manter a proporção */
  object-fit: contain; /* A imagem se ajusta ao container sem distorcer */
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
}

.btn-primary {
  background-color: #f5b74f;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.btn-primary:hover {
  background-color: #e0a80d;
}

.d-flex.justify-content-center {
  padding: 10px;
}
</style>