import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue';

// 注册子应用
registerMicroApps([
  {
    name: 'child1',
    entry: '//localhost:8081',
    container: '#yourContainer',
    activeRule: '/child/child1', // 子应用触发规则（路径）
  },
]);
// 开启服务
start();

createApp(App).mount('#app');
