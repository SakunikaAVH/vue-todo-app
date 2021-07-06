import Vue from 'vue'
import App from './App.vue'
import JsonCSV from 'vue-json-csv'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.component('downloadCsv', JsonCSV)

new Vue({
  render: h => h(App),
}).$mount('#app')

