import { createRouter, createWebHistory } from 'vue-router'
import IfElseView from '../views/IfElseView.vue'
import ShowView from '../views/ShowView.vue'
import ForView from '../views/ForView.vue'
import BindKeyView from '../views/BindKeyView.vue'

const routes = [
  { path: '/', component: IfElseView },
  { path: '/vshow', component: ShowView },
  { path: '/vfor', component: ForView },
  { path: '/vbindkey', component: BindKeyView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
