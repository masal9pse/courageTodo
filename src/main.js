import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import store from './store'

Vue.config.productionTip = false
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCh8bJcfGdul_z5SrKz3QIHweEIFj9aoZU",
  authDomain: "vuejs-http-e3587.firebaseapp.com",
  databaseURL: "https://vuejs-http-e3587.firebaseio.com",
  projectId: "vuejs-http-e3587",
  storageBucket: "vuejs-http-e3587.appspot.com",
  messagingSenderId: "748535207103",
  appId: "1:748535207103:web:0df9dccc1356d74cca620a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
