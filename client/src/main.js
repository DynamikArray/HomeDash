import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import("./plugins/vueSocketIo");

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

//Load our external config file
//Do not include sensitive information
//It is purely runtime config values
fetch(process.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
    Vue.prototype.$config = config;

    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  });
