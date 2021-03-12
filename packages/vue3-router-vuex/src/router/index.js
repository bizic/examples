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
      .then((About) => withScopedProvider(About, 'about')),
  },
];

export default function routerFactory() {
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
}
