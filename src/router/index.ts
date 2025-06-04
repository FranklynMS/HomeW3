import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/experiencia',
    component: () => import ('../views/ExperienciaPage.vue')
  },
   {
    path: '/inicio',
    component: () => import ('../views/InicioPage.vue')
  },
   {
    path: '/traductor',
    component: () => import ('../views/TraductorPage.vue')
  },
   {
    path: '/sumadora',
    component: () => import ('../views/SumadoraPage.vue')
  },
   {
    path: '/tabla',
    component: () => import ('../views/TablaPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
