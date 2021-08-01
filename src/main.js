import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseAlert from "./components/UI/BaseAlert.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-alert", BaseAlert);

app.mount("#app");
