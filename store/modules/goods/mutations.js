const mutations={
	increment(state,n) {
	      state.data.goodList[n].number++
		  console.log(n)
	    },
	subtract(state,n){
		
		state.data.goodList[n].number--
	}
}


export default mutations