<template>
  <div id="app">
    <!-- <TopBar /> -->
    <router-view/> 
    <NavBar :categories="categories" @filterByCategory="filterByCategory"/>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/SiteFooter.vue';
import tattooData from './data.js';
import router from './router' // Importe o roteador


export default {
  name: 'App',
  components: {
    // TopBar,
    NavBar,
    Footer,
  },
  router,
  data() {
    return {
      allProducts: tattooData,
      filteredProducts: tattooData,
      categories: []
    };
  },
  created() {
    this.extractCategories();
    
  },
  methods: {
    extractCategories() {
      const uniqueCategories = new Set();
      this.allProducts.forEach(product => {
        uniqueCategories.add(product.category);
      });
      this.categories = Array.from(uniqueCategories);
    },
    filterByCategory(category) {
        if(category === 'Todas'){
            this.filteredProducts = this.allProducts;
        } else {
            this.filteredProducts = this.allProducts.filter(product => product.category === category)
        }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  
}
</style>