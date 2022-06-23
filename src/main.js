import { createApp, defineCustomElement } from "vue";
import test from "./test.vue";

const element = defineCustomElement(Chat);

customElements.define("chat-window", element);
createApp(App).mount("#app");
