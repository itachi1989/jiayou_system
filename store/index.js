import Vue from 'vue'
import Vuex from 'vuex'
import purse from './modules/purse/purse.js'
import bank from './modules/bank/bank.js'
import person from './modules/person/person.js'
import business from './modules/business/business.js'
import goods from './modules/goods/goods.js'

Vue.use(Vuex)


export default new Vuex.Store({
		modules:{
			purse,
			bank,
			person,
			business,
			goods
		}	
})