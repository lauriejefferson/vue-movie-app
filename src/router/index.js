import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Movie from '@/views/Movie.vue';
const baseURL = import.meta.env.VITE_BASE_URL;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(baseURL),
  routes,
});

export default router;
