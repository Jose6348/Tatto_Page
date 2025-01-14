import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Se você estiver usando vue-router

// Importando os pacotes do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importando os ícones específicos que você vai usar
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

// Adicionando os ícones à biblioteca
library.add(faInstagram, faFacebookF, faWhatsapp, faPhone, faEnvelope, faMapMarkerAlt, faSearch)

// Criando a aplicação Vue
const app = createApp(App)

// Registrando o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

// Usando o router (se aplicável)
app.use(router)

// Montando a aplicação
app.mount('#app')