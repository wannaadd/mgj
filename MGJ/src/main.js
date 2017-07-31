
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import Flexible from './js/flexible.js'

import router from './router/index.js'

import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
Vue.use(VueLazyload,{
	loading:'../static/loading.gif',
	try:3
})


window.bus = new Vue()

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data:{
  	Bus:new Vue()
  },
  js:Flexible,
  router
})
