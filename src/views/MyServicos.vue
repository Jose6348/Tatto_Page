<template>
  <div class="container">
    <h1>Tattoos</h1>

    <div class="filter-container">
      <label for="category-filter">Filtrar por Categoria:</label>
      <select id="category-filter" v-model="selectedCategory">
        <option value="all">Todas</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="products-container">
      <div class="product-item" v-for="produto in filteredProducts" :key="produto.id">
        <TattooProduct :product="produto" />
      </div>
    </div>
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
  padding: 20px;
  margin-top: 7em;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.filter-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filter-container label {
  margin-right: 10px;
  font-weight: bold;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-item {
  /* Estilos para cada item de produto (agora aplicados ao .tattoo-card dentro do TattooProduct) */
}
</style>