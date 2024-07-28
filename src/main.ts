import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import echarts from "./echarts";
import axios from "axios";
const app = createApp(App)
app.config.globalProperties.$echarts = echarts;
app.provide('$echarts', echarts);
app.config.globalProperties.$axios = axios;
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.mount('#app')