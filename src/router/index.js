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
  },
  {
    path: '/popup',
    component: () => import('../pages/popup.vue')
  },
  {
    path: '/toast',
    component: () => import('../pages/toast.vue')
  },
  {
    path: '/icon',
    component: () => import('../pages/icon.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
