import { createRouter, createWebHistory } from 'vue-router';
import { withScopedProvider } from 'bizic-vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: withScopedProvider(Home, 'home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      .then((About) => withScopedProvider(About.default, 'about')),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
