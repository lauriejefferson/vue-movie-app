import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';

const pinia = createPinia();
const app = createApp(App);

app.component('Button', Button);
app.component('Card', Card);

app.use(pinia).use(router).use(PrimeVue, { ripple: true });

app.mount('#app');
