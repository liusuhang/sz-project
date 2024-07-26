import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
createApp(App).mount('#app')
App.use(ElementPlus)