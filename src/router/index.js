import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/SiteHome.vue';
import Estudio from '../views/MyEstudio.vue';
import Servicos from '../views/MyServicos.vue';
import Artistas from '../views/MyArtistas.vue';
import Contato from '../views/MyContato.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/estudio', name: 'Estudio', component: Estudio },
  { path: '/servicos', name: 'Servicos', component: Servicos },
  { path: '/artistas', name: 'Artistas', component: Artistas },
  { path: '/contato', name: 'Contato', component: Contato },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
