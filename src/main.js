import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './assets/styles.scss';

Vue.use(Vuelidate);

Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App)
})
