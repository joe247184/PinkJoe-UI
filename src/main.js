import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from "vue-router";
import Raven from './components/Raven.vue';
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Raven }
    ]
});
createApp(App).mount('#app');
