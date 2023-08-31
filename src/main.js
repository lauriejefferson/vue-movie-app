import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(PrimeVue);

app.mount('#app');
