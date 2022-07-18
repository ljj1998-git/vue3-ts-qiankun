import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import pinia from "./store";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/assets/style/global.less";
import {usePersist} from 'pinia-use-persist'

pinia.use(usePersist)
const app = createApp(App);
app.use(ArcoVue).use(pinia).use(router).mount("#app");
