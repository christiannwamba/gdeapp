import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vodal from 'vodal';

import App from './App.vue'
import router from './routes'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.component(Vodal.name, Vodal);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
