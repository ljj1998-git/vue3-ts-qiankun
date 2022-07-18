import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import { registerMicroApps, start } from 'qiankun';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import './mock';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import '@/api/interceptor';

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

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
