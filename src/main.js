// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'

 
Vue.use(Vuetify)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#main',
  store,
  router
})
