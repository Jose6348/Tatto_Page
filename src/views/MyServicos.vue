<template>
  <div class="container">
    <h1>Serviços</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="produto in produtos" :key="produto.id">
        <TattooProduct :product="produto" /> 
      </div>
    </div>
  </div>
</template>

<script>
import tattooData from '@/data.js'; 
import TattooProduct from '@/components/TattooProduct.vue'; // Importe o componente TattooProduct

export default {
  name: 'MyServicos',
  components: {
    TattooProduct // Registre o componente TattooProduct
  },
  data() {
    return {
      produtos: tattooData 
    };
  }
};
</script>