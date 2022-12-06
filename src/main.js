import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL = process.env.BASE_BACKEND_URL;

createApp(App).mount('#app')
