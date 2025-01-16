import Vue from 'vue'; // Importe o Vue
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify); // Adicione esta linha

export default new Vuetify({
  // Opções de configuração do Vuetify (opcional)
  theme: {
    themes: {
      light: {
        primary: '#1976D2', // Cor primária
        secondary: '#424242', // Cor secundária
        accent: '#82B1FF', // Cor de destaque
        error: '#FF5252', // Cor de erro
        info: '#2196F3', // Cor de informação
        success: '#4CAF50', // Cor de sucesso
        warning: '#FFC107' // Cor de aviso
      }
    }
  },
  icons: {
    iconfont: 'mdi' // Define o conjunto de ícones (Material Design Icons)
  }
});