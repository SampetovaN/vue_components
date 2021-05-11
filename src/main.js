import { createApp } from "vue";
import App from "./App";
import router from "@/router/index";
import store from "@/store";
import "@/assets/styles/style.scss";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
