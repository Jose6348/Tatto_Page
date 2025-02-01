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
        sm="6" 
        md="4" 
        lg="3" 
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
  max-width: 2160px; /* Ajuste para uma largura mais comum */
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
  flex-wrap: wrap;
}

.filter-label {
  margin-right: 10px;
  font-size: 1.1em;
  font-weight: 600;
  color: #ffffff;
  text-align: right;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }
  
  .filter-label {
    text-align: center;
    margin-right: 0;
  }
  
  .filter-container {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .products-container {
    grid-template-columns: 1fr;
  }
}
</style>