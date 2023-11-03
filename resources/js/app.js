import { createApp } from 'vue/dist/vue.esm-bundler';
import mainapp from './components/mainapp.vue'
import routers from './routers'
import store from './store';
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'; // Import Vuetify CSS
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'typeface-fira-sans';
import '@mdi/font/css/materialdesignicons.min.css';
const vuetify = createVuetify({
    components,
    directives,
});


const app = createApp({
    components: {
    'main-app':mainapp,
    },
});

app.use(store);
app.use(vuetify);
app.use(routers);
app.mount('#app');



// Set the default base URL
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
