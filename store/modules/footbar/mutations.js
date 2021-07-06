const mutations={
	footbarChange(state,index){
		state.data.footbarList[index].checked=true
		state.data.footbarList[state.data.footbarIndex].checked=false
		state.data.footbarIndex=index
	}
}