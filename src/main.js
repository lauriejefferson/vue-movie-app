// import 'primeflex/primeflex.css';
import '../node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';

const pinia = createPinia();
const app = createApp(App);

app.component('Button', Button);
app.component('Card', Card);
app.component('Rating', Rating);

app.use(pinia).use(router).use(PrimeVue);

app.mount('#app');
