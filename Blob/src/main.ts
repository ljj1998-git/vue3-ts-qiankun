import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "virtual:windi.css"; //windi css
import store from "./store"; //pinia
const app = createApp(App);
app.use(router).use(store).mount("#app");
