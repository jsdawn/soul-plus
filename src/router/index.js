import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/button',
    component: () => import('../pages/button.vue')
  },
  {
    path: '/dropdown-menu',
    component: () => import('../pages/dropdownMenu.vue')
  },
  {
    path: '/overlay',
    component: () => import('../pages/overlay.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
