import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que o caminho está correto

const app = createApp(App);

app.use(router); // Registra o Vue Router na instância do Vue

app.mount('#app'); // Monta a aplicação
