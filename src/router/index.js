import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/gerenciar-vendas',
      name: 'gerenciar-vendas',
      component: () => import('../views/GerenciarVendas.vue')
    },
    {
      path: '/gerenciar-estoque',
      name: 'gerenciar-estoque',
      component: () => import('../views/GerenciarEstoque.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue')
    },
    {
      path: '/editar-usuario',
      name: 'editar-usuario',
      component: () => import('../views/EditarUsuario.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: () => import('../views/Relatorio.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/Produtos.vue')
    }
  ]
})

export default router
