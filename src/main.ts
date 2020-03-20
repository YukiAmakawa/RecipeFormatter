import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import VueAnalytics from "vue-analytics";
import config from "./configuration";

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: "UA-151730099-1",
  router
});
firebase.initializeApp(config.FIREBASE_CONFIG);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
