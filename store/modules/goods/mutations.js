const mutations={
	increment(state,n) {
	      state.data.goodList[n].number++
	    },
	subtract(state,n){
		
		state.data.goodList[n].number--
	}
}


export default mutations