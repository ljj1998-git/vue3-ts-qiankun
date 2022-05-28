import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'virtual:windi.css'; // windi css
import './assets/fonts/fonts.css'; // 自定义字体
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
// pinia
const app = createApp(App);
app.use(router).use(Antd).use(store).mount('#app');
