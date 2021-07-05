import Vue from 'vue'
import App from './App'
import store from './store'

//适配
let fontSize = '100px';
const res = uni.getSystemInfoSync();
if(res.screenWidth < 750){//根据屏幕宽度进行适配
      fontSize = 100 * (res.screenWidth / 750) + 'px';
}
Vue.prototype.$footFontSize = fontSize;

Vue.config.productionTip = false
Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
