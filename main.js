import Vue from 'vue'
import App from './App'
import store from './store'

function showLoading(show) {
  store.commit("showLoading", show);
}

Vue.prototype.$store = store;
Vue.prototype.$showLoading = showLoading;

Vue.config.productionTip = false
Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
