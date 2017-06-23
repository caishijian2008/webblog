// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // data: function () {
  //   return {
  //     msg: '123'
  //   }
  // },
  // beforeCreate: function () {
  //   console.log('beforeCreate')
  // },
  // created: function () {
  //   console.log('created')
  // },
  // beforeMount: function () {
  //   console.log('beforeMount')
  // },
  // mounted: function () {
  //   console.log('mounted')
  // },
  // beforeUpdate: function () {
  //   console.log('beforeUpdate')
  // },
  // updated: function () {
  //   console.log('updated')
  // },
  // activated: function () {
  //   console.log('activated')
  // },
  // deactivated: function () {
  //   console.log('deactivated')
  // },
  // beforeDestroy: function () {
  //   console.log('beforeDestroy')
  // },
  // destroyed: function () {
  //   console.log('destroyed')
  // }
})
