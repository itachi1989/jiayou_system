const mutations={
	footbarChange(state,index){
		console.log('1')
		state.data.footbarList[state.data.footbarIndex].checked=false
		state.data.footbarList[index].checked=true
		state.data.footbarIndex=index
		
	}
}

export default mutations