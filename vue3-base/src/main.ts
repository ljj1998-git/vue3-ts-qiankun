import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue';

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

createApp(App).mount('#app');
