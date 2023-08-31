import { createApp } from 'vue'
import { router } from './router';
// import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

createApp(App).use(router).mount('#app')
