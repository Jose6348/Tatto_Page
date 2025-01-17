<template>
  <div class="container">
    <h1 class="title">Tattoos</h1>
    <v-row class="filter-container">
      <v-col cols="12" sm="4" md="3" class="filter-label">
        Filtrar por Categoria:
      </v-col>
      <v-col cols="12" sm="12" md="9">
        <select id="category-filter" v-model="selectedCategory" class="filter-select">
          <option value="all">Todas</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </v-col>
    </v-row>
    <v-row class="products-container">
      <v-col 
        cols="12" 
        sm="12" 
        md="4" 
        lg="4" 
        v-for="produto in filteredProducts" 
        :key="produto.id"
      >
        <TattooProduct :product="produto" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import tattooData from "@/data.js";
import TattooProduct from "@/components/TattooProduct.vue";
export default {
  name: "MyServicos",
  components: {
    TattooProduct,
  },
  data() {
    return {
      produtos: tattooData,
      selectedCategory: "all",
    };
  },
  computed: {
    categories() {
      const uniqueCategories = new Set();
      this.produtos.forEach((produto) => {
        uniqueCategories.add(produto.category);
      });
      return Array.from(uniqueCategories);
    },
    filteredProducts() {
      if (this.selectedCategory === "all") {
        return this.produtos;
      } else {
        return this.produtos.filter(
          (produto) => produto.category === this.selectedCategory
        );
      }
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 100%; /* Remove o limite de largura para se adaptar a qualquer tela */
  margin: 0 auto;
  padding-top: 7em;
  background: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1.5em;
  font-weight: 700;
  color: #ffffff;
}
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  flex-wrap: wrap; /* Permite que os elementos se ajustem em telas menores */
}
.filter-label {
  margin-right: 10px;
  font-size: 1.1em;
  font-weight: 600;
  color: #ffffff;
  text-align: right;
}
.filter-select {
  padding: 10px 15px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%; /* Certifica-se de ocupar a largura total em telas menores */
}
.filter-select:focus {
  border-color: #007bff;
}
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adapta-se automaticamente */
  gap: 20px;
  padding: 0 20px; /* Adiciona um pouco de padding para evitar que os itens toquem as bordas da tela */
}
.product-item {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
/* Responsividade */
@media (max-width: 768px) {
  .title {
    font-size: 2em; /* Reduz o tamanho do título para telas menores */
  }
  .filter-label {
    text-align: center; /* Centraliza o texto da etiqueta em telas menores */
    margin-right: 0; /* Remove a margem direita para melhor usar o espaço */
  }
  .filter-container {
    flex-direction: column; /* Alinha os elementos verticalmente em telas menores */
  }
  .filter-select {
    margin-top: 10px; /* Adiciona espaçamento acima do select em telas menores */
  }
}
@media (max-width: 576px) {
  .products-container {
    grid-template-columns: 1fr; /* Uma coluna por linha para telas menores */
  }
  .product-item {
    width: 100%; /* Garante que cada item ocupe toda a largura da tela */
  }
}
</style>