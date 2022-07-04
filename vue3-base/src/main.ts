import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

// 注册子应用
registerMicroApps([
  {
    name: 'vue3_system',
    entry: '//localhost:3001',
    container: '#vue3_system',
    activeRule: '/vue3_system', // 子应用触发规则（路径）
  },
]);
// 开启服务
start();

const app = createApp(App);
app.use(ArcoVue).mount('#app');
