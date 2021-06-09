import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Store from "./Store";

Vue.prototype.$store = Vue.observable(Store);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
