import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../pages/index.vue'), // Import your Home component
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('./pages/About.vue'), // Import your About component
//   },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
