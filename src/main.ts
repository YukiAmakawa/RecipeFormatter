import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAIAPSvcGIJkVJJu0XOK-oAhlrlzUvsAUQ",
  authDomain: "recipe-formatter.firebaseapp.com",
  databaseURL: "https://recipe-formatter.firebaseio.com",
  projectId: "recipe-formatter",
  storageBucket: "recipe-formatter.appspot.com",
  messagingSenderId: "672439336459",
  appId: "1:672439336459:web:165db6e166d1605f86510e",
  measurementId: "G-3CR7GS7K15"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
