import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret , faUserAlt, faHeadphonesAlt, faExclamationCircle, faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret , faUserAlt, faHeadphonesAlt, faExclamationCircle, faCompactDisc)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
const router = new VueRouter({routes, mode:'history'});

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
