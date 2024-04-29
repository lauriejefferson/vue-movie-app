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
import Listbox from 'primevue/listbox';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';

const pinia = createPinia();
const app = createApp(App);

app.component('Button', Button);
app.component('Card', Card);
app.component('Rating', Rating);
app.component('Listbox', Listbox);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('InputGroup', InputGroup);
app.component('Dialog', Dialog);
app.component('Textarea', Textarea);

app.use(pinia).use(PrimeVue).use(router);

app.mount('#app');
