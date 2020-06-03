import Vue from 'vue'
import App from './App.vue'
import Toast from '../packages/index'
Vue.config.productionTip = false
console.log('Toast:',Toast)
Vue.use(Toast)
new Vue({
  render: h => h(App),
}).$mount('#app')
