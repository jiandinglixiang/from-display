import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 使用 Mock

createApp(App).use(store).use(router).mount("#app");
